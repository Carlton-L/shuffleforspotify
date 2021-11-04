"use strict";(self.webpackChunkshuffleforspotify=self.webpackChunkshuffleforspotify||[]).push([[74],{2794:function(e,t,i){var n=i(7294),a=i(9692).default.main.withConfig({displayName:"contentContainer__StyledContainer",componentId:"sc-1hjpfh1-0"})(["font-family:'GothamSSm-Bold';background-image:linear-gradient(#170e5b,#131313 435px);min-height:100vh;padding-top:30px;padding-bottom:70px;display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-box-align:center;-webkit-box-pack:center;color:",";"],(function(e){return e.theme.colors.text.primary}));t.Z=function(e){var t=e.children;return n.createElement(a,null,t)}},9776:function(e,t,i){var n=i(7294),a=i(9692),o=a.default.div.withConfig({displayName:"errorDialog__StyledContainer",componentId:"sc-ruezl7-0"})(["background-color:#D41A2B;display:flex;justify-content:space-between;align-items:center;padding:22px;margin-top:50px;margin-bottom:50px;"]),r=a.default.div.withConfig({displayName:"errorDialog__StyledContent",componentId:"sc-ruezl7-1"})(["font-family:'GothamSSm-Book';min-width:200px;max-width:250px;font-size 12px;text-align:center;margin-left:5px;line-height:15px;"]),l=a.default.img.withConfig({displayName:"errorDialog__StyledSvg",componentId:"sc-ruezl7-2"})(["width:15px;"]);t.Z=function(e){var t=e.children;return n.createElement(o,null,n.createElement(l,{src:i(7050).Z,alt:"Error flag"}),n.createElement(r,null,t))}},8148:function(e,t,i){var n=i(7294),a=i(9692).default.div.withConfig({displayName:"loadingSpinner__StyledSpinner",componentId:"sc-1s4nz5x-0"})(["width:100px;height:100px;border-radius:50%;background:conic-gradient(rgba(29,185,84,25%),#1DB954);position:relative;animation:rotate 1.4s linear infinite;transform:translateZ(0);&:after{background:#191414;width:75%;height:75%;border-radius:50%;content:'';margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;}@keyframes rotate{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"]);t.Z=function(){return n.createElement(a,null)}},754:function(e,t,i){var n=i(7904),a=i(7294),o=i(9692),r=i(7018),l=(0,o.default)(r.E.div).withConfig({displayName:"playlistCard__StyledContainer",componentId:"sc-1ivok3m-0"})(["width:325px;height:80px;display:table;justify-content:flex-start;border-radius:4px;padding:0px;overflow:hidden;margin:8px 0;cursor:",";color:",";background-repeat:no-repeat;background-image:linear-gradient(",",",");background-size:","%;transition:background-size 0.5s ease-out;}"],(function(e){return e.disabled?"default":"pointer"}),(function(e){return e.disabled?"#919496":"inherit"}),(function(e){return e.theme.colors.primary.light}),(function(e){return e.theme.colors.primary.dark}),(function(e){return e.loaded})),d=o.default.div.withConfig({displayName:"playlistCard__StyledImageFrame",componentId:"sc-1ivok3m-1"})(["width:80px;height:80px;object-fit:contain;display:table-cell;overflow:hidden;border-radius:4px 0 0 4px;"]),c=o.default.img.withConfig({displayName:"playlistCard__StyledImage",componentId:"sc-1ivok3m-2"})(["object-fit:contain;height:100%;width:100%;overflow:hidden;opacity:",";font-family:Arial,sans-serif;"],(function(e){return e.disabled?"0.5":"1"})),s=o.default.div.withConfig({displayName:"playlistCard__StyledContent",componentId:"sc-1ivok3m-3"})(["width:auto;height:100%;margin:auto;padding-left:25px;display:table-cell;vertical-align:middle;justify-content:center;background-color:rgba(255,255,255,0.1);color:inherit;"]),u=function(e){var t=e.children,i=e.image,o=e.onClick,r=e.disabled,u=e.loaded,m=e.item,p=a.useState(!1),f=(0,n.Z)(p,2),g=f[0],h=f[1];return a.createElement(l,{layout:!0,onClick:r?function(){}:function(){h(!0),o(m)},disabled:r,loaded:u,custom:g,initial:{opacity:0},animate:{opacity:1,x:0},exit:{opacity:0,x:200},transition:{type:"spring",mass:.35,stiffness:75,duration:.3}},a.createElement(d,null,a.createElement(c,{src:i,alt:"playlist image",disabled:r})),a.createElement(s,null,t))};u.defaultProps={image:"https://res.cloudinary.com/carlton-dev/image/upload/v1635664043/Shuffle-for-Spotify/Album_sqqo3t.jpg",disabled:!1,loaded:0},t.Z=u},1861:function(e,t,i){var n=i(7294),a=i(9692),o=i(3751),r=i(9219),l=i(783),d=i(541);t.Z=function(e){var t=e.children,i=e.title,c=void 0!==i&&i,s=e.description,u=void 0!==s&&s,m=e.image,p=void 0!==m&&m,f=e.path,g=void 0!==f&&f;e.props;return n.createElement(n.Fragment,null,n.createElement(o.Z,{title:c,description:u,image:p,path:g}),n.createElement(d.Z,null),n.createElement(a.ThemeProvider,{theme:l.Z},n.createElement(r.Z,null),t))}},4803:function(e,t,i){i.r(t);var n=i(7294),a=i(8037),o=i(1861),r=i(2794);i(8148),i(9776),i(754);t.default=function(e){var t=e.location;return n.useEffect((function(){t.state||(0,a.c4)("/")}),[]),n.createElement(o.Z,null,n.createElement(r.Z,null,"Content Placeholder"))}},7050:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MC4yOSA5Ny43NSI+PHBhdGggZD0iTTIyLjEsOTguODhIMTQuODZWMS4xMkg4NS4xNGwtMjksMjksMjksMjloLTYzWm0wLTQ3LjA3SDY3LjY2TDQ1Ljk0LDMwLjA5LDY3LjY2LDguMzdIMjIuMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNC44NiAtMS4xMykiLz48L3N2Zz4="}}]);