(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[9],{1565:function(e,t,n){n(54),e.exports=n(1694)},1566:function(e,t,n){},1694:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(7),i=n(9),r=n(8),o=n(2),s=n.n(o),l=n(24),j=n.n(l),u=n(251),p=n.n(u),b=n(1),d=n(0),f=window.app.pageOptions,O=f.fileName,h=f.repoID,v=f.objID,m=f.path;var x=function(){return Object(d.jsx)("a",{href:"".concat(b.kc,"repo/").concat(h,"/").concat(v,"/download/?file_name=").concat(encodeURIComponent(O),"&p=").concat(encodeURIComponent(m)),className:"btn btn-secondary",children:Object(b.nb)("Download")})},w=(n(767),window.app.pageOptions),k=w.fromTrash,y=w.fileName,g=w.commitTime,N=w.canDownloadFile,C=w.enableWatermark,F=w.userNickName,I=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(d.jsxs)("div",{className:"file-view-header d-flex justify-content-between align-items-center",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"file-title",children:y}),Object(d.jsx)("p",{className:"meta-info m-0",children:k?"".concat(Object(b.nb)("Current Path: ")).concat(Object(b.nb)("Trash")):g})]}),N&&Object(d.jsx)(x,{})]}),Object(d.jsx)("div",{className:"file-view-body flex-auto d-flex o-hidden",children:this.props.content})]})}}]),n}(s.a.Component);C&&p.a.init({watermark_txt:"".concat(b.jc," ").concat(F),watermark_alpha:.075});var P=I,D=window.app.pageOptions,T=D.canDownloadFile,E=D.err,L="File preview unsupported",S=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e;return e=E==L||this.props.err==L?Object(d.jsx)("p",{children:Object(b.nb)("Online view is not applicable to this file format")}):Object(d.jsx)("p",{className:"error",children:E}),Object(d.jsx)("div",{className:"file-view-content flex-1 o-auto",children:Object(d.jsxs)("div",{className:"file-view-tip",children:[e,T&&Object(d.jsx)(x,{})]})})}}]),n}(s.a.Component),R=n(255),U=n(319),W=n(320),_=n(5),B=n(252),J=n.n(B),M=(n(236),n(208),n(365),n(511),n(512),n(513),n(199),n(514),n(515),n(306),n(286),n(516),window.app.pageOptions),V=M.fileExt,z=M.fileContent,A={lineNumbers:!0,mode:_.a.chooseLanguage(V),extraKeys:{Ctrl:"autocomplete"},theme:"default",textWrapping:!0,lineWrapping:!0,readOnly:!0,cursorBlinkRate:-1},G=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"file-view-content flex-1 text-file-view",children:Object(d.jsx)(J.a,{ref:"code-mirror-editor",value:z,options:A})})}}]),n}(s.a.Component),K=n(117),q=(n(1566),window.app.pageOptions.fileContent),H=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"file-view-content flex-1 o-auto",children:Object(d.jsx)("div",{className:"md-content",children:Object(d.jsx)(K.a,{markdownContent:q,showTOC:!1,scriptSource:b.Lb+"js/mathjax/tex-svg.js"})})})}}]),n}(s.a.Component),Q=n(321),X=n(322),Y=window.app.pageOptions,Z=Y.fileType,$=Y.err,ee=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){if($)return Object(d.jsx)(P,{content:Object(d.jsx)(S,{})});var e;switch(Z){case"Image":e=Object(d.jsx)(R.a,{tip:Object(d.jsx)(S,{})});break;case"SVG":e=Object(d.jsx)(U.a,{});break;case"PDF":e=Object(d.jsx)(W.a,{});break;case"Text":e=Object(d.jsx)(G,{});break;case"Markdown":e=Object(d.jsx)(H,{});break;case"Video":e=Object(d.jsx)(Q.a,{});break;case"Audio":e=Object(d.jsx)(X.a,{});break;default:e=Object(d.jsx)(S,{err:"File preview unsupported"})}return Object(d.jsx)(P,{content:e})}}]),n}(s.a.Component);j.a.render(Object(d.jsx)(ee,{}),document.getElementById("wrapper"))},255:function(e,t,n){"use strict";var a,c,i=n(6),r=n(7),o=n(9),s=n(8),l=n(2),j=n.n(l),u=n(5),p=n(1),b=(n(517),n(0)),d=window.app.pageOptions,f=d.repoID,O=d.repoEncrypted,h=d.fileExt,v=d.filePath,m=d.fileName,x=d.thumbnailSizeForOriginal,w=d.previousImage,k=d.nextImage,y=d.rawPath,g=d.xmindImageSrc;w&&(a="".concat(p.kc,"lib/").concat(f,"/file").concat(u.a.encodePath(w))),k&&(c="".concat(p.kc,"lib/").concat(f,"/file").concat(u.a.encodePath(k)));var N=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleLoadFailure=function(){a.setState({loadFailed:!0})},a.state={loadFailed:!1},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",(function(e){w&&37==e.keyCode&&(location.href=a),k&&39==e.keyCode&&(location.href=c)}))}},{key:"render",value:function(){if(this.state.loadFailed)return this.props.tip;var e="";this.props.canUseThumbnail&&!O&&["tif","tiff","psd"].includes(h)&&(e="".concat(p.kc,"thumbnail/").concat(f,"/").concat(x).concat(u.a.encodePath(v)));var t=g?"".concat(p.kc).concat(g):"";return Object(b.jsxs)("div",{className:"file-view-content flex-1 image-file-view",children:[w&&Object(b.jsx)("a",{href:a,id:"img-prev",title:Object(p.nb)("you can also press \u2190 "),children:Object(b.jsx)("span",{className:"fas fa-chevron-left"})}),k&&Object(b.jsx)("a",{href:c,id:"img-next",title:Object(p.nb)("you can also press \u2192"),children:Object(b.jsx)("span",{className:"fas fa-chevron-right"})}),Object(b.jsx)("img",{src:t||e||y,alt:m,id:"image-view",onError:this.handleLoadFailure})]})}}]),n}(j.a.Component);t.a=N},319:function(e,t,n){"use strict";var a=n(6),c=n(7),i=n(9),r=n(8),o=n(2),s=n.n(o),l=(n(520),n(0)),j=window.app.pageOptions,u=j.fileName,p=j.rawPath,b=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"file-view-content flex-1 svg-file-view",children:Object(l.jsx)("img",{src:p,alt:u,id:"svg-view"})})}}]),n}(s.a.Component);t.a=b},320:function(e,t,n){"use strict";var a=n(6),c=n(7),i=n(9),r=n(8),o=n(2),s=n.n(o),l=n(154),j=(n(307),n(0)),u=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"file-view-content flex-1 pdf-file-view",children:Object(j.jsx)(l.a,{})})}}]),n}(s.a.Component);t.a=u},321:function(e,t,n){"use strict";var a=n(41),c=n(6),i=n(7),r=n(9),o=n(8),s=n(2),l=n.n(s),j=n(253),u=(n(519),n(0)),p=window.app.pageOptions.rawPath,b=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e={autoplay:!1,controls:!0,preload:"auto",sources:[{src:p}]};return Object(u.jsx)("div",{className:"file-view-content flex-1 video-file-view",children:Object(u.jsx)(j.a,Object(a.a)({},e))})}}]),n}(l.a.Component);t.a=b},322:function(e,t,n){"use strict";var a=n(41),c=n(6),i=n(7),r=n(9),o=n(8),s=n(2),l=n.n(s),j=n(254),u=(n(521),n(0)),p=window.app.pageOptions.rawPath,b=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e={autoplay:!1,controls:!0,preload:"auto",sources:[{src:p}]};return Object(u.jsx)("div",{className:"file-view-content flex-1 audio-file-view",children:Object(u.jsx)(j.a,Object(a.a)({},e))})}}]),n}(l.a.Component);t.a=b}},[[1565,1,0]]]);
//# sourceMappingURL=historyTrashFileView.chunk.js.map