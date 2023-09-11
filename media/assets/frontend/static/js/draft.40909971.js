"use strict";(self.webpackChunkseahub_frontend=self.webpackChunkseahub_frontend||[]).push([[91],{84411:function(e,t,n){var i=n(15671),s=n(43144),o=n(97326),a=n(60136),r=n(29388),l=n(72791),c=n(54164),d=n(81815),m=(n(61293),n(50850)),h=n(53585),u=n(22228),f=n(82388),v=n(63446),p=n(57078),g=n(35771),w=n(60693),x=n(66440),C=n(7876),j=n(46762),N=n(5474),I=n(85887),Z=n(36482),y=n(50473),S=n(29370),b=n(59194).Z;var D=p().use(g,{commonmark:!0}).use(x).use(w).use(C,{allowDangerousHTML:!0}).use(N).use(j).use((function(e){var t=I(e,this.data("settings")),n=b(S,{attributes:{input:["type"],li:["className"],code:["className"]},tagNames:["input","code"]});this.Compiler=function(e){var i=y(e,n);return Z(i,t)}})),k=(p().use(g,{commonmark:!0}).use(w),n(61599)),T=n(20387),R=n(59508),L=n(52919),_=n(95996),M=n(51832),O=(n(35364),n(80184)),E=function(e){(0,a.Z)(n,e);var t=(0,r.Z)(n);function n(e){var s;return(0,i.Z)(this,n),(s=t.call(this,e)).handleCommentChange=function(e){s.setState({comment:e.target.value})},s.submitComment=function(){var e=s.state.comment.trim();e.length>0&&(u.I.postComment(h.KT,h.uW,e).then((function(){s.props.listComments()})).catch((function(e){var t=_.c.getErrorMsg(e);M.Z.danger(t)})),s.setState({comment:""}))},s.resolveComment=function(e){u.I.updateComment(h.KT,e.target.id,"true").then((function(e){s.props.listComments()})).catch((function(e){var t=_.c.getErrorMsg(e);M.Z.danger(t)}))},s.editComment=function(e,t){u.I.updateComment(h.KT,e,null,null,t).then((function(e){s.props.listComments()})).catch((function(e){var t=_.c.getErrorMsg(e);M.Z.danger(t)}))},s.deleteComment=function(e){u.I.deleteComment(h.KT,e.target.id).then((function(e){s.props.listComments()})).catch((function(e){var t=_.c.getErrorMsg(e);M.Z.danger(t)}))},s.scrollToQuote=function(e,t,n){s.props.scrollToQuote(e,t,n),s.setState({comment:""})},s.state={showResolvedComment:!0,comment:""},s}return(0,s.Z)(n,[{key:"componentWillReceiveProps",value:function(e){if(this.props.commentsList.length<e.commentsList.length){var t=this;setTimeout((function(){t.refs.commentsList.scrollTo(0,1e4)}),100)}}},{key:"render",value:function(){var e=this,t=this.props.commentsList;return(0,O.jsxs)("div",{className:"seafile-comment h-100",children:[(0,O.jsx)("div",{className:"flex-fill o-auto",children:t.length>0?(0,O.jsx)("ul",{className:"seafile-comment-list",ref:"commentsList",children:t.map((function(t,n){return(0,O.jsx)(q,{item:t,showResolvedComment:e.state.showResolvedComment,resolveComment:e.resolveComment,editComment:e.editComment,scrollToQuote:e.scrollToQuote,deleteComment:e.deleteComment},n)}))}):(0,O.jsx)("p",{className:"text-center my-4",children:(0,h.ih)("No comment yet.")})}),(0,O.jsxs)("div",{className:"seafile-comment-footer flex-shrink-0",children:[(0,O.jsx)("textarea",{className:"add-comment-input",value:this.state.comment,placeholder:(0,h.ih)("Add a comment..."),onChange:this.handleCommentChange,clos:"100",rows:"3",warp:"virtual"}),(0,O.jsx)("div",{className:"comment-submit-container",children:(0,O.jsx)(d.Z,{className:"submit-comment",color:"primary",size:"sm",onClick:this.submitComment,children:(0,h.ih)("Submit")})})]})]})}}]),n}(l.Component),q=function(e){(0,a.Z)(n,e);var t=(0,r.Z)(n);function n(e){var s;return(0,i.Z)(this,n),(s=t.call(this,e)).toggleDropDownMenu=function(){s.setState({dropdownOpen:!s.state.dropdownOpen})},s.convertComment=function(e){D.process(e.comment).then((function(e){var t=String(e);s.setState({comment:t})})),D.process(e.quote).then((function(e){var t=String(e);s.setState({quote:t})}))},s.scrollToQuote=function(){var e=s.props.item;s.props.scrollToQuote(e.newIndex,e.oldIndex,e.quote)},s.toggleEditComment=function(){s.setState({editable:!s.state.editable})},s.updateComment=function(e){var t=s.state.newComment;s.props.item.comment!==t&&s.props.editComment(e.target.id,t),s.toggleEditComment()},s.handleCommentChange=function(e){s.setState({newComment:e.target.value})},s.state={dropdownOpen:!1,comment:"",quote:"",newComment:s.props.item.comment,editable:!1},s}return(0,s.Z)(n,[{key:"componentWillMount",value:function(){this.convertComment(this.props.item)}},{key:"componentWillReceiveProps",value:function(e){this.convertComment(e.item)}},{key:"render",value:function(){var e=this.props.item;return e.resolved&&!this.props.showResolvedComment?null:this.state.editable?(0,O.jsxs)("li",{className:"seafile-comment-item",id:e.id,children:[(0,O.jsxs)("div",{className:"seafile-comment-info",children:[(0,O.jsx)("img",{className:"avatar",src:e.avatarUrl,alt:""}),(0,O.jsxs)("div",{className:"reviewer-info",children:[(0,O.jsx)("div",{className:"reviewer-name ellipsis",children:e.name}),(0,O.jsx)("div",{className:"review-time",children:e.time})]})]}),(0,O.jsxs)("div",{className:"seafile-edit-comment",children:[(0,O.jsx)("textarea",{className:"edit-comment-input",value:this.state.newComment,onChange:this.handleCommentChange,clos:"100",rows:"3",warp:"virtual"}),(0,O.jsx)(d.Z,{className:"comment-btn",color:"primary",size:"sm",onClick:this.updateComment,id:e.id,children:(0,h.ih)("Update")})," ",(0,O.jsx)(d.Z,{className:"comment-btn",color:"secondary",size:"sm",onClick:this.toggleEditComment,children:(0,h.ih)("Cancel")})]})]}):(0,O.jsxs)("li",{className:e.resolved?"seafile-comment-item seafile-comment-item-resolved":"seafile-comment-item",id:e.id,children:[(0,O.jsxs)("div",{className:"seafile-comment-info",children:[(0,O.jsx)("img",{className:"avatar",src:e.avatarUrl,alt:""}),(0,O.jsxs)("div",{className:"reviewer-info",children:[(0,O.jsx)("div",{className:"reviewer-name ellipsis",children:e.name}),(0,O.jsx)("div",{className:"review-time",children:e.time})]}),!e.resolved&&(0,O.jsxs)(k.Z,{isOpen:this.state.dropdownOpen,size:"sm",className:"seafile-comment-dropdown",toggle:this.toggleDropDownMenu,children:[(0,O.jsx)(T.Z,{className:"seafile-comment-dropdown-btn",children:(0,O.jsx)("i",{className:"fas fa-ellipsis-v"})}),(0,O.jsxs)(R.Z,{children:[e.userEmail===h.b6&&(0,O.jsx)(L.Z,{onClick:this.props.deleteComment,className:"delete-comment",id:e.id,children:(0,h.ih)("Delete")}),e.userEmail===h.b6&&(0,O.jsx)(L.Z,{onClick:this.toggleEditComment,className:"edit-comment",id:e.id,children:(0,h.ih)("Edit")}),(0,O.jsx)(L.Z,{onClick:this.props.resolveComment,className:"seafile-comment-resolved",id:e.id,children:(0,h.ih)("Mark as resolved")})]})]})]}),e.newIndex>=-1&&e.oldIndex>=-1&&(0,O.jsx)("blockquote",{className:"seafile-comment-content",children:(0,O.jsx)("div",{onClick:this.scrollToQuote,dangerouslySetInnerHTML:{__html:this.state.quote}})}),(0,O.jsx)("div",{className:"seafile-comment-content",dangerouslySetInnerHTML:{__html:this.state.comment}})]})}}]),n}(l.Component),P=E,F=function(e){(0,a.Z)(n,e);var t=(0,r.Z)(n);function n(e){var s;return(0,i.Z)(this,n),(s=t.call(this,e)).handleCommentChange=function(e){var t=e.target.value;s.setState({comment:t})},s.submitComment=function(){var e=s.props,t=e.quote,n=e.newIndex,i=e.oldIndex,o=s.state.comment.trim();if(0!==o.length){if(t.length>0){var a={quote:t,newIndex:n,oldIndex:i};u.I.postComment(h.KT,h.uW,o,JSON.stringify(a)).then((function(){s.props.onCommentAdded()})).catch((function(e){var t=_.c.getErrorMsg(e);M.Z.danger(t)}))}else u.I.postComment(h.KT,h.uW,o).then((function(){s.props.onCommentAdded()})).catch((function(e){var t=_.c.getErrorMsg(e);M.Z.danger(t)}));s.setState({comment:""})}},s.setQuoteText=function(e){D.process(e).then((function(e){var t=String(e);s.setState({quote:t})}))},s.state={comment:"",quote:""},s}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){this.setQuoteText(this.props.quote)}},{key:"componentWillReceiveProps",value:function(e){this.props.quote!==e.quote&&this.setQuoteText(e.quote)}},{key:"render",value:function(){return(0,O.jsxs)("div",{className:"review-comment-dialog",children:[(0,O.jsx)("div",{children:h.u2}),(0,O.jsx)("blockquote",{className:"review-comment-dialog-quote",children:(0,O.jsx)("div",{dangerouslySetInnerHTML:{__html:this.state.quote}})}),(0,O.jsx)("textarea",{value:this.state.comment,onChange:this.handleCommentChange}),(0,O.jsxs)("div",{className:"button-group",children:[(0,O.jsx)(d.Z,{size:"sm",color:"primary",onClick:this.submitComment,children:(0,h.ih)("Submit")}),(0,O.jsx)(d.Z,{size:"sm",color:"secondary",onClick:this.props.toggleCommentDialog,children:(0,h.ih)("Cancel")})]}),(0,O.jsx)("span",{className:"review-comment-dialog-triangle"})]})}}]),n}(l.Component),H=n(99334),K=n(62298),Y=n(4292),W=n(95234),A=n(95060),U=n(32487),Q=function(e){(0,a.Z)(n,e);var t=(0,r.Z)(n);function n(e){var s;return(0,i.Z)(this,n),(s=t.call(this,e)).listReviewers=function(){u.I.listDraftReviewers(s.props.draftID).then((function(e){s.setState({reviewers:e.data.reviewers})}))},s.handleSelectChange=function(e){s.setState({selectedOption:e}),s.Options=[]},s.addReviewers=function(){if(s.state.selectedOption.length>0){s.refs.reviewSelect.clearSelect();for(var e=[],t=0;t<s.state.selectedOption.length;t++)e[t]=s.state.selectedOption[t].email;s.setState({loading:!0,errorMsg:[]}),u.I.addDraftReviewers(s.props.draftID,e).then((function(e){if(e.data.failed.length>0){for(var t=[],n=0;n<e.data.failed.length;n++)t[n]=e.data.failed[n];s.setState({errorMsg:t})}s.setState({selectedOption:null,loading:!1}),e.data.success.length>0&&s.listReviewers()})).catch((function(e){var t=_.c.getErrorMsg(e);M.Z.danger(t)}))}},s.deleteReviewer=function(e){var t=e.target.getAttribute("name");u.I.deleteDraftReviewer(s.props.draftID,t).then((function(e){if(200===e.data){for(var n=[],i=0;i<s.state.reviewers.length;i++)s.state.reviewers[i].user_email!==t&&n.push(s.state.reviewers[i]);s.setState({reviewers:n})}})).catch((function(e){var t=_.c.getErrorMsg(e);M.Z.danger(t)}))},s.state={reviewers:s.props.reviewers,selectedOption:null,errorMsg:[],loading:!1},s.Options=[],s}return(0,s.Z)(n,[{key:"render",value:function(){var e=this,t=this.props.toggleAddReviewerDialog,n=this.state,i=n.reviewers,s=n.errorMsg;return(0,O.jsxs)(K.Z,{isOpen:!0,toggle:t,children:[(0,O.jsx)(Y.Z,{toggle:t,children:(0,h.ih)("Request a review")}),(0,O.jsxs)(W.Z,{children:[(0,O.jsx)("p",{children:(0,h.ih)("Add new reviewer")}),(0,O.jsxs)("div",{className:"add-reviewer",children:[(0,O.jsx)(U.Z,{placeholder:(0,h.ih)("Search users..."),onSelectChange:this.handleSelectChange,ref:"reviewSelect",isMulti:!0,className:"reviewer-select"}),this.state.selectedOption&&!this.state.loading?(0,O.jsx)(d.Z,{color:"secondary",onClick:this.addReviewers,children:(0,h.ih)("Submit")}):(0,O.jsx)(d.Z,{color:"secondary",disabled:!0,children:(0,h.ih)("Submit")})]}),s.length>0&&s.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,O.jsxs)("p",{className:"reviewer-select-error error",children:[s[t].email,": ",s[t].error_msg]},t)})),i.length>0&&i.map((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,O.jsxs)("div",{className:"reviewer-select-info",children:[(0,O.jsxs)("div",{className:"d-flex",children:[(0,O.jsx)("img",{className:"avatar reviewer-select-avatar",src:t.avatar_url,alt:""}),(0,O.jsx)("span",{className:"reviewer-select-name ellipsis",children:t.user_name})]}),(0,O.jsx)("i",{className:"fa fa-times",name:t.user_email,onClick:e.deleteReviewer})]},n)}))]}),(0,O.jsx)(A.Z,{children:(0,O.jsx)(d.Z,{color:"secondary",onClick:t,children:(0,h.ih)("Close")})})]})}}]),n}(l.Component),z=Q,B=n(55146),V=n(13327),G=n(47976),X=n(99574),J=n(71757),$=n(81694),ee=n.n($),te=n(93433),ne=n(72426),ie=n.n(ne);n(33119);ie().locale(window.app.config.lang);var se=function(e){(0,a.Z)(n,e);var t=(0,r.Z)(n);function n(e){var s;return(0,i.Z)(this,n),(s=t.call(this,e)).onClick=function(e,t,n,i){if(t===s.state.activeItem)return!1;s.props.onHistoryItemClick(i,n,t)},s.onScroll=function(e){var t=e.target.clientHeight,n=e.target.scrollHeight;if(t+e.target.scrollTop+1>=n&&s.props.totalReversionCount>s.perPage*s.state.currentPage){var i=s.state.currentPage+1;s.setState({currentPage:i,loading:!0}),u.I.listFileHistoryRecords(h.KT,h.uW,i,s.perPage).then((function(e){var t=Object.assign([],s.props.historyList);s.props.onHistoryListChange([].concat((0,te.Z)(t),(0,te.Z)(e.data.data))),s.setState({loading:!1})})).catch((function(e){var t=_.c.getErrorMsg(e);M.Z.danger(t)}))}},s.perPage=25,s.state={currentPage:1,loading:!1},s}return(0,s.Z)(n,[{key:"render",value:function(){var e=this;return(0,O.jsx)("div",{className:"history-body",children:(0,O.jsxs)("ul",{onScroll:this.onScroll,className:"history-list-container",children:[this.props.historyList?this.props.historyList.map((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,s=n+1;return s===i.length&&(s=n),(0,O.jsx)(oe,{onClick:e.onClick,ctime:t.ctime,className:e.props.activeItem===n?"item-active":"",name:t.creator_name,index:n,preItem:i[s],currentItem:t},n)})):(0,O.jsx)(v.Z,{}),this.state.loading&&(0,O.jsx)("li",{className:"reloading-reversion",children:(0,O.jsx)(v.Z,{})})]})})}}]),n}(l.Component),oe=function(e){(0,a.Z)(n,e);var t=(0,r.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"render",value:function(){var e=this,t=ie().parseZone(this.props.ctime).format("YYYY-MM-DD HH:mm");return(0,O.jsx)("li",{onClick:function(t){return e.props.onClick(t,e.props.index,e.props.preItem,e.props.currentItem)},className:"history-list-item "+this.props.className,children:(0,O.jsxs)("div",{className:"history-info",children:[(0,O.jsx)("div",{className:"time",children:t}),(0,O.jsxs)("div",{className:"owner",children:[(0,O.jsx)("i",{className:"squire-icon"}),(0,O.jsx)("span",{children:this.props.name})]})]})})}}]),n}(l.Component),ae=se,re=n(84730),le=n(53885),ce=(0,s.Z)((function e(t){(0,i.Z)(this,e);var n=new Date(t.created_at).getTime();if(this.time=ie()(n).format("YYYY-MM-DD HH:mm"),this.id=t.id,this.avatarUrl=t.avatar_url,this.comment=t.comment,this.name=t.user_name,this.userEmail=t.user_email,this.resolved=t.resolved,t.detail){var s=JSON.parse(t.detail);this.newIndex=s.newIndex,this.oldIndex=s.oldIndex,this.quote=s.quote}})),de=(n(28421),n(58108),n(90099),n(65915)),me=n(72426),he=m.F3.toSlateRange,ue=m.F3.toDOMNode,fe=function(e){(0,a.Z)(n,e);var t=(0,r.Z)(n);function n(e){var s;return(0,i.Z)(this,n),(s=t.call(this,e)).initialContent=function(){switch(h.UX){case"open":if(!h.hm)return void s.setState({isLoading:!1,isShowDiff:!1});if(!h.YG)return void u.I.getFileDownloadLink(h.KT,h.uW).then((function(e){u.I.getFileContent(e.data).then((function(e){s.setState({draftContent:e.data,draftOriginContent:e.data,isLoading:!1,isShowDiff:!1})}))}));var e=window.location.hash;if(0===e.indexOf("#history-")){var t,n,i=e.slice(9,49),a=e.slice(50,90);s.setState({isLoading:!1,activeTab:"history"}),u.I.listFileHistoryRecords(h.KT,h.uW,1,25).then((function(e){var o=e.data.data;s.setState({historyList:o,totalReversionCount:e.data.total_count});for(var r=0,l=o.length;r<l&&(a===o[r].commit_id&&(s.setState({activeItem:r}),t=o[r].path),i===o[r].commit_id&&(n=o[r].path),!t||!n);r++);f.Z.all([u.I.getFileRevision(h.KT,i,n),u.I.getFileRevision(h.KT,a,t)]).then(f.Z.spread((function(e,t){f.Z.all([u.I.getFileContent(e.data),u.I.getFileContent(t.data)]).then(f.Z.spread((function(e,t){s.setDiffViewerContent(t.data,e.data)})))})))}))}else f.Z.all([u.I.getFileDownloadLink(h.KT,h.uW),u.I.getFileDownloadLink(h.KT,h.lG)]).then(f.Z.spread((function(e,t){f.Z.all([u.I.getFileContent(e.data),u.I.getFileContent(t.data)]).then(f.Z.spread((function(e,t){s.setState({draftContent:e.data,draftOriginContent:t.data,isLoading:!1});var n=(0,o.Z)(s);setTimeout((function(){n.getChangedNodes()}),100)})))})));break;case"published":if(!h.YG)return void s.setState({isLoading:!1,isShowDiff:!1});var r=h.ze+"repo/"+h.KT+"/"+h.I$+"/download?p="+h.lG,l=h.ze+"repo/"+h.KT+"/"+h.YB+"/download?p="+h.lG;f.Z.all([u.I.getFileContent(r),u.I.getFileContent(l)]).then(f.Z.spread((function(e,t){s.setState({draftContent:e.data,draftOriginContent:t.data,isLoading:!1})})))}},s.onHistoryItemClick=function(e,t,n){var i=t.commit_id,o=e.commit_id,a="history-"+i+"-"+o;s.setURL(a),s.setState({activeItem:n,isLoading:!0}),f.Z.all([u.I.getFileRevision(h.KT,o,e.path),u.I.getFileRevision(h.KT,i,t.path)]).then(f.Z.spread((function(e,t){f.Z.all([u.I.getFileContent(e.data),u.I.getFileContent(t.data)]).then(f.Z.spread((function(e,t){s.setDiffViewerContent(e.data,t.data)})))})))},s.onHistoryListChange=function(e){s.setState({historyList:e})},s.listComments=function(){u.I.listComments(h.KT,h.uW).then((function(e){var t=[];e.data.comments.forEach((function(e){t.push(new ce(e))})),s.setState({commentsList:t})}))},s.addComment=function(e){e.stopPropagation(),s.getQuote(),s.quote&&s.setState({isShowCommentDialog:!0})},s.onCommentAdded=function(){s.listComments(),s.toggleCommentDialog()},s.toggleCommentDialog=function(){s.setState({isShowCommentDialog:!s.state.isShowCommentDialog})},s.getOriginRepoInfo=function(){u.I.getRepoInfo(h.KT).then((function(e){s.setState({originRepoName:e.data.repo_name})}))},s.getDraftInfo=function(){"open"===h.UX&&u.I.getFileInfo(h.KT,h.uW).then((function(e){s.setState({draftInfo:e.data})}))},s.getChangedNodes=function(){var e=s.refs.diffViewer.value,t=[],n="";e.map((function(e,i){var s=e.data.diff_state;("diff-added"===s&&"diff-added"!==n||"diff-removed"===s&&"diff-removed"!==n||"diff-replaced"===s&&"diff-replaced"!==n)&&t.push(i),n=e.data.diff_state})),s.setState({changedNodes:t})},s.scrollToChangedNode=function(e){if(0!=s.state.changedNodes.length){"up"===e?s.changeIndex++:s.changeIndex--,s.changeIndex>s.state.changedNodes.length-1&&(s.changeIndex=0),s.changeIndex<0&&(s.changeIndex=s.state.changedNodes.length-1);for(var t=window,n=s.state.changedNodes[s.changeIndex],i=window.viewer.children[n],o=ue(window.viewer,i);-1===o.className.indexOf("diff-")&&"BODY"!==o.tagName;)o=o.parentNode;var a=s.findScrollContainer(o,t);a==t.document.body||a==t.document.documentElement?t.scrollTo(0,o.offsetTop):a.scrollTop=o.offsetTop}},s.findScrollContainer=function(e,t){for(var n,i=e.parentNode,s=["auto","overlay","scroll"];!n&&i.parentNode;){var o=t.getComputedStyle(i).overflowY;if(s.includes(o)){n=i;break}i=i.parentNode}return n||t.document.body},s.scrollToQuote=function(e,t,n){var i=s.refs.diffViewer.value.find((function(n){if(n.data.old_index==t&&n.data.new_index==e)return n}));if(i){var o=ue(window.viewer,i);if(!o)return;var a=window,r=s.findScrollContainer(o,a);r==a.document.body||r==a.document.documentElement?a.scrollTo(0,o.offsetTop):r.scrollTop=o.offsetTop}},s.showDiffViewer=function(){return(0,O.jsxs)("div",{children:[s.state.isShowDiff?(0,O.jsx)(m.ZX,{scriptSource:h.si+"js/mathjax/tex-svg.js",newMarkdownContent:s.state.draftContent,oldMarkdownContent:s.state.draftOriginContent,ref:"diffViewer"}):(0,O.jsx)(m.ZX,{scriptSource:h.si+"js/mathjax/tex-svg.js",newMarkdownContent:s.state.draftContent,oldMarkdownContent:s.state.draftContent,ref:"diffViewer"}),(0,O.jsx)("i",{className:"fa fa-plus-square review-comment-btn",ref:"commentbtn",onMouseDown:s.addComment})]})},s.listReviewers=function(){u.I.listDraftReviewers(h.H_).then((function(e){s.setState({reviewers:e.data.reviewers})}))},s.onSwitchShowDiff=function(){if(!s.state.isShowDiff){var e=(0,o.Z)(s);setTimeout((function(){e.getChangedNodes()}),100)}s.setState({isShowDiff:!s.state.isShowDiff})},s.toggleDiffTip=function(){s.setState({showDiffTip:!s.state.showDiffTip})},s.toggleAddReviewerDialog=function(){s.state.showReviewerDialog&&s.listReviewers(),s.setState({showReviewerDialog:!s.state.showReviewerDialog})},s.showDiffButton=function(){return(0,O.jsxs)("div",{className:"seafile-toggle-diff",children:[(0,O.jsxs)("label",{className:"custom-switch",id:"toggle-diff",children:[(0,O.jsx)("input",{type:"checkbox",checked:s.state.isShowDiff&&"checked",name:"option",className:"custom-switch-input",onChange:s.onSwitchShowDiff}),(0,O.jsx)("span",{className:"custom-switch-indicator"})]}),(0,O.jsx)(H.Z,{placement:"bottom",isOpen:s.state.showDiffTip,target:"toggle-diff",toggle:s.toggleDiffTip,children:(0,h.ih)("View diff")})]})},s.onPublishDraft=function(){u.I.publishDraft(h.H_).then((function(e){s.setState({draftStatus:e.data.draft_status})}))},s.initialDiffViewerContent=function(){u.I.listFileHistoryRecords(h.KT,h.uW,1,25).then((function(e){s.setState({historyList:e.data.data,totalReversionCount:e.data.total_count}),e.data.data.length>1?f.Z.all([u.I.getFileRevision(h.KT,e.data.data[0].commit_id,h.uW),u.I.getFileRevision(h.KT,e.data.data[1].commit_id,h.uW)]).then(f.Z.spread((function(e,t){f.Z.all([u.I.getFileContent(e.data),u.I.getFileContent(t.data)]).then(f.Z.spread((function(e,t){s.setState({draftContent:e.data,draftOriginContent:t.data})})))}))):u.I.getFileRevision(h.KT,e.data.data[0].commit_id,h.uW).then((function(e){u.I.getFileContent(e.data).then((function(e){s.setState({draftContent:e.data,draftOriginContent:""})}))}))}))},s.setDiffViewerContent=function(e,t){s.setState({draftContent:e,draftOriginContent:t,isLoading:!1})},s.setURL=function(e){var t=new de(window.location.href);t.set("hash",e),window.location.href=t.toString()},s.tabItemClick=function(e){s.state.activeTab!==e&&("history"!==e&&window.location.hash&&s.setURL("#"),"reviewInfo"==e?s.initialContent():"history"==e&&s.initialDiffViewerContent(),s.setState({activeTab:e}))},s.showNavItem=function(e){var t=s.state.commentsList.length;switch(e){case"info":return(0,O.jsx)(B.Z,{className:"nav-item",children:(0,O.jsx)(V.Z,{className:ee()({active:"reviewInfo"===s.state.activeTab}),onClick:function(){s.tabItemClick("reviewInfo")},children:(0,O.jsx)("i",{className:"fas fa-info-circle"})})});case"comments":return(0,O.jsx)(B.Z,{className:"nav-item",children:(0,O.jsxs)(V.Z,{className:ee()({active:"comments"===s.state.activeTab}),onClick:function(){s.tabItemClick("comments")},children:[(0,O.jsx)("i",{className:"fa fa-comments"}),t>0&&(0,O.jsx)("div",{className:"comments-number",children:t})]})});case"history":return(0,O.jsx)(B.Z,{className:"nav-item",children:(0,O.jsx)(V.Z,{className:ee()({active:"history"===s.state.activeTab}),onClick:function(){s.tabItemClick("history")},children:(0,O.jsx)("i",{className:"fas fa-history"})})})}},s.getDomNodeByPath=function(e){for(var t,n=document.querySelector(".viewer-component");"number"===typeof e[0]&&n;)(t=n.children[e[0]]).getAttribute("data-slate-node")||(t=t.children[0]),e.shift(),n=t;return t},s.setBtnPosition=function(){var e=window.getSelection();if(e.rangeCount){var t=e.getRangeAt(0),n=null,i=s.refs.commentbtn.style;try{n=he(window.viewer,t)}catch(r){return void(i.top="-1000px")}if(n&&!re.e6.isCollapsed(n)){s.range=n;var o=n.anchor.path.slice();o.pop();var a=s.getDomNodeByPath(o);i.right="0px",i.top=a?"".concat(a.offsetTop,"px"):"-1000px"}else i.top="-1000px"}},s.getQuote=function(){if(s.range){s.quote=(0,m.qC)(re.ML.fragment(window.viewer,s.range));var e=window.viewer.children[s.range.anchor.path[0]];s.newIndex=e.data.new_index,s.oldIndex=e.data.old_index}},s.renderDiffButton=function(){switch(h.UX){case"open":if(!h.hm||!h.YG)return;return s.showDiffButton();case"published":if(!h.YG)return;return s.showDiffButton()}},s.renderNavItems=function(){switch(h.UX){case"open":return h.hm?(0,O.jsxs)(G.Z,{tabs:!0,className:"review-side-panel-nav",children:[s.showNavItem("info"),s.showNavItem("comments"),s.showNavItem("history")]}):(0,O.jsx)(G.Z,{tabs:!0,className:"review-side-panel-nav",children:s.showNavItem("info")});case"published":return h.YG?(0,O.jsxs)(G.Z,{tabs:!0,className:"review-side-panel-nav",children:[s.showNavItem("info"),s.showNavItem("comments")]}):(0,O.jsx)(G.Z,{tabs:!0,className:"review-side-panel-nav",children:s.showNavItem("info")})}},s.renderContent=function(){switch(h.UX){case"open":return h.hm?s.showDiffViewer():(0,O.jsx)("p",{className:"error",children:(0,h.ih)("Draft has been deleted.")});case"published":return h.YG?s.showDiffViewer():(0,O.jsx)("p",{className:"error",children:(0,h.ih)("Original file has been deleted.")})}},s.state={draftContent:"",draftOriginContent:"",draftInfo:{},isLoading:!0,isShowDiff:!0,showDiffTip:!1,activeTab:"reviewInfo",commentsList:[],changedNodes:[],originRepoName:"",isShowCommentDialog:!1,activeItem:null,historyList:[],showReviewerDialog:!1,reviewers:[],draftStatus:h.UX},s.quote="",s.newIndex=null,s.oldIndex=null,s.changeIndex=-1,s.range=null,s}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){this.getOriginRepoInfo(),this.getDraftInfo(),this.listReviewers(),this.listComments(),this.initialContent(),document.addEventListener("selectionchange",this.setBtnPosition)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("selectionchange",this.setBtnPosition)}},{key:"render",value:function(){var e=this.state,t=e.draftInfo,n=e.reviewers,i=e.originRepoName,s=e.draftStatus,o=h.ze+"lib/"+h.KT+"/file"+h.uW+"?mode=edit",a="published"==this.state.draftStatus,r="open"==this.state.draftStatus&&"rw"==h.qI,l="open"==this.state.draftStatus&&"rw"==h.qI,c=me(1e3*t.mtime).format("YYYY-MM-DD HH:mm"),m="".concat(h.ze,"profile/").concat(encodeURIComponent(t.last_modifier_email),"/");return(0,O.jsxs)("div",{className:"wrapper",children:[(0,O.jsxs)("div",{id:"header",className:"header review",children:[(0,O.jsxs)("div",{className:"cur-file-info",children:[(0,O.jsx)("div",{className:"info-item file-feature",children:(0,O.jsx)("span",{className:"sf2-icon-review"})}),(0,O.jsxs)("div",{children:[(0,O.jsxs)("div",{className:"info-item file-info",children:[(0,O.jsx)("span",{className:"file-name",children:h.J7}),(0,O.jsx)("span",{className:"mx-2 file-review",children:(0,h.ih)("Review")})]}),!a&&t.mtime&&(0,O.jsxs)("div",{className:"last-modification",children:[(0,O.jsx)("a",{href:m,children:t.last_modifier_name}),(0,O.jsx)("span",{className:"mx-1",children:c})]})]})]}),(0,O.jsxs)("div",{className:"button-group",children:[this.renderDiffButton(),l&&(0,O.jsx)("a",{href:o,className:"mx-1",children:(0,O.jsx)(d.Z,{className:"file-operation-btn",color:"secondary",children:(0,h.ih)("Edit Draft")})}),r&&(0,O.jsx)("button",{className:"btn btn-success file-operation-btn",title:(0,h.ih)("Publish draft"),onClick:this.onPublishDraft,children:(0,h.ih)("Publish")}),a&&(0,O.jsx)("button",{className:"btn btn-success file-operation-btn",title:(0,h.ih)("Published"),disabled:!0,children:(0,h.ih)("Published")})]})]}),(0,O.jsx)("div",{id:"main",className:"main",ref:"main",children:(0,O.jsxs)("div",{className:"cur-view-container",children:[(0,O.jsx)("div",{className:"cur-view-content",ref:"viewContent",children:this.state.isLoading?(0,O.jsx)("div",{className:"markdown-viewer-render-content article",children:(0,O.jsx)(v.Z,{})}):(0,O.jsx)("div",{className:"markdown-viewer-render-content article",children:this.renderContent()})}),(0,O.jsx)("div",{className:"cur-view-right-part",children:(0,O.jsxs)("div",{className:"review-side-panel",children:[this.renderNavItems(),(0,O.jsxs)(X.Z,{activeTab:this.state.activeTab,children:[(0,O.jsx)(J.Z,{tabId:"reviewInfo",children:(0,O.jsxs)("div",{className:"review-side-panel-body",children:[(0,O.jsx)(ve,{reviewers:n,toggleAddReviewerDialog:this.toggleAddReviewerDialog}),(0,O.jsx)(pe,{}),h.hm&&(0,O.jsx)(we,{commentsList:this.state.commentsList}),!0===this.state.isShowDiff&&this.state.changedNodes.length>0&&(0,O.jsx)(xe,{changedNumber:this.state.changedNodes.length,scrollToChangedNode:this.scrollToChangedNode}),(0,O.jsx)(ge,{originRepoName:i,draftInfo:t,draftStatus:s})]})}),(0,O.jsx)(J.Z,{tabId:"comments",className:"comments",children:(0,O.jsx)(P,{scrollToQuote:this.scrollToQuote,listComments:this.listComments,commentsList:this.state.commentsList,inResizing:!1})}),(0,O.jsx)(J.Z,{tabId:"history",className:"history",children:(0,O.jsx)(ae,{activeItem:this.state.activeItem,historyList:this.state.historyList,totalReversionCount:this.state.totalReversionCount,onHistoryItemClick:this.onHistoryItemClick,onHistoryListChange:this.onHistoryListChange})})]})]})})]})}),this.state.showReviewerDialog&&(0,O.jsx)(le.Z,{children:(0,O.jsx)(z,{showReviewerDialog:this.state.showReviewerDialog,toggleAddReviewerDialog:this.toggleAddReviewerDialog,draftID:h.H_,reviewers:n})}),this.state.isShowCommentDialog&&(0,O.jsx)(le.Z,{children:(0,O.jsx)(F,{toggleCommentDialog:this.toggleCommentDialog,onCommentAdded:this.onCommentAdded,quote:this.quote,newIndex:this.newIndex,oldIndex:this.oldIndex})})]})}}]),n}(l.Component),ve=function(e){(0,a.Z)(n,e);var t=(0,r.Z)(n);function n(e){return(0,i.Z)(this,n),t.call(this,e)}return(0,s.Z)(n,[{key:"render",value:function(){var e=this.props.reviewers;return(0,O.jsxs)("div",{className:"review-side-panel-item",children:[(0,O.jsxs)("div",{className:"review-side-panel-header",children:[(0,h.ih)("Reviewers"),(0,O.jsx)("i",{className:"fa fa-cog",onClick:this.props.toggleAddReviewerDialog})]}),e.length>0?e.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,O.jsxs)("div",{className:"reviewer-info",children:[(0,O.jsx)("img",{className:"avatar review-side-panel-avatar",src:e.avatar_url,alt:""}),(0,O.jsx)("span",{className:"reviewer-name ellipsis",children:e.user_name})]},t)})):(0,O.jsx)("span",{children:(0,h.ih)("No reviewer yet.")})]})}}]),n}(l.Component),pe=function(e){(0,a.Z)(n,e);var t=(0,r.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"render",value:function(){return(0,O.jsxs)("div",{className:"review-side-panel-item",children:[(0,O.jsx)("div",{className:"review-side-panel-header",children:(0,h.ih)("Author")}),(0,O.jsxs)("div",{className:"author-info",children:[(0,O.jsx)("img",{className:"avatar review-side-panel-avatar",src:h.Ix,alt:""}),(0,O.jsx)("span",{className:"author-name ellipsis",children:h.v})]})]})}}]),n}(l.Component),ge=function(e){(0,a.Z)(n,e);var t=(0,r.Z)(n);function n(e){return(0,i.Z)(this,n),t.call(this,e)}return(0,s.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.draftStatus,n=e.originRepoName,i=h.xx+"/lib/"+h.KT+"/file"+h.lG;return(0,O.jsx)("div",{className:"dirent-table-container",children:(0,O.jsxs)("table",{className:"table-thead-hidden",children:[(0,O.jsx)("thead",{children:(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{width:"25%"}),(0,O.jsx)("th",{width:"75%"})]})}),(0,O.jsx)("tbody",{children:(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{className:"align-text-top",children:(0,h.ih)("Location")}),(0,O.jsx)("td",{children:"open"===t?(0,O.jsxs)("span",{children:[n,h.uW]}):(0,O.jsx)("a",{href:i,className:"text-dark",children:i})})]})})]})})}}]),n}(l.Component),we=function(e){(0,a.Z)(n,e);var t=(0,r.Z)(n);function n(e){return(0,i.Z)(this,n),t.call(this,e)}return(0,s.Z)(n,[{key:"render",value:function(){var e=this.props.commentsList,t=0;if(e)for(var n=0,i=e.length;n<i;n++)!1===e[n].resolved&&t++;return(0,O.jsxs)("div",{className:"review-side-panel-item",children:[(0,O.jsx)("div",{className:"review-side-panel-header",children:(0,h.ih)("Comments")}),(0,O.jsx)("div",{className:"changes-info",children:(0,O.jsxs)("span",{children:[(0,h.ih)("Unresolved comments:")," ",t]})})]})}}]),n}(l.Component),xe=function(e){(0,a.Z)(n,e);var t=(0,r.Z)(n);function n(e){return(0,i.Z)(this,n),t.call(this,e)}return(0,s.Z)(n,[{key:"render",value:function(){var e=this;return(0,O.jsxs)("div",{className:"review-side-panel-item",children:[(0,O.jsx)("div",{className:"review-side-panel-header",children:(0,h.ih)("Changes")}),(0,O.jsxs)("div",{className:"changes-info",children:[(0,O.jsxs)("span",{children:[(0,h.ih)("Number of changes:")," ",this.props.changedNumber]}),this.props.changedNumber>0&&(0,O.jsxs)("div",{children:[(0,O.jsx)("i",{className:"fa fa-arrow-circle-up",onClick:function(){e.props.scrollToChangedNode("down")}}),(0,O.jsx)("i",{className:"fa fa-arrow-circle-down",onClick:function(){e.props.scrollToChangedNode("up")}})]})]})]})}}]),n}(l.Component);c.render((0,O.jsx)(fe,{}),document.getElementById("wrapper"))},57078:function(e,t,n){var i=n(11132),s=n(75402),o=n(80419),a=n(76409),r=n(90913),l=n(50887);e.exports=function e(){var t=[],n=a(),w={},x=!1,C=-1;return j.data=function(e,t){if(r(e))return 2===arguments.length?(v("data",x),w[e]=t,j):d.call(w,e)&&w[e]||null;if(e)return v("data",x),w=e,j;return w},j.freeze=N,j.attachers=t,j.use=function(e){var n;if(v("use",x),null===e||void 0===e);else if("function"===typeof e)r.apply(null,arguments);else{if("object"!==typeof e)throw new Error("Expected usable value, not `"+e+"`");"length"in e?a(e):s(e)}n&&(w.settings=i(w.settings||{},n));return j;function s(e){a(e.plugins),e.settings&&(n=i(n||{},e.settings))}function o(e){if("function"===typeof e)r(e);else{if("object"!==typeof e)throw new Error("Expected usable value, not `"+e+"`");"length"in e?r.apply(null,e):s(e)}}function a(e){var t,n;if(null===e||void 0===e);else{if("object"!==typeof e||!("length"in e))throw new Error("Expected a list of plugins, not `"+e+"`");for(t=e.length,n=-1;++n<t;)o(e[n])}}function r(e,n){var s=I(e);s?(l(s[1])&&l(n)&&(n=i(s[1],n)),s[1]=n):t.push(c.call(arguments))}},j.parse=function(e){var t,n=o(e);if(N(),u("parse",t=j.Parser),h(t))return new t(String(n),n).parse();return t(String(n),n)},j.stringify=function(e,t){var n,i=o(t);if(N(),f("stringify",n=j.Compiler),p(e),h(n))return new n(e,i).compile();return n(e,i)},j.run=Z,j.runSync=function(e,t){var n,i=!1;return Z(e,t,o),g("runSync","run",i),n;function o(e,t){i=!0,s(e),n=t}},j.process=y,j.processSync=function(e){var t,n=!1;return N(),u("processSync",j.Parser),f("processSync",j.Compiler),y(t=o(e),i),g("processSync","process",n),t;function i(e){n=!0,s(e)}},j;function j(){for(var n=e(),s=t.length,o=-1;++o<s;)n.use.apply(null,t[o]);return n.data(i(!0,{},w)),n}function N(){var e,i,s,o;if(x)return j;for(;++C<t.length;)i=(e=t[C])[0],null,!1!==(s=e[1])&&(!0===s&&(e[1]=void 0),"function"===typeof(o=i.apply(j,e.slice(1)))&&n.use(o));return x=!0,C=1/0,j}function I(e){for(var n,i=t.length,s=-1;++s<i;)if((n=t[s])[0]===e)return n}function Z(e,t,i){if(p(e),N(),i||"function"!==typeof t||(i=t,t=null),!i)return new Promise(s);function s(s,a){n.run(e,o(t),(function(t,n,o){n=n||e,t?a(t):s?s(n):i(null,n,o)}))}s(null,i)}function y(e,t){if(N(),u("process",j.Parser),f("process",j.Compiler),!t)return new Promise(n);function n(n,i){var s=o(e);m.run(j,{file:s},(function(e){e?i(e):n?n(s):t(null,s)}))}n(null,t)}}().freeze();var c=[].slice,d={}.hasOwnProperty,m=a().use((function(e,t){t.tree=e.parse(t.file)})).use((function(e,t,n){e.run(t.tree,t.file,(function(e,i,s){e?n(e):(t.tree=i,t.file=s,n())}))})).use((function(e,t){t.file.contents=e.stringify(t.tree,t.file)}));function h(e){return"function"===typeof e&&function(e){var t;for(t in e)return!0;return!1}(e.prototype)}function u(e,t){if("function"!==typeof t)throw new Error("Cannot `"+e+"` without `Parser`")}function f(e,t){if("function"!==typeof t)throw new Error("Cannot `"+e+"` without `Compiler`")}function v(e,t){if(t)throw new Error("Cannot invoke `"+e+"` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")}function p(e){if(!e||!r(e.type))throw new Error("Expected node, got `"+e+"`")}function g(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}},33119:function(){}},function(e){e.O(0,[351],(function(){return t=84411,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=draft.40909971.js.map