"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[99],{224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(5893),r=n(1151);const i={description:"Connect to routers to configure the APN",last_update:{date:"02-21-2023"},slug:"/apn-configuration/industrial-routers"},s="Industrial routers",a={id:"quickstart/apn-configuration/industrial-routers",title:"Industrial routers",description:"Connect to routers to configure the APN",source:"@site/docs/quickstart/apn-configuration/industrial-routers.md",sourceDirName:"quickstart/apn-configuration",slug:"/apn-configuration/industrial-routers",permalink:"/pr-preview/pr-266/apn-configuration/industrial-routers",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1676937600,formattedLastUpdatedAt:"Feb 21, 2023",frontMatter:{description:"Connect to routers to configure the APN",last_update:{date:"02-21-2023"},slug:"/apn-configuration/industrial-routers"},sidebar:"mainDocsSidebar",previous:{title:"GPS trackers",permalink:"/pr-preview/pr-266/apn-configuration/gps-trackers"},next:{title:"Troubleshooting",permalink:"/pr-preview/pr-266/quickstart/troubleshooting"}},c={},l=[{value:"APN configuration through the Teltonika Router WebUI",id:"apn-configuration-through-the-teltonika-router-webui",level:2},{value:"Teltonika Networks Router APN configuration via SMS console / API or Zapier",id:"teltonika-networks-router-apn-configuration-via-sms-console--api-or-zapier",level:2}];function u(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"industrial-routers",children:"Industrial routers"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Applies to RUT240, RUT950, RUT955, RUTX09, RUTX11, RUTX12, RUTX14, RUTXR1, RUT360"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Newer firmware version of the Teltonika Routers should automatically detect the emnify APN.\nNevertheless, in case the APN isn't correctly detected, it can be configured with three methods:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"With the Teltonika WebUI over Wi-Fi, Ethernet"}),"\n",(0,o.jsxs)(t.li,{children:["Via the SMS console through the ",(0,o.jsx)(t.a,{href:"https://portal.emnify.com/connected-devices",children:(0,o.jsx)(t.strong,{children:"Connected Devices"})})," page of the emnify Portal"]}),"\n",(0,o.jsx)(t.li,{children:"via the emnify SMS API or Zapier Integration (when automating the configuration)"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"apn-configuration-through-the-teltonika-router-webui",children:"APN configuration through the Teltonika Router WebUI"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Connect your PC through the routers Wi-Fi using the credentials provided on the device."}),"\n",(0,o.jsxs)(t.li,{children:["Open the Teltonika WebUI ",(0,o.jsx)(t.code,{children:"http://192.168.1.1"})," and go to the Mobile configuration."]}),"\n",(0,o.jsxs)(t.li,{children:["Type in ",(0,o.jsx)(t.code,{children:"em"})," in APN.\nThere is no PIN configured on the SIM and no APN username or password required."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"teltonika-networks-router-apn-configuration-via-sms-console--api-or-zapier",children:"Teltonika Networks Router APN configuration via SMS console / API or Zapier"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Make sure that the Router is powered on and the SIM card is inserted and activated."}),"\n",(0,o.jsxs)(t.li,{children:["In the emnify Portal, ensure that the device is shown as ",(0,o.jsx)(t.strong,{children:"Attached"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Send the following SMS command to the device:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"cellular apn=em\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"https://wiki.teltonika-networks.com/view/SMS_Commands",children:"Teltonika's SMS Commands"})," reference for a comprehensive list of SMS commands, syntax, and usage."]})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(7294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);