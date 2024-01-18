"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6703],{7725:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=t(5893),i=t(1151);const o={description:"Setup SSO for your emnify account with Microsoft Active Directory",last_update:{date:"12-20-2022"},pagination_next:"how-tos/sso/google-cloud-platform",sidebar_label:"Microsoft Active Directory",slug:"/sso/microsoft-active-directory"},r="Setup SSO with Microsoft Active Directory",c={id:"how-tos/sso/microsoft-active-directory",title:"Setup SSO with Microsoft Active Directory",description:"Setup SSO for your emnify account with Microsoft Active Directory",source:"@site/docs/how-tos/sso/microsoft-active-directory.mdx",sourceDirName:"how-tos/sso",slug:"/sso/microsoft-active-directory",permalink:"/sso/microsoft-active-directory",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1671494400,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{description:"Setup SSO for your emnify account with Microsoft Active Directory",last_update:{date:"12-20-2022"},pagination_next:"how-tos/sso/google-cloud-platform",sidebar_label:"Microsoft Active Directory",slug:"/sso/microsoft-active-directory"},sidebar:"mainDocsSidebar",previous:{title:"Set up multi-factor authentication",permalink:"/how-tos/multi-factor-authentication"},next:{title:"Google Cloud Platform",permalink:"/sso/google-cloud-platform"}},a={},d=[{value:"SSO with Microsoft",id:"sso-with-microsoft",level:2},{value:"Configure the emnify Portal",id:"configure-the-emnify-portal",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"setup-sso-with-microsoft-active-directory",children:"Setup SSO with Microsoft Active Directory"}),"\n",(0,n.jsx)(s.p,{children:"This guide walks through enabling single sign-on (SSO), so your organization can access the emnify Portal using your Microsoft Business credentials."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Prerequisites:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"An Azure Subscription with an Active Directory license"}),"\n",(0,n.jsxs)(s.li,{children:["An ",(0,n.jsx)(s.a,{href:"/quickstart",children:"emnify account"})," using the same email address as the one used to sign in to Microsoft Azure"]}),"\n"]}),"\n",(0,n.jsxs)(s.admonition,{type:"warning",children:[(0,n.jsxs)(s.p,{children:["If your email address used in the emnify Portal differs from the one used to log in to Azure, this setup won't work.\nYou can verify your email in ",(0,n.jsx)(s.a,{href:"https://portal.emnify.com/user-settings",children:(0,n.jsx)(s.strong,{children:"User Settings"})}),"."]}),(0,n.jsxs)(s.p,{children:["Instead, add an additional user with the ",(0,n.jsx)(s.strong,{children:"Administrator"})," role.\nTo do this, go to ",(0,n.jsx)(s.strong,{children:"Workspace settings"}),"\xa0",(0,n.jsx)("span",{"aria-label":"and then",children:">"})," ",(0,n.jsx)(s.a,{href:"https://portal.emnify.com/organisation-settings/users",children:(0,n.jsx)(s.strong,{children:"Users"})}),"."]})]}),"\n",(0,n.jsx)(s.h2,{id:"sso-with-microsoft",children:"SSO with Microsoft"}),"\n",(0,n.jsxs)(s.p,{children:["Log in to Azure and navigate to ",(0,n.jsx)(s.strong,{children:"Azure Active Directory"})," in the left sidebar."]}),"\n",(0,n.jsx)("img",{src:t(2567).Z,alt:"",className:"no-border"}),"\n",(0,n.jsxs)(s.p,{children:["At the top of the page, click ",(0,n.jsx)(s.strong,{children:"+ Add"}),"\xa0and then\xa0",(0,n.jsx)(s.strong,{children:"App Registration"}),".\nFrom there:"]}),"\n",(0,n.jsx)("img",{src:t(7908).Z,alt:"",className:"no-border"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Give your app a\xa0",(0,n.jsx)(s.strong,{children:"Name"}),'\xa0(for example,\xa0"emnify").']}),"\n",(0,n.jsxs)(s.li,{children:["The\xa0",(0,n.jsx)(s.strong,{children:"Supported Account Types"}),"\xa0should be\xa0",(0,n.jsx)(s.code,{children:"Multitenant"}),".\nThis requests a consent screen on IDP verification in the Portal later."]}),"\n",(0,n.jsxs)(s.li,{children:["Set the Redirect URI to type\xa0",(0,n.jsx)(s.code,{children:"Web"}),"\xa0with the value:\xa0",(0,n.jsx)(s.code,{children:"https://prod-e5.okta.com/oauth2/v1/authorize/callback"})]}),"\n"]}),"\n",(0,n.jsx)("img",{src:t(1884).Z,alt:"",className:"no-border"}),"\n",(0,n.jsxs)(s.p,{children:["Navigate to\xa0",(0,n.jsx)(s.strong,{children:"Authentication"}),"\xa0in the left sidebar, and in the section\xa0",(0,n.jsx)(s.strong,{children:"Implicit grand and hybrid flows"}),",\xa0enable\xa0",(0,n.jsx)(s.code,{children:"Access tokens"}),"\xa0and\xa0",(0,n.jsx)(s.code,{children:"ID tokens"}),"."]}),"\n",(0,n.jsx)("img",{src:t(6741).Z,alt:"",className:"no-border"}),"\n",(0,n.jsxs)(s.p,{children:["Go to\xa0",(0,n.jsx)(s.strong,{children:"Token configuration"}),"\xa0in the left sidebar, click ",(0,n.jsx)(s.strong,{children:"Add optional claim"}),",\xa0and under\xa0",(0,n.jsx)(s.strong,{children:"SAML"}),",\xa0enable the\xa0",(0,n.jsx)(s.code,{children:"upn"}),"\xa0claim.\nLeave the option\xa0",(0,n.jsx)(s.code,{children:"Turn on the Microsoft Graph profile"}),"\xa0permission unchecked."]}),"\n",(0,n.jsx)("img",{src:t(9114).Z,alt:"",className:"no-border"}),"\n",(0,n.jsxs)(s.p,{children:["Head to\xa0",(0,n.jsx)(s.strong,{children:"API permissions"}),"\xa0in the left sidebar, click the existing permission entry\xa0",(0,n.jsx)(s.strong,{children:"Microsoft Graph (1)"}),"\xa0and confirm the\xa0",(0,n.jsx)(s.code,{children:"email"}),"\xa0and\xa0",(0,n.jsx)(s.code,{children:"profile"}),"\xa0OpenID permissions."]}),"\n",(0,n.jsx)("img",{src:t(1588).Z,alt:"",className:"no-border"}),"\n",(0,n.jsx)(s.p,{children:"Your configuration should look like this:"}),"\n",(0,n.jsx)("img",{src:t(1620).Z,alt:"",className:"no-border"}),"\n",(0,n.jsxs)(s.p,{children:["In the left sidebar, go to\xa0",(0,n.jsx)(s.strong,{children:"Expose an API"}),", click ",(0,n.jsx)(s.strong,{children:"Set"}),",\xa0and then click\xa0",(0,n.jsx)(s.strong,{children:"Save"}),"."]}),"\n",(0,n.jsx)("img",{src:t(9275).Z,alt:"",className:"no-border"}),"\n",(0,n.jsxs)(s.p,{children:["After navigating to\xa0",(0,n.jsx)(s.strong,{children:"Certificates & Secrets"}),"\xa0in the left sidebar, click\xa0",(0,n.jsx)(s.strong,{children:"New client secret"}),"."]}),"\n",(0,n.jsx)("img",{src:t(5727).Z,alt:"",className:"no-border"}),"\n",(0,n.jsxs)(s.p,{children:["Copy the\xa0",(0,n.jsx)(s.strong,{children:"Value"}),"\xa0and save it to a secure location."]}),"\n",(0,n.jsx)(s.admonition,{type:"danger",children:(0,n.jsx)(s.p,{children:"This value won't be shown again."})}),"\n",(0,n.jsx)("img",{src:t(4599).Z,alt:"",className:"no-border"}),"\n",(0,n.jsx)(s.p,{children:"Choose an expiration date and mark your calendar to generate and configure a new secret before it expires."}),"\n",(0,n.jsxs)(s.p,{children:["Navigate to\xa0",(0,n.jsx)(s.strong,{children:"Overview"}),"\xa0in the sidebar and copy the\xa0",(0,n.jsx)(s.strong,{children:"Application (client) ID"})," to use later in the emnify Portal."]}),"\n",(0,n.jsx)("img",{src:t(9684).Z,alt:"",className:"no-border"}),"\n",(0,n.jsx)(s.h2,{id:"configure-the-emnify-portal",children:"Configure the emnify Portal"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://portal.emnify.com/sign/",children:"Log in to your emnify account"}),", go to Workspace settings (building icon) in the top-level navigation, and click ",(0,n.jsx)(s.a,{href:"https://portal.emnify.com/organisation-settings/federation",children:(0,n.jsx)(s.strong,{children:"Single Sign-On"})}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["If you need SSO enabled for your account, contact support by selecting ",(0,n.jsx)(s.strong,{children:"Upgrade"}),".\nOtherwise, click ",(0,n.jsx)(s.strong,{children:"Add"}),"\xa0under the Microsoft SSO provider."]}),"\n",(0,n.jsxs)(s.p,{children:["Enter the\xa0",(0,n.jsx)(s.strong,{children:"Client ID"})," and ",(0,n.jsx)(s.strong,{children:"Client Secret"}),"\xa0with the values you copied earlier, then click\xa0",(0,n.jsx)(s.strong,{children:"Create and Activate"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The final step is to verify the provider.\nClick\xa0",(0,n.jsx)(s.strong,{children:"Verify Integration"}),"\xa0and follow the prompts."]}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsx)(s.p,{children:"You must complete the final step and verify the provider to configure SSO."})}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["Refer to the ",(0,n.jsx)(s.a,{href:"/sso/troubleshooting#microsoft-active-directory",children:"Troubleshooting page"})," if you encounter issues while setting up SSO."]})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},2567:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/sso-azure-active-directory-c88db902d47efb335b03becdd14a1c36.png"},1588:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/sso-azure-api-permissions-1-b0658aec97affeaa010415176390ae89.png"},1620:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/sso-azure-api-permissions-2-fc1690006d90397db039dfae55ce7df0.png"},9684:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/sso-azure-app-id-cc89c827337ad1823b184737e3102a8e.png"},1884:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/sso-azure-app-registration-details-ad59c23822be8e605aa1b22b4efca929.png"},7908:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/sso-azure-app-registration-47ca42337939d7a25d9cff45a616d0ba.png"},6741:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/sso-azure-authentication-c3e45c5d2ddf13a80e18cfb266e7cd56.png"},9275:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/sso-azure-expose-api-bd5b6ec455fd51e84a1e775cab8d2389.png"},4599:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/sso-azure-new-client-secret-returned-a7fe8be5cd6dd84ca737347a3aca481c.png"},5727:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/sso-azure-new-client-secret-8ca733a82abfa4c3dce3eee230b88a31.png"},9114:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/sso-azure-token-configuration-833571745ee26da1cf03919dddd34026.png"},1151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>r});var n=t(7294);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);