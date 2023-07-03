"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[99],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={description:"Connect to routers to configure the APN",slug:"/apn-configuration/industrial-routers"},i="Industrial routers",l={unversionedId:"quickstart/apn-configuration/industrial-routers",id:"quickstart/apn-configuration/industrial-routers",title:"Industrial routers",description:"Connect to routers to configure the APN",source:"@site/docs/quickstart/apn-configuration/industrial-routers.md",sourceDirName:"quickstart/apn-configuration",slug:"/apn-configuration/industrial-routers",permalink:"/apn-configuration/industrial-routers",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/quickstart/apn-configuration/industrial-routers.md",tags:[],version:"current",lastUpdatedAt:1688400984,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{description:"Connect to routers to configure the APN",slug:"/apn-configuration/industrial-routers"},sidebar:"mainDocsSidebar",previous:{title:"GPS trackers",permalink:"/apn-configuration/gps-trackers"},next:{title:"Troubleshooting",permalink:"/quickstart/troubleshooting"}},c={},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"industrial-routers"},"Industrial routers"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Applies to RUT240, RUT950, RUT955, RUTX09, RUTX11, RUTX12, RUTX14, RUTXR1, RUT360")),(0,o.kt)("p",null,"Newer firmware version of the Teltonika Routers should automatically detect the emnify APN.\nNevertheless, in case the APN is not correctly detected, it can be configured with 3 methods:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"With the Teltonika WebUI over Wifi, Ethernet"),(0,o.kt)("li",{parentName:"ol"},"Via the SMS console through the ",(0,o.kt)("a",{parentName:"li",href:"https://portal.emnify.com/connected-devices"},(0,o.kt)("strong",{parentName:"a"},"Connected Devices")," page of the emnify Portal")),(0,o.kt)("li",{parentName:"ol"},"via the emnify SMS API or Zapier Integration (when automating the configuration)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"APN configuration through the Teltonika Router WebUI")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect your PC through the routers Wi-Fi using the credentials   provided on the device."),(0,o.kt)("li",{parentName:"ol"},"Open the Teltonika WebUI ",(0,o.kt)("a",{parentName:"li",href:"http://192.168.1.1"},"http://192.168.1.1")," and go to the Mobile configuration."),(0,o.kt)("li",{parentName:"ol"},"Type in ",(0,o.kt)("inlineCode",{parentName:"li"},"em")," in APN \u2013 there is no PIN configured on the SIM and no APN username or password required.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Teltonika Networks Router APN configuration via SMS console / API or Zapier ")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure that the Router is powered on and the SIM card is inserted and activated."),(0,o.kt)("li",{parentName:"ol"},"In the emnify Portal, ensure that the device is shown as ",(0,o.kt)("strong",{parentName:"li"},"Attached"),"."),(0,o.kt)("li",{parentName:"ol"},"Send the following SMS command to the device:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cellular apn=em\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"See ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.teltonika-networks.com/view/SMS_Commands"},"Teltonika's SMS Commands")," reference for a comprehensive list of SMS commands, syntax, and usage.")))}p.isMDXComponent=!0}}]);