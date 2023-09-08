"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3800],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>S});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=c(a),u=s,S=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(S,o(o({ref:t},p),{},{components:a})):n.createElement(S,o({ref:t},p))}));function S(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:s,o[1]=r;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8575:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(7462),s=(a(7294),a(3905));const i={description:"Learn about the modes of SMS operation and use cases available on your emnify account for IoT devices",last_update:{date:"07-20-2023"},slug:"/portal/sms"},o="SMS",r={unversionedId:"portal/sms",id:"portal/sms",title:"SMS",description:"Learn about the modes of SMS operation and use cases available on your emnify account for IoT devices",source:"@site/docs/portal/sms.md",sourceDirName:"portal",slug:"/portal/sms",permalink:"/portal/sms",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/portal/sms.md",tags:[],version:"current",lastUpdatedAt:1689811200,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{description:"Learn about the modes of SMS operation and use cases available on your emnify account for IoT devices",last_update:{date:"07-20-2023"},slug:"/portal/sms"},sidebar:"mainDocsSidebar",previous:{title:"Device troubleshooting",permalink:"/portal/troubleshooting"},next:{title:"No-code workflows",permalink:"/portal/no-code"}},l={},c=[{value:"SMS P2P",id:"sms-p2p",level:2},{value:"SMS A2P",id:"sms-a2p",level:2},{value:"SMS MO and MT",id:"sms-mo-and-mt",level:2},{value:"Send SMS using the emnify Portal",id:"send-sms-using-the-emnify-portal",level:2},{value:"Open the SMS console",id:"open-the-sms-console",level:3},{value:"Send bulk SMS to multiple devices",id:"send-bulk-sms-to-multiple-devices",level:3},{value:"Send SMS using the emnify REST API",id:"send-sms-using-the-emnify-rest-api",level:2},{value:"SMS via Zapier",id:"sms-via-zapier",level:2},{value:"SMS via SMPP",id:"sms-via-smpp",level:2}],p={toc:c};function m(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sms"},"SMS"),(0,s.kt)("p",null,"Short Message Service (SMS) uses the same basic technology on IoT devices as that employed with consumer mobile devices.\nHowever, in the context of IoT devices, there are more modes of SMS operation and use cases that provide additional capabilities."),(0,s.kt)("h2",{id:"sms-p2p"},"SMS P2P"),(0,s.kt)("p",null,"Peer-to-peer (P2P) SMS describes the mode of sending SMS from one device to another."),(0,s.kt)("p",null,"For IoT devices, this poses a security threat.\nAnyone with the correct MSISDN can issue commands to the device since there isn't any built-in authentication process."),(0,s.kt)("p",null,"P2P also isn't suitable for IoT device use cases in which a device needs to update, interact, or transmit frequently because a device is limited to receiving only six SMS messages per minute in this mode."),(0,s.kt)("h2",{id:"sms-a2p"},"SMS A2P"),(0,s.kt)("p",null,"SMS application-to-peer (A2P) describes the mode of SMS data exchange between a device and an application.\nOne example of this is ",(0,s.kt)("a",{parentName:"p",href:"#send-sms-using-the-emnify-portal"},"sending SMS using the emnify Portal"),"."),(0,s.kt)("p",null,"Unlike P2P, A2P lets you interact with ",(0,s.kt)("em",{parentName:"p"},"multiple")," devices using an application.\nBecause A2P SMS can be automated, you can interact with your devices at scale.\nIt also tracks messages, which enables you to see when a message has been delivered."),(0,s.kt)("h2",{id:"sms-mo-and-mt"},"SMS MO and MT"),(0,s.kt)("p",null,"Because the costs of sending SMS from an IoT device are higher than the cost of receiving SMS, all SMS usage is logged as either ",(0,s.kt)("a",{parentName:"p",href:"/glossary#sms-mo"},"SMS MO")," (sent) or ",(0,s.kt)("a",{parentName:"p",href:"/glossary#sms-mt"},"SMS MT")," (received)."),(0,s.kt)("p",null,"Using the ",(0,s.kt)("a",{parentName:"p",href:"#send-sms-using-the-emnify-rest-api"},"emnify REST API"),", you can dispatch SMS MO from devices as HTTP ",(0,s.kt)("inlineCode",{parentName:"p"},"POST")," requests toward a user-configurable URL."),(0,s.kt)("p",null,"To activate or deactivate SMS MO or MT for a group of devices, you can use the toggle switches in a new or existing ",(0,s.kt)("strong",{parentName:"p"},"Service Policy")," to which the devices are assigned.\nSee ",(0,s.kt)("a",{parentName:"p",href:"/portal/device-policies#service-policies"},"Service Policies")," for more details."),(0,s.kt)("h2",{id:"send-sms-using-the-emnify-portal"},"Send SMS using the emnify Portal"),(0,s.kt)("p",null,"You can use the ",(0,s.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal")," to send and receive SMS messages to and from your devices.\nBecause SMS doesn't require a data connection, SMS is one of the ways you can configure the ",(0,s.kt)("a",{parentName:"p",href:"/glossary#apn"},"APN")," for ",(0,s.kt)("a",{parentName:"p",href:"/apn-configuration/gps-trackers"},"GPS trackers")," and ",(0,s.kt)("a",{parentName:"p",href:"/apn-configuration/industrial-routers"},"industrial routers"),"."),(0,s.kt)("h3",{id:"open-the-sms-console"},"Open the SMS console"),(0,s.kt)("p",null,"Each device has an SMS console.\nTo open a device's SMS console, select its message icon."),(0,s.kt)("details",{className:"custom-details-example"},(0,s.kt)("summary",null,"From Connected Devices"),(0,s.kt)("img",{src:a(508).Z,alt:""})),(0,s.kt)("details",{className:"custom-details-example"},(0,s.kt)("summary",null,"From Device Details"),(0,s.kt)("img",{src:a(4028).Z,alt:""})),(0,s.kt)("details",{className:"custom-details-troubleshooting"},(0,s.kt)("summary",null,"Show the Device SMS console"),(0,s.kt)("img",{src:a(6692).Z,style:{width:565},alt:""})),(0,s.kt)("h3",{id:"send-bulk-sms-to-multiple-devices"},"Send bulk SMS to multiple devices"),(0,s.kt)("img",{src:a(4706).Z,alt:""}),(0,s.kt)("h2",{id:"send-sms-using-the-emnify-rest-api"},"Send SMS using the emnify REST API"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/rest/sms-operations"},"Sending and receiving SMS")," in the ",(0,s.kt)("a",{parentName:"p",href:"/rest"},"emnify REST API")," documentation."),(0,s.kt)("h2",{id:"sms-via-zapier"},"SMS via Zapier"),(0,s.kt)("p",null,"Navigate to the emnify Portal ",(0,s.kt)("a",{parentName:"p",href:"https://portal.emnify.com/integrations"},(0,s.kt)("strong",{parentName:"a"},"Integrations"))," under the ",(0,s.kt)("strong",{parentName:"p"},"No-Code Workflows"),' to find a list of Zapier integrations.\nIn this list, there are two "Zaps" for getting you started with sending SMS from your devices.'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Send SMS via Twilio when new devices reach usage limits in emnify"),(0,s.kt)("li",{parentName:"ul"},"Send SMS messages when new devices reach usage limits in emnify")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/portal/no-code"},"no-code workflows in the emnify Portal"),".")),(0,s.kt)("h2",{id:"sms-via-smpp"},"SMS via SMPP"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/glossary#smpp"},"Short Message Peer-to-Peer (SMPP)")," is a protocol that the telecommunication industry uses for exchanging SMS messages between short message service centers (SMSC) and/or external short messaging entities (ESME).\nTelematics platforms, SMS services, and operators often use SMPP to enable sending SMS to and from devices."),(0,s.kt)("p",null,"You can ",(0,s.kt)("a",{parentName:"p",href:"/portal/device-policies#smpp-sms-interface"},"select and configure SMPP")," as your ",(0,s.kt)("strong",{parentName:"p"},"SMS Interface")," via a new or existing ",(0,s.kt)("strong",{parentName:"p"},"Service Policy")," under ",(0,s.kt)("a",{parentName:"p",href:"https://portal.emnify.com/device-policies"},(0,s.kt)("strong",{parentName:"a"},"Device Policies")),"."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"For an example of integrating SMPP with a third-party application, see ",(0,s.kt)("a",{parentName:"p",href:"https://www.emnify.com/integration-guides/smpp-integration-flespi-wialon-gurtam"},"emnify SMS via SMPP integration with Gurtams' flespi and Wialon"),".")))}m.isMDXComponent=!0},508:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connected-devices-sms-selection-381bb1f1b3e13beaaec4ddaae8466426.png"},4028:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/device-details-sms-console-b1a8e9c1bd2b3f328ea8f88c123b4df1.png"},6692:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/device-sms-console-8428244a6324e7a72b75bfe14e2363d7.png"},4706:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sms-bulk-send-bcaa409d438539b97d2e9cab17e25d31.png"}}]);