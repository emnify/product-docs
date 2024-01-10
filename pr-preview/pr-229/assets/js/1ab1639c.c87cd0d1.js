"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2357],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={description:"Improve network security and simplify user administration",last_update:{date:"07-20-2023"},slug:"/sso"},a="Single sign-on",s={unversionedId:"portal/organization/sso",id:"portal/organization/sso",title:"Single sign-on",description:"Improve network security and simplify user administration",source:"@site/docs/portal/organization/sso.md",sourceDirName:"portal/organization",slug:"/sso",permalink:"/pr-preview/pr-229/sso",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/portal/organization/sso.md",tags:[],version:"current",lastUpdatedAt:1689811200,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{description:"Improve network security and simplify user administration",last_update:{date:"07-20-2023"},slug:"/sso"},sidebar:"mainDocsSidebar",previous:{title:"Billing",permalink:"/pr-preview/pr-229/portal/org/billing"},next:{title:"Workspaces",permalink:"/pr-preview/pr-229/workspaces"}},l={},p=[{value:"Providers",id:"providers",level:2},{value:"Available guides",id:"available-guides",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"single-sign-on"},"Single sign-on"),(0,o.kt)("p",null,"The emnify Portal offers single sign-on (SSO) with select providers.\nSSO improves account security and simplifies user administration."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"SSO comes with the ",(0,o.kt)("strong",{parentName:"p"},"Pro Package"),".")),(0,o.kt)("h2",{id:"providers"},"Providers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Microsoft"),': Out-of-the-box integration with Microsoft Azure Active Directory "Enterprise App"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OIDC"),": Open ID Connect is an open standard for Authentication and Authorization.\nUse this provider for OAuth 2.0 identity providers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Google"),": Out-of-the-box integration with Google")),(0,o.kt)("h2",{id:"available-guides"},"Available guides"),(0,o.kt)("p",null,"The following guides offer step-by-step guidance for enabling SSO for your organization:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sso/microsoft-active-directory"},"Setup SSO with Microsoft Active Directory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sso/google-cloud-platform"},"Setup SSO with Google Cloud Platform"))))}u.isMDXComponent=!0}}]);