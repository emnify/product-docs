"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8269],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(a),k=n,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||o;return a?r.createElement(d,s(s({ref:t},l),{},{components:a})):r.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"Create a new workspace",description:"How to submit a request for a new workspace",pagination_label:"Create a new workspace",pagination_next:"how-tos/workspaces/link",slug:"/workspaces/create"},s='Create a new workspace <span className="theme-doc-version-badge badge badge--primary beta">beta</span>',i={unversionedId:"how-tos/workspaces/create",id:"how-tos/workspaces/create",title:"Create a new workspace",description:"How to submit a request for a new workspace",source:"@site/docs/how-tos/workspaces/create.md",sourceDirName:"how-tos/workspaces",slug:"/workspaces/create",permalink:"/workspaces/create",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/how-tos/workspaces/create.md",tags:[],version:"current",lastUpdatedAt:1689772761,formattedLastUpdatedAt:"Jul 19, 2023",frontMatter:{title:"Create a new workspace",description:"How to submit a request for a new workspace",pagination_label:"Create a new workspace",pagination_next:"how-tos/workspaces/link",slug:"/workspaces/create"},sidebar:"mainDocsSidebar",previous:{title:"SSO troubleshooting",permalink:"/sso/troubleshooting"},next:{title:"Link an existing workspace",permalink:"/workspaces/link"}},p={},c=[],l={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-new-workspace-beta"},"Create a new workspace ",(0,n.kt)("span",{className:"theme-doc-version-badge badge badge--primary beta"},"beta")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/glossary#company-account"},"Company accounts")," on the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.emnify.com/organisation-settings/subscription#plans"},(0,n.kt)("strong",{parentName:"a"},"Pro")," plan")," can have up to 5 ",(0,n.kt)("a",{parentName:"p",href:"/glossary#workspace"},"workspaces"),"."),(0,n.kt)("p",null,"There are many reasons to opt for multiple workspaces.\nFor example, organizations with foreign regional subsidiaries or companies producing products in multiple industries."),(0,n.kt)("p",null,"This guide shows you how to submit a request for a new workspace via the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal"),".\nAlternatively, you can also ",(0,n.kt)("a",{parentName:"p",href:"/workspaces/link"},"link existing workspaces")," if you already have two or more created."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Only ",(0,n.kt)("strong",{parentName:"p"},"Administrator")," ",(0,n.kt)("a",{parentName:"p",href:"/glossary#user-account"},"user accounts")," of customers on the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.emnify.com/organisation-settings/subscription#plans"},(0,n.kt)("strong",{parentName:"a"},"Pro")," plan")," can create new workspaces.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://portal.emnify.com/sign"},"Log in to your emnify account"),".\nYou should see your organization's name at the top of the primary sidebar.")),(0,n.kt)("img",{src:a(8566).Z,alt:""}),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Click your organization's name (or the corresponding icons) to reveal the ",(0,n.kt)("strong",{parentName:"li"},"Workspaces")," modal."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Create a new workspace"),".")),(0,n.kt)("img",{src:a(763).Z,alt:"",style:{height:450}}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Once the ",(0,n.kt)("strong",{parentName:"li"},"Request for a new workspace")," modal appears, fill in your ",(0,n.kt)("strong",{parentName:"li"},"Contact email")," and provide more details or any requirements for the new workspace."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Send Request"),".")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/glossary#organization"},"Organizations")," can only submit one workspace request at a time.\nIf you need more than one workspace, include those details in the body of your request.")),(0,n.kt)("p",null,"If you see the ",(0,n.kt)("strong",{parentName:"p"},"Request Sent")," modal, your request has been submitted successfully. \ud83c\udf89"),(0,n.kt)("p",null,"From there, the emnify team processes your request and contacts you to sort out the requirements.\nThen, the new workspace are created and set up for you."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The process may take time, as each new workspace requires a new contract.\nIt usually takes 2-7 days for your new workspace to be ready.")),(0,n.kt)("admonition",{title:"Feature requests",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Workspaces are new to emnify, so feedback and suggestions are very welcome.\nPlease ",(0,n.kt)("a",{parentName:"p",href:"https://emnify.canny.io/"},"open a ticket on Canny"),".")))}u.isMDXComponent=!0},763:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/portal-sidebar-workspaces-create-a2cb14bddd6ca54fa32ffa8219fcac34.png"},8566:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/portal-sidebar-workspaces-5fd40b1162187e0436cf80aad1762e24.png"}}]);