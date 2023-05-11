"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6204],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=u(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[p]="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1963:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={description:"Form factors, quality grades, multi-IMSI, eSIM, eUICC"},o="Global IoT SIM",i={unversionedId:"services/global-iot-sim",id:"services/global-iot-sim",title:"Global IoT SIM",description:"Form factors, quality grades, multi-IMSI, eSIM, eUICC",source:"@site/docs/services/global-iot-sim.md",sourceDirName:"services",slug:"/services/global-iot-sim",permalink:"/services/global-iot-sim",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/global-iot-sim.md",tags:[],version:"current",lastUpdatedAt:1683791560,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{description:"Form factors, quality grades, multi-IMSI, eSIM, eUICC"},sidebar:"mainDocsSidebar",previous:{title:"Services",permalink:"/services"},next:{title:"Global IoT Network",permalink:"/services/global-iot-network"}},s={},u=[{value:"eSIM technology",id:"esim-technology",level:2},{value:"M2M eSIM",id:"m2m-esim",level:3},{value:"Consumer eSIM",id:"consumer-esim",level:3},{value:"Form factors",id:"form-factors",level:2},{value:"Quality grades",id:"quality-grades",level:2},{value:"Compliance and software features",id:"compliance-and-software-features",level:2},{value:"Multi-IMSI applet",id:"multi-imsi-applet",level:2}],d={toc:u};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"global-iot-sim"},"Global IoT SIM"),(0,a.kt)("p",null,"emnify provides eSIMs that are built specifically for IoT solutions.\nCompared to regular operator SIMs, emnify eSIMs come in different quality grades that are more durable.\nThey can be updated ",(0,a.kt)("a",{parentName:"p",href:"/glossary#ota"},"over the air (OTA)")," using different eSIM remote SIM provisioning technologies and come in different ",(0,a.kt)("a",{parentName:"p",href:"#form-factors"},"form factors"),"."),(0,a.kt)("p",null,"emnify eSIMs have a ",(0,a.kt)("a",{parentName:"p",href:"#multi-imsi-applet"},"multi-IMSI applet")," installed on the SIM.\nThe multi-IMSI applet makes sure that the best network and network partners are used based a device's location.\nUsing this technology, emnify provides a larger number of networks than traditional operators. With access to the largest global ",(0,a.kt)("a",{parentName:"p",href:"global-iot-network#lpwan-lte-mnb-iot"},"LPWAN")," (LTE-M and NB-IoT) footprint, emnify SIMs ensure regulatory network access in over 100 countries."),(0,a.kt)("h2",{id:"esim-technology"},"eSIM technology"),(0,a.kt)("h3",{id:"m2m-esim"},"M2M eSIM"),(0,a.kt)("p",null,"Every new SIM you order from emnify is an ",(0,a.kt)("a",{parentName:"p",href:"https://www.gsma.com/esim/remote-sim-provisioning-for-machine-to-machine/"},"M2M eSIM")," (compliant with SGP.01, SGP.02, and SGP.016).\nThe M2M eSIM is also referred to as an ",(0,a.kt)("a",{parentName:"p",href:"/glossary#euicc"},"eUICC")," (Embedded universal integrated circuit card).\nUnlike a regular SIM (UICC), an eUICC can be updated over the air.\nBecause M2M eSIMs can be updated with new configurations or profiles, this eliminates the need for SIM swaps."),(0,a.kt)("h3",{id:"consumer-esim"},"Consumer eSIM"),(0,a.kt)("p",null,"emnify also offers consumer eSIMs for phones, tablets, and smart watches.\nThe consumer eSIM can be downloaded to a device by scanning a QR code.\nIf you are interested in consumer eSIM technology, please ",(0,a.kt)("a",{parentName:"p",href:"https://www.emnify.com/talk-to-us"},"contact us"),"."),(0,a.kt)("h2",{id:"form-factors"},"Form factors"),(0,a.kt)("p",null,"emnify ",(0,a.kt)("a",{parentName:"p",href:"#m2m-esim"},"M2M eSIMs")," are available in the following form factors:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Form factor"),(0,a.kt)("th",{parentName:"tr",align:null},"Dimensions"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"2FF")," (Mini SIM)"),(0,a.kt)("td",{parentName:"tr",align:null},"15 x 25 x 0.75 mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"3FF")," (Micro SIM)"),(0,a.kt)("td",{parentName:"tr",align:null},"12 x 15 x 0.75 mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"4FF")," (Nano SIM)"),(0,a.kt)("td",{parentName:"tr",align:null},"8.8 x 12.3 x 0.75 mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"MFF2")," (eSIM)"),(0,a.kt)("td",{parentName:"tr",align:null},"5 x 6 x 0.75 mm, 8 pin")))),(0,a.kt)("p",null,"MFF2 eSIMs can be soldered onto a device and are not readily removable.\nVisit the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.emnify.com/sim-order"},"emnify SIM Shop")," where you can choose between these packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Triple-cut commercial",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Mini (2FF)"),(0,a.kt)("li",{parentName:"ul"},"Micro (3FF)"),(0,a.kt)("li",{parentName:"ul"},"Nano (4FF)"))),(0,a.kt)("li",{parentName:"ul"},"Dual-cut commercial",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Mini (2FF)"),(0,a.kt)("li",{parentName:"ul"},"Micro (3FF)"))),(0,a.kt)("li",{parentName:"ul"},"Single-cut Mini Industrial (2FF)"),(0,a.kt)("li",{parentName:"ul"},"Single-cut Micro Industrial (3FF)"),(0,a.kt)("li",{parentName:"ul"},"Embedded MFF2")),(0,a.kt)("p",null,"In use cases where devices are mobile, we highly recommend choosing the form factor that fits the device exactly, not multi-cut ones that include a smaller form factor than is needed.\nNot only are such pluggable SIMs more durable, but their contact with the device is also firmer."),(0,a.kt)("h2",{id:"quality-grades"},"Quality grades"),(0,a.kt)("p",null,"emnify eSIMs come in three different quality grades: ",(0,a.kt)("strong",{parentName:"p"},"Commercial eUICC"),", ",(0,a.kt)("strong",{parentName:"p"},"Industrial eUICC"),", and ",(0,a.kt)("strong",{parentName:"p"},"MFF2"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("th",{colspan:"3"}),(0,a.kt)("th",null,"Commercial eUICC"),(0,a.kt)("th",null,"Industrial eUICC"),(0,a.kt)("th",null,"MFF2")),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{rowspan:"15"},"Hardware characteristics"),(0,a.kt)("td",{rowspan:"2"},"Form Factor"),(0,a.kt)("td",null,"Embedded/solderable"),(0,a.kt)("td",{align:"center"},"-"),(0,a.kt)("td",{align:"center"},"-"),(0,a.kt)("td",{align:"center"},"MFF2")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Removable Card"),(0,a.kt)("td",null,"Triple-cut or Dual-Cut"),(0,a.kt)("td",null,"2FF or 3FF"),(0,a.kt)("td",{align:"center"},"-")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowspan:"5"},"Chip Type"),(0,a.kt)("td",null,"Operational and storage temperature"),(0,a.kt)("td",null,"\u201325\xb0C to +85\xb0C (JESD22-A104)"),(0,a.kt)("td",{colspan:"2",align:"center"},"\u201340\xb0C to +105\xb0C (JESD22-A104)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Operating voltage"),(0,a.kt)("td",{colspan:"3",align:"center"},"1.62V to 5.5V")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Interface"),(0,a.kt)("td",{colspan:"3",align:"center"},"ISO-7816, T=0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Chipset NVM size"),(0,a.kt)("td",{colspan:"3",align:"center"},"704 Kbytes")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Chipset RAM size"),(0,a.kt)("td",{colspan:"3",align:"center"},"20 Kbytes")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowspan:"8"},"NVRAM characteristics"),(0,a.kt)("td",null,"Write Endurance"),(0,a.kt)("td",{colspan:"3"},"500k erase per page 10M cycles with OS High Endurance")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Data retention"),(0,a.kt)("td",{colspan:"3",align:"center"},"15 years @85\xb0C")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Moisture/Reflow conditions"),(0,a.kt)("td",{align:"center"},"-"),(0,a.kt)("td",{colspan:"2"},"MSL3 (J-STD020)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Humidity"),(0,a.kt)("td",{align:"center"},"-"),(0,a.kt)("td",{colspan:"2"},"HA as per ETSI TS 102.671 / (JESD22-A101D)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Corrosion"),(0,a.kt)("td",{align:"center"},"-"),(0,a.kt)("td",{align:"center"},"-"),(0,a.kt)("td",null,"CX as per ETSI TS 102.671 (JESD22-A107)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Vibration"),(0,a.kt)("td",{align:"center"},"-"),(0,a.kt)("td",{align:"center"},"-"),(0,a.kt)("td",null,"VX as per ETSI TS 102.671 (JESD22-B103)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Shock")," ",(0,a.kt)("td",{align:"center"},"-")," ",(0,a.kt)("td",{align:"center"},"-"),(0,a.kt)("td",null,"SX as per ETSI TS 102.671 (JESD22-B104)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Common Criteria Certificate"),(0,a.kt)("td",{colspan:"3",align:"center"},"CCN-CC-5/2019")))),(0,a.kt)("h2",{id:"compliance-and-software-features"},"Compliance and software features"),(0,a.kt)("p",null,"The following compliance standards and software features apply to all quality grades of emnify eSIMs."),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{rowspan:"4"},"emnify eUICC Compliance"),(0,a.kt)("td",{rowspan:"3"},"GSMA"),(0,a.kt)("td",null,"SGP.01 Embedded SIM Remote Provisioning Architecture"),(0,a.kt)("td",null,"1.1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SGP.02 Embedded UICC Technical Specification"),(0,a.kt)("td",null,"3.2")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SGP.16 M2M Compliance Process"),(0,a.kt)("td",null,"1.1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"TCA"),(0,a.kt)("td",null,"eUICC Profile Package Interoperable",(0,a.kt)("br",null),"Format Technical Specification"),(0,a.kt)("td",null,"2.1")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowspan:"10"},"Software Features"),(0,a.kt)("td",{rowspan:"3"},"Embedded Universal Integrated Circuit Card (eUICC)"),(0,a.kt)("td",null,"Maximum number of profiles"),(0,a.kt)("td",null,"10")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ISD-A and ISD-R system applets"),(0,a.kt)("td",null,"Supported")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EAP-SIM and EAP-AKA authentication protocols"),(0,a.kt)("td",null,"Supported")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LPWAN features"),(0,a.kt)("td",null,"Suspend and resume SIM state ETSI TS 102 221",(0,a.kt)("br",null),"Poll Interval Negotiation ETSI TS 102 221"),(0,a.kt)("td",null,"Supported")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowspan:"3"},"OTA Capabilities on ISD-P:",(0,a.kt)("br",null),"Remote file management - RFM",(0,a.kt)("br",null),"Remote applet management - RAM"),(0,a.kt)("td",null,"HTTPS"),(0,a.kt)("td",null,"Supported")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"TLS 1.2"),(0,a.kt)("td",null,"Supported")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"AES algorithm (128-bit, 192-bit, and 256-bit keys)"),(0,a.kt)("td",null,"Supported")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GlobalPlatform"),(0,a.kt)("td",null,"All Secure Channel Protocols"),(0,a.kt)("td",null,"Supported")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowspan:"2"},"Java Card"),(0,a.kt)("td",null,"Standard Java Card APIs"),(0,a.kt)("td",null,"Supported")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GlobalPlatform API"),(0,a.kt)("td",null,"Supported")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowspan:"2",colspan:"2"},"Compliance"),(0,a.kt)("td",null,"ROHS"),(0,a.kt)("td",null,"Yes")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"REACH"),(0,a.kt)("td",null,"Yes")))),(0,a.kt)("h2",{id:"multi-imsi-applet"},"Multi-IMSI applet"),(0,a.kt)("p",null,"emnify eSIM cards are equipped with a multi-IMSI applet that runs in the background using minimal resources without any negative impact on the device's performance.\nThis technology is similar to a mobile phone using dual-SIM technology.\nAn emnify eSIM has cellular provider information from multiple SIM cards already included.\nWhile emnify has roaming agreements and local contracts with operators around the world, emnify also uses partner operators to increase the network coverage footprint in order to provide a fallback when preferred networks experience outages."),(0,a.kt)("p",null,"The multi-IMSI applet works in the following manner.\nemnify has its own operator identity (",(0,a.kt)("a",{parentName:"p",href:"/glossary#imsi"},"IMSI"),") as well as the partner operator's IMSI stored on the SIM card.\nEach IMSI / partner operator usually has more than one network accessible per country.\nThe applet also includes a preferred IMSI list per country.\nFor example, this list defines that IMSI ",(0,a.kt)("em",{parentName:"p"},"X")," will have the highest priority for access in country ",(0,a.kt)("em",{parentName:"p"},"A"),".\nHowever, if the device can't connect, another operator, IMSI ",(0,a.kt)("em",{parentName:"p"},"Y"),", will be next on the list of priorities.\nSo when a device then moves to country ",(0,a.kt)("em",{parentName:"p"},"A"),", the applet dynamically overwrites the active IMSI with IMSI ",(0,a.kt)("em",{parentName:"p"},"X")," based on the preferred IMSI list.\nThen when operator ",(0,a.kt)("em",{parentName:"p"},"X")," has a service outage, the SIM automatically falls back to IMSI ",(0,a.kt)("em",{parentName:"p"},"Y")," to ensure the device can maintain connectivity."),(0,a.kt)("p",null,"The selection of the preferred IMSI for each country is based on multiple factors, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If permanent roaming is permitted in that country"),(0,a.kt)("li",{parentName:"ul"},"IMSI that has the most network partners in the country"),(0,a.kt)("li",{parentName:"ul"},"IMSI that has the best availability of radio access types (LTE, NB-IoT, LTE-M) or features (PSM/eDRX)")))}p.isMDXComponent=!0}}]);