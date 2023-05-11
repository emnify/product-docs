"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[9009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,f=d["".concat(c,".").concat(h)]||d[h]||m[h]||o;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(7462),a=(n(7294),n(3905));const o={description:"Send/receive SMS via the emnify Portal, SMS APIs, or Zapier"},r="SMS",s={unversionedId:"services/sms",id:"services/sms",title:"SMS",description:"Send/receive SMS via the emnify Portal, SMS APIs, or Zapier",source:"@site/docs/services/sms.md",sourceDirName:"services",slug:"/services/sms",permalink:"/services/sms",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/sms.md",tags:[],version:"current",lastUpdatedAt:1683791560,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{description:"Send/receive SMS via the emnify Portal, SMS APIs, or Zapier"},sidebar:"mainDocsSidebar",previous:{title:"OpenVPN",permalink:"/services/openvpn"},next:{title:"User management",permalink:"/services/user-management"}},c={},l=[{value:"emnify Portal",id:"emnify-portal",level:2},{value:"emnify SMS REST API and webhook",id:"emnify-sms-rest-api-and-webhook",level:2},{value:"Zapier SMS integration",id:"zapier-sms-integration",level:2}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sms"},"SMS"),(0,a.kt)("p",null,"Short Message Services (SMS) were one of the first cellular services made available after voice.\nSMS is still very relevant for IoT use cases \u2013 as SMS provides a simple, inexpensive way to configure the device remotely without the need for a data connection.\nA typical use case is the configuration of the APN setting via SMS."),(0,a.kt)("p",null,"The emnify platform supports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mobile originated (MO) SMS \u2013 SMS sent from the device with the emnify SIM"),(0,a.kt)("li",{parentName:"ul"},"Mobile terminated (MT) SMS \u2013 SMS that are destined for a device with the emnify SIM"),(0,a.kt)("li",{parentName:"ul"},"Peer-to-Peer (P2P) SMS \u2013 SMS sent from a device with any SIM to a device with the emnify SIM"),(0,a.kt)("li",{parentName:"ul"},"Application- to-peer (A2P) SMS \u2013 The SMS is sent and received on an application")),(0,a.kt)("p",null,"The scenarios above can be activated and deactivated in the device policies to prevent misuse (e.g., P2P SMS)."),(0,a.kt)("p",null,"You can send and receive SMSs of your devices through 3 different interfaces:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#emnify-portal"},"emnify Portal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#emnify-sms-rest-api-and-webhook"},"emnify SMS API and webhook")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#zapier-sms-integration"},"Zapier SMS integration"))),(0,a.kt)("h2",{id:"emnify-portal"},"emnify Portal"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal")," \u2192 ",(0,a.kt)("a",{parentName:"p",href:"https://portal.emnify.com/connected-devices"},(0,a.kt)("strong",{parentName:"a"},"Connected Devices"))," you can access the SMS console and directly send SMS to the devices.\nThe sender can be configured as well as the console will show if the SMS is delivered or not.\nYou will see all SMSs that the device receives sends out."),(0,a.kt)("p",null,"For sending SMS messages to a single device, select ",(0,a.kt)("strong",{parentName:"p"},"Details"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Portal screenshot of the Connected Devices page showing the extensive device list. There is a Details button available for each device listed.",src:n(607).Z,width:"1928",height:"558"})),(0,a.kt)("p",null,"An SMS/Message icon will appear to the right of the device name."),(0,a.kt)("img",{src:n(495).Z,alt:"",style:{width:350}}),(0,a.kt)("p",null,"The SMS history and input field at the bottom of the SMS console is similiar to the layout and functionality found in most mobile messaging apps."),(0,a.kt)("img",{src:n(4365).Z,alt:"",style:{width:575}}),(0,a.kt)("p",null,"When you select (check) one or more devices in the list of ",(0,a.kt)("a",{parentName:"p",href:"https://portal.emnify.com/connected-devices"},(0,a.kt)("strong",{parentName:"a"},"Connected Devices")),", a group of menu items will appear that includes ",(0,a.kt)("strong",{parentName:"p"},"SMS"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Portal screenshot of the Connected Devices page. A top-level banner shows the number of devices selected and a list of options. Options from left to right: Reset, SMS, Device, IMEI Lock, More. SMS is selected.",src:n(8826).Z,width:"1540",height:"619"})),(0,a.kt)("p",null,"This SMS interface does not show a history of messages."),(0,a.kt)("img",{src:n(4067).Z,alt:"",style:{width:496}}),(0,a.kt)("p",null,"However, you will receive a brief notification regarding the status of the SMS sent to the selected devices."),(0,a.kt)("img",{src:n(6889).Z,alt:"",style:{width:762}}),(0,a.kt)("h2",{id:"emnify-sms-rest-api-and-webhook"},"emnify SMS REST API and webhook"),(0,a.kt)("p",null,"For sending SMS through the REST API, check out the\xa0",(0,a.kt)("a",{parentName:"p",href:"#_sending_and_receiving_sms"},"Sending and receiving SMS"),"\xa0section."),(0,a.kt)("p",null,"For receiving SMS and delivery notifications for SMS in your application, you can use the SMS webhook which can be configured under ",(0,a.kt)("a",{parentName:"p",href:"https://portal.emnify.com/device-policies"},(0,a.kt)("strong",{parentName:"a"},"Device Policies"))," \u2192 ",(0,a.kt)("strong",{parentName:"p"},"Service Policies")," \u2192 ",(0,a.kt)("strong",{parentName:"p"},"SMS Interface"),"."),(0,a.kt)("img",{src:n(742).Z,alt:"",style:{width:800}}),(0,a.kt)("p",null,"Select ",(0,a.kt)("strong",{parentName:"p"},"Webhook"),", then select  ",(0,a.kt)("strong",{parentName:"p"},"Configure Webhook"),":"),(0,a.kt)("img",{src:n(1900).Z,alt:"",style:{width:399}}),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Add Webhook")," dialog, provide the webhook URL and an optional secret key: "),(0,a.kt)("img",{src:n(7366).Z,alt:"",style:{width:856}}),(0,a.kt)("p",null,"When you want to send an SMS from the device to your application, your device should send the SMS to an invalid\xa0",(0,a.kt)("a",{parentName:"p",href:"#msisdn"},"MSISDN"),"\xa0with 8 digits or less.\nThe SMS will then be delivered over the webhook."),(0,a.kt)("img",{src:n(56).Z,alt:"",style:{width:400}}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Delivery notification as received in Integromat webhook for SMS with ID: 46638644")),(0,a.kt)("img",{src:n(9980).Z,alt:"",style:{width:400}}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Mobile originated SMS from the device as received in Integromat webhook")),(0,a.kt)("h2",{id:"zapier-sms-integration"},"Zapier SMS integration"),(0,a.kt)("p",null,"Instead of implementing the APIs in your application, emnify and Zapier provide a no-code alternative to automate SMS workflows.\nZapier has a concept of triggers and actions \u2013 when a trigger happens multiple actions can be based on it \u2013 taking content from previous steps.\nSending SMS to your devices is available as an action in Zapier.\nIn the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.emnify.com/integrations#no-code-workflows"},(0,a.kt)("strong",{parentName:"a"},"No-Code-Workflows"))," list on the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.emnify.com/integrations"},(0,a.kt)("strong",{parentName:"a"},"Integrations")," page of the emnify Portal"),", select the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Portal screenshot from the Integrations page. The featured integration reads, &quot;Enable devices and send SMSes via emnify from newly caught webhooks. emnify + Webhooks by Zapier&quot;. Next to the text, there&#39;s a &quot;Use this Zap&quot; button.",src:n(8875).Z,width:"1717",height:"145"})),(0,a.kt)("p",null,"There you will find a predefined Zap consisting of 3 steps with interactive instructions on how to configure it or modify the steps for your specific needs:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Catch Hook in Webhooks by Zapier (Trigger)"),(0,a.kt)("li",{parentName:"ol"},"Enable a Device in emnify (Action)"),(0,a.kt)("li",{parentName:"ol"},"Send an SMS in emnify (Action)")),(0,a.kt)("p",null,"See also Zapier's ",(0,a.kt)("a",{parentName:"p",href:"https://zapier.com/apps/emnify/integrations/sms"},"How to connect emnify + SMS by Zapier")," guide."))}d.isMDXComponent=!0},56:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/delivery-notification-a6eed09f537ef560083b79c45d705f86.png"},9980:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mosms-141a0aebd0de96626416d3ef6e618071.png"},495:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/portal-connected-devices-details-open-sms-console-ed1576a8e1b1e76b8c026b90c3caa5ba.png"},4365:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/portal-connected-devices-details-sms-console-631f06621a2b46d60d8c48d28e11f676.png"},7366:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/portal-device-policies-add-webhook-21c5cfab16773254e69c530e86f9bdd8.png"},1900:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/portal-device-policies-configure-webhook-42d3e56643f0678b6b9941b170c738c9.png"},742:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/portal-device-policies-sms-interface-webhook-c8b6ee4132912d9b9c7f18e0c0a6ff8a.png"},4067:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/portal-send-sms-message-text-4c522dfa5546b1170b831c78640a796f.png"},6889:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/portal-sms-sent-69915ac6cdf4ccd113f4a5110bc96670.png"},607:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/portal-connected-devices-details-button-59a28d6dc69329bab6476c939a38428d.png"},8826:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/portal-connected-devices-sms-026112a0b338921f46453863dd754dba.png"},8875:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/portal-integrations-sms-webhooks-zapier-0b0398bca200923758ba37bc5112b738.png"}}]);