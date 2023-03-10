"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[7529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={description:"Setup SSO with Microsoft Active Directory"},i="Setup SSO with Microsoft Active Directory",s={unversionedId:"sso/microsoft-active-directory",id:"sso/microsoft-active-directory",title:"Setup SSO with Microsoft Active Directory",description:"Setup SSO with Microsoft Active Directory",source:"@site/docs/sso/microsoft-active-directory.md",sourceDirName:"sso",slug:"/sso/microsoft-active-directory",permalink:"/sso/microsoft-active-directory",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/sso/microsoft-active-directory.md",tags:[],version:"current",lastUpdatedAt:1678447251,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{description:"Setup SSO with Microsoft Active Directory"},sidebar:"mainDocsSidebar",previous:{title:"Single Sign-On",permalink:"/sso"},next:{title:"Setup SSO with Google Cloud Platform",permalink:"/sso/google-cloud-platform"}},c={},p=[{value:"SSO with Microsoft",id:"sso-with-microsoft",level:2},{value:"Configure the emnify Portal",id:"configure-the-emnify-portal",level:2}],l={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setup-sso-with-microsoft-active-directory"},"Setup SSO with Microsoft Active Directory"),(0,r.kt)("p",null,"This guide walks through enabling single sign-on (SSO), so your organization can access the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal")," using your Microsoft Business credentials."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An Azure Subscription with an Active Directory license"),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/sign/up/"},"emnify Portal account")," using the same email address as the one used to sign in to Microsoft Azure")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If your email address used in the emnify Portal differs from the one used to log in to Azure, this setup won't work.\nYou can verify your email on the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/user-settings"},(0,r.kt)("strong",{parentName:"a"},"User Settings")," page"),"."),(0,r.kt)("p",{parentName:"admonition"},"Instead, ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/organisation-settings/users"},"add an additional user")," to the emnify Portal with the\xa0",(0,r.kt)("strong",{parentName:"p"},"Administrator")," role.")),(0,r.kt)("h2",{id:"sso-with-microsoft"},"SSO with Microsoft"),(0,r.kt)("p",null,"Log in to Azure and navigate to ",(0,r.kt)("strong",{parentName:"p"},"Azure Active Directoring")," in the left sidebar."),(0,r.kt)("img",{src:n(6919).Z,alt:"",className:"no-border"}),(0,r.kt)("p",null,"At the top of the page, click ",(0,r.kt)("strong",{parentName:"p"},"+ Add"),"\xa0and then\xa0",(0,r.kt)("strong",{parentName:"p"},"App Registration"),".\nFrom there:"),(0,r.kt)("img",{src:n(3721).Z,alt:"",className:"no-border"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Give your app a\xa0",(0,r.kt)("strong",{parentName:"li"},"Name"),'\xa0(e.g.,\xa0"emnify").'),(0,r.kt)("li",{parentName:"ul"},"The\xa0",(0,r.kt)("strong",{parentName:"li"},"Supported Account Types"),"\xa0should be\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"Multitenant"),".\nThis requests a consent screen on IDP verification in the Portal later. "),(0,r.kt)("li",{parentName:"ul"},"Set the Redirect URI to type\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"Web"),"\xa0with the value:\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"https://prod-e5.okta.com/oauth2/v1/authorize/callback"))),(0,r.kt)("img",{src:n(2621).Z,alt:"",className:"no-border"}),(0,r.kt)("p",null,"Navigate to\xa0",(0,r.kt)("strong",{parentName:"p"},"Authentication"),"\xa0in the left sidebar, and in the section\xa0",(0,r.kt)("strong",{parentName:"p"},"Implicit grand and hybrid flows"),",\xa0enable\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Access tokens"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ID tokens"),"."),(0,r.kt)("img",{src:n(9585).Z,alt:"",className:"no-border"}),(0,r.kt)("p",null,"Go to\xa0",(0,r.kt)("strong",{parentName:"p"},"Token configuration"),"\xa0in the left sidebar, click ",(0,r.kt)("strong",{parentName:"p"},"Add optional claim"),",\xa0and under\xa0",(0,r.kt)("strong",{parentName:"p"},"SAML"),",\xa0enable the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"upn"),"\xa0claim.\nLeave the option\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Turn on the Microsoft Graph profile"),"\xa0permission unchecked."),(0,r.kt)("img",{src:n(1424).Z,alt:"",className:"no-border"}),(0,r.kt)("p",null,"Head to\xa0",(0,r.kt)("strong",{parentName:"p"},"API permissions"),"\xa0in the left sidebar, click the existing permission entry\xa0",(0,r.kt)("strong",{parentName:"p"},"Microsoft Graph (1)"),"\xa0and check the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"email"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),"\xa0OpenID permissions."),(0,r.kt)("img",{src:n(6498).Z,alt:"",className:"no-border"}),(0,r.kt)("p",null,"Your configuration should look like this:"),(0,r.kt)("img",{src:n(2529).Z,alt:"",className:"no-border"}),(0,r.kt)("p",null,"In the left sidebar, go to\xa0",(0,r.kt)("strong",{parentName:"p"},"Expose an API"),", click ",(0,r.kt)("strong",{parentName:"p"},"Set"),",\xa0and then click on\xa0",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("img",{src:n(3710).Z,alt:"",className:"no-border"}),(0,r.kt)("p",null,"After navigating to\xa0",(0,r.kt)("strong",{parentName:"p"},"Certificates & Secrets"),"\xa0in the left sidebar, click\xa0",(0,r.kt)("strong",{parentName:"p"},"New client secret"),"."),(0,r.kt)("img",{src:n(206).Z,alt:"",className:"no-border"}),(0,r.kt)("p",null,"Copy the\xa0",(0,r.kt)("strong",{parentName:"p"},"Value"),"\xa0and save it to a secure location."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This value won't be shown again.")),(0,r.kt)("img",{src:n(9362).Z,alt:"",className:"no-border"}),(0,r.kt)("p",null,"Choose an expiration date and mark your calendar to generate and configure a new secret before it expires."),(0,r.kt)("p",null,"Navigate to\xa0",(0,r.kt)("strong",{parentName:"p"},"Overview"),"\xa0in the sidebar and copy the\xa0",(0,r.kt)("strong",{parentName:"p"},"Application (client) ID")," to use later in the emnify Portal."),(0,r.kt)("img",{src:n(4553).Z,alt:"",className:"no-border"}),(0,r.kt)("h2",{id:"configure-the-emnify-portal"},"Configure the emnify Portal"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/sign/"},"Log in to your emnify account"),", go to Organization Settings (building icon) in the top-level navigation, and click ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/organisation-settings/federation"},(0,r.kt)("strong",{parentName:"a"},"Single Sign-On")),"."),(0,r.kt)("img",{src:n(809).Z,alt:"Portal screenshot showing the Organization settings dropdown menu. Menu items from top to bottom: Organization Data, Employees, Subscription, Billing, Single Sign-On.",style:{width:358}}),(0,r.kt)("p",null,"If you need SSO enabled for your account, contact support by selecting ",(0,r.kt)("strong",{parentName:"p"},"Upgrade"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Portal screenshot from the Single Sign-On page under Organization. There&#39;s a notice under Provider that reads, &quot;Your plan does not include SSO. Single Sign-On (SSO) allows you to configure your own Identity Provider (IdP) to authenticate your workforce on the emnify portal and easily control access via your central user management.&quot; Next to this text is an Upgrade button.",src:n(7040).Z,width:"1411",height:"798"})),(0,r.kt)("p",null,"Otherwise, click ",(0,r.kt)("strong",{parentName:"p"},"Add"),"\xa0under the Microsoft SSO provider."),(0,r.kt)("p",null,"Fill in the\xa0",(0,r.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,r.kt)("strong",{parentName:"p"},"Client Secret"),"\xa0with the values you copied earlier, then click\xa0",(0,r.kt)("strong",{parentName:"p"},"Create and Activate"),"."),(0,r.kt)("p",null,"The final step is to verify the provider.\nClick on\xa0",(0,r.kt)("strong",{parentName:"p"},"Verify Integration"),"\xa0and follow the prompts."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You must complete the final step and verify the provider to configure SSO.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We have a ",(0,r.kt)("a",{parentName:"p",href:"troubleshooting#microsoft-active-directory"},"Troubleshooting page")," if you encounter issues while setting up SSO.")))}d.isMDXComponent=!0},809:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/portal-organization-settings-sso-d8c31abaefb44eba0e57ac88c34a77f6.png"},6919:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sso-azure-active-directory-c88db902d47efb335b03becdd14a1c36.png"},6498:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sso-azure-api-permissions-1-b0658aec97affeaa010415176390ae89.png"},2529:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sso-azure-api-permissions-2-fc1690006d90397db039dfae55ce7df0.png"},4553:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sso-azure-app-id-cc89c827337ad1823b184737e3102a8e.png"},2621:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sso-azure-app-registration-details-ad59c23822be8e605aa1b22b4efca929.png"},3721:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sso-azure-app-registration-47ca42337939d7a25d9cff45a616d0ba.png"},9585:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sso-azure-authentication-c3e45c5d2ddf13a80e18cfb266e7cd56.png"},3710:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sso-azure-expose-api-bd5b6ec455fd51e84a1e775cab8d2389.png"},9362:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sso-azure-new-client-secret-returned-a7fe8be5cd6dd84ca737347a3aca481c.png"},206:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sso-azure-new-client-secret-8ca733a82abfa4c3dce3eee230b88a31.png"},1424:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sso-azure-token-configuration-833571745ee26da1cf03919dddd34026.png"},7040:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/portal-organization-no-sso-annotated-bc96939f9a3b83b87524b8dcbf63c06a.png"}}]);