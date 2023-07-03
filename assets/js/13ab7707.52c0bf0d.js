"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3488],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(a),c=r,h=p["".concat(s,".").concat(c)]||p[c]||u[c]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6267:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={description:"Network aggregation supporting all radio types",pagination_next:"services/network/iot-cloud-communication-platform",slug:"/services/global-iot-network"},i="Global IoT Network",l={unversionedId:"services/network/global-iot-network",id:"services/network/global-iot-network",title:"Global IoT Network",description:"Network aggregation supporting all radio types",source:"@site/docs/services/network/global-iot-network.md",sourceDirName:"services/network",slug:"/services/global-iot-network",permalink:"/services/global-iot-network",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/network/global-iot-network.md",tags:[],version:"current",lastUpdatedAt:1688400984,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{description:"Network aggregation supporting all radio types",pagination_next:"services/network/iot-cloud-communication-platform",slug:"/services/global-iot-network"},sidebar:"mainDocsSidebar",previous:{title:"Security",permalink:"/services/security"},next:{title:"IoT cloud communication platform",permalink:"/services/iot-cloud-communication-platform"}},s={},d=[{value:"Mobile network aggregation",id:"mobile-network-aggregation",level:2},{value:"Radio access types",id:"radio-access-types",level:2},{value:"2G (GSM/GPRS/EDGE)",id:"2g-gsmgprsedge",level:3},{value:"3G (UMTS/WCDMA/HPSA/HSDPA)",id:"3g-umtswcdmahpsahsdpa",level:3},{value:"4G (LTE/LTE-A/LTE-CATXX)",id:"4g-ltelte-alte-catxx",level:3},{value:"LPWAN: LTE-M/NB-IoT",id:"lpwan-lte-mnb-iot",level:3},{value:"5G (New Radio)",id:"5g-new-radio",level:3}],m={toc:d};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"global-iot-network"},"Global IoT Network"),(0,r.kt)("p",null,"Even when IoT devices are more often only deployed at a single location and are not moving, for a vendor selling to multiple countries it is important to have a global connectivity solution, so that there is no need to have different SIM cards in stock or have multiple contracts and tariffs."),(0,r.kt)("h2",{id:"mobile-network-aggregation"},"Mobile network aggregation"),(0,r.kt)("p",null,"emnify uses an approach to aggregate the roaming footprint of multiple operators with the goal of offering access to every network in the world.\nMobile operators utilize roaming in foreign countries so their subscribers can stay connected when traveling.\nOften operators do not have roaming agreements with all countries or only have a roaming agreement for one network \u2013 which is sufficient for roaming travelers but not ideal for devices that could be anywhere in the country.\nemnify works with multiple partner operators across the globe to be able to offer more networks at a commercially viable rate.\nThe emnify\xa0",(0,r.kt)("a",{parentName:"p",href:"#multi-imsi-application"},"multi-IMSI applet"),"\xa0makes it completely transparent for the device to identify which roaming agreement of which operator is being utilized."),(0,r.kt)("h2",{id:"radio-access-types"},"Radio access types"),(0,r.kt)("p",null,"The emnify IoT SIM and platform supports all devices and modules using the following radio access technologies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2g-gsmgprsedge"},"2G (GSM/GPRS/EDGE)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3g-umtswcdmahpsahsdpa"},"3G (UMTS/WCDMA/HPSA/HSDPA)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#4g-ltelte-alte-catxx"},"4G (LTE/LTE-A/LTE-CATXX)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#5g-new-radio"},"5G (New Radio)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#lpwan-lte-mnb-iot"},"LTE-M (CAT-M1)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#lpwan-lte-mnb-iot"},"NB-IoT (CAT-NB1, CAT-NB2)"))),(0,r.kt)("p",null,"When a device wants to connect with any of these radio technologies, the network needs to support this technology as well as the device needs to support the network-specifc frequency band for this technology."),(0,r.kt)("h3",{id:"2g-gsmgprsedge"},"2G (GSM/GPRS/EDGE)"),(0,r.kt)("p",null,"GSM/GPRS is still one of the most dominant IoT technologies. Although the throughput is limited (GPRS max. 120kbps, EDGE max. 1Mbps) it is more than sufficient for many IoT use cases. The modules are cheap (<10$) and the coverage is widely available throughout the world in more than 200 countries."),(0,r.kt)("p",null,"GSM/GPRS is easy to deploy for IoT use cases because there are only 4 frequency bands utilized by operators for GSM/GPRS worldwide."),(0,r.kt)("p",null,"In the Americas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"B2 (1900MHz)"),(0,r.kt)("li",{parentName:"ul"},"B5 (850MHz)")),(0,r.kt)("p",null,"In the rest of world"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"B3 (1800MHz)"),(0,r.kt)("li",{parentName:"ul"},"B8 (900MHz)")),(0,r.kt)("p",null,"Therefore, module manufacturers offer dual-band modules that can be used either in Americas or Rest of World - or Quadband modules that can be deployed globally."),(0,r.kt)("p",null,"Nevertheless, GSM/GPRS is being phased out in several countries to free up frequency band for newer technologies.\n",(0,r.kt)("a",{parentName:"p",href:"https://www.emnify.com/en/resources/global-2g-phase-out"},"More than 60 networks have discontinued or announced to discontinue GSM technology"),"."),(0,r.kt)("h3",{id:"3g-umtswcdmahpsahsdpa"},"3G (UMTS/WCDMA/HPSA/HSDPA)"),(0,r.kt)("p",null,"3G technologies like UMTS, WCDMA, HSDPA, HSUPA have been driven by the surge for more data speed.\nAs an evolution of GSM, many parts of the GSM/GPRS core network and signaling are reused, where the most difference is in the radio part."),(0,r.kt)("p",null,"Like 2G, 3G modules are easy to deploy, since there are only 5 different frequency bands utilized by operators worldwide (with exception of Japan and China).\nMost UMTS modules therefore can be deployed worldwide."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"B1 (2100MHz) - main UMTS band in the world"),(0,r.kt)("li",{parentName:"ul"},"B2 (1900MHz) - used in the Americas"),(0,r.kt)("li",{parentName:"ul"},"B4 (1700MHz) - used in the Americas"),(0,r.kt)("li",{parentName:"ul"},"B5 (850MHz) - Australia / the Americas"),(0,r.kt)("li",{parentName:"ul"},"B8 (900MHz) - Europe")),(0,r.kt)("p",null,"For Europe, a 900/2100 MHz dual-band module is required.\nFor the Americas a 850/1900 MHz dual-band module is required."),(0,r.kt)("p",null,"3G/UMTS is also being phased out by several network operators to make room for newer technologies.\nSee also the article on\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.emnify.com/en/resources/global-2g-phase-out"},"GMS and UMTS networks that are being discontinued")),(0,r.kt)("h3",{id:"4g-ltelte-alte-catxx"},"4G (LTE/LTE-A/LTE-CATXX)"),(0,r.kt)("p",null,"LTE is a 4G technology (another one would be WiMAX - which never succeeded).\nWith the evolution of LTE, various LTE categories have been established, such as CAT-1, CAT-3, CAT-4, CAT-6, CAT-9, and CAT-12 Each successive category has exhibited ever-increasing data throughput when compared to its predecessors.\nFor consumer phones and broadband use cases, the increased throughput is relevant.\nHowever, the increased costs for these modules resulted in the need to develop a lightweight LTE module for IoT use cases.\nIn turn, this led to CAT-1 as the preferred LTE category for IoT applications."),(0,r.kt)("p",null,"LTE CAT-1 offers 10Mbps in downlink, 5Mbps in uplink, and is available with network operators wherever LTE is deployed.\nBecause of its wide availability and the possibility to roam between operators without limitation, LTE CAT-1 is the most common choice for IoT use cases."),(0,r.kt)("p",null,"Deploying LTE devices on a global scale is more challenging than with GSM and UMTS because network operators worldwide use more than 27 different frequency bands.\nTherefore, most modules only support specific regions where the device can be deployed."),(0,r.kt)("p",null,"Some main LTE-bands are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"B3 (1800 MHz) - Europe, Africa, APAC"),(0,r.kt)("li",{parentName:"ul"},"B7 (2600 MHz) - used in the Americas, Europe, APAC"),(0,r.kt)("li",{parentName:"ul"},"B20 (800 MHz) - used in Europe, Asia"),(0,r.kt)("li",{parentName:"ul"},"B1 (2100 MHz) - Europe, Asia"),(0,r.kt)("li",{parentName:"ul"},"B2 (1900 MHz) - the Americas"),(0,r.kt)("li",{parentName:"ul"},"B4 (1700 MHz) - the Americas"),(0,r.kt)("li",{parentName:"ul"},"B5 (850 MHz) - North America, APAC")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Validate the frequency bands utilized by the operators in your deployment countries before deciding on a module.\nYou can look up the utilized frequency bands\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.frequencycheck.com/interfaces/lte"},"here"))),(0,r.kt)("h3",{id:"lpwan-lte-mnb-iot"},"LPWAN: LTE-M/NB-IoT"),(0,r.kt)("p",null,"While utilizing LTE infrastructure both NB-IoT and LTE-M are also part of the 5G standardization.\nBoth technologies have been specified to meet the demand for IoT use cases in terms of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reduced cost - to enable mass production of cellular IoT devices",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removing unnecessary LTE features for IoT such as dual carrier, high modulations"))),(0,r.kt)("li",{parentName:"ul"},"Low power utilization - for battery powered use cases that require years of operation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Introducing power saving features such as\xa0",(0,r.kt)("a",{parentName:"li",href:"#psm"},"PSM"),"\xa0and\xa0",(0,r.kt)("a",{parentName:"li",href:"#edrx"},"eDRX")),(0,r.kt)("li",{parentName:"ul"},"Reducing the max. transmission power to less than 200mA to cater for battery max. current (GSM for example has 2A max power) "))),(0,r.kt)("li",{parentName:"ul"},"Wider coverage - (+14 dB for LTE-M and +20 dB for NB-IoT sensitivity) for rural/indoor/underground use cases",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Utilizing extended coverage feature with more retransmissions to ensure data gets delivered "))),(0,r.kt)("li",{parentName:"ul"},"Smaller module size - to enable smaller device use cases")),(0,r.kt)("p",null,"Because LTE-M and NB-IoT rely on LTE infrastructure they are also deployed in a multitude of different frequency bands.\nA total of 26 bands have been specified for their use.\nTo deploy NB-IoT and LTE-M in multiple countries and regions, the modules need to support the operator frequency bands."),(0,r.kt)("p",null,"Cellular LPWAN modules come in different versions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NB-IoT only or LTE-M only"),(0,r.kt)("li",{parentName:"ul"},"LTE-M/NB-IoT combined"),(0,r.kt)("li",{parentName:"ul"},"LTE-M/NB-IoT with 2G fallback and optional additional technologies (3G, 4G)")),(0,r.kt)("p",null,"As of today, roaming for NB-IoT is very limited between operators because of new charging models being implemented for NB-IoT.\nFor LTE-M, roaming usually works over regular LTE roaming.\nNevertheless, some operators have limited the access to their LTE-M networks and its available features (PSM, eDRX)."),(0,r.kt)("p",null,"Check the emnify\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.emnify.com/lte-m-coverage"},"LTE-M coverage"),"\xa0and\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.emnify.com/nb-iot-coverage"},"NB-IoT coverage"),", availability of PSM/eDRX and proposed frequency bands\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.emnify.com/lte-m-coverage?hsLang=en"},"on our Website"),"."),(0,r.kt)("p",null,"Power-Save-Mode (PSM)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Why is cellular communication not ideal for IoT?",(0,r.kt)("br",{parentName:"li"}),"Cellular communication for smartphones usually requires low latency on downlink, e.g., in case you are being called, your phone should ring right away.\nBecause of this, there are two things the device does which require power:  ",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Continuously listening to the radio if there is an incoming call"),(0,r.kt)("li",{parentName:"ol"},"Transmitting location information to the network where it should be called - whenever it moves out of a tracking area and periodically every 54 minutes",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),"","  "))),(0,r.kt)("li",{parentName:"ul"},"How does ",(0,r.kt)("strong",{parentName:"li"},"Power Save Mode")," work?",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),"For most IoT use cases a downlink-initiated channel is not required.\nIt is usually the device that initiates the communication to send e.g., sensor data.\nTherefore, a ",(0,r.kt)("strong",{parentName:"li"},"Power Save Mode")," is introduced that allows the device to go to sleep in case it has nothing to send.",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),"The ",(0,r.kt)("strong",{parentName:"li"},"Power Save Mode")," has the following characteristics:  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Power Save Mode is like a power off period during which the module only consumes a couple of \u03bcA."),(0,r.kt)("li",{parentName:"ul"},"The device tells the network how long it is going periodically into PSM (timer T3412 extended)."),(0,r.kt)("li",{parentName:"ul"},"The device/module will not be reachable during PSM from the outside in downlink."),(0,r.kt)("li",{parentName:"ul"},"The device can wake up the module and send data (e.g., powerkey, interrupt or pin triggered)."),(0,r.kt)("li",{parentName:"ul"},"When the device wakes up, it does not need to reattach and re-establish a PDN connection (unless it has moved to a different tracking area)."),(0,r.kt)("li",{parentName:"ul"},"After the device wakes up, it stays in idle mode for a configurable time (timer T3324) to listen for downlink messages (e.g., firmware updates)."),(0,r.kt)("li",{parentName:"ul"},"The actual time the device is then in Power Save Mode is T3412 extended - T3324")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some modules which have a SIM enabled PIN, (e.g., u-blox SARA-R4/SARA-N4) do not go into sleep mode.\nThe PIN is disabled on emnify SIMs.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Roaming for Power Save Mode\n","\xa0",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),"Be aware that not all NB-IoT and LTE-M networks have implemented PSM and even when PSM is available with the local operator this does not mean that a roaming SIM can use it.\nThis makes it difficult for devices that are moving - in case they use PSM, and the new network does not support PSM - or only other timer configurations.\nWe therefore regularly test the availability of PSM in our\xa0",(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/lte-m-coverage?hsLang=en"},"LTE-M"),"\xa0and\xa0",(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/nb-iot-coverage"},"NB-IoT"),"\xa0roaming footprint."),(0,r.kt)("li",{parentName:"ul"},"AT Command calculation and examples for PSM settings\n","\xa0",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),"The 3GPP defined AT command to configure PSM is\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"AT+CPSMS"),"\xa0which sets the T3412 extended and T3324 timers.\n","\xa0",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),"An example command is",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"AT+CPSMS=1,,,01001110,00000101"),"\xa0",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),"PSM will be enabled (",(0,r.kt)("inlineCode",{parentName:"li"},"1"),") and the desired value for T3412 extended is 140 hours (",(0,r.kt)("inlineCode",{parentName:"li"},"01001110"),") and the desired value for the T3324 timer is 10s (",(0,r.kt)("inlineCode",{parentName:"li"},"01001110"),").\nThe network does not necessarily use the desired values but utilizes supported values that are close to the desired values.\nTo read the effective PSM configuration use the command",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"AT+CPSMS?"),"\xa0",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),"There is a good calculator that translates the intended time settings for 3412 and T3324 available\xa0from ",(0,r.kt)("a",{parentName:"li",href:"https://www.thalesgroup.com/en/markets/digital-identity-and-security/iot/resources/developers/psm-calculation-tool"},"Thales"),".\n","\xa0",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),"Module vendors have also implemented module specific commands, e.g. Quectel",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AT+QPSMS"),"\xa0extends PSM settings"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AT+QCFG=\u201dpsm/enter\u201d,1"),"\xa0used to put the module immediately into PSM when the RRC connection is released (not waiting for T3324 to expire)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AT+QPSMEXTCFG"),"\xa0modem optimization command with different attributes such as making sure that PSM is randomized between different devices so they do not send data at the same time")))),(0,r.kt)("p",null,"Extended Discontinuous Reception (eDRX)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How does eDRX work?",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),"While PSM is focused on uplink-centric use cases, eDRX tries to reduce the power consumption for IoT use cases that get downlink information.\nRegular smartphones do not continuously listen on the radio for an incoming message.\nThey do this only every 1.28s or 2.56s which is called DRX (discontinuous Reception).\neDRX allows configuration of custom intervals of up to 40-175 mins - depending on the configuration the visited network allows.\n",(0,r.kt)("img",{alt:"eDRX and the 3412 and T3324 timers",src:a(9306).Z,width:"548",height:"394"}),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),"","  "),(0,r.kt)("li",{parentName:"ul"},"Roaming with eDRX",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),"As with PSM - not all NB-IoT and LTE-M networks support eDRX or the same timer configuration - and even if they do this does not guarantee that a roaming SIM card can utilize eDRX.\nWe therefore also test and publish the eDRX availability on our\xa0",(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/lte-m-coverage?hsLang=en"},"LTE-M")," and\xa0",(0,r.kt)("a",{parentName:"li",href:"https://www.emnify.com/nb-iot-coverage"},"NB-IoT"),"\xa0roaming footprint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#eDRX_AT_COMMANDS"},"AT Command examples for eDRX settings"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),"The standard 3GPP defined AT-command to configure eDRX is\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"AT+CEDRXS"),".",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),"As an example the below command enables (",(0,r.kt)("inlineCode",{parentName:"li"},"1"),") eDRX for LTE-M (",(0,r.kt)("inlineCode",{parentName:"li"},"4"),") and an eDRX cycle of 143.36s (",(0,r.kt)("inlineCode",{parentName:"li"},"1000"),").\n","\xa0",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},'AT+CEDRXS=1,4,"1000"'),"\nThe setting for NB-IoT would be\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"\xa0and the timer values are shown in below table  ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Binary"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Timer Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0 0 0 0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"5.12 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0 0 0 1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10.24 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0 0 1 0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"20.48 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0 0 1 1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"40.96 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0 1 0 0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"61.44 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0 1 0 1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"81.92 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0 1 1 0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"102.40 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0 1 1 1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"122.88 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 0 0 0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"143.36 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 0 0 1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"163.84 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 0 1 0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"327.68 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 0 1 1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"655.36 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 1 0 0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1310.72 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 1 0 1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2621.44 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 1 1 0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"5242.88 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 1 1 1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10485.76 seconds")))),(0,r.kt)("p",null,"The network will respond with the actual effective interval."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'+CEDRXS: [4,"1000","1000","0111"]')),(0,r.kt)("h3",{id:"5g-new-radio"},"5G (New Radio)"),(0,r.kt)("p",null,"5G is the next major technology standard after LTE - which targets 3 different applications areas:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enhanced Mobile Broadband (eMBB)  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"With faster throughput upto 1Gps+ and more capacity in a local area"),(0,r.kt)("li",{parentName:"ul"},"Utilizing mmWave bands (5Ghz+) for increased throughput"))),(0,r.kt)("li",{parentName:"ol"},"Massive Machine Type communication (mMTC)  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Targeted at IoT application where a multitude of devices are in the same location and need to communicate with low power"),(0,r.kt)("li",{parentName:"ul"},"LTE-M and NB-IoT often seen as decoupled from 5G to get earlier results will fusion with 5G mMTC  "))),(0,r.kt)("li",{parentName:"ol"},"Ultra-Reliable Low Latency Communications (URLLC)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For missing critical applications that require low latency and reliable data transmission")))),(0,r.kt)("p",null,"As of today, 5G is mainly adopted for eMBB use cases - using a 5G non-standalone (NSA) deployment - meaning that the air interface uses 5G technology whereas the core network is still 4G."),(0,r.kt)("p",null,"emnify has announced its first 5G roaming agreements in August 2020 and since then has reached agreements with more than a dozen network operators worldwide."))}p.isMDXComponent=!0},9306:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edrx-b7b0d58398aa9215496e1f9e7dca062c.png"}}]);