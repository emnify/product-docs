"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6290],{1154:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=s(5893),i=s(1151);const r={description:"Must-knows for working with the emnify SDKs",last_update:{date:"09-07-2023"},slug:"/sdks/concepts"},l="Concepts",o={id:"sdks/concepts",title:"Concepts",description:"Must-knows for working with the emnify SDKs",source:"@site/docs/sdks/concepts.md",sourceDirName:"sdks",slug:"/sdks/concepts",permalink:"/pr-preview/pr-237/sdks/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/sdks/concepts.md",tags:[],version:"current",lastUpdatedAt:1694044800,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{description:"Must-knows for working with the emnify SDKs",last_update:{date:"09-07-2023"},slug:"/sdks/concepts"},sidebar:"mainDocsSidebar",previous:{title:"emnify SDKs",permalink:"/pr-preview/pr-237/sdks"},next:{title:"Python SDK quickstart",permalink:"/pr-preview/pr-237/sdks/python/quickstart"}},c={},d=[{value:"SDK glossary",id:"sdk-glossary",level:2}];function a(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"concepts",children:"Concepts"}),"\n",(0,n.jsx)(t.h2,{id:"sdk-glossary",children:"SDK glossary"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Device"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Any physical device supplied with a SIM that obtains connectivity. It's important not to mix up the terms 'Device' and 'Endpoint.' A device is a superset of the endpoint and SIM acting as a whole. ",(0,n.jsx)(t.a,{href:"/quickstart/create-device",children:"Learn more about devices"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Device status"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Primary way to control connectivity. It can be either ",(0,n.jsx)(t.strong,{children:"Enabled"})," or ",(0,n.jsx)(t.strong,{children:"Disabled"}),". When ",(0,n.jsx)(t.strong,{children:"Enabled"}),", a device that has a SIM assigned can go online. On the other hand, when ",(0,n.jsx)(t.strong,{children:"Disabled"}),", the device doesn't get any service."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"SIM"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Represents a physical or eSIM issued by emnify. ",(0,n.jsx)(t.a,{href:"/services/global-iot-sim",children:"Learn more about SIMs"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"SIM status"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Status of the SIM's phase in the ",(0,n.jsx)(t.a,{href:"/services/sim-lifecycle-management",children:"SIM lifecycle"}),". When using the SDK, avoid changing the SIM status directly. Instead, change it using the device status."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Tariff profile"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Controls where and how your devices have coverage. Referred to as ",(0,n.jsx)(t.strong,{children:"coverage policies"})," in the emnify Portal. ",(0,n.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/tariff-profile.html",children:"Learn more about tariff profiles"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Service profile"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Defines available services (for example, SMS, 4G, etc.) and usage for a device. Referred to as a ",(0,n.jsx)(t.strong,{children:"service policy"})," in the Portal. ",(0,n.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/service-profile.html",children:"Learn more about service profiles"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Blacklist operators"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Method that allows you to restrict device connectivity to a specific operator or group of operators. Referred to as ",(0,n.jsx)(t.strong,{children:"networks blocklist"})," in the Portal."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Operator"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Underlying mobile network operator (MNO) used to provide connectivity. Referred to as a ",(0,n.jsx)(t.strong,{children:"network"})," in the Portal. Explore network coverage by country and region on ",(0,n.jsx)(t.a,{href:"https://www.emnify.com/pricing",children:"emnify's pricing page"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"SMS"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.a,{href:"/services/sms",children:"Learn more about SMS"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Application token"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Authenticates your identity when using the emnify SDK and API. ",(0,n.jsx)(t.a,{href:"/portal/application-tokens",children:"Learn how to generate an application token"}),"."]})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["More terminology and definitions are available in the ",(0,n.jsx)(t.a,{href:"/glossary",children:"Glossary"}),"."]})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>l});var n=s(7294);const i={},r=n.createContext(i);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);