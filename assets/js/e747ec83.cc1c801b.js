"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2291],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?i.createElement(h,o(o({ref:t},d),{},{components:a})):i.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const r={},o="Glossary",l={unversionedId:"glossary",id:"glossary",title:"Glossary",description:"Active SIM",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/glossary",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/glossary.md",tags:[],version:"current",lastUpdatedAt:1686903615,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{},sidebar:"mainDocsSidebar",previous:{title:"Integration guides",permalink:"/integration-guides/"}},s={},p=[{value:"Active SIM",id:"active-sim",level:2},{value:"APN",id:"apn",level:2},{value:"Application token",id:"application-token",level:2},{value:"A2P SMS",id:"a2p-sms",level:2},{value:"Assigned SIM",id:"assigned-sim",level:2},{value:"AT+CREG AT command",id:"atcreg-at-command",level:2},{value:"AuC",id:"auc",level:2},{value:"BIC",id:"bic",level:2},{value:"Callback URL",id:"callback-url",level:2},{value:"Carrier-agnostic network",id:"carrier-agnostic-network",level:2},{value:"Check digit",id:"check-digit",level:2},{value:"Connectivity status",id:"connectivity-status",level:2},{value:"Data RX",id:"data-rx",level:2},{value:"Data session",id:"data-session",level:2},{value:"Data TX",id:"data-tx",level:2},{value:"Data usage (volume)",id:"data-usage-volume",level:2},{value:"DDoS",id:"ddos",level:2},{value:"DNS",id:"dns",level:2},{value:"Dynamic IP",id:"dynamic-ip",level:2},{value:"eDRX",id:"edrx",level:2},{value:"EID",id:"eid",level:2},{value:"Endpoint",id:"endpoint",level:2},{value:"Endpoint status",id:"endpoint-status",level:2},{value:"eSIM",id:"esim",level:2},{value:"eUICC",id:"euicc",level:2},{value:"Event log",id:"event-log",level:2},{value:"Form factor",id:"form-factor",level:2},{value:"GGSN",id:"ggsn",level:2},{value:"Globally\u2013distributed infrastructure",id:"globallydistributed-infrastructure",level:2},{value:"GSM",id:"gsm",level:2},{value:"HLR",id:"hlr",level:2},{value:"HTTP POST request",id:"http-post-request",level:2},{value:"IC",id:"ic",level:2},{value:"ICCID",id:"iccid",level:2},{value:"IMEI",id:"imei",level:2},{value:"IMEI lock",id:"imei-lock",level:2},{value:"IMSI",id:"imsi",level:2},{value:"IPsec",id:"ipsec",level:2},{value:"IP subnet",id:"ip-subnet",level:2},{value:"JSON",id:"json",level:2},{value:"LAC",id:"lac",level:2},{value:"Luhn checksum digit",id:"luhn-checksum-digit",level:2},{value:"MFA Key",id:"mfa-key",level:2},{value:"MSISDN",id:"msisdn",level:2},{value:"MSC",id:"msc",level:2},{value:"OTA",id:"ota",level:2},{value:"OTA Provisioning",id:"ota-provisioning",level:2},{value:"OpenVPN",id:"openvpn",level:2},{value:"P2P SMS",id:"p2p-sms",level:2},{value:"PDP context",id:"pdp-context",level:2},{value:"Private IP",id:"private-ip",level:2},{value:"PSM",id:"psm",level:2},{value:"Public IP",id:"public-ip",level:2},{value:"RESTful API",id:"restful-api",level:2},{value:"SASE",id:"sase",level:2},{value:"SDN",id:"sdn",level:2},{value:"Service profile",id:"service-profile",level:2},{value:"SIM",id:"sim",level:2},{value:"SIM batch",id:"sim-batch",level:2},{value:"SIM hosting fee",id:"sim-hosting-fee",level:2},{value:"SIM profile",id:"sim-profile",level:2},{value:"SIM repository",id:"sim-repository",level:2},{value:"SIM status",id:"sim-status",level:2},{value:"SMPP",id:"smpp",level:2},{value:"SMS console",id:"sms-console",level:2},{value:"SMS firewall",id:"sms-firewall",level:2},{value:"SMS MO",id:"sms-mo",level:2},{value:"SMS MT",id:"sms-mt",level:2},{value:"Source address",id:"source-address",level:2},{value:"Static IP",id:"static-ip",level:2},{value:"Tariff profile",id:"tariff-profile",level:2},{value:"Traffic pooling",id:"traffic-pooling",level:2},{value:"Unassigned SIM",id:"unassigned-sim",level:2},{value:"Usage limit",id:"usage-limit",level:2},{value:"User\u2013defined coverage",id:"userdefined-coverage",level:2},{value:"User\u2013defined networking",id:"userdefined-networking",level:2},{value:"USSD",id:"ussd",level:2},{value:"USSD gateway",id:"ussd-gateway",level:2},{value:"VPC",id:"vpc",level:2},{value:"VPN",id:"vpn",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"glossary"},"Glossary"),(0,n.kt)("h2",{id:"active-sim"},"Active SIM"),(0,n.kt)("p",null,"When a SIM is in the active state, the charges for the SIM are applied.\nThe device can send and receive data and SMS."),(0,n.kt)("h2",{id:"apn"},"APN"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Access Point Name")),(0,n.kt)("p",null,"A gateway between a ",(0,n.kt)("a",{parentName:"p",href:"#gsm"},"GSM"),", GPRS, 3G, or 4G mobile network and another computer network, usually the public Internet.\nThe APN needs to be configured on the device. For emnify, it is ",(0,n.kt)("inlineCode",{parentName:"p"},"em")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"emnify"),"."),(0,n.kt)("h2",{id:"application-token"},"Application token"),(0,n.kt)("p",null,"A unique identification key used to authenticate emnify's APIs.\nAlso used when authenticating the ",(0,n.kt)("a",{parentName:"p",href:"#openvpn"},"OpenVPN")," service."),(0,n.kt)("h2",{id:"a2p-sms"},"A2P SMS"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Application\u2013to\u2013Peer SMS")),(0,n.kt)("p",null,"The SMS sent and received between an application and a device (or vice versa)."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Learn more about the ",(0,n.kt)("a",{parentName:"p",href:"/services/sms"},"SMS types supported by the emnify platform")," and ",(0,n.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/sms-callback.html"},"A2P routing via the emnify REST API"),".")),(0,n.kt)("h2",{id:"assigned-sim"},"Assigned SIM"),(0,n.kt)("p",null,"SIM that has been assigned to an ",(0,n.kt)("a",{parentName:"p",href:"#endpoint"},"endpoint"),"."),(0,n.kt)("h2",{id:"atcreg-at-command"},"AT+CREG AT command"),(0,n.kt)("p",null,"Gives information about the registration status and access technology of the serving cell."),(0,n.kt)("h2",{id:"auc"},"AuC"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Authentication Center")),(0,n.kt)("p",null,"A part of ",(0,n.kt)("a",{parentName:"p",href:"#gsm"},"GSM")," infrastructure, validates any SIM card attempting network connection when a phone has a live network signal."),(0,n.kt)("h2",{id:"bic"},"BIC"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Batch Identification Code")),(0,n.kt)("p",null,"A unique code for ordered SIM cards used to register the SIM cards on the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.emnify.com/sim-inventory"},(0,n.kt)("strong",{parentName:"a"},"SIM Inventory")," page of the emnify Portal"),"."),(0,n.kt)("h2",{id:"callback-url"},"Callback URL"),(0,n.kt)("p",null,"URL that will be called by a service to send and receive data related to an event that caused this action."),(0,n.kt)("h2",{id:"carrier-agnostic-network"},"Carrier-agnostic network"),(0,n.kt)("p",null,"A network that does not limit or prefer any specific network in a country and establishes a connection over any network that is transparent to the device."),(0,n.kt)("h2",{id:"check-digit"},"Check digit"),(0,n.kt)("p",null,"A checksum appended to identification data (e.g., ",(0,n.kt)("a",{parentName:"p",href:"#imei"},"IMEI"),", ",(0,n.kt)("a",{parentName:"p",href:"#eid"},"EID"),", or ",(0,n.kt)("a",{parentName:"p",href:"#iccid"},"ICCID"),") representing the preceding digits and calculated using an algorithm. "),(0,n.kt)("p",null,"Check digits are used to validate the identifier, verify data integrity, and help prevent errors in equipment databases."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Several identifiers have a check digits but can be calculated differently and have different names.\nFor example, ",(0,n.kt)("a",{parentName:"p",href:"#iccid"},"ICCID")," numbers use a ",(0,n.kt)("a",{parentName:"p",href:"#luhn-checksum-digit"},(0,n.kt)("em",{parentName:"a"},"Luhn checksum digit")),", while the last digits of the ",(0,n.kt)("a",{parentName:"p",href:"#eid"},"EID")," are called ",(0,n.kt)("em",{parentName:"p"},"check digits"),".")),(0,n.kt)("h2",{id:"connectivity-status"},"Connectivity status"),(0,n.kt)("p",null,"This is the connectivity status of an ",(0,n.kt)("a",{parentName:"p",href:"#endpoint"},"endpoint"),".\nIt can be set to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Online"),": Device is transmitting or can transmit data through a data tunnel."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Attached"),": Device is attached to a network but has not established a data tunnel."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Offline"),": Device isn\u2019t attached to a network."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Blocked"))),(0,n.kt)("h2",{id:"data-rx"},"Data RX"),(0,n.kt)("p",null,"Data received by the device."),(0,n.kt)("h2",{id:"data-session"},"Data session"),(0,n.kt)("p",null,"A session between opening and closing a data connection to the network."),(0,n.kt)("h2",{id:"data-tx"},"Data TX"),(0,n.kt)("p",null,"Data transmitted by the device."),(0,n.kt)("h2",{id:"data-usage-volume"},"Data usage (volume)"),(0,n.kt)("p",null,"The data that has been used by an endpoint, both transmitted and received."),(0,n.kt)("h2",{id:"ddos"},"DDoS"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Distributed Denial of Service Attack")),(0,n.kt)("p",null,"An attack where the attacker sends multiple requests to a web resource with the aim of exceeding the website\u2019s capacity to handle multiple requests and prevent the website from functioning correctly."),(0,n.kt)("h2",{id:"dns"},"DNS"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Domain Name System")),(0,n.kt)("p",null,"A hierarchical decentralized naming system for computers, services, or any resource connected to the Internet or a private network to map a hostname to an IP address."),(0,n.kt)("h2",{id:"dynamic-ip"},"Dynamic IP"),(0,n.kt)("p",null,"An IP that changes over time."),(0,n.kt)("h2",{id:"edrx"},"eDRX"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Extended Discontinuous Reception")),(0,n.kt)("p",null,"A device configuration that specifies the periodicity in which the device listens for incoming data on the radio.\nInstead of using a periodicity of 2.56ms (DRX) it can be increased up to 40mins, thus reducing power consumption."),(0,n.kt)("h2",{id:"eid"},"EID"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"eUICC Identifier")),(0,n.kt)("p",null,"The eUICC Identifier (EID) provides a unique global serial number for an ",(0,n.kt)("a",{parentName:"p",href:"#euicc"},"eUICC"),".\nIt has a fixed length of 32 digits, as indicated in the following diagram:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A 32-digit EID number: &quot;89049011803455664400046832584675&quot;. The first 18 digits are the EUM Identification Number (EIN). Within those 18 digits, the first two digits are the Major Industry Identifier (Telecom in this example). The next three digits are the Country Code (GER in this example). The next three digits are the eUICC Manufacturer. The final 10 digits of the EIN contain information about the chip, OS, and its version. After the EIN, the following 11 digits are the EUM Specific Identification Number (ESIN). This value is also the eUICC Individual Identification Number. The final two digits of the EID are the Check Digits.",src:a(1347).Z,width:"2738",height:"1040"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The EUM specific identification number (ESIN) and ",(0,n.kt)("a",{parentName:"p",href:"#check-digit"},"check digits")," are for example purposes only, and the values aren't real.")),(0,n.kt)("p",null,"Unlike the ",(0,n.kt)("a",{parentName:"p",href:"#iccid"},"ICCID"),", the EID remains the same throughout the life of the eSIM.\nTherefore, you can use it as a permanent identifier to keep track of your SIM cards."),(0,n.kt)("h2",{id:"endpoint"},"Endpoint"),(0,n.kt)("p",null,"A representation of the device which has a SIM installed."),(0,n.kt)("h2",{id:"endpoint-status"},"Endpoint status"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Also referred to as ",(0,n.kt)("strong",{parentName:"em"},"Device status"))),(0,n.kt)("p",null,"Reflects the current state of the ",(0,n.kt)("a",{parentName:"p",href:"#endpoint"},"endpoint")," or device:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Enabled"),": SIM is ",(0,n.kt)("a",{parentName:"li",href:"#assigned-sim"},"assigned")," to the device and activated."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Disabled"),": No SIM assigned, or the assigned SIM is deactivated."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Deleted"),": Permanently removed from your ",(0,n.kt)("a",{parentName:"li",href:"https://portal.emnify.com/connected-devices"},"Connected Devices"),".")),(0,n.kt)("admonition",{title:"API Reference",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/endpoint.html#endpoint-status-object"},"Endpoint Status Object - emnify REST API"))),(0,n.kt)("h2",{id:"esim"},"eSIM"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Embedded SIM")),(0,n.kt)("p",null,'Because of the "e" (for ',(0,n.kt)("em",{parentName:"p"},"embedded"),") in its name, ",(0,n.kt)("em",{parentName:"p"},"eSIM")," is sometimes incorrectly used for referring to the MFF2 physical form factor of an ",(0,n.kt)("a",{parentName:"p",href:"#euicc"},"eUICC")," chip that is designed to be permanently surface-mounted inside a device.\nWithin the IoT industry, ",(0,n.kt)("em",{parentName:"p"},"eSIM")," refers to the entire solution that is comprised of an eUICC-equipped ",(0,n.kt)("a",{parentName:"p",href:"#sim"},"SIM")," along with the software platform for ",(0,n.kt)("a",{parentName:"p",href:"#ota-provisioning"},"OTA provisioning"),".\nAlthough eSIMs can be embedded directly in a device, they are also manufactured as pluggable SIM cards.\nThe ",(0,n.kt)("a",{parentName:"p",href:"/services/global-iot-sim"},"emnify eSIM")," has capabilities not available with other eSIMs."),(0,n.kt)("h2",{id:"euicc"},"eUICC"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Embedded Universal Integrated Circuit Card")," "),(0,n.kt)("p",null,"The embedded universal integrated circuit card (eUICC) is a component of a ",(0,n.kt)("a",{parentName:"p",href:"#sim"},"SIM")," card.\nIt allows consumers and IoT manufacturers to provision the SIM with a new ",(0,n.kt)("a",{parentName:"p",href:"https://www.emnify.com/iot-glossary/mno"},"operator profile")," ",(0,n.kt)("a",{parentName:"p",href:"#ota"},"over-the-air"),"."),(0,n.kt)("admonition",{title:"Deep dive",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Learn more about the eUICC in our blog post: ",(0,n.kt)("a",{parentName:"p",href:"https://www.emnify.com/iot-glossary/what-is-an-euicc"},"What is an eUICC and why does it matter?"))),(0,n.kt)("h2",{id:"event-log"},"Event log"),(0,n.kt)("p",null,"A log that stores all ",(0,n.kt)("a",{parentName:"p",href:"#endpoint"},"endpoint")," events."),(0,n.kt)("h2",{id:"form-factor"},"Form factor"),(0,n.kt)("p",null,"The form factor of a SIM card represents the SIM card format.\nSIM cards vary in size (Mini vs. Micro vs. Nano), function (embedded vs. standard), and quality (industrial grade vs. standard):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"2FF"),": Mini SIM card"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"3FF"),": Micro SIM card"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"4FF"),": Nano SIM card")),(0,n.kt)("h2",{id:"ggsn"},"GGSN"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Gateway GPRS Support Node"),(0,n.kt)("br",{parentName:"p"}),"\n","Part of the ",(0,n.kt)("a",{parentName:"p",href:"#gsm"},"GSM")," infrastructure, the ",(0,n.kt)("a",{parentName:"p",href:"#ggsn"},"GGSN")," is responsible for the interworking between the GPRS network and external packet switched networks."),(0,n.kt)("h2",{id:"globallydistributed-infrastructure"},"Globally\u2013distributed infrastructure"),(0,n.kt)("p",null,"Cloud infrastructure that is distributed globally, with several local breakout points for better traffic handling."),(0,n.kt)("h2",{id:"gsm"},"GSM"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Global System for Mobile Communications"),"\nA standard developed by the European Telecommunications Standards Institute to describe the protocols for second-generation digital cellular networks used by mobile devices."),(0,n.kt)("h2",{id:"hlr"},"HLR"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Home Location Register")),(0,n.kt)("p",null,"A database from a mobile network in which information from all mobile subscribers is stored.\nPart of ",(0,n.kt)("a",{parentName:"p",href:"#gsm"},"GSM")," infrastructure. "),(0,n.kt)("h2",{id:"http-post-request"},"HTTP POST request"),(0,n.kt)("p",null,"A request method supported by the HTTP protocol, which typically includes data in the request body."),(0,n.kt)("h2",{id:"ic"},"IC"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Integrated Circuit")),(0,n.kt)("p",null,"A semiconductor chip containing a large number of extremely small electronic components, e.g., a CPU, the chips on computer memory cards, the electronic part of a ",(0,n.kt)("a",{parentName:"p",href:"#sim"},"SIM")," card, an ",(0,n.kt)("a",{parentName:"p",href:"#euicc"},"eUICC"),", etc."),(0,n.kt)("h2",{id:"iccid"},"ICCID"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Integrated Circuit Card Identifier")),(0,n.kt)("p",null,"The integrated circuit card identifier (ICCID) is a 20-digit code used to identify a SIM card.\nIt includes a SIM card's country, home network, and identification number, as indicated in the following diagram:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A 20-digit ICCID number: &quot;89883030000080139311&quot;. The first two digits are the Major Industry Identifier (Telecom in this example). The next three digits are the Country Code (non-terrestrial). The following two digits are the Issuer Identifier (emnify). After that, the next 11 digits are the Individual Account Identification. The final digit is the Check Digit.",src:a(5406).Z,width:"1750",height:"879"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Following the introduction of ",(0,n.kt)("a",{parentName:"p",href:"#euicc"},"eUICC")," SIM cards in 2021, there are situations where the ICCID can no longer be unique.\nFor example, the ICCID value can change when a different ",(0,n.kt)("a",{parentName:"p",href:"#sim-profile"},"SIM profile")," is provisioned on the eSIM.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The emnify REST API returns two ICCID values: ",(0,n.kt)("inlineCode",{parentName:"p"},"iccid")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"iccid_with_luhn"),".\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"iccid_with_luhn")," value ",(0,n.kt)("em",{parentName:"p"},"includes")," the final ",(0,n.kt)("a",{parentName:"p",href:"#luhn-checksum-digit"},"Luhn checksum digit"),", while the ",(0,n.kt)("inlineCode",{parentName:"p"},"iccid")," value doesn't. "),(0,n.kt)("p",{parentName:"admonition"},"API references: ",(0,n.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/sim.html#sim-object"},"SIM Object")," and ",(0,n.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/endpoint.html#sim-object"},"Endpoint Object"))),(0,n.kt)("h2",{id:"imei"},"IMEI"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"International Mobile Equipment Identity")),(0,n.kt)("p",null,"A unique number used to identify cellular modems."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},'There are also "software versions" of IMEIs, referred to as ',(0,n.kt)("em",{parentName:"p"},"IMEISVs"),".\nIn an IMEISV, there is no ",(0,n.kt)("a",{parentName:"p",href:"#check-digit"},"check digit"),", and the last two digits represent the Software Version Number (SVN).")),(0,n.kt)("h2",{id:"imei-lock"},"IMEI lock"),(0,n.kt)("p",null,"The practice of strictly associating a SIM to the device with a certain ",(0,n.kt)("a",{parentName:"p",href:"#imei"},"IMEI")," number."),(0,n.kt)("h2",{id:"imsi"},"IMSI"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"International Mobile Subscriber Identity")),(0,n.kt)("p",null,"A unique number used to identify a ",(0,n.kt)("a",{parentName:"p",href:"#gsm"},"GSM")," subscriber."),(0,n.kt)("h2",{id:"ipsec"},"IPsec"),(0,n.kt)("p",null,"A protocol suite for Secure Internet Protocol (IP) communications that works by authenticating and encrypting each IP packet of a communication session."),(0,n.kt)("h2",{id:"ip-subnet"},"IP subnet"),(0,n.kt)("p",null,"A logical subdivision of an IP network."),(0,n.kt)("h2",{id:"json"},"JSON"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"JavaScript Object Notation")),(0,n.kt)("p",null,"A lightweight data-interchange format.\nIt is easier for humans to read and write compared to other formats.\nIt is easy for machines to parse and generate."),(0,n.kt)("h2",{id:"lac"},"LAC"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Location Area Code")),(0,n.kt)("p",null,"A unique 16-digit fixed-length location area identity code that identifies a phone number\u2019s location area."),(0,n.kt)("h2",{id:"luhn-checksum-digit"},"Luhn checksum digit"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"#check-digit"},"check digit")," calculated from the previous digits using the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Luhn_algorithm"},"Luhn algorithm"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Luhn checksum digits are most notably used to validate ",(0,n.kt)("a",{parentName:"p",href:"#iccid"},"ICCID")," and ",(0,n.kt)("a",{parentName:"p",href:"#imei"},"IMEI")," numbers.")),(0,n.kt)("h2",{id:"mfa-key"},"MFA Key"),(0,n.kt)("p",null,"A combination generated by an external device or a service that is used to authenticate the user."),(0,n.kt)("h2",{id:"msisdn"},"MSISDN"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Mobile Station International Subscriber Directory Number")),(0,n.kt)("p",null,"A unique number used to identify a mobile phone number internationally."),(0,n.kt)("h2",{id:"msc"},"MSC"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Mobile Switching Center")),(0,n.kt)("p",null,"The part of ",(0,n.kt)("a",{parentName:"p",href:"#gsm"},"GSM")," architecture that controls the network switching subsystem elements."),(0,n.kt)("h2",{id:"ota"},"OTA"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Over\u2013the\u2013Air")),(0,n.kt)("p",null,"A method of wireless distribution of the software, configuration settings, or encryption keys."),(0,n.kt)("h2",{id:"ota-provisioning"},"OTA Provisioning"),(0,n.kt)("p",null,"A technology that allows changes to the SIM memory ",(0,n.kt)("a",{parentName:"p",href:"#ota"},"over\u2013the\u2013air"),"."),(0,n.kt)("h2",{id:"openvpn"},"OpenVPN"),(0,n.kt)("p",null,"An open-source software application that implements ",(0,n.kt)("a",{parentName:"p",href:"#vpn"},"virtual private network (VPN)")," techniques for creating secure point\u2013to\u2013point or site\u2013to\u2013site connections in routed or bridged configurations and remote access facilities."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/services/openvpn"},"emnify hosts an OpenVPN service")," that allows you to establish a private network between a device and any remote client location.")),(0,n.kt)("h2",{id:"p2p-sms"},"P2P SMS"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Peer\u2013to\u2013Peer SMS")),(0,n.kt)("p",null,"SMS sent from a device with any SIM to a device with the emnify SIM."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Learn more about the ",(0,n.kt)("a",{parentName:"p",href:"/services/sms"},"SMS types supported by the emnify platform")," and ",(0,n.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/sms-callback.html"},"P2P routing via the emnify REST API"),".")),(0,n.kt)("h2",{id:"pdp-context"},"PDP context"),(0,n.kt)("p",null,"Data structure present on both the serving GPRS support node (SGSN) and the ",(0,n.kt)("a",{parentName:"p",href:"#ggsn"},"gateway GPRS support node (GGSN)"),", which contains the subscriber\u2019s session information when the subscriber has an active session."),(0,n.kt)("h2",{id:"private-ip"},"Private IP"),(0,n.kt)("p",null,"An IP address that is not reachable from the public Internet but only through a local or virtual network.\n",(0,n.kt)("a",{parentName:"p",href:"#dynamic-ip"},"Dynamic private IPs")," keep changing, whereas static private IP addresses don't change."),(0,n.kt)("h2",{id:"psm"},"PSM"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Power Saving Mode")),(0,n.kt)("p",null,"While in PSM, the device tells the network that it will power off for a specific time and will send periodic updates in longer-than-usual intervals.\nWhen the device comes back online, it does not need to reattach to a network but can use an already-created PDP context, thus saving power."),(0,n.kt)("h2",{id:"public-ip"},"Public IP"),(0,n.kt)("p",null,"An IP address accessible from the public Internet."),(0,n.kt)("h2",{id:"restful-api"},"RESTful API"),(0,n.kt)("p",null,"The representational state transfer application programming interface allows you to integrate services with your applications."),(0,n.kt)("h2",{id:"sase"},"SASE"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Secure Access Service Edge")),(0,n.kt)("p",null,"SASE is a term coined by Gartner which combines software-defined networking (",(0,n.kt)("a",{parentName:"p",href:"#sdn"},"SDN"),") and security and serves it as cloud-based Security-as-a-Service."),(0,n.kt)("h2",{id:"sdn"},"SDN"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Software\u2013Defined Networking")),(0,n.kt)("p",null,"An approach that allows network administrators to programmatically initialize, control, change and manage network behavior dynamically via open interfaces."),(0,n.kt)("h2",{id:"service-profile"},"Service profile"),(0,n.kt)("p",null,"A profile that defines the services and functionality of a device managed through the emnify platform."),(0,n.kt)("h2",{id:"sim"},"SIM"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Subscriber Identification Module")),(0,n.kt)("p",null,"A subscriber identification module (SIM) contains an integrated circuit (",(0,n.kt)("a",{parentName:"p",href:"#ic"},"IC"),") that is often mounted on a plastic card.\nPluggable SIMs mounted on plastic cards are offered in various form factors.\nA SIM stores data used to identify a subscriber (",(0,n.kt)("a",{parentName:"p",href:"#imsi"},"IMSI"),") along with other network information for connecting and authenticating with a ",(0,n.kt)("a",{parentName:"p",href:"https://www.emnify.com/iot-glossary/mno"},"mobile network operator (MNO)"),".\nSee also ",(0,n.kt)("a",{parentName:"p",href:"#esim"},"eSIM - Embedded SIM"),"."),(0,n.kt)("h2",{id:"sim-batch"},"SIM batch"),(0,n.kt)("p",null,"A collection of SIM cards that can be registered with a single ",(0,n.kt)("a",{parentName:"p",href:"#bic"},"BIC")," code."),(0,n.kt)("h2",{id:"sim-hosting-fee"},"SIM hosting fee"),(0,n.kt)("p",null,"Monthly fee for an active SIM."),(0,n.kt)("h2",{id:"sim-profile"},"SIM profile"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://www.emnify.com/iot-glossary/mno"},"mobile network operator (MNO)")," ID information stored in the SIM\u2019s memory."),(0,n.kt)("h2",{id:"sim-repository"},"SIM repository"),(0,n.kt)("p",null,"All SIMs assigned to your organization."),(0,n.kt)("h2",{id:"sim-status"},"SIM status"),(0,n.kt)("p",null,"Reflects the current state of the ",(0,n.kt)("a",{parentName:"p",href:"#sim"},"SIM")," in the ",(0,n.kt)("a",{parentName:"p",href:"/services/sim-lifecycle-management"},"SIM lifecycle"),"."),(0,n.kt)("admonition",{title:"API reference",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/sim.html#status-object"},"SIM Status Object - emnify REST API"))),(0,n.kt)("h2",{id:"smpp"},"SMPP"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Short Message Peer\u2013to\u2013Peer")),(0,n.kt)("p",null,"A protocol used by the telecommunications industry for exchanging SMS messages between short message service centers (SMSC) and/or external short messaging entities (ESME)."),(0,n.kt)("h2",{id:"sms-console"},"SMS console"),(0,n.kt)("p",null,"An interface to send ",(0,n.kt)("a",{parentName:"p",href:"#a2p-sms"},"A2P SMS")," from the platform to the SIM card."),(0,n.kt)("h2",{id:"sms-firewall"},"SMS firewall"),(0,n.kt)("p",null,"A firewall that controls the SMS flow."),(0,n.kt)("h2",{id:"sms-mo"},"SMS MO"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Mobile originated SMS")),(0,n.kt)("p",null,"SMS sent from the device with the emnify SIM."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Learn more about the ",(0,n.kt)("a",{parentName:"p",href:"/services/sms"},"SMS types supported by the emnify platform"),".")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Using the emnify REST API, you can dispatch MO SMS from devices as HTTP ",(0,n.kt)("inlineCode",{parentName:"p"},"POST")," requests toward a user-configurable URL."),(0,n.kt)("p",{parentName:"admonition"},"Read more: ",(0,n.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/sms-callback.html"},"Receive MO SMS via API Callback"))),(0,n.kt)("h2",{id:"sms-mt"},"SMS MT"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Mobile terminated SMS")),(0,n.kt)("p",null,"SMS that are received by a device with an emnify SIM."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Learn more about the ",(0,n.kt)("a",{parentName:"p",href:"/services/sms"},"SMS types supported by the emnify platform"),".")),(0,n.kt)("h2",{id:"source-address"},"Source address"),(0,n.kt)("p",null,"The address of the SMS sender as displayed on the receiving device."),(0,n.kt)("h2",{id:"static-ip"},"Static IP"),(0,n.kt)("p",null,"An IP that doesn\u2019t change over time."),(0,n.kt)("h2",{id:"tariff-profile"},"Tariff profile"),(0,n.kt)("p",null,"A profile that defines which networks or countries SIM should operate in."),(0,n.kt)("h2",{id:"traffic-pooling"},"Traffic pooling"),(0,n.kt)("p",null,"A term used to describe the service model when various ",(0,n.kt)("a",{parentName:"p",href:"#endpoint"},"endpoints")," utilize the same data pool."),(0,n.kt)("h2",{id:"unassigned-sim"},"Unassigned SIM"),(0,n.kt)("p",null,"SIM that had been unassigned from an ",(0,n.kt)("a",{parentName:"p",href:"#endpoint"},"endpoint"),"."),(0,n.kt)("h2",{id:"usage-limit"},"Usage limit"),(0,n.kt)("p",null,"User\u2013defined limit of consumption of a certain service (data, SMS) per endpoint."),(0,n.kt)("h2",{id:"userdefined-coverage"},"User\u2013defined coverage"),(0,n.kt)("p",null,"An ability to select which operator the customer\u2019s SIM connects to."),(0,n.kt)("h2",{id:"userdefined-networking"},"User\u2013defined networking"),(0,n.kt)("p",null,"An approach that enables users to create their own virtual mobile network, define service and security policies and provision ",(0,n.kt)("a",{parentName:"p",href:"#tariff-profile"},"tariff profiles")," and data packages."),(0,n.kt)("h2",{id:"ussd"},"USSD"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Unstructured Supplementary Service Data")),(0,n.kt)("p",null,"A protocol used to communicate with the service provider\u2019s computers."),(0,n.kt)("h2",{id:"ussd-gateway"},"USSD gateway"),(0,n.kt)("p",null,"The collection of hardware and software required to interconnect two or more disparate networks, including performing protocol conversion."),(0,n.kt)("h2",{id:"vpc"},"VPC"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Virtual Private Cloud")),(0,n.kt)("p",null,"A secure private cloud hosted within a public cloud where you can host websites, store data, run applications, etc."),(0,n.kt)("h2",{id:"vpn"},"VPN"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Virtual Private Network")),(0,n.kt)("p",null,"A service that protects your internet connection and privacy online."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"IPSec and ",(0,n.kt)("a",{parentName:"p",href:"#openvpn"},"OpenVPN")," are both protocols for securing data transmission through a VPN."),(0,n.kt)("p",{parentName:"admonition"},"Learn more: ",(0,n.kt)("a",{parentName:"p",href:"https://www.emnify.com/iot-glossary/ipsec-vs-openvpn"},"IPSec vs OpenVPN: What's the difference?"))))}c.isMDXComponent=!0},1347:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/infographic-eid-digits-5116832d00c339c915dfedb2f8784e51.png"},5406:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/infographic-iccid-digits-5084bca2de27b7c4bb1b1255b22b8c23.png"}}]);