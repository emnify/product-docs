"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8626],{8580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=t(5893),s=t(1151);const r={description:"Configure the APN for the most common GPS vendors",last_update:{date:"01-25-2023"},slug:"/apn-configuration/gps-trackers"},o="GPS trackers",c={id:"quickstart/apn-configuration/gps-trackers",title:"GPS trackers",description:"Configure the APN for the most common GPS vendors",source:"@site/docs/quickstart/apn-configuration/gps-trackers.md",sourceDirName:"quickstart/apn-configuration",slug:"/apn-configuration/gps-trackers",permalink:"/pr-preview/pr-233/apn-configuration/gps-trackers",draft:!1,unlisted:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/quickstart/apn-configuration/gps-trackers.md",tags:[],version:"current",lastUpdatedAt:1674604800,formattedLastUpdatedAt:"Jan 25, 2023",frontMatter:{description:"Configure the APN for the most common GPS vendors",last_update:{date:"01-25-2023"},slug:"/apn-configuration/gps-trackers"},sidebar:"mainDocsSidebar",previous:{title:"Cellular modules",permalink:"/pr-preview/pr-233/apn-configuration/cellular-modules"},next:{title:"Industrial routers",permalink:"/pr-preview/pr-233/apn-configuration/industrial-routers"}},a={},h=[{value:"Teltonika GPS APN configuration",id:"teltonika-gps-apn-configuration",level:2},{value:"Ruptela GPS APN configuration",id:"ruptela-gps-apn-configuration",level:2},{value:"Concox GPS APN configuration",id:"concox-gps-apn-configuration",level:2},{value:"Coban GPS APN configuration",id:"coban-gps-apn-configuration",level:2},{value:"Meitrack GPS APN configuration",id:"meitrack-gps-apn-configuration",level:2},{value:"Elinz GPS APN configuration",id:"elinz-gps-apn-configuration",level:2},{value:"ReachFar GPS APN configuration",id:"reachfar-gps-apn-configuration",level:2},{value:"Queclink GPS APN configuration",id:"queclink-gps-apn-configuration",level:2},{value:"Bitrek GPS APN configuration",id:"bitrek-gps-apn-configuration",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"gps-trackers",children:"GPS trackers"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["For GPS vendors that aren't listed, please consult their respective manual and configure the APN to be ",(0,i.jsx)(n.code,{children:"em"})," or ",(0,i.jsx)(n.code,{children:"emnify"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"teltonika-gps-apn-configuration",children:"Teltonika GPS APN configuration"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://wiki.teltonika-gps.com/view/Universal_Device_Test_Guide_V3.2",children:"Source Teltonika GPS documentation"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to FMB110, FMB120, FM130, FMB140, FMC001, FMM001, FMC125, FMC130, FMC640, FMM125, FMM130, FMM640, FMP100, FMB001, FMB002, FMB003, FMB010"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configuring the APN for Teltonika GPS trackers can be done through:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Teltonika Configurator over a USB, Bluetooth connection"}),"\n",(0,i.jsxs)(n.li,{children:["Via the SMS console through the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/connected-devices",children:(0,i.jsx)(n.strong,{children:"Connected Devices"})})," page of the emnify Portal"]}),"\n",(0,i.jsxs)(n.li,{children:["Via the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"emnify SMS API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Newer Teltonika GPS versions automatically detect the emnify APN setting."}),"\n",(0,i.jsxs)(n.p,{children:["When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,i.jsx)(n.strong,{children:"Attached"})," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session unless the APN is set up or detected."]}),"\n",(0,i.jsx)(n.p,{children:"If you've set a username and password for the device, use the following SMS command to set the APN:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"USERNAME PASSWORD setparam 2001:em\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"USERNAME"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"PASSWORD"})})," with your credentials."]}),"\n",(0,i.jsx)(n.p,{children:"Otherwise, if there's no username or password configured, use the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  setparam 2001:em\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"The two leading spaces are required."})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"https://wiki.teltonika-gps.com/view/Template:FMB_Device_Family_Parameter_list",children:"Teltonika FMB Device Family Parameter list"})," for all available parameters."]})}),"\n",(0,i.jsx)(n.h2,{id:"ruptela-gps-apn-configuration",children:"Ruptela GPS APN configuration"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to HCV5, LCV5, Pro5, Trace5/NA, FM-Tco4 HCV/HCV 3G, FM-Tco4 LCV/LCV 3G, FM-Pro4/Pro4 3G, FM-Eco4/4+, FM-Eco4 light/light+/3G, FM-Eco4 S Series, FM-Eco4 T Series, FM-Plug4"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://doc.ruptela.lt/display/AB/Tracking+devices",children:"Source Ruptela Documentation"})}),"\n",(0,i.jsx)(n.p,{children:"Configuring the APN for Ruptela GPS trackers can be done through:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Ruptela Device Center over a USB, Bluetooth connection"}),"\n",(0,i.jsxs)(n.li,{children:["Via the SMS console through the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/connected-devices",children:(0,i.jsx)(n.strong,{children:"Connected Devices"})})," page of the emnify Portal"]}),"\n",(0,i.jsxs)(n.li,{children:["Via the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"emnify SMS API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,i.jsx)(n.strong,{children:"Attached"})," in the emnify Portal.\nAt this point the device can receive SMS but not establish a data session unless the APN is setup or detected."]}),"\n",(0,i.jsx)(n.p,{children:"The SMS command to set the APN for Ruptela GPS trackers is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[SMSpassword] setconnection em\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"[SMSpassword]"})," can be set up in the Ruptela device center.\nIf the ",(0,i.jsx)(n.code,{children:"SMSpassword"})," isn't set, the command is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"setconnection em\n"})}),"\n",(0,i.jsx)(n.h2,{id:"concox-gps-apn-configuration",children:"Concox GPS APN configuration"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to JM-VL01, JM-VL02, JM-BL11, JM-VL03, JM-VL04, JM-LL01, JM-LL02, JM-LL301, X3, WeTrack140, WeTrack2, WeTrack lite, Bl10, GT06N, OB22, ET25, HVT001, EG02, JM-VG01U, JM-VG02U, JM-VG04Q, AT1-AT6, CT10, JM-LG01, JM-LG05, TBT100"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configuring the APN for Concox GPS trackers can be done:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Via the SMS console through the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/connected-devices",children:(0,i.jsx)(n.strong,{children:"Connected Devices"})})," page of the emnify Portal"]}),"\n",(0,i.jsxs)(n.li,{children:["Via the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"emnify SMS API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,i.jsx)(n.strong,{children:"Attached"})," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session unless the APN is set up."]}),"\n",(0,i.jsx)(n.p,{children:"The SMS command to set the APN for Concox GPS trackers is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"APN em#\n"})}),"\n",(0,i.jsx)(n.p,{children:"For some Concox models, for instance TR02, the password needs to be sent with the command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"APN,666666,em#\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The default password is ",(0,i.jsx)(n.code,{children:"666666"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"coban-gps-apn-configuration",children:"Coban GPS APN configuration"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to Coban TK104, GPS303X, GPS103X, GPS306X, LK209, etc."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configuring the APN for Coban GPS trackers can be done:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Via the SMS console through the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/connected-devices",children:(0,i.jsx)(n.strong,{children:"Connected Devices"})})," page of the emnify Portal"]}),"\n",(0,i.jsxs)(n.li,{children:["Via the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"emnify SMS API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,i.jsx)(n.strong,{children:"Attached"})," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session unless the APN is set up and the GPRS service is activated."]}),"\n",(0,i.jsx)(n.p,{children:"To turn on GPSR:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"gprs[PASSWORD]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"[PASSWORD]"})})," with your password."]}),"\n",(0,i.jsxs)(n.p,{children:["The SMS command to set the ",(0,i.jsx)(n.code,{children:"APN"})," for Coban GPS trackers is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"APN[PASSWORD] em\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"[PASSWORD]"})})," with your password."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The default password is ",(0,i.jsx)(n.code,{children:"123456"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["There are no spaces between ",(0,i.jsx)(n.code,{children:"gprs"}),"/",(0,i.jsx)(n.code,{children:"APN"})," and the password."]})}),"\n",(0,i.jsx)(n.h2,{id:"meitrack-gps-apn-configuration",children:"Meitrack GPS APN configuration"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to P88L, P99, MT90, T663L, T333, T366, T399, TS299L, TC68L, TC68SG, T622, K211G, T355G"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configuring the APN for Meitrack GPS trackers can be done:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Via the Meitrack manager"}),"\n",(0,i.jsxs)(n.li,{children:["Via the SMS console through the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/connected-devices",children:(0,i.jsx)(n.strong,{children:"Connected Devices"})})," page of the emnify Portal"]}),"\n",(0,i.jsxs)(n.li,{children:["Via the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"emnify SMS API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,i.jsx)(n.strong,{children:"Attached"})," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session unless the APN is set up."]}),"\n",(0,i.jsx)(n.p,{children:"The SMS command to set the APN for Meitrack GPS trackers is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"0000,A81,em,,\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"0000"})," is the default SMS password."]})}),"\n",(0,i.jsxs)(n.p,{children:["On other devices, the APN setting is done via the ",(0,i.jsx)(n.code,{children:"A21"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"666888,A21,1,server.meigps.com,8800,em,,\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"666888"})," is the default super password (not the SMS password)."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Both SMS and super password can be changed and would then need to be replaced in the SMS command."})}),"\n",(0,i.jsx)(n.h2,{id:"elinz-gps-apn-configuration",children:"Elinz GPS APN configuration"}),"\n",(0,i.jsx)(n.p,{children:"Configuring the APN for Elinz GPS trackers can be done:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Via the SMS console through the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/connected-devices",children:(0,i.jsx)(n.strong,{children:"Connected Devices"})}),"  page of the emnify Portal"]}),"\n",(0,i.jsxs)(n.li,{children:["Via the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"emnify SMS API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,i.jsx)(n.strong,{children:"Attached"})," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session unless the APN is set up."]}),"\n",(0,i.jsx)(n.p,{children:"The SMS command to set the APN for Elinz GPS trackers is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"APN,em#\n"})}),"\n",(0,i.jsx)(n.p,{children:"On other models, the APN configuration is a little different:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apnPASSWORD em\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"PASSWORD"})})," represents your password.\nThe default password is ",(0,i.jsx)(n.code,{children:"123456"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"reachfar-gps-apn-configuration",children:"ReachFar GPS APN configuration"}),"\n",(0,i.jsx)(n.p,{children:"Configuring the APN for ReachFar GPS trackers can be done:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Via the SMS console through the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/connected-devices",children:(0,i.jsx)(n.strong,{children:"Connected Devices"})})," page of the emnify Portal"]}),"\n",(0,i.jsxs)(n.li,{children:["Via the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"emnify SMS API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,i.jsx)(n.strong,{children:"Attached"})," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session\nunless the APN is set up."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to RF-V6+, RF-V8, RF-V8S, RF-V13, RF-V16, RF-V18, RF-V20"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The following two SMS commands need to send:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"123456,sos1,PHONE_NUMBER# // Bind the tracker to a specific phone number (e.g., 49173871878 instead of +49173871878).\napn,em,plmn,90143#  // Send this SMS from the phone\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"123456"})," is the default SMS password."]})}),"\n",(0,i.jsx)(n.p,{children:"After setting the APN, the GPS tracker needs to be rebooted."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Applies to RF-V26, RF-V26+, RF-V28, RF-V30, RF-V32, RF-V34, RF-V36, RF-V36, RF-V38, RF-V40, RF-V42, RF-V43\uff0cRF-V44, RF-V46"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The following two SMS commands need to send:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pw,123456,center,PHONE_NUMBER# // Bind tracker to specific phone.\napn,em# // Send this SMS from the phone\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"123456"})," is the default password."]})}),"\n",(0,i.jsx)(n.h2,{id:"queclink-gps-apn-configuration",children:"Queclink GPS APN configuration"}),"\n",(0,i.jsx)(n.p,{children:"Configuring the APN for Queclink GPS trackers can be done:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Via the SMS console through the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/connected-devices",children:(0,i.jsx)(n.strong,{children:"Connected Devices"})})," page of the emnify Portal"]}),"\n",(0,i.jsxs)(n.li,{children:["Via the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"emnify SMS API"})," or Zapier Integration (when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,i.jsx)(n.strong,{children:"Attached"})," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session unless the APN is set up."]}),"\n",(0,i.jsx)(n.p,{children:"The SMS command to set the APN for Queclink GPS trackers is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"AT+GTBSI=PASSWORD,em,,,,,,,0002$\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"PASSWORD"})})," represents your password.\nThe default password is the device model (for example, ",(0,i.jsx)(n.code,{children:"gl200"}),")."]})}),"\n",(0,i.jsx)(n.h2,{id:"bitrek-gps-apn-configuration",children:"Bitrek GPS APN configuration"}),"\n",(0,i.jsx)(n.p,{children:"Configuring the APN for Bitrek GPS trackers can be done:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Via the SMS console through the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/connected-devices",children:(0,i.jsx)(n.strong,{children:"Connected Devices"})})," page of the emnify Portal"]}),"\n",(0,i.jsxs)(n.li,{children:["Via the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"emnify SMS API"})," or ",(0,i.jsx)(n.a,{href:"https://zapier.com/apps/emnify/integrations/sms",children:"Zapier Integration"})," (when automating the configuration)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,i.jsx)(n.strong,{children:"Attached"})," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session unless the APN is set up."]}),"\n",(0,i.jsx)(n.p,{children:"The SMS command to set the APN for Bitrek GPS trackers is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"setparam 0242 em\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The Bitrek GPS tracker also utilizes a roaming command (",(0,i.jsx)(n.code,{children:"setparam 0917"}),") together with a list of enabled networks (",(0,i.jsx)(n.code,{children:"setparam 0020-0099"}),").\nThe following SMS commands need to be send:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"setparam 0917 1 // enables roaming in all networks as defined in the following SMS\nsetparam 0020 MNC\nsetparam 0021 MNC\n....\nsetparam 0099 MNC\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"MNC"})})," with the mobile network code (MNC) the device will roam on."]}),"\n",(0,i.jsxs)(n.p,{children:["All commands can be concatenated into one SMS (max. 160 characters) by using the ",(0,i.jsx)(n.code,{children:";"})," as a delimiter:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"setparam 0242 em; setparam 0917 1; setparam 0020 MNC; .....\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"MNC"})})," with the MNC the device will roam on."]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);