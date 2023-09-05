"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[9656],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),d=l(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||k[m]||r;return n?a.createElement(g,i(i({ref:e},c),{},{components:n})):a.createElement(g,i({ref:e},c))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[d]="string"==typeof t?t:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6694:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={description:"Add or view existing application tokens on the Integrations page of the emnify Portal",slug:"/portal/application-tokens"},i="Application tokens",p={unversionedId:"portal/integrations/application-tokens",id:"portal/integrations/application-tokens",title:"Application tokens",description:"Add or view existing application tokens on the Integrations page of the emnify Portal",source:"@site/docs/portal/integrations/application-tokens.md",sourceDirName:"portal/integrations",slug:"/portal/application-tokens",permalink:"/portal/application-tokens",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/portal/integrations/application-tokens.md",tags:[],version:"current",lastUpdatedAt:1693920212,formattedLastUpdatedAt:"Sep 5, 2023",frontMatter:{description:"Add or view existing application tokens on the Integrations page of the emnify Portal",slug:"/portal/application-tokens"},sidebar:"mainDocsSidebar",previous:{title:"No-code workflows",permalink:"/portal/no-code"},next:{title:"Reports",permalink:"/portal/reports"}},s={},l=[{value:"Add a new token",id:"add-a-new-token",level:2}],c={toc:l};function d(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"application-tokens"},"Application tokens"),(0,o.kt)("p",null,"To add or view existing ",(0,o.kt)("a",{parentName:"p",href:"/glossary#application-tokens"},"application tokens"),", navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://portal.emnify.com/integrations"},(0,o.kt)("strong",{parentName:"a"},"Integrations"))," and then ",(0,o.kt)("a",{parentName:"p",href:"https://portal.emnify.com/integrations#application-tokens"},(0,o.kt)("strong",{parentName:"a"},"Application Tokens")),"."),(0,o.kt)("h2",{id:"add-a-new-token"},"Add a new token"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Add First Token")," or ",(0,o.kt)("strong",{parentName:"li"},"Add Token"),"."),(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("strong",{parentName:"li"},"Description")," and optionally add an ",(0,o.kt)("strong",{parentName:"li"},"Expiry date")," or ",(0,o.kt)("strong",{parentName:"li"},"IP restriction"),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"While adding an expiration date and IP restriction are technically optional, it's ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"highly recommended"))," as an additional security measure."),(0,o.kt)("p",{parentName:"admonition"},"If your token is compromised, the ",(0,o.kt)("strong",{parentName:"p"},"IP restriction")," helps limit the attacker's access, while having an ",(0,o.kt)("strong",{parentName:"p"},"Expiry date")," set means the token is short-lived and the attacker has no way to generate a new one.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Create Application Token"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Copy Token")," and paste it into a secure location for future use.")),(0,o.kt)("details",{className:"custom-details-troubleshooting"},(0,o.kt)("summary",null,"Show how to add a new token in the Portal"),(0,o.kt)("p",null,"  Collapse the following sections or go to ",(0,o.kt)("strong",{parentName:"p"},"Application Tokens"),".  "),(0,o.kt)("img",{src:n(5382).Z,alt:""}),(0,o.kt)("p",null,"  Select ",(0,o.kt)("strong",{parentName:"p"},"Add Token")," or ",(0,o.kt)("strong",{parentName:"p"},"Add First Token"),".  "),(0,o.kt)("img",{src:n(2360).Z,alt:""}),(0,o.kt)("p",null,"  After choosing a descriptive label and optionally adding an ",(0,o.kt)("strong",{parentName:"p"},"Expiry date")," or ",(0,o.kt)("strong",{parentName:"p"},"IP restriction"),", select ",(0,o.kt)("strong",{parentName:"p"},"Create Application Token"),".  "),(0,o.kt)("img",{src:n(2691).Z,alt:""}),(0,o.kt)("p",null,"  This generates your token.\nSelect ",(0,o.kt)("strong",{parentName:"p"},"Copy Token")," and paste it in a secure location for future use."),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Warning"),": the token can only be copied during this session.\nYou can't retrieve it later in another session."),(0,o.kt)("img",{src:n(8473).Z,alt:""})))}d.isMDXComponent=!0},2360:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/application-tokens-add-first-token-228ceb2e0a4ff6949044f577a55cef9b.png"},2691:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/application-tokens-add-token-dialog-76902e29a4a6ae70590bdd552d0fc864.png"},5382:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/integrations-application-tokens-624117803acfd04998d595ab3fdb8557.png"},8473:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/token-created-66d18454ffb5745695ed31a78e8ec99b.png"}}]);