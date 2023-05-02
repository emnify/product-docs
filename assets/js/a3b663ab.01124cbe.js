"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,u=m["".concat(s,".").concat(d)]||m[d]||h[d]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={description:"Configuring the APN for the most common GPS vendors"},o="GPS trackers",p={unversionedId:"quickstart/devices/gps-trackers",id:"quickstart/devices/gps-trackers",title:"GPS trackers",description:"Configuring the APN for the most common GPS vendors",source:"@site/docs/quickstart/devices/gps-trackers.md",sourceDirName:"quickstart/devices",slug:"/quickstart/devices/gps-trackers",permalink:"/quickstart/devices/gps-trackers",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/quickstart/devices/gps-trackers.md",tags:[],version:"current",lastUpdatedAt:1683023007,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{description:"Configuring the APN for the most common GPS vendors"},sidebar:"mainDocsSidebar",previous:{title:"Cellular modules",permalink:"/quickstart/devices/cellular-modules"},next:{title:"Industrial routers",permalink:"/quickstart/devices/industrial-routers"}},s={},l=[{value:"Teltonika GPS APN configuration",id:"teltonika-gps-apn-configuration",level:2},{value:"Ruptela GPS APN configuration",id:"ruptela-gps-apn-configuration",level:2},{value:"Concox GPS APN configuration",id:"concox-gps-apn-configuration",level:2},{value:"Coban GPS APN configuration",id:"coban-gps-apn-configuration",level:2},{value:"Meitrack GPS APN configuration",id:"meitrack-gps-apn-configuration",level:2},{value:"Elinz GPS APN configuration",id:"elinz-gps-apn-configuration",level:2},{value:"Reachfar GPS APN configuration",id:"reachfar-gps-apn-configuration",level:2},{value:"Queclink GPS APN configuration",id:"queclink-gps-apn-configuration",level:2},{value:"Bitrek GPS APN configuration",id:"bitrek-gps-apn-configuration",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gps-trackers"},"GPS trackers"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For GPS vendors that aren't listed, please consult their respective manual and configure the APN to be ",(0,r.kt)("inlineCode",{parentName:"p"},"em")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"emnify"),".")),(0,r.kt)("h2",{id:"teltonika-gps-apn-configuration"},"Teltonika GPS APN configuration"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://wiki.teltonika-gps.com/view/Universal_Device_Test_Guide_V3.2"},"Source Teltonika GPS documentation")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Applies to FMB110, FMB120, FM130, FMB140, FMC001, FMM001, FMC125, FMC130, FMC640, FMM125, FMM130, FMM640, FMP100, FMB001, FMB002, FMB003, FMB010")),(0,r.kt)("p",null,"Configuring the APN for Teltonika GPS trackers can be done through:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Teltonika Configurator over a USB, Bluetooth connection"),(0,r.kt)("li",{parentName:"ol"},"Via the SMS console through the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/connected-devices"},(0,r.kt)("strong",{parentName:"a"},"Connected Devices")," page of the emnify Portal")),(0,r.kt)("li",{parentName:"ol"},"Via the ",(0,r.kt)("a",{parentName:"li",href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint"},"emnify SMS API")," or ",(0,r.kt)("a",{parentName:"li",href:"https://zapier.com/apps/emnify/integrations/sms"},"Zapier Integration")," (when automating the configuration)")),(0,r.kt)("p",null,"Newer Teltonika GPS versions automatically detect the emnify APN setting."),(0,r.kt)("p",null,"When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,r.kt)("strong",{parentName:"p"},"Attached")," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session unless the APN is set up or detected."),(0,r.kt)("p",null,"If you've set a username and password for the device, use the following SMS command to set the APN (replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"USERNAME")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PASSWORD")," with your credentials):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"USERNAME PASSWORD setparam 2001:em\n")),(0,r.kt)("p",null,"Otherwise, if there's no username or password configured, use the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  setparam 2001:em\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The two leading spaces are required.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.teltonika-gps.com/view/Template:FMB_Device_Family_Parameter_list"},"Teltonika FMB Device Family Parameter list")," for all available parameters.")),(0,r.kt)("h2",{id:"ruptela-gps-apn-configuration"},"Ruptela GPS APN configuration"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Applies to HCV5, LCV5, Pro5, Trace5/NA, FM-Tco4 HCV/HCV 3G, FM-Tco4 LCV/LCV 3G, FM-Pro4/Pro4 3G, FM-Eco4/4+, FM-Eco4 light/light+/3G, FM-Eco4 S Series, FM-Eco4 T Series, FM-Plug4")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://doc.ruptela.lt/display/AB/Tracking+devices"},"Source Ruptela Documentation")),(0,r.kt)("p",null,"Configuring the APN for Ruptela GPS trackers can be done through:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ruptela Device Center over a USB, Bluetooth connection"),(0,r.kt)("li",{parentName:"ol"},"Via the SMS console through the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/connected-devices"},(0,r.kt)("strong",{parentName:"a"},"Connected Devices")," page of the emnify Portal")),(0,r.kt)("li",{parentName:"ol"},"Via the ",(0,r.kt)("a",{parentName:"li",href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint"},"emnify SMS API")," or ",(0,r.kt)("a",{parentName:"li",href:"https://zapier.com/apps/emnify/integrations/sms"},"Zapier Integration")," (when automating the configuration)")),(0,r.kt)("p",null,"When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,r.kt)("strong",{parentName:"p"},"Attached")," in the emnify Portal.\nAt this point the device can receive SMS but not establish a data session unless the APN is setup or detected."),(0,r.kt)("p",null,"The SMS command to set the APN for Ruptela GPS trackers is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[SMSpassword] setconnection em\n")),(0,r.kt)("p",null,"The ","[","SMSpassword","]"," can be set up in the Ruptela device center.\nIf the SMSpassword isn't set, the command is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"setconnection em\n")),(0,r.kt)("h2",{id:"concox-gps-apn-configuration"},"Concox GPS APN configuration"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Applies to JM-VL01, JM-VL02, JM-BL11, JM-VL03, JM-VL04, JM-LL01, JM-LL02, JM-LL301, X3,Wetrack140, Wetrack2, Wetrack lite, Bl10, GT06N, OB22, ET25, HVT001, EG02, JM-VG01U, JM-VG02U, JM-VG04Q, AT1-AT6, CT10, JM-LG01, JM-LG05, TBT100")),(0,r.kt)("p",null,"Configuring the APN for Concox GPS trackers can be done:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Via the SMS console through the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/connected-devices"},(0,r.kt)("strong",{parentName:"a"},"Connected Devices")," page of the emnify Portal")),(0,r.kt)("li",{parentName:"ol"},"Via the ",(0,r.kt)("a",{parentName:"li",href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint"},"emnify SMS API")," or ",(0,r.kt)("a",{parentName:"li",href:"https://zapier.com/apps/emnify/integrations/sms"},"Zapier Integration")," (when automating the configuration)")),(0,r.kt)("p",null,"When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,r.kt)("strong",{parentName:"p"},"Attached")," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session unless the APN is set up."),(0,r.kt)("p",null,"The SMS command to set the APN for Concox GPS trackers is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"APN em#\n")),(0,r.kt)("p",null,"For some Concox models, for instance TR02, the password needs to be sent with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"APN,666666,em#\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The default password is ",(0,r.kt)("inlineCode",{parentName:"p"},"666666"),".")),(0,r.kt)("h2",{id:"coban-gps-apn-configuration"},"Coban GPS APN configuration"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Applies to Coban TK104, GPS303X, GPS103X, GPS306X, LK209, \u2026")),(0,r.kt)("p",null,"Configuring the APN for Coban GPS trackers can be done:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Via the SMS console through the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/connected-devices"},(0,r.kt)("strong",{parentName:"a"},"Connected Devices")," page of the emnify Portal")),(0,r.kt)("li",{parentName:"ol"},"Via the ",(0,r.kt)("a",{parentName:"li",href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint"},"emnify SMS API")," or ",(0,r.kt)("a",{parentName:"li",href:"https://zapier.com/apps/emnify/integrations/sms"},"Zapier Integration")," (when automating the configuration)")),(0,r.kt)("p",null,"When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,r.kt)("strong",{parentName:"p"},"Attached")," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session unless the APN is set up and the GPRS service is activated."),(0,r.kt)("p",null,"To turn on GPSR:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gprs[your_password]\n")),(0,r.kt)("p",null,"The SMS command to set the APN for Coban GPS trackers is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"APN[your_password] em\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There are no spaces between ",(0,r.kt)("inlineCode",{parentName:"p"},"gprs"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"APN")," and the password.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The default password is ",(0,r.kt)("inlineCode",{parentName:"p"},"123456"),".")),(0,r.kt)("h2",{id:"meitrack-gps-apn-configuration"},"Meitrack GPS APN configuration"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Applies to P88L, P99, MT90, T663L, T333, T366, T399, TS299L, TC68L, TC68SG, T622, K211G, T355G")),(0,r.kt)("p",null,"Configuring the APN for Meitrack GPS trackers can be done:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Via the Meitrack manager"),(0,r.kt)("li",{parentName:"ol"},"Via the SMS console through the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/connected-devices"},(0,r.kt)("strong",{parentName:"a"},"Connected Devices")," page of the emnify Portal")),(0,r.kt)("li",{parentName:"ol"},"Via the ",(0,r.kt)("a",{parentName:"li",href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint"},"emnify SMS API")," or ",(0,r.kt)("a",{parentName:"li",href:"https://zapier.com/apps/emnify/integrations/sms"},"Zapier Integration")," (when automating the configuration)")),(0,r.kt)("p",null,"When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,r.kt)("strong",{parentName:"p"},"Attached")," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session unless the APN is set up."),(0,r.kt)("p",null,"The SMS command to set the APN for Meitrack GPS trackers is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0000,A81,em,,\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"0000")," is the default SMS password.")),(0,r.kt)("p",null,"On other devices, the APN setting is done via the ",(0,r.kt)("inlineCode",{parentName:"p"},"A21")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"666888,A21,1,server.meigps.com,8800,em,,\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"666888")," is the default super password (not the SMS password).")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Both SMS and super password can be changed and would then need to be replaced in the SMS command.")),(0,r.kt)("h2",{id:"elinz-gps-apn-configuration"},"Elinz GPS APN configuration"),(0,r.kt)("p",null,"Configuring the APN for Elinz GPS trackers can be done:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Via the SMS console through the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/connected-devices"},(0,r.kt)("strong",{parentName:"a"},"Connected Devices")," page of the emnify Portal")," "),(0,r.kt)("li",{parentName:"ol"},"Via the ",(0,r.kt)("a",{parentName:"li",href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint"},"emnify SMS API")," or ",(0,r.kt)("a",{parentName:"li",href:"https://zapier.com/apps/emnify/integrations/sms"},"Zapier Integration")," (when automating the configuration)")),(0,r.kt)("p",null,"When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,r.kt)("strong",{parentName:"p"},"Attached")," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session unless the APN is set up."),(0,r.kt)("p",null,"The SMS command to set the APN for Elinz GPS trackers is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"APN,em#\n")),(0,r.kt)("p",null,"On other models, the APN configuration is a little different:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apn[password] em\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The default password is ",(0,r.kt)("inlineCode",{parentName:"p"},"123456"),".")),(0,r.kt)("h2",{id:"reachfar-gps-apn-configuration"},"Reachfar GPS APN configuration"),(0,r.kt)("p",null,"Configuring the APN for Reachfar GPS trackers can be done:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Via the SMS console through the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/connected-devices"},(0,r.kt)("strong",{parentName:"a"},"Connected Devices")," page of the emnify Portal")),(0,r.kt)("li",{parentName:"ol"},"Via the ",(0,r.kt)("a",{parentName:"li",href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint"},"emnify SMS API")," or ",(0,r.kt)("a",{parentName:"li",href:"https://zapier.com/apps/emnify/integrations/sms"},"Zapier Integration")," (when automating the configuration)")),(0,r.kt)("p",null,"When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,r.kt)("strong",{parentName:"p"},"Attached")," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session\nunless the APN is set up."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Applies to RF-V6+, RF-V8, RF-V8S, RF-V13, RF-V16, RF-V18, RF-V20")),(0,r.kt)("p",null,"The following two SMS commands need to send:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"123456,sos1,[yourphonenumber]# // Bind the tracker to a specific phone number (e.g., 49173871878 instead of +49173871878).\napn,em,plmn,90143#  // Send this SMS from the phone\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"123456")," is the default SMS password.")),(0,r.kt)("p",null,"After setting the APN, the GPS tracker needs to be rebooted."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Applies to RF-V26, RF-V26+, RF-V28, RF-V30, RF-V32, RF-V34, RF-V36, RF-V36, RF-V38, RF-V40, RF-V42, RF-V43\uff0cRF-V44, RF-V46")),(0,r.kt)("p",null,"The following two SMS commands need to send:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pw,123456,center,[yourphonenumber]# // Bind tracker to specific phone.\napn,em# // Send this SMS from the phone\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"123456")," is the default password.")),(0,r.kt)("h2",{id:"queclink-gps-apn-configuration"},"Queclink GPS APN configuration"),(0,r.kt)("p",null,"Configuring the APN for Queclink GPS trackers can be done:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Via the SMS console through the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/connected-devices"},(0,r.kt)("strong",{parentName:"a"},"Connected Devices")," page of the emnify Portal")),(0,r.kt)("li",{parentName:"ol"},"Via the ",(0,r.kt)("a",{parentName:"li",href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint"},"emnify SMS API")," or Zapier Integration (when automating the configuration)")),(0,r.kt)("p",null,"When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,r.kt)("strong",{parentName:"p"},"Attached")," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session unless the APN is set up."),(0,r.kt)("p",null,"The SMS command to set the APN for Queclink GPS trackers is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AT+GTBSI=[password],em,,,,,,,0002$\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The default password is the device model (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"gl200"),").")),(0,r.kt)("h2",{id:"bitrek-gps-apn-configuration"},"Bitrek GPS APN configuration"),(0,r.kt)("p",null,"Configuring the APN for Bitrek GPS trackers can be done:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Via the SMS console through the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/connected-devices"},(0,r.kt)("strong",{parentName:"a"},"Connected Devices")," page of the emnify Portal")),(0,r.kt)("li",{parentName:"ol"},"Via the ",(0,r.kt)("a",{parentName:"li",href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint"},"emnify SMS API")," or ",(0,r.kt)("a",{parentName:"li",href:"https://zapier.com/apps/emnify/integrations/sms"},"Zapier Integration")," (when automating the configuration)")),(0,r.kt)("p",null,"When the GPS tracker is turned on for the first time after the SIM is installed, it shows the status ",(0,r.kt)("strong",{parentName:"p"},"Attached")," in the emnify Portal.\nAt this point, the device can receive SMS but not establish a data session unless the APN is set up."),(0,r.kt)("p",null,"The SMS command to set the APN for Bitrek GPS trackers is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"setparam 0242 em\n")),(0,r.kt)("p",null,"The Bitrek GPS tracker also utilizes a roaming command (",(0,r.kt)("inlineCode",{parentName:"p"},"setparam 0917"),") together with a list of enabled networks (",(0,r.kt)("inlineCode",{parentName:"p"},"setparam 0020-0099"),").\nThe following SMS commands need to be send:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"setparam 0917 1 // enables roaming in all networks as defined in the following SMS\nsetparam 0020 <MNC> // Mobile network code (MNC) that the device will roam on\nsetparam 0021 <MNC>\n....\nsetparam 0099 <MNC>\n")),(0,r.kt)("p",null,"All commands can be concatenated into one SMS (max. 160 characters) by using the ",(0,r.kt)("inlineCode",{parentName:"p"},";")," as a delimiter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"setparam 0242 em; setparam 0917 1; setparam 0020 <MNC>; .....\n")))}m.isMDXComponent=!0}}]);