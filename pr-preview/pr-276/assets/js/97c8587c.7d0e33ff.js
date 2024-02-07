"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[729],{8787:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>t});var o=n(5893),r=n(1151);const s={description:"Configure the emnify APN on Quectel, u-blox, and several other cellular module vendors",last_update:{date:"08-09-2023"},sidebar_label:"Cellular modules",slug:"/apn-configuration/cellular-modules"},a="Configure the APN on cellular modules",c={id:"quickstart/apn-configuration/cellular-modules",title:"Configure the APN on cellular modules",description:"Configure the emnify APN on Quectel, u-blox, and several other cellular module vendors",source:"@site/docs/quickstart/apn-configuration/cellular-modules.md",sourceDirName:"quickstart/apn-configuration",slug:"/apn-configuration/cellular-modules",permalink:"/pr-preview/pr-276/apn-configuration/cellular-modules",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1691539200,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{description:"Configure the emnify APN on Quectel, u-blox, and several other cellular module vendors",last_update:{date:"08-09-2023"},sidebar_label:"Cellular modules",slug:"/apn-configuration/cellular-modules"},sidebar:"mainDocsSidebar",previous:{title:"iOS",permalink:"/pr-preview/pr-276/apn-configuration/ios"},next:{title:"GPS trackers",permalink:"/pr-preview/pr-276/apn-configuration/gps-trackers"}},i={},t=[{value:"Quectel cellular IoT modules",id:"quectel-cellular-iot-modules",level:2},{value:"u-blox cellular IoT modules",id:"u-blox-cellular-iot-modules",level:2},{value:"General cellular IoT modules",id:"general-cellular-iot-modules",level:2}];function d(e){const l={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.h1,{id:"configure-the-apn-on-cellular-modules",children:"Configure the APN on cellular modules"}),"\n",(0,o.jsx)(l.admonition,{type:"note",children:(0,o.jsxs)(l.p,{children:["See ",(0,o.jsx)(l.a,{href:"#general-cellular-iot-modules",children:"General cellular IoT modules"})," for Telit, Sierra Wireless, Cinterion, Gemalto, Thales, SIMCom, or Sequans."]})}),"\n",(0,o.jsx)(l.h2,{id:"quectel-cellular-iot-modules",children:"Quectel cellular IoT modules"}),"\n",(0,o.jsxs)(l.blockquote,{children:["\n",(0,o.jsx)(l.p,{children:"Applies to all Quectel modules: BG95, BG96, EG25, EG91, EG95, EC21, EC25, M65, M66, M95, MC60, BG77, BG600L"}),"\n"]}),"\n",(0,o.jsxs)(l.p,{children:["With Quectel modules, you can set the APN with the 3GPP standard command ",(0,o.jsx)(l.code,{children:"AT+CGDCONT"}),":"]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-shell",children:'AT+CGDCONT=1,"IP","em",,\n'})}),"\n",(0,o.jsxs)(l.p,{children:["Quectel also utilizes a vendor-specific command ",(0,o.jsx)(l.code,{children:"AT+QICSGP"}),":"]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-shell",children:'AT+QICSGP=1,1,"em","","",1\n'})}),"\n",(0,o.jsxs)(l.p,{children:["According to ",(0,o.jsx)(l.a,{href:"https://www.quectel.com/faqs/12-8-what-is-the-difference-between-cgdcont-and-qicsgp/",children:"Quectel"}),", use the command ",(0,o.jsx)(l.code,{children:"AT+QICSGP"})," when the internal TCP/UDP stack is needed.\nIt also allows you to configure which bearer (CSD or GPRS) is used."]}),"\n",(0,o.jsxs)(l.p,{children:["To manage roaming, Quectel also introduced the ",(0,o.jsx)(l.code,{children:"AT+QCFG"})," command.\nThe suggested setting is:"]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-shell",children:'AT+QCFG="roamservice",2,1 # roaming enabled\n'})}),"\n",(0,o.jsx)(l.p,{children:"Check your Quectel module AT command guide for more information."}),"\n",(0,o.jsx)(l.h2,{id:"u-blox-cellular-iot-modules",children:"u-blox cellular IoT modules"}),"\n",(0,o.jsxs)(l.p,{children:["u-blox supports the standard 3GPP command to set APNs via ",(0,o.jsx)(l.code,{children:"AT+CGDCONT"}),":"]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-shell",children:'AT+CGDCONT=1,"IP","em",,\n'})}),"\n",(0,o.jsx)(l.p,{children:"u-blox also supports a vendor-specific command to configure the APN for the initial EPS bearer:"}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-shell",children:'AT+UCGDFLT=1,"IP","em"\n'})}),"\n",(0,o.jsxs)(l.p,{children:["For roaming configuration, u-blox modules utilize a vendor-specific ",(0,o.jsx)(l.code,{children:"AT+UDCONF"})," command.\nThis command enables automatic search if the device can't attach to a specific network."]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-shell",children:"AT+UDCONF=20,2\n"})}),"\n",(0,o.jsx)(l.p,{children:"Check your u-blox module AT command guide for more information."}),"\n",(0,o.jsx)(l.h2,{id:"general-cellular-iot-modules",children:"General cellular IoT modules"}),"\n",(0,o.jsxs)(l.blockquote,{children:["\n",(0,o.jsx)(l.p,{children:"Applies to the following cellular module vendors: Fibocom, Telit, Sierra Wireless, SIMCom, Cinterion, Gemalto, Thales, Sequans"}),"\n"]}),"\n",(0,o.jsx)(l.p,{children:"The commands for configuring the APN settings are 3GPP standardized, and all major cellular module manufacturers support the commands."}),"\n",(0,o.jsxs)(l.p,{children:["You must use the ",(0,o.jsx)(l.code,{children:"AT+CGDCONT"})," command to set the APN:"]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-shell",children:'AT+CGDCONT=1,"IP","em",,\n'})}),"\n",(0,o.jsxs)(l.p,{children:["Check your AT command guide for further information, or read ",(0,o.jsx)(l.a,{href:"https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1515",children:"3GPP Technical Specification 27.007"}),"."]})]})}function u(e={}){const{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,o.jsx)(l,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,l,n)=>{n.d(l,{Z:()=>c,a:()=>a});var o=n(7294);const r={},s=o.createContext(r);function a(e){const l=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:l},e.children)}}}]);