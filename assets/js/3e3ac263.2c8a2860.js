"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3773],{9995:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(5893),o=t(1151);const s={description:"Step-by-step guide for integrating OpenVPN on Windows to use on devices with emnify eSIMs.",last_update:{date:"01-29-2024"},pagination_label:"OpenVPN on Windows",sidebar_label:"Windows",slug:"/integration-guides/openvpn-windows"},r="Integrate OpenVPN on Windows",a={id:"services/platform/integration-guides/openvpn/windows",title:"Integrate OpenVPN on Windows",description:"Step-by-step guide for integrating OpenVPN on Windows to use on devices with emnify eSIMs.",source:"@site/docs/services/platform/integration-guides/openvpn/windows.mdx",sourceDirName:"services/platform/integration-guides/openvpn",slug:"/integration-guides/openvpn-windows",permalink:"/integration-guides/openvpn-windows",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1706486400,formattedLastUpdatedAt:"Jan 29, 2024",frontMatter:{description:"Step-by-step guide for integrating OpenVPN on Windows to use on devices with emnify eSIMs.",last_update:{date:"01-29-2024"},pagination_label:"OpenVPN on Windows",sidebar_label:"Windows",slug:"/integration-guides/openvpn-windows"},sidebar:"mainDocsSidebar",previous:{title:"OpenVPN on macOS",permalink:"/integration-guides/openvpn-macos"},next:{title:"Data Streamer",permalink:"/multicloud-data-streamer"}},c={},d=[{value:"Required preparation in the emnify Portal",id:"required-preparation-in-the-emnify-portal",level:2},{value:"Download the VPN configuration file",id:"download-the-vpn-configuration-file",level:3},{value:"Change the internet breakout region",id:"change-the-internet-breakout-region",level:3},{value:"Set up the OpenVPN client on Windows",id:"set-up-the-openvpn-client-on-windows",level:2},{value:"Install the OpenVPN software",id:"install-the-openvpn-software",level:3},{value:"Create credentials for authentication",id:"create-credentials-for-authentication",level:3},{value:"Authentication with user credentials",id:"authentication-with-user-credentials",level:4},{value:"Authentication with an application token",id:"authentication-with-an-application-token",level:4},{value:"Correct the credentials path",id:"correct-the-credentials-path",level:4},{value:"Start and monitor the OpenVPN connection",id:"start-and-monitor-the-openvpn-connection",level:3},{value:"Test successful data connectivity",id:"test-successful-data-connectivity",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"integrate-openvpn-on-windows",children:"Integrate OpenVPN on Windows"}),"\n",(0,i.jsxs)(n.p,{children:["Using emnify, you can create a ",(0,i.jsx)(n.a,{href:"/glossary#vpn",children:"virtual private network (VPN)"})," for your mobile IoT/M2M devices fitted with emnify SIMs.\nData traffic is exchanged between the devices and the application server through an OpenVPN tunnel, enabling direct communication with the IPs of the mobile devices (no NAT applied)."]}),"\n",(0,i.jsx)(n.p,{children:"The tunnel is established between the emnify Core Network and the customer's VPN gateway or server."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=yt44fJpfkQ4",children:"Cellular IoT University: Secure your devices with OpenVPN video"})," provides a step-by-step walk-through."]})}),"\n",(0,i.jsx)(n.h2,{id:"required-preparation-in-the-emnify-portal",children:"Required preparation in the emnify Portal"}),"\n",(0,i.jsx)(n.p,{children:"Any traffic exchanged with mobile devices is encrypted before being transmitted over the public internet, which adds an additional layer of security and privacy.\nNo VPN software needs to be installed on the device, or there aren't any required configuration changes necessary.\nThe default emnify APN also supports VPN flows."}),"\n",(0,i.jsx)(n.h3,{id:"download-the-vpn-configuration-file",children:"Download the VPN configuration file"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"Log in to your emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Integrations"})," and find the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/integrations#secure-connection",children:(0,i.jsx)(n.strong,{children:"Secure Connection"})})," section."]}),"\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.strong,{children:"OpenVPN"}),", select ",(0,i.jsx)(n.strong,{children:"Show instructions"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:t(741).Z,alt:""}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Make sure you're on the ",(0,i.jsx)(n.strong,{children:"Windows"})," tab, then click ",(0,i.jsx)(n.strong,{children:"Download client.ovpn"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:t(9067).Z,alt:""}),"\n",(0,i.jsxs)(n.p,{children:["Select the desired region or choose ",(0,i.jsx)(n.strong,{children:"Download all regions"}),"."]}),"\n",(0,i.jsx)("img",{src:t(594).Z,alt:"",style:{height:400}}),"\n",(0,i.jsxs)(n.p,{children:["Once downloaded, store that file on your server in the folder ",(0,i.jsx)(n.code,{children:"\\OpenVPN\\config"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"change-the-internet-breakout-region",children:"Change the internet breakout region"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/device-policies",children:(0,i.jsx)(n.strong,{children:"Device Policies"})})," in the emnify Portal."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Service Policies"})," section, select the policy assigned to the devices you want to secure and click ",(0,i.jsx)(n.strong,{children:"Details"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.strong,{children:"Internet Breakout Region"}),", set the service policy to a VPN breakout region (for example, ",(0,i.jsx)(n.code,{children:"eu-west-1 (VPN)"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"set-up-the-openvpn-client-on-windows",children:"Set up the OpenVPN client on Windows"}),"\n",(0,i.jsx)(n.h3,{id:"install-the-openvpn-software",children:"Install the OpenVPN software"}),"\n",(0,i.jsxs)(n.p,{children:["Download the installation file according to your Windows machine at ",(0,i.jsx)(n.a,{href:"https://openvpn.net/community-downloads/",children:"OpenVPN Downloads"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The pre-built configuration file's name is one of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"emnify-eu-west-1.ovpn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"emnify-eu-east-1.ovpn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"emnify-ap-southeast-1.ovpn"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Store that file in your server in the folder ",(0,i.jsx)(n.code,{children:"\\OpenVPN\\config"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"create-credentials-for-authentication",children:"Create credentials for authentication"}),"\n",(0,i.jsxs)(n.p,{children:["Next, create a file titled ",(0,i.jsx)(n.code,{children:"credentials.txt"})," in the folder ",(0,i.jsx)(n.code,{children:"\\OpenVPN\\config"}),".",(0,i.jsx)(n.br,{}),"\n","This file contains the information to authenticate your session via emnify user credentials or with an application token (recommended)."]}),"\n",(0,i.jsx)(n.h4,{id:"authentication-with-user-credentials",children:"Authentication with user credentials"}),"\n",(0,i.jsxs)(n.p,{children:["The contents of the ",(0,i.jsx)(n.code,{children:"credentials.txt"})," file should only have two lines as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"username@domain.com\nYourPassword\n"})}),"\n",(0,i.jsx)(n.h4,{id:"authentication-with-an-application-token",children:"Authentication with an application token"}),"\n",(0,i.jsxs)(n.p,{children:["When you run the OpenVPN client on a VPN gateway or application server, it's recommended to use a dedicated application token.",(0,i.jsx)(n.br,{}),"\n","In that case, the first line in the ",(0,i.jsx)(n.code,{children:"credentials.txt"})," file must contain your emnify organization identifier and the application token instead of the password."]}),"\n",(0,i.jsxs)(n.p,{children:["You can create application tokens in the emnify Portal.\nFor instructions, see ",(0,i.jsx)(n.a,{href:"/portal/application-tokens",children:"Application tokens"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Once created, copy the token into the credentials file.\nThe content of the credentials file would then look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"orgId\nApplicationToken\n"})}),"\n",(0,i.jsx)(n.h4,{id:"correct-the-credentials-path",children:"Correct the credentials path"}),"\n",(0,i.jsxs)(n.p,{children:["Find the following line in ",(0,i.jsx)(n.code,{children:"client.ovpn"})," and insert the complete path from ",(0,i.jsx)(n.code,{children:"credentials.txt"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:'auth-user-pass "(...)\\\\OpenVPN\\\\config\\\\credentials.txt"\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you don't want to store your credentials, you can enter them each time you establish the VPN tunnel.\nFor that, comment out the preceding line with ",(0,i.jsx)(n.code,{children:";"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"start-and-monitor-the-openvpn-connection",children:"Start and monitor the OpenVPN connection"}),"\n",(0,i.jsx)(n.p,{children:"You can start the OpenVPN GUI application and connect the client tunnel through the icon in the taskbar notification area."}),"\n",(0,i.jsxs)(n.p,{children:["To monitor the connection, go to ",(0,i.jsx)(n.code,{children:"OpenVPN/log/client.txt"}),".",(0,i.jsx)(n.br,{}),"\n","If everything works, you should see something like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"Fri Nov 04 10:03:35 2016 Successful ARP Flush on interface [20] {BD06804E-FC58-480D-B6A5-13E0EAE98940}\nFri Nov 04 10:03:40 2016 TEST ROUTES: 2/2 succeeded len=2 ret=1 a=0 u/d=up\nFri Nov 04 10:03:40 2016 MANAGEMENT: >STATE:1478250220,ADD_ROUTES,,,\nFri Nov 04 10:03:40 2016 C:\\WINDOWS\\system32\\route.exe ADD 10.64.0.1 MASK 255.255.255.255 10.64.24.122\nFri Nov 04 10:03:40 2016 ROUTE: CreateIpForwardEntry succeeded with dwForwardMetric1=35 and dwForwardType=4\nFri Nov 04 10:03:40 2016 Route addition via IPAPI succeeded [adaptive]\nFri Nov 04 10:03:40 2016 C:\\WINDOWS\\system32\\route.exe ADD 10.193.104.0 MASK 255.255.252.0 10.64.24.122\nFri Nov 04 10:03:40 2016 ROUTE: CreateIpForwardEntry succeeded with dwForwardMetric1=35 and dwForwardType=4\nFri Nov 04 10:03:40 2016 Route addition via IPAPI succeeded [adaptive]\nFri Nov 04 10:03:40 2016 Initialization Sequence Completed\nFri Nov 04 10:03:40 2016 MANAGEMENT: >STATE:1478250220,CONNECTED,SUCCESS,10.64.24.121,52.209.29.183\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, your VPN client's static private IP address is ",(0,i.jsx)(n.code,{children:"10.64.24.122"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"test-successful-data-connectivity",children:"Test successful data connectivity"}),"\n",(0,i.jsxs)(n.p,{children:["If the VPN tunnel is successfully established, you can connect directly to the private IP addresses of your mobile devices.\nFor testing, you can choose any device with an active data session (marked as ",(0,i.jsx)(n.strong,{children:"Online"})," in the emnify Portal) and retrieve the assigned IP address from the details section."]}),"\n",(0,i.jsxs)(n.p,{children:["Using the command prompt (",(0,i.jsx)(n.code,{children:"cmd"})," application on Windows), ping the chosen IP address from your device:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"C:\\>ping 10.193.104.2\n\nPinging 10.193.104.2 with 32 bytes of data:\nReply from 10.193.104.2: bytes=32 time=1158ms TTL=62\nReply from 10.193.104.2: bytes=32 time=391ms TTL=62\nReply from 10.193.104.2: bytes=32 time=413ms TTL=62\nReply from 10.193.104.2: bytes=32 time=1307ms TTL=62\n"})}),"\n",(0,i.jsx)(n.p,{children:"For this to work, your device must run an IP stack responding to ICMP echo requests.\nThis might differ for embedded devices that only implement partial IP stack functionality."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},741:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/portal-integrations-secure-connection-openvpn-show-instructions-5b572787b187feb0e22d21116c63cfba.png"},594:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/portal-integrations-secure-connections-openvpn-windows-download-dropdown-df03c7df05c13aa49f2323805c433242.png"},9067:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/portal-integrations-secure-connections-openvpn-windows-download-17cabbaf5f8ead844a4bed5b3a3b732b.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);