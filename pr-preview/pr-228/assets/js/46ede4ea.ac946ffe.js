"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(n),d=a,f=l["".concat(p,".").concat(d)]||l[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={description:"Introduce the OpenAPI structure and code samples",last_update:{date:"11-02-2021"},pagination_next:"rest/sms-operations",pagination_prev:null,slug:"/rest"},o="emnify REST API",s={unversionedId:"rest/index",id:"rest/index",title:"emnify REST API",description:"Introduce the OpenAPI structure and code samples",source:"@site/docs/rest/index.md",sourceDirName:"rest",slug:"/rest",permalink:"/pr-preview/pr-228/rest",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/rest/index.md",tags:[],version:"current",lastUpdatedAt:1635811200,formattedLastUpdatedAt:"Nov 2, 2021",frontMatter:{description:"Introduce the OpenAPI structure and code samples",last_update:{date:"11-02-2021"},pagination_next:"rest/sms-operations",pagination_prev:null,slug:"/rest"},sidebar:"mainDocsSidebar",next:{title:"Send and receive SMS",permalink:"/pr-preview/pr-228/rest/sms-operations"}},p={},c=[{value:"Authentication",id:"authentication",level:2},{value:"Code samples",id:"code-samples",level:2}],u={toc:c};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"emnify-rest-api"},"emnify REST API"),(0,a.kt)("p",null,"REST APIs are one way to integrate external services into your application.\nThe emnify API provides a variety of HTTP requests to integrate several emnify services into your application."),(0,a.kt)("p",null,"The emnify REST API is based on the OpenAPI Specification OAS3.\nYou can try out the API using the ",(0,a.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/swagger.html"},"interactive API reference"),"."),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"To use the emnify REST API, you must authenticate with an authentication token.\nemnify uses JSON Web Tokens (JWTs) as the authentication token."),(0,a.kt)("p",null,"You can retrieve this authentication token using an application token generated in your emnify account.\nFor step-by-step instructions, see ",(0,a.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/application-token.html"},"Authenticate with application tokens")," in the emnify System Documentation."),(0,a.kt)("h2",{id:"code-samples"},"Code samples"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/emnify/API_Examples_JS"},"emnify examples in JavaScript")," GitHub repository for examples of how to authenticate and get the device status via the REST API."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"https://www.emnify.com/developer-blog/postman-emnify-api"},"How to use Rest-API via Postman")," guide provides information on how to more efficiently work with the emnify REST API.")))}l.isMDXComponent=!0}}]);