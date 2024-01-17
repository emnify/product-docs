"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2596],{3569:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(5893),t=n(1151);const o={description:"Learn about the modes of SMS operation and use cases available on your emnify account for IoT devices",last_update:{date:"07-20-2023"},slug:"/portal/sms"},a="SMS",r={id:"portal/sms",title:"SMS",description:"Learn about the modes of SMS operation and use cases available on your emnify account for IoT devices",source:"@site/docs/portal/sms.mdx",sourceDirName:"portal",slug:"/portal/sms",permalink:"/pr-preview/pr-254/portal/sms",draft:!1,unlisted:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/portal/sms.mdx",tags:[],version:"current",lastUpdatedAt:1689811200,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{description:"Learn about the modes of SMS operation and use cases available on your emnify account for IoT devices",last_update:{date:"07-20-2023"},slug:"/portal/sms"},sidebar:"mainDocsSidebar",previous:{title:"Device troubleshooting",permalink:"/pr-preview/pr-254/portal/troubleshooting"},next:{title:"No-code workflows",permalink:"/pr-preview/pr-254/portal/no-code"}},c={},d=[{value:"SMS P2P",id:"sms-p2p",level:2},{value:"SMS A2P",id:"sms-a2p",level:2},{value:"SMS MO and MT",id:"sms-mo-and-mt",level:2},{value:"Send SMS using the emnify Portal",id:"send-sms-using-the-emnify-portal",level:2},{value:"Open the SMS console",id:"open-the-sms-console",level:3},{value:"Send bulk SMS to multiple devices",id:"send-bulk-sms-to-multiple-devices",level:3},{value:"Send SMS using the emnify REST API",id:"send-sms-using-the-emnify-rest-api",level:2},{value:"SMS via Zapier",id:"sms-via-zapier",level:2},{value:"SMS via SMPP",id:"sms-via-smpp",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:o}=s;return o||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"sms",children:"SMS"}),"\n",(0,i.jsx)(s.p,{children:"Short Message Service (SMS) uses the same basic technology on IoT devices as that employed with consumer mobile devices.\nHowever, in the context of IoT devices, there are more modes of SMS operation and use cases that provide additional capabilities."}),"\n",(0,i.jsx)(s.h2,{id:"sms-p2p",children:"SMS P2P"}),"\n",(0,i.jsx)(s.p,{children:"Peer-to-peer (P2P) SMS describes the mode of sending SMS from one device to another."}),"\n",(0,i.jsx)(s.p,{children:"For IoT devices, this poses a security threat.\nAnyone with the correct MSISDN can issue commands to the device since there isn't any built-in authentication process."}),"\n",(0,i.jsx)(s.p,{children:"P2P also isn't suitable for IoT device use cases in which a device needs to update, interact, or transmit frequently because a device is limited to receiving only six SMS messages per minute in this mode."}),"\n",(0,i.jsx)(s.h2,{id:"sms-a2p",children:"SMS A2P"}),"\n",(0,i.jsxs)(s.p,{children:["SMS application-to-peer (A2P) describes the mode of SMS data exchange between a device and an application.\nOne example of this is ",(0,i.jsx)(s.a,{href:"#send-sms-using-the-emnify-portal",children:"sending SMS using the emnify Portal"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Unlike P2P, A2P lets you interact with ",(0,i.jsx)(s.em,{children:"multiple"})," devices using an application.\nBecause A2P SMS can be automated, you can interact with your devices at scale.\nIt also tracks messages, which enables you to see when a message has been delivered."]}),"\n",(0,i.jsx)(s.h2,{id:"sms-mo-and-mt",children:"SMS MO and MT"}),"\n",(0,i.jsxs)(s.p,{children:["Because the costs of sending SMS from an IoT device are higher than the cost of receiving SMS, all SMS usage is logged as either ",(0,i.jsx)(s.a,{href:"/glossary#sms-mo",children:"SMS MO"})," (sent) or ",(0,i.jsx)(s.a,{href:"/glossary#sms-mt",children:"SMS MT"})," (received)."]}),"\n",(0,i.jsxs)(s.p,{children:["Using the ",(0,i.jsx)(s.a,{href:"#send-sms-using-the-emnify-rest-api",children:"emnify REST API"}),", you can dispatch SMS MO from devices as HTTP ",(0,i.jsx)(s.code,{children:"POST"})," requests toward a user-configurable URL."]}),"\n",(0,i.jsxs)(s.p,{children:["To activate or deactivate SMS MO or MT for a group of devices, you can use the toggle switches in a new or existing ",(0,i.jsx)(s.strong,{children:"Service Policy"})," to which the devices are assigned.\nSee ",(0,i.jsx)(s.a,{href:"/portal/device-policies#service-policies",children:"Service Policies"})," for more details."]}),"\n",(0,i.jsx)(s.h2,{id:"send-sms-using-the-emnify-portal",children:"Send SMS using the emnify Portal"}),"\n",(0,i.jsxs)(s.p,{children:["You can use the ",(0,i.jsx)(s.a,{href:"https://portal.emnify.com/",children:"emnify Portal"})," to send and receive SMS messages to and from your devices.\nBecause SMS doesn't require a data connection, SMS is one of the ways you can configure the ",(0,i.jsx)(s.a,{href:"/glossary#apn",children:"APN"})," for ",(0,i.jsx)(s.a,{href:"/apn-configuration/gps-trackers",children:"GPS trackers"})," and ",(0,i.jsx)(s.a,{href:"/apn-configuration/industrial-routers",children:"industrial routers"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"open-the-sms-console",children:"Open the SMS console"}),"\n",(0,i.jsx)(s.p,{children:"Each device has an SMS console.\nTo open a device's SMS console, select its message icon."}),"\n",(0,i.jsxs)(o,{className:"custom-details-example",children:[(0,i.jsx)("summary",{children:"From Connected Devices"}),(0,i.jsx)("img",{src:n(9507).Z,alt:""})]}),"\n",(0,i.jsxs)(o,{className:"custom-details-example",children:[(0,i.jsx)("summary",{children:"From Device Details"}),(0,i.jsx)("img",{src:n(2781).Z,alt:""})]}),"\n",(0,i.jsxs)(o,{className:"custom-details-troubleshooting",children:[(0,i.jsx)("summary",{children:"Show the Device SMS console"}),(0,i.jsx)("img",{src:n(8181).Z,style:{width:565},alt:""})]}),"\n",(0,i.jsx)(s.h3,{id:"send-bulk-sms-to-multiple-devices",children:"Send bulk SMS to multiple devices"}),"\n",(0,i.jsx)("img",{src:n(5246).Z,alt:""}),"\n",(0,i.jsx)(s.h2,{id:"send-sms-using-the-emnify-rest-api",children:"Send SMS using the emnify REST API"}),"\n",(0,i.jsxs)(s.p,{children:["See ",(0,i.jsx)(s.a,{href:"/rest/sms-operations",children:"Sending and receiving SMS"})," in the ",(0,i.jsx)(s.a,{href:"/rest",children:"emnify REST API"})," documentation."]}),"\n",(0,i.jsx)(s.h2,{id:"sms-via-zapier",children:"SMS via Zapier"}),"\n",(0,i.jsxs)(s.p,{children:["Navigate to the emnify Portal ",(0,i.jsx)(s.a,{href:"https://portal.emnify.com/integrations",children:(0,i.jsx)(s.strong,{children:"Integrations"})})," under the ",(0,i.jsx)(s.strong,{children:"No-Code Workflows"}),' to find a list of Zapier integrations.\nIn this list, there are two "Zaps" for getting you started with sending SMS from your devices.']}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Send SMS via Twilio when new devices reach usage limits in emnify"}),"\n",(0,i.jsx)(s.li,{children:"Send SMS messages when new devices reach usage limits in emnify"}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["Learn more about ",(0,i.jsx)(s.a,{href:"/portal/no-code",children:"no-code workflows in the emnify Portal"}),"."]})}),"\n",(0,i.jsx)(s.h2,{id:"sms-via-smpp",children:"SMS via SMPP"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/glossary#smpp",children:"Short Message Peer-to-Peer (SMPP)"})," is a protocol that the telecommunication industry uses for exchanging SMS messages between short message service centers (SMSC) and/or external short messaging entities (ESME).\nTelematics platforms, SMS services, and operators often use SMPP to enable sending SMS to and from devices."]}),"\n",(0,i.jsxs)(s.p,{children:["You can ",(0,i.jsx)(s.a,{href:"/portal/device-policies#smpp-sms-interface",children:"select and configure SMPP"})," as your ",(0,i.jsx)(s.strong,{children:"SMS Interface"})," via a new or existing ",(0,i.jsx)(s.strong,{children:"Service Policy"})," under ",(0,i.jsx)(s.a,{href:"https://portal.emnify.com/device-policies",children:(0,i.jsx)(s.strong,{children:"Device Policies"})}),"."]}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["For an example of integrating SMPP with a third-party application, see ",(0,i.jsx)(s.a,{href:"https://www.emnify.com/integration-guides/smpp-integration-flespi-wialon-gurtam",children:"emnify SMS via SMPP integration with Gurtams' flespi and Wialon"}),"."]})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9507:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/portal-connected-devices-open-sms-console-381bb1f1b3e13beaaec4ddaae8466426.png"},5246:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/portal-connected-devices-sms-bulk-send-bcaa409d438539b97d2e9cab17e25d31.png"},2781:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/portal-device-details-open-sms-console-b1a8e9c1bd2b3f328ea8f88c123b4df1.png"},8181:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/portal-device-sms-console-8428244a6324e7a72b75bfe14e2363d7.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>a});var i=n(7294);const t={},o=i.createContext(t);function a(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);