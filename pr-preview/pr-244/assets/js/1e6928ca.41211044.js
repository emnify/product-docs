"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[846],{6183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(5893),s=t(1151);const o={description:"Tips and solutions for resolving why a device isn't performing as expected",last_update:{date:"07-20-2023"},slug:"/portal/troubleshooting"},r="Device troubleshooting",l={id:"portal/sims-and-devices/troubleshooting",title:"Device troubleshooting",description:"Tips and solutions for resolving why a device isn't performing as expected",source:"@site/docs/portal/sims-and-devices/troubleshooting.mdx",sourceDirName:"portal/sims-and-devices",slug:"/portal/troubleshooting",permalink:"/pr-preview/pr-244/portal/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/portal/sims-and-devices/troubleshooting.mdx",tags:[],version:"current",lastUpdatedAt:1689811200,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{description:"Tips and solutions for resolving why a device isn't performing as expected",last_update:{date:"07-20-2023"},slug:"/portal/troubleshooting"},sidebar:"mainDocsSidebar",previous:{title:"Device policies",permalink:"/pr-preview/pr-244/portal/device-policies"},next:{title:"SMS",permalink:"/pr-preview/pr-244/portal/sms"}},c={},d=[{value:"Device connectivity info",id:"device-connectivity-info",level:2},{value:"Usage charts",id:"usage-charts",level:2},{value:"Events",id:"events",level:2},{value:"Event severity",id:"event-severity",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Events indicating normal operation",id:"events-indicating-normal-operation",level:3},{value:"Reset connectivity",id:"reset-connectivity",level:3},{value:"More troubleshooting tips",id:"more-troubleshooting-tips",level:2}];function a(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"device-troubleshooting",children:"Device troubleshooting"}),"\n",(0,i.jsx)(n.p,{children:"The following information provides a starting point for determining why a device isn't performing as expected."}),"\n",(0,i.jsx)(n.h2,{id:"device-connectivity-info",children:"Device connectivity info"}),"\n",(0,i.jsxs)(n.p,{children:["First, determine the device's state either by looking at the device's ",(0,i.jsx)(n.strong,{children:"Details"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"State"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Attached"})}),(0,i.jsxs)(n.td,{children:["If the device has successfully attached to the emnify Core Network in the past, its state is displayed as ",(0,i.jsx)(n.strong,{children:"Attached"})," until the visited network has signaled that the device is inactive/offline. Usually, the visited network informs the emnify Core Network within 1-2 days after a device has gone offline."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Blocked"})}),(0,i.jsxs)(n.td,{children:["Service is suspended either due to exceeded traffic limits or ",(0,i.jsx)(n.a,{href:"/glossary#imei-lock",children:"IMEI lock"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Offline"})}),(0,i.jsx)(n.td,{children:"A network connection isn't possible. There are many reasons for this state."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Online"})}),(0,i.jsx)(n.td,{children:"A network connection is active, and the device can use data and SMS per the device policies."})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The most efficient way to see if your device has connectivity is to look for the ",(0,i.jsx)(n.strong,{children:"PDP Context active 00:00:00"})," display that refreshes every 20 seconds in the ",(0,i.jsx)(n.strong,{children:"Connection"})," section of ",(0,i.jsx)(n.strong,{children:"Device Details"}),".\nIf it's present and the active time (shown in hh:mm",":ss"," format) increases with each refresh, then you know your device is connected to the network."]})}),"\n",(0,i.jsxs)(o,{className:"custom-details-troubleshooting",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)("summary",{children:"What's a PDP context?"}),"\nA Packet Data Protocol (PDP) context is a data structure that enables a device to transmit and receive data using Internet Protocol (IP).\nThis data structure includes a device's IP address, IMSI, and additional parameters to properly route data to and from the network."]}),(0,i.jsxs)(n.p,{children:["If a device's most recent PDP context event is ",(0,i.jsx)(n.strong,{children:"Create PDP Context"}),", the device should be ",(0,i.jsx)(n.strong,{children:"online"})," with an active network connection."]}),(0,i.jsxs)(n.p,{children:["The device is offline if a device's most recent PDP context event is ",(0,i.jsx)(n.strong,{children:"Delete PDP Context"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"usage-charts",children:"Usage charts"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Usage"})," column under ",(0,i.jsx)(n.strong,{children:"Device Details"})," displays a chart if any usage is present for the given time period, which defaults to the ",(0,i.jsx)(n.strong,{children:"Last Hour"}),".\nThe absence of data usage or spikes in data usage could indicate abnormal behavior."]}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(n.p,{children:"The event log often contains information that can be used to determine what went wrong."}),"\n",(0,i.jsxs)(o,{className:"custom-details-troubleshooting",children:[(0,i.jsx)("summary",{children:"Where to find a device's events"}),(0,i.jsx)("img",{src:t(5492).Z,style:{width:655},alt:""}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": events are always shown in reverse chronological order, with the newest ones at the top."]})]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Don't rely solely on the ",(0,i.jsx)(n.strong,{children:"Event Type"})," to determine what event was logged.\nFor instance, ",(0,i.jsx)(n.strong,{children:"Create PDP Context"})," by itself ",(0,i.jsx)(n.em,{children:"doesn't"})," mean that a PDP context was successfully created."]})}),"\n",(0,i.jsx)(n.h3,{id:"event-severity",children:"Event severity"}),"\n",(0,i.jsxs)(n.p,{children:["When used for troubleshooting, an event's severity is more important than the event type.\nFor instance, if a network connection can't be established because of an IMEI lock, the event type may show as ",(0,i.jsx)(n.strong,{children:"Create PDP Context"})," with a green play button icon in front of it.\nAlso, since its ",(0,i.jsx)(n.strong,{children:"Event Source"})," is only shown if you expand its details, you won't see at first glance that this is a ",(0,i.jsx)(n.strong,{children:"Policy Control"})," issue.\nThe only hint that something might have gone wrong is its severity, ",(0,i.jsx)(n.strong,{children:"Warning"}),".\nIn contrast, a successful ",(0,i.jsx)(n.strong,{children:"Create PDP Context"})," event has an ",(0,i.jsx)(n.strong,{children:"Event Source"})," of ",(0,i.jsx)(n.strong,{children:"Network"})," and a completely different ",(0,i.jsx)(n.strong,{children:"Description"}),"."]}),"\n",(0,i.jsxs)(o,{className:"custom-details-example",children:[(0,i.jsx)("summary",{children:"Compare a successful Create PDP Context event with one that failed"}),(0,i.jsx)("img",{src:t(5047).Z,style:{width:550},alt:""})]}),"\n",(0,i.jsx)(n.h3,{id:"filtering",children:"Filtering"}),"\n",(0,i.jsxs)(n.p,{children:["The first column, ",(0,i.jsx)(n.strong,{children:"Severity"}),", provides the following filters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"All"})," (default)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Info"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Warning"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Critical"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For instance, if you filter for the ",(0,i.jsx)(n.strong,{children:"Warning"})," severity and see any of the following events, it's a good indication of a failure that's preventing network connectivity."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Create PDP Context"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Endpoint blocked"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Endpoint data traffic limit warning"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"User authentication failed"})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["For more detailed information about events, see ",(0,i.jsx)(n.a,{href:"/system-events",children:(0,i.jsx)(n.strong,{children:"emnify system events"})}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"events-indicating-normal-operation",children:"Events indicating normal operation"}),"\n",(0,i.jsx)(n.p,{children:"The expected series of events for a fully functional, connected device would look similar to this:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Info: Endpoint enabled"}),"\n",(0,i.jsx)(n.li,{children:"Info: SIM activation"}),"\n",(0,i.jsx)(n.li,{children:"Info: Update GPRS location"}),"\n",(0,i.jsx)(n.li,{children:"Info: Create PDP Context"}),"\n",(0,i.jsx)(n.li,{children:"Info: Update location"}),"\n",(0,i.jsx)(n.li,{children:"Info: Create PDP Context"}),"\n",(0,i.jsx)(n.li,{children:"Info: Delete PDP Context"}),"\n",(0,i.jsx)(n.li,{children:"Info: Create PDP Context"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"reset-connectivity",children:"Reset connectivity"}),"\n",(0,i.jsx)(n.p,{children:"If you reset connectivity for a device, the expected series of events would be:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Info: SIM suspension"}),"\n",(0,i.jsx)(n.li,{children:"Info: Delete PDP Context"}),"\n",(0,i.jsx)(n.li,{children:"Info: Endpoint disabled"}),"\n",(0,i.jsx)(n.li,{children:"Info: Endpoint enabled"}),"\n",(0,i.jsx)(n.li,{children:"Info: SIM activation"}),"\n",(0,i.jsx)(n.li,{children:"Info: Update location"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If the connection (PDP context) is never created and the connection remains ",(0,i.jsx)(n.strong,{children:"Attached"}),", try rebooting the device.\nIn some cases, a reboot is needed to establish the data connection.\nIf so, these additional events should be logged, with ",(0,i.jsx)(n.strong,{children:"Create PDP Context"})," being the crucial one."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Info: Update GPRS location"}),"\n",(0,i.jsx)(n.li,{children:"Info: Create PDP Context"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"more-troubleshooting-tips",children:"More troubleshooting tips"}),"\n",(0,i.jsxs)(n.p,{children:["Several factors can cause data connectivity problems.\nFor more detailed troubleshooting tips, see ",(0,i.jsx)(n.a,{href:"/quickstart/troubleshooting",children:"Troubleshooting"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},5492:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/portal-device-details-events-0bf5cc580afc75b455d2b9d852d40586.png"},5047:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/portal-events-create-pdp-context-success-and-failure-fa453d5ba46359ba6736894eaf501356.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);