"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[7044],{704:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=s(5893),n=s(1151);const r={description:"Learn how to manage your SIMs via the SIM Inventory in the emnify Portal",last_update:{date:"08-30-2023"},pagination_next:"portal/sims-and-devices/connected-devices",slug:"/portal/sim-inventory"},l="SIM inventory",d={id:"portal/sims-and-devices/sim-inventory",title:"SIM inventory",description:"Learn how to manage your SIMs via the SIM Inventory in the emnify Portal",source:"@site/docs/portal/sims-and-devices/sim-inventory.mdx",sourceDirName:"portal/sims-and-devices",slug:"/portal/sim-inventory",permalink:"/pr-preview/pr-272/portal/sim-inventory",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1693353600,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{description:"Learn how to manage your SIMs via the SIM Inventory in the emnify Portal",last_update:{date:"08-30-2023"},pagination_next:"portal/sims-and-devices/connected-devices",slug:"/portal/sim-inventory"},sidebar:"mainDocsSidebar",previous:{title:"emnify Portal",permalink:"/pr-preview/pr-272/portal"},next:{title:"Connected devices",permalink:"/pr-preview/pr-272/portal/connected-devices"}},o={},a=[{value:"SIM states",id:"sim-states",level:2},{value:"Manage SIMs",id:"manage-sims",level:2},{value:"Additional views",id:"additional-views",level:3},{value:"Search SIMs",id:"search-sims",level:2},{value:"Order or register SIMs",id:"order-or-register-sims",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"sim-inventory",children:"SIM inventory"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://portal.emnify.com/sim-inventory",children:(0,i.jsx)(t.strong,{children:"SIM Inventory"})})," provides a complete list of your registered SIMs."]}),"\n",(0,i.jsx)(t.h2,{id:"sim-states",children:"SIM states"}),"\n",(0,i.jsxs)(t.p,{children:["A SIM can transition through five states during its lifecycle: ",(0,i.jsx)(t.strong,{children:"Issued"}),", ",(0,i.jsx)(t.strong,{children:"Activated"}),", ",(0,i.jsx)(t.strong,{children:"Suspended"}),", ",(0,i.jsx)(t.strong,{children:"Factory Test"}),", and ",(0,i.jsx)(t.strong,{children:"Deleted"}),".\nThese states are sometimes referred to as the SIM status."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["For more information about each SIM state, see ",(0,i.jsx)(t.a,{href:"/services/sim-lifecycle-management",children:"SIM lifecycle management"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"manage-sims",children:"Manage SIMs"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Details"})," view shows all identifiers and properties for an individual SIM, including:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Assigned device"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Name of the device that the SIM is attached to, linked to the respective ",(0,i.jsx)(t.strong,{children:"Device Details"})," page."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"SIM ID"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Unique identifier of the SIM (referred to as the ",(0,i.jsx)(t.code,{children:"sim_id"})," when working with the ",(0,i.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/sim.html",children:"REST API"}),")."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"ICCID"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Integrated circuit card identifier including the final Luhn checksum digit."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"MSISDN"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Mobile Station International Subscriber Directory Number of the SIM."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"IMSI"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"International Mobile Subscriber Identity of the SIM."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Vendor"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the manufacturer."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Memory"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Memory size in kilobytes (KB)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Produced"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Date and time in Coordinated Universal Time (UTC) the SIM was produced, formatted based on your language settings."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Model"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Description of the SIM model (for example, ",(0,i.jsx)(t.strong,{children:"Classic"}),")."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"SIM Type"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Diagram and description of the SIM type, including the ",(0,i.jsx)(t.a,{href:"/services/global-iot-sim#quality-grades",children:"quality grade"})," and ",(0,i.jsx)(t.a,{href:"/services/global-iot-sim#form-factors",children:"form factors"}),"."]})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["For definitions of any unfamiliar terms or acronyms, see the ",(0,i.jsx)(t.a,{href:"/glossary",children:"Glossary"}),"."]})}),"\n",(0,i.jsx)(t.h3,{id:"additional-views",children:"Additional views"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Events"})," and ",(0,i.jsx)(t.strong,{children:"Statistics"})," are additional views that provide logs and aggregated usage, respectively, if the SIM has been assigned to a device and is ",(0,i.jsx)(t.strong,{children:"Active"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"search-sims",children:"Search SIMs"}),"\n",(0,i.jsx)(t.p,{children:"You can search by various attributes, including ICCID, IMSI, and device ID, to name a few."}),"\n",(0,i.jsx)("img",{src:s(6293).Z,alt:""}),"\n",(0,i.jsx)(t.h2,{id:"order-or-register-sims",children:"Order or register SIMs"}),"\n",(0,i.jsx)(t.p,{children:"To expand your SIM inventory, follow the appropriate link at the top of the page:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["To visit the SIM Shop, select ",(0,i.jsx)(t.strong,{children:"Order SIMs"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["To register SIMs, either individually or in batches, select ",(0,i.jsx)(t.strong,{children:"Register SIMs"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Step-by-step guides are available for ",(0,i.jsx)(t.a,{href:"/quickstart/order-sims",children:"ordering SIMs from the SIM Shop"})," and ",(0,i.jsx)(t.a,{href:"/quickstart/register-sims",children:"registering SIMs"}),"."]})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6293:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/portal-sim-inventory-search-bar-attributes-667fd88ce51ce73cba30e8b1352c2fc9.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>l});var i=s(7294);const n={},r=i.createContext(n);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);