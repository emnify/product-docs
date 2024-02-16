"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[7583],{114:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var i=n(5893),t=n(1151);function o(e){const s={a:"a",admonition:"admonition",p:"p",...(0,t.a)(),...e.components};return(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["Changes save automatically, but your devices may take up to 24 hours to use the new settings.\nThis can also be forced by ",(0,i.jsx)(s.a,{href:"/portal/connected-devices#reset-connectivity",children:"resetting the connectivity"})," of devices on this service policy."]})})}function c(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}const r={description:"How to configure DNS settings",last_update:{date:"01-31-2024"},slug:"/how-tos/configure-dns-settings"},l="Configure DNS settings",d={id:"how-tos/device-policies/configure-dns-settings",title:"Configure DNS settings",description:"How to configure DNS settings",source:"@site/docs/how-tos/device-policies/configure-dns-settings.mdx",sourceDirName:"how-tos/device-policies",slug:"/how-tos/configure-dns-settings",permalink:"/pr-preview/pr-287/how-tos/configure-dns-settings",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1706659200,formattedLastUpdatedAt:"Jan 31, 2024",frontMatter:{description:"How to configure DNS settings",last_update:{date:"01-31-2024"},slug:"/how-tos/configure-dns-settings"},sidebar:"mainDocsSidebar",previous:{title:"Configure data and SMS limits",permalink:"/pr-preview/pr-287/how-tos/configure-data-sms-limits"},next:{title:"Manage data or SMS quotas",permalink:"/pr-preview/pr-287/how-tos/manage-data-sms-quotas"}},a={},h=[{value:"Add a custom DNS",id:"add-a-custom-dns",level:2},{value:"Edit a custom DNS",id:"edit-a-custom-dns",level:2},{value:"Delete a custom DNS",id:"delete-a-custom-dns",level:2},{value:"Configure DNS settings with the emnify REST API",id:"configure-dns-settings-with-the-emnify-rest-api",level:2}];function p(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"configure-dns-settings",children:"Configure DNS settings"}),"\n","\n","\n",(0,i.jsx)(s.p,{children:"You have the option to configure your own DNS settings, no matter if it's a public or a private server.\nDNS settings can be changed in the emnify Portal.\nBy default, emnify uses the Google DNS 8.8.8.8 and 8.8.4.4."}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"Utilizing a private DNS server that isn't accessible via the public internet requires establishing a private network with the device or a network where the private DNS server is situated.\nThis can be accomplished using Cloud Connect through Amazon Transit Gateway or IPsec."}),(0,i.jsxs)(s.p,{children:["See ",(0,i.jsx)(s.a,{href:"https://www.emnify.com/developer-blog/dns-filtering",children:"DNS Filtering with emnify Cloud Connect and AWS Route53"})," on the emnify Developer Blog for step-by-step instructions."]})]}),"\n",(0,i.jsx)(s.h2,{id:"add-a-custom-dns",children:"Add a custom DNS"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://portal.emnify.com/sign",children:"Log in to your emnify account"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Navigate to ",(0,i.jsx)(s.a,{href:"https://portal.emnify.com/device-policies",children:(0,i.jsx)(s.strong,{children:"Device Policies"})}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Find your desired service policy in the ",(0,i.jsx)(s.strong,{children:"Service Policies"})," section and click ",(0,i.jsx)(s.strong,{children:"Details"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:n(2279).Z,alt:""}),"\n",(0,i.jsxs)(s.ol,{start:"4",children:["\n",(0,i.jsxs)(s.li,{children:["Select the ",(0,i.jsx)(s.strong,{children:"More options"})," tab to find the ",(0,i.jsx)(s.strong,{children:"Custom DNS"})," section."]}),"\n",(0,i.jsxs)(s.li,{children:["Click ",(0,i.jsx)(s.strong,{children:"Configure custom DNS"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:n(5074).Z,alt:""}),"\n",(0,i.jsxs)(s.ol,{start:"6",children:["\n",(0,i.jsxs)(s.li,{children:["Enter the primary and secondary DNS, then click ",(0,i.jsx)(s.strong,{children:"Add custom DNS"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:n(8082).Z,alt:""}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(s.h2,{id:"edit-a-custom-dns",children:"Edit a custom DNS"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://portal.emnify.com/sign",children:"Log in to your emnify account"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Navigate to ",(0,i.jsx)(s.a,{href:"https://portal.emnify.com/device-policies",children:(0,i.jsx)(s.strong,{children:"Device Policies"})}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Find your desired service policy in the ",(0,i.jsx)(s.strong,{children:"Service Policies"})," section and click ",(0,i.jsx)(s.strong,{children:"Details"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:n(2279).Z,alt:""}),"\n",(0,i.jsxs)(s.ol,{start:"4",children:["\n",(0,i.jsxs)(s.li,{children:["Select the ",(0,i.jsx)(s.strong,{children:"More options"})," tab to find the ",(0,i.jsx)(s.strong,{children:"Custom DNS"})," section."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:n(284).Z,alt:""}),"\n",(0,i.jsxs)(s.ol,{start:"5",children:["\n",(0,i.jsxs)(s.li,{children:["Click ",(0,i.jsx)(s.strong,{children:"Edit"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:n(9717).Z,alt:""}),"\n",(0,i.jsxs)(s.ol,{start:"6",children:["\n",(0,i.jsxs)(s.li,{children:["Edit the primary or secondary DNS, then select ",(0,i.jsx)(s.strong,{children:"Save custom DNS"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:n(2998).Z,alt:""}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(s.h2,{id:"delete-a-custom-dns",children:"Delete a custom DNS"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://portal.emnify.com/sign",children:"Log in to your emnify account"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Navigate to ",(0,i.jsx)(s.a,{href:"https://portal.emnify.com/device-policies",children:(0,i.jsx)(s.strong,{children:"Device Policies"})}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Find your desired service policy in the ",(0,i.jsx)(s.strong,{children:"Service Policies"})," section and click ",(0,i.jsx)(s.strong,{children:"Details"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:n(2279).Z,alt:""}),"\n",(0,i.jsxs)(s.ol,{start:"4",children:["\n",(0,i.jsxs)(s.li,{children:["Select the ",(0,i.jsx)(s.strong,{children:"More options"})," tab to find the ",(0,i.jsx)(s.strong,{children:"Custom DNS"})," section."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:n(284).Z,alt:""}),"\n",(0,i.jsxs)(s.ol,{start:"5",children:["\n",(0,i.jsxs)(s.li,{children:["Click ",(0,i.jsx)(s.strong,{children:"Edit"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:n(9717).Z,alt:""}),"\n",(0,i.jsxs)(s.ol,{start:"6",children:["\n",(0,i.jsxs)(s.li,{children:["Finally, select ",(0,i.jsx)(s.strong,{children:"Remove custom DNS"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:n(8989).Z,alt:""}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(s.h2,{id:"configure-dns-settings-with-the-emnify-rest-api",children:"Configure DNS settings with the emnify REST API"}),"\n",(0,i.jsxs)(s.p,{children:["You can also add, list, or delete DNS configurations using the emnify Rest API.\nFor step-by-step instructions, see ",(0,i.jsx)(s.a,{href:"https://cdn.emnify.net/api/doc/configure-dns-settings.html",children:"Configure DNS Settings"})," in the emnify System Documentation."]})]})}function g(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},5074:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/portal-device-policies-service-policies-details-more-options-configure-custom-dns-e8f19df40c349326c73d99ae92faf044.png"},8082:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/portal-device-policies-service-policies-details-more-options-custom-dns-add-103953dacc62a7ff7098f53f9005217c.png"},9717:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/portal-device-policies-service-policies-details-more-options-custom-dns-edit-b20e9707cfc9458695b9a5fa0db57674.png"},284:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/portal-device-policies-service-policies-details-more-options-custom-dns-f40a76e56c2295b0f357a15e5c78c120.png"},2279:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/portal-device-policies-service-policies-details-f50b4c7f90645e7568b7578013d9376a.png"},8989:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/portal-device-policies-service-policies-more-options-custom-dns-remove-628646b26e16c95ead0c0357cadcb50c.png"},2998:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/portal-device-policies-service-policies-more-options-custom-dns-save-235bb0e67665308bea0b70cf8be3aa0f.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>c});var i=n(7294);const t={},o=i.createContext(t);function c(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);