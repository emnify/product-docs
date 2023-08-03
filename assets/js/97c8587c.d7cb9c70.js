"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[729],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=l,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:l,a[1]=u;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const o={description:"Configure Quectel, u-blox, and several other vendors",slug:"/apn-configuration/cellular-modules"},a="Cellular modules",u={unversionedId:"quickstart/apn-configuration/cellular-modules",id:"quickstart/apn-configuration/cellular-modules",title:"Cellular modules",description:"Configure Quectel, u-blox, and several other vendors",source:"@site/docs/quickstart/apn-configuration/cellular-modules.md",sourceDirName:"quickstart/apn-configuration",slug:"/apn-configuration/cellular-modules",permalink:"/apn-configuration/cellular-modules",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/quickstart/apn-configuration/cellular-modules.md",tags:[],version:"current",lastUpdatedAt:1691077309,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{description:"Configure Quectel, u-blox, and several other vendors",slug:"/apn-configuration/cellular-modules"},sidebar:"mainDocsSidebar",previous:{title:"iOS",permalink:"/apn-configuration/ios"},next:{title:"GPS trackers",permalink:"/apn-configuration/gps-trackers"}},i={},c=[{value:"Quectel cellular IoT modules",id:"quectel-cellular-iot-modules",level:2},{value:"u-blox cellular IoT modules",id:"u-blox-cellular-iot-modules",level:2},{value:"General cellular IoT modules",id:"general-cellular-iot-modules",level:2}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cellular-modules"},"Cellular modules"),(0,l.kt)("p",null,"For Telit, Sierra Wireless, Cinterion/Gemalto/Thales, SIMCom, or Sequans, see ",(0,l.kt)("a",{parentName:"p",href:"#general-cellular-iot-modules"},"General cellular IoT modules"),"."),(0,l.kt)("h2",{id:"quectel-cellular-iot-modules"},"Quectel cellular IoT modules"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Applies to all Quectel modules: BG95, BG96, EG25, EG91, EG95, EC21, EC25, M65, M66, M95, MC60, BG77, BG600L")),(0,l.kt)("p",null,"With Quectel modules the APN can be set with the 3GPP standard command ",(0,l.kt)("inlineCode",{parentName:"p"},"AT+CGDCONT"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'AT+CGDCONT=1,"IP","em",,\n')),(0,l.kt)("p",null,"Quectel also utilizes a vendor specific command ",(0,l.kt)("inlineCode",{parentName:"p"},"AT+QICSGP"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'AT+QICSGP=1,1,"em","","",1\n')),(0,l.kt)("p",null,"According to ",(0,l.kt)("a",{parentName:"p",href:"https://www.quectel.com/faqs/12-8-what-is-the-difference-between-cgdcont-and-qicsgp/"},"Quectel")," the command ",(0,l.kt)("inlineCode",{parentName:"p"},"AT+QICSGP")," shall be used when the internal TCP/UDP stack should be used\u2014and it also allows to configure which bearer (CSD or GPRS) is used.\nGPRS must be used."),(0,l.kt)("p",null,"For managing roaming Quectel also introduced the ",(0,l.kt)("inlineCode",{parentName:"p"},"AT+QCFG")," command.\nThe suggested setting is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'AT+QCFG="roamservice",2,1\n')),(0,l.kt)("p",null,"Check your Quectel module AT command guide for more information."),(0,l.kt)("h2",{id:"u-blox-cellular-iot-modules"},"u-blox cellular IoT modules"),(0,l.kt)("p",null,"u-blox supports the standard 3GPP command to set APNs via ",(0,l.kt)("inlineCode",{parentName:"p"},"AT+CGDCONT"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'AT+CGDCONT=1,"IP","em",,\n')),(0,l.kt)("p",null,"u-blox also supports a vendor specific command to configure the APN for the initial EPS bearer:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'AT+UCGDFLT=1,"IP","em"\n')),(0,l.kt)("p",null,"For roaming configuration u-blox modules utilize a vendor specific ",(0,l.kt)("inlineCode",{parentName:"p"},"AT+UDCONF")," command.\nThis enables automatic search in case the device can't attach to a specific network."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"AT+UDCONF=20,2\n")),(0,l.kt)("p",null,"Check your u-blox module AT command guide for more information."),(0,l.kt)("h2",{id:"general-cellular-iot-modules"},"General cellular IoT modules"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Applies to a cellular module vendors: Fibocom, Telit, Sierra Wireless, SIMCom, Cinterion, Gemalto, Thales, Sequans")),(0,l.kt)("p",null,"The commands for configuring the APN settings are 3GPP standardized and all major cellular module manufacturer support the commands."),(0,l.kt)("p",null,"The AT+CGDCONT command needs to be utilized to set the APN."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'AT+CGDCONT=1,"IP","em",,\n')),(0,l.kt)("p",null,"Check your AT command guide for further information or read ",(0,l.kt)("a",{parentName:"p",href:"https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1515"},"3GPP Technical Specification 27.007"),"."))}p.isMDXComponent=!0}}]);