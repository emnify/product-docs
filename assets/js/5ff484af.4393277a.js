"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8707],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,k=m["".concat(c,".").concat(g)]||m[g]||d[g]||o;return a?n.createElement(k,s(s({ref:t},l),{},{components:a})):n.createElement(k,s({ref:t},l))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},978:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={description:"Move between and manage multiple workspaces",pagination_label:"Switching between workspaces",slug:"/workspaces/switch"},s='Switching between workspaces <span className="theme-doc-version-badge badge badge--primary beta">Beta</span>',i={unversionedId:"how-tos/workspaces/switch",id:"how-tos/workspaces/switch",title:'Switching between workspaces <span className="theme-doc-version-badge badge badge--primary beta">Beta</span>',description:"Move between and manage multiple workspaces",source:"@site/docs/how-tos/workspaces/switch.md",sourceDirName:"how-tos/workspaces",slug:"/workspaces/switch",permalink:"/workspaces/switch",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/how-tos/workspaces/switch.md",tags:[],version:"current",lastUpdatedAt:1688400984,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{description:"Move between and manage multiple workspaces",pagination_label:"Switching between workspaces",slug:"/workspaces/switch"},sidebar:"mainDocsSidebar",previous:{title:"Link an existing workspace",permalink:"/workspaces/link"},next:{title:"Business intelligence and analytics reports",permalink:"/portal/reports"}},c={},p=[],l={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"switching-between-workspaces-beta"},"Switching between workspaces ",(0,r.kt)("span",{className:"theme-doc-version-badge badge badge--primary beta"},"Beta")),(0,r.kt)("p",null,"One benefit of having ",(0,r.kt)("a",{parentName:"p",href:"/glossary#linked-workspaces"},"linked workspaces")," is that you can manage multiple ",(0,r.kt)("a",{parentName:"p",href:"/glossary#organization"},"organizations")," using one emnify account."),(0,r.kt)("p",null,"This guide shows you how to switch between your organizations via the ",(0,r.kt)("a",{parentName:"p",href:"/glossary#workspace-switcher"},"workspace switcher")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Only ",(0,r.kt)("strong",{parentName:"p"},"Admin")," ",(0,r.kt)("a",{parentName:"p",href:"/glossary#user-account"},"user accounts")," of the ",(0,r.kt)("a",{parentName:"p",href:"/glossary#main-organization"},"main organization")," can switch between workspaces.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/sign"},"Log in to your emnify account"),".\nYou should see your organization's name at the top of the primary sidebar.")),(0,r.kt)("img",{src:a(6653).Z,alt:""}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Click your organization's name (or the corresponding icons) to reveal the ",(0,r.kt)("strong",{parentName:"li"},"Workspaces")," modal.\nThis displays a list of all the workspaces linked to your organization, as well as ",(0,r.kt)("a",{parentName:"li",href:"/workspaces/link"},(0,r.kt)("strong",{parentName:"a"},"Link existing workspace"))," and ",(0,r.kt)("a",{parentName:"li",href:"/workspaces/create"},(0,r.kt)("strong",{parentName:"a"},"Create a new workspace"))," options."),(0,r.kt)("li",{parentName:"ol"},"Select another ",(0,r.kt)("a",{parentName:"li",href:"/glossary#organization"},"organization")," name to navigate to that workspace.")),(0,r.kt)("p",null,"In the following example, we're starting from the main ",(0,r.kt)("strong",{parentName:"p"},"AG General inc.")," workspace and selecting the ",(0,r.kt)("strong",{parentName:"p"},"AG EV-charging")," workspace."),(0,r.kt)("img",{src:a(4556).Z,alt:"",style:{height:500}}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The main organization workspace will be indicated with a building icon."),(0,r.kt)("img",{src:a(721).Z,alt:"",style:{width:300}}),(0,r.kt)("p",{parentName:"admonition"},"The workspace you're currently in will be indicated with a green checkmark."),(0,r.kt)("img",{src:a(2193).Z,alt:"",style:{width:300}})),(0,r.kt)("p",null,"Now you should be in another workspace. \ud83c\udf89"),(0,r.kt)("img",{src:a(5552).Z,alt:""}),(0,r.kt)("admonition",{title:"Feature requests",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Workspaces are new to emnify, so feedback and suggestions are very welcome.\nPlease ",(0,r.kt)("a",{parentName:"p",href:"https://emnify.canny.io/"},"open a ticket on Canny"),".")))}m.isMDXComponent=!0},2193:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-sidebar-workspaces-current-org-icon-ad8d1bcec28d021bf502ac9f3fcd538c.png"},6653:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-sidebar-workspaces-first-org-39a483abd3b622a42f6628b04949dd08.png"},721:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-sidebar-workspaces-main-org-icon-b582a7acfb0f6b9e0016cb8a4134702c.png"},4556:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-sidebar-workspaces-org-list-9f64ceb8a1d865a4ff59b3bb61c0bb10.png"},5552:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-sidebar-workspaces-second-org-5a114aecf4dfafaa0481946a1c6c6647.png"}}]);