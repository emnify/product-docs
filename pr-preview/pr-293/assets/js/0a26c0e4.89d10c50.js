(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6519],{629:(e,n,t)=>{var i={"./portal-integrations-secure-connections-openvpn-linux-download-dropdown.png":3359,"./portal-integrations-secure-connections-openvpn-macos-download-dropdown.png":132,"./portal-integrations-secure-connections-openvpn-windows-download-dropdown.png":594};function o(e){var n=s(e);return t(n)}function s(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=s,e.exports=o,o.id=629},5431:(e,n,t)=>{var i={"./portal-integrations-secure-connections-openvpn-linux-download.png":2573,"./portal-integrations-secure-connections-openvpn-macos-download.png":1907,"./portal-integrations-secure-connections-openvpn-windows-download.png":9067};function o(e){var n=s(e);return t(n)}function s(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=s,e.exports=o,o.id=5431},9063:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>r});var i=t(5893),o=t(1151);function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"You can't use accounts with time-based one-time password (TOTP) MFA enabled to authenticate the OpenVPN tunnel.\nEmail-based MFA doesn't affect OpenVPN."}),(0,i.jsxs)(n.p,{children:["For more information, see the ",(0,i.jsx)(n.a,{href:"https://support.emnify.com/hc/en-us/articles/11119662291740-MFA-FAQ",children:"MFA FAQ in the emnify Knowledge Base"}),"."]})]})}function r(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},7740:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>p,default:()=>x,frontMatter:()=>d,metadata:()=>u,toc:()=>f});var i=t(5893),o=t(1151),s=t(3690),r=t(4374),a=t(9063),c=t(4413),l=t(6453);const d={description:"Step-by-step guide for integrating OpenVPN on Linux to use on devices with emnify eSIMs.",last_update:{date:"02-19-2024"},pagination_label:"OpenVPN on Linux",pagination_next:"services/platform/integration-guides/openvpn/macos",sidebar_label:"Linux",slug:"/integration-guides/openvpn-linux-ubuntu"},p="Integrate OpenVPN on Linux",u={id:"services/platform/integration-guides/openvpn/linux",title:"Integrate OpenVPN on Linux",description:"Step-by-step guide for integrating OpenVPN on Linux to use on devices with emnify eSIMs.",source:"@site/docs/services/platform/integration-guides/openvpn/linux.mdx",sourceDirName:"services/platform/integration-guides/openvpn",slug:"/integration-guides/openvpn-linux-ubuntu",permalink:"/pr-preview/pr-293/integration-guides/openvpn-linux-ubuntu",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708300800,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{description:"Step-by-step guide for integrating OpenVPN on Linux to use on devices with emnify eSIMs.",last_update:{date:"02-19-2024"},pagination_label:"OpenVPN on Linux",pagination_next:"services/platform/integration-guides/openvpn/macos",sidebar_label:"Linux",slug:"/integration-guides/openvpn-linux-ubuntu"},sidebar:"mainDocsSidebar",previous:{title:"Integration guides",permalink:"/pr-preview/pr-293/integration-guides"},next:{title:"OpenVPN on macOS",permalink:"/pr-preview/pr-293/integration-guides/openvpn-macos"}},h={},f=[{value:"Required preparation in the emnify Portal",id:"required-preparation-in-the-emnify-portal",level:2},{value:"Download the VPN configuration file",id:"download-the-vpn-configuration-file",level:3},{value:"Change the internet breakout region",id:"change-the-internet-breakout-region",level:3},{value:"Set up the OpenVPN client on Linux/Ubuntu",id:"set-up-the-openvpn-client-on-linuxubuntu",level:2},{value:"Install the OpenVPN software",id:"install-the-openvpn-software",level:3},{value:"Create credentials for authentication",id:"create-credentials-for-authentication",level:3},{value:"Authentication with user credentials",id:"authentication-with-user-credentials",level:4},{value:"Authentication with an application token",id:"authentication-with-an-application-token",level:4},{value:"Protect the credentials file",id:"protect-the-credentials-file",level:3},{value:"Start and monitor the OpenVPN connection",id:"start-and-monitor-the-openvpn-connection",level:3},{value:"Find the static private IP of your VPN client",id:"find-the-static-private-ip-of-your-vpn-client",level:3},{value:"Test successful data connectivity",id:"test-successful-data-connectivity",level:3},{value:"Enable access for servers behind the VPN client",id:"enable-access-for-servers-behind-the-vpn-client",level:3}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"integrate-openvpn-on-linux",children:"Integrate OpenVPN on Linux"}),"\n","\n","\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"required-preparation-in-the-emnify-portal",children:"Required preparation in the emnify Portal"}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"download-the-vpn-configuration-file",children:"Download the VPN configuration file"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(c.ZP,{imageSrc:"linux",operatingSystem:"Linux"}),"\n",(0,i.jsx)(n.h3,{id:"change-the-internet-breakout-region",children:"Change the internet breakout region"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"set-up-the-openvpn-client-on-linuxubuntu",children:"Set up the OpenVPN client on Linux/Ubuntu"}),"\n",(0,i.jsx)(n.h3,{id:"install-the-openvpn-software",children:"Install the OpenVPN software"}),"\n",(0,i.jsx)(n.p,{children:"First, install the OpenVPN package:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install openvpn\n"})}),"\n",(0,i.jsx)(n.h3,{id:"create-credentials-for-authentication",children:"Create credentials for authentication"}),"\n",(0,i.jsxs)(n.p,{children:["Once you install the software and ",(0,i.jsx)(n.a,{href:"#download-the-vpn-configuration-file",children:"download the configuration file"}),", setting up authentication is next.\nCreate a file called ",(0,i.jsx)(n.code,{children:"credentials.txt"})," in the folder ",(0,i.jsx)(n.code,{children:"/etc/openvpn"}),".\nYou can use your user credentials to authenticate or use an application token (recommended)."]}),"\n",(0,i.jsx)(n.h4,{id:"authentication-with-user-credentials",children:"Authentication with user credentials"}),"\n",(0,i.jsxs)(n.p,{children:["The content of the ",(0,i.jsx)(n.code,{children:"credentials.txt"})," must be two lines.\nThe first line is your username, and the second is your password."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"username@domain.com\nYourPassword\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you don't want to store your credentials, you can also choose to enter them each time the VPN tunnel is established.\nIf you prefer that option, comment out the line ",(0,i.jsx)(n.code,{children:"auth-user-pass /etc/openvpn/credentials.txt"})," in the ",(0,i.jsx)(n.code,{children:"client.conf"})," file."]})}),"\n",(0,i.jsx)(n.h4,{id:"authentication-with-an-application-token",children:"Authentication with an application token"}),"\n",(0,i.jsxs)(n.p,{children:["When you run the OpenVPN client on a VPN gateway or application server, using a dedicated application token is recommended.\nIn this case, the first line in the ",(0,i.jsx)(n.code,{children:"credentials.txt"})," file needs to contain your emnify organization identifier. Instead of the password on the second line, store the application token."]}),"\n",(0,i.jsxs)(n.p,{children:["You can create application tokens in the emnify Portal.\nFor instructions, see ",(0,i.jsx)(n.a,{href:"/portal/application-tokens",children:"Application tokens"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Once created, copy the token into the credentials file.\nThe content of the credentials file would then look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"orgId\nApplicationToken\n"})}),"\n",(0,i.jsx)(n.p,{children:"When you log in to the emnify Portal, it shows this data under the VPN settings."}),"\n",(0,i.jsx)(n.h3,{id:"protect-the-credentials-file",children:"Protect the credentials file"}),"\n",(0,i.jsxs)(n.p,{children:["You should keep the ",(0,i.jsx)(n.code,{children:"credentials.txt"})," file only readable by root and not by other server users.\nYou can ensure this with the following commands:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo chown root:root /etc/openvpn/credentials.txt\nsudo chmod 600 /etc/openvpn/credentials.txt\n"})}),"\n",(0,i.jsx)(n.h3,{id:"start-and-monitor-the-openvpn-connection",children:"Start and monitor the OpenVPN connection"}),"\n",(0,i.jsx)(n.p,{children:"Now you can start the VPN client by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo service openvpn start\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The OpenVPN daemon logs into ",(0,i.jsx)(n.code,{children:"/var/log/syslog"}),".\nIf everything works, it looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"Jul 12 17:53:55 openvpn-client ovpn-client[3027]: Data Channel Encrypt: Cipher 'BF-CBC' initialized with 128 bit key\nJul 12 17:53:55 openvpn-client ovpn-client[3027]: Data Channel Encrypt: Using 160 bit message hash 'SHA1' for HMAC authentication\nJul 12 17:53:55 openvpn-client ovpn-client[3027]: Control Channel: TLSv1, cipher TLSv1/SSLv3 DHE-RSA-AES256-SHA, 2048 bit RSA\nJul 12 17:53:55 openvpn-client ovpn-client[3027]: [openvpn.emnify.net] Peer Connection Initiated with [AF_INET]52.209.x.y:1194\nJul 12 17:53:57 openvpn-client ovpn-client[3027]: SENT CONTROL [openvpn.emnify.net]: 'PUSH_REQUEST' (status=1)\nJul 12 17:53:57 openvpn-client ovpn-client[3027]: PUSH: Received control message: 'PUSH_REPLY,route 10.64.0.1,topology net30,ping 1,ping-restart 5,route 10.x.y.z 255.255.128.0,ifconfig 10.64.0.224 10.64.0.225'\nJul 12 17:53:57 openvpn-client ovpn-client[3027]: TUN/TAP device tun0 opened\nJul 12 17:53:57 openvpn-client ovpn-client[3027]: /sbin/route add -net 10.64.0.1 netmask 255.255.255.255 gw 10.64.0.225\nJul 12 17:53:57 openvpn-client ovpn-client[3027]: /sbin/route add -net 10.x.y.z netmask 255.255.128.0 gw 10.64.0.225\n"})}),"\n",(0,i.jsx)(n.h3,{id:"find-the-static-private-ip-of-your-vpn-client",children:"Find the static private IP of your VPN client"}),"\n",(0,i.jsx)(n.p,{children:"The emnify OpenVPN server allocates a static IP address to the tun interface of your VPN client.\nThis IP also stays the same when your VPN client is reconnecting or if you move the tunnel to a different machine.\nSo you can use it on your mobile devices to address your application.\nNevertheless, you should never configure the IP directly on your devices but use a DNS to resolve it."}),"\n",(0,i.jsxs)(n.p,{children:["Once the tunnel is established, you can see that IP address on your tun interface.\nIn this example, the IP address is ",(0,i.jsx)(n.code,{children:"10.64.0.224"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ubuntu@openvpn-client:~$ ip a s tun0\n14: tun0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UNKNOWN qlen 100\n    link/none \n    inet 10.64.0.224 peer 10.64.0.225/32 scope global tun0\n"})}),"\n",(0,i.jsx)(n.h3,{id:"test-successful-data-connectivity",children:"Test successful data connectivity"}),"\n",(0,i.jsx)(n.p,{children:"If the VPN tunnel is established successfully, you can connect directly to your mobile devices' private IP addresses."}),"\n",(0,i.jsx)(n.p,{children:"For testing, you can choose any of your devices that are currently in an active data session."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"Log in to your emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Connected Devices"})," and select one of your devices."]}),"\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.strong,{children:"Details"}),", you can see if it's currently online and the IP address it has assigned."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Now you can ping that private IP address:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"root@openvpn-client:~# ping 10.x.y.z\nPING 10.x.y.z (10.x.y.z) 56(84) bytes of data.\n64 bytes from 10.x.y.z: icmp_req=1 ttl=62 time=72 ms\n64 bytes from 10.x.y.z: icmp_req=2 ttl=62 time=80 ms\n64 bytes from 10.x.y.z: icmp_req=3 ttl=62 time=75 ms\n"})}),"\n",(0,i.jsx)(n.p,{children:"For this to work, your device must run an IP stack responding to ICMP echo requests.\nThis might differ for embedded devices that implement only partial IP stack functionality."}),"\n",(0,i.jsxs)(n.p,{children:["You can use any network protocol.\nFor example, if your device runs an ",(0,i.jsx)(n.code,{children:"sshd"})," daemon you can log into it via SSH."]}),"\n",(0,i.jsx)(n.h3,{id:"enable-access-for-servers-behind-the-vpn-client",children:"Enable access for servers behind the VPN client"}),"\n",(0,i.jsxs)(n.p,{children:["If you have multiple servers behind your VPN gateway that need to communicate with your mobile device, you can apply masquerading using ",(0,i.jsx)(n.code,{children:"iptables"})," to hide them behind the single IP address of your VPN client."]}),"\n",(0,i.jsx)(n.p,{children:"First, you need to enable IP forwarding on your VPN gateway (if it isn't already active):"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open your ",(0,i.jsx)(n.code,{children:"/etc/sysctl.conf"})]}),"\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"net.ipv4.ip_forward=1"})]}),"\n",(0,i.jsxs)(n.li,{children:["Load the configuration with ",(0,i.jsx)(n.code,{children:"sudo sysctl -p /etc/sysctl.conf"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After, you need to enable masquerading for the tun interface by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo iptables -t nat -A POSTROUTING -o tun0 -j MASQUERADE\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also forward connections coming to specific ports to an application server behind your VPN gateway by using DNAT.\nFor example, to forward to an internal HTTP server at IP ",(0,i.jsx)(n.code,{children:"192.168.100.21"})," use:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo iptables -t nat -A PREROUTING -i tun0 -p tcp --dport 80 -j DNAT --to-destination 192.168.100.21\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To make these settings persistent, you can use the ",(0,i.jsx)(n.code,{children:"iptables-persistent"})," package."]})]})}function x(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},6453:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>r});var i=t(5893),o=t(1151);function s(e){const n={a:"a",code:"code",li:"li",ol:"ol",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/device-policies",children:(0,i.jsx)(n.strong,{children:"Device Policies"})})," in the emnify Portal."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Service Policies"})," section, select the policy assigned to the devices you want to secure and click ",(0,i.jsx)(n.strong,{children:"Details"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.strong,{children:"Internet Breakout Region"}),", set the service policy to a VPN breakout region (for example, ",(0,i.jsx)(n.code,{children:"eu-west-1 (VPN)"}),")."]}),"\n"]})}function r(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},4413:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>r});var i=t(5893),o=t(1151);function s(e){const n={a:"a",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"Log in to your emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Integrations"})," and find the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/integrations#secure-connection",children:(0,i.jsx)(n.strong,{children:"Secure Connection"})})," section."]}),"\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.strong,{children:"OpenVPN"}),", select ",(0,i.jsx)(n.strong,{children:"Show instructions"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:t(741).Z,alt:""}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Make sure you're on the ",(0,i.jsx)(n.strong,{children:e.operatingSystem})," tab, then click ",(0,i.jsxs)(n.strong,{children:["Download ","Linux"==e.operatingSystem?"client.conf":"client.ovpn"]}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:t(5431)(`./portal-integrations-secure-connections-openvpn-${e.imageSrc}-download.png`).default,alt:""}),"\n",(0,i.jsxs)(n.p,{children:["Select the desired region or choose ",(0,i.jsx)(n.strong,{children:"Download all regions"}),"."]}),"\n",(0,i.jsx)("img",{src:t(629)(`./portal-integrations-secure-connections-openvpn-${e.imageSrc}-download-dropdown.png`).default,alt:"",style:{height:400}}),"\n",(0,i.jsxs)(n.p,{children:["Once downloaded, store that file on your server in the folder ",(0,i.jsx)("code",{children:"Windows"==e.operatingSystem?"\\OpenVPN\\config":"/etc/openvpn"}),"."]})]})}function r(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},3690:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>r});var i=t(5893),o=t(1151);function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Using emnify, you can create a ",(0,i.jsx)(n.a,{href:"/glossary#vpn",children:"virtual private network (VPN)"})," for your mobile IoT/M2M devices fitted with emnify SIMs.\nData traffic is exchanged between the devices and the application server through an OpenVPN tunnel, enabling direct communication with the IPs of the mobile devices\u2014no network address translation (NAT) applied."]}),"\n",(0,i.jsx)(n.p,{children:"The tunnel is established between the emnify Core Network and the customer's VPN gateway or server."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=yt44fJpfkQ4",children:"Cellular IoT University: Secure your devices with OpenVPN video"})," provides a step-by-step walk-through."]})})]})}function r(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},4374:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>r});var i=t(5893),o=t(1151);function s(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.p,{children:"Any traffic exchanged with mobile devices is encrypted before being transmitted over the public internet, which adds an additional layer of security and privacy.\nNo VPN software needs to be installed on the device, or there aren't any required configuration changes necessary.\nThe default emnify APN also supports VPN flows."})}function r(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},741:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});const i=t.p+"assets/images/portal-integrations-secure-connection-openvpn-show-instructions-5b572787b187feb0e22d21116c63cfba.png"},3359:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});const i=t.p+"assets/images/portal-integrations-secure-connections-openvpn-linux-download-dropdown-67f41641bbd83b0a44ec7e50aaf828ca.png"},2573:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});const i=t.p+"assets/images/portal-integrations-secure-connections-openvpn-linux-download-ea53976e9aaee1a294f2067205ffde5d.png"},132:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});const i=t.p+"assets/images/portal-integrations-secure-connections-openvpn-macos-download-dropdown-3be45a35a66ea296b792dcdb9b1f39f5.png"},1907:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});const i=t.p+"assets/images/portal-integrations-secure-connections-openvpn-macos-download-75d3fb4a95b3aaf80687e6c6f0c4acb6.png"},594:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});const i=t.p+"assets/images/portal-integrations-secure-connections-openvpn-windows-download-dropdown-df03c7df05c13aa49f2323805c433242.png"},9067:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});const i=t.p+"assets/images/portal-integrations-secure-connections-openvpn-windows-download-17cabbaf5f8ead844a4bed5b3a3b732b.png"},1151:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);