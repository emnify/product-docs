"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[9965],{2981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(5893),i=n(1151);const r={description:"Configure SIM state to minimize costs",last_update:{date:"01-17-2024"},slug:"/services/sim-lifecycle-management"},a="SIM lifecycle management",c={id:"services/connectivity/sim-lifecycle-management",title:"SIM lifecycle management",description:"Configure SIM state to minimize costs",source:"@site/docs/services/connectivity/sim-lifecycle-management.mdx",sourceDirName:"services/connectivity",slug:"/services/sim-lifecycle-management",permalink:"/pr-preview/pr-266/services/sim-lifecycle-management",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1705449600,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{description:"Configure SIM state to minimize costs",last_update:{date:"01-17-2024"},slug:"/services/sim-lifecycle-management"},sidebar:"mainDocsSidebar",previous:{title:"emnify IoT eSIM",permalink:"/pr-preview/pr-266/services/global-iot-sim"},next:{title:"Factory test mode",permalink:"/pr-preview/pr-266/services/factory-test-mode"}},d={},o=[{value:"SIM states",id:"sim-states",level:2}];function l(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"sim-lifecycle-management",children:"SIM lifecycle management"}),"\n",(0,s.jsx)(t.p,{children:"When selling connected devices, it's difficult to determine when devices are in use and when not.\nUsing SIM cards that can't align with the device lifecycle incur unnecessary costs.\nemnify SIM cards don't incur any costs unless activated."}),"\n",(0,s.jsx)(t.p,{children:"After the registration, the SIMs move between the different states depending on your needs and requirements."}),"\n",(0,s.jsx)(t.h2,{id:"sim-states",children:"SIM states"}),"\n",(0,s.jsxs)(t.p,{children:["The SIMs have five different states that can be configured via the ",(0,s.jsx)(t.a,{href:"/portal/sim-inventory",children:(0,s.jsx)(t.strong,{children:"SIM Inventory"})})," in the emnify Portal or\xa0the ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/SIM",children:"emnify SIM REST API"}),":"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"State"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Issued"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Initial state after the SIM has been registered to an account. The SIM isn't usable in this state, so it won't generate traffic or incur charges. Issued SIMs can be tested by patching them to the ",(0,s.jsx)(t.em,{children:"Factory Test"})," state. It's impossible to transition the SIM back to ",(0,s.jsx)(t.em,{children:"Issued"})," once it has been in another state."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Activated"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The SIM is enabled and can use network services if connected to a device with configured policies. Regardless, the SIM is chargeable if activated anytime during the month."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Suspended"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Temporarily blocks an ",(0,s.jsx)(t.em,{children:"Activated"})," SIM from network access. Starting from the first day of the next month, the suspended SIM doesn't accrue any charges. The SIM can be reactivated and suspended again at any time."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Factory Test"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The SIM is enabled and can generate traffic. It can be used up to defined data and SMS thresholds without incurring charges. Once either threshold is crossed or the test period has elapsed, the SIM automatically moves to the ",(0,s.jsx)(t.em,{children:"Activated"})," state. For more information, see ",(0,s.jsx)(t.a,{href:"/services/factory-test-mode",children:"Factory test mode"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Deleted"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Permanently removes the SIM from the SIM Inventory. Once deleted, it can't be restored for network access."})]})]})]}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsxs)(t.p,{children:["If you're using the ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/index.html",children:"emnify REST API"})," to configure devices, it's possible to have an ",(0,s.jsx)(t.strong,{children:"Activated"})," SIM assigned to a ",(0,s.jsx)(t.strong,{children:"Disabled"})," endpoint.\nIn this case, you'll continue to accrue costs as emnify charges for activated SIMs.\nBe sure to suspend the assigned SIM to avoid unexpected charges."]}),(0,s.jsxs)(t.p,{children:["You can also check the Portal ",(0,s.jsx)(t.strong,{children:"Dashboard"})," to see if you have unused but charged SIMs."]}),(0,s.jsx)("img",{src:n(4434).Z,alt:"Warning banner displayed for unused SIMs displayed on the emnify Portal Dashboard. It reads, '2 unused but charged SIM cards detected. We found active SIMs not connected to any device. In this case we may still charge for them, but they won't be of any use for you.' Next to this text, there's a link to the SIM Inventory and a button reading 'Deactivate SIMs now.'"}),(0,s.jsxs)(t.p,{children:["Reference: ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/endpoint.html",children:"Endpoint Object"})," and ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"Endpoint API"})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},4434:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/portal-dashboard-unused-sim-warning-ee439c0f4637f9a1f013684703a96ea2.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(7294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);