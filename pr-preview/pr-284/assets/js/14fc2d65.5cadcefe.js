"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[7583],{114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var i=t(5893),s=t(1151);function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Changes save automatically, but your devices may take up to 24 hours to use the new settings.\nThis can also be forced by ",(0,i.jsx)(n.a,{href:"/portal/connected-devices#reset-connectivity",children:"resetting the connectivity"})," of devices on this service policy."]})})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}const c={description:"How to configure a custom DNS and other DNS settings in the emnify Portal",last_update:{date:"02-22-2024"},slug:"/how-tos/configure-dns-settings"},d="Configure DNS settings",l={id:"how-tos/device-policies/configure-dns-settings",title:"Configure DNS settings",description:"How to configure a custom DNS and other DNS settings in the emnify Portal",source:"@site/docs/how-tos/device-policies/configure-dns-settings.mdx",sourceDirName:"how-tos/device-policies",slug:"/how-tos/configure-dns-settings",permalink:"/pr-preview/pr-284/how-tos/configure-dns-settings",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:170856e4,formattedLastUpdatedAt:"Feb 22, 2024",frontMatter:{description:"How to configure a custom DNS and other DNS settings in the emnify Portal",last_update:{date:"02-22-2024"},slug:"/how-tos/configure-dns-settings"},sidebar:"mainDocsSidebar",previous:{title:"Configure data and SMS limits",permalink:"/pr-preview/pr-284/how-tos/configure-data-sms-limits"},next:{title:"Manage data or SMS quotas",permalink:"/pr-preview/pr-284/how-tos/manage-data-sms-quotas"}},a={},h=[{value:"Add a custom DNS",id:"add-a-custom-dns",level:2},{value:"Edit a custom DNS",id:"edit-a-custom-dns",level:2},{value:"Delete a custom DNS",id:"delete-a-custom-dns",level:2},{value:"Configure DNS settings with the emnify REST API",id:"configure-dns-settings-with-the-emnify-rest-api",level:2}];function u(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configure-dns-settings",children:"Configure DNS settings"}),"\n","\n","\n",(0,i.jsx)(n.p,{children:"You have the option to configure your own DNS settings, no matter if it's a public or a private server.\nDNS settings can be changed in the emnify Portal.\nBy default, emnify uses the Google DNS 8.8.8.8 and 8.8.4.4."}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"Utilizing a private DNS server that isn't accessible via the public internet requires establishing a private network with the device or a network where the private DNS server is situated.\nThis can be accomplished using Cloud Connect through Amazon Transit Gateway or IPsec."}),(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://www.emnify.com/developer-blog/dns-filtering",children:"DNS Filtering with emnify Cloud Connect and AWS Route53"})," on the emnify Developer Blog for step-by-step instructions."]})]}),"\n",(0,i.jsx)(n.h2,{id:"add-a-custom-dns",children:"Add a custom DNS"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"Log in to your emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/device-policies",children:(0,i.jsx)(n.strong,{children:"Device Policies"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Find your desired service policy in the ",(0,i.jsx)(n.strong,{children:"Service Policies"})," section and expand the policy details."]}),"\n",(0,i.jsxs)(n.li,{children:["In ",(0,i.jsx)(n.strong,{children:"Data"}),", find the ",(0,i.jsx)(n.strong,{children:"Custom DNS Server"})," section.\nBy default, the badge next to the section title reads ",(0,i.jsx)(n.strong,{children:"Default DNS"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Edit"})," (pencil icon) to open the configuration modal."]}),"\n",(0,i.jsxs)(n.li,{children:["Enter a valid IP address in the ",(0,i.jsx)(n.strong,{children:"Primary NS"})," and ",(0,i.jsx)(n.strong,{children:"Secondary NS"})," fields.\nClick ",(0,i.jsx)(n.strong,{children:"\u2713 Confirm"})," to save your changes."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Custom DNS Server"})," section of the policy details should display the ",(0,i.jsx)(n.strong,{children:"Configured DNS"})," badge and the updated IP address values."]}),"\n",(0,i.jsx)(r,{}),"\n",(0,i.jsx)(n.h2,{id:"edit-a-custom-dns",children:"Edit a custom DNS"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"Log in to your emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/device-policies",children:(0,i.jsx)(n.strong,{children:"Device Policies"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Find your desired service policy in the ",(0,i.jsx)(n.strong,{children:"Service Policies"})," section and expand the policy details."]}),"\n",(0,i.jsxs)(n.li,{children:["In ",(0,i.jsx)(n.strong,{children:"Data"}),", find the ",(0,i.jsx)(n.strong,{children:"Custom DNS Server"})," section.\nThe badge next to the section title should read ",(0,i.jsx)(n.strong,{children:"Configured DNS"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Edit"})," (pencil icon) to open the configuration modal."]}),"\n",(0,i.jsxs)(n.li,{children:["Edit the ",(0,i.jsx)(n.strong,{children:"Primary NS"})," or ",(0,i.jsx)(n.strong,{children:"Secondary NS"})," field, then click ",(0,i.jsx)(n.strong,{children:"\u2713 Confirm"})," to save your changes."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Custom DNS Server"})," section of the policy details should display the updated IP address values."]}),"\n",(0,i.jsx)(r,{}),"\n",(0,i.jsx)(n.h2,{id:"delete-a-custom-dns",children:"Delete a custom DNS"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://portal.emnify.com/sign",children:"Log in to your emnify account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/device-policies",children:(0,i.jsx)(n.strong,{children:"Device Policies"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Find your desired service policy in the ",(0,i.jsx)(n.strong,{children:"Service Policies"})," section and expand the policy details."]}),"\n",(0,i.jsxs)(n.li,{children:["In ",(0,i.jsx)(n.strong,{children:"Data"}),", find the ",(0,i.jsx)(n.strong,{children:"Custom DNS Server"})," section.\nThe badge next to the section title should read ",(0,i.jsx)(n.strong,{children:"Configured DNS"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Edit"})," (pencil icon) to open the configuration modal."]}),"\n",(0,i.jsxs)(n.li,{children:["Remove the values from the ",(0,i.jsx)(n.strong,{children:"Primary NS"})," and ",(0,i.jsx)(n.strong,{children:"Secondary NS"})," fields, then click ",(0,i.jsx)(n.strong,{children:"\u2713 Confirm"})," to save your changes."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Custom DNS Server"})," section of the policy details should display the ",(0,i.jsx)(n.strong,{children:"Default DNS"})," badge and the updated IP address values."]}),"\n",(0,i.jsx)(r,{}),"\n",(0,i.jsx)(n.h2,{id:"configure-dns-settings-with-the-emnify-rest-api",children:"Configure DNS settings with the emnify REST API"}),"\n",(0,i.jsxs)(n.p,{children:["You can also add, list, or delete DNS configurations using the emnify REST API.\nFor step-by-step instructions, see ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/configure-dns-settings.html",children:"Configure DNS Settings"})," in the emnify System Documentation."]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);