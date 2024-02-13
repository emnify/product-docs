"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3395],{2861:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=i(5893),r=i(1151);const s={description:"Manually configure the emnify APN for an Android-powered device",last_update:{date:"08-09-2023"},sidebar_label:"Android",slug:"/apn-configuration/android"},o="Configure the APN on Android-powered devices",d={id:"quickstart/apn-configuration/android",title:"Configure the APN on Android-powered devices",description:"Manually configure the emnify APN for an Android-powered device",source:"@site/docs/quickstart/apn-configuration/android.md",sourceDirName:"quickstart/apn-configuration",slug:"/apn-configuration/android",permalink:"/pr-preview/pr-282/apn-configuration/android",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1691539200,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{description:"Manually configure the emnify APN for an Android-powered device",last_update:{date:"08-09-2023"},sidebar_label:"Android",slug:"/apn-configuration/android"},sidebar:"mainDocsSidebar",previous:{title:"Get a device online",permalink:"/pr-preview/pr-282/apn-configuration"},next:{title:"iOS",permalink:"/pr-preview/pr-282/apn-configuration/ios"}},c={},l=[{value:"Troubleshooting",id:"troubleshooting",level:2}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configure-the-apn-on-android-powered-devices",children:"Configure the APN on Android-powered devices"}),"\n",(0,t.jsx)(n.p,{children:"While emnify's network is engineered to support IoT/M2M data traffic, it's possible to use emnify SIMs in a consumer device like an Android mobile phone to verify if connectivity is available.\nYou can also use emnify SIMs in Android-powered IoT devices, such as point of sale (POS) hardware."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Before configuring the APN on a mobile phone, make sure your device is unlocked (that is, not locked or limited to a specific operator)."})}),"\n",(0,t.jsx)(n.p,{children:"It's essential to configure the APN settings correctly to ensure seamless connectivity.\nHere's how you can set up your Android-powered device with an emnify SIM:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Insert the emnify SIM"}),(0,t.jsx)(n.br,{}),"\n","Ensure your phone is unlocked and insert the emnify SIM card into the SIM slot."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Manage network settings"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to your device's main ",(0,t.jsx)(n.strong,{children:"Settings"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Proceed to ",(0,t.jsx)(n.strong,{children:"Connections"}),"\xa0",(0,t.jsx)("span",{"aria-label":"and then",children:">"})," ",(0,t.jsx)(n.strong,{children:"Mobile Networks"}),".\nIn some cases, you might need to select ",(0,t.jsx)(n.strong,{children:"More Networks"})," first."]}),"\n",(0,t.jsxs)(n.li,{children:["Select both the ",(0,t.jsx)(n.strong,{children:"Mobile Data"})," and ",(0,t.jsx)(n.strong,{children:"Data Roaming"})," checkboxes."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Set up the APN"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Access Point Names"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Tap ",(0,t.jsx)(n.strong,{children:"Menu"}),", then either ",(0,t.jsx)(n.strong,{children:"+"})," or ",(0,t.jsx)(n.strong,{children:"New APN"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Enter ",(0,t.jsx)(n.code,{children:"emnify"})," as the name and ",(0,t.jsx)(n.code,{children:"em"})," as the APN.\nLeave other fields blank or ",(0,t.jsx)(n.strong,{children:"Not set"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Save these settings.\nIf there are multiple APNs, select the one you've created named ",(0,t.jsx)(n.code,{children:"emnify"})," as the active APN."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Restart and verify your connection"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Restart your device."}),"\n",(0,t.jsx)(n.li,{children:"Once the device is back on, look for signal bars indicating a network connection."}),"\n",(0,t.jsxs)(n.li,{children:["To confirm a successful connection, open a web browser and visit ",(0,t.jsx)(n.code,{children:"https://www.emnify.com"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Additionally, you can monitor the connectivity in the ",(0,t.jsx)(n.a,{href:"https://portal.emnify.com/",children:"emnify Portal"}),".\nIf your APN settings configuration was successful, your device's status should show as ",(0,t.jsx)(n.strong,{children:"Online"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.p,{children:"The configuration may disappear on your device, even if you set up the APN correctly."}),"\n",(0,t.jsxs)(n.p,{children:["Android-powered devices match an APN to a specific ",(0,t.jsx)(n.a,{href:"/glossary#imsi",children:"International Mobile Subscriber Identity (IMSI)"}),".\nemnify SIM cards can have up to six IMSIs, and different IMSIs can be selected depending on the country where you use the SIMs."]}),"\n",(0,t.jsxs)(n.p,{children:["To maintain the correct APN settings, match the APN to the Mobile Country Code (",(0,t.jsx)(n.strong,{children:"MCC"}),") and Mobile Network Code (",(0,t.jsx)(n.strong,{children:"MNC"}),") of the five available IMSIs an emnify SIM can select."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"APN"}),(0,t.jsx)(n.th,{children:"MCC"}),(0,t.jsx)(n.th,{children:"MNC"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"em"}),(0,t.jsx)(n.td,{children:"295"}),(0,t.jsx)(n.td,{children:"05"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"em"}),(0,t.jsx)(n.td,{children:"295"}),(0,t.jsx)(n.td,{children:"09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"em"}),(0,t.jsx)(n.td,{children:"901"}),(0,t.jsx)(n.td,{children:"43"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"em"}),(0,t.jsx)(n.td,{children:"206"}),(0,t.jsx)(n.td,{children:"01"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"em"}),(0,t.jsx)(n.td,{children:"234"}),(0,t.jsx)(n.td,{children:"50"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"em"}),(0,t.jsx)(n.td,{children:"724"}),(0,t.jsx)(n.td,{children:"51"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var t=i(7294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);