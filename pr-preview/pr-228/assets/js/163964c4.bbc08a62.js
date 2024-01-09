"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[7274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=a,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={description:"Perform SMS related operations with the API",last_update:{date:"11-04-2021"}},i="Send and receive SMS",s={unversionedId:"rest/sms-operations",id:"rest/sms-operations",title:"Send and receive SMS",description:"Perform SMS related operations with the API",source:"@site/docs/rest/sms-operations.md",sourceDirName:"rest",slug:"/rest/sms-operations",permalink:"/rest/sms-operations",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/rest/sms-operations.md",tags:[],version:"current",lastUpdatedAt:1635984e3,formattedLastUpdatedAt:"Nov 4, 2021",frontMatter:{description:"Perform SMS related operations with the API",last_update:{date:"11-04-2021"}},sidebar:"mainDocsSidebar",previous:{title:"emnify REST API",permalink:"/rest"},next:{title:"Preview the GraphQL API",permalink:"/graphql"}},p={},l=[],d={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-and-receive-sms"},"Send and receive SMS"),(0,a.kt)("p",null,"You can perform the following SMS related operations using the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"endpoint"),"\xa0API."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"List sent and received SMS:\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"GET /api/v1/endpoint/{endpoint_id}/sms")),(0,a.kt)("li",{parentName:"ol"},"Send SMS to an endpoint:\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"POST /api/v1/endpoint/{endpoint_id}/sms")),(0,a.kt)("li",{parentName:"ol"},"Get details about an endpoint SMS:\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"GET /api/v1/endpoint/{endpoint_id}/sms/{sms_id}")),(0,a.kt)("li",{parentName:"ol"},"Cancel a buffered SMS:\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"DELETE /api/v1/endpoint/{endpoint_id}/sms/{sms_id}"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),": send SMS to an endpoint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"POST\xa0https://cdn.emnify.net/api/v1/endpoint/{endpoint_id}/sms\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Request body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source_address": 12345689,\n  "payload": "This is the message text"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Responses"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"201\n")),(0,a.kt)("p",null,"The source address is the sender number appearing on the receiving device.\nThe payload is the actual text to be sent as SMS."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://www.emnify.com/developer-blog/how-to-send-and-receive-sms-via-the-api"},"How to send and receive SMS via the API"),".")))}c.isMDXComponent=!0}}]);