"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8419],{6926:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=o(5893),r=o(1151);const i={description:"Setup SSO for your emnify account with Google Cloud Platform",last_update:{date:"12-16-2022"},sidebar_label:"Google Cloud Platform",slug:"/sso/google-cloud-platform"},s="Setup SSO with Google Cloud Platform",l={id:"how-tos/sso/google-cloud-platform",title:"Setup SSO with Google Cloud Platform",description:"Setup SSO for your emnify account with Google Cloud Platform",source:"@site/docs/how-tos/sso/google-cloud-platform.md",sourceDirName:"how-tos/sso",slug:"/sso/google-cloud-platform",permalink:"/pr-preview/pr-180/sso/google-cloud-platform",draft:!1,unlisted:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/how-tos/sso/google-cloud-platform.md",tags:[],version:"current",lastUpdatedAt:1671148800,formattedLastUpdatedAt:"Dec 16, 2022",frontMatter:{description:"Setup SSO for your emnify account with Google Cloud Platform",last_update:{date:"12-16-2022"},sidebar_label:"Google Cloud Platform",slug:"/sso/google-cloud-platform"},sidebar:"mainDocsSidebar",previous:{title:"Microsoft Active Directory",permalink:"/pr-preview/pr-180/sso/microsoft-active-directory"},next:{title:"SSO troubleshooting",permalink:"/pr-preview/pr-180/sso/troubleshooting"}},c={},a=[{value:"Register emnify in Google",id:"register-emnify-in-google",level:2},{value:"Select or create an emnify project",id:"select-or-create-an-emnify-project",level:3},{value:"Get an OAuth client ID and Secret",id:"get-an-oauth-client-id-and-secret",level:3},{value:"Configure the emnify Portal",id:"configure-the-emnify-portal",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"setup-sso-with-google-cloud-platform",children:"Setup SSO with Google Cloud Platform"}),"\n",(0,t.jsx)(n.p,{children:"This guide walks through enabling single sign-on (SSO), so your organization can access the emnify Portal using your Google Cloud Platform credentials."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Prerequisites:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Google account that's a user within a ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/resource-manager/docs/creating-managing-organization",children:"Google Cloud Platform organization"})]}),"\n",(0,t.jsxs)(n.li,{children:["An ",(0,t.jsx)(n.a,{href:"/quickstart",children:"emnify account"})," using the same email address as the one used to sign in to Google"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["If your email address in the emnify Portal differs from the one used to log in to Google, this setup won't work.\nYou can verify your email in ",(0,t.jsx)(n.a,{href:"https://portal.emnify.com/user-settings",children:(0,t.jsx)(n.strong,{children:"User Settings"})}),"."]}),(0,t.jsxs)(n.p,{children:["Instead, add an additional user with the ",(0,t.jsx)(n.strong,{children:"Administrator"})," role.\nTo do this, go to ",(0,t.jsx)(n.strong,{children:"Workspace settings"}),"\xa0",(0,t.jsx)("span",{"aria-label":"and then",children:">"})," ",(0,t.jsx)(n.a,{href:"https://portal.emnify.com/organisation-settings/users",children:(0,t.jsx)(n.strong,{children:"Users"})}),"."]})]}),"\n",(0,t.jsx)(n.h2,{id:"register-emnify-in-google",children:"Register emnify in Google"}),"\n",(0,t.jsxs)(n.p,{children:["First, you need to register emnify in the ",(0,t.jsx)(n.a,{href:"https://console.developers.google.com/",children:"Google Cloud Platform console"})," and retrieve an OAuth 2.0 client ID and client secret."]}),"\n",(0,t.jsx)(n.h3,{id:"select-or-create-an-emnify-project",children:"Select or create an emnify project"}),"\n",(0,t.jsxs)(n.p,{children:["Log in with your Google account and navigate to the ",(0,t.jsx)(n.a,{href:"https://console.developers.google.com/apis/dashboard",children:"APIs & Services dashboard"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Select your organization's project for managing OAuth credentials for emnify."}),"\n",(0,t.jsx)(n.p,{children:"If you don't already have a designated project, create one with the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"New Project"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"If prompted, agree to the terms of service."}),"\n",(0,t.jsxs)(n.li,{children:["Enter a ",(0,t.jsx)(n.strong,{children:"Project name"}),' (for example, "emnify SSO") and ',(0,t.jsx)(n.strong,{children:"Location"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create"}),", then you should land on the ",(0,t.jsx)(n.strong,{children:"Enabled APIs & Services"})," page."]}),"\n",(0,t.jsxs)(n.li,{children:["In the APIs & Services navigation bar, click ",(0,t.jsx)(n.strong,{children:"OAuth consent screen"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose the ",(0,t.jsx)(n.a,{href:"https://support.google.com/cloud/answer/10311615#user-type",children:(0,t.jsx)(n.strong,{children:"User Type"})})," for your project."]}),"\n",(0,t.jsxs)(n.li,{children:["Specify app information about emnify (",(0,t.jsx)(n.strong,{children:"App Name"}),", ",(0,t.jsx)(n.strong,{children:"User support email"}),", and ",(0,t.jsx)(n.strong,{children:"Developer contact information"})," are necessary, but all other fields are optional)."]}),"\n",(0,t.jsxs)(n.li,{children:["(Optional) Define any ",(0,t.jsx)(n.strong,{children:"Scopes"})," or ",(0,t.jsx)(n.strong,{children:"Test Users"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save and Continue"})," to proceed."]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to the summary screen, review your settings, and click ",(0,t.jsx)(n.strong,{children:"Back to Dashboard"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"get-an-oauth-client-id-and-secret",children:"Get an OAuth client ID and Secret"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Credentials"})," option to retrieve the OAuth client ID and secret that you'll enter into the emnify Portal."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Head to ",(0,t.jsx)(n.strong,{children:"Credentials"})," in the APIs & Services navigation bar."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"+ Create Credentials"})," (on the top next to the page header), then select the ",(0,t.jsx)(n.code,{children:"OAuth client ID"})," option."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Application type"})," list, select ",(0,t.jsx)(n.code,{children:"Web application"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Enter a ",(0,t.jsx)(n.strong,{children:"Name"}),' (for example, "emnify Portal" or "Enterprise Portal").']}),"\n",(0,t.jsxs)(n.li,{children:["Set an ",(0,t.jsx)(n.strong,{children:"Authorized redirect URI"})," with the value: ",(0,t.jsx)(n.code,{children:"https://prod-e5.okta.com/oauth2/v1/authorize/callback"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create"})," and wait for the ",(0,t.jsx)(n.strong,{children:"OAuth client created"})," modal to appear."]}),"\n",(0,t.jsx)(n.li,{children:"Copy the displayed values (you'll need them later) or download the provided JSON."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can access your client ID and secret at any time in your Google Cloud Platform console on the ",(0,t.jsx)(n.strong,{children:"Credentials"})," page."]})}),"\n",(0,t.jsx)(n.h2,{id:"configure-the-emnify-portal",children:"Configure the emnify Portal"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://portal.emnify.com/sign/",children:"Log in to the emnify Portal"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Workspace settings"})," (building icon) in the top-level navigation and click ",(0,t.jsx)(n.a,{href:"https://portal.emnify.com/organisation-settings/federation",children:(0,t.jsx)(n.strong,{children:"Single Sign-On"})}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If you need SSO enabled for your account, ",(0,t.jsx)(n.a,{href:"https://support.emnify.com/",children:"contact emnify support"}),".\nOtherwise, click ",(0,t.jsx)(n.strong,{children:"Add"})," under the Google SSO provider."]}),"\n",(0,t.jsxs)(n.li,{children:["Enter the ",(0,t.jsx)(n.strong,{children:"Client ID"})," and ",(0,t.jsx)(n.strong,{children:"Client Secret"})," you copied earlier, then click ",(0,t.jsx)(n.strong,{children:"Create and Activate"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Once you're back on ",(0,t.jsx)(n.strong,{children:"Single Sign-On"}),", you should see Google listed as a ",(0,t.jsx)(n.strong,{children:"Provider"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Finally, click ",(0,t.jsx)(n.strong,{children:"Verify Integration"})," and follow the prompts."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"You must complete the final step and verify the provider to configure SSO."})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"/sso/troubleshooting",children:"SSO troubleshooting"})," if you encounter issues while setting up SSO."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>s});var t=o(7294);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);