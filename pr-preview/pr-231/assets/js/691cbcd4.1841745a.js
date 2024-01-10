"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[9106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={description:"How to configure DNS settings",last_update:{date:"01-17-2023"},slug:"/how-tos/configure-dns-settings"},a="Configure DNS settings",s={unversionedId:"how-tos/configure-dns-settings",id:"how-tos/configure-dns-settings",title:"Configure DNS settings",description:"How to configure DNS settings",source:"@site/docs/how-tos/configure-dns-settings.md",sourceDirName:"how-tos",slug:"/how-tos/configure-dns-settings",permalink:"/pr-preview/pr-231/how-tos/configure-dns-settings",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/how-tos/configure-dns-settings.md",tags:[],version:"current",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"How to configure DNS settings",last_update:{date:"01-17-2023"},slug:"/how-tos/configure-dns-settings"},sidebar:"mainDocsSidebar",previous:{title:"How-tos",permalink:"/pr-preview/pr-231/how-tos"},next:{title:"Change data allowances",permalink:"/pr-preview/pr-231/how-tos/data-allowances"}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-dns-settings"},"Configure DNS settings"),(0,o.kt)("p",null,"You have the option to configure your own DNS settings, no matter if it's a public or a private server.\nDNS settings can be changed in the emnify Portal."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://portal.emnify.com/sign"},"Log in to your emnify account"),"."),(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://portal.emnify.com/device-policies"},(0,o.kt)("strong",{parentName:"a"},"Device Policies")),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"New service policy"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"More options")," tab to find the ",(0,o.kt)("strong",{parentName:"li"},"Custom DNS")," section.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Utilizing a private DNS server that isn't accessible via the public internet requires establishing a private network with the device or a network where the private DNS server is situated.\nThis can be accomplished using Cloud Connect through Amazon Transit Gateway or IPsec."),(0,o.kt)("p",{parentName:"admonition"},"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.emnify.com/developer-blog/dns-filtering"},"DNS Filtering with emnify Cloud Connect and AWS Route53")," on the emnify Developer Blog for step-by-step instructions.")))}u.isMDXComponent=!0}}]);