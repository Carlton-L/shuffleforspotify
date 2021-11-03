"use strict";(self.webpackChunkshuffleforspotify=self.webpackChunkshuffleforspotify||[]).push([[246],{2902:function(t,e,a){function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.r(e),a.d(e,{default:function(){return w}});var i=a(4322),r=a.n(i),o=a(3032),l=a(7904),s=a(7294),c=a(5444),u=a(9425),d=a(7018),p=a(1861),f=a(2794),m=a(8148),y=a(9692),h=(0,y.default)(d.E.div).withConfig({displayName:"playlistCard__StyledContainer",componentId:"sc-1ivok3m-0"})(["width:325px;height:80px;display:table;justify-content:flex-start;border-radius:4px;padding:0px;overflow:hidden;margin:8px 0;cursor:",";color:",";}"],(function(t){return t.disabled?"default":"pointer"}),(function(t){return t.disabled?"#919496":"inherit"})),g=y.default.div.withConfig({displayName:"playlistCard__StyledImageFrame",componentId:"sc-1ivok3m-1"})(["width:80px;height:80px;object-fit:contain;display:table-cell;overflow:hidden;border-radius:4px 0 0 4px;"]),x=y.default.img.withConfig({displayName:"playlistCard__StyledImage",componentId:"sc-1ivok3m-2"})(["object-fit:contain;height:100%;width:100%;overflow:hidden;opacity:",";font-family:Arial,sans-serif;"],(function(t){return t.disabled?"0.5":"1"})),b=y.default.div.withConfig({displayName:"playlistCard__StyledContent",componentId:"sc-1ivok3m-3"})(["width:auto;height:100%;margin:auto;padding-left:25px;display:table-cell;vertical-align:middle;justify-content:center;background-color:rgba(255,255,255,0.1);color:inherit;"]),v=function(t){var e=t.children,a=t.image,n=t.onClick,i=t.disabled,r=t.loaded,o=t.item,c=s.useState(!1),u=(0,l.Z)(c,2),d=u[0],p=u[1];return s.createElement(h,{layout:!0,onClick:i?function(){}:function(){p(!0),n(o)},disabled:i,loaded:r,custom:d,initial:{opacity:0,x:-200},animate:{opacity:1,x:0},exit:{opacity:0},transition:{type:"spring",mass:.35,stiffness:75,duration:.3}},s.createElement(g,null,s.createElement(x,{src:a,alt:"playlist image",disabled:i})),s.createElement(b,null,e))};v.defaultProps={image:"https://res.cloudinary.com/carlton-dev/image/upload/v1635664043/Shuffle-for-Spotify/Album_sqqo3t.jpg",disabled:!1,loaded:0};var E=v,k=a(9776),S=a(220),w=function(t){var e,a=t.location,i=s.useState({}),y=(0,l.Z)(i,2),h=y[0],g=y[1],x=s.useState(!0),b=(0,l.Z)(x,2),v=b[0],w=b[1],C=s.useState(!1),Z=(0,l.Z)(C,2),j=Z[0],_=Z[1],I=s.useState(null),F=(0,l.Z)(I,2),A=F[0],B=F[1],N=function(){var t=(0,o.Z)(r().mark((function t(e){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.spotify.com/v1/me/playlists",{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return console.log(t),{error:!!t.error,data:t}})).catch((function(t){return{error:!0,data:t}}));case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return s.useEffect((0,o.Z)(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(w(!0),a.state){t.next=4;break}return(0,c.c4)("/"),t.abrupt("return");case 4:return t.next=6,N(a.state.token);case 6:if(e=t.sent,console.log(e),!e.error){t.next=12;break}return _(e.data.error),w(!1),t.abrupt("return");case 12:g({offset:e.data.offset,limit:e.data.limit,items:e.data.items,total:e.data.total}),w(!1);case 14:case"end":return t.stop()}}),t)}))),[]),s.createElement(p.Z,null,s.createElement(f.Z,null,v?s.createElement(m.Z,null):j?s.createElement(k.Z,null,"Error: ",s.createElement("br",null)," ",j.message):s.createElement("div",null,s.createElement(u.M,null,s.createElement(d.E.h2,{style:{fontSize:"28px",marginBottom:"16px"},layout:!0,initial:{opacity:0,x:-200},animate:{opacity:1,x:0},exit:{opacity:0,x:200},transition:{type:"spring",mass:.35,stiffness:75,duration:.3}},"Select a playlist"),h.items.map((function(t){return s.createElement(s.Fragment,null,s.createElement(E,{image:3===t.images.length?t.images[1].url:t.images[0].url,disabled:t.owner.id!==a.state.id,key:t.id,id:t.id,onClick:function(){return B(t.id)},item:t},s.createElement("p",{style:{marginBottom:"4px",fontFamily:"GothamSSm-Book",fontSize:"18px"}},t.name),s.createElement("p",{style:{color:"#919496",fontFamily:"GothamSSm-Book",fontSize:"12px"}},t.tracks.total," Songs")),A===t.id&&s.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},s.createElement(S.Z,{onClick:function(){return(0,c.c4)("/shuffleprogress")},initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{type:"spring",mass:.35,stiffness:75,duration:.3}},"SHUFFLE ",t.tracks.total," SONG",t.tracks.total>1&&"S")))})),s.createElement(d.E.div,(n(e={layout:!0,style:{display:"flex",alignItems:"center"}},"layout",!0),n(e,"initial",{opacity:0,x:-200}),n(e,"animate",{opacity:1,x:0}),n(e,"exit",{opacity:0,x:200}),n(e,"transition",{type:"spring",mass:.35,stiffness:75,duration:.3}),e),h.items<h.total&&s.createElement(S.Z,{color:"primary",variant:"outline",animate:{opacity:1,x:0},exit:{opacity:0,x:200},transition:{type:"spring",mass:.35,stiffness:75,duration:.3}},"LOAD MORE"))))))}}}]);
//# sourceMappingURL=component---src-pages-shuffle-js-03f88515adbe5edc5f59.js.map