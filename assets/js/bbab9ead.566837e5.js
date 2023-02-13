"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:i,o[1]=p;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const a={description:"Performing SMS related operations with the API",displayed_sidebar:"restSidebar"},o="Sending and receiving SMS",p={unversionedId:"rest-api/sms-operations",id:"rest-api/sms-operations",title:"Sending and receiving SMS",description:"Performing SMS related operations with the API",source:"@site/docs/rest-api/sms-operations.md",sourceDirName:"rest-api",slug:"/rest-api/sms-operations",permalink:"/rest-api/sms-operations",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/rest-api/sms-operations.md",tags:[],version:"current",lastUpdatedAt:1676277782,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{description:"Performing SMS related operations with the API",displayed_sidebar:"restSidebar"},sidebar:"restSidebar",previous:{title:"Authentication",permalink:"/rest-api/authentication"}},s={},d=[],l={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sending-and-receiving-sms"},"Sending and receiving SMS"),(0,i.kt)("p",null,"You can perform the following SMS related operations using the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint"),"\xa0API."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"List sent and received SMS:\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/v1/endpoint/{endpoint_id}/sms")),(0,i.kt)("li",{parentName:"ol"},"Send SMS to an endpoint:\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/v1/endpoint/{endpoint_id}/sms")),(0,i.kt)("li",{parentName:"ol"},"Get details about an endpoint SMS:\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/v1/endpoint/{endpoint_id}/sms/{sms_id}")),(0,i.kt)("li",{parentName:"ol"},"Cancel a buffered SMS:\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE /api/v1/endpoint/{endpoint_id}/sms/{sms_id}"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": Send SMS to an endpoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST\xa0[https://cdn.emnify.net/api/v1/endpoint/{endpoint_id}/sms](https://cdn.emnify.net/api/v1/endpoint/%7Bendpoint_id%7D/sms?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670530991861.1670533602068.8&__hssc=115846617.3.1670533602068&__hsfp=3017379904)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request body"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source_address": 12345689,\n  "payload": "This is the message text"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Responses")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"201\n")),(0,i.kt)("p",null,"The source address is the sender number appearing on the receiving device.\nThe payload is the actual text to be sent as SMS."))}c.isMDXComponent=!0}}]);