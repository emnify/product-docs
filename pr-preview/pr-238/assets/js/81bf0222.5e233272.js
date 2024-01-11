"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8699],{6141:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var s=i(5893),r=i(1151);const n={description:"SASE approach, DNS, IMEI lock",last_update:{date:"11-16-2023"},slug:"/services/security"},o="Security",a={id:"services/platform/security",title:"Security",description:"SASE approach, DNS, IMEI lock",source:"@site/docs/services/platform/security.md",sourceDirName:"services/platform",slug:"/services/security",permalink:"/pr-preview/pr-238/services/security",draft:!1,unlisted:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/platform/security.md",tags:[],version:"current",lastUpdatedAt:1700092800,formattedLastUpdatedAt:"Nov 16, 2023",frontMatter:{description:"SASE approach, DNS, IMEI lock",last_update:{date:"11-16-2023"},slug:"/services/security"},sidebar:"mainDocsSidebar",previous:{title:"Work with system events",permalink:"/pr-preview/pr-238/system-events/usage"},next:{title:"Global IoT Network",permalink:"/pr-preview/pr-238/services/global-iot-network"}},c={},l=[{value:"Why does IoT require SASE?",id:"why-does-iot-require-sase",level:2},{value:"Security features",id:"security-features",level:2},{value:"DNS",id:"dns",level:3},{value:"IMEI lock",id:"imei-lock",level:3},{value:"Multi-factor authentication",id:"multi-factor-authentication",level:3}];function d(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"security",children:"Security"}),"\n",(0,s.jsx)(t.p,{children:"Given the globally distributed nature of the devices, smaller footprints and lack of resources, it can get difficult to individually secure IoT devices."}),"\n",(0,s.jsx)(t.p,{children:"emnify uses a SASE approach to simplify securing devices\u2014using several services specifically to protect customer data, filtering malicious content and preventing unauthorized access."}),"\n",(0,s.jsx)(t.h2,{id:"why-does-iot-require-sase",children:"Why does IoT require SASE?"}),"\n",(0,s.jsxs)(t.p,{children:["Secure Access Service Edge (",(0,s.jsx)(t.a,{href:"/glossary#sase",children:"SASE"}),") introduces a new architecture where networking and security functions are bundled in a cloud-delivered service.\nThis approach allows you to apply consistent security standards to all your devices independent of the location.\nAdditionally, it enables the integration of security features right from the start."]}),"\n",(0,s.jsx)(t.p,{children:"Key features of\xa0SASE\xa0for IoT architecture include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Dynamic Data Routing with Software-Defined Wide Area Network (SD-WAN)"}),(0,s.jsx)(t.br,{}),"\n","emnify utilizes a SD-WAN to route data to the closest cloud region using the\xa0",(0,s.jsx)(t.a,{href:"iot-cloud-communication-platform#regional-breakout",children:"Regional Breakout"}),"\xa0concept.\nThis enhances latency and data stability, ensuring that data remains within the designated continent and jurisdiction."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Cloud Access Security Broker (CASB)"}),(0,s.jsx)(t.br,{}),"\n","emnify offers centralized policy definition for devices, including networks that can be accessed and authorized IP addresses for remote device access.\nAll configurations are managed through the central platform and applied wherever the device is."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"IoT security threats",src:i(7717).Z+"",width:"1168",height:"668"})}),"\n",(0,s.jsx)(t.h2,{id:"security-features",children:"Security features"}),"\n",(0,s.jsx)(t.p,{children:"The following sections delve into some of the security features offered by emnify."}),"\n",(0,s.jsx)(t.h3,{id:"dns",children:"DNS"}),"\n",(0,s.jsxs)(t.p,{children:["When a device establishes a connection, it uses a Domain Name Service (DNS) server to resolve a hostname to an IP address for data transmission.\nFor example, a hostname like\xa0",(0,s.jsx)(t.code,{children:"iot.example.com"})," is mapped to an IP address like\xa0",(0,s.jsx)(t.code,{children:"192.0.2.1"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Cellular providers typically provide DNS services.\nBy default, emnify routes all DNS queries over Google's public DNS\xa0",(0,s.jsx)(t.code,{children:"8.8.8.8"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Some devices and modules allow you to configure the DNS service.\nFor example, Quectel uses the\xa0",(0,s.jsx)(t.code,{children:"AT+QIDNSCFG"}),"\xa0command, while SIMCom uses the\xa0",(0,s.jsx)(t.code,{children:"AT+CDNSCFG"}),"\xa0command.\nConfiguring the DNS service is beneficial for using your own or private DNS servers, enhancing security and control."]}),"\n",(0,s.jsxs)(t.p,{children:["Customers can also configure to use their own DNS, no matter if it's a public or a private one.\nFor more information, see ",(0,s.jsx)(t.a,{href:"/how-tos/configure-dns-settings",children:"Configure DNS settings"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"imei-lock",children:"IMEI lock"}),"\n",(0,s.jsxs)(t.p,{children:["Device manufacturers often face issues related to SIM card theft, as pluggable SIM cards can be removed from a device and then used to gain free internet access.\nThe IMEI lock feature prevents the use of SIM card in any other device by binding the SIM to a specific ",(0,s.jsx)(t.a,{href:"/glossary#imei",children:"international mobile equipment identity (IMEI)"}),", which serves as a unique device identifier."]}),"\n",(0,s.jsx)(t.p,{children:"When the automatic IMEI lock is configured, the emnify platform binds the SIM cards to the first device that establishes a data connection.\nAll future device connections are restricted to this specific device."}),"\n",(0,s.jsx)(t.h3,{id:"multi-factor-authentication",children:"Multi-factor authentication"}),"\n",(0,s.jsx)(t.p,{children:"Starting January 2024, multi-factor authentication (MFA) will be mandatory for all emnify Portal accounts.\nThis enforcement allows us to proactively safeguard our IoT ecosystem, follow best practices, and meet regulatory security compliance."}),"\n",(0,s.jsxs)(t.p,{children:["For more information, see ",(0,s.jsx)(t.a,{href:"/how-tos/multi-factor-authentication",children:"Set up multi-factor authentication"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7717:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/security-threats-aa07b57daba16c75bddafa6937c42bef.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var s=i(7294);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);