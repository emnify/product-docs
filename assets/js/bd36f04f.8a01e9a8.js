"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[7790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?o.createElement(m,c(c({ref:t},l),{},{components:n})):o.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={description:"AWS Intra-Cloud Connect, IPsec",slug:"/services/cloud-connect"},c="Cloud Connect",a={unversionedId:"services/network/cloud-connect",id:"services/network/cloud-connect",title:"Cloud Connect",description:"AWS Intra-Cloud Connect, IPsec",source:"@site/docs/services/network/cloud-connect.md",sourceDirName:"services/network",slug:"/services/cloud-connect",permalink:"/services/cloud-connect",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/network/cloud-connect.md",tags:[],version:"current",lastUpdatedAt:1693920212,formattedLastUpdatedAt:"Sep 5, 2023",frontMatter:{description:"AWS Intra-Cloud Connect, IPsec",slug:"/services/cloud-connect"},sidebar:"mainDocsSidebar",previous:{title:"IoT cloud communication platform",permalink:"/services/iot-cloud-communication-platform"},next:{title:"OpenVPN",permalink:"/services/openvpn"}},s={},u=[{value:"AWS Intra-Cloud Connect",id:"aws-intra-cloud-connect",level:2},{value:"IPsec",id:"ipsec",level:2}],l={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cloud-connect"},"Cloud Connect"),(0,r.kt)("p",null,"The data traffic of regular SIM cards is secured within the mobile network\u2014but traverses the public internet between the mobile network and the application, which makes the device and application susceptible to attacks and prohibits establishing a remote device session."),(0,r.kt)("p",null,"With emnify Cloud Connect your devices and application servers can communicate through a secure private network\u2014with a secure tunnel being established between the emnify platform and your cloud or on-premises application."),(0,r.kt)("p",null,"By eliminating the use of the public internet, Cloud Connect helps you better protect your application infrastructure against attacks like DDoS, port scanning while giving you the possibility to remotely access the devices."),(0,r.kt)("h2",{id:"aws-intra-cloud-connect"},"AWS Intra-Cloud Connect"),(0,r.kt)("p",null,"emnify\u2019s communication platform is deployed on AWS, which simplifies integrations for customers using AWS as an infrastructure.\nWithout having to use the public internet, the integration is directly done with AWS services.\nTo establish a secure private network between your devices and your application you only need to attach your VPC to emnify\u2019s Transit Gateway."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"emnify Cloud Connect with AWS Transit gateway",src:n(4219).Z,width:"1482",height:"702"})),(0,r.kt)("p",null,"For step-by-step instructions, see\xa0the ",(0,r.kt)("a",{parentName:"p",href:"https://www.emnify.com/en/developer-hub/emnify-cloud-connect-into-aws-transit-gateway"},"emnify Cloud Connect integration into AWS Transit Gateway")," guide\xa0or follow the ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Orb3Kvd9pZg"},"emnify Cloud Connect with AWS Transit Gateway video")," video."),(0,r.kt)("h2",{id:"ipsec"},"IPsec"),(0,r.kt)("p",null,"If your application isn't on AWS but on any other cloud services or on-premise, you can utilize Cloud Connect for establishing an IPsec VPN connection."),(0,r.kt)("p",null,"With emnify you can set up an IPsec tunnel to securely transfer your data into your application server."),(0,r.kt)("p",null,"For step-by-step instructions, see\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.emnify.com/en/developer-hub/how-to-setup-an-ipsec-using-emnify-cloudconnect"},"How to setup an IPsec using emnify Cloud Connect"),".\nYou can also find guides to set up IPsec for Azure and Google Cloud in the\xa0",(0,r.kt)("a",{parentName:"p",href:"/integration-guides"},"Integration guides"),"."))}p.isMDXComponent=!0},4219:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/tgw-1766a4c2512962f8e5d911d57f555f2c.png"}}]);