(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[8],{1565:function(e,t,a){a(54),e.exports=a(1566)},1566:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(7),i=a(9),r=a(8),o=a(2),s=a.n(o),l=a(25),u=a.n(l),j=a(169),b=a(139),p=a(252),f=a(316),d=a(317),O=a(318),v=a(319),h=a(0),x=window.app.pageOptions,m=x.fileType,w=x.err,y=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){if(w)return Object(h.jsx)(j.a,{content:Object(h.jsx)(b.a,{})});var e;switch(m){case"Image":e=Object(h.jsx)(p.a,{tip:Object(h.jsx)(b.a,{}),canUseThumbnail:!0});break;case"XMind":e=Object(h.jsx)(p.a,{tip:Object(h.jsx)(b.a,{})});break;case"SVG":e=Object(h.jsx)(f.a,{});break;case"PDF":e=Object(h.jsx)(d.a,{});break;case"Video":e=Object(h.jsx)(O.a,{});break;case"Audio":e=Object(h.jsx)(v.a,{})}return Object(h.jsx)(j.a,{content:e})}}]),a}(s.a.Component);u.a.render(Object(h.jsx)(y,{}),document.getElementById("wrapper"))},252:function(e,t,a){"use strict";var n,c,i=a(6),r=a(7),o=a(9),s=a(8),l=a(2),u=a.n(l),j=a(5),b=a(1),p=(a(515),a(0)),f=window.app.pageOptions,d=f.repoID,O=f.repoEncrypted,v=f.fileExt,h=f.filePath,x=f.fileName,m=f.thumbnailSizeForOriginal,w=f.previousImage,y=f.nextImage,g=f.rawPath,k=f.xmindImageSrc;w&&(n="".concat(b.lc,"lib/").concat(d,"/file").concat(j.a.encodePath(w))),y&&(c="".concat(b.lc,"lib/").concat(d,"/file").concat(j.a.encodePath(y)));var N=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleLoadFailure=function(){n.setState({loadFailed:!0})},n.state={loadFailed:!1},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",(function(e){w&&37==e.keyCode&&(location.href=n),y&&39==e.keyCode&&(location.href=c)}))}},{key:"render",value:function(){if(this.state.loadFailed)return this.props.tip;var e="";this.props.canUseThumbnail&&!O&&["tif","tiff","psd"].includes(v)&&(e="".concat(b.lc,"thumbnail/").concat(d,"/").concat(m).concat(j.a.encodePath(h)));var t=k?"".concat(b.lc).concat(k):"";return Object(p.jsxs)("div",{className:"file-view-content flex-1 image-file-view",children:[w&&Object(p.jsx)("a",{href:n,id:"img-prev",title:Object(b.nb)("you can also press \u2190 "),children:Object(p.jsx)("span",{className:"fas fa-chevron-left"})}),y&&Object(p.jsx)("a",{href:c,id:"img-next",title:Object(b.nb)("you can also press \u2192"),children:Object(p.jsx)("span",{className:"fas fa-chevron-right"})}),Object(p.jsx)("img",{src:t||e||g,alt:x,id:"image-view",onError:this.handleLoadFailure})]})}}]),a}(u.a.Component);t.a=N},316:function(e,t,a){"use strict";var n=a(6),c=a(7),i=a(9),r=a(8),o=a(2),s=a.n(o),l=(a(518),a(0)),u=window.app.pageOptions,j=u.fileName,b=u.rawPath,p=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"file-view-content flex-1 svg-file-view",children:Object(l.jsx)("img",{src:b,alt:j,id:"svg-view"})})}}]),a}(s.a.Component);t.a=p},317:function(e,t,a){"use strict";var n=a(6),c=a(7),i=a(9),r=a(8),o=a(2),s=a.n(o),l=a(154),u=(a(304),a(0)),j=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"file-view-content flex-1 pdf-file-view",children:Object(u.jsx)(l.a,{})})}}]),a}(s.a.Component);t.a=j},318:function(e,t,a){"use strict";var n=a(42),c=a(6),i=a(7),r=a(9),o=a(8),s=a(2),l=a.n(s),u=a(250),j=(a(517),a(0)),b=window.app.pageOptions.rawPath,p=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e={autoplay:!1,controls:!0,preload:"auto",sources:[{src:b}]};return Object(j.jsx)("div",{className:"file-view-content flex-1 video-file-view",children:Object(j.jsx)(u.a,Object(n.a)({},e))})}}]),a}(l.a.Component);t.a=p},319:function(e,t,a){"use strict";var n=a(42),c=a(6),i=a(7),r=a(9),o=a(8),s=a(2),l=a.n(s),u=a(251),j=(a(519),a(0)),b=window.app.pageOptions.rawPath,p=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e={autoplay:!1,controls:!0,preload:"auto",sources:[{src:b}]};return Object(j.jsx)("div",{className:"file-view-content flex-1 audio-file-view",children:Object(j.jsx)(u.a,Object(n.a)({},e))})}}]),a}(l.a.Component);t.a=p}},[[1565,1,0]]]);
//# sourceMappingURL=fileView.chunk.js.map