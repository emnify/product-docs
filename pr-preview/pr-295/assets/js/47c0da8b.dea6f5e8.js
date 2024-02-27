"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8311],{3395:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var i=t(5893),s=t(1151),r=t(9063);const a={description:"Overview and setup",last_update:{date:"02-19-2024"},slug:"/services/openvpn"},o="OpenVPN",c={id:"services/network/openvpn",title:"OpenVPN",description:"Overview and setup",source:"@site/docs/services/network/openvpn.mdx",sourceDirName:"services/network",slug:"/services/openvpn",permalink:"/pr-preview/pr-295/services/openvpn",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708300800,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{description:"Overview and setup",last_update:{date:"02-19-2024"},slug:"/services/openvpn"},sidebar:"mainDocsSidebar",previous:{title:"Cloud Connect",permalink:"/pr-preview/pr-295/services/cloud-connect"},next:{title:"emnify REST API",permalink:"/pr-preview/pr-295/rest"}},d={},p=[{value:"IoT device requirements",id:"iot-device-requirements",level:2},{value:"Available guides",id:"available-guides",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"openvpn",children:"OpenVPN"}),"\n","\n","\n",(0,i.jsx)(n.p,{children:"emnify's communication platform hosts an OpenVPN service that allows you to establish a private network between a device and any remote client location.\nThe remote client can be on the application server or any machine that wants to access the device remotely (such as operational staff)."}),"\n",(0,i.jsx)(n.h2,{id:"iot-device-requirements",children:"IoT device requirements"}),"\n",(0,i.jsxs)(n.p,{children:["Your IoT device doesn't need a private APN, OpenVPN software, or dynamic DNS resolution to use the OpenVPN service.\nThrough the emnify SIM, each device has a ",(0,i.jsx)(n.a,{href:"/glossary#static-ip",children:"static"})," ",(0,i.jsx)(n.a,{href:"/glossary#private-ip",children:"private IP address"})," that you can use to identify and address the device."]}),"\n",(0,i.jsx)(n.p,{children:"At the same time, the IoT device can send data through the private tunnel to the IP address of the remote machine."}),"\n",(0,i.jsx)(n.h2,{id:"available-guides",children:"Available guides"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/integration-guides/openvpn-linux-ubuntu",children:"Linux"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/integration-guides/openvpn-macos",children:"macOS"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/integration-guides/openvpn-windows",children:"Windows"})}),"\n"]}),"\n",(0,i.jsx)(r.ZP,{})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9063:(e,n,t)=>{t.d(n,{ZP:()=>a});var i=t(5893),s=t(1151);function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"You can't use accounts with time-based one-time password (TOTP) MFA enabled to authenticate the OpenVPN tunnel.\nEmail-based MFA doesn't affect OpenVPN."}),(0,i.jsxs)(n.p,{children:["For more information, see the ",(0,i.jsx)(n.a,{href:"https://support.emnify.com/hc/en-us/articles/11119662291740-MFA-FAQ",children:"MFA FAQ in the emnify Knowledge Base"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(7294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);