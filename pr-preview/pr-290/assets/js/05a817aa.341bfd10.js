"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[5883],{3899:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(5893),r=t(1151);const s={description:"Overview and setup",last_update:{date:"11-04-2021"},slug:"/services/openvpn"},o="OpenVPN",a={id:"services/network/openvpn",title:"OpenVPN",description:"Overview and setup",source:"@site/docs/services/network/openvpn.md",sourceDirName:"services/network",slug:"/services/openvpn",permalink:"/pr-preview/pr-290/services/openvpn",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1635984e3,formattedLastUpdatedAt:"Nov 4, 2021",frontMatter:{description:"Overview and setup",last_update:{date:"11-04-2021"},slug:"/services/openvpn"},sidebar:"mainDocsSidebar",previous:{title:"Cloud Connect",permalink:"/pr-preview/pr-290/services/cloud-connect"},next:{title:"emnify REST API",permalink:"/pr-preview/pr-290/rest"}},c={},l=[{value:"IoT device requirements",id:"iot-device-requirements",level:2},{value:"Set up OpenVPN using the emnify Portal",id:"set-up-openvpn-using-the-emnify-portal",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"openvpn",children:"OpenVPN"}),"\n",(0,i.jsx)(n.p,{children:"emnify's communication platform hosts an OpenVPN service that allows you to establish a private network between a device and any remote client location.\nThe remote client can be on the application server or any machine that wants to access the device remotely (such as operational staff)."}),"\n",(0,i.jsx)(n.h2,{id:"iot-device-requirements",children:"IoT device requirements"}),"\n",(0,i.jsxs)(n.p,{children:["Your IoT device doesn't need a private APN, OpenVPN software, or dynamic DNS resolution to use the OpenVPN service.\nThrough the emnify SIM, each device has a ",(0,i.jsx)(n.a,{href:"/glossary#static-ip",children:"static"})," ",(0,i.jsx)(n.a,{href:"/glossary#private-ip",children:"private IP address"})," that you can use to identify and address the device."]}),"\n",(0,i.jsx)(n.p,{children:"At the same time, the IoT device can send data through the private tunnel to the IP address of the remote machine."}),"\n",(0,i.jsx)(n.h2,{id:"set-up-openvpn-using-the-emnify-portal",children:"Set up OpenVPN using the emnify Portal"}),"\n",(0,i.jsx)(n.p,{children:"The following steps are required to set up OpenVPN on your machine:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/",children:"emnify Portal"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/device-policies",children:(0,i.jsx)(n.strong,{children:"Device Policies"})})," and set the ",(0,i.jsx)(n.strong,{children:"Service Policy"})," to a VPN breakout region (for example,\xa0",(0,i.jsx)(n.code,{children:"eu-west-1 (VPN)"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Then, navigate to ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/integrations",children:(0,i.jsx)(n.strong,{children:"Integrations"})})," and find the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/integrations#secure-connection",children:(0,i.jsx)(n.strong,{children:"Secure Connection"})})," section.\nOn the ",(0,i.jsx)(n.strong,{children:"OpenVPN"})," panel, click ",(0,i.jsx)(n.strong,{children:"Show Instructions"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Select your operating system and install the OpenVPN software."}),"\n",(0,i.jsx)(n.li,{children:"Download and store the VPN configuration file for your region."}),"\n",(0,i.jsxs)(n.li,{children:["Create the\xa0",(0,i.jsx)(n.code,{children:"credentials.txt"})," file as instructed, using either your ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/user-settings",children:"user credentials"})," or your ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/organisation-settings/details",children:"organization ID"})," and ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/integrations#application-tokens",children:"application token"})," (recommended)"]}),"\n",(0,i.jsx)(n.li,{children:"Follow the remaining steps in the Portal to start the OpenVPN application or service on your operating system."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"You can't use accounts with multi-factor authentication (MFA) enabled to authenticate the OpenVPN tunnel."})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"For more detailed instructions based on your operating system, please refer to the following knowledge base articles:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/integration-guides/openvpn-linux-ubuntu",children:"Linux"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/integration-guides/openvpn-macos",children:"macOS"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/integration-guides/openvpn-windows",children:"Windows"})}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);