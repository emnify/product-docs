"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[4887],{9665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(5893),s=n(1151);const r={last_update:{date:"01-03-2024"},slug:"/services/factory-test-mode"},o="Factory test mode",a={id:"services/connectivity/factory-test-mode",title:"Factory test mode",description:"The factory test mode (FTM) feature allows you to test SIM cards before deploying to a production environment.",source:"@site/docs/services/connectivity/factory-test-mode.md",sourceDirName:"services/connectivity",slug:"/services/factory-test-mode",permalink:"/pr-preview/pr-262/services/factory-test-mode",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:170424e4,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{last_update:{date:"01-03-2024"},slug:"/services/factory-test-mode"},sidebar:"mainDocsSidebar",previous:{title:"SIM lifecycle management",permalink:"/pr-preview/pr-262/services/sim-lifecycle-management"},next:{title:"SMS",permalink:"/pr-preview/pr-262/services/sms"}},c={},l=[{value:"Deploy devices from FTM",id:"deploy-devices-from-ftm",level:2},{value:"Available networks",id:"available-networks",level:2},{value:"Limits",id:"limits",level:2},{value:"Activate FTM in the emnify Portal",id:"activate-ftm-in-the-emnify-portal",level:2},{value:"Patch a SIM to Factory Test with the emnify REST API",id:"patch-a-sim-to-factory-test-with-the-emnify-rest-api",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"factory-test-mode",children:"Factory test mode"}),"\n",(0,i.jsx)(t.p,{children:"The factory test mode (FTM) feature allows you to test SIM cards before deploying to a production environment.\nYou can use SIMs in FTM up to defined data and SMS thresholds without incurring charges."}),"\n",(0,i.jsx)(t.p,{children:"In this state, you won't be charged the monthly SIM hosting fees, and the data consumed won't affect the pooled allowance."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["By default, FTM is only available for customers with the ",(0,i.jsx)(t.strong,{children:"Plus Package"})," or ",(0,i.jsx)(t.strong,{children:"Pro Package"}),".\nIf you're on a different package but interested in FTM, contact ",(0,i.jsx)(t.a,{href:"/support",children:"emnify support"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"deploy-devices-from-ftm",children:"Deploy devices from FTM"}),"\n",(0,i.jsx)(t.p,{children:"A popular use case for FTM is automating deployments.\nYou can store devices with the assigned SIMs in FTM free of charge.\nThen, the SIM is automatically activated once your customers use the quotas. There's no additional configuration required."}),"\n",(0,i.jsx)(t.h2,{id:"available-networks",children:"Available networks"}),"\n",(0,i.jsx)(t.p,{children:"You can use FTM for networks in the assigned coverage policy.\nPlease be sure that the networks where you are planning to use this feature are part of an activated coverage area."}),"\n",(0,i.jsx)(t.h2,{id:"limits",children:"Limits"}),"\n",(0,i.jsxs)(t.p,{children:["The default thresholds for SIMs in FTM are 100 KB of data and 10 SMS (either in its totality or a combination of SMS MT or MO).\nThese limits can be customized per organization.\nOnce either threshold is crossed, the SIM automatically moves to the ",(0,i.jsx)(t.strong,{children:"Activated"})," state and accrues charges."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The tenth SMS executes the SIM activation."})}),"\n",(0,i.jsx)(t.p,{children:"SIMs in FTM are also activated in any of the following scenarios to ensure reliability and coverage:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"SIM cards that never reached any threshold but are in FTM longer than the designated test period.\nThe default test period for organizations created after July 23, 2023, is 180 days."}),"\n",(0,i.jsxs)(t.li,{children:["If the device's status is altered while the SIM is in ",(0,i.jsx)(t.strong,{children:"Factory test"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Running a reset connectivity."}),"\n",(0,i.jsx)(t.li,{children:"Canceling or switching to a different package that doesn't support FTM."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"activate-ftm-in-the-emnify-portal",children:"Activate FTM in the emnify Portal"}),"\n",(0,i.jsx)(t.p,{children:"You can enable FTM while registering SIMs in the emnify Portal."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Follow the steps to ",(0,i.jsx)(t.a,{href:"/quickstart/register-sims#register-sims-in-the-emnify-portal",children:"register a new SIM or SIM batch"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["After your SIM is registered, select ",(0,i.jsx)(t.strong,{children:"Create device"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["In ",(0,i.jsx)(t.strong,{children:"Create a new device"}),", fill in your device details.\nUnder ",(0,i.jsx)(t.strong,{children:"Select Device Mode"}),", choose ",(0,i.jsx)(t.strong,{children:"Factory Test"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Review, then click ",(0,i.jsx)(t.strong,{children:"Create device"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/apn-configuration",children:"Configure the APN"}),", then click ",(0,i.jsx)(t.strong,{children:"APN is set up"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Once created, your device should be ready to go online if configured with the correct APN, and data roaming is enabled."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"You can follow the same steps while registering a SIM batch."})}),"\n",(0,i.jsx)(t.h2,{id:"patch-a-sim-to-factory-test-with-the-emnify-rest-api",children:"Patch a SIM to Factory Test with the emnify REST API"}),"\n",(0,i.jsxs)(t.p,{children:["For more information about patching SIM cards via the REST API, see ",(0,i.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/factory-test-mode.html",children:"Factory Test Mode on the emnify System Documentation"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(7294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);