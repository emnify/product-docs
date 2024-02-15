"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[7274],{7958:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=s(5893),i=s(1151);const r={description:"Perform SMS related operations with the API",last_update:{date:"11-04-2021"}},o="Send and receive SMS",d={id:"rest/sms-operations",title:"Send and receive SMS",description:"Perform SMS related operations with the API",source:"@site/docs/rest/sms-operations.md",sourceDirName:"rest",slug:"/rest/sms-operations",permalink:"/pr-preview/pr-285/rest/sms-operations",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1635984e3,formattedLastUpdatedAt:"Nov 4, 2021",frontMatter:{description:"Perform SMS related operations with the API",last_update:{date:"11-04-2021"}},sidebar:"mainDocsSidebar",previous:{title:"emnify REST API",permalink:"/pr-preview/pr-285/rest"},next:{title:"Preview the GraphQL API",permalink:"/pr-preview/pr-285/graphql"}},a={},c=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"send-and-receive-sms",children:"Send and receive SMS"}),"\n",(0,t.jsxs)(n.p,{children:["You can perform the following SMS related operations using the\xa0",(0,t.jsx)(n.code,{children:"endpoint"}),"\xa0API."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["List sent and received SMS:\xa0",(0,t.jsx)(n.code,{children:"GET /api/v1/endpoint/{endpoint_id}/sms"})]}),"\n",(0,t.jsxs)(n.li,{children:["Send SMS to an endpoint:\xa0",(0,t.jsx)(n.code,{children:"POST /api/v1/endpoint/{endpoint_id}/sms"})]}),"\n",(0,t.jsxs)(n.li,{children:["Get details about an endpoint SMS:\xa0",(0,t.jsx)(n.code,{children:"GET /api/v1/endpoint/{endpoint_id}/sms/{sms_id}"})]}),"\n",(0,t.jsxs)(n.li,{children:["Cancel a buffered SMS:\xa0",(0,t.jsx)(n.code,{children:"DELETE /api/v1/endpoint/{endpoint_id}/sms/{sms_id}"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),": send SMS to an endpoint"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"POST\xa0https://cdn.emnify.net/api/v1/endpoint/{endpoint_id}/sms\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Request body"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "source_address": 12345689,\n  "payload": "This is the message text"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Responses"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"201\n"})}),"\n",(0,t.jsx)(n.p,{children:"The source address is the sender number appearing on the receiving device.\nThe payload is the actual text to be sent as SMS."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For more information, see ",(0,t.jsx)(n.a,{href:"https://www.emnify.com/developer-blog/how-to-send-and-receive-sms-via-the-api",children:"How to send and receive SMS via the API"}),"."]})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>o});var t=s(7294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);