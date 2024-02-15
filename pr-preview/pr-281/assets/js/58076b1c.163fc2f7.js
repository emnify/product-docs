"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3188],{7557:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=s(5893),n=s(1151);const r={description:"How to block operators on specific devices using the emnify Portal",last_update:{date:"01-31-2024"},slug:"/how-tos/block-operators"},i="Block operators on specific devices",l={id:"how-tos/block-operators",title:"Block operators on specific devices",description:"How to block operators on specific devices using the emnify Portal",source:"@site/docs/how-tos/block-operators.mdx",sourceDirName:"how-tos",slug:"/how-tos/block-operators",permalink:"/pr-preview/pr-281/how-tos/block-operators",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1706659200,formattedLastUpdatedAt:"Jan 31, 2024",frontMatter:{description:"How to block operators on specific devices using the emnify Portal",last_update:{date:"01-31-2024"},slug:"/how-tos/block-operators"},sidebar:"mainDocsSidebar",previous:{title:"Add IP address spaces",permalink:"/pr-preview/pr-281/how-tos/add-ip-address-spaces"},next:{title:"Create a new service policy",permalink:"/pr-preview/pr-281/how-tos/create-service-policies"}},a={},c=[{value:"Individual device",id:"individual-device",level:2},{value:"Block an operator",id:"block-an-operator",level:3},{value:"Remove an operator from the blocklist",id:"remove-an-operator-from-the-blocklist",level:3},{value:"Multiple devices in bulk",id:"multiple-devices-in-bulk",level:2},{value:"Block operators with the emnify REST API",id:"block-operators-with-the-emnify-rest-api",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"block-operators-on-specific-devices",children:"Block operators on specific devices"}),"\n",(0,o.jsx)(t.p,{children:"emnify's mobile core network manages the network selection from the network side in conjunction with the SIM settings.\nIt has a global view of the available radio networks, their supported features, and live network status.\nThis view helps temporarily or permanently steer SIMs away from 'low signal quality' networks and to the networks with the strongest signal."}),"\n",(0,o.jsx)(t.p,{children:"The manual carrier switching can be done in two ways:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Select the preferred operator in the device's menu."}),"\n",(0,o.jsx)(t.li,{children:"Block other operators using the emnify Portal or emnify REST API."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Adding a network to the ",(0,o.jsx)(t.strong,{children:"Blocked Operators"})," list doesn't prevent your devices from trying to connect to those networks.\nYou still see the attempts in the ",(0,o.jsx)(t.strong,{children:"Events"})," tab, but emnify's mobile core rejects any connection attempt.\nYou should only use this feature to solve technical issues associated with specific operators."]})}),"\n",(0,o.jsx)(t.h2,{id:"individual-device",children:"Individual device"}),"\n",(0,o.jsx)(t.h3,{id:"block-an-operator",children:"Block an operator"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://portal.emnify.com/sign",children:"Log in to your emnify account"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Navigate to your ",(0,o.jsx)(t.a,{href:"https://portal.emnify.com/connected-devices",children:(0,o.jsx)(t.strong,{children:"Connected Devices"})}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Find the device where you wish to block an operator and click ",(0,o.jsx)(t.strong,{children:"Details"}),"."]}),"\n"]}),"\n",(0,o.jsx)("img",{src:s(6497).Z,alt:""}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsxs)(t.li,{children:["Locate the ",(0,o.jsx)(t.strong,{children:"Blocked Operators"})," section and click ",(0,o.jsx)(t.strong,{children:"Edit"}),"."]}),"\n"]}),"\n",(0,o.jsx)("img",{src:s(4093).Z,alt:"",style:{height:500}}),"\n",(0,o.jsxs)(t.ol,{start:"5",children:["\n",(0,o.jsxs)(t.li,{children:["Select the operator you want to block.\nThe following example blocks two operators, ",(0,o.jsx)(t.strong,{children:"France - Orange"})," and ",(0,o.jsx)(t.strong,{children:"France - SFR"}),"."]}),"\n"]}),"\n",(0,o.jsx)("img",{src:s(9934).Z,alt:"",style:{width:350}}),"\n",(0,o.jsxs)(t.p,{children:["Changes save automatically and the blocked operators are shown on the ",(0,o.jsx)(t.strong,{children:"Device Details"}),"."]}),"\n",(0,o.jsx)("img",{src:s(7583).Z,alt:"",style:{width:350}}),"\n",(0,o.jsx)(t.h3,{id:"remove-an-operator-from-the-blocklist",children:"Remove an operator from the blocklist"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Navigate to your ",(0,o.jsx)(t.a,{href:"https://portal.emnify.com/connected-devices",children:(0,o.jsx)(t.strong,{children:"Connected Devices"})}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Find the device with the blocked operator and click ",(0,o.jsx)(t.strong,{children:"Details"}),"."]}),"\n"]}),"\n",(0,o.jsx)("img",{src:s(6497).Z,alt:""}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsxs)(t.li,{children:["Locate the ",(0,o.jsx)(t.strong,{children:"Blocked Operators"})," section and click ",(0,o.jsx)(t.strong,{children:"Edit"}),"."]}),"\n"]}),"\n",(0,o.jsx)("img",{src:s(1677).Z,alt:"",style:{height:500}}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsxs)(t.li,{children:["Click the ",(0,o.jsx)(t.strong,{children:"X"})," next to the blocked operator you wish to remove.\nThe following example removes the ",(0,o.jsx)(t.strong,{children:"France - Orange"})," operator from the blocklist."]}),"\n"]}),"\n",(0,o.jsx)("img",{src:s(1261).Z,alt:"",style:{width:350}}),"\n",(0,o.jsxs)(t.p,{children:["Changes save automatically and the updated blocked operators are shown on the ",(0,o.jsx)(t.strong,{children:"Device Details"}),"."]}),"\n",(0,o.jsx)("img",{src:s(388).Z,alt:"",style:{width:350}}),"\n",(0,o.jsx)(t.h2,{id:"multiple-devices-in-bulk",children:"Multiple devices in bulk"}),"\n",(0,o.jsx)(t.p,{children:"It's also possible to select several devices on the Portal and update the blocked operators list for all of them simultaneously."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Navigate to your ",(0,o.jsx)(t.a,{href:"https://portal.emnify.com/connected-devices",children:(0,o.jsx)(t.strong,{children:"Connected Devices"})}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Search for the devices where you wish to block an operator and select the checkbox next to every relevant device."}),"\n"]}),"\n",(0,o.jsx)("img",{src:s(9113).Z,alt:""}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsxs)(t.li,{children:["A new menu at the top of the page provides bulk operations.\nSelect ",(0,o.jsx)(t.strong,{children:"More"})," and then ",(0,o.jsx)(t.strong,{children:"Block Operators"}),"."]}),"\n"]}),"\n",(0,o.jsx)("img",{src:s(7902).Z,alt:""}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsxs)(t.li,{children:["Select the operator you want to block for these devices from the ",(0,o.jsx)(t.strong,{children:"Networks blocklist"})," dropdown menu.\nThe following example searches for the term ",(0,o.jsx)(t.strong,{children:"France"})," and blocks the operator ",(0,o.jsx)(t.strong,{children:"France - Orange"}),"."]}),"\n"]}),"\n",(0,o.jsx)("img",{src:s(6733).Z,alt:"",style:{width:450}}),"\n",(0,o.jsxs)(t.ol,{start:"5",children:["\n",(0,o.jsxs)(t.li,{children:["Review and click ",(0,o.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,o.jsx)("img",{src:s(2594).Z,alt:"",style:{width:450}}),"\n",(0,o.jsx)(t.h2,{id:"block-operators-with-the-emnify-rest-api",children:"Block operators with the emnify REST API"}),"\n",(0,o.jsx)(t.p,{children:"You can also configure blocked operators using the following emnify REST API calls:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointOperatorBlacklistByEndpointIdGet",children:"List Operator Blocklist for an Endpoint"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointOperatorBlacklistByEpIdAndOperatorIdPut",children:"Add an Operator to the Blocklist"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointOperatorBlacklistByEpIdAndOperatorIdDelete",children:"Remove an Operator from the Blocklist"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7902:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/portal-connected-devices-bulk-actions-more-block-operators-340e3b3c3e411fe97615d50d6c5aeba2.png"},6733:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/portal-connected-devices-bulk-actions-networks-blocklist-modal-dropdown-a7baafa53f92fc9ef5ed540f085a8e86.png"},2594:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/portal-connected-devices-bulk-actions-networks-blocklist-modal-save-55a664048dd8889c948b2b47b5be5232.png"},6497:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/portal-connected-devices-details-cc31201a1e3cf7b52ab485855a8049c0.png"},9113:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/portal-connected-devices-select-multiple-devices-139100d1a1e70143b51ca0503c7898e7.png"},9934:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/portal-device-details-general-blocked-operators-networks-blocklist-dropdown-381a818f04c7a358a4026254724a365d.png"},1677:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/portal-device-details-general-status-blocked-operators-edit-f69b5a6e5b74820b4f0b085089658191.png"},4093:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/portal-device-details-general-status-blocked-operators-empty-edit-90b8533a915d2032bf2ae9d76c646866.png"},1261:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/portal-device-details-general-status-blocked-operators-networks-blocklist-remove-abf385009aea6888fdb1d33c74610deb.png"},7583:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/portal-device-details-general-status-blocked-operators-two-ff22a39196814f4d69780362d5f43065.png"},388:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/portal-device-details-general-status-blocked-operators-da711ceba822768791e1ca114c800fbf.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>i});var o=s(7294);const n={},r=o.createContext(n);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);