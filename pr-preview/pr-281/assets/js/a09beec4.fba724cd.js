"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2596],{3569:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var i=n(5893),o=n(1151);const t={description:"Learn about the modes of SMS operation and use cases available on your emnify account for IoT devices",last_update:{date:"01-17-2024"},slug:"/portal/sms"},a="SMS",r={id:"portal/sms",title:"SMS",description:"Learn about the modes of SMS operation and use cases available on your emnify account for IoT devices",source:"@site/docs/portal/sms.mdx",sourceDirName:"portal",slug:"/portal/sms",permalink:"/pr-preview/pr-281/portal/sms",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1705449600,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{description:"Learn about the modes of SMS operation and use cases available on your emnify account for IoT devices",last_update:{date:"01-17-2024"},slug:"/portal/sms"},sidebar:"mainDocsSidebar",previous:{title:"Device troubleshooting",permalink:"/pr-preview/pr-281/portal/troubleshooting"},next:{title:"No-code workflows",permalink:"/pr-preview/pr-281/portal/no-code"}},c={},l=[{value:"Classifications",id:"classifications",level:2},{value:"SMS P2P",id:"sms-p2p",level:3},{value:"SMS A2P",id:"sms-a2p",level:3},{value:"SMS MO and MT",id:"sms-mo-and-mt",level:3},{value:"Open the SMS console",id:"open-the-sms-console",level:2},{value:"Available guides",id:"available-guides",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"sms",children:"SMS"}),"\n",(0,i.jsx)(s.p,{children:"Short Message Service (SMS) uses the same basic technology on IoT devices as that employed with consumer mobile devices.\nHowever, in the context of IoT devices, there are more modes of SMS operation and use cases that provide additional capabilities."}),"\n",(0,i.jsx)(s.h2,{id:"classifications",children:"Classifications"}),"\n",(0,i.jsx)(s.h3,{id:"sms-p2p",children:"SMS P2P"}),"\n",(0,i.jsx)(s.p,{children:"Peer-to-peer (P2P) SMS describes the mode of sending SMS from one device to another."}),"\n",(0,i.jsx)(s.p,{children:"For IoT devices, this poses a security threat.\nAnyone with the correct MSISDN can issue commands to the device since there isn't any built-in authentication process."}),"\n",(0,i.jsx)(s.p,{children:"P2P also isn't suitable for IoT device use cases in which a device needs to update, interact, or transmit frequently because a device is limited to receiving only six SMS messages per minute in this mode."}),"\n",(0,i.jsx)(s.h3,{id:"sms-a2p",children:"SMS A2P"}),"\n",(0,i.jsx)(s.p,{children:"SMS application-to-peer (A2P) describes the mode of SMS data exchange between a device and an application.\nOne example of this is sending SMS using the emnify Portal."}),"\n",(0,i.jsxs)(s.p,{children:["Unlike P2P, A2P lets you interact with ",(0,i.jsx)(s.em,{children:"multiple"})," devices using an application.\nBecause A2P SMS can be automated, you can interact with your devices at scale.\nIt also tracks messages, which enables you to see when a message has been delivered."]}),"\n",(0,i.jsx)(s.h3,{id:"sms-mo-and-mt",children:"SMS MO and MT"}),"\n",(0,i.jsxs)(s.p,{children:["Because the costs of sending SMS from an IoT device are higher than the cost of receiving SMS, all SMS usage is logged as either ",(0,i.jsx)(s.a,{href:"/glossary#sms-mo",children:"SMS MO"})," (sent) or ",(0,i.jsx)(s.a,{href:"/glossary#sms-mt",children:"SMS MT"})," (received)."]}),"\n",(0,i.jsxs)(s.p,{children:["Using the emnify REST API, you can dispatch SMS MO from devices as HTTP ",(0,i.jsx)(s.code,{children:"POST"})," requests toward a user-configurable URL."]}),"\n",(0,i.jsxs)(s.p,{children:["To activate or deactivate SMS MO or MT for a group of devices, you can use the toggle switches in a new or existing ",(0,i.jsx)(s.strong,{children:"Service Policy"})," to which the devices are assigned.\nSee ",(0,i.jsx)(s.a,{href:"/portal/device-policies#service-policies",children:"Service Policies"})," for more details."]}),"\n",(0,i.jsx)(s.h2,{id:"open-the-sms-console",children:"Open the SMS console"}),"\n",(0,i.jsx)(s.p,{children:"Each device has an SMS console.\nTo open a device's SMS console, select its message icon."}),"\n",(0,i.jsxs)(t,{className:"custom-details-example",children:[(0,i.jsx)("summary",{children:"From Connected Devices"}),(0,i.jsx)("img",{src:n(9507).Z,alt:""})]}),"\n",(0,i.jsxs)(t,{className:"custom-details-example",children:[(0,i.jsx)("summary",{children:"From Device Details"}),(0,i.jsx)("img",{src:n(2781).Z,alt:""})]}),"\n",(0,i.jsxs)(t,{className:"custom-details-troubleshooting",children:[(0,i.jsx)("summary",{children:"Show the Device SMS console"}),(0,i.jsx)("img",{src:n(8181).Z,style:{width:565},alt:""})]}),"\n",(0,i.jsx)(s.h2,{id:"available-guides",children:"Available guides"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/how-tos/send-sms-portal",children:"Send SMS via the emnify Portal"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://cdn.emnify.net/api/doc/sms-operations.html",children:"Send and receive SMS with the emnify REST API"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/how-tos/zapier-sms-integration",children:"Set up a Zapier SMS integration"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/how-tos/configure-sms-interface",children:"Configure Webhook or SMPP as your SMS interface"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9507:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/portal-connected-devices-open-sms-console-d76fd792b414026fe97a17e70644683e.png"},2781:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/portal-device-details-open-sms-console-1651d06d2e45e606bab0945744d6373d.png"},8181:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/portal-device-sms-console-22fa4c712ab9254155de27acd6ad3f14.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>a});var i=n(7294);const o={},t=i.createContext(o);function a(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);