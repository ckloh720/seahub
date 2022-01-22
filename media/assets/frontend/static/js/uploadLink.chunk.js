(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[29],{1689:function(e,t,a){a(54),e.exports=a(1702)},1690:function(e,t,a){},1702:function(e,t,a){"use strict";a.r(t);var r=a(6),i=a(7),l=a(9),o=a(8),n=a(2),s=a.n(n),d=a(24),c=a.n(d),p=a(5),u=a(10),b=a(1),m=a(97),h=a(67),f=a(27),j=a(253),g=a.n(j),O=a(156),v=a.n(O),F=a(4),x=a(0),U="uploading",k="error",y="isSaving",S="uploaded",w=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).onUploadCancel=function(e){e.preventDefault(),i.props.onUploadCancel(i.props.resumableFile)},i.onUploadRetry=function(e){e.preventDefault(),i.props.onUploadRetry(i.props.resumableFile)},i.formatFileSize=function(e){return"number"!==typeof e?"":e>=1e9?(e/1e9).toFixed(1)+" G":e>=1e6?(e/1e6).toFixed(1)+" M":e>=1e3?(e/1e3).toFixed(1)+" K":e.toFixed(1)+" B"},i.state={uploadState:U},i}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){var t=e.resumableFile,a=U;t.error?a=k:(0!==t.remainingTime||t.isSaved||(a=y),t.isSaved&&(a=S)),this.setState({uploadState:a})}},{key:"render",value:function(){var e=this.props.resumableFile,t=Math.round(100*e.progress()),a=e.error;return Object(x.jsxs)("tr",{className:"file-upload-item",children:[Object(x.jsx)("td",{className:"upload-name",children:Object(x.jsx)("div",{className:"ellipsis",children:e.newFileName})}),Object(x.jsx)("td",{children:Object(x.jsx)("span",{className:"file-size",children:this.formatFileSize(e.size)})}),Object(x.jsxs)("td",{className:"upload-progress",children:[(this.state.uploadState===U||this.state.uploadState===y)&&Object(x.jsxs)(n.Fragment,{children:[e.size>=1e8&&Object(x.jsxs)(n.Fragment,{children:[e.isUploading()&&Object(x.jsxs)("div",{className:"progress-container",children:[Object(x.jsx)("div",{className:"progress",children:Object(x.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(t,"%")},"aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100"})}),-1===e.remainingTime&&Object(x.jsx)("div",{className:"progress-text",children:Object(b.qb)("Preparing to upload...")}),e.remainingTime>0&&Object(x.jsxs)("div",{className:"progress-text",children:[Object(b.qb)("Remaining")," ",p.a.formatTime(e.remainingTime)]}),0===e.remainingTime&&Object(x.jsx)("div",{className:"progress-text",children:Object(b.qb)("Indexing...")})]}),!e.isUploading()&&Object(x.jsx)("div",{className:"progress-container d-flex align-items-center",children:Object(x.jsx)("div",{className:"progress",children:Object(x.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(t,"%")},"aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100"})})})]}),e.size<1e8&&Object(x.jsx)("div",{className:"progress-container d-flex align-items-center",children:Object(x.jsx)("div",{className:"progress",children:Object(x.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(t,"%")},"aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100"})})})]}),this.state.uploadState===k&&Object(x.jsx)("div",{className:"message err-message ml-0",dangerouslySetInnerHTML:{__html:a}})]}),Object(x.jsx)("td",{className:"upload-operation",children:Object(x.jsxs)(n.Fragment,{children:[this.state.uploadState===U&&Object(x.jsx)("a",{href:"#",onClick:this.onUploadCancel,role:"button",children:Object(b.qb)("Cancel")}),this.state.uploadState===k&&Object(x.jsx)("a",{href:"#",onClick:this.onUploadRetry,role:"button",children:Object(b.qb)("Retry")}),this.state.uploadState===y&&Object(x.jsx)("span",{className:"saving",children:Object(b.qb)("Saving...")}),this.state.uploadState===S&&Object(x.jsx)("span",{className:"uploaded",children:Object(b.qb)("Uploaded")})]})})]})}}]),a}(s.a.Component),C=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.file,t=Object(b.qb)("Please upload files less than {placeholder}M").replace("{placeholder}",b.Nb);return Object(x.jsxs)("tr",{className:"file-upload-item",children:[Object(x.jsx)("td",{className:"upload-name",children:Object(x.jsx)("div",{className:"ellipsis",children:e.name})}),Object(x.jsx)("td",{colSpan:3,className:"error",children:t})]})}}]),a}(s.a.Component),N=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).toggleDropdown=function(){i.setState({dropdownOpen:!i.state.dropdownOpen})},i.onDropdownToggleKeyDown=function(e){"Enter"!=e.key&&"Space"!=e.key||i.toggleDropdown()},i.onMenuItemKeyDown=function(e){"Enter"!=e.key&&"Space"!=e.key||e.target.click()},i.state={dropdownOpen:!1},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.allFilesUploaded;return Object(x.jsxs)(n.Fragment,{children:[Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsxs)(F.d,{isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown,children:[Object(x.jsx)(F.o,{color:"primary",caret:!0,onKeyDown:this.onDropdownToggleKeyDown,children:Object(b.qb)("Upload")}),Object(x.jsxs)(F.n,{children:[Object(x.jsx)(F.m,{onClick:this.props.onFileUpload,onKeyDown:this.onMenuItemKeyDown,children:Object(b.qb)("Upload Files")}),Object(x.jsx)(F.m,{onClick:this.props.onFolderUpload,onKeyDown:this.onMenuItemKeyDown,children:Object(b.qb)("Upload Folder")})]})]}),Object(x.jsx)(F.c,{color:"primary",outline:!0,className:"ml-4",onClick:this.props.onCancelAllUploading,disabled:t,children:Object(b.qb)("Cancel All")})]}),Object(x.jsx)("div",{className:"mt-4 mh-2",children:Object(x.jsxs)("table",{className:"table-thead-hidden",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{width:"35%",children:Object(b.qb)("name")}),Object(x.jsx)("th",{width:"15%",children:Object(b.qb)("size")}),Object(x.jsx)("th",{width:"35%",children:Object(b.qb)("progress")}),Object(x.jsx)("th",{width:"15%",children:Object(b.qb)("state")})]})}),Object(x.jsxs)("tbody",{children:[this.props.forbidUploadFileList.map((function(e,t){return Object(x.jsx)(C,{file:e},t)})),this.props.uploadFileList.map((function(t,a){return Object(x.jsx)(w,{resumableFile:t,onUploadCancel:e.props.onUploadCancel,onUploadRetry:e.props.onUploadRetry},a)})).reverse()]})]})})]})}}]),a}(s.a.Component),L=a(11),D=(a(503),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).componentWillUnmount=function(){window.onbeforeunload=null,!0===i.props.dragAndDrop&&i.resumable.disableDropOnDocument()},i.onbeforeunload=function(){if(window.uploader&&window.uploader.isUploadProgressDialogShow&&100!==window.uploader.totalProgress)return""},i.bindCallbackHandler=function(){var e=i.props,t=e.minFileSizeErrorCallback,a=e.fileTypeErrorCallback;i.maxFilesErrorCallback&&(i.resumable.opts.maxFilesErrorCallback=i.maxFilesErrorCallback),t&&(i.resumable.opts.minFileSizeErrorCallback=i.props.minFileSizeErrorCallback),i.maxFileSizeErrorCallback&&(i.resumable.opts.maxFileSizeErrorCallback=i.maxFileSizeErrorCallback),a&&(i.resumable.opts.fileTypeErrorCallback=i.props.fileTypeErrorCallback)},i.bindEventHandler=function(){i.resumable.on("chunkingComplete",i.onChunkingComplete.bind(Object(f.a)(i))),i.resumable.on("fileAdded",i.onFileAdded.bind(Object(f.a)(i))),i.resumable.on("fileProgress",i.onFileProgress.bind(Object(f.a)(i))),i.resumable.on("fileSuccess",i.onFileUploadSuccess.bind(Object(f.a)(i))),i.resumable.on("fileError",i.onFileError.bind(Object(f.a)(i))),i.resumable.on("uploadStart",i.onUploadStart.bind(Object(f.a)(i))),i.resumable.on("progress",i.onProgress.bind(Object(f.a)(i))),i.resumable.on("complete",i.onComplete.bind(Object(f.a)(i))),i.resumable.on("error",i.onError.bind(Object(f.a)(i))),i.resumable.on("dragstart",i.onDragStart.bind(Object(f.a)(i)))},i.maxFilesErrorCallback=function(e,t){var a=b.Mb,r=Object(b.qb)("Please upload no more than {maxFiles} files at a time.");r=r.replace("{maxFiles}",a),L.a.danger(r)},i.maxFileSizeErrorCallback=function(e){var t=i.state.forbidUploadFileList;t.push(e),i.setState({forbidUploadFileList:t})},i.onChunkingComplete=function(e){!0===i.state.allFilesUploaded&&i.setState({allFilesUploaded:!1});var t=i.props.path,a=e.fileName,r=e.relativePath,l=a===r;if(e.formData={},l)e.formData={parent_dir:t};else{var o=r.slice(0,r.lastIndexOf("/")+1);e.formData={parent_dir:t,relative_path:o}}},i.onFileAdded=function(e,t){if(e.fileName===e.relativePath&&1===t.length){i.setUploadFileList(i.resumable.files),u.a.sharedUploadLinkGetFileUploadUrl(i.props.token).then((function(t){i.resumable.opts.target=t.data.upload_link+"?ret-json=1",i.resumableUpload(e)})).catch((function(e){var t=p.a.getErrorMsg(e);L.a.danger(t)}))}else i.setUploadFileList(i.resumable.files),i.isUploadLinkLoaded||(i.isUploadLinkLoaded=!0,u.a.sharedUploadLinkGetFileUploadUrl(i.props.token).then((function(e){i.resumable.opts.target=e.data.upload_link+"?ret-json=1",i.resumable.upload()})).catch((function(e){var t=p.a.getErrorMsg(e);L.a.danger(t)})))},i.resumableUpload=function(e){var t=i.props,a=t.repoID,r=t.path;u.a.getFileUploadedBytes(a,r,e.fileName).then((function(t){var a=t.data.uploadedBytes,r=1024*parseInt(b.cc)*1024||1048576,l=Math.floor(a/r);e.markChunksCompleted(l),i.resumable.upload()})).catch((function(e){var t=p.a.getErrorMsg(e);L.a.danger(t)}))},i.filesAddedComplete=function(e,t){i.state.forbidUploadFileList.length>0&&0===t.length&&i.setState({isUploadProgressDialogShow:!0,totalProgress:100})},i.setUploadFileList=function(){var e=i.resumable.files;i.setState({uploadFileList:e,isUploadProgressDialogShow:!0}),p.a.registerGlobalVariable("uploader","isUploadProgressDialogShow",!0)},i.onFileProgress=function(e){var t=i.getBitrate(),a=i.state.uploadFileList.map((function(a){if(a.uniqueIdentifier===e.uniqueIdentifier&&t){var r=8*(a.size-a.size*a.progress()),i=Math.floor(r/t);a.remainingTime=i}return a}));i.setState({uploadBitrate:t,uploadFileList:a})},i.getBitrate=function(){var e=0,t=0,a=(new Date).getTime();if(i.resumable.files.forEach((function(t){e+=t.progress()*t.size})),i.timestamp){var r=a-i.timestamp;if(r<i.bitrateInterval)return i.state.uploadBitrate;(e<i.loaded||0===i.loaded)&&(i.loaded=e),t=(e-i.loaded)*(1e3/r)*8}return i.timestamp=a,i.loaded=e,t},i.onUploadStart=function(){var e=Object(b.qb)("File upload started");L.a.notify(e)},i.onProgress=function(){var e=Math.round(100*i.resumable.progress());i.setState({totalProgress:e}),p.a.registerGlobalVariable("uploader","totalProgress",e)},i.onFileUploadSuccess=function(e,t){var a=e.formData,r=(new Date).getTime()/1e3;if(t=a.replace?t:JSON.parse(t)[0],a.relative_path){var l=a.relative_path,o=l.slice(0,l.indexOf("/")),n={id:t.id,name:o,type:"dir",mtime:r};i.notifiedFolders.some((function(e){return e.name===n.name}))||(i.notifiedFolders.push(n),i.props.onFileUploadSuccess(n));var s=i.state.uploadFileList.map((function(a){return a.uniqueIdentifier===e.uniqueIdentifier&&(a.newFileName=l+t.name,a.isSaved=!0),a}));i.setState({uploadFileList:s})}else if(a.replace){var d=e.fileName,c={id:t,name:d,type:"file",mtime:r};i.props.onFileUploadSuccess(c);var p=i.state.uploadFileList.map((function(t){return t.uniqueIdentifier===e.uniqueIdentifier&&(t.newFileName=d,t.isSaved=!0),t}));i.setState({uploadFileList:p})}else{var u={id:t.id,type:"file",name:t.name,size:t.size,mtime:r};i.props.onFileUploadSuccess(u);var b=i.state.uploadFileList.map((function(a){return a.uniqueIdentifier===e.uniqueIdentifier&&(a.newFileName=t.name,a.isSaved=!0),a}));i.setState({uploadFileList:b})}},i.onFileError=function(e,t){var a="";if(t){var r=t.replace(/\n/g,"");r=JSON.parse(r),"File locked by others."===(a=r.error)&&(a=Object(b.qb)("File is locked by others.")),"Internal error."===a&&(a=Object(b.qb)("Internal Server Error"))}else a=Object(b.qb)("Network error");var l=i.state.uploadFileList.map((function(t){return t.uniqueIdentifier===e.uniqueIdentifier&&(i.state.retryFileList.push(t),t.error=a),t}));i.loaded=0,i.setState({retryFileList:i.state.retryFileList,uploadFileList:l})},i.onComplete=function(){if(!i.error){var e=Object(b.qb)("All files uploaded");L.a.success(e)}i.error=!1,i.notifiedFolders=[],i.isUploadLinkLoaded=!1,i.setState({allFilesUploaded:!0})},i.onError=function(e,t){var a=Object(b.qb)("Error");t&&t.fileName&&(a=Object(b.qb)("Failed to upload {file_name}.").replace("{file_name}",t.fileName)),L.a.danger(a,{id:"file-error-msg"}),i.error=!0,i.isUploadLinkLoaded=!1,p.a.registerGlobalVariable("uploader","totalProgress",100)},i.setHeaders=function(e,t){var a=t.offset,r=t.getOpt("chunkSize"),i=0===e.size?1:e.size,l=0!==a?a*r:0,o=Math.min(i,(a+1)*r)-1;return i-t.endByte<r&&!t.getOpt("forceChunkSize")&&(o=i),{Accept:"application/json; text/javascript, */*; q=0.01","Content-Disposition":'attachment; filename="'+encodeURI(e.fileName)+'"',"Content-Range":"bytes "+l+"-"+o+"/"+i}},i.setQuery=function(e){return e.formData},i.generateUniqueIdentifier=function(e){var t=e.webkitRelativePath||e.relativePath||e.fileName||e.name;return v()(t+new Date)+t},i.onClick=function(e){e.nativeEvent.stopImmediatePropagation(),e.stopPropagation()},i.onFileUpload=function(){i.uploadInput.current.removeAttribute("webkitdirectory"),i.uploadInput.current.click()},i.onFolderUpload=function(){i.uploadInput.current.setAttribute("webkitdirectory","webkitdirectory"),i.uploadInput.current.click()},i.onDragStart=function(){i.uploadInput.current.setAttribute("webkitdirectory","webkitdirectory")},i.onCloseUploadDialog=function(){i.loaded=0,i.resumable.files=[],i.isUploadLinkLoaded=!1,i.setState({isUploadProgressDialogShow:!1,uploadFileList:[],forbidUploadFileList:[]}),p.a.registerGlobalVariable("uploader","isUploadProgressDialogShow",!1)},i.onUploadCancel=function(e){var t=i.state.uploadFileList.filter((function(t){return t.uniqueIdentifier!==e.uniqueIdentifier||(t.cancel(),!1)}));i.resumable.isUploading()||(i.setState({totalProgress:"100",allFilesUploaded:!0}),i.loaded=0),i.setState({uploadFileList:t})},i.onCancelAllUploading=function(){var e=i.state.uploadFileList.filter((function(e){return!Math.round(1!==e.progress())||(e.cancel(),!1)}));i.loaded=0,i.setState({allFilesUploaded:!0,totalProgress:"100",uploadFileList:e}),i.isUploadLinkLoaded=!1},i.onUploadRetry=function(e){u.a.sharedUploadLinkGetFileUploadUrl(i.props.token).then((function(t){i.resumable.opts.target=t.data.upload_link+"?ret-json=1";var a=i.state.retryFileList.filter((function(t){return t.uniqueIdentifier!==e.uniqueIdentifier})),r=i.state.uploadFileList.map((function(t){return t.uniqueIdentifier===e.uniqueIdentifier&&(t.error=null,i.retryUploadFile(t)),t}));i.setState({retryFileList:a,uploadFileList:r})})).catch((function(e){var t=p.a.getErrorMsg(e);L.a.danger(t)}))},i.retryUploadFile=function(e){var t=i.props,a=t.repoID,r=t.path,l=e.fileName;if(!(e.fileName===e.relativePath)){var o=e.formData.relative_path;l=("/"===r?r+o:r+"/"+o)+l}e.bootstrap();var n=!1;e.resumableObj.on("chunkingComplete",(function(){n||u.a.getFileUploadedBytes(a,r,l).then((function(t){var a=t.data.uploadedBytes,r=1024*parseInt(b.cc)*1024||1048576,i=Math.floor(a/r);e.markChunksCompleted(i),e.resumableObj.upload()})).catch((function(e){var t=p.a.getErrorMsg(e);L.a.danger(t)})),n=!0}))},i.replaceRepetitionFile=function(){var e=i.props,t=e.repoID,a=e.path;u.a.getUpdateLink(t,a).then((function(e){i.resumable.opts.target=e.data;var t=i.resumable.files[i.resumable.files.length-1];t.formData.replace=1,t.formData.target_file=t.formData.parent_dir+t.fileName,i.setUploadFileList(i.resumable.files),i.resumable.upload()})).catch((function(e){var t=p.a.getErrorMsg(e);L.a.danger(t)}))},i.cancelFileUpload=function(){i.resumable.files.pop()},i.state={retryFileList:[],uploadFileList:[],forbidUploadFileList:[],totalProgress:0,isUploadProgressDialogShow:!1,currentResumableFile:null,uploadBitrate:0,allFilesUploaded:!1},i.uploadInput=s.a.createRef(),i.notifiedFolders=[],i.timestamp=null,i.loaded=0,i.bitrateInterval=500,i.isUploadLinkLoaded=!1,window.onbeforeunload=i.onbeforeunload,i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.resumable=new g.a({target:"",query:this.setQuery||{},fileType:this.props.filetypes,maxFiles:b.Mb||void 0,maxFileSize:1e3*b.Nb*1e3||void 0,testMethod:this.props.testMethod||"post",testChunks:this.props.testChunks||!1,headers:this.setHeaders||{},withCredentials:this.props.withCredentials||!1,chunkSize:1024*parseInt(b.cc)*1024||1048576,simultaneousUploads:this.props.simultaneousUploads||1,fileParameterName:this.props.fileParameterName,generateUniqueIdentifier:this.generateUniqueIdentifier,forceChunkSize:!0,maxChunkRetries:3,minFileSize:0}),this.resumable.assignBrowse(this.uploadInput.current,!0),this.props.dragAndDrop&&this.resumable.assignDrop(document.getElementById("upload-link-drop-zone")),this.bindCallbackHandler(),this.bindEventHandler()}},{key:"render",value:function(){return Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)("div",{className:"file-uploader-container",children:Object(x.jsx)("div",{className:"file-uploader",children:Object(x.jsx)("input",{className:"upload-input",type:"file",ref:this.uploadInput,onClick:this.onClick})})}),Object(x.jsx)(N,{retryFileList:this.state.retryFileList,uploadFileList:this.state.uploadFileList,forbidUploadFileList:this.state.forbidUploadFileList,totalProgress:this.state.totalProgress,uploadBitrate:this.state.uploadBitrate,allFilesUploaded:this.state.allFilesUploaded,onCloseUploadDialog:this.onCloseUploadDialog,onCancelAllUploading:this.onCancelAllUploading,onUploadCancel:this.onUploadCancel,onUploadRetry:this.onUploadRetry,onFileUpload:this.onFileUpload,onFolderUpload:this.onFolderUpload})]})}}]),a}(s.a.Component)),q=(a(1690),window.app.pageOptions.username),I=window.uploadLink,E=I.dirName,P=I.sharedBy,z=I.noQuota,M=I.maxUploadFileSize,_=I.token,T=I.repoID,A=I.path,R=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).onFileUploadSuccess=function(e){var t=e.name;e.size;u.a.shareLinksUploadDone(_,p.a.joinPath(A,t))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(x.jsxs)("div",{className:"top-header d-flex justify-content-between",children:[Object(x.jsx)(m.a,{}),q&&Object(x.jsx)(h.a,{})]}),Object(x.jsx)("div",{className:"o-auto",children:Object(x.jsxs)("div",{className:"py-4 px-6 mx-auto rounded",id:"upload-link-panel",children:[Object(x.jsx)("h3",{className:"h5",dangerouslySetInnerHTML:{__html:Object(b.qb)("Upload files to {folder_name_placeholder}").replace("{folder_name_placeholder}",'<span class="op-target">'.concat(p.a.HTMLescape(E),"</span>"))}}),Object(x.jsx)("p",{className:"small shared-by",dangerouslySetInnerHTML:{__html:"".concat(Object(b.qb)("shared by:")," ").concat(P.avatar," ").concat(P.name)}}),z?Object(x.jsxs)("div",{className:"py-6 text-center",children:[Object(x.jsx)("span",{className:"sf3-font sf3-font-tips warning-icon"}),Object(x.jsx)("p",{children:Object(b.qb)("The owner of this library has run out of space.")})]}):Object(x.jsxs)(n.Fragment,{children:[Object(x.jsxs)("ol",{className:"small text-gray",children:[Object(x.jsx)("li",{className:"tip-list-item",children:Object(b.qb)("Folder upload is limited to Chrome, Firefox 50+, and Microsoft Edge.")}),M&&Object(x.jsx)("li",{className:"tip-list-item",children:Object(b.qb)("File size should be smaller than {max_size_placeholder}.").replace("{max_size_placeholder}",M)})]}),Object(x.jsxs)("div",{id:"upload-link-drop-zone",className:"text-center mt-2 mb-4",children:[Object(x.jsx)("span",{className:"sf3-font sf3-font-upload upload-icon"}),Object(x.jsx)("p",{className:"small text-gray mb-0",children:Object(b.qb)("Drag and drop files or folders here.")})]}),Object(x.jsx)(D,{ref:function(t){return e.uploader=t},dragAndDrop:!0,token:_,repoID:T,path:A,onFileUploadSuccess:this.onFileUploadSuccess})]})]})})]})}}]),a}(s.a.Component);c.a.render(Object(x.jsx)(R,{}),document.getElementById("wrapper"))}},[[1689,1,0]]]);
//# sourceMappingURL=uploadLink.chunk.js.map