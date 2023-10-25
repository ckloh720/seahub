"use strict";(self.webpackChunkseahub_frontend=self.webpackChunkseahub_frontend||[]).push([[539],{50906:function(e,n,r){var t=r(68825),i=r(38918),a=r(9522),o=r(39230),s=r(53585),c=window.app.config.lang,u=void 0===c?"en":c;t.ZP.use(i.Z).use(a.Z).use(o.Db).init({lng:u,fallbackLng:"en",ns:["sdoc-editor"],defaultNS:"sdoc-editor",whitelist:["en","zh-CN","fr","de","cs","es","es-AR","es-MX","ru"],backend:{loadPath:s.si+"sdoc-editor/locales/{{ lng }}/{{ ns }}.json"},debug:!1,interpolation:{escapeValue:!1},load:"currentOnly",react:{wait:!0}}),n.Z=t.ZP},87394:function(e,n,r){var t=r(72791),i=r(54164),a=r(39230),o=r(50906),s=r(95996),c=r(63446),u=r(15671),l=r(43144),d=r(60136),h=r(29388),g=r(67424),p=r(22228),S=r(51832),f=r(22386),m=r(65953),b=r(80184),D=function(e){(0,d.Z)(r,e);var n=(0,h.Z)(r);function r(e){var t;return(0,u.Z)(this,r),(t=n.call(this,e)).onInternalLinkToggle=function(){t.setState({isShowInternalLinkDialog:!t.state.isShowInternalLinkDialog})},t.unmark=function(){var e=t.props,n=e.repoID,r=e.docPath;p.I.sdocUnmarkAsDraft(n,r).then((function(e){t.props.unmarkDraft()})).catch((function(e){var n=s.c.getErrorMsg(e);S.Z.danger(n)}))},t.toggleStar=function(){var e=t.props,n=e.isStarred,r=e.repoID,i=e.docPath;n?p.I.unstarItem(r,i).then((function(e){t.props.toggleStar(!1)})).catch((function(e){var n=s.c.getErrorMsg(e);S.Z.danger(n)})):p.I.starItem(r,i).then((function(e){t.props.toggleStar(!0)})).catch((function(e){var n=s.c.getErrorMsg(e);S.Z.danger(n)}))},t.onShareToggle=function(){t.setState({isShowShareDialog:!t.state.isShowShareDialog})},t.state={isShowInternalLinkDialog:!1,isShowShareDialog:!1},t}return(0,l.Z)(r,[{key:"componentDidMount",value:function(){var e=g.Nd.getInstance();this.unsubscribeInternalLinkEvent=e.subscribe(g.dK.INTERNAL_LINK_CLICK,this.onInternalLinkToggle),this.unsubscribeStar=e.subscribe(g.dK.TOGGLE_STAR,this.toggleStar),this.unsubscribeUnmark=e.subscribe(g.dK.UNMARK_AS_DRAFT,this.unmark),this.unsubscribeShare=e.subscribe(g.dK.SHARE_SDOC,this.onShareToggle)}},{key:"componentWillUnmount",value:function(){this.unsubscribeInternalLinkEvent(),this.unsubscribeStar(),this.unsubscribeUnmark(),this.unsubscribeShare()}},{key:"render",value:function(){var e=this.props,n=e.repoID,r=e.docPath,t=e.docName,i=e.docPerm,a=this.state,o=a.isShowInternalLinkDialog,s=a.isShowShareDialog;return(0,b.jsxs)(b.Fragment,{children:[o&&(0,b.jsx)(f.Z,{repoID:n,path:r,onInternalLinkDialogToggle:this.onInternalLinkToggle}),s&&(0,b.jsx)(m.Z,{itemType:"file",itemPath:r,itemName:t,repoID:n,userPerm:i,toggleDialog:this.onShareToggle})]})}}]),r}(t.Component),v=D,k=function(e){(0,d.Z)(r,e);var n=(0,h.Z)(r);function r(e){var t;(0,u.Z)(this,r),(t=n.call(this,e)).toggleStar=function(e){t.setState({isStarred:e})},t.unmarkDraft=function(){t.setState({isDraft:!1})};var i=window.app.pageOptions,a=i.isStarred,o=i.isSdocDraft;return t.state={isStarred:a,isDraft:o},t}return(0,l.Z)(r,[{key:"render",value:function(){var e=window.seafile,n=e.repoID,r=e.docPath,i=e.docName,a=e.docPerm,o=this.state,s=o.isStarred,c=o.isDraft;return(0,b.jsxs)(t.Fragment,{children:[(0,b.jsx)(g.Qo,{isStarred:s,isDraft:c}),(0,b.jsx)(v,{repoID:n,docPath:r,docName:i,docPerm:a,isStarred:s,toggleStar:this.toggleStar,unmarkDraft:this.unmarkDraft})]})}}]),r}(t.Component),I=window.app.config,w=I.serviceURL,L=I.avatarURL,P=I.siteRoot,U=I.lang,Z=window.app.userInfo,R=Z.username,N=Z.name,T=window.app.pageOptions,j=T.repoID,A=T.repoName,x=T.parentDir,y=T.filePerm,C=T.docPath,F=T.docName,E=T.docUuid,O=T.seadocAccessToken,_=T.seadocServerUrl,K=T.assetsUrl,M=T.isSdocRevision,V=T.isPublished,G=T.originFilename,H=T.revisionCreatedAt,z=T.originFileVersion,B=T.originFilePath,Q=T.originDocUuid;window.seafile={repoID:j,docPath:C,docName:F,docUuid:E,isOpenSocket:!0,serviceUrl:w,accessToken:O,sdocServer:_,name:N,username:R,avatarURL:L,siteRoot:P,docPerm:y,historyURL:s.c.generateHistoryURL(P,j,C),parentFolderURL:"".concat(P,"library/").concat(j,"/").concat(s.c.encodePath(A+x)),assetsUrl:K,isShowInternalLink:!0,isStarIconShown:!0,isSdocRevision:M,isPublished:V,revisionURL:s.c.generateRevisionURL(P,j,C),originFilename:G,originFileVersion:z,originFilePath:B,originDocUuid:Q,revisionCreatedAt:H,lang:U},i.render((0,b.jsx)(a.a3,{i18n:o.Z,children:(0,b.jsx)(t.Suspense,{fallback:(0,b.jsx)(c.Z,{}),children:(0,b.jsx)(k,{})})}),document.getElementById("wrapper"))}},function(e){e.O(0,[351],(function(){return n=87394,e(e.s=n);var n}));e.O()}]);
//# sourceMappingURL=viewFileSdoc.689b3c6d.js.map