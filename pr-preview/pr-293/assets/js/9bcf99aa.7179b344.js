"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[1543],{6988:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=s(5893),t=s(1151);const o={description:"How to access the SMS console and send SMS on the emnify Portal",last_update:{date:"02-13-2024"},pagination_next:"how-tos/sms/portal",sidebar_label:"Configure the SMS interface",slug:"/how-tos/configure-sms-interface"},r="Configure the SMS interface",c={id:"how-tos/sms/sms-interface",title:"Configure the SMS interface",description:"How to access the SMS console and send SMS on the emnify Portal",source:"@site/docs/how-tos/sms/sms-interface.mdx",sourceDirName:"how-tos/sms",slug:"/how-tos/configure-sms-interface",permalink:"/pr-preview/pr-293/how-tos/configure-sms-interface",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1707782400,formattedLastUpdatedAt:"Feb 13, 2024",frontMatter:{description:"How to access the SMS console and send SMS on the emnify Portal",last_update:{date:"02-13-2024"},pagination_next:"how-tos/sms/portal",sidebar_label:"Configure the SMS interface",slug:"/how-tos/configure-sms-interface"},sidebar:"mainDocsSidebar",previous:{title:"SSO troubleshooting",permalink:"/pr-preview/pr-293/sso/troubleshooting"},next:{title:"Send SMS via the emnify Portal",permalink:"/pr-preview/pr-293/how-tos/send-sms-portal"}},a={},l=[{value:"Webhook",id:"webhook",level:2},{value:"SMPP",id:"smpp",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configure-the-sms-interface",children:"Configure the SMS interface"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"SMS interface"})," specifies how and where to forward SMS from devices under this device policy."]}),"\n",(0,i.jsx)(n.p,{children:"The following connections are available:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/how-tos/send-sms-portal",children:(0,i.jsx)(n.strong,{children:"Web Portal"})})," (default) - Access SMS directly in the emnify Portal"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#webhook",children:(0,i.jsx)(n.strong,{children:"Webhook"})})," - Configure a URL to receive SMS sent from your device"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#smpp",children:(0,i.jsx)(n.strong,{children:"SMPP"})})," - Set up a direct SMPP connection to emnify"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"webhook",children:"Webhook"}),"\n",(0,i.jsx)(n.p,{children:"You can use the SMS webhook to receive SMS and delivery notifications for SMS in your application."}),"\n",(0,i.jsx)(n.p,{children:"Follow these steps to configure the webhook as your SMS interface:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"Log in to your emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to your ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/device-policies",children:(0,i.jsx)(n.strong,{children:"Device Policies"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.strong,{children:"Service Policies"}),", choose the policy you want to update and click ",(0,i.jsx)(n.strong,{children:"Details"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Find the ",(0,i.jsx)(n.strong,{children:"SMS interface"})," section.\nSelect ",(0,i.jsx)(n.strong,{children:"Webhook"}),", then click ",(0,i.jsx)(n.strong,{children:"Configure Webhook"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:s(9845).Z,alt:"",style:{width:500}}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["Provide the URL for your webhook.\nOptionally, you can provide a secret key to prevent unauthorized access.\nThen, click ",(0,i.jsx)(n.strong,{children:"Add Webhook"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:s(4046).Z,alt:""}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["When you want to send an SMS from the device to your application, your device should send the SMS to an invalid ",(0,i.jsx)(n.a,{href:"/glossary#msisdn",children:"MSISDN"})," with seven digits or less."]})}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:s(9948).Z,alt:"",style:{width:400}}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("em",{children:(0,i.jsx)(n.p,{children:"Delivery notification as received in Make (Integromat) webhook for SMS with ID: 46638644"})})})]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:s(5179).Z,alt:"",style:{width:400}}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("em",{children:(0,i.jsx)(n.p,{children:"Mobile originated SMS from the device as received in Integromat webhook"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"smpp",children:"SMPP"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/glossary#smpp",children:"Short Message Peer-to-Peer (SMPP)"})," is a protocol that the telecommunication industry uses to exchange SMS messages between short message service centers (SMSC) and external short messaging entities (ESME).\nTelematics platforms, SMS services, and operators often use SMPP to enable sending SMS to and from devices."]}),"\n",(0,i.jsx)(n.p,{children:"Follow these steps to configure SMPP as your SMS interface:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"Log in to your emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to your ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/device-policies",children:(0,i.jsx)(n.strong,{children:"Device Policies"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.strong,{children:"Service Policies"}),", choose the policy you want to update and click ",(0,i.jsx)(n.strong,{children:"Details"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Find the ",(0,i.jsx)(n.strong,{children:"SMS interface"})," section and select ",(0,i.jsx)(n.strong,{children:"SMPP"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When you select ",(0,i.jsx)(n.strong,{children:"SMPP"})," as your ",(0,i.jsx)(n.strong,{children:"SMS interface"}),", you're given a ",(0,i.jsx)(n.strong,{children:"System ID"})," and ",(0,i.jsx)(n.strong,{children:"Password"})," to access the emnify ",(0,i.jsx)(n.strong,{children:"SMPP Server"}),"."]}),"\n",(0,i.jsx)("img",{src:s(9750).Z,alt:""}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For an example of integrating SMPP with a third-party application, see ",(0,i.jsx)(n.a,{href:"https://www.emnify.com/integration-guides/smpp-integration-flespi-wialon-gurtam",children:"emnify SMS via SMPP integration with Gurtams' flespi and Wialon"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9948:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/delivery-notification-a6eed09f537ef560083b79c45d705f86.png"},5179:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/mosms-141a0aebd0de96626416d3ef6e618071.png"},4046:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/portal-service-policies-sms-interface-add-webhook-f285bb7a24abbfe6fe7f6e052fd6a3ec.png"},9845:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/portal-service-policies-sms-interface-configure-webhook-8396b8945c53d0df581d9266d1b498d1.png"},9750:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/portal-service-policies-sms-interface-smpp-a23d9269c636bdde586cc948c596b330.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var i=s(7294);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);