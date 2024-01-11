"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3488],{4927:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(5893),s=i(1151);const o={description:"Network aggregation supporting all radio types",last_update:{date:"08-24-2021"},pagination_next:"services/network/iot-cloud-communication-platform",slug:"/services/global-iot-network"},r="Global IoT Network",l={id:"services/network/global-iot-network",title:"Global IoT Network",description:"Network aggregation supporting all radio types",source:"@site/docs/services/network/global-iot-network.md",sourceDirName:"services/network",slug:"/services/global-iot-network",permalink:"/pr-preview/pr-232/services/global-iot-network",draft:!1,unlisted:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/network/global-iot-network.md",tags:[],version:"current",lastUpdatedAt:1629763200,formattedLastUpdatedAt:"Aug 24, 2021",frontMatter:{description:"Network aggregation supporting all radio types",last_update:{date:"08-24-2021"},pagination_next:"services/network/iot-cloud-communication-platform",slug:"/services/global-iot-network"},sidebar:"mainDocsSidebar",previous:{title:"Security",permalink:"/pr-preview/pr-232/services/security"},next:{title:"IoT cloud communication platform",permalink:"/pr-preview/pr-232/services/iot-cloud-communication-platform"}},a={},d=[{value:"Mobile network aggregation",id:"mobile-network-aggregation",level:2},{value:"Radio access types",id:"radio-access-types",level:2},{value:"2G (GSM/GPRS/EDGE)",id:"2g-gsmgprsedge",level:3},{value:"3G (UMTS/WCDMA/HPSA/HSDPA)",id:"3g-umtswcdmahpsahsdpa",level:3},{value:"4G (LTE/LTE-A/LTE-CATXX)",id:"4g-ltelte-alte-catxx",level:3},{value:"LPWAN: LTE-M/NB-IoT",id:"lpwan-lte-mnb-iot",level:3},{value:"Power-Save-Mode (PSM)",id:"power-save-mode-psm",level:4},{value:"Extended Discontinuous Reception (eDRX)",id:"extended-discontinuous-reception-edrx",level:4},{value:"5G (New Radio)",id:"5g-new-radio",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"global-iot-network",children:"Global IoT Network"}),"\n",(0,t.jsx)(n.p,{children:"Even when IoT devices are more often only deployed at a single location and aren't moving, for a vendor selling to multiple countries it's important to have a global connectivity solution, so that there is no need to have different SIM cards in stock or have multiple contracts and data plans."}),"\n",(0,t.jsx)(n.h2,{id:"mobile-network-aggregation",children:"Mobile network aggregation"}),"\n",(0,t.jsxs)(n.p,{children:["emnify uses an approach to aggregate the roaming footprint of multiple operators with the goal of offering access to every network in the world.\nMobile operators utilize roaming in foreign countries so their subscribers can stay connected when traveling.\nOften operators don't have roaming agreements with all countries or only have a roaming agreement for one network\u2014which is sufficient for roaming travelers but not ideal for devices that could be anywhere in the country.\nemnify works with multiple partner operators across the globe to be able to offer more networks at a commercially viable rate.\nThe emnify\xa0",(0,t.jsx)(n.a,{href:"/services/global-iot-sim#multi-imsi-applet",children:"multi-IMSI applet"}),"\xa0makes it completely transparent for the device to identify which roaming agreement of which operator is being utilized."]}),"\n",(0,t.jsx)(n.h2,{id:"radio-access-types",children:"Radio access types"}),"\n",(0,t.jsx)(n.p,{children:"The emnify IoT SIM and platform supports all devices and modules using the following radio access technologies"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#2g-gsmgprsedge",children:"2G (GSM/GPRS/EDGE)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#3g-umtswcdmahpsahsdpa",children:"3G (UMTS/WCDMA/HPSA/HSDPA)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#4g-ltelte-alte-catxx",children:"4G (LTE/LTE-A/LTE-CATXX)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#5g-new-radio",children:"5G (New Radio)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#lpwan-lte-mnb-iot",children:"LTE-M (CAT-M1)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#lpwan-lte-mnb-iot",children:"NB-IoT (CAT-NB1, CAT-NB2)"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When a device wants to connect with any of these radio technologies, the network needs to support this technology as well as the device needs to support the network-specifc frequency band for this technology."}),"\n",(0,t.jsx)(n.h3,{id:"2g-gsmgprsedge",children:"2G (GSM/GPRS/EDGE)"}),"\n",(0,t.jsx)(n.p,{children:"GSM/GPRS is still one of the most dominant IoT technologies. Although the throughput is limited (GPRS max. 120kbps, EDGE max. 1Mbps) it's more than sufficient for many IoT use cases. The modules are cheap (<10$) and the coverage is widely available throughout the world in more than 200 countries."}),"\n",(0,t.jsx)(n.p,{children:"GSM/GPRS isn't complicated to deploy for IoT use cases because there are only four frequency bands utilized by operators for GSM/GPRS worldwide."}),"\n",(0,t.jsx)(n.p,{children:"In the Americas"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"B2 (1900MHz)"}),"\n",(0,t.jsx)(n.li,{children:"B5 (850MHz)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In the rest of world"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"B3 (1800MHz)"}),"\n",(0,t.jsx)(n.li,{children:"B8 (900MHz)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Therefore, module manufacturers offer dual-band modules that can be used either in Americas or Rest of World\u2014or Quad-band modules that can be deployed globally."}),"\n",(0,t.jsxs)(n.p,{children:["Nevertheless, GSM/GPRS is being phased out in several countries to free up frequency band for newer technologies.\n",(0,t.jsx)(n.a,{href:"https://www.emnify.com/en/resources/global-2g-phase-out",children:"More than 60 networks have discontinued or announced to discontinue GSM technology"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"3g-umtswcdmahpsahsdpa",children:"3G (UMTS/WCDMA/HPSA/HSDPA)"}),"\n",(0,t.jsx)(n.p,{children:"3G technologies like UMTS, WCDMA, HSDPA, HSUPA have been driven by the surge for more data speed.\nAs an evolution of GSM, many parts of the GSM/GPRS core network and signaling are reused, where the most difference is in the radio part."}),"\n",(0,t.jsx)(n.p,{children:"Like 2G, 3G modules aren't complicated to deploy, since there are only five different frequency bands utilized by operators worldwide (with exception of Japan and China).\nMost UMTS modules therefore can be deployed worldwide."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"B1 (2100MHz) - main UMTS band in the world"}),"\n",(0,t.jsx)(n.li,{children:"B2 (1900MHz) - used in the Americas"}),"\n",(0,t.jsx)(n.li,{children:"B4 (1700MHz) - used in the Americas"}),"\n",(0,t.jsx)(n.li,{children:"B5 (850MHz) - Australia / the Americas"}),"\n",(0,t.jsx)(n.li,{children:"B8 (900MHz) - Europe"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For Europe, a 900/2100 MHz dual-band module is required.\nFor the Americas a 850/1900 MHz dual-band module is required."}),"\n",(0,t.jsxs)(n.p,{children:["3G/UMTS is also being phased out by several network operators to make room for newer technologies.\nSee also the article on\xa0",(0,t.jsx)(n.a,{href:"https://www.emnify.com/en/resources/global-2g-phase-out",children:"GMS and UMTS networks that are being discontinued"})]}),"\n",(0,t.jsx)(n.h3,{id:"4g-ltelte-alte-catxx",children:"4G (LTE/LTE-A/LTE-CATXX)"}),"\n",(0,t.jsx)(n.p,{children:"LTE is a 4G technology (another one would be WiMAX - which never succeeded).\nWith the evolution of LTE, various LTE categories have been established, such as CAT-1, CAT-3, CAT-4, CAT-6, CAT-9, and CAT-12 Each successive category has exhibited ever-increasing data throughput when compared to its predecessors.\nFor consumer phones and broadband use cases, the increased throughput is relevant.\nHowever, the increased costs for these modules resulted in the need to develop a lightweight LTE module for IoT use cases.\nIn turn, this led to CAT-1 as the preferred LTE category for IoT applications."}),"\n",(0,t.jsx)(n.p,{children:"LTE CAT-1 offers 10Mbps in downlink, 5Mbps in uplink, and is available with network operators wherever LTE is deployed.\nBecause of its wide availability and the possibility to roam between operators without limitation, LTE CAT-1 is the most common choice for IoT use cases."}),"\n",(0,t.jsx)(n.p,{children:"Deploying LTE devices on a global scale is more challenging than with GSM and UMTS because network operators worldwide use more than 27 different frequency bands.\nTherefore, most modules only support specific regions where the device can be deployed."}),"\n",(0,t.jsx)(n.p,{children:"Some main LTE-bands are"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"B3 (1800 MHz) - Europe, Africa, APAC"}),"\n",(0,t.jsx)(n.li,{children:"B7 (2600 MHz) - used in the Americas, Europe, APAC"}),"\n",(0,t.jsx)(n.li,{children:"B20 (800 MHz) - used in Europe, Asia"}),"\n",(0,t.jsx)(n.li,{children:"B1 (2100 MHz) - Europe, Asia"}),"\n",(0,t.jsx)(n.li,{children:"B2 (1900 MHz) - the Americas"}),"\n",(0,t.jsx)(n.li,{children:"B4 (1700 MHz) - the Americas"}),"\n",(0,t.jsx)(n.li,{children:"B5 (850 MHz) - North America, APAC"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Validate the frequency bands utilized by the operators in your deployment countries before deciding on a module."})}),"\n",(0,t.jsx)(n.h3,{id:"lpwan-lte-mnb-iot",children:"LPWAN: LTE-M/NB-IoT"}),"\n",(0,t.jsx)(n.p,{children:"While utilizing LTE infrastructure both NB-IoT and LTE-M are also part of the 5G standardization.\nBoth technologies have been specified to meet the demand for IoT use cases in terms of:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Reduced cost - to enable mass production of cellular IoT devices","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Removing unnecessary LTE features for IoT such as dual carrier, high modulations"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Low power utilization - for battery powered use cases that require years of operation","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Introducing power saving features such as\xa0",(0,t.jsx)(n.a,{href:"#power-save-mode-psm",children:"PSM"}),"\xa0and\xa0",(0,t.jsx)(n.a,{href:"#extended-discontinuous-reception-edrx",children:"eDRX"})]}),"\n",(0,t.jsx)(n.li,{children:"Reducing the max. transmission power to less than 200mA to cater for battery max. current (GSM for example has 2A max power)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Wider coverage - (+14 dB for LTE-M and +20 dB for NB-IoT sensitivity) for rural/indoor/underground use cases","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Utilizing extended coverage feature with more retransmissions to ensure data gets delivered"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Smaller module size - to enable smaller device use cases"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Because LTE-M and NB-IoT rely on LTE infrastructure they're also deployed in a multitude of different frequency bands.\nA total of 26 bands have been specified for their use.\nTo deploy NB-IoT and LTE-M in multiple countries and regions, the modules need to support the operator frequency bands."}),"\n",(0,t.jsx)(n.p,{children:"Cellular LPWAN modules come in different versions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"NB-IoT only or LTE-M only"}),"\n",(0,t.jsx)(n.li,{children:"LTE-M/NB-IoT combined"}),"\n",(0,t.jsx)(n.li,{children:"LTE-M/NB-IoT with 2G fallback and optional additional technologies (3G, 4G)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As of today, roaming for NB-IoT is very limited between operators because of new charging models being implemented for NB-IoT.\nFor LTE-M, roaming usually works over regular LTE roaming.\nNevertheless, some operators have limited the access to their LTE-M networks and its available features (PSM, eDRX)."}),"\n",(0,t.jsxs)(n.p,{children:["Check the emnify\xa0",(0,t.jsx)(n.a,{href:"https://www.emnify.com/lte-m-coverage",children:"LTE-M coverage"}),"\xa0and\xa0",(0,t.jsx)(n.a,{href:"https://www.emnify.com/nb-iot-coverage",children:"NB-IoT coverage"}),", availability of PSM/eDRX and proposed frequency bands\xa0on the emnify website."]}),"\n",(0,t.jsx)(n.h4,{id:"power-save-mode-psm",children:"Power-Save-Mode (PSM)"}),"\n",(0,t.jsx)(n.p,{children:"Why is cellular communication not ideal for IoT?"}),"\n",(0,t.jsx)(n.p,{children:"Cellular communication for smartphones usually requires low latency on downlink, for example, in case you are being called, your phone should ring right away.\nBecause of this, there are two things the device does which require power:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Continuously listening to the radio if there is an incoming call"}),"\n",(0,t.jsx)(n.li,{children:"Transmitting location information to the network where it should be called - whenever it moves out of a tracking area and periodically every 54 minutes"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["How does ",(0,t.jsx)(n.strong,{children:"Power Save Mode"})," work?"]}),"\n",(0,t.jsxs)(n.p,{children:["For most IoT use cases a downlink-initiated channel isn't required.\nIt's usually the device that initiates the communication to send (for example, sensor data).\nTherefore, a ",(0,t.jsx)(n.strong,{children:"Power Save Mode"})," is introduced that allows the device to go to sleep in case it has nothing to send."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Power Save Mode"})," has the following characteristics:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Power Save Mode is like a power off period during which the module only consumes a couple of \u03bcA."}),"\n",(0,t.jsx)(n.li,{children:"The device tells the network how long it's going periodically into PSM (timer T3412 extended)."}),"\n",(0,t.jsx)(n.li,{children:"The device/module isn't reachable during PSM from the outside in downlink."}),"\n",(0,t.jsx)(n.li,{children:"The device can wake up the module and send data (for example, power key, interrupt or pin triggered)."}),"\n",(0,t.jsx)(n.li,{children:"When the device wakes up, it doesn't need to reattach and re-establish a PDN connection (unless it has moved to a different tracking area)."}),"\n",(0,t.jsx)(n.li,{children:"After the device wakes up, it stays in idle mode for a configurable time (timer T3324) to listen for downlink messages (for example, firmware updates)."}),"\n",(0,t.jsx)(n.li,{children:"The actual time the device is then in Power Save Mode is T3412 extended - T3324"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Some modules which have a SIM enabled PIN, (for example, u-blox SARA-R4/SARA-N4) don't go into sleep mode.\nThe PIN is disabled on emnify SIMs."})}),"\n",(0,t.jsx)(n.p,{children:"Roaming for Power Save Mode"}),"\n",(0,t.jsxs)(n.p,{children:["Be aware that not all NB-IoT and LTE-M networks have implemented PSM and even when PSM is available with the local operator this doesn't mean that a roaming SIM can use it.\nThis makes it difficult for devices that are moving - in case they use PSM, and the new network doesn't support PSM - or only other timer configurations.\nemnify therefore regularly test the availability of PSM in the ",(0,t.jsx)(n.a,{href:"https://www.emnify.com/lte-m-coverage?hsLang=en",children:"LTE-M"}),"\xa0and\xa0",(0,t.jsx)(n.a,{href:"https://www.emnify.com/nb-iot-coverage",children:"NB-IoT"}),"\xa0roaming footprint."]}),"\n",(0,t.jsx)(n.p,{children:"AT Command calculation and examples for PSM settings"}),"\n",(0,t.jsxs)(n.p,{children:["The 3GPP defined AT command to configure PSM is\xa0",(0,t.jsx)(n.code,{children:"AT+CPSMS"}),"\xa0which sets the T3412 extended and T3324 timers."]}),"\n",(0,t.jsx)(n.p,{children:"An example command is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"AT+CPSMS=1,,,01001110,00000101\n"})}),"\n",(0,t.jsxs)(n.p,{children:["PSM is enabled (",(0,t.jsx)(n.code,{children:"1"}),") and the desired value for T3412 extended is 140 hours (",(0,t.jsx)(n.code,{children:"01001110"}),") and the desired value for the T3324 timer is 10 seconds (",(0,t.jsx)(n.code,{children:"01001110"}),").\nThe network doesn't necessarily use the desired values but utilizes supported values that are close to the desired values."]}),"\n",(0,t.jsx)(n.p,{children:"To read the effective PSM configuration, use the command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"AT+CPSMS?\n"})}),"\n",(0,t.jsxs)(n.p,{children:["There is a good calculator that translates the intended time settings for 3412 and T3324 available\xa0from ",(0,t.jsx)(n.a,{href:"https://www.thalesgroup.com/en/markets/digital-identity-and-security/iot/resources/developers/psm-calculation-tool",children:"Thales"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Module vendors have also implemented module specific commands, for example Quectel"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"AT+QPSMS"}),"\xa0extends PSM settings"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"AT+QCFG=\u201dpsm/enter\u201d,1"}),"\xa0used to put the module immediately into PSM when the RRC connection is released (not waiting for T3324 to expire)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"AT+QPSMEXTCFG"}),"\xa0modem optimization command with different attributes such as making sure that PSM is randomized between different devices so they don't send data at the same time"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"extended-discontinuous-reception-edrx",children:"Extended Discontinuous Reception (eDRX)"}),"\n",(0,t.jsx)(n.p,{children:"How does eDRX work?"}),"\n",(0,t.jsx)(n.p,{children:"While PSM is focused on uplink-centric use cases, eDRX tries to reduce the power consumption for IoT use cases that get downlink information.\nRegular smartphones don't continuously listen on the radio for an incoming message.\nThey do this only every 1.28 seconds or 2.56 seconds which is called DRX (discontinuous Reception).\neDRX allows configuration of custom intervals of up to 40-175 minutes - depending on the configuration the visited network allows."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"eDRX and the 3412 and T3324 timers",src:i(9306).Z+"",width:"548",height:"394"})}),"\n",(0,t.jsx)(n.p,{children:"Roaming with eDRX"}),"\n",(0,t.jsxs)(n.p,{children:["As with PSM - not all NB-IoT and LTE-M networks support eDRX or the same timer configuration - and even if they do this doesn't guarantee that a roaming SIM card can utilize eDRX.\nemnify therefore also tests and publishes the eDRX availability on our\xa0",(0,t.jsx)(n.a,{href:"https://www.emnify.com/lte-m-coverage?hsLang=en",children:"LTE-M"})," and\xa0",(0,t.jsx)(n.a,{href:"https://www.emnify.com/nb-iot-coverage",children:"NB-IoT"}),"\xa0roaming footprint."]}),"\n",(0,t.jsx)(n.p,{children:"AT Command examples for eDRX settings"}),"\n",(0,t.jsxs)(n.p,{children:["The standard 3GPP defined AT-command to configure eDRX is\xa0",(0,t.jsx)(n.code,{children:"AT+CEDRXS"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["As an example the following command enables (",(0,t.jsx)(n.code,{children:"1"}),") eDRX for LTE-M (",(0,t.jsx)(n.code,{children:"4"}),") and an eDRX cycle of 143.36 seconds (",(0,t.jsx)(n.code,{children:"1000"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'AT+CEDRXS=1,4,"1000"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The setting for NB-IoT would be\xa0",(0,t.jsx)(n.code,{children:"5"}),"\xa0and the timer values are shown in following table:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Binary"}),(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Timer Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0 0 0 0"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"5.12 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0 0 0 1"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"10.24 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0 0 1 0"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"20.48 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0 0 1 1"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"40.96 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0 1 0 0"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"61.44 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0 1 0 1"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"81.92 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0 1 1 0"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"102.40 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0 1 1 1"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"122.88 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1 0 0 0"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"143.36 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1 0 0 1"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"163.84 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1 0 1 0"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"327.68 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1 0 1 1"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"655.36 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1 1 0 0"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"1310.72 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1 1 0 1"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"2621.44 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1 1 1 0"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"5242.88 seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1 1 1 1"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"10485.76 seconds"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"The network responds with the actual effective interval."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'+CEDRXS: [4,"1000","1000","0111"]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"5g-new-radio",children:"5G (New Radio)"}),"\n",(0,t.jsx)(n.p,{children:"5G is the next major technology standard after LTE\u2014which targets three different applications areas:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Enhanced Mobile Broadband (eMBB)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"With faster throughput up to 1Gps+ and more capacity in a local area"}),"\n",(0,t.jsx)(n.li,{children:"Utilizing millimeter wave (MM wave) bands (5Ghz+) for increased throughput"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Massive Machine Type communication (mMTC)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Targeted at IoT application where a multitude of devices are in the same location and need to communicate with low power"}),"\n",(0,t.jsx)(n.li,{children:"LTE-M and NB-IoT often seen as decoupled from 5G to get earlier results will fusion with 5G mMTC"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Ultra-Reliable Low Latency Communications (URLLC)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For missing critical applications that require low latency and reliable data transmission"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As of today, 5G is mainly adopted for eMBB use cases - using a 5G non-standalone (NSA) deployment - meaning that the air interface uses 5G technology whereas the core network is still 4G."}),"\n",(0,t.jsx)(n.p,{children:"emnify has announced its first 5G roaming agreements in August 2020 and since then has reached agreements with more than a dozen network operators worldwide."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9306:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/edrx-b7b0d58398aa9215496e1f9e7dca062c.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var t=i(7294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);