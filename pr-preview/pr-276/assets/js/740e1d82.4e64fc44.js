"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8626],{8580:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=s(5893),t=s(1151);const r={description:"Configure the emnify APN for the most common GPS tracker vendors",last_update:{date:"08-09-2023"},sidebar_label:"GPS trackers",slug:"/apn-configuration/gps-trackers"},o="Configure the APN on GPS trackers",c={id:"quickstart/apn-configuration/gps-trackers",title:"Configure the APN on GPS trackers",description:"Configure the emnify APN for the most common GPS tracker vendors",source:"@site/docs/quickstart/apn-configuration/gps-trackers.md",sourceDirName:"quickstart/apn-configuration",slug:"/apn-configuration/gps-trackers",permalink:"/pr-preview/pr-276/apn-configuration/gps-trackers",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1691539200,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{description:"Configure the emnify APN for the most common GPS tracker vendors",last_update:{date:"08-09-2023"},sidebar_label:"GPS trackers",slug:"/apn-configuration/gps-trackers"},sidebar:"mainDocsSidebar",previous:{title:"Cellular modules",permalink:"/pr-preview/pr-276/apn-configuration/cellular-modules"},next:{title:"Industrial routers",permalink:"/pr-preview/pr-276/apn-configuration/industrial-routers"}},l={},a=[{value:"Teltonika",id:"teltonika",level:2},{value:"Teltonika Configurator",id:"teltonika-configurator",level:3},{value:"emnify Portal SMS console",id:"sms-console-teltonika",level:3},{value:"emnify REST API",id:"rest-api-teltonika",level:3},{value:"Ruptela",id:"ruptela",level:2},{value:"Ruptela Device Center",id:"ruptela-device-center",level:3},{value:"emnify Portal SMS console",id:"sms-console-ruptela",level:3},{value:"emnify REST API",id:"rest-api-ruptela",level:3},{value:"Concox",id:"concox",level:2},{value:"emnify Portal SMS console",id:"sms-console-concox",level:3},{value:"emnify REST API",id:"rest-api-concox",level:3},{value:"Coban",id:"coban",level:2},{value:"emnify Portal SMS console",id:"sms-console-coban",level:3},{value:"emnify REST API",id:"rest-api-coban",level:3},{value:"Meitrack",id:"meitrack",level:2},{value:"Meitrack Manager",id:"meitrack-manager",level:3},{value:"emnify Portal SMS console",id:"sms-console-meitrack",level:3},{value:"Elinz",id:"elinz",level:2},{value:"emnify Portal SMS console",id:"sms-console-elinz",level:3},{value:"ReachFar",id:"reachfar",level:2},{value:"emnify Portal SMS console",id:"sms-console-reachfar",level:3},{value:"Queclink",id:"queclink",level:2},{value:"emnify Portal SMS console",id:"sms-console-queclink",level:3},{value:"Bitrek",id:"bitrek",level:2},{value:"emnify Portal SMS console",id:"sms-console-bitrek",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configure-the-apn-on-gps-trackers",children:"Configure the APN on GPS trackers"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["For GPS vendors that aren't listed, please consult their respective manuals and configure the APN to be ",(0,i.jsx)(n.code,{children:"em"})," or ",(0,i.jsx)(n.code,{children:"emnify"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"teltonika",children:"Teltonika"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to FMB110, FMB120, FM130, FMB140, FMC001, FMM001, FMC125, FMC130, FMC640, FMM125, FMM130, FMM640, FMP100, FMB001, FMB002, FMB003, FMB010"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You have three options for configuring the APN on Teltonika GPS trackers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["With the ",(0,i.jsx)(n.a,{href:"#teltonika-configurator",children:"Teltonika Configurator"})," over a USB or Bluetooth connection"]}),"\n",(0,i.jsxs)(n.li,{children:["Through the ",(0,i.jsx)(n.a,{href:"#sms-console-teltonika",children:"emnify Portal SMS console"})," (recommended)"]}),"\n",(0,i.jsxs)(n.li,{children:["Via SMS through the ",(0,i.jsx)(n.a,{href:"#rest-api-teltonika",children:"emnify REST API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (best option when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"reference",type:"note",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://wiki.teltonika-gps.com/view/Universal_Device_Test_Guide_V3.2",children:"Source Teltonika GPS documentation"})})}),"\n",(0,i.jsx)(n.h3,{id:"teltonika-configurator",children:"Teltonika Configurator"}),"\n",(0,i.jsxs)(n.p,{children:["Teltonika offers the Teltonika Configurator, a graphical user interface, to set device-specific parameters via USB or Bluetooth (for example, the APN and telematics server).\nFor usage instructions, see ",(0,i.jsx)(n.a,{href:"https://wiki.teltonika-gps.com/view/Universal_Device_Test_Guide",children:"Teltonika's Universal Device Test Guide"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"sms-console-teltonika",children:"emnify Portal SMS console"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Newer Teltonika GPS versions automatically detect the emnify APN setting."})}),"\n",(0,i.jsxs)(n.p,{children:["First, turn on your device and ensure the device and emnify SIM card are activated.\nIf you still need to do this, follow the ",(0,i.jsx)(n.a,{href:"/quickstart/create-device",children:"Create device"})," guide."]}),"\n",(0,i.jsx)(n.p,{children:"Then, follow these steps to set up the APN:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to your ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Connected Devices"})," and find your Teltonika GPS tracker.\nTurning on the GPS tracker for the first time after installing the SIM shows the status as ",(0,i.jsx)(n.strong,{children:"Attached"}),".\nThe device can receive SMS at this point but only establish a data session if the APN is set up or detected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/portal/sms#open-the-sms-console",children:"Open the SMS console"})," and send the command corresponding to your device settings."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you've set a username and password for the device, use the following SMS command to set the APN:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"USERNAME PASSWORD setparam 2001:em\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"USERNAME"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"PASSWORD"})})," with your credentials."]}),"\n",(0,i.jsx)(n.p,{children:"Otherwise, if there's no username or password configured, use the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  setparam 2001:em\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"The two leading spaces are required."})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"https://wiki.teltonika-gps.com/view/Template:FMB_Device_Family_Parameter_list",children:"Teltonika FMB Device Family Parameter list"})," for all available parameters."]})}),"\n",(0,i.jsx)(n.h3,{id:"rest-api-teltonika",children:"emnify REST API"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"SMS calls in the emnify REST API"})," to automate the device configuration."]}),"\n",(0,i.jsxs)(n.p,{children:["To send SMS to a device, use ",(0,i.jsxs)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointSmsByIdPost",children:[(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:"/api/v1/endpoint/{endpoint_id}/sms"})]})," with the following request body:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{ \n  "source_address": "123456789",\n  "payload": "  setparam 2001:em" \n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"123456789"})})," with your chosen source address."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/getting-started.html",children:"Getting started"})," guide in the emnify System Documentation to learn how to authenticate and use the API."]})}),"\n",(0,i.jsx)(n.h2,{id:"ruptela",children:"Ruptela"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to HCV5, LCV5, Pro5, Trace5/NA, FM-Tco4 HCV/HCV 3G, FM-Tco4 LCV/LCV 3G, FM-Pro4/Pro4 3G, FM-Eco4/4+, FM-Eco4 light/light+/3G, FM-Eco4 S Series, FM-Eco4 T Series, FM-Plug4"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You have three options for configuring the APN on Ruptela GPS trackers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["With the ",(0,i.jsx)(n.a,{href:"#ruptela-device-center",children:"Ruptela Device Center"})," over a USB or Bluetooth connection"]}),"\n",(0,i.jsxs)(n.li,{children:["Through the ",(0,i.jsx)(n.a,{href:"#sms-console-ruptela",children:"emnify Portal SMS console"})," (recommended)"]}),"\n",(0,i.jsxs)(n.li,{children:["Via SMS through the ",(0,i.jsx)(n.a,{href:"#rest-api-ruptela",children:"emnify REST API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (best option when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"reference",type:"note",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://doc.ruptela.lt/display/AB/Tracking+devices",children:"Source Ruptela Documentation"})})}),"\n",(0,i.jsx)(n.h3,{id:"ruptela-device-center",children:"Ruptela Device Center"}),"\n",(0,i.jsx)(n.p,{children:"The Ruptela Device Center allows you to set device-specific parameters via USB or Bluetooth."}),"\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.strong,{children:"APN"}),", enter ",(0,i.jsx)(n.code,{children:"em"})," as the ",(0,i.jsx)(n.strong,{children:"Name"}),".\nLeave the ",(0,i.jsx)(n.strong,{children:"Username"})," and ",(0,i.jsx)(n.strong,{children:"Password"})," blank."]}),"\n",(0,i.jsx)(n.h3,{id:"sms-console-ruptela",children:"emnify Portal SMS console"}),"\n",(0,i.jsxs)(n.p,{children:["First, turn on your device and ensure the device and emnify SIM card are activated.\nIf you still need to do this, follow the ",(0,i.jsx)(n.a,{href:"/quickstart/create-device",children:"Create device"})," guide."]}),"\n",(0,i.jsx)(n.p,{children:"Then, follow these steps to set up the APN:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to your ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Connected Devices"})," and find your Ruptela GPS tracker.\nTurning on the GPS tracker for the first time after installing the SIM shows the status as ",(0,i.jsx)(n.strong,{children:"Attached"}),".\nThe device can receive SMS at this point but only establish a data session if the APN is set up or detected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/portal/sms#open-the-sms-console",children:"Open the SMS console"})," and send the following SMS command:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"[SMSpassword] setconnection em\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"[SMSpassword]"})})," with your ",(0,i.jsx)(n.code,{children:"SMSpassword"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["You can set up the ",(0,i.jsx)(n.code,{children:"SMSpassword"})," in the Ruptela Device Center.\nIf you haven't set the ",(0,i.jsx)(n.code,{children:"SMSpassword"}),", the command is:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"setconnection em\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"rest-api-ruptela",children:"emnify REST API"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"SMS calls in the emnify REST API"})," to automate the device configuration."]}),"\n",(0,i.jsxs)(n.p,{children:["To send SMS to a device, use ",(0,i.jsxs)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointSmsByIdPost",children:[(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:"/api/v1/endpoint/{endpoint_id}/sms"})]})," with the following request body:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{ \n  "source_address": "123456789",\n  "payload": "setconnection em" \n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"123456789"})})," with your chosen source address."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/getting-started.html",children:"Getting started"})," guide in the emnify System Documentation to learn how to authenticate and use the API."]})}),"\n",(0,i.jsx)(n.h2,{id:"concox",children:"Concox"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to JM-VL01, JM-VL02, JM-BL11, JM-VL03, JM-VL04, JM-LL01, JM-LL02, JM-LL301, X3, WeTrack140, WeTrack2, WeTrack lite, Bl10, GT06N, OB22, ET25, HVT001, EG02, JM-VG01U, JM-VG02U, JM-VG04Q, AT1-AT6, CT10, JM-LG01, JM-LG05, TBT100"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You have two options for configuring the APN on Concox GPS trackers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Through the ",(0,i.jsx)(n.a,{href:"#sms-console-concox",children:"emnify Portal SMS console"})," (recommended)"]}),"\n",(0,i.jsxs)(n.li,{children:["Via SMS through the ",(0,i.jsx)(n.a,{href:"#rest-api-concox",children:"emnify REST API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (best option when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sms-console-concox",children:"emnify Portal SMS console"}),"\n",(0,i.jsxs)(n.p,{children:["First, turn on your device and ensure the device and emnify SIM card are activated.\nIf you still need to do this, follow the ",(0,i.jsx)(n.a,{href:"/quickstart/create-device",children:"Create device"})," guide."]}),"\n",(0,i.jsx)(n.p,{children:"Then, follow these steps to set up the APN:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to your ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Connected Devices"})," and find your Concox GPS tracker.\nTurning on the GPS tracker for the first time after installing the SIM shows the status as ",(0,i.jsx)(n.strong,{children:"Attached"}),".\nThe device can receive SMS at this point but only establish a data session if the APN is set up or detected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/portal/sms#open-the-sms-console",children:"Open the SMS console"})," and send the following command:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"APN em#\n"})}),"\n",(0,i.jsx)(n.p,{children:"For some Concox models, like TR02, you need to send the password with the command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"APN,666666,em#\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The default password is ",(0,i.jsx)(n.code,{children:"666666"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"rest-api-concox",children:"emnify REST API"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"SMS calls in the emnify REST API"})," to automate the device provisioning."]}),"\n",(0,i.jsxs)(n.p,{children:["To send SMS to a device, use ",(0,i.jsxs)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointSmsByIdPost",children:[(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:"/api/v1/endpoint/{endpoint_id}/sms"})]})," with the following request body:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{ \n  "source_address": "123456789",\n  "payload": "APN,666666,em#" \n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"123456789"})})," with your chosen source address and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"666666"})})," with your password if it varies from the default."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/getting-started.html",children:"Getting started"})," guide in the emnify System Documentation to learn how to authenticate and use the API."]})}),"\n",(0,i.jsx)(n.h2,{id:"coban",children:"Coban"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to Coban TK104, GPS303X, GPS103X, GPS306X, LK209, etc."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You have two options for configuring the APN on Coban GPS trackers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Through the ",(0,i.jsx)(n.a,{href:"#sms-console-coban",children:"emnify Portal SMS console"})," (recommended)"]}),"\n",(0,i.jsxs)(n.li,{children:["Via SMS through the ",(0,i.jsx)(n.a,{href:"#rest-api-coban",children:"emnify REST API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (best option when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sms-console-coban",children:"emnify Portal SMS console"}),"\n",(0,i.jsxs)(n.p,{children:["First, turn on your device and ensure the device and emnify SIM card are activated.\nIf you still need to do this, follow the ",(0,i.jsx)(n.a,{href:"/quickstart/create-device",children:"Create device"})," guide."]}),"\n",(0,i.jsx)(n.p,{children:"Then, follow these steps to set up the APN:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to your ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Connected Devices"})," and find your Coban GPS tracker.\nTurning on the GPS tracker for the first time after installing the SIM shows the status as ",(0,i.jsx)(n.strong,{children:"Attached"}),".\nThe device can receive SMS at this point but only establish a data session if the APN is set up or detected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/portal/sms#open-the-sms-console",children:"Open the SMS console"})," and send the following commands.\nYou can specify the source address in the ",(0,i.jsx)(n.strong,{children:"Source"})," field."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To turn on GPSR:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"gprs[PASSWORD]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"[PASSWORD]"})})," with your password."]}),"\n",(0,i.jsx)(n.p,{children:"To set the APN:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"APN[PASSWORD] em\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"[PASSWORD]"})})," with your password."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The default password is ",(0,i.jsx)(n.code,{children:"123456"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["There are no spaces between ",(0,i.jsx)(n.code,{children:"gprs"}),"/",(0,i.jsx)(n.code,{children:"APN"})," and the password."]})}),"\n",(0,i.jsx)(n.h3,{id:"rest-api-coban",children:"emnify REST API"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"SMS calls in the emnify REST API"})," to automate the device provisioning."]}),"\n",(0,i.jsxs)(n.p,{children:["To send SMS to a device, use ",(0,i.jsxs)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointSmsByIdPost",children:[(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:"/api/v1/endpoint/{endpoint_id}/sms"})]})," with the following request body:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{ \n  "source_address": "7890",\n  "payload": "APN123456 em" \n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"7890"})})," with your chosen source address and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"123456"})})," with your password if it varies from the default."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/getting-started.html",children:"Getting started"})," guide in the emnify System Documentation to learn how to authenticate and use the API."]})}),"\n",(0,i.jsx)(n.h2,{id:"meitrack",children:"Meitrack"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to P88L, P99, MT90, T663L, T333, T366, T399, TS299L, TC68L, TC68SG, T622, K211G, T355G"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You have three options for configuring the APN on Meitrack GPS trackers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["With the ",(0,i.jsx)(n.a,{href:"#meitrack-manager",children:"Meitrack Manager"})," over a USB connection"]}),"\n",(0,i.jsxs)(n.li,{children:["Through the ",(0,i.jsx)(n.a,{href:"#sms-console-meitrack",children:"emnify Portal SMS console"})," (recommended)"]}),"\n",(0,i.jsxs)(n.li,{children:["Via SMS through the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"emnify REST API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (best option when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"meitrack-manager",children:"Meitrack Manager"}),"\n",(0,i.jsxs)(n.p,{children:["Meitrack offers the Meitrack Manager, a graphical user interface, to set device-specific parameters via USB (for example, the APN or user credentials).\nFor usage instructions, see the ",(0,i.jsx)(n.a,{href:"https://www.meitrack.com/cd-download/Aided_Software/MEITRACK_Manager_User_Guide_(New_Version).pdf",children:"Meitrack Manager User Guide"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"sms-console-meitrack",children:"emnify Portal SMS console"}),"\n",(0,i.jsxs)(n.p,{children:["First, turn on your device and ensure the device and emnify SIM card are activated.\nIf you still need to do this, follow the ",(0,i.jsx)(n.a,{href:"/quickstart/create-device",children:"Create device"})," guide."]}),"\n",(0,i.jsx)(n.p,{children:"Then, follow these steps to set up the APN:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to your ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Connected Devices"})," and find your Meitrack GPS tracker.\nTurning on the GPS tracker for the first time after installing the SIM shows the status as ",(0,i.jsx)(n.strong,{children:"Attached"}),".\nThe device can receive SMS at this point but only establish a data session if the APN is set up or detected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/portal/sms#open-the-sms-console",children:"Open the SMS console"})," and send the following command:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"0000,A81,em,,\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"0000"})," is the default SMS password."]})}),"\n",(0,i.jsxs)(n.p,{children:["On other devices, use the ",(0,i.jsx)(n.code,{children:"A21"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"666888,A21,1,server.meigps.com,8800,em,,\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"666888"})," is the default super password, not the SMS password."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"You can change both the SMS and super password.\nIn that case, you need to replace those values in the SMS command."})}),"\n",(0,i.jsx)(n.h2,{id:"elinz",children:"Elinz"}),"\n",(0,i.jsx)(n.p,{children:"You have two options for configuring the APN on Elinz GPS trackers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Through the ",(0,i.jsx)(n.a,{href:"#sms-console-elinz",children:"emnify Portal SMS console"})," (recommended)"]}),"\n",(0,i.jsxs)(n.li,{children:["Via SMS through the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"emnify REST API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (best option when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sms-console-elinz",children:"emnify Portal SMS console"}),"\n",(0,i.jsxs)(n.p,{children:["First, turn on your device and ensure the device and emnify SIM card are activated.\nIf you still need to do this, follow the ",(0,i.jsx)(n.a,{href:"/quickstart/create-device",children:"Create device"})," guide."]}),"\n",(0,i.jsx)(n.p,{children:"Then, follow these steps to set up the APN:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to your ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Connected Devices"})," and find your Elinz GPS tracker.\nTurning on the GPS tracker for the first time after installing the SIM shows the status as ",(0,i.jsx)(n.strong,{children:"Attached"}),".\nThe device can receive SMS at this point but only establish a data session if the APN is set up or detected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/portal/sms#open-the-sms-console",children:"Open the SMS console"})," and send the command corresponding to your device model."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For Elinz GPS trackers:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"APN,em#\n"})}),"\n",(0,i.jsx)(n.p,{children:"For other models:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apnPASSWORD em\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"PASSWORD"})})," with your password."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The default password is ",(0,i.jsx)(n.code,{children:"123456"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"reachfar",children:"ReachFar"}),"\n",(0,i.jsx)(n.p,{children:"You have two options for configuring the APN on ReachFar GPS trackers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Through the ",(0,i.jsx)(n.a,{href:"#sms-console-reachfar",children:"emnify Portal SMS console"})," (recommended)"]}),"\n",(0,i.jsxs)(n.li,{children:["Via SMS through the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"emnify REST API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (best option when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sms-console-reachfar",children:"emnify Portal SMS console"}),"\n",(0,i.jsxs)(n.p,{children:["First, turn on your device and ensure the device and emnify SIM card are activated.\nIf you still need to do this, follow the ",(0,i.jsx)(n.a,{href:"/quickstart/create-device",children:"Create device"})," guide."]}),"\n",(0,i.jsx)(n.p,{children:"Then, follow these steps to set up the APN:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to your ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Connected Devices"})," and find your ReachFar GPS tracker.\nTurning on the GPS tracker for the first time after installing the SIM shows the status as ",(0,i.jsx)(n.strong,{children:"Attached"}),".\nThe device can receive SMS at this point but only establish a data session if the APN is set up or detected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/portal/sms#open-the-sms-console",children:"Open the SMS console"})," and send the command corresponding to your device model."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to RF-V6+, RF-V8, RF-V8S, RF-V13, RF-V16, RF-V18, RF-V20"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You need to send two SMS commands.\nFirst, to bind the tracker to a specific phone number:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"PASSWORD,sos1,PHONE_NUMBER#\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"PASSWORD"})})," with your password and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"PHONE_NUMBER"})})," with the correctly formatted phone number (for example, ",(0,i.jsx)(n.code,{children:"49173871878"})," instead of ",(0,i.jsx)(n.code,{children:"+49173871878"}),")."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"123456"})," is the default SMS password."]})}),"\n",(0,i.jsx)(n.p,{children:"Next, to send this SMS from the phone:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apn,em,plmn,90143#\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"After setting the APN, you need to reboot the GPS tracker."})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to RF-V26, RF-V26+, RF-V28, RF-V30, RF-V32, RF-V34, RF-V36, RF-V36, RF-V38, RF-V40, RF-V42, RF-V43\uff0cRF-V44, RF-V46"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You need to send two SMS commands.\nFirst, to bind the tracker to a specific phone:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"pw,123456,center,PHONE_NUMBER#\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"123456"})})," with your password and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"PHONE_NUMBER"})})," with the phone number."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"123456"})," is the default password."]})}),"\n",(0,i.jsx)(n.p,{children:"Next, to send this SMS from the phone:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apn,em#\n"})}),"\n",(0,i.jsx)(n.h2,{id:"queclink",children:"Queclink"}),"\n",(0,i.jsx)(n.p,{children:"You have two options for configuring the APN on Queclink GPS trackers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Through the ",(0,i.jsx)(n.a,{href:"#sms-console-queclink",children:"emnify Portal SMS console"})," (recommended)"]}),"\n",(0,i.jsxs)(n.li,{children:["Via SMS through the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"emnify REST API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (best option when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sms-console-queclink",children:"emnify Portal SMS console"}),"\n",(0,i.jsxs)(n.p,{children:["First, turn on your device and ensure the device and emnify SIM card are activated.\nIf you still need to do this, follow the ",(0,i.jsx)(n.a,{href:"/quickstart/create-device",children:"Create device"})," guide."]}),"\n",(0,i.jsx)(n.p,{children:"Then, follow these steps to set up the APN:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to your ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Connected Devices"})," and find your Queclink GPS tracker.\nTurning on the GPS tracker for the first time after installing the SIM shows the status as ",(0,i.jsx)(n.strong,{children:"Attached"}),".\nThe device can receive SMS at this point but only establish a data session if the APN is set up or detected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/portal/sms#open-the-sms-console",children:"Open the SMS console"})," and send the following command:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"AT+GTBSI=PASSWORD,em,,,,,,,0002$\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"PASSWORD"})})," with your password."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The default password is the device model (for example, ",(0,i.jsx)(n.code,{children:"gl200"}),")."]})}),"\n",(0,i.jsx)(n.h2,{id:"bitrek",children:"Bitrek"}),"\n",(0,i.jsx)(n.p,{children:"You have two options for configuring the APN on Bitrek GPS trackers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Through the ",(0,i.jsx)(n.a,{href:"#sms-console-bitrek",children:"emnify Portal SMS console"})," (recommended)"]}),"\n",(0,i.jsxs)(n.li,{children:["Via SMS through the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"emnify REST API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (best option when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sms-console-bitrek",children:"emnify Portal SMS console"}),"\n",(0,i.jsxs)(n.p,{children:["First, turn on your device and ensure the device and emnify SIM card are activated.\nIf you still need to do this, follow the ",(0,i.jsx)(n.a,{href:"/quickstart/create-device",children:"Create device"})," guide."]}),"\n",(0,i.jsx)(n.p,{children:"Then, follow these steps to set up the APN:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to your ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Connected Devices"})," and find your Bitrek GPS tracker.\nTurning on the GPS tracker for the first time after installing the SIM shows the status as ",(0,i.jsx)(n.strong,{children:"Attached"}),".\nThe device can receive SMS at this point but only establish a data session if the APN is set up or detected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/portal/sms#open-the-sms-console",children:"Open the SMS console"})," and send the following command:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"setparam 0242 em\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The Bitrek GPS tracker also utilizes a roaming command (",(0,i.jsx)(n.code,{children:"setparam 0917"}),") together with a list of enabled networks (",(0,i.jsx)(n.code,{children:"setparam 0020-0099"}),").\nThe following SMS command enables roaming in all networks defined by subsequent SMS:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"setparam 0917 1\n"})}),"\n",(0,i.jsx)(n.p,{children:"Examples of subsequent SMS to define the networks:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"setparam 0020 MNC\nsetparam 0021 MNC\n...\nsetparam 0099 MNC\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"MNC"})})," with the mobile network code (MNC) the device will roam on."]}),"\n",(0,i.jsxs)(n.p,{children:["You can concatenate all commands into one SMS (maximum 160 characters) by using the ",(0,i.jsx)(n.code,{children:";"})," as a delimiter:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"setparam 0242 em; setparam 0917 1; setparam 0020 MNC; ...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"MNC"})})," with the MNC the device will roam on."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In this example, ",(0,i.jsx)(n.code,{children:"em"})," represents emnify's network."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var i=s(7294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);