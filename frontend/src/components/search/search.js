import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import isHotkey from 'is-hotkey';
import MediaQuery from 'react-responsive';
import { seafileAPI } from '../../utils/seafile-api';
import { gettext, siteRoot, username, enableSeafileAI } from '../../utils/constants';
import SearchResultItem from './search-result-item';
import { Utils } from '../../utils/utils';
import { isMac } from '../../utils/extra-attributes';
import toaster from '../toast';

const INDEX_STATE = {
  RUNNING: 'running',
  UNCREATED: 'uncreated',
  FINISHED: 'finished'
};

const SEARCH_MODE = {
  SIMILARITY: 'similarity',
  NORMAL: 'normal',
};

const propTypes = {
  repoID: PropTypes.string,
  placeholder: PropTypes.string,
  onSearchedClick: PropTypes.func.isRequired,
  isPublic: PropTypes.bool,
  isLibView: PropTypes.bool,
  repoName: PropTypes.string,
};

const PER_PAGE = 10;
const controlKey = isMac() ? '⌘' : 'Ctrl';

class Search extends Component {

  constructor(props) {
    super(props);
    this.baseSearchPageURL = `${siteRoot}search/`;
    this.state = {
      width: 'default',
      value: '',
      resultItems: [],
      highlightIndex: 0,
      page: 0,
      isLoading: false,
      hasMore: true,
      isMaskShow: false,
      isResultShow: false,
      isResultGetted: false,
      isCloseShow: false,
      isSearchInputShow: false, // for mobile
      searchPageUrl: this.baseSearchPageURL,
      searchMode: SEARCH_MODE.NORMAL,
      indexState: INDEX_STATE.UNCREATED,
    };
    this.inputValue = '';
    this.highlightRef = null;
    this.source = null; // used to cancel request;
    this.inputRef = React.createRef();
    this.searchContainer = React.createRef();
    this.searchResultListRef = React.createRef();
    this.timer = null;
    this.indexStateTimer = null;
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onDocumentKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onDocumentKeydown);
    this.indexStateTimer && clearInterval(this.indexStateTimer);
    this.timer && clearTimeout(this.timer);
  }

  onDocumentKeydown = (e) => {
    if (isHotkey('mod+f')(e)) {
      e.preventDefault();
      this.onFocusHandler();
      if (this.inputRef && this.inputRef.current) {
        this.inputRef.current.focus();
      }
    }
    else if (isHotkey('esc', e)) {
      e.preventDefault();
      this.inputRef && this.inputRef.current && this.inputRef.current.blur();
      this.resetToDefault();
    } else if (isHotkey('enter', e)) {
      this.onEnter(e);
    } else if (isHotkey('up', e)) {
      this.onUp(e);
    } else if (isHotkey('down', e)) {
      this.onDown(e);
    }
  };

  onFocusHandler = () => {
    const { searchMode, indexState: currentIndexState } = this.state;
    const { repoID } = this.props;
    this.setState({ width: '570px', isMaskShow: true, isCloseShow: true }, () => {
      if (searchMode !== SEARCH_MODE.SIMILARITY) return;
      if (currentIndexState === INDEX_STATE.FINISHED) return;
      seafileAPI.queryLibraryIndexState(repoID).then(res => {
        const { state: indexState, task_id: taskId } = res.data;
        this.setState({ indexState }, () => {
          if (indexState !== INDEX_STATE.RUNNING) return;
          this.queryIndexTaskStatus(taskId);
        });
      }).catch(error => {
        this.setState({ indexState: INDEX_STATE.UNCREATED });
      });
    });
  };

  onCloseHandler = () => {
    this.resetToDefault();
  };

  onUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { highlightIndex } = this.state;
    if (highlightIndex > 0) {
      this.setState({ highlightIndex: highlightIndex - 1 }, () => {
        if (this.highlightRef) {
          const { top, height } = this.highlightRef.getBoundingClientRect();
          if (top - height < 0) {
            this.searchContainer.current.scrollTop -= height;
          }
        }
      });
    }
  };

  onDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { highlightIndex, resultItems } = this.state;
    if (highlightIndex < resultItems.length - 1) {
      this.setState({ highlightIndex: highlightIndex + 1 }, () => {
        if (this.highlightRef) {
          const { top, height } = this.highlightRef.getBoundingClientRect();
          const outerHeight = 300;
          if (top > outerHeight) {
            this.searchContainer.current.scrollTop += height;
          }
        }
      });
    }
  };

  onEnter = (e) => {
    e.preventDefault();
    let item = this.state.resultItems[this.state.highlightIndex];
    if (item) {
      if (document.activeElement) {
        document.activeElement.blur();
      }
      this.onItemClickHandler(item);
    }
  };

  onItemClickHandler = (item) => {
    this.resetToDefault();
    this.props.onSearchedClick(item);
  };

  onChangeHandler = (event) => {
    const { searchMode } = this.state;
    const newValue = event.target.value;
    this.setState({ value: newValue }, () => {
      if (this.inputValue === newValue.trim()) return;
      this.inputValue = newValue.trim();
      this.onSearch(searchMode === SEARCH_MODE.NORMAL);
    });
  };

  onKeydownHandler = (event) => {
    if (isHotkey('enter', event)) {
      if (this.state.searchMode === SEARCH_MODE.NORMAL) return;
      this.onSearch(true);
    }
  };

  onSearch = (isGetSearchResult) => {
    const { value } = this.state;
    const { repoID } = this.props;
    const _this = this;
    this.timer && clearTimeout(this.timer);

    if (_this.inputValue === '' || _this.getValueLength(_this.inputValue) < 3) {
      this.setState({
        highlightIndex: 0,
        resultItems: [],
        isResultShow: false,
        isResultGetted: false
      });
      return;
    }
    if (!isGetSearchResult) return;

    const queryData = {
      q: value,
      search_repo: repoID ? repoID : 'all',
      search_ftypes: 'all',
    };
    this.timer = setTimeout(_this.getSearchResult(queryData), 500);
  };

  getSearchResult = (queryData) => {
    if (this.source) {
      this.source.cancel('prev request is cancelled');
    }
    this.setState({
      isResultShow: true,
      isResultGetted: false,
      resultItems: [],
      highlightIndex: 0,
    });
    this.source = seafileAPI.getSource();
    this.sendRequest(queryData, this.source.token, 1);
  };

  sendRequest = (queryData, cancelToken, page) => {
    let isPublic = this.props.isPublic;
    this.queryData = queryData;

    if (isPublic) {
      seafileAPI.searchFilesInPublishedRepo(queryData.search_repo, queryData.q, page, PER_PAGE).then(res => {
        this.source = null;
        if (res.data.total > 0) {
          this.setState({
            resultItems: [...this.state.resultItems, this.formatResultItems(res.data.results)],
            isResultGetted: true,
            page: page + 1,
            isLoading: false,
            hasMore: res.data.has_more,
          });
        } else {
          this.setState({
            highlightIndex: 0,
            resultItems: [],
            isLoading: false,
            isResultGetted: true,
            hasMore: res.data.has_more,
          });
        }
      }).catch(error => {
        let errMessage = Utils.getErrorMsg(error);
        toaster.danger(errMessage);
        this.setState({ isLoading: false });
      });
    } else {
      this.updateSearchPageURL(queryData);
      queryData['per_page'] = PER_PAGE;
      queryData['page'] = page;
      if (this.state.searchMode === SEARCH_MODE.NORMAL) {
        this.onNormalSearch(queryData, cancelToken, page);
      } else {
        this.onSimilaritySearch(queryData, cancelToken, page);
      }
    }
  };

  onNormalSearch = (queryData, cancelToken, page) => {
    seafileAPI.searchFiles(queryData, cancelToken).then(res => {
      this.source = null;
      if (res.data.total > 0) {
        this.setState({
          resultItems: [...this.state.resultItems, ...this.formatResultItems(res.data.results)],
          isResultGetted: true,
          isLoading: false,
          page: page + 1,
          hasMore: res.data.has_more,
        });
        return;
      }
      this.setState({
        highlightIndex: 0,
        resultItems: [],
        isLoading: false,
        isResultGetted: true,
        hasMore: res.data.has_more,
      });
    }).catch(error => {
      /* eslint-disable */
      console.log(error);
      this.setState({ isLoading: false });
    });
  };

  onSimilaritySearch = (queryData, cancelToken, page) => {
    const { indexState } = this.state;
    if (indexState === INDEX_STATE.UNCREATED) {
      toaster.warning(gettext('Please create index first.'));
      return;
    }
    if (indexState === INDEX_STATE.RUNNING) {
      toaster.warning(gettext('Indexing, please try again later.'));
      return;
    }
    seafileAPI.similaritySearchFiles(queryData, cancelToken).then(res => {
      this.source = null;
      if (res.data && res.data.children_list.length > 0) {
        this.setState({
          resultItems: [...this.state.resultItems, ...this.formatSimilarityItems(res.data.children_list)],
          isResultGetted: true,
          isLoading: false,
          page: page + 1,
          hasMore: res.data.has_more,
        });
        return;
      }
      this.setState({
        highlightIndex: 0,
        resultItems: [],
        isLoading: false,
        isResultGetted: true,
        hasMore: res.data.has_more,
      });
    }).catch(error => {
      /* eslint-disable */
      console.log(error);
      this.setState({ isLoading: false });
    });
  };

  onResultListScroll = (e) => {
    // Load less than 100 results
    if (!this.state.hasMore || this.state.isLoading || this.state.resultItems.length > 100) {
      return;
    }
    const listPadding = 20;
    if (e.target.scrollTop + e.target.clientHeight + listPadding > this.searchResultListRef.current.clientHeight - 10) {
      this.setState({isLoading: true}, () => {
        this.source = seafileAPI.getSource();
        this.sendRequest(this.queryData, this.source.token, this.state.page);
      });
    }
  };

  updateSearchPageURL(queryData) {
    let params = '';
    for (let key in queryData) {
      params += key + '=' + encodeURIComponent(queryData[key]) + '&';
    }
    this.setState({searchPageUrl: `${this.baseSearchPageURL}?${params.substring(0, params.length - 1)}`});
  }

  getValueLength(str) {
    var i = 0, code, len = 0;
    for (; i < str.length; i++) {
      code = str.charCodeAt(i);
      if (code == 10) { //solve enter problem
        len += 2;
      } else if (code < 0x007f) {
        len += 1;
      } else if (code >= 0x0080 && code <= 0x07ff) {
        len += 2;
      } else if (code >= 0x0800 && code <= 0xffff) {
        len += 3;
      }
    }
    return len;
  }

  formatResultItems(data) {
    let items = [];
    for (let i = 0; i < data.length; i++) {
      items[i] = {};
      items[i]['index'] = [i];
      items[i]['name'] = data[i].name;
      items[i]['path'] = data[i].fullpath;
      items[i]['repo_id'] = data[i].repo_id;
      items[i]['repo_name'] = data[i].repo_name;
      items[i]['is_dir'] = data[i].is_dir;
      items[i]['link_content'] = decodeURI(data[i].fullpath).substring(1);
      items[i]['content'] = data[i].content_highlight;
      items[i]['thumbnail_url'] = data[i].thumbnail_url;
    }
    return items;
  }

  formatSimilarityItems(data) {
    let items = [];
    let repo_id = this.props.repoID;
    for (let i = 0; i < data.length; i++) {
      items[i] = {};
      items[i]['index'] = [i];
      items[i]['name'] = data[i].path.substring(data[i].path.lastIndexOf('/')+1);
      items[i]['path'] = data[i].path;
      items[i]['repo_id'] = repo_id;
      items[i]['repo_name'] = this.props.repoName;
      items[i]['is_dir'] = false;
      items[i]['link_content'] = decodeURI(data[i].path).substring(1);
      items[i]['content'] = data[i].sentence;
      items[i]['thumbnail_url'] = '';
    }
    return items;
  }

  resetToDefault() {
    this.inputValue = '';
    this.setState({
      width: '',
      value: '',
      isMaskShow: false,
      isCloseShow: false,
      isResultShow: false,
      isResultGetted: false,
      resultItems: [],
      highlightIndex: 0,
      isSearchInputShow: false,
    });
  }

  renderSearchResult() {
    const { resultItems, highlightIndex, indexState, searchMode, width } = this.state;
    if (!width) return null;
    if (searchMode === SEARCH_MODE.SIMILARITY && indexState === INDEX_STATE.UNCREATED) {
      return (
        <div className="search-mode-similarity-index-status index-status-uncreated" onClick={this.onCreateIndex}>
          {gettext('Click create index')}
        </div>
      );
    }

    if (searchMode === SEARCH_MODE.SIMILARITY && indexState === INDEX_STATE.RUNNING) {
      return (
        <div className="search-mode-similarity-index-status">
          {gettext('Indexing...')}
        </div>
      );
    }

    if (!this.state.isResultShow) return null;
    if (!this.state.isResultGetted || this.getValueLength(this.inputValue) < 3) {
      return (
        <span className="loading-icon loading-tip"></span>
      );
    }
    if (!resultItems.length) {
      return (
        <div className="search-result-none">{gettext('No results matching.')}</div>
      );
    }

    const results = (
      <ul className="search-result-list" ref={this.searchResultListRef}>
        {resultItems.map((item, index) => {
          const isHighlight = index === highlightIndex;
          return (
            <SearchResultItem
              key={index}
              item={item}
              onItemClickHandler={this.onItemClickHandler}
              isHighlight={isHighlight}
              setRef={isHighlight ? (ref) => {this.highlightRef = ref;} : () => {}}
            />
          );
        })}
      </ul>
    );

    return (
      <>
        <MediaQuery query="(min-width: 768px)">
          <div className="search-result-list-container">{results}</div>
        </MediaQuery>
        <MediaQuery query="(max-width: 767.8px)">
          {results}
        </MediaQuery>
      </>
    );
  }

  onSearchToggle = () => {
    this.setState({
      isSearchInputShow: !this.state.isSearchInputShow,
      isMaskShow: !this.state.isMaskShow,
    });
  };

  onChangeSearchMode = (event) => {
    const searchMode = event.target.getAttribute('mode-type');
    if (searchMode === this.state.searchMode) return;
    const { repoID } = this.props;
    const { indexState: currentIndexState } = this.state;
    this.timer && clearTimeout(this.timer);
    this.setState({ searchMode }, () => {
      if (searchMode === SEARCH_MODE.NORMAL) {
        this.onSearch();
        this.indexStateTimer && clearInterval(this.indexStateTimer);
        return;
      }
  
      if (searchMode === SEARCH_MODE.SIMILARITY) {
        if (currentIndexState === INDEX_STATE.FINISHED) {
          this.onSearch(true);
          return;
        }
        seafileAPI.queryLibraryIndexState(repoID).then(res => {
          const { state: indexState, task_id: taskId } = res.data;
          this.setState({ indexState }, () => {
            if (indexState === INDEX_STATE.FINISHED) {
              this.onSearch(true);
              return;
            }
            if (indexState === INDEX_STATE.RUNNING) {
              this.queryIndexTaskStatus(taskId, () => this.onSearch(true));
              return;
            }
          });
        }).catch(error => {
          this.setState({ indexState: INDEX_STATE.UNCREATED });
        });
      }
    });
  };

  queryIndexTaskStatus = (taskId, callback) => {
    if (!taskId) return;
    this.indexStateTimer = setInterval(() => {
      seafileAPI.queryIndexTaskStatus(taskId).then(res => {
        const isFinished = res.data.is_finished;
        if (isFinished) {
          this.setState({ indexState: INDEX_STATE.FINISHED }, () => {
            callback && callback();
          });
          this.indexStateTimer && clearInterval(this.indexStateTimer);
          this.indexStateTimer = null;
        }
      }).catch(error => {
        this.indexStateTimer && clearInterval(this.indexStateTimer);
        this.indexStateTimer = null;
        const errorMsg = Utils.getErrorMsg(error);
        toaster.danger(errorMsg);
        this.setState({ indexState: INDEX_STATE.UNCREATED });
      });
    }, 3000);
  };

  onCreateIndex = () => {
    this.setState({ indexState: INDEX_STATE.RUNNING });
    seafileAPI.createLibraryIndex(this.props.repoID).then(res => {
      const taskId = res.data.task_id;
      this.queryIndexTaskStatus(taskId);
    }).catch(error => {
      const errorMsg = Utils.getErrorMsg(error);
      toaster.danger(errorMsg);
      this.setState({ indexState: INDEX_STATE.UNCREATED });
    });
  };

  render() {
    let width = this.state.width !== 'default' ? this.state.width : '';
    let style = {'width': width};
    const { searchPageUrl, isMaskShow, searchMode, indexState, isCloseShow } = this.state;
    const placeholder = `${this.props.placeholder}${isMaskShow ? '' : ` (${controlKey} + f )`}`;
    return (
      <Fragment>
        <MediaQuery query="(min-width: 768px)">
          <div className="search">
            <div className={`search-mask ${isMaskShow ? 'show' : 'hide'}`} onClick={this.onCloseHandler}></div>
            <div className={`search-container ${isMaskShow ? 'show' : ''}`}>
              <div className={`input-icon ${isMaskShow ? 'mb-1' : ''}`}>
                <i className="search-icon-left input-icon-addon fas fa-search"></i>
                <input
                  type="text"
                  className="form-control search-input"
                  name="query"
                  placeholder={placeholder}
                  style={style}
                  value={this.state.value}
                  onFocus={this.onFocusHandler}
                  onChange={this.onChangeHandler}
                  autoComplete="off"
                  ref={this.inputRef}
                  readOnly={isCloseShow && enableSeafileAI && SEARCH_MODE.SIMILARITY === searchMode && indexState !== INDEX_STATE.FINISHED}
                  onKeyDown={this.onKeydownHandler}
                />
                {(this.state.isCloseShow && username) &&
                  <a href={searchPageUrl} className="search-icon-right input-icon-addon fas fa-external-link-alt search-icon-arrow"></a>
                }
                {this.state.isCloseShow &&
                  <button type="button" className="search-icon-right input-icon-addon fas fa-times border-0 bg-transparent mr-4" onClick={this.onCloseHandler} aria-label={gettext('Close')}></button>
                }
              </div>
              <div
                className="search-result-container dropdown-search-result-container"
                onScroll={this.onResultListScroll}
                ref={this.searchContainer}
              >
                {isCloseShow && enableSeafileAI && this.props.isLibView &&
                  <div className="search-mode-container">
                    <div className={`search-mode-item ${SEARCH_MODE.NORMAL === searchMode ? 'search-mode-active' : ''}`} mode-type={SEARCH_MODE.NORMAL} onClick={this.onChangeSearchMode}>{gettext('Normal search')}</div>
                    <div className={`search-mode-item ${SEARCH_MODE.SIMILARITY === searchMode ? 'search-mode-active' : ''}`} mode-type={SEARCH_MODE.SIMILARITY} onClick={this.onChangeSearchMode}>{gettext('Similarity search')}</div>
                  </div>
                }
                {this.renderSearchResult()}
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 767.8px)">
          <div className="search-icon-container">
            <i className="search-icon fas fa-search" onClick={this.onSearchToggle}></i>
          </div>
          {this.state.isSearchInputShow &&
            <div className="search">
              <div className={`search-mask ${isMaskShow ? '' : 'hide'}`} onClick={this.onCloseHandler}></div>
              <div className="search-container">
                <div className="input-icon">
                  <i className="search-icon-left input-icon-addon fas fa-search"></i>
                  <input
                    type="text"
                    className="form-control search-input"
                    name="query"
                    placeholder={placeholder}
                    style={style}
                    value={this.state.value}
                    onFocus={this.onFocusHandler}
                    onChange={this.onChangeHandler}
                    autoComplete="off"
                  />
                  {(this.state.isCloseShow && username) &&
                    <a href={searchPageUrl} className="search-icon-right input-icon-addon fas fa-external-link-alt search-icon-arrow"></a>
                  }
                  {this.state.isCloseShow &&
                    <button type="button" className="search-icon-right input-icon-addon fas fa-times border-0 bg-transparent" onClick={this.onCloseHandler} aria-label={gettext('Close')}></button>
                  }
                </div>
                <div className="search-result-container dropdown-search-result-container" onScroll={this.onResultListScroll}>
                  {this.renderSearchResult()}
                </div>
              </div>
            </div>
          }
        </MediaQuery>
      </Fragment>
    );
  }
}

Search.propTypes = propTypes;

export default Search;
