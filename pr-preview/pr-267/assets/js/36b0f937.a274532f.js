"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2561],{6931:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=s(5893),t=s(1151);const o={description:"Send or receive SMS via the emnify Portal, use the SMS APIs, or integrate Zapier",last_update:{date:"01-17-2024"},slug:"/services/sms"},r="SMS",a={id:"services/connectivity/sms",title:"SMS",description:"Send or receive SMS via the emnify Portal, use the SMS APIs, or integrate Zapier",source:"@site/docs/services/connectivity/sms.mdx",sourceDirName:"services/connectivity",slug:"/services/sms",permalink:"/pr-preview/pr-267/services/sms",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1705449600,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{description:"Send or receive SMS via the emnify Portal, use the SMS APIs, or integrate Zapier",last_update:{date:"01-17-2024"},slug:"/services/sms"},sidebar:"mainDocsSidebar",previous:{title:"Factory test mode",permalink:"/pr-preview/pr-267/services/factory-test-mode"},next:{title:"Integration guides",permalink:"/pr-preview/pr-267/integration-guides"}},c={},d=[{value:"emnify Portal",id:"emnify-portal",level:2},{value:"emnify SMS REST API and webhook",id:"emnify-sms-rest-api-and-webhook",level:2},{value:"Zapier SMS integration",id:"zapier-sms-integration",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"sms",children:"SMS"}),"\n",(0,i.jsx)(n.p,{children:"Short Message Services (SMS) were one of the first cellular services made available after voice.\nSMS is still very relevant for IoT use cases\u2014as SMS provides an inexpensive way to configure the device remotely without the need for a data connection.\nA typical use case is the configuration of the APN setting via SMS."}),"\n",(0,i.jsx)(n.p,{children:"The emnify platform supports:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Mobile originated (MO) SMS - SMS sent from the device with the emnify SIM"}),"\n",(0,i.jsx)(n.li,{children:"Mobile terminated (MT) SMS - SMS that are destined for a device with the emnify SIM"}),"\n",(0,i.jsx)(n.li,{children:"Peer-to-Peer (P2P) SMS - SMS sent from a device with any SIM to a device with the emnify SIM"}),"\n",(0,i.jsx)(n.li,{children:"Application- to-peer (A2P) SMS - The SMS is sent and received on an application"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The preceding scenarios can be activated and deactivated in the device policies to prevent misuse (for example, P2P SMS)."}),"\n",(0,i.jsx)(n.p,{children:"You can send and receive SMS of your devices through three different interfaces:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#emnify-portal",children:"emnify Portal"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#emnify-sms-rest-api-and-webhook",children:"emnify SMS API and webhook"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#zapier-sms-integration",children:"Zapier SMS integration"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"emnify-portal",children:"emnify Portal"}),"\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/connected-devices",children:(0,i.jsx)(n.strong,{children:"Connected Devices"})})," page of the emnify Portal, you can access the SMS console and directly send SMS to the devices.\nThe sender can be configured as well as the console shows if the SMS is delivered or not.\nYou'll see all SMS that the device receives sends out."]}),"\n",(0,i.jsxs)(n.p,{children:["For sending SMS messages to a single device, select ",(0,i.jsx)(n.strong,{children:"Details"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Portal screenshot of the Connected Devices page showing the extensive device list. There is a Details button available for each device listed.",src:s(9652).Z+"",width:"2466",height:"626"})}),"\n",(0,i.jsx)(n.p,{children:"An SMS/Message icon appears to the right of the device name."}),"\n",(0,i.jsx)("img",{src:s(3187).Z,alt:"",style:{width:350}}),"\n",(0,i.jsx)(n.p,{children:"You can also open the SMS console directly from the Connected Devices table."}),"\n",(0,i.jsx)("img",{src:s(769).Z,alt:""}),"\n",(0,i.jsx)(n.p,{children:"The SMS history and input field at the bottom of the SMS console is similar to the layout and features found in most mobile messaging apps."}),"\n",(0,i.jsx)("img",{src:s(3424).Z,alt:"",style:{width:475}}),"\n",(0,i.jsxs)(n.p,{children:["When you select one or more devices in the list of ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/connected-devices",children:(0,i.jsx)(n.strong,{children:"Connected Devices"})}),", a group of menu items appear that includes ",(0,i.jsx)(n.strong,{children:"SMS"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Portal screenshot of the Connected Devices page. A top-level banner shows the number of devices selected and a list of options. Options from left to right: Reset, SMS, Device, IMEI Lock, More. SMS is selected.",src:s(8).Z+"",width:"2490",height:"554"})}),"\n",(0,i.jsx)(n.p,{children:"This SMS interface doesn't show a history of messages."}),"\n",(0,i.jsx)("img",{src:s(8948).Z,alt:"",style:{width:496}}),"\n",(0,i.jsx)(n.p,{children:"However, you receive a brief notification regarding the status of the SMS sent to the selected devices."}),"\n",(0,i.jsx)(n.h2,{id:"emnify-sms-rest-api-and-webhook",children:"emnify SMS REST API and webhook"}),"\n",(0,i.jsxs)(n.p,{children:["For sending SMS through the REST API, check out the\xa0",(0,i.jsx)(n.a,{href:"/rest/sms-operations",children:"Send and receive SMS"})," guide."]}),"\n",(0,i.jsxs)(n.p,{children:["For receiving SMS and delivery notifications for SMS in your application, you can use the SMS webhook.\nTo configure the webhook, go to the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/device-policies",children:(0,i.jsx)(n.strong,{children:"Device Policies"})})," page.\nUnder ",(0,i.jsx)(n.strong,{children:"Service Policies"}),", choose the policy you want to update and click ",(0,i.jsx)(n.strong,{children:"Details"}),".\nThen, find the ",(0,i.jsx)(n.strong,{children:"SMS Interface"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.strong,{children:"Webhook"}),", then select ",(0,i.jsx)(n.strong,{children:"Configure Webhook"}),"."]}),"\n",(0,i.jsx)("img",{src:s(8410).Z,alt:"",style:{width:500}}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Add Webhook"})," dialog, provide the webhook URL and an optional secret key:"]}),"\n",(0,i.jsx)("img",{src:s(6116).Z,alt:""}),"\n",(0,i.jsxs)(n.p,{children:["When you want to send an SMS from the device to your application, your device should send the SMS to an invalid\xa0",(0,i.jsx)(n.a,{href:"/glossary#msisdn",children:"MSISDN"}),"\xa0with eight digits or less.\nThe SMS is then delivered over the webhook."]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:s(9048).Z,alt:"",style:{width:400}}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("em",{children:(0,i.jsx)(n.p,{children:"Delivery notification as received in Make (Integromat) webhook for SMS with ID: 46638644"})})})]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:s(3677).Z,alt:"",style:{width:400}}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("em",{children:(0,i.jsx)(n.p,{children:"Mobile originated SMS from the device as received in Integromat webhook"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"zapier-sms-integration",children:"Zapier SMS integration"}),"\n",(0,i.jsxs)(n.p,{children:["Instead of implementing the APIs in your application, emnify and Zapier provide a no-code alternative to automate SMS workflows.\nZapier has a concept of triggers and actions\u2014when a trigger happens multiple actions can be based on it\u2014taking content from previous steps.\nSending SMS to your devices is available as an action in Zapier.\nIn the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/integrations#no-code-workflows",children:(0,i.jsx)(n.strong,{children:"No-Code-Workflows"})})," list on the emnify Portal ",(0,i.jsx)(n.strong,{children:"Integrations"})," page, select the following:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Portal screenshot from the Integrations page. The featured integration reads, &quot;Enable devices and send SMS via emnify from newly caught webhooks. emnify + Webhooks by Zapier&quot;. Next to the text, there&#39;s a &quot;Use this Zap&quot; button.",src:s(476).Z+"",width:"2428",height:"212"})}),"\n",(0,i.jsx)(n.p,{children:"There you'll find a predefined Zap consisting of three steps with interactive instructions on how to configure it or modify the steps for your specific needs:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Catch Hook in Webhooks by Zapier (Trigger)"}),"\n",(0,i.jsx)(n.li,{children:"Enable a Device in emnify (Action)"}),"\n",(0,i.jsx)(n.li,{children:"Send an SMS in emnify (Action)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See also Zapier's ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"How to connect emnify + SMS by Zapier"})," guide."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9048:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/delivery-notification-a6eed09f537ef560083b79c45d705f86.png"},3677:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/mosms-141a0aebd0de96626416d3ef6e618071.png"},3187:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/portal-connected-devices-details-open-sms-console-1651d06d2e45e606bab0945744d6373d.png"},3424:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/portal-connected-devices-details-sms-console-22fa4c712ab9254155de27acd6ad3f14.png"},769:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/portal-connected-devices-open-sms-console-d76fd792b414026fe97a17e70644683e.png"},8948:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/portal-send-sms-message-text-3f762b8dbd11828f9f3ff6b96099eede.png"},6116:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/portal-service-policies-sms-interface-add-webhook-f285bb7a24abbfe6fe7f6e052fd6a3ec.png"},8410:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/portal-service-policies-sms-interface-configure-webhook-8396b8945c53d0df581d9266d1b498d1.png"},9652:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/portal-connected-devices-details-button-88ee64e8e3f7922bee07ddd11b941560.png"},8:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/portal-connected-devices-sms-c85585a411aa7b1b0d6066872febaae0.png"},476:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/portal-integrations-sms-webhooks-zapier-5edf76861c4c6ba2d92a972b8f532cba.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var i=s(7294);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);