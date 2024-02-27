"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3075],{9270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(5893),s=n(1151);const o={description:"Tips and solutions for resolving common issues when setting up your emnify account",last_update:{date:"08-24-2023"},slug:"/quickstart/troubleshooting"},r="Troubleshooting",a={id:"quickstart/troubleshooting",title:"Troubleshooting",description:"Tips and solutions for resolving common issues when setting up your emnify account",source:"@site/docs/quickstart/troubleshooting.md",sourceDirName:"quickstart",slug:"/quickstart/troubleshooting",permalink:"/pr-preview/pr-296/quickstart/troubleshooting",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1692835200,formattedLastUpdatedAt:"Aug 24, 2023",frontMatter:{description:"Tips and solutions for resolving common issues when setting up your emnify account",last_update:{date:"08-24-2023"},slug:"/quickstart/troubleshooting"},sidebar:"mainDocsSidebar",previous:{title:"Industrial routers",permalink:"/pr-preview/pr-296/apn-configuration/industrial-routers"},next:{title:"emnify Portal",permalink:"/pr-preview/pr-296/portal"}},c={},d=[{value:"The device is offline",id:"the-device-is-offline",level:2},{value:"The device shows attached but doesn&#39;t transmit data",id:"the-device-shows-attached-but-doesnt-transmit-data",level:2},{value:"The device shows online but doesn&#39;t transmit data",id:"the-device-shows-online-but-doesnt-transmit-data",level:2},{value:"Other general troubleshooting tips",id:"other-general-troubleshooting-tips",level:2},{value:"Contact the support team",id:"contact-the-support-team",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsxs)(t.p,{children:["When you experience issues while connecting your device for the first time, there are several common patterns that can be identified by looking at ",(0,i.jsx)(t.a,{href:"https://portal.emnify.com/connected-devices",children:(0,i.jsx)(t.strong,{children:"Connected Devices"})})," in the Portal.\nIf you don't have any entry in the connected devices, go back to ",(0,i.jsx)(t.a,{href:"/quickstart/create-device",children:"Create a device"})," and assign the SIM."]}),"\n",(0,i.jsxs)(t.p,{children:["The device show different icons that indicate the status\n(",(0,i.jsx)(t.strong,{children:"Offline"}),", ",(0,i.jsx)(t.strong,{children:"Attached"}),", ",(0,i.jsx)(t.strong,{children:"Online"}),", ",(0,i.jsx)(t.strong,{children:"Blocked"}),").\nIf no icon is visible, assign a SIM to the device."]}),"\n",(0,i.jsxs)(t.p,{children:["For most troubleshooting, a look at the ",(0,i.jsx)(t.strong,{children:"Events"})," tab of the ",(0,i.jsx)(t.strong,{children:"Device Details"})," is necessary.\nA usual event flow should look like this:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Update Location - the SIM card is (re)authenticating with a different network element.\nIf successful, the device shows as ",(0,i.jsx)(t.strong,{children:"Attached"})," and can already receive SMS."]}),"\n",(0,i.jsx)(t.li,{children:"Update GPRS location - the SIM card has successfully registered for data sessions with a different network element."}),"\n",(0,i.jsxs)(t.li,{children:["Create PDP context - the device has started a data transfer.\nThe device shows ",(0,i.jsx)(t.strong,{children:"Online"})," as long is there is no delete PDP context event."]}),"\n",(0,i.jsxs)(t.li,{children:["Delete PDP context - the device has ended a data transfer.\nThe event details also show the data transmitted and the ",(0,i.jsx)(t.a,{href:"/glossary#connectivity-status",children:"connectivity status"})," is set to ",(0,i.jsx)(t.strong,{children:"Offline"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"There can be many update locations before or in between the data session."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["If you're deploying many devices (for example, 1,000 or more) on the emnify network, you must ensure that these devices follow best practices.\nFor more information, see ",(0,i.jsx)(t.a,{href:"https://support.emnify.com/hc/en-us/articles/4402697173010-Good-practices-and-guidelines-for-devices-deployed-on-the-EMnify-network",children:"Guidelines for devices deployed on the emnify network"})," on the emnify Knowledge Base."]})}),"\n",(0,i.jsx)(t.h2,{id:"the-device-is-offline",children:"The device is offline"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Details"})," and ensure that the device is enabled"]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Details"}),", then navigate to the ",(0,i.jsx)(t.strong,{children:"Events"})," tab.\nValidate if there is any location update event created and rejected.\nThe reasoning should indicate the resolution to the problem."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If there is no location update event:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Ensure the device is powered on and searches for a network"}),"\n",(0,i.jsx)(t.li,{children:"Ensure that the device is in reception of any supported network"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"the-device-shows-attached-but-doesnt-transmit-data",children:"The device shows attached but doesn't transmit data"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Verify that the APN is correctly set to ",(0,i.jsx)(t.em,{children:"em"})," or use ",(0,i.jsx)(t.em,{children:"emnify"})," instead since some devices don't support two-digit APNs.\nYou can find guides for various devices in ",(0,i.jsx)(t.a,{href:"/apn-configuration",children:"Get a device online"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Ensure that you activate data access and the radio types (that is, 2G, 3G, 4G) if you change policy settings."}),"\n",(0,i.jsx)(t.li,{children:"Make sure mobile data is enabled and that international roaming is allowed."}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Details"}),", then navigate to the ",(0,i.jsx)(t.strong,{children:"Events"})," tab.\nValidate if there is any PDP create event and rejected.\nThe reason and resolution is given in the event description."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Attached"})," status doesn't necessarily mean that the device is powered on.\nIf the device first attaches to a network and then powers off - there is no information towards the emnify network that would allow to detect this."]}),"\n",(0,i.jsx)(t.h2,{id:"the-device-shows-online-but-doesnt-transmit-data",children:"The device shows online but doesn't transmit data"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Ensure mobile data is enabled, as well as international roaming is allowed."}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Details"}),", then navigate to the ",(0,i.jsx)(t.strong,{children:"Events"})," tab to validate if any ",(0,i.jsx)(t.code,{children:"Warn"})," or ",(0,i.jsx)(t.code,{children:"Error"})," is detected."]}),"\n",(0,i.jsxs)(t.li,{children:["For NB-IoT and LTE-M this behavior can happen when the device automatically connects to a network - rather specify the network that shall be used with using the ",(0,i.jsx)(t.code,{children:"AT+COPS"}),".\nAlso, verify that the network is on emnify\u2019s ",(0,i.jsx)(t.a,{href:"https://www.emnify.com/nb-iot-coverage",children:"NB-IoT coverage"})," or ",(0,i.jsx)(t.a,{href:"https://www.emnify.com/lte-m-coverage",children:"LTE-M network coverage"})," list."]}),"\n",(0,i.jsxs)(t.li,{children:["Ensure that your data destination and DNS server (default emnify uses Google's ",(0,i.jsx)(t.code,{children:"8.8.8.8"})," DNS server if your device doesn't specify a DNS server) isn't blocked for the device."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"other-general-troubleshooting-tips",children:"Other general troubleshooting tips"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"After configuration changes, make sure they're correctly applied on the device (for example, with a reboot)."}),"\n",(0,i.jsxs)(t.li,{children:["Clicking the reset connectivity icon on ",(0,i.jsx)(t.a,{href:"https://portal.emnify.com/connected-devices",children:(0,i.jsx)(t.strong,{children:"Connected Devices"})})," can also reset the network state and allow your device to freshly reattach."]}),"\n",(0,i.jsx)(t.li,{children:"The issue may only be present with one network or in the specific location (for example, due to high interference for this network).\nYou can use the network blocklist to block the network and force the change to a different network."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"contact-the-support-team",children:"Contact the support team"}),"\n",(0,i.jsxs)(t.p,{children:["If you've tried everything and still can't find a solution, you can contact the ",(0,i.jsx)(t.a,{href:"/support",children:"emnify support team"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Be sure to include the following information in your request:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Your company name"}),"\n",(0,i.jsx)(t.li,{children:"The ICCIDs of your SIMs in question"}),"\n",(0,i.jsx)(t.li,{children:"The type of device you're using"}),"\n",(0,i.jsx)(t.li,{children:"A short description of the issue"}),"\n",(0,i.jsx)(t.li,{children:"A phone number where we can reach you if required"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(7294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);