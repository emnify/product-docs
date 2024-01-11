"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2561],{6931:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=i(5893),t=i(1151);const o={description:"Send/receive SMS via the emnify Portal, SMS APIs, or Zapier",last_update:{date:"01-06-2023"},slug:"/services/sms"},r="SMS",a={id:"services/connectivity/sms",title:"SMS",description:"Send/receive SMS via the emnify Portal, SMS APIs, or Zapier",source:"@site/docs/services/connectivity/sms.mdx",sourceDirName:"services/connectivity",slug:"/services/sms",permalink:"/pr-preview/pr-242/services/sms",draft:!1,unlisted:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/connectivity/sms.mdx",tags:[],version:"current",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{description:"Send/receive SMS via the emnify Portal, SMS APIs, or Zapier",last_update:{date:"01-06-2023"},slug:"/services/sms"},sidebar:"mainDocsSidebar",previous:{title:"Factory test mode",permalink:"/pr-preview/pr-242/services/factory-test-mode"},next:{title:"Integrations",permalink:"/pr-preview/pr-242/integration-guides"}},c={},d=[{value:"emnify Portal",id:"emnify-portal",level:2},{value:"emnify SMS REST API and webhook",id:"emnify-sms-rest-api-and-webhook",level:2},{value:"Zapier SMS integration",id:"zapier-sms-integration",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sms",children:"SMS"}),"\n",(0,s.jsx)(n.p,{children:"Short Message Services (SMS) were one of the first cellular services made available after voice.\nSMS is still very relevant for IoT use cases\u2014as SMS provides an inexpensive way to configure the device remotely without the need for a data connection.\nA typical use case is the configuration of the APN setting via SMS."}),"\n",(0,s.jsx)(n.p,{children:"The emnify platform supports:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Mobile originated (MO) SMS - SMS sent from the device with the emnify SIM"}),"\n",(0,s.jsx)(n.li,{children:"Mobile terminated (MT) SMS - SMS that are destined for a device with the emnify SIM"}),"\n",(0,s.jsx)(n.li,{children:"Peer-to-Peer (P2P) SMS - SMS sent from a device with any SIM to a device with the emnify SIM"}),"\n",(0,s.jsx)(n.li,{children:"Application- to-peer (A2P) SMS - The SMS is sent and received on an application"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The preceding scenarios can be activated and deactivated in the device policies to prevent misuse (for example, P2P SMS)."}),"\n",(0,s.jsx)(n.p,{children:"You can send and receive SMS of your devices through three different interfaces:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#emnify-portal",children:"emnify Portal"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#emnify-sms-rest-api-and-webhook",children:"emnify SMS API and webhook"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#zapier-sms-integration",children:"Zapier SMS integration"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"emnify-portal",children:"emnify Portal"}),"\n",(0,s.jsxs)(n.p,{children:["On the ",(0,s.jsx)(n.a,{href:"https://portal.emnify.com/connected-devices",children:(0,s.jsx)(n.strong,{children:"Connected Devices"})})," page of the emnify Portal, you can access the SMS console and directly send SMS to the devices.\nThe sender can be configured as well as the console shows if the SMS is delivered or not.\nYou'll see all SMS that the device receives sends out."]}),"\n",(0,s.jsxs)(n.p,{children:["For sending SMS messages to a single device, select ",(0,s.jsx)(n.strong,{children:"Details"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Portal screenshot of the Connected Devices page showing the extensive device list. There is a Details button available for each device listed.",src:i(9652).Z+"",width:"1928",height:"558"})}),"\n",(0,s.jsx)(n.p,{children:"An SMS/Message icon appears to the right of the device name."}),"\n",(0,s.jsx)("img",{src:i(3187).Z,alt:"",style:{width:350}}),"\n",(0,s.jsx)(n.p,{children:"The SMS history and input field at the bottom of the SMS console is similar to the layout and features found in most mobile messaging apps."}),"\n",(0,s.jsx)("img",{src:i(3424).Z,alt:"",style:{width:575}}),"\n",(0,s.jsxs)(n.p,{children:["When you select one or more devices in the list of ",(0,s.jsx)(n.a,{href:"https://portal.emnify.com/connected-devices",children:(0,s.jsx)(n.strong,{children:"Connected Devices"})}),", a group of menu items appear that includes ",(0,s.jsx)(n.strong,{children:"SMS"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Portal screenshot of the Connected Devices page. A top-level banner shows the number of devices selected and a list of options. Options from left to right: Reset, SMS, Device, IMEI Lock, More. SMS is selected.",src:i(8).Z+"",width:"1540",height:"619"})}),"\n",(0,s.jsx)(n.p,{children:"This SMS interface doesn't show a history of messages."}),"\n",(0,s.jsx)("img",{src:i(8948).Z,alt:"",style:{width:496}}),"\n",(0,s.jsx)(n.p,{children:"However, you receive a brief notification regarding the status of the SMS sent to the selected devices."}),"\n",(0,s.jsx)("img",{src:i(6708).Z,alt:"",style:{width:762}}),"\n",(0,s.jsx)(n.h2,{id:"emnify-sms-rest-api-and-webhook",children:"emnify SMS REST API and webhook"}),"\n",(0,s.jsxs)(n.p,{children:["For sending SMS through the REST API, check out the\xa0",(0,s.jsx)(n.a,{href:"/rest/sms-operations",children:"Send and receive SMS"})," guide."]}),"\n",(0,s.jsxs)(n.p,{children:["For receiving SMS and delivery notifications for SMS in your application, you can use the SMS webhook.\nTo configure the webhook, go to the ",(0,s.jsx)(n.a,{href:"https://portal.emnify.com/device-policies",children:(0,s.jsx)(n.strong,{children:"Device Policies"})})," page.\nUnder ",(0,s.jsx)(n.strong,{children:"Service Policies"}),", choose the policy you want to update and click ",(0,s.jsx)(n.strong,{children:"Details"}),".\nThen, find the ",(0,s.jsx)(n.strong,{children:"SMS Interface"})," section."]}),"\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"Webhook"}),", then select ",(0,s.jsx)(n.strong,{children:"Configure Webhook"}),".\nIn the ",(0,s.jsx)(n.strong,{children:"Add Webhook"})," dialog, provide the webhook URL and an optional secret key:"]}),"\n",(0,s.jsx)("img",{src:i(7202).Z,alt:"",style:{width:856}}),"\n",(0,s.jsxs)(n.p,{children:["When you want to send an SMS from the device to your application, your device should send the SMS to an invalid\xa0",(0,s.jsx)(n.a,{href:"/glossary#msisdn",children:"MSISDN"}),"\xa0with eight digits or less.\nThe SMS is then delivered over the webhook."]}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:i(9048).Z,alt:"",style:{width:400}}),(0,s.jsx)("figcaption",{children:(0,s.jsx)("em",{children:(0,s.jsx)(n.p,{children:"Delivery notification as received in Make (Integromat) webhook for SMS with ID: 46638644"})})})]}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:i(3677).Z,alt:"",style:{width:400}}),(0,s.jsx)("figcaption",{children:(0,s.jsx)("em",{children:(0,s.jsx)(n.p,{children:"Mobile originated SMS from the device as received in Integromat webhook"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"zapier-sms-integration",children:"Zapier SMS integration"}),"\n",(0,s.jsxs)(n.p,{children:["Instead of implementing the APIs in your application, emnify and Zapier provide a no-code alternative to automate SMS workflows.\nZapier has a concept of triggers and actions\u2014when a trigger happens multiple actions can be based on it\u2014taking content from previous steps.\nSending SMS to your devices is available as an action in Zapier.\nIn the ",(0,s.jsx)(n.a,{href:"https://portal.emnify.com/integrations#no-code-workflows",children:(0,s.jsx)(n.strong,{children:"No-Code-Workflows"})})," list on the emnify Portal ",(0,s.jsx)(n.strong,{children:"Integrations"})," page, select the following:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Portal screenshot from the Integrations page. The featured integration reads, &quot;Enable devices and send SMS via emnify from newly caught webhooks. emnify + Webhooks by Zapier&quot;. Next to the text, there&#39;s a &quot;Use this Zap&quot; button.",src:i(476).Z+"",width:"1717",height:"145"})}),"\n",(0,s.jsx)(n.p,{children:"There you'll find a predefined Zap consisting of three steps with interactive instructions on how to configure it or modify the steps for your specific needs:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Catch Hook in Webhooks by Zapier (Trigger)"}),"\n",(0,s.jsx)(n.li,{children:"Enable a Device in emnify (Action)"}),"\n",(0,s.jsx)(n.li,{children:"Send an SMS in emnify (Action)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See also Zapier's ",(0,s.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"How to connect emnify + SMS by Zapier"})," guide."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9048:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/delivery-notification-a6eed09f537ef560083b79c45d705f86.png"},3677:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/mosms-141a0aebd0de96626416d3ef6e618071.png"},3187:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/portal-connected-devices-details-open-sms-console-ed1576a8e1b1e76b8c026b90c3caa5ba.png"},3424:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/portal-connected-devices-details-sms-console-631f06621a2b46d60d8c48d28e11f676.png"},7202:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/portal-device-policies-add-webhook-21c5cfab16773254e69c530e86f9bdd8.png"},8948:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/portal-send-sms-message-text-4c522dfa5546b1170b831c78640a796f.png"},6708:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/portal-sms-sent-69915ac6cdf4ccd113f4a5110bc96670.png"},9652:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/portal-connected-devices-details-button-59a28d6dc69329bab6476c939a38428d.png"},8:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/portal-connected-devices-sms-026112a0b338921f46453863dd754dba.png"},476:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/portal-integrations-sms-webhooks-zapier-0b0398bca200923758ba37bc5112b738.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var s=i(7294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);