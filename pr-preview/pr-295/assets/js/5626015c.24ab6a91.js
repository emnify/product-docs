"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[4820],{4292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(5893),a=n(1151);const r={description:"Functionality and limitations of emnify's quota management for data and SMS",last_update:{date:"12-31-2021"},slug:"/services/quota-management"},s="Quota management",o={id:"services/connectivity/quota-management",title:"Quota management",description:"Functionality and limitations of emnify's quota management for data and SMS",source:"@site/docs/services/connectivity/quota-management.md",sourceDirName:"services/connectivity",slug:"/services/quota-management",permalink:"/pr-preview/pr-295/services/quota-management",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1640908800,formattedLastUpdatedAt:"Dec 31, 2021",frontMatter:{description:"Functionality and limitations of emnify's quota management for data and SMS",last_update:{date:"12-31-2021"},slug:"/services/quota-management"},sidebar:"mainDocsSidebar",previous:{title:"SMS",permalink:"/pr-preview/pr-295/services/sms"},next:{title:"Integration guides",permalink:"/pr-preview/pr-295/integration-guides"}},d={},c=[{value:"Manage quotas in the emnify Portal",id:"manage-quotas-in-the-emnify-portal",level:2},{value:"Limits",id:"limits",level:2},{value:"Enforcement",id:"enforcement",level:2}];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"quota-management",children:"Quota management"}),"\n",(0,i.jsx)(t.p,{children:"The emnify service core provides quota management on an individual device basis.\nData quotas offer the possibility to limit your devices individually and define the permitted data consumption per device and the time frame in which the data quota is active."}),"\n",(0,i.jsx)(t.p,{children:"This function enables the configuration of the device behavior when the quota is reached (blocking or throttling to configurable speeds), the refill behavior, the automatic sequence, and the alerting options via emnify's event stream when the configured alarm threshold is reached."}),"\n",(0,i.jsx)(t.p,{children:"The quota limit can be applied to SMS and data services and is defined per a configurable time range (for example, 50 MB per month or 10 SMS per day).\nThe platform sends a warning threshold event when the quota limit is about to be reached for a specific device and sends an event when the quota limit is reached."}),"\n",(0,i.jsx)(t.h2,{id:"manage-quotas-in-the-emnify-portal",children:"Manage quotas in the emnify Portal"}),"\n",(0,i.jsxs)(t.p,{children:["You can configure data or SMS quotas directly in the ",(0,i.jsx)(t.a,{href:"https://portal.emnify.com/device-policies#service-policies",children:(0,i.jsx)(t.strong,{children:"Service Policies"})})," section of the emnify Portal.\nFor more information, see ",(0,i.jsx)(t.a,{href:"/how-tos/manage-data-sms-quotas",children:"Manage data or SMS quotas"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"limits",children:"Limits"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Each quota can have an expiration date (that is, as soon as the expiry date is reached, the service is denied)."}),"\n",(0,i.jsx)(t.li,{children:"It's possible to define an action to be carried out on the expiry date.\nThe device can be blocked for data services, or the connection can be throttled."}),"\n",(0,i.jsx)(t.li,{children:"The daily limit is automatically replenished every day at midnight UTC until the expiration date is reached."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"enforcement",children:"Enforcement"}),"\n",(0,i.jsx)(t.p,{children:"When quota limits are reached, the system can execute several actions."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Action"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Block"}),(0,i.jsx)(t.td,{children:"Blocks service availability until the next time range starts."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Throttle"}),(0,i.jsx)(t.td,{children:"Throttles service up to a defined peak."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Auto-refill"}),(0,i.jsx)(t.td,{children:"Refills the quota with the last added value daily."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Expiry date"}),(0,i.jsx)(t.td,{children:"Sets an expiration date for a quota. Service is denied once the date is reached."})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"You can integrate the emnify APIs with third-party software, such as Zapier or Automate.io, to receive real-time notifications from the Portal."})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(7294);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);