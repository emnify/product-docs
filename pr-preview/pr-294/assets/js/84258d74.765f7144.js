"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6703],{7725:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=s(5893),i=s(1151),r=s(5944),o=s(5564);const c={description:"Set up SSO for your emnify account with Microsoft Active Directory",last_update:{date:"12-20-2022"},pagination_next:"how-tos/sso/google-cloud-platform",sidebar_label:"Microsoft Active Directory",slug:"/sso/microsoft-active-directory"},a="Set up SSO with Microsoft Active Directory",d={id:"how-tos/sso/microsoft-active-directory",title:"Set up SSO with Microsoft Active Directory",description:"Set up SSO for your emnify account with Microsoft Active Directory",source:"@site/docs/how-tos/sso/microsoft-active-directory.mdx",sourceDirName:"how-tos/sso",slug:"/sso/microsoft-active-directory",permalink:"/pr-preview/pr-294/sso/microsoft-active-directory",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1671494400,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{description:"Set up SSO for your emnify account with Microsoft Active Directory",last_update:{date:"12-20-2022"},pagination_next:"how-tos/sso/google-cloud-platform",sidebar_label:"Microsoft Active Directory",slug:"/sso/microsoft-active-directory"},sidebar:"mainDocsSidebar",previous:{title:"Set up multi-factor authentication",permalink:"/pr-preview/pr-294/how-tos/multi-factor-authentication"},next:{title:"Google Cloud Platform",permalink:"/pr-preview/pr-294/sso/google-cloud-platform"}},l={},h=[{value:"SSO with Microsoft",id:"sso-with-microsoft",level:2},{value:"Configure the emnify Portal",id:"configure-the-emnify-portal",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"set-up-sso-with-microsoft-active-directory",children:"Set up SSO with Microsoft Active Directory"}),"\n","\n","\n",(0,t.jsx)(r.ZP,{provider:"Microsoft Business",prereq:"An Azure Subscription with an Active Directory license",platform:"Azure"}),"\n",(0,t.jsx)(n.h2,{id:"sso-with-microsoft",children:"SSO with Microsoft"}),"\n",(0,t.jsxs)(n.p,{children:["Log in to Azure and navigate to ",(0,t.jsx)(n.strong,{children:"Azure Active Directory"})," in the left sidebar."]}),"\n",(0,t.jsx)("img",{src:s(2567).Z,alt:"",className:"no-border"}),"\n",(0,t.jsxs)(n.p,{children:["At the top of the page, click ",(0,t.jsx)(n.strong,{children:"+ Add"}),"\xa0and then\xa0",(0,t.jsx)(n.strong,{children:"App Registration"}),".\nFrom there:"]}),"\n",(0,t.jsx)("img",{src:s(7908).Z,alt:"",className:"no-border"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Give your app a\xa0",(0,t.jsx)(n.strong,{children:"Name"}),'\xa0(for example,\xa0"emnify").']}),"\n",(0,t.jsxs)(n.li,{children:["The\xa0",(0,t.jsx)(n.strong,{children:"Supported Account Types"}),"\xa0should be\xa0",(0,t.jsx)(n.code,{children:"Multitenant"}),".\nThis requests a consent screen on IDP verification in the Portal later."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the Redirect URI to type\xa0",(0,t.jsx)(n.code,{children:"Web"}),"\xa0with the value:\xa0",(0,t.jsx)(n.code,{children:"https://prod-e5.okta.com/oauth2/v1/authorize/callback"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:s(1884).Z,alt:"",className:"no-border"}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to\xa0",(0,t.jsx)(n.strong,{children:"Authentication"}),"\xa0in the left sidebar, and in the section\xa0",(0,t.jsx)(n.strong,{children:"Implicit grand and hybrid flows"}),",\xa0enable\xa0",(0,t.jsx)(n.code,{children:"Access tokens"}),"\xa0and\xa0",(0,t.jsx)(n.code,{children:"ID tokens"}),"."]}),"\n",(0,t.jsx)("img",{src:s(6741).Z,alt:"",className:"no-border"}),"\n",(0,t.jsxs)(n.p,{children:["Go to\xa0",(0,t.jsx)(n.strong,{children:"Token configuration"}),"\xa0in the left sidebar, click ",(0,t.jsx)(n.strong,{children:"Add optional claim"}),",\xa0and under\xa0",(0,t.jsx)(n.strong,{children:"SAML"}),",\xa0enable the\xa0",(0,t.jsx)(n.code,{children:"upn"}),"\xa0claim.\nLeave the option\xa0",(0,t.jsx)(n.code,{children:"Turn on the Microsoft Graph profile"}),"\xa0permission unchecked."]}),"\n",(0,t.jsx)("img",{src:s(9114).Z,alt:"",className:"no-border"}),"\n",(0,t.jsxs)(n.p,{children:["Head to\xa0",(0,t.jsx)(n.strong,{children:"API permissions"}),"\xa0in the left sidebar, click the existing permission entry\xa0",(0,t.jsx)(n.strong,{children:"Microsoft Graph (1)"}),"\xa0and confirm the\xa0",(0,t.jsx)(n.code,{children:"email"}),"\xa0and\xa0",(0,t.jsx)(n.code,{children:"profile"}),"\xa0OpenID permissions."]}),"\n",(0,t.jsx)("img",{src:s(1588).Z,alt:"",className:"no-border"}),"\n",(0,t.jsx)(n.p,{children:"Your configuration should look like this:"}),"\n",(0,t.jsx)("img",{src:s(1620).Z,alt:"",className:"no-border"}),"\n",(0,t.jsxs)(n.p,{children:["In the left sidebar, go to\xa0",(0,t.jsx)(n.strong,{children:"Expose an API"}),", click ",(0,t.jsx)(n.strong,{children:"Set"}),",\xa0and then click\xa0",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n",(0,t.jsx)("img",{src:s(9275).Z,alt:"",className:"no-border"}),"\n",(0,t.jsxs)(n.p,{children:["After navigating to\xa0",(0,t.jsx)(n.strong,{children:"Certificates & Secrets"}),"\xa0in the left sidebar, click\xa0",(0,t.jsx)(n.strong,{children:"New client secret"}),"."]}),"\n",(0,t.jsx)("img",{src:s(5727).Z,alt:"",className:"no-border"}),"\n",(0,t.jsxs)(n.p,{children:["Copy the\xa0",(0,t.jsx)(n.strong,{children:"Value"}),"\xa0and save it to a secure location."]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"This value won't be shown again."})}),"\n",(0,t.jsx)("img",{src:s(4599).Z,alt:"",className:"no-border"}),"\n",(0,t.jsx)(n.p,{children:"Choose an expiration date and mark your calendar to generate and configure a new secret before it expires."}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to\xa0",(0,t.jsx)(n.strong,{children:"Overview"}),"\xa0in the sidebar and copy the\xa0",(0,t.jsx)(n.strong,{children:"Application (client) ID"})," to use later in the emnify Portal."]}),"\n",(0,t.jsx)("img",{src:s(9684).Z,alt:"",className:"no-border"}),"\n",(0,t.jsx)(n.h2,{id:"configure-the-emnify-portal",children:"Configure the emnify Portal"}),"\n",(0,t.jsx)(o.ZP,{provider:"Microsoft"})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},5564:(e,n,s)=>{s.d(n,{ZP:()=>o});var t=s(5893),i=s(1151);function r(e){const n={a:"a",admonition:"admonition",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://portal.emnify.com/sign/",children:"Log in to the emnify Portal"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Workspace settings"})," (building icon) in the top-level navigation and click ",(0,t.jsx)(n.a,{href:"https://portal.emnify.com/organisation-settings/federation",children:(0,t.jsx)(n.strong,{children:"Single Sign-On"})}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If you need SSO enabled for your account, ",(0,t.jsx)(n.a,{href:"https://support.emnify.com/",children:"contact emnify support"}),".\nOtherwise, click ",(0,t.jsx)(n.strong,{children:"Add"})," under the ",e.provider," SSO provider."]}),"\n",(0,t.jsxs)(n.li,{children:["Enter the ",(0,t.jsx)(n.strong,{children:"Client ID"})," and ",(0,t.jsx)(n.strong,{children:"Client Secret"})," you copied earlier, then click ",(0,t.jsx)(n.strong,{children:"Create and Activate"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Once you're back on ",(0,t.jsx)(n.strong,{children:"Single Sign-On"}),", you should see ",e.provider," listed as a ",(0,t.jsx)(n.strong,{children:"Provider"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Finally, click ",(0,t.jsx)(n.strong,{children:"Verify Integration"})," and follow the prompts."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"You must complete the final step and verify the provider to configure SSO."})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"/sso/troubleshooting",children:"Troubleshooting page"})," if you encounter issues while setting up SSO."]})})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},5944:(e,n,s)=>{s.d(n,{ZP:()=>o});var t=s(5893),i=s(1151);function r(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This guide walks through enabling single sign-on (SSO), so your organization can access the emnify Portal using your ",e.provider," credentials."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",e.prereq,"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["An ",(0,t.jsx)(n.a,{href:"/quickstart",children:"emnify account"})," using the same email address as the one used to sign in to ",e.platform]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["If your email address used in the emnify Portal differs from the one used to log in to ",e.platform,", this setup won't work.\nYou can verify your email in ",(0,t.jsx)(n.a,{href:"https://portal.emnify.com/user-settings",children:(0,t.jsx)(n.strong,{children:"User Settings"})}),"."]}),(0,t.jsxs)(n.p,{children:["Instead, add an additional user with the ",(0,t.jsx)(n.strong,{children:"Administrator"})," role.\nTo do this, go to ",(0,t.jsx)(n.strong,{children:"Workspace settings"}),"\xa0",(0,t.jsx)("span",{"aria-label":"and then",children:">"})," ",(0,t.jsx)(n.a,{href:"https://portal.emnify.com/organisation-settings/users",children:(0,t.jsx)(n.strong,{children:"Users"})}),"."]})]})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},2567:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sso-azure-active-directory-c88db902d47efb335b03becdd14a1c36.png"},1588:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sso-azure-api-permissions-1-b0658aec97affeaa010415176390ae89.png"},1620:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sso-azure-api-permissions-2-fc1690006d90397db039dfae55ce7df0.png"},9684:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sso-azure-app-id-cc89c827337ad1823b184737e3102a8e.png"},1884:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sso-azure-app-registration-details-ad59c23822be8e605aa1b22b4efca929.png"},7908:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sso-azure-app-registration-47ca42337939d7a25d9cff45a616d0ba.png"},6741:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sso-azure-authentication-c3e45c5d2ddf13a80e18cfb266e7cd56.png"},9275:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sso-azure-expose-api-bd5b6ec455fd51e84a1e775cab8d2389.png"},4599:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sso-azure-new-client-secret-returned-a7fe8be5cd6dd84ca737347a3aca481c.png"},5727:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sso-azure-new-client-secret-8ca733a82abfa4c3dce3eee230b88a31.png"},9114:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sso-azure-token-configuration-833571745ee26da1cf03919dddd34026.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var t=s(7294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);