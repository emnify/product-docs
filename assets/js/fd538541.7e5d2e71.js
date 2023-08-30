"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[5692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(g,i(i({ref:t},l),{},{components:n})):o.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={description:"Setup SSO for your emnify account with Microsoft Active Directory",pagination_next:"how-tos/sso/google-cloud-platform",slug:"/sso/microsoft-active-directory"},i="Setup SSO with Microsoft Active Directory",s={unversionedId:"how-tos/sso/microsoft-active-directory",id:"how-tos/sso/microsoft-active-directory",title:"Setup SSO with Microsoft Active Directory",description:"Setup SSO for your emnify account with Microsoft Active Directory",source:"@site/docs/how-tos/sso/microsoft-active-directory.md",sourceDirName:"how-tos/sso",slug:"/sso/microsoft-active-directory",permalink:"/sso/microsoft-active-directory",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/how-tos/sso/microsoft-active-directory.md",tags:[],version:"current",lastUpdatedAt:1693387092,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{description:"Setup SSO for your emnify account with Microsoft Active Directory",pagination_next:"how-tos/sso/google-cloud-platform",slug:"/sso/microsoft-active-directory"},sidebar:"mainDocsSidebar",previous:{title:"Enable two-factor authentication",permalink:"/how-tos/two-factor-authentication"},next:{title:"Setup SSO with Google Cloud Platform",permalink:"/sso/google-cloud-platform"}},c={},p=[{value:"SSO with Microsoft",id:"sso-with-microsoft",level:2},{value:"Configure the emnify Portal",id:"configure-the-emnify-portal",level:2}],l={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup-sso-with-microsoft-active-directory"},"Setup SSO with Microsoft Active Directory"),(0,a.kt)("p",null,"This guide walks through enabling single sign-on (SSO), so your organization can access the emnify Portal using your Microsoft Business credentials."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An Azure Subscription with an Active Directory license"),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("a",{parentName:"li",href:"/quickstart"},"emnify account")," using the same email address as the one used to sign in to Microsoft Azure")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If your email address used in the emnify Portal differs from the one used to log in to Azure, this setup won't work.\nYou can verify your email in ",(0,a.kt)("a",{parentName:"p",href:"https://portal.emnify.com/user-settings"},(0,a.kt)("strong",{parentName:"a"},"User Settings")),"."),(0,a.kt)("p",{parentName:"admonition"},"Instead, add an additional user with the ",(0,a.kt)("strong",{parentName:"p"},"Administrator")," role.\nTo do this, go to ",(0,a.kt)("strong",{parentName:"p"},"Organization Settings"),"\xa0",(0,a.kt)("span",{"aria-label":"and then"},">")," ",(0,a.kt)("a",{parentName:"p",href:"https://portal.emnify.com/organisation-settings/users"},(0,a.kt)("strong",{parentName:"a"},"Employees")),".")),(0,a.kt)("h2",{id:"sso-with-microsoft"},"SSO with Microsoft"),(0,a.kt)("p",null,"Log in to Azure and navigate to ",(0,a.kt)("strong",{parentName:"p"},"Azure Active Directory")," in the left sidebar."),(0,a.kt)("img",{src:n(2567).Z,alt:"",className:"no-border"}),(0,a.kt)("p",null,"At the top of the page, click ",(0,a.kt)("strong",{parentName:"p"},"+ Add"),"\xa0and then\xa0",(0,a.kt)("strong",{parentName:"p"},"App Registration"),".\nFrom there:"),(0,a.kt)("img",{src:n(7908).Z,alt:"",className:"no-border"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Give your app a\xa0",(0,a.kt)("strong",{parentName:"li"},"Name"),'\xa0(for example,\xa0"emnify").'),(0,a.kt)("li",{parentName:"ul"},"The\xa0",(0,a.kt)("strong",{parentName:"li"},"Supported Account Types"),"\xa0should be\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Multitenant"),".\nThis requests a consent screen on IDP verification in the Portal later. "),(0,a.kt)("li",{parentName:"ul"},"Set the Redirect URI to type\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Web"),"\xa0with the value:\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"https://prod-e5.okta.com/oauth2/v1/authorize/callback"))),(0,a.kt)("img",{src:n(1884).Z,alt:"",className:"no-border"}),(0,a.kt)("p",null,"Navigate to\xa0",(0,a.kt)("strong",{parentName:"p"},"Authentication"),"\xa0in the left sidebar, and in the section\xa0",(0,a.kt)("strong",{parentName:"p"},"Implicit grand and hybrid flows"),",\xa0enable\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Access tokens"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"ID tokens"),"."),(0,a.kt)("img",{src:n(6741).Z,alt:"",className:"no-border"}),(0,a.kt)("p",null,"Go to\xa0",(0,a.kt)("strong",{parentName:"p"},"Token configuration"),"\xa0in the left sidebar, click ",(0,a.kt)("strong",{parentName:"p"},"Add optional claim"),",\xa0and under\xa0",(0,a.kt)("strong",{parentName:"p"},"SAML"),",\xa0enable the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"upn"),"\xa0claim.\nLeave the option\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Turn on the Microsoft Graph profile"),"\xa0permission unchecked."),(0,a.kt)("img",{src:n(9114).Z,alt:"",className:"no-border"}),(0,a.kt)("p",null,"Head to\xa0",(0,a.kt)("strong",{parentName:"p"},"API permissions"),"\xa0in the left sidebar, click the existing permission entry\xa0",(0,a.kt)("strong",{parentName:"p"},"Microsoft Graph (1)"),"\xa0and confirm the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"email"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"profile"),"\xa0OpenID permissions."),(0,a.kt)("img",{src:n(1588).Z,alt:"",className:"no-border"}),(0,a.kt)("p",null,"Your configuration should look like this:"),(0,a.kt)("img",{src:n(1620).Z,alt:"",className:"no-border"}),(0,a.kt)("p",null,"In the left sidebar, go to\xa0",(0,a.kt)("strong",{parentName:"p"},"Expose an API"),", click ",(0,a.kt)("strong",{parentName:"p"},"Set"),",\xa0and then click\xa0",(0,a.kt)("strong",{parentName:"p"},"Save"),"."),(0,a.kt)("img",{src:n(9275).Z,alt:"",className:"no-border"}),(0,a.kt)("p",null,"After navigating to\xa0",(0,a.kt)("strong",{parentName:"p"},"Certificates & Secrets"),"\xa0in the left sidebar, click\xa0",(0,a.kt)("strong",{parentName:"p"},"New client secret"),"."),(0,a.kt)("img",{src:n(5727).Z,alt:"",className:"no-border"}),(0,a.kt)("p",null,"Copy the\xa0",(0,a.kt)("strong",{parentName:"p"},"Value"),"\xa0and save it to a secure location."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This value won't be shown again.")),(0,a.kt)("img",{src:n(4599).Z,alt:"",className:"no-border"}),(0,a.kt)("p",null,"Choose an expiration date and mark your calendar to generate and configure a new secret before it expires."),(0,a.kt)("p",null,"Navigate to\xa0",(0,a.kt)("strong",{parentName:"p"},"Overview"),"\xa0in the sidebar and copy the\xa0",(0,a.kt)("strong",{parentName:"p"},"Application (client) ID")," to use later in the emnify Portal."),(0,a.kt)("img",{src:n(9684).Z,alt:"",className:"no-border"}),(0,a.kt)("h2",{id:"configure-the-emnify-portal"},"Configure the emnify Portal"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://portal.emnify.com/sign/"},"Log in to your emnify account"),", go to Organization Settings (building icon) in the top-level navigation, and click ",(0,a.kt)("a",{parentName:"p",href:"https://portal.emnify.com/organisation-settings/federation"},(0,a.kt)("strong",{parentName:"a"},"Single Sign-On")),"."),(0,a.kt)("img",{src:n(6070).Z,alt:"Portal screenshot showing the Organization settings dropdown menu. Menu items from top to bottom, Organization Data, Employees, Subscription, Billing, Single Sign-On.",style:{width:358}}),(0,a.kt)("p",null,"If you need SSO enabled for your account, contact support by selecting ",(0,a.kt)("strong",{parentName:"p"},"Upgrade"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Portal screenshot from the Single Sign-On page under Organization. There&#39;s a notice under Provider that reads, &quot;Your plan does not include SSO. Single Sign-On (SSO) allows you to configure your own Identity Provider (IdP) to authenticate your workforce on the emnify portal and easily control access via your central user management.&quot; Next to this text is an Upgrade button.",src:n(963).Z,width:"1411",height:"798"})),(0,a.kt)("p",null,"Otherwise, click ",(0,a.kt)("strong",{parentName:"p"},"Add"),"\xa0under the Microsoft SSO provider."),(0,a.kt)("p",null,"Enter the\xa0",(0,a.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,a.kt)("strong",{parentName:"p"},"Client Secret"),"\xa0with the values you copied earlier, then click\xa0",(0,a.kt)("strong",{parentName:"p"},"Create and Activate"),"."),(0,a.kt)("p",null,"The final step is to verify the provider.\nClick\xa0",(0,a.kt)("strong",{parentName:"p"},"Verify Integration"),"\xa0and follow the prompts."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You must complete the final step and verify the provider to configure SSO.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/sso/troubleshooting#microsoft-active-directory"},"Troubleshooting page")," if you encounter issues while setting up SSO.")))}d.isMDXComponent=!0},6070:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/portal-organization-settings-sso-d8c31abaefb44eba0e57ac88c34a77f6.png"},2567:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sso-azure-active-directory-c88db902d47efb335b03becdd14a1c36.png"},1588:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sso-azure-api-permissions-1-b0658aec97affeaa010415176390ae89.png"},1620:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sso-azure-api-permissions-2-fc1690006d90397db039dfae55ce7df0.png"},9684:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sso-azure-app-id-cc89c827337ad1823b184737e3102a8e.png"},1884:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sso-azure-app-registration-details-ad59c23822be8e605aa1b22b4efca929.png"},7908:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sso-azure-app-registration-47ca42337939d7a25d9cff45a616d0ba.png"},6741:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sso-azure-authentication-c3e45c5d2ddf13a80e18cfb266e7cd56.png"},9275:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sso-azure-expose-api-bd5b6ec455fd51e84a1e775cab8d2389.png"},4599:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sso-azure-new-client-secret-returned-a7fe8be5cd6dd84ca737347a3aca481c.png"},5727:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sso-azure-new-client-secret-8ca733a82abfa4c3dce3eee230b88a31.png"},9114:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sso-azure-token-configuration-833571745ee26da1cf03919dddd34026.png"},963:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/portal-organization-no-sso-annotated-bc96939f9a3b83b87524b8dcbf63c06a.png"}}]);