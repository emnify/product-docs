"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={description:"Overview and setup"},i="OpenVPN",p={unversionedId:"services/openvpn",id:"services/openvpn",title:"OpenVPN",description:"Overview and setup",source:"@site/docs/services/openvpn.md",sourceDirName:"services",slug:"/services/openvpn",permalink:"/services/openvpn",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/openvpn.md",tags:[],version:"current",lastUpdatedAt:1678379714,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{description:"Overview and setup"},sidebar:"mainDocsSidebar",previous:{title:"Cloud Connect",permalink:"/services/cloud-connect"},next:{title:"SMS",permalink:"/services/sms"}},s={},l=[{value:"IoT device requirements",id:"iot-device-requirements",level:2},{value:"Setting up OpenVPN using the emnify Portal",id:"setting-up-openvpn-using-the-emnify-portal",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openvpn"},"OpenVPN"),(0,a.kt)("p",null,"emnify's communication platform hosts an OpenVPN service that allows you to establish a private network between a device and any remote client location.\nThe remote client can be on the application server or any machine that wants to access the device remotely (such as operational staff)."),(0,a.kt)("h2",{id:"iot-device-requirements"},"IoT device requirements"),(0,a.kt)("p",null,"Your IoT device doesn't need a private APN, OpenVPN software, or dynamic DNS resolution to use the OpenVPN service.\nThrough the emnify SIM, each device will have a ",(0,a.kt)("a",{parentName:"p",href:"/glossary#static-ip"},"static")," ",(0,a.kt)("a",{parentName:"p",href:"/glossary#private-ip"},"private IP address")," that you can use to identify and address the device."),(0,a.kt)("p",null,"At the same time, the IoT device can send data through the private tunnel to the IP address of the remote machine."),(0,a.kt)("h2",{id:"setting-up-openvpn-using-the-emnify-portal"},"Setting up OpenVPN using the emnify Portal"),(0,a.kt)("p",null,"The following steps are required to set up OpenVPN on your machine:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("a",{parentName:"li",href:"https://portal.emnify.com/"},"emnify Portal")," \u2192 ",(0,a.kt)("a",{parentName:"li",href:"https://portal.emnify.com/device-policies"},(0,a.kt)("strong",{parentName:"a"},"Device Policies")),": Set the ",(0,a.kt)("strong",{parentName:"li"},"Service Policy")," to a VPN breakout region, e.g.,\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"eu-west-1 (VPN)")),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("a",{parentName:"li",href:"https://portal.emnify.com/"},"emnify Portal")," \u2192 ",(0,a.kt)("a",{parentName:"li",href:"https://portal.emnify.com/integrations"},(0,a.kt)("strong",{parentName:"a"},"Integrations"))," \u2192 ",(0,a.kt)("a",{parentName:"li",href:"https://portal.emnify.com/integrations#secure-connection"},(0,a.kt)("strong",{parentName:"a"},"Secure Connection"))," \u2192 ",(0,a.kt)("strong",{parentName:"li"},"OpenVPN")," \u2192 Click ",(0,a.kt)("strong",{parentName:"li"},"Show Instructions")," "),(0,a.kt)("li",{parentName:"ol"},"Select your operating system and install the OpenVPN software."),(0,a.kt)("li",{parentName:"ol"},"Download and store the VPN configuration file for your region."),(0,a.kt)("li",{parentName:"ol"},"Create the\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"credentials.txt")," file as instructed, using either your ",(0,a.kt)("a",{parentName:"li",href:"https://portal.emnify.com/user-settings"},"user credentials")," or your ",(0,a.kt)("a",{parentName:"li",href:"https://portal.emnify.com/organisation-settings/details"},"organization ID")," and ",(0,a.kt)("a",{parentName:"li",href:"https://portal.emnify.com/integrations#application-tokens"},"application token")," (recommended)"),(0,a.kt)("li",{parentName:"ol"},"Follow the remaining steps in the Portal to start the OpenVPN application or service on your operating system.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You can't use accounts with multi-factor authentication (MFA) enabled to authenticate the OpenVPN tunnel.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For more detailed instructions based on your operating system, please refer to our knowledge base articles:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.emnify.com/hc/en-us/articles/360019625379-OpenVPN-Integration-Guide-for-MacOS"},"MacOS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.emnify.com/hc/en-us/articles/115001723273-OpenVPN-Integration-Guide-for-Windows"},"Windows")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.emnify.com/hc/en-us/articles/115001724434-OpenVPN-Integration-Guide-for-Linux"},"Linux")))))}u.isMDXComponent=!0}}]);