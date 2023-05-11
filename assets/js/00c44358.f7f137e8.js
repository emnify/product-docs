"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=l.createContext({}),u=function(e){var t=l.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?l.createElement(f,a(a({ref:t},s),{},{components:r})):l.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var l=r(7462),n=(r(7294),r(3905));const o={description:"Configuring Quectel, u-Blox, and several other vendors"},a="Cellular modules",i={unversionedId:"quickstart/devices/cellular-modules",id:"quickstart/devices/cellular-modules",title:"Cellular modules",description:"Configuring Quectel, u-Blox, and several other vendors",source:"@site/docs/quickstart/devices/cellular-modules.md",sourceDirName:"quickstart/devices",slug:"/quickstart/devices/cellular-modules",permalink:"/quickstart/devices/cellular-modules",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/quickstart/devices/cellular-modules.md",tags:[],version:"current",lastUpdatedAt:1683791560,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{description:"Configuring Quectel, u-Blox, and several other vendors"},sidebar:"mainDocsSidebar",previous:{title:"iOS devices",permalink:"/quickstart/devices/ios-devices"},next:{title:"GPS trackers",permalink:"/quickstart/devices/gps-trackers"}},c={},u=[{value:"Quectel cellular IoT modules",id:"quectel-cellular-iot-modules",level:2},{value:"u-Blox cellular IoT modules",id:"u-blox-cellular-iot-modules",level:2},{value:"General cellular IoT modules",id:"general-cellular-iot-modules",level:2}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cellular-modules"},"Cellular modules"),(0,n.kt)("p",null,"For Telit, Sierra Wireless, Cinterion/Gemalto/Thales, SIMcom, or Sequans, see ",(0,n.kt)("a",{parentName:"p",href:"#general-cellular-iot-modules"},"General cellular IoT modules"),"."),(0,n.kt)("h2",{id:"quectel-cellular-iot-modules"},"Quectel cellular IoT modules"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Applies to all Quectel modules: BG95, BG96, EG25, EG91, EG95, EC21, EC25, M65, M66, M95, MC60, BG77, BG600L")),(0,n.kt)("p",null,"With Quectel modules the APN can be set with the 3GPP standard command ",(0,n.kt)("inlineCode",{parentName:"p"},"AT+CGDCONT"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'AT+CGDCONT=1,"IP","em",,\n')),(0,n.kt)("p",null,"Quectel also utilizes a vendor specific command ",(0,n.kt)("inlineCode",{parentName:"p"},"AT+QICSGP"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'AT+QICSGP=1,1,"em","","",1\n')),(0,n.kt)("p",null,"According to ",(0,n.kt)("a",{parentName:"p",href:"https://www.quectel.com/faqs/12-8-what-is-the-difference-between-cgdcont-and-qicsgp/"},"Quectel")," the command ",(0,n.kt)("inlineCode",{parentName:"p"},"AT+QICSGP")," shall be used when the internal TCP/UDP stack should be used \u2013 and it also allows to configure which bearer (CSD or GPRS) is used.\nGPRS must be used."),(0,n.kt)("p",null,"For managing roaming Quectel also introduced the ",(0,n.kt)("inlineCode",{parentName:"p"},"AT+QCFG")," command.\nThe suggested setting is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'AT+QCFG="roamservice",2,1\n')),(0,n.kt)("p",null,"Check your Quectel module AT command guide for more information."),(0,n.kt)("h2",{id:"u-blox-cellular-iot-modules"},"u-Blox cellular IoT modules"),(0,n.kt)("p",null,"u-Blox supports the standard 3GPP command to set APNs via ",(0,n.kt)("inlineCode",{parentName:"p"},"AT+CGDCONT"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'AT+CGDCONT=1,"IP","em",,\n')),(0,n.kt)("p",null,"u-Blox also supports a vendor specific command to configure the APN for the initial EPS bearer:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'AT+UCGDFLT=1,"IP","em"\n')),(0,n.kt)("p",null,"For roaming configuration u-blox modules utilize a vendor specific ",(0,n.kt)("inlineCode",{parentName:"p"},"AT+UDCONF")," command.\nThis enables automatic search in case the device cannot attach to a specific network."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"AT+UDCONF=20,2\n")),(0,n.kt)("p",null,"Check your u-Blox module AT command guide for more information."),(0,n.kt)("h2",{id:"general-cellular-iot-modules"},"General cellular IoT modules"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Applies to a cellular module vendors: Fibocom, Telit, Sierra Wireless, SIMcom, Cinterion, Gemalto, Thales, Sequans")),(0,n.kt)("p",null,"The commands for configuring the APN settings are 3GPP standardized and all major cellular module manufacturer support the commands."),(0,n.kt)("p",null,"The AT+CGDCONT command needs to be utilized to set the APN."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'AT+CGDCONT=1,"IP","em",,\n')),(0,n.kt)("p",null,"Check your AT command guide for further information or read ",(0,n.kt)("a",{parentName:"p",href:"https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1515"},"3GPP Technical Specification 27.007"),"."))}d.isMDXComponent=!0}}]);