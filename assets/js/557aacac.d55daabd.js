"use strict";(self.webpackChunkemnify_docs=self.webpackChunkemnify_docs||[]).push([[529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={description:"Setup SSO with Microsoft Active Directory"},a="Setup SSO with Microsoft Active Directory",p={unversionedId:"sso/microsoft-active-directory",id:"sso/microsoft-active-directory",title:"Setup SSO with Microsoft Active Directory",description:"Setup SSO with Microsoft Active Directory",source:"@site/docs/sso/microsoft-active-directory.md",sourceDirName:"sso",slug:"/sso/microsoft-active-directory",permalink:"/product-docs/sso/microsoft-active-directory",draft:!1,editUrl:"https://github.com/EMnify/product-docs/blob/main/docs/sso/microsoft-active-directory.md",tags:[],version:"current",frontMatter:{description:"Setup SSO with Microsoft Active Directory"},sidebar:"ourSidebar",previous:{title:"Single Sign-On",permalink:"/product-docs/sso"},next:{title:"Setup SSO with Google Cloud Platform",permalink:"/product-docs/sso/google-cloud-platform"}},s={},c=[{value:"SSO with Microsoft",id:"sso-with-microsoft",level:2},{value:"Configure the emnify Portal",id:"configure-the-emnify-portal",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-sso-with-microsoft-active-directory"},"Setup SSO with Microsoft Active Directory"),(0,o.kt)("p",null,"This guide walks through enabling single sign-on (SSO), so your organization can access the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal")," using your Microsoft Business credentials."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An Azure Subscription with an Active Directory license"),(0,o.kt)("li",{parentName:"ul"},"An account in the emnify Portal using the same email address as the one used to sign in to Microsoft Azure")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If your email address used in the emnify Portal differs from the one used to log in to Azure, this setup won't work.\nInstead, add an additional user to the emnify Portal with\xa0",(0,o.kt)("strong",{parentName:"p"},"Administrator"),"\xa0privileges.")),(0,o.kt)("h2",{id:"sso-with-microsoft"},"SSO with Microsoft"),(0,o.kt)("p",null,"Log in to Azure and navigate to ",(0,o.kt)("strong",{parentName:"p"},"Azure Active Directoring")," in the left sidebar."),(0,o.kt)("p",null,"At the top of the page, click ",(0,o.kt)("strong",{parentName:"p"},"+ Add"),"\xa0and then\xa0",(0,o.kt)("strong",{parentName:"p"},"App Registration"),".\nFrom there:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Give your app a\xa0",(0,o.kt)("strong",{parentName:"li"},"Name"),'\xa0(e.g.,\xa0"emnify").'),(0,o.kt)("li",{parentName:"ul"},"The\xa0",(0,o.kt)("strong",{parentName:"li"},"Supported Account Types"),"\xa0should be\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Multitenant"),".\nThis requests a consent screen on IDP verification in the Portal later. "),(0,o.kt)("li",{parentName:"ul"},"Set the Redirect URI to type\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Web"),"\xa0with the value:\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"https://prod-e5.okta.com/oauth2/v1/authorize/callback"))),(0,o.kt)("p",null,"Navigate to\xa0",(0,o.kt)("strong",{parentName:"p"},"Authentication"),"\xa0in the left sidebar, and in the section\xa0",(0,o.kt)("strong",{parentName:"p"},"Implicit grand and hybrid flows"),",\xa0enable\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Access tokens"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"ID tokens"),"."),(0,o.kt)("p",null,"Go to\xa0",(0,o.kt)("strong",{parentName:"p"},"Token configuration"),"\xa0in the left sidebar, click ",(0,o.kt)("strong",{parentName:"p"},"Add optional claim"),",\xa0and under\xa0",(0,o.kt)("strong",{parentName:"p"},"SAML"),",\xa0enable the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"upn"),"\xa0claim.\nLeave the option\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Turn on the Microsoft Graph profile"),"\xa0permission unchecked."),(0,o.kt)("p",null,"Head to\xa0",(0,o.kt)("strong",{parentName:"p"},"API permissions"),"\xa0in the left sidebar, click the existing permission entry\xa0",(0,o.kt)("strong",{parentName:"p"},"Microsoft Graph (1)"),"\xa0and check the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"email"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"profile"),"\xa0OpenID permissions."),(0,o.kt)("p",null,"In the left sidebar, go to\xa0",(0,o.kt)("strong",{parentName:"p"},"Expose an API"),", click ",(0,o.kt)("strong",{parentName:"p"},"Set"),",\xa0and then click on\xa0",(0,o.kt)("strong",{parentName:"p"},"Save"),"."),(0,o.kt)("p",null,"After navigating to\xa0",(0,o.kt)("strong",{parentName:"p"},"Certificates & Secrets"),"\xa0in the left sidebar, click\xa0",(0,o.kt)("strong",{parentName:"p"},"New client secret"),"."),(0,o.kt)("p",null,"Copy the\xa0",(0,o.kt)("strong",{parentName:"p"},"Value"),"\xa0and save it to a secure location."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This value won't be shown again.")),(0,o.kt)("p",null,"Choose an expiration date and mark your calendar to generate and configure a new secret before it expires."),(0,o.kt)("p",null,"Navigate to\xa0",(0,o.kt)("strong",{parentName:"p"},"Overview"),"\xa0in the sidebar and copy the\xa0",(0,o.kt)("strong",{parentName:"p"},"Application (client) ID")," to use later in the emnify Portal."),(0,o.kt)("h2",{id:"configure-the-emnify-portal"},"Configure the emnify Portal"),(0,o.kt)("p",null,"Log in to your emnify account, go to Organization Settings (building icon) in the top-level navigation, and click ",(0,o.kt)("strong",{parentName:"p"},"Single Sign-On"),"."),(0,o.kt)("p",null,"If you need SSO enabled for your account, contact support."),(0,o.kt)("p",null,"Otherwise, click ",(0,o.kt)("strong",{parentName:"p"},"Add"),"\xa0under the Microsoft SSO provider."),(0,o.kt)("p",null,"Fill in the\xa0",(0,o.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,o.kt)("strong",{parentName:"p"},"Client Secret"),"\xa0with the values you copied earlier, then click\xa0",(0,o.kt)("strong",{parentName:"p"},"Create and Activate"),"."),(0,o.kt)("p",null,"The final step is to verify the provider.\nClick on\xa0",(0,o.kt)("strong",{parentName:"p"},"Verify Integration"),"\xa0and follow the prompts."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You must complete the final step and verify the provider to configure SSO.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We have a ",(0,o.kt)("a",{parentName:"p",href:"troubleshooting#microsoft-active-directory"},"Troubleshooting page")," if you encounter issues while setting up SSO.")))}u.isMDXComponent=!0}}]);