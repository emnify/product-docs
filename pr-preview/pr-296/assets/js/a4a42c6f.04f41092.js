"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[558],{1326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(5893),i=n(1151);const r={description:"Learn the basics and structure of emnify system events",last_update:{date:"02-21-2024"},pagination_next:"services/platform/events/event-types",slug:"/system-events"},o="emnify system events",a={id:"services/platform/events/index",title:"emnify system events",description:"Learn the basics and structure of emnify system events",source:"@site/docs/services/platform/events/index.md",sourceDirName:"services/platform/events",slug:"/system-events",permalink:"/pr-preview/pr-296/system-events",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708473600,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{description:"Learn the basics and structure of emnify system events",last_update:{date:"02-21-2024"},pagination_next:"services/platform/events/event-types",slug:"/system-events"},sidebar:"mainDocsSidebar",previous:{title:"Available integrations",permalink:"/pr-preview/pr-296/multicloud-data-streamer/integrations"},next:{title:"Event types",permalink:"/pr-preview/pr-296/system-events/event-types"}},c={},d=[{value:"Use cases",id:"use-cases",level:2},{value:"Structure",id:"structure",level:2},{value:"Event type",id:"event-type",level:3},{value:"Event severity",id:"event-severity",level:3},{value:"Event source",id:"event-source",level:3},{value:"Working with events",id:"working-with-events",level:2}];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"emnify-system-events",children:"emnify system events"}),"\n",(0,s.jsx)(t.p,{children:"The emnify system generates several types of events.\nThese events allow you to track notable system occurrences based on behavior and provide information about lifecycle transitions and configuration changes."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Event history is stored for 30 days."})}),"\n",(0,s.jsx)(t.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,s.jsx)(t.p,{children:"Some common use cases for events on emnify include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Triggers for custom business processes"})," (for example, authentication or custom usage limitations configured on the ",(0,s.jsx)(t.a,{href:"/system-events/usage#emnify-portal",children:"emnify Portal"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Monitoring"})," (for example, SIM or data connection lifecycles)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Input for custom billing systems"})," (for example, updating billing configuration or processing invoices)"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,s.jsxs)(t.p,{children:["Each event is represented by an object based on the ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/event.html",children:"generic Event Object and its associated properties"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Depending on the event type, some generic properties may not apply, and some events may have additional custom fields to provide information about what happened."}),"\n",(0,s.jsx)(t.h3,{id:"event-type",children:"Event type"}),"\n",(0,s.jsxs)(t.p,{children:["For an overview of the specific events generated by our platform, see ",(0,s.jsx)(t.a,{href:"/system-events/event-types",children:"Event types"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"event-severity",children:"Event severity"}),"\n",(0,s.jsx)(t.p,{children:"Events are distinguished by three severity levels:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Severity Level"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["\u2139\ufe0f"," Info"]}),(0,s.jsx)(t.td,{children:"Expected behavior of the executed event (for example, a device successfully attaches to a network)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["\u26a0\ufe0f"," Warn"]}),(0,s.jsx)(t.td,{children:"Problem or unusual behavior, but doesn't necessarily require immediate action (for example, a credit card expires in 60 days)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["\ud83d\udea9"," Critical"]}),(0,s.jsx)(t.td,{children:"Serious issue that likely requires additional follow-up (for example, charging for an invoice failed)."})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Find more information in the ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/event.html#event-severity-object",children:"API reference"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"event-source",children:"Event source"}),"\n",(0,s.jsx)(t.p,{children:"Every event is triggered by one of three available event sources:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Event source"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Network"}),(0,s.jsx)(t.td,{children:"The cellular network your device is connected to (for example, a location is updated or purged)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Policy control"}),(0,s.jsxs)(t.td,{children:["Both the emnify system and your Workspace can define and enforce policies, quotas, or other limitations ",(0,s.jsxs)("ul",{children:[" ",(0,s.jsx)("li",{children:"The emnify system can block devices that exceed predefined traffic limits. "}),(0,s.jsx)("li",{children:" Your Workspace could configure the maximum SMS usage for devices to limit SMS traffic."})]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"API"}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/index.html",children:"emnify REST API"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Any events triggered in the ",(0,s.jsx)(t.a,{href:"/system-events/usage#emnify-portal",children:"emnify Portal"})," will show ",(0,s.jsx)(t.strong,{children:"API"})," as the event source, because the Portal is an interface that uses the API under the hood."]})}),"\n",(0,s.jsxs)(t.p,{children:["Find more information in the ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/event.html#event-source-object",children:"API reference"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"working-with-events",children:"Working with events"}),"\n",(0,s.jsx)(t.p,{children:"There are three main ways you can access and trigger events:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/system-events/usage#data-streamer",children:"Data Streamer"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/system-events/usage#event-api",children:"Event API"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/system-events/usage#emnify-portal",children:"emnify Portal"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["More information on these systems and how they compare is available on the ",(0,s.jsx)(t.a,{href:"/system-events/usage",children:"Work with events"})," page."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);