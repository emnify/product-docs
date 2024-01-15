"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[1572],{1351:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=s(5893),r=s(1151);const o={description:"Configure service and coverage policies for your devices on the emnify Portal",last_update:{date:"09-07-2023"},slug:"/portal/device-policies"},t="Device policies",c={id:"portal/sims-and-devices/device-policies",title:"Device policies",description:"Configure service and coverage policies for your devices on the emnify Portal",source:"@site/docs/portal/sims-and-devices/device-policies.mdx",sourceDirName:"portal/sims-and-devices",slug:"/portal/device-policies",permalink:"/pr-preview/pr-180/portal/device-policies",draft:!1,unlisted:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/portal/sims-and-devices/device-policies.mdx",tags:[],version:"current",lastUpdatedAt:1694044800,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{description:"Configure service and coverage policies for your devices on the emnify Portal",last_update:{date:"09-07-2023"},slug:"/portal/device-policies"},sidebar:"mainDocsSidebar",previous:{title:"Connected devices",permalink:"/pr-preview/pr-180/portal/connected-devices"},next:{title:"Device troubleshooting",permalink:"/pr-preview/pr-180/portal/troubleshooting"}},a={},l=[{value:"Service policies",id:"service-policies",level:2},{value:"Webhook SMS interface",id:"webhook-sms-interface",level:3},{value:"SMPP SMS interface",id:"smpp-sms-interface",level:3},{value:"Coverage policies",id:"coverage-policies",level:2},{value:"Data plan",id:"data-plan",level:3},{value:"Coverage areas",id:"coverage-areas",level:3},{value:"Available guides",id:"available-guides",level:2}];function d(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{Details:o}=i;return o||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"device-policies",children:"Device policies"}),"\n",(0,n.jsxs)(i.p,{children:["You can use ",(0,n.jsx)(i.a,{href:"https://portal.emnify.com/device-policies",children:(0,n.jsx)(i.strong,{children:"Device Policies"})})," to create unique coverage and network configurations that can be assigned to devices.\nThere are two types of policies: ",(0,n.jsx)(i.strong,{children:"Service Policies"})," and ",(0,n.jsx)(i.strong,{children:"Coverage Policies"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"service-policies",children:"Service policies"}),"\n",(0,n.jsx)(i.p,{children:"Service policies allow you to set usage limits on data or SMS and can also be used to restrict types of networks or services.\nBy default, a new policy has no restrictions.\nHowever, by creating a service policy, you can control the following attributes:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Property"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Breakout Region"}),(0,n.jsx)(i.td,{children:"Automatic or manual selection"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Data"}),(0,n.jsx)(i.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Usage limit"}),(0,n.jsx)("li",{children:"Service type (for example, 2G, 3G, 4G, NB-IoT)"})]})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"SMS"}),(0,n.jsx)(i.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"SMS MO (devices may send SMS)"}),(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"Sending limit"})}),(0,n.jsx)("li",{children:"SMS MT (devices may receive SMS)"}),(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"Receiving limit"})}),(0,n.jsx)("li",{children:"Allow/deny the exchange of SMS"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Between devices"}),(0,n.jsx)("li",{children:"With external parties"})]})]})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"SMS Interface"}),(0,n.jsx)(i.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(i.a,{href:"/portal/sms#send-sms-using-the-emnify-portal",children:"Web Portal"})," (default)"]}),(0,n.jsx)("li",{children:(0,n.jsx)(i.a,{href:"#webhook-sms-interface",children:"Webhook"})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.a,{href:"/portal/sms#sms-via-smpp",children:"SMPP"})})]})})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"webhook-sms-interface",children:"Webhook SMS interface"}),"\n",(0,n.jsxs)(i.p,{children:["When selecting ",(0,n.jsx)(i.strong,{children:"Webhook"})," as your ",(0,n.jsx)(i.strong,{children:"SMS Interface"}),", you must provide the URL for your webhook.\nOptionally, you can provide a secret key to prevent unauthorized access."]}),"\n",(0,n.jsxs)(o,{className:"custom-details-troubleshooting",children:[(0,n.jsx)("summary",{children:"Show how to configure a webhook"}),(0,n.jsxs)(i.p,{children:["Select ",(0,n.jsx)(i.strong,{children:"Configure Webhook"}),"."]}),(0,n.jsx)("img",{src:s(5422).Z,alt:""}),(0,n.jsxs)(i.p,{children:["Provide the URL, optional secret key, and select ",(0,n.jsx)(i.strong,{children:"Add Webhook"}),"."]}),(0,n.jsx)("img",{src:s(4828).Z,alt:""})]}),"\n",(0,n.jsx)(i.h3,{id:"smpp-sms-interface",children:"SMPP SMS interface"}),"\n",(0,n.jsxs)(i.p,{children:["When selecting ",(0,n.jsx)(i.strong,{children:"SMPP"})," as your ",(0,n.jsx)(i.strong,{children:"SMS Interface"}),", you are given a ",(0,n.jsx)(i.strong,{children:"System ID"})," and ",(0,n.jsx)(i.strong,{children:"Password"})," for accessing the emnify ",(0,n.jsx)(i.strong,{children:"SMPP Server"}),"."]}),"\n",(0,n.jsxs)(o,{className:"custom-details-troubleshooting",children:[(0,n.jsx)("summary",{children:"Show where this happens in the Portal"}),(0,n.jsx)("img",{src:s(6416).Z,alt:""})]}),"\n",(0,n.jsx)(i.h2,{id:"coverage-policies",children:"Coverage policies"}),"\n",(0,n.jsxs)(i.p,{children:["A coverage policy lets you choose which data plan and regions to operate in.\nPolicies include the ",(0,n.jsx)(i.strong,{children:"Data Plan"})," and one or more ",(0,n.jsx)(i.strong,{children:"Coverage areas"}),".\nThe default coverage policy depends on your current subscription package."]}),"\n",(0,n.jsx)(i.h3,{id:"data-plan",children:"Data plan"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"Data Plan"})," dropdown shows a list of data plan names with ",(0,n.jsx)(i.strong,{children:"Regional Pro"})," selected by default."]}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"When a data plan includes active SIMs, it's added to your bill at the end of the month."})}),"\n",(0,n.jsx)(i.h3,{id:"coverage-areas",children:"Coverage areas"}),"\n",(0,n.jsxs)(i.p,{children:["The list of ",(0,n.jsx)(i.strong,{children:"Coverage areas"})," varies depending on which ",(0,n.jsx)(i.strong,{children:"Data Plan"})," you selected."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"Coverage map"})," is a global map that shows your coverage based on your selections.\nYou can browse the entire list of countries in the ",(0,n.jsx)(i.strong,{children:"Coverage list"})," or search for a specific country where you plan to deploy your devices.\nThis list provides the names and number of networks per country.\nEach country's listing can be expanded to reveal the network, coverage area, data rates, and SMS sending and receiving rates."]}),"\n",(0,n.jsx)(i.h2,{id:"available-guides",children:"Available guides"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/how-tos/create-service-policies",children:"Create a new service policy"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/how-tos/create-coverage-policies",children:"Create a new coverage policy"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/how-tos/assign-devices-to-policies",children:"Assign devices to a policy"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/how-tos/update-existing-device-policies",children:"Update existing device policies"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4828:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/portal-service-policies-sms-interface-add-webhook-e43394b551871d69f6b077876945a4fb.png"},5422:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/portal-service-policies-sms-interface-configure-webhook-3213b387a0baefb809c16d0a122a9747.png"},6416:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/portal-service-policies-sms-interface-smpp-844c85595bdc7bb79a1202d54bdda172.png"},1151:(e,i,s)=>{s.d(i,{Z:()=>c,a:()=>t});var n=s(7294);const r={},o=n.createContext(r);function t(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);