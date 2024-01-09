"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>w});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,w=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(w,s(s({ref:t},l),{},{components:n})):a.createElement(w,s({ref:t},l))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={description:"Move between and manage multiple workspaces",last_update:{date:"06-17-2023"},slug:"/workspaces/switch"},s="Switch between workspaces",i={unversionedId:"how-tos/workspaces/switch",id:"how-tos/workspaces/switch",title:"Switch between workspaces",description:"Move between and manage multiple workspaces",source:"@site/docs/how-tos/workspaces/switch.mdx",sourceDirName:"how-tos/workspaces",slug:"/workspaces/switch",permalink:"/workspaces/switch",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/how-tos/workspaces/switch.mdx",tags:[],version:"current",lastUpdatedAt:168696e4,formattedLastUpdatedAt:"Jun 17, 2023",frontMatter:{description:"Move between and manage multiple workspaces",last_update:{date:"06-17-2023"},slug:"/workspaces/switch"},sidebar:"mainDocsSidebar",previous:{title:"Link an existing workspace",permalink:"/workspaces/link"},next:{title:"Glossary",permalink:"/glossary"}},c={},p=[],l={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"switch-between-workspaces"},"Switch between workspaces"),(0,r.kt)("p",null,"One benefit of having linked workspaces is that you can manage multiple organizations using one emnify account."),(0,r.kt)("p",null,"This guide shows you how to switch between your organizations via the workspace switcher in the emnify Portal."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Only ",(0,r.kt)("strong",{parentName:"p"},"Administrator")," user accounts of the main organization can switch between workspaces.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/sign"},"Log in to your emnify account"),".\nYou should see your organization's name at the top of the primary sidebar.")),(0,r.kt)("img",{src:n(6653).Z,alt:"",style:{width:650}}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Click your organization's name (or the corresponding icons) to reveal the ",(0,r.kt)("strong",{parentName:"li"},"Workspaces")," modal.\nThis displays a list of all the workspaces linked to your organization, as well as ",(0,r.kt)("strong",{parentName:"li"},"Link existing workspace")," and ",(0,r.kt)("strong",{parentName:"li"},"Create a new workspace")," options."),(0,r.kt)("li",{parentName:"ol"},"Select another organization name to navigate to that workspace.")),(0,r.kt)("p",null,"The following example starts from the main ",(0,r.kt)("strong",{parentName:"p"},"AG General inc.")," workspace and selects the ",(0,r.kt)("strong",{parentName:"p"},"AG EV-charging")," workspace."),(0,r.kt)("img",{src:n(4556).Z,alt:"",style:{height:500}}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The main organization workspace is indicated with a building icon."),(0,r.kt)("img",{src:n(721).Z,alt:"",style:{width:300}}),(0,r.kt)("p",{parentName:"admonition"},"The workspace you're currently in is indicated with a green checkmark."),(0,r.kt)("img",{src:n(2193).Z,alt:"",style:{width:300}})),(0,r.kt)("p",null,"Now you should be in another workspace. \ud83c\udf89"),(0,r.kt)("img",{src:n(5552).Z,alt:"",style:{width:650}}),(0,r.kt)("admonition",{title:"Feature requests",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Workspaces are new to emnify, so feedback and suggestions are very welcome.\nPlease ",(0,r.kt)("a",{parentName:"p",href:"https://emnify.canny.io/"},"open a ticket on Canny"),".")))}d.isMDXComponent=!0},2193:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/portal-sidebar-workspaces-current-org-icon-ad8d1bcec28d021bf502ac9f3fcd538c.png"},6653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/portal-sidebar-workspaces-first-org-fdce0e7f84b6372d8ca2607ef3fdaa86.png"},721:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/portal-sidebar-workspaces-main-org-icon-b582a7acfb0f6b9e0016cb8a4134702c.png"},4556:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/portal-sidebar-workspaces-org-list-9f64ceb8a1d865a4ff59b3bb61c0bb10.png"},5552:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/portal-sidebar-workspaces-second-org-0c22e46a919a8db16460f27a702aa70d.png"}}]);