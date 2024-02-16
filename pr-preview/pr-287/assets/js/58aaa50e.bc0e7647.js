"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6884],{5860:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(5893),o=i(1151);const s={description:"Available SMS services offered by the emnify IoT SuperNetwork, including SMS MO, SMS MT, A2P, P2P, and more",last_update:{date:"02-13-2024"},slug:"/services/sms"},r="SMS",a={id:"services/connectivity/sms",title:"SMS",description:"Available SMS services offered by the emnify IoT SuperNetwork, including SMS MO, SMS MT, A2P, P2P, and more",source:"@site/docs/services/connectivity/sms.md",sourceDirName:"services/connectivity",slug:"/services/sms",permalink:"/pr-preview/pr-287/services/sms",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1707782400,formattedLastUpdatedAt:"Feb 13, 2024",frontMatter:{description:"Available SMS services offered by the emnify IoT SuperNetwork, including SMS MO, SMS MT, A2P, P2P, and more",last_update:{date:"02-13-2024"},slug:"/services/sms"},sidebar:"mainDocsSidebar",previous:{title:"Factory test mode",permalink:"/pr-preview/pr-287/services/factory-test-mode"},next:{title:"Quota management",permalink:"/pr-preview/pr-287/services/quota-management"}},c={},d=[{value:"Classifications and support",id:"classifications-and-support",level:2},{value:"A2P SMS communication",id:"a2p-sms-communication",level:2},{value:"Short codes",id:"short-codes",level:2},{value:"Firewall",id:"firewall",level:2}];function l(e){const n={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sms",children:"SMS"}),"\n",(0,t.jsx)(n.p,{children:"SMS are highly relevant for IoT applications because SMS only use the signaling channel.\nThis means that devices can exchange SMS even under poor radio conditions or without a data session (for example, before you configure the APN)."}),"\n",(0,t.jsx)(n.p,{children:"A device that isn\u2019t constantly connected receives the SMS on the next attachment, and the SMS provider sends a delivery receipt, which allows you to track the communication.\nSMS also allow an IoT device to send commands via short codes to the application or other device peers to exchange information."}),"\n",(0,t.jsx)(n.p,{children:"SMS are inexpensive, limited to 160 characters, and supported in all networks except NB-IoT."}),"\n",(0,t.jsx)(n.h2,{id:"classifications-and-support",children:"Classifications and support"}),"\n",(0,t.jsx)(n.p,{children:"The emnify IoT SuperNetwork includes a short message service center (SMSC) that supports:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Mobile originated (MO) SMS - Sent from the device with an emnify SIM (for example, to send sensor data)."}),"\n",(0,t.jsx)(n.li,{children:"Mobile terminated (MT) SMS - Destined for a device with an emnify SIM (for example, to change a device configuration)."}),"\n",(0,t.jsx)(n.li,{children:"Peer-to-peer (P2P) SMS - Sent from a device with any SIM to a device with an emnify SIM."}),"\n",(0,t.jsx)(n.li,{children:"Application-to-peer (A2P) SMS - Sent and received on an application."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To prevent misuse, you can activate and deactivate these classifications in the device policies."}),"\n",(0,t.jsx)(n.h2,{id:"a2p-sms-communication",children:"A2P SMS communication"}),"\n",(0,t.jsx)(n.p,{children:"A2P SMS provides a powerful way to interact with IoT devices, with two distinguished scenarios:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Forward information from applications through SMS to the device (for example, to trigger a specific command)."}),"\n",(0,t.jsx)(n.li,{children:"Retrieve the SMS information sent from the device (for example, so that the device can trigger a particular action on the application side)."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can manage A2P SMS communication through four different interfaces:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SMS Console on the web portal"})," - The emnify Portal provides an SMS console that allows you to send SMS to the device with a configurable source address. The console also lists SMS received and sent by the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"REST API"})," - Through the REST API, you can send SMS with a POST request and receive SMS via a webhook. Information about SMS delivery is also available."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SMPP"})," - Several IoT platforms (for example, in telematics) provide a short message peer-to-peer protocol (SMPP) interface to send SMS to a connected device. When connecting the third-party platform via SMPP, the SMS delivers through the emnify SMSC with higher reliability and lower cost."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Zapier"})," - Instead of implementing the APIs in your application, emnify and Zapier provides a no-code alternative to automate SMS workflows. You can send SMS on specific triggers (for example, email or Slack message) or use the SMS webhook to define an automated flow after receiving an SMS from the device."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"short-codes",children:"Short codes"}),"\n",(0,t.jsx)(n.p,{children:"SMS short codes are often associated with emergency or television quiz services, where you send SMS to a short, alphanumeric address, which then triggers an automated process.\nThe emnify IoT SuperNetwork supports alphanumeric short codes with up to seven digits.\nAll SMS are then delivered over the REST API and processed programmatically.\nNo SMS short code configuration is required per customer or service, which means you can use your own short codes and customize them based on the use case."}),"\n",(0,t.jsx)(n.h2,{id:"firewall",children:"Firewall"}),"\n",(0,t.jsx)(n.p,{children:"SMS comes with risks, such as increased device power consumption, attacker infiltration, and additional costs.\nThat\u2019s why emnify allows you to configure SMS MO and SMS MT limits on an individual or a group of devices or switch them off completely.\nYou can also turn on or off internal P2P SMS (that is, devices managed by the emnify IoT SuperNetwork) or external P2P SMS (external communication from and to any other devices)."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(7294);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);