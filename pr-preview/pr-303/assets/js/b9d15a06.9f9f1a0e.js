(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8814],{629:(e,n,t)=>{var o={"./portal-integrations-secure-connections-openvpn-linux-download-dropdown.png":3359,"./portal-integrations-secure-connections-openvpn-macos-download-dropdown.png":132,"./portal-integrations-secure-connections-openvpn-windows-download-dropdown.png":594};function i(e){var n=s(e);return t(n)}function s(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=s,e.exports=i,i.id=629},5431:(e,n,t)=>{var o={"./portal-integrations-secure-connections-openvpn-linux-download.png":2573,"./portal-integrations-secure-connections-openvpn-macos-download.png":1907,"./portal-integrations-secure-connections-openvpn-windows-download.png":9067};function i(e){var n=s(e);return t(n)}function s(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=s,e.exports=i,i.id=5431},9063:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>r});var o=t(5893),i=t(1151);function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsx)(n.p,{children:"You can't use accounts with time-based one-time password (TOTP) MFA enabled to authenticate the OpenVPN tunnel.\nEmail-based MFA doesn't affect OpenVPN."}),(0,o.jsxs)(n.p,{children:["For more information, see the ",(0,o.jsx)(n.a,{href:"https://support.emnify.com/hc/en-us/articles/11119662291740-MFA-FAQ",children:"MFA FAQ in the emnify Knowledge Base"}),"."]})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},5906:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>g});var o=t(5893),i=t(1151),s=t(3690),r=t(4374),a=t(9063),c=t(4413),d=t(6453);const l={description:"Step-by-step guide for integrating OpenVPN on macOS to use on devices with emnify eSIMs.",last_update:{date:"02-19-2024"},pagination_label:"OpenVPN on macOS",sidebar_label:"macOS",slug:"/integration-guides/openvpn-macos"},p="Integrate OpenVPN on macOS",u={id:"services/platform/integration-guides/openvpn/macos",title:"Integrate OpenVPN on macOS",description:"Step-by-step guide for integrating OpenVPN on macOS to use on devices with emnify eSIMs.",source:"@site/docs/services/platform/integration-guides/openvpn/macos.mdx",sourceDirName:"services/platform/integration-guides/openvpn",slug:"/integration-guides/openvpn-macos",permalink:"/pr-preview/pr-303/integration-guides/openvpn-macos",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708300800,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{description:"Step-by-step guide for integrating OpenVPN on macOS to use on devices with emnify eSIMs.",last_update:{date:"02-19-2024"},pagination_label:"OpenVPN on macOS",sidebar_label:"macOS",slug:"/integration-guides/openvpn-macos"},sidebar:"mainDocsSidebar",previous:{title:"OpenVPN on Linux",permalink:"/pr-preview/pr-303/integration-guides/openvpn-linux-ubuntu"},next:{title:"OpenVPN on Windows",permalink:"/pr-preview/pr-303/integration-guides/openvpn-windows"}},h={},g=[{value:"Required preparation in the emnify Portal",id:"required-preparation-in-the-emnify-portal",level:2},{value:"Download the VPN configuration file",id:"download-the-vpn-configuration-file",level:3},{value:"Change the internet breakout region",id:"change-the-internet-breakout-region",level:3},{value:"Set up with OpenVPN",id:"set-up-with-openvpn",level:2},{value:"Install the OpenVPN software",id:"install-the-openvpn-software",level:3},{value:"Create the credentials file",id:"create-the-credentials-file",level:3},{value:"Set up with Tunnelblick",id:"set-up-with-tunnelblick",level:2},{value:"Create credentials",id:"create-credentials",level:3}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"integrate-openvpn-on-macos",children:"Integrate OpenVPN on macOS"}),"\n","\n","\n",(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"required-preparation-in-the-emnify-portal",children:"Required preparation in the emnify Portal"}),"\n",(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"download-the-vpn-configuration-file",children:"Download the VPN configuration file"}),"\n",(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(c.ZP,{imageSrc:"macos",operatingSystem:"macOS"}),"\n",(0,o.jsx)(n.h3,{id:"change-the-internet-breakout-region",children:"Change the internet breakout region"}),"\n",(0,o.jsx)(d.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"set-up-with-openvpn",children:"Set up with OpenVPN"}),"\n",(0,o.jsx)(n.h3,{id:"install-the-openvpn-software",children:"Install the OpenVPN software"}),"\n",(0,o.jsxs)(n.p,{children:["First, install OpenVPN via ",(0,o.jsx)(n.a,{href:"https://formulae.brew.sh/formula/openvpn",children:"Homebrew"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"brew install openvpn\n"})}),"\n",(0,o.jsx)(n.h3,{id:"create-the-credentials-file",children:"Create the credentials file"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo touch /etc/openvpn/credentials.txt\nsudo nano /etc/openvpn/credentials.txt\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"credentials.txt"})," file should contain OrgID and Application Token (preferred):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"orgId\nApplication Token\n"})}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, you can use your username and password:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"username@domain.com\nYourPassword\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Connect with the following command, passing the configuration file to OpenVPN using the ",(0,o.jsx)(n.code,{children:"--config"})," option:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo openvpn --config path/to/emnify-eu-west-1.conf\n"})}),"\n",(0,o.jsx)(n.h2,{id:"set-up-with-tunnelblick",children:"Set up with Tunnelblick"}),"\n",(0,o.jsxs)(n.p,{children:["Drop the configuration file onto the Tunnelblick icon in the top bar.\nAlternatively, drop the configuration file onto the ",(0,o.jsx)(n.strong,{children:"Configurations"})," list via the settings panel in\n",(0,o.jsxs)(n.strong,{children:["VPN Details ",(0,o.jsx)("span",{"aria-label":"and then",children:">"})," Configurations"]}),".\nTunnelblick asks for a user password."]}),"\n",(0,o.jsx)(n.h3,{id:"create-credentials",children:"Create credentials"}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"/etc/openvpn"})," directory, create the credentials file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo touch /etc/openvpn/credentials.txt\nsudo nano /etc/openvpn/credentials.txt\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"To connect to the regions VPN, you need to enter your Mac's password."})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},6453:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>r});var o=t(5893),i=t(1151);function s(e){const n={a:"a",code:"code",li:"li",ol:"ol",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Navigate to ",(0,o.jsx)(n.a,{href:"https://portal.emnify.com/device-policies",children:(0,o.jsx)(n.strong,{children:"Device Policies"})})," in the emnify Portal."]}),"\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"Service Policies"})," section, select the policy assigned to the devices you want to secure and click ",(0,o.jsx)(n.strong,{children:"Details"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Under ",(0,o.jsx)(n.strong,{children:"Internet Breakout Region"}),", set the service policy to a VPN breakout region (for example, ",(0,o.jsx)(n.code,{children:"eu-west-1 (VPN)"}),")."]}),"\n"]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},4413:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>r});var o=t(5893),i=t(1151);function s(e){const n={a:"a",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"Log in to your emnify account"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Navigate to ",(0,o.jsx)(n.strong,{children:"Integrations"})," and find the ",(0,o.jsx)(n.a,{href:"https://portal.emnify.com/integrations#secure-connection",children:(0,o.jsx)(n.strong,{children:"Secure Connection"})})," section."]}),"\n",(0,o.jsxs)(n.li,{children:["Under ",(0,o.jsx)(n.strong,{children:"OpenVPN"}),", select ",(0,o.jsx)(n.strong,{children:"Show instructions"}),"."]}),"\n"]}),"\n",(0,o.jsx)("img",{src:t(741).Z,alt:""}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["Make sure you're on the ",(0,o.jsx)(n.strong,{children:e.operatingSystem})," tab, then click ",(0,o.jsxs)(n.strong,{children:["Download ","Linux"==e.operatingSystem?"client.conf":"client.ovpn"]}),"."]}),"\n"]}),"\n",(0,o.jsx)("img",{src:t(5431)(`./portal-integrations-secure-connections-openvpn-${e.imageSrc}-download.png`).default,alt:""}),"\n",(0,o.jsxs)(n.p,{children:["Select the desired region or choose ",(0,o.jsx)(n.strong,{children:"Download all regions"}),"."]}),"\n",(0,o.jsx)("img",{src:t(629)(`./portal-integrations-secure-connections-openvpn-${e.imageSrc}-download-dropdown.png`).default,alt:"",style:{height:400}}),"\n",(0,o.jsxs)(n.p,{children:["Once downloaded, store that file on your server in the folder ",(0,o.jsx)("code",{children:"Windows"==e.operatingSystem?"\\OpenVPN\\config":"/etc/openvpn"}),"."]})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},3690:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>r});var o=t(5893),i=t(1151);function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Using emnify, you can create a ",(0,o.jsx)(n.a,{href:"/glossary#vpn",children:"virtual private network (VPN)"})," for your mobile IoT/M2M devices fitted with emnify SIMs.\nData traffic is exchanged between the devices and the application server through an OpenVPN tunnel, enabling direct communication with the IPs of the mobile devices\u2014no network address translation (NAT) applied."]}),"\n",(0,o.jsx)(n.p,{children:"The tunnel is established between the emnify Core Network and the customer's VPN gateway or server."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://www.youtube.com/watch?v=yt44fJpfkQ4",children:"Cellular IoT University: Secure your devices with OpenVPN video"})," provides a step-by-step walk-through."]})})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},4374:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>r});var o=t(5893),i=t(1151);function s(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)(n.p,{children:"Any traffic exchanged with mobile devices is encrypted before being transmitted over the public internet, which adds an additional layer of security and privacy.\nNo VPN software needs to be installed on the device, or there aren't any required configuration changes necessary.\nThe default emnify APN also supports VPN flows."})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},741:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});const o=t.p+"assets/images/portal-integrations-secure-connection-openvpn-show-instructions-5b572787b187feb0e22d21116c63cfba.png"},3359:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});const o=t.p+"assets/images/portal-integrations-secure-connections-openvpn-linux-download-dropdown-67f41641bbd83b0a44ec7e50aaf828ca.png"},2573:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});const o=t.p+"assets/images/portal-integrations-secure-connections-openvpn-linux-download-ea53976e9aaee1a294f2067205ffde5d.png"},132:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});const o=t.p+"assets/images/portal-integrations-secure-connections-openvpn-macos-download-dropdown-3be45a35a66ea296b792dcdb9b1f39f5.png"},1907:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});const o=t.p+"assets/images/portal-integrations-secure-connections-openvpn-macos-download-75d3fb4a95b3aaf80687e6c6f0c4acb6.png"},594:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});const o=t.p+"assets/images/portal-integrations-secure-connections-openvpn-windows-download-dropdown-df03c7df05c13aa49f2323805c433242.png"},9067:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});const o=t.p+"assets/images/portal-integrations-secure-connections-openvpn-windows-download-17cabbaf5f8ead844a4bed5b3a3b732b.png"},1151:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a,a:()=>r});var o=t(7294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);