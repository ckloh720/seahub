"use strict";(self.webpackChunkseahub_frontend=self.webpackChunkseahub_frontend||[]).push([[315],{93256:function(e,n,t){var a=t(1413),i=t(15671),r=t(43144),o=t(60136),c=t(29388),s=t(72791),l=t(8077),u=(t(80621),t(80184)),p=window.app.pageOptions.rawPath,d=function(e){(0,o.Z)(t,e);var n=(0,c.Z)(t);function t(){return(0,i.Z)(this,t),n.apply(this,arguments)}return(0,r.Z)(t,[{key:"render",value:function(){var e={autoplay:!1,controls:!0,preload:"auto",sources:[{src:p}]};return(0,u.jsx)("div",{className:"file-view-content flex-1 audio-file-view",children:(0,u.jsx)(l.Z,(0,a.Z)({},e))})}}]),t}(s.Component);n.Z=d},93586:function(e,n,t){var a,i,r=t(15671),o=t(43144),c=t(60136),s=t(29388),l=t(72791),u=t(95996),p=t(53585),d=(t(82536),t(80184)),f=window.app.pageOptions,h=f.repoID,v=f.repoEncrypted,x=f.fileExt,m=f.filePath,w=f.fileName,Z=f.thumbnailSizeForOriginal,j=f.previousImage,y=f.nextImage,k=f.rawPath,g=f.xmindImageSrc;j&&(a="".concat(p.ze,"lib/").concat(h,"/file").concat(u.c.encodePath(j))),y&&(i="".concat(p.ze,"lib/").concat(h,"/file").concat(u.c.encodePath(y)));var N=function(e){(0,c.Z)(t,e);var n=(0,s.Z)(t);function t(e){var a;return(0,r.Z)(this,t),(a=n.call(this,e)).handleLoadFailure=function(){a.setState({loadFailed:!0})},a.state={loadFailed:!1},a}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",(function(e){j&&37==e.keyCode&&(location.href=a),y&&39==e.keyCode&&(location.href=i)}))}},{key:"render",value:function(){if(this.state.loadFailed)return this.props.tip;var e="";!v&&["tif","tiff","psd"].includes(x)&&(e="".concat(p.ze,"thumbnail/").concat(h,"/").concat(Z).concat(u.c.encodePath(m)));var n=g?"".concat(p.ze).concat(g):"";return(0,d.jsxs)("div",{className:"file-view-content flex-1 image-file-view",children:[j&&(0,d.jsx)("a",{href:a,id:"img-prev",title:(0,p.ih)("you can also press \u2190 "),children:(0,d.jsx)("span",{className:"fas fa-chevron-left"})}),y&&(0,d.jsx)("a",{href:i,id:"img-next",title:(0,p.ih)("you can also press \u2192"),children:(0,d.jsx)("span",{className:"fas fa-chevron-right"})}),(0,d.jsx)("img",{src:n||e||k,alt:w,id:"image-view",onError:this.handleLoadFailure})]})}}]),t}(l.Component);n.Z=N},53758:function(e,n,t){var a=t(15671),i=t(43144),r=t(60136),o=t(29388),c=t(72791),s=t(16772),l=(t(88768),t(80184)),u=function(e){(0,r.Z)(t,e);var n=(0,o.Z)(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){return(0,l.jsx)("div",{className:"file-view-content flex-1 pdf-file-view",children:(0,l.jsx)(s.Z,{})})}}]),t}(c.Component);n.Z=u},24084:function(e,n,t){var a=t(15671),i=t(43144),r=t(60136),o=t(29388),c=t(72791),s=(t(74208),t(80184)),l=window.app.pageOptions,u=l.fileName,p=l.rawPath,d=function(e){(0,r.Z)(t,e);var n=(0,o.Z)(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){return(0,s.jsx)("div",{className:"file-view-content flex-1 svg-file-view",children:(0,s.jsx)("img",{src:p,alt:u,id:"svg-view"})})}}]),t}(c.Component);n.Z=d},29540:function(e,n,t){var a=t(1413),i=t(15671),r=t(43144),o=t(60136),c=t(29388),s=t(72791),l=t(34737),u=(t(32607),t(80184)),p=window.app.pageOptions.rawPath,d=function(e){(0,o.Z)(t,e);var n=(0,c.Z)(t);function t(){return(0,i.Z)(this,t),n.apply(this,arguments)}return(0,r.Z)(t,[{key:"render",value:function(){var e={autoplay:!1,controls:!0,preload:"auto",playbackRates:[.5,1,1.5,2],sources:[{src:p}]};return(0,u.jsx)("div",{className:"file-view-content flex-1 video-file-view",children:(0,u.jsx)(l.Z,(0,a.Z)({},e))})}}]),t}(s.Component);n.Z=d},6262:function(e,n,t){var a=t(15671),i=t(43144),r=t(60136),o=t(29388),c=t(72791),s=t(54164),l=t(91192),u=t.n(l),p=t(53585),d=t(80184),f=window.app.pageOptions,h=f.fileName,v=f.repoID,x=f.objID,m=f.path;var w=function(){return(0,d.jsx)("a",{href:"".concat(p.ze,"repo/").concat(v,"/").concat(x,"/download/?file_name=").concat(encodeURIComponent(h),"&p=").concat(encodeURIComponent(m)),className:"btn btn-secondary",children:(0,p.ih)("Download")})},Z=(t(14553),window.app.pageOptions),j=Z.fromTrash,y=Z.fileName,k=Z.commitTime,g=Z.canDownloadFile,N=Z.enableWatermark,b=Z.userNickName,C=function(e){(0,r.Z)(t,e);var n=(0,o.Z)(t);function t(e){return(0,a.Z)(this,t),n.call(this,e)}return(0,i.Z)(t,[{key:"render",value:function(){return(0,d.jsxs)("div",{className:"h-100 d-flex flex-column flex-1",children:[(0,d.jsxs)("div",{className:"file-view-header d-flex justify-content-between align-items-center",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{className:"file-title",children:y}),(0,d.jsx)("p",{className:"meta-info m-0",children:j?"".concat((0,p.ih)("Current Path: ")).concat((0,p.ih)("Trash")):k})]}),g&&(0,d.jsx)(w,{})]}),(0,d.jsx)("div",{className:"file-view-body flex-auto d-flex o-hidden",children:this.props.content})]})}}]),t}(c.Component);N&&u().init({watermark_txt:"".concat(p.aD," ").concat(b),watermark_alpha:.075});var O=C,F=window.app.pageOptions,D=F.canDownloadFile,I=F.err,P="File preview unsupported",E=function(e){(0,r.Z)(t,e);var n=(0,o.Z)(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){var e;return e=I==P||this.props.err==P?(0,d.jsx)("p",{children:(0,p.ih)("Online view is not applicable to this file format")}):(0,d.jsx)("p",{className:"error",children:I}),(0,d.jsx)("div",{className:"file-view-content flex-1 o-auto",children:(0,d.jsxs)("div",{className:"file-view-tip",children:[e,D&&(0,d.jsx)(w,{})]})})}}]),t}(c.Component),S=E,z=t(93586),T=t(24084),_=t(53758),L=t(42383),R=(t(77937),window.app.pageOptions),M=R.fileExt,U=R.fileContent,V=function(e){(0,r.Z)(t,e);var n=(0,o.Z)(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){return(0,d.jsx)("div",{className:"file-view-content flex-1 text-file-view",children:(0,d.jsx)(L.Z,{fileExt:M,value:U})})}}]),t}(c.Component),A=V,B=t(50850),G=window.app.pageOptions.fileContent,J=function(e){(0,r.Z)(t,e);var n=(0,o.Z)(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){return(0,d.jsx)("div",{className:"file-view-content flex-1 o-auto",children:(0,d.jsx)("div",{className:"md-content",children:(0,d.jsx)(B.av,{markdownContent:G,showTOC:!1,scriptSource:p.si+"js/mathjax/tex-svg.js"})})})}}]),t}(c.Component),W=J,q=t(76933),H=window.app.pageOptions.fileContent,K=function(e){(0,r.Z)(t,e);var n=(0,o.Z)(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){var e=H?JSON.parse(H):null;return(0,d.jsx)("div",{className:"file-view-content flex-1 o-auto sdoc-file-view p-0 d-flex flex-column",children:(0,d.jsx)(q.ZO,{document:e})})}}]),t}(c.Component),Q=K,X=t(29540),Y=t(93256),$=window.app.pageOptions,ee=$.fileType,ne=$.err,te=function(e){(0,r.Z)(t,e);var n=(0,o.Z)(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){if(ne)return(0,d.jsx)(O,{content:(0,d.jsx)(S,{})});var e;switch(ee){case"Image":e=(0,d.jsx)(z.Z,{tip:(0,d.jsx)(S,{})});break;case"SVG":e=(0,d.jsx)(T.Z,{});break;case"PDF":e=(0,d.jsx)(_.Z,{});break;case"Text":e=(0,d.jsx)(A,{});break;case"Markdown":e=(0,d.jsx)(W,{});break;case"SDoc":e=(0,d.jsx)(Q,{});break;case"Video":e=(0,d.jsx)(X.Z,{});break;case"Audio":e=(0,d.jsx)(Y.Z,{});break;default:e=(0,d.jsx)(S,{err:"File preview unsupported"})}return(0,d.jsx)(O,{content:e})}}]),t}(c.Component);s.render((0,d.jsx)(te,{}),document.getElementById("wrapper"))}},function(e){e.O(0,[351],(function(){return n=6262,e(e.s=n);var n}));e.O()}]);
//# sourceMappingURL=historyTrashFileView.7a96ace9.js.map