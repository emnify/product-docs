"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[1710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),h=i,k=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={description:"How to retrieve your authentication token",displayed_sidebar:"restSidebar"},o="Authentication",p={unversionedId:"rest-api/authentication",id:"rest-api/authentication",title:"Authentication",description:"How to retrieve your authentication token",source:"@site/docs/rest-api/authentication.md",sourceDirName:"rest-api",slug:"/rest-api/authentication",permalink:"/rest-api/authentication",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/rest-api/authentication.md",tags:[],version:"current",lastUpdatedAt:1686062803,formattedLastUpdatedAt:"Jun 6, 2023",frontMatter:{description:"How to retrieve your authentication token",displayed_sidebar:"restSidebar"},sidebar:"restSidebar",previous:{title:"Working with the emnify REST API",permalink:"/rest-api/"},next:{title:"Sending and receiving SMS",permalink:"/rest-api/sms-operations"}},l={},s=[{value:"Authenticate with user credentials",id:"authenticate-with-user-credentials",level:2},{value:"Authenticate with an application token",id:"authenticate-with-an-application-token",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"To use the emnify API, you need to authenticate with an authentication token.\nWe use JSON Web Tokens (JWTs) as the authentication token."),(0,i.kt)("p",null,"There are two ways to retrieve this token:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#authenticate-with-user-credentials"},(0,i.kt)("strong",{parentName:"a"},"Authenticate with user credentials")),": Use the username and password you provided while signing up for the\xa0emnify Portal. This information is available in your ",(0,i.kt)("a",{parentName:"li",href:"https://portal.emnify.com/user-settings"},(0,i.kt)("strong",{parentName:"a"},"User Settings")),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#authenticate-with-an-application-token"},(0,i.kt)("strong",{parentName:"a"},"Authenticate with an application token")),": You can use the application token generated in your emnify account.")),(0,i.kt)("h2",{id:"authenticate-with-user-credentials"},"Authenticate with user credentials"),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/authenticate"),"\xa0API is used to generate a JWT\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),",\xa0which authenticates subsequent API calls.\nThe request body must provide a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"username"),"\xa0(typically the email address used when signing up) and the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"user password"),".\xa0"),(0,i.kt)("p",null,"Once authenticated, you'll receive an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST\xa0https://cdn.emnify.net/api/v1/authenticate\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request body"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "user@domain.com",\n  "password": "2fd4e1c67a2d28fced849ee1bb76e7391b93eb12"\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you signed up using the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal"),", you'll need to enter the password as a SHA1 hashed string.\nThe SHA1 of a password can be generated online or in the terminal via the following command:\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"echo -n 'my_password' | openssl sha1"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",\n  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."\n}\n')),(0,i.kt)("p",null,"To authenticate all API calls, you can use this ",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token")," as the bearer token.\nThis\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0is valid for 240 minutes, so you don\u2019t need to retrieve the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0before every API call.\nOnce the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0expires, you can use the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),"\xa0to retrieve the new\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"."),(0,i.kt)("h2",{id:"authenticate-with-an-application-token"},"Authenticate with an application token"),(0,i.kt)("p",null,"Since you shouldn't store your emnify user credentials on your application server, you can generate an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"application_token"),"\xa0via the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://portal.emnify.com/integrations#application-tokens"},"emnify Portal"),"\xa0or the API:\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/application_token"),".\nThe request body should have a description of the token normally used to indicate who is using the token and can have an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"expiry_date"),"\xa0for the token."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST\xa0https://cdn.emnify.net/api/v1/application_token\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request header"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Authorization: Bearer {auth_token}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request body"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "description": "Token with expiry date",\n  "expiry_date": "2021-10-29"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "application_token": "KAOp24TuMgjO2FpZmZ3ZFjSqpk7ea_mY8..."\n}\n')),(0,i.kt)("p",null,"This call returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"application_token"),".\nYou can use this token instead of the username and password combination.\nThe token can be revoked at any time."),(0,i.kt)("p",null,"You can alternatively generate the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"application_token"),"\xa0in the emnify Portal:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://portal.emnify.com/sign"},"Log in to the\xa0emnify Portal")),(0,i.kt)("li",{parentName:"ol"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://portal.emnify.com/integrations"},(0,i.kt)("strong",{parentName:"a"},"Integrations"))," \u2192 ",(0,i.kt)("a",{parentName:"li",href:"https://portal.emnify.com/integrations#application-tokens"},(0,i.kt)("strong",{parentName:"a"},"Application Tokens"))," \u2192 ",(0,i.kt)("strong",{parentName:"li"},"Add Token"),".")),(0,i.kt)("p",null,"To get the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0using the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"application_token"),", use the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/authenticate"),"\xa0API.\nThe\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0can then be used to authenticate all subsequent API calls."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST\xa0https://cdn.emnify.net/api/v1/authenticate\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request body"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "application_token": "kNTktNTA1My00YzdhLT..."\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."\n}\n')),(0,i.kt)("p",null,"Unlike username and password authentication,  the server returns only ",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"s.\nNo ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token")," will be included in the response.\nThis ",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token")," is valid for 240 minutes."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"It's ",(0,i.kt)("em",{parentName:"p"},"not")," advisable to generate an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0before making each API call.\nYou should reuse the generated\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"auth_token"),"\xa0for 240 minutes after it's generated.\nThen, update it after its expiration.")))}c.isMDXComponent=!0}}]);