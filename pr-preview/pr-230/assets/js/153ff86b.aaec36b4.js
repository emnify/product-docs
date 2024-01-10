"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[1150],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=c(r),u=a,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={title:"Preview the GraphQL API",last_update:{date:"03-17-2023"},pagination_label:"Preview the GraphQL API",slug:"/graphql"},p='emnify GraphQL API <span className="theme-doc-version-badge badge badge--primary">preview</span>',o={unversionedId:"graphql/preview",id:"graphql/preview",title:"Preview the GraphQL API",description:"The emnify GraphQL API is under active development and is subject to change.",source:"@site/docs/graphql/preview.md",sourceDirName:"graphql",slug:"/graphql",permalink:"/pr-preview/pr-230/graphql",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/graphql/preview.md",tags:[],version:"current",lastUpdatedAt:1679011200,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{title:"Preview the GraphQL API",last_update:{date:"03-17-2023"},pagination_label:"Preview the GraphQL API",slug:"/graphql"},sidebar:"mainDocsSidebar",previous:{title:"Send and receive SMS",permalink:"/pr-preview/pr-230/rest/sms-operations"},next:{title:"Use the GraphiQL IDE",permalink:"/pr-preview/pr-230/graphql/graphiql-ide"}},l={},c=[{value:"Try it out with the GraphiQL IDE",id:"try-it-out-with-the-graphiql-ide",level:2}],s={toc:c};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"emnify-graphql-api-preview"},"emnify GraphQL API ",(0,a.kt)("span",{className:"theme-doc-version-badge badge badge--primary"},"preview")),(0,a.kt)("admonition",{title:"Compatibility Notes",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"The emnify GraphQL API is under active development")," and is subject to change."),(0,a.kt)("p",{parentName:"admonition"},"Feedback and suggestions are very welcome.\nPlease ",(0,a.kt)("a",{parentName:"p",href:"https://emnify.canny.io/"},"open a ticket on Canny"),".")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," is a query language that enables you to define API call responses to match your use case and technical needs."),(0,a.kt)("p",null,"The emnify GraphQL API was initially developed internally to improve performance on the Portal.\nIn early 2023, we decided to release a preview version to customers.\nWe hope to collect feedback and continue adding features so that the capability more closely matches the ",(0,a.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/index.html"},"emnify REST API"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"There are no plans to deprecate the REST API.\nInstead, we plan to support both APIs in parallel.")),(0,a.kt)("h2",{id:"try-it-out-with-the-graphiql-ide"},"Try it out with the GraphiQL IDE"),(0,a.kt)("p",null,"To help you explore and experiment with the GraphQL API, we've set up an in-browser ",(0,a.kt)("a",{parentName:"p",href:"https://graphql-playground.emnify.net/"},"emnify GraphiQL IDE"),".\nWithin this IDE, you can also find interactive documentation and examples."),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/graphql/graphiql-ide"},"Use the GraphiQL IDE"),"."))}h.isMDXComponent=!0}}]);