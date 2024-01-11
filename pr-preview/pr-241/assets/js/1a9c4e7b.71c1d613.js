"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8222],{8955:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=t(5893),i=t(1151);const s={title:"Java SDK examples",description:"Code samples showing how to use the emnify Java SDK",last_update:{date:"08-20-2021"},pagination_label:"Java SDK examples",sidebar_label:"Examples",slug:"/sdks/java/examples"},o="Examples",l={id:"sdks/java/examples",title:"Java SDK examples",description:"Code samples showing how to use the emnify Java SDK",source:"@site/docs/sdks/java/examples.md",sourceDirName:"sdks/java",slug:"/sdks/java/examples",permalink:"/pr-preview/pr-241/sdks/java/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/sdks/java/examples.md",tags:[],version:"current",lastUpdatedAt:1629417600,formattedLastUpdatedAt:"Aug 20, 2021",frontMatter:{title:"Java SDK examples",description:"Code samples showing how to use the emnify Java SDK",last_update:{date:"08-20-2021"},pagination_label:"Java SDK examples",sidebar_label:"Examples",slug:"/sdks/java/examples"},sidebar:"mainDocsSidebar",previous:{title:"Java SDK Quickstart",permalink:"/pr-preview/pr-241/sdks/java/quickstart"},next:{title:"Get support and contribute",permalink:"/pr-preview/pr-241/sdks/support"}},r={},p=[{value:"Initialize the client using environment variables",id:"initialize-the-client-using-environment-variables",level:2},{value:"Initialize the client via passing authorization parameter",id:"initialize-the-client-via-passing-authorization-parameter",level:2},{value:"Initialize the client via application token",id:"initialize-the-client-via-application-token",level:2},{value:"Retrieve list of endpoints",id:"retrieve-list-of-endpoints",level:2},{value:"Update endpoint quota data",id:"update-endpoint-quota-data",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(a.h2,{id:"initialize-the-client-using-environment-variables",children:"Initialize the client using environment variables"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"    EMnify.authenticate();\n"})}),"\n",(0,n.jsx)(a.h2,{id:"initialize-the-client-via-passing-authorization-parameter",children:"Initialize the client via passing authorization parameter"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'    String username = "user@domain.com";\n    String password = "2fd4e1c67a2d28...";\n    \n    EMnify.authenticate(username, password)\n'})}),"\n",(0,n.jsx)(a.h2,{id:"initialize-the-client-via-application-token",children:"Initialize the client via application token"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'    String applicationToken = "KAOp24TuMgjO2FpZmZ3ZFjSqpk7ea_mY8...";\n    \n    EMnify.authenticate(applicationToken)\n'})}),"\n",(0,n.jsx)(a.h2,{id:"retrieve-list-of-endpoints",children:"Retrieve list of endpoints"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"    EMnify client = EMnify.authenticate();\n    List<Endpoint> endpoints = client.getEndpointClient().listEndpoints();\n"})}),"\n",(0,n.jsx)(a.h2,{id:"update-endpoint-quota-data",children:"Update endpoint quota data"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"    Quota quota = new Quota();\n    quota.setVolume(actualVolume + quotaTopUpVolume);\n    quota.setExpiryDate(expirationDate);\n    quota.setThresholdPercentage(threholdPercentage);\n    quota.setActionOnExhaustion(QuotaActionOnExhaustion.throttle(QuotaActionOnExhaustion.QuotaPeakThroughput.SLOW));\n    \n    endpointClient.saveQuota(endpointId, quota);\n"})})]})}function c(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>l,a:()=>o});var n=t(7294);const i={},s=n.createContext(i);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);