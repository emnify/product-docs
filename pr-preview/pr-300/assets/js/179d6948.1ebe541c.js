"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6995],{4688:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=t(5893),o=t(1151),r=t(1644),s=t(3618);const a={description:"Manually configure the emnify APN on industrial cellular routers like Teltonika Networks",last_update:{date:"08-09-2023"},sidebar_label:"Industrial routers",slug:"/apn-configuration/industrial-routers"},l="Configure the APN on industrial routers",c={id:"quickstart/apn-configuration/industrial-routers",title:"Configure the APN on industrial routers",description:"Manually configure the emnify APN on industrial cellular routers like Teltonika Networks",source:"@site/docs/quickstart/apn-configuration/industrial-routers.mdx",sourceDirName:"quickstart/apn-configuration",slug:"/apn-configuration/industrial-routers",permalink:"/pr-preview/pr-300/apn-configuration/industrial-routers",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1691539200,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{description:"Manually configure the emnify APN on industrial cellular routers like Teltonika Networks",last_update:{date:"08-09-2023"},sidebar_label:"Industrial routers",slug:"/apn-configuration/industrial-routers"},sidebar:"mainDocsSidebar",previous:{title:"GPS trackers",permalink:"/pr-preview/pr-300/apn-configuration/gps-trackers"},next:{title:"Troubleshooting",permalink:"/pr-preview/pr-300/quickstart/troubleshooting"}},d={},h=[{value:"Teltonika Networks",id:"teltonika-networks",level:2},{value:"Teltonika WebUI",id:"teltonika-webui",level:3},{value:"emnify Portal SMS console",id:"sms-console-teltonika",level:3},{value:"emnify REST API",id:"rest-api-teltonika",level:3}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configure-the-apn-on-industrial-routers",children:"Configure the APN on industrial routers"}),"\n","\n","\n",(0,i.jsx)(n.h2,{id:"teltonika-networks",children:"Teltonika Networks"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to RUT240, RUT950, RUT955, RUTX09, RUTX11, RUTX12, RUTX14, RUTXR1, RUT360"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Newer firmware versions of the Teltonika Networks' industrial cellular routers should automatically detect the emnify APN.\nIf the APN isn't correctly detected, you can configure it in three ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["With the ",(0,i.jsx)(n.a,{href:"#teltonika-webui",children:"Teltonika WebUI"})," over Wi-Fi or Ethernet"]}),"\n",(0,i.jsxs)(n.li,{children:["Through the ",(0,i.jsx)(n.a,{href:"#sms-console-teltonika",children:"emnify Portal SMS console"})," (recommended)"]}),"\n",(0,i.jsxs)(n.li,{children:["Via SMS through the ",(0,i.jsx)(n.a,{href:"#rest-api-teltonika",children:"emnify REST API"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"teltonika-webui",children:"Teltonika WebUI"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Connect your PC through the router's Wi-Fi using the credentials provided on the device."}),"\n",(0,i.jsxs)(n.li,{children:["Open the Teltonika WebUI ",(0,i.jsx)(n.code,{children:"http://192.168.1.1"})," and go to the ",(0,i.jsx)(n.strong,{children:"Mobile Configuration"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Type in ",(0,i.jsx)(n.code,{children:"em"})," in ",(0,i.jsx)(n.strong,{children:"APN"}),".\nMake sure to select the ",(0,i.jsx)(n.strong,{children:"Auto"})," checkbox."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["There's no ",(0,i.jsx)(n.strong,{children:"PIN number"})," configured on the SIM."]})}),"\n",(0,i.jsx)(n.h3,{id:"sms-console-teltonika",children:"emnify Portal SMS console"}),"\n",(0,i.jsx)(r.ZP,{name:"Teltonika Networks",deviceType:"router"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cellular apn=em\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://wiki.teltonika-networks.com/view/SMS_Commands",children:"Teltonika's SMS Commands"})," reference for a comprehensive list of SMS commands, syntax, and usage."]})}),"\n",(0,i.jsx)(n.h3,{id:"rest-api-teltonika",children:"emnify REST API"}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{ \n  "source_address": "123456789",\n  "payload": "cellular apn=em" \n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"123456789"})})," with your chosen source address."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1644:(e,n,t)=>{t.d(n,{ZP:()=>s});var i=t(5893),o=t(1151);function r(e){const n={a:"a",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["First, turn on your ",e.deviceType," and ensure the device and emnify SIM card are activated.\nIf you still need to do this, follow the ",(0,i.jsx)(n.a,{href:"/quickstart/create-device",children:"Create device"})," guide."]}),"\n",(0,i.jsx)(n.p,{children:"Then, follow these steps to set up the APN:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to your ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Connected Devices"})," and find your ",e.name," ",e.deviceType,".\nTurning on the ",e.deviceType," for the first time after installing the SIM shows the status as ",(0,i.jsx)(n.strong,{children:"Attached"}),".\nThe device can receive SMS at this point but only establish a data session if the APN is set up or detected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/portal/sms#open-the-sms-console",children:"Open the SMS console"})," and send the ",e.alternateCommandPrompt?e.alternateCommandPrompt:"following command:"]}),"\n"]})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},3618:(e,n,t)=>{t.d(n,{ZP:()=>s});var i=t(5893),o=t(1151);function r(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"SMS calls in the emnify REST API"})," to automate the device configuration."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/getting-started.html",children:"Getting started"})," guide in the emnify System Documentation to learn how to authenticate and use the API."]})}),"\n",(0,i.jsxs)(n.p,{children:["To send SMS to a device, use ",(0,i.jsxs)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointSmsByIdPost",children:[(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:"/api/v1/endpoint/{endpoint_id}/sms"})]})," with the following request body:"]})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);