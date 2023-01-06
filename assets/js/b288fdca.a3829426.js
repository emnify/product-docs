"use strict";(self.webpackChunkemnify_docs=self.webpackChunkemnify_docs||[]).push([[50],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return r?o.createElement(d,s(s({ref:t},u),{},{components:r})):o.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:n,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const i={description:"Tips for combating common SSO issues"},s="Troubleshooting",a={unversionedId:"sso/troubleshooting",id:"sso/troubleshooting",title:"Troubleshooting",description:"Tips for combating common SSO issues",source:"@site/docs/sso/troubleshooting.md",sourceDirName:"sso",slug:"/sso/troubleshooting",permalink:"/product-docs/sso/troubleshooting",draft:!1,editUrl:"https://github.com/EMnify/product-docs/blob/main/docs/sso/troubleshooting.md",tags:[],version:"current",frontMatter:{description:"Tips for combating common SSO issues"},sidebar:"ourSidebar",previous:{title:"Setup SSO with Google Cloud Platform",permalink:"/product-docs/sso/google-cloud-platform"},next:{title:"Glossary",permalink:"/product-docs/glossary"}},l={},c=[{value:"Microsoft Active Directory",id:"microsoft-active-directory",level:2},{value:"General",id:"general",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"If you encounter any issues while setting up SSO, use the following suggestions to help troubleshoot."),(0,n.kt)("h2",{id:"microsoft-active-directory"},"Microsoft Active Directory"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Are you part of the Azure Tenant?"),(0,n.kt)("li",{parentName:"ul"},'Do you see a "User canceled social login" message? Make sure the ',(0,n.kt)("a",{parentName:"li",href:"microsoft-active-directory#sso-with-microsoft"},"application registration is set to ",(0,n.kt)("strong",{parentName:"a"},"Multitenant")),".")),(0,n.kt)("h2",{id:"general"},"General"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Are you part of the emnify enterprise?"),(0,n.kt)("li",{parentName:"ul"},"Is your user account enabled on emnify?")),(0,n.kt)("p",null,"If everything looks correct and you still have issues, try again using an incognito tab. "),(0,n.kt)("p",null,"You can also ",(0,n.kt)("a",{parentName:"p",href:"https://support.emnify.com/"},"contact support"),"."))}p.isMDXComponent=!0}}]);