"use strict";(self.webpackChunkshuffleforspotify=self.webpackChunkshuffleforspotify||[]).push([[246],{754:function(t,e,a){var n=a(7904),i=a(7294),r=a(9692),o=a(7018),l=(0,r.default)(o.E.div).withConfig({displayName:"playlistCard__StyledContainer",componentId:"sc-1ivok3m-0"})(["width:325px;height:80px;display:table;justify-content:flex-start;border-radius:4px;padding:0px;overflow:hidden;margin:8px 0;cursor:",";color:",";background-repeat:no-repeat;background-image:linear-gradient(",",",");background-size:","%;transition:background-size 0.5s ease-out;}"],(function(t){return t.disabled?"default":"pointer"}),(function(t){return t.disabled?"#919496":"inherit"}),(function(t){return t.theme.colors.primary.light}),(function(t){return t.theme.colors.primary.dark}),(function(t){return t.loaded})),s=r.default.div.withConfig({displayName:"playlistCard__StyledImageFrame",componentId:"sc-1ivok3m-1"})(["width:80px;height:80px;object-fit:contain;display:table-cell;overflow:hidden;border-radius:4px 0 0 4px;"]),c=r.default.img.withConfig({displayName:"playlistCard__StyledImage",componentId:"sc-1ivok3m-2"})(["object-fit:contain;height:100%;width:100%;overflow:hidden;opacity:",";font-family:Arial,sans-serif;"],(function(t){return t.disabled?"0.5":"1"})),u=r.default.div.withConfig({displayName:"playlistCard__StyledContent",componentId:"sc-1ivok3m-3"})(["width:auto;height:100%;margin:auto;padding-left:25px;display:table-cell;vertical-align:middle;justify-content:center;background-color:rgba(255,255,255,0.1);color:inherit;"]),d=function(t){var e=t.children,a=t.image,r=t.onClick,o=t.disabled,d=t.loaded,p=t.item,m=i.useState(!1),f=(0,n.Z)(m,2),y=f[0],h=f[1];return i.createElement(l,{layout:!0,onClick:o?function(){}:function(){h(!0),r(p)},disabled:o,loaded:d,custom:y,initial:{opacity:0},animate:{opacity:1,x:0},exit:{opacity:0,x:200},transition:{type:"spring",mass:.35,stiffness:75,duration:.3}},i.createElement(s,null,i.createElement(c,{src:a,alt:"playlist image",disabled:o})),i.createElement(u,null,e))};d.defaultProps={image:"https://res.cloudinary.com/carlton-dev/image/upload/v1635664043/Shuffle-for-Spotify/Album_sqqo3t.jpg",disabled:!1,loaded:0},e.Z=d},5982:function(t,e,a){a.r(e);var n=a(6222),i=a(4322),r=a.n(i),o=a(3032),l=a(7904),s=a(7294),c=a(5444),u=a(7018),d=a(9425),p=a(1861),m=a(2794),f=a(8148),y=a(754),h=a(9776),g=a(220);e.default=function(t){var e,a=t.location,i=s.useState({}),x=(0,l.Z)(i,2),b=x[0],k=x[1],E=s.useState(!0),v=(0,l.Z)(E,2),S=v[0],Z=v[1],w=s.useState(!1),C=(0,l.Z)(w,2),j=C[0],_=C[1],I=s.useState(null),z=(0,l.Z)(I,2),F=z[0],A=z[1],B=function(){var t=(0,o.Z)(r().mark((function t(e){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.spotify.com/v1/me/playlists",{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return{error:!!t.error,data:t}})).catch((function(t){return{error:!0,data:t}}));case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return s.useEffect((0,o.Z)(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Z(!0),a.state){t.next=4;break}return(0,c.c4)("/"),t.abrupt("return");case 4:return t.next=6,B(a.state.token);case 6:if(!(e=t.sent).error){t.next=11;break}return _(e.data.error),Z(!1),t.abrupt("return");case 11:e.data.items.forEach((function(t,e,a){0===t.images.length&&t.images.push({url:null})})),k({offset:e.data.offset,limit:e.data.limit,items:e.data.items,total:e.data.total}),console.log(e.data),Z(!1);case 15:case"end":return t.stop()}}),t)}))),[]),s.createElement(p.Z,null,s.createElement(m.Z,null,S?s.createElement(f.Z,null):j?s.createElement(h.Z,null,"Error: ",s.createElement("br",null)," ",j.message):s.createElement(u.E.div,{initial:{opacity:0,x:-200},animate:{opacity:1,x:0},exit:{opacity:0,x:200},transition:{type:"spring",mass:.35,stiffness:75,duration:.3}},s.createElement(u.E.h2,{key:"1",style:{fontSize:"28px",marginBottom:"16px"},layout:!0},"Select a playlist"),s.createElement(d.M,null,b.items.map((function(t){return s.createElement(s.Fragment,{key:t.id},s.createElement(y.Z,{image:3===t.images.length?t.images[1].url:t.images[0].url,disabled:t.owner.id!==a.state.id||!t.images[0].url,key:t.id,id:t.id,onClick:function(){return A(t.id)},item:t},s.createElement("p",{style:{marginBottom:"4px",fontFamily:"GothamSSm-Book",fontSize:"18px"}},t.name),s.createElement("p",{style:{color:"#919496",fontFamily:"GothamSSm-Book",fontSize:"12px"}},t.tracks.total," Songs")),F===t.id&&s.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},s.createElement(g.Z,{onClick:function(){return(0,c.c4)("/run",{state:{token:a.state.token,list:t,method:"shuffle"},replace:!0})},color:"primary",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{type:"spring",mass:.35,stiffness:75,duration:.3}},"SHUFFLE ",t.tracks.total," SONG",t.tracks.total>1&&"S")))})),s.createElement(u.E.div,(e={layout:!0,style:{display:"flex",alignItems:"center"}},(0,n.Z)(e,"layout",!0),(0,n.Z)(e,"initial",{opacity:0}),(0,n.Z)(e,"animate",{opacity:1}),(0,n.Z)(e,"exit",{opacity:0,x:200}),(0,n.Z)(e,"transition",{type:"spring",mass:.35,stiffness:75,duration:.3}),e),b.items<b.total&&s.createElement(g.Z,{color:"primary",variant:"outline",animate:{opacity:1,x:0},exit:{opacity:0,x:200},transition:{type:"spring",mass:.35,stiffness:75,duration:.3}},"LOAD MORE"))))))}},6222:function(t,e,a){function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,{Z:function(){return n}})}}]);