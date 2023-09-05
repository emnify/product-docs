"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8419],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(o),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return o?n.createElement(g,i(i({ref:t},c),{},{components:o})):n.createElement(g,i({ref:t},c))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2092:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const a={description:"Setup SSO for your emnify account with Google Cloud Platform",slug:"/sso/google-cloud-platform"},i="Setup SSO with Google Cloud Platform",l={unversionedId:"how-tos/sso/google-cloud-platform",id:"how-tos/sso/google-cloud-platform",title:"Setup SSO with Google Cloud Platform",description:"Setup SSO for your emnify account with Google Cloud Platform",source:"@site/docs/how-tos/sso/google-cloud-platform.md",sourceDirName:"how-tos/sso",slug:"/sso/google-cloud-platform",permalink:"/sso/google-cloud-platform",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/how-tos/sso/google-cloud-platform.md",tags:[],version:"current",lastUpdatedAt:1693920212,formattedLastUpdatedAt:"Sep 5, 2023",frontMatter:{description:"Setup SSO for your emnify account with Google Cloud Platform",slug:"/sso/google-cloud-platform"},sidebar:"mainDocsSidebar",previous:{title:"Setup SSO with Microsoft Active Directory",permalink:"/sso/microsoft-active-directory"},next:{title:"SSO troubleshooting",permalink:"/sso/troubleshooting"}},s={},p=[{value:"Register emnify in Google",id:"register-emnify-in-google",level:2},{value:"Select or create an emnify project",id:"select-or-create-an-emnify-project",level:3},{value:"Get an OAuth client ID and Secret",id:"get-an-oauth-client-id-and-secret",level:3},{value:"Configure the emnify Portal",id:"configure-the-emnify-portal",level:2}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setup-sso-with-google-cloud-platform"},"Setup SSO with Google Cloud Platform"),(0,r.kt)("p",null,"This guide walks through enabling single sign-on (SSO), so your organization can access the emnify Portal using your Google Cloud Platform credentials."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Google account that's a user within a ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/resource-manager/docs/creating-managing-organization"},"Google Cloud Platform organization")),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"/quickstart"},"emnify account")," using the same email address as the one used to sign in to Google ")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If your email address in the emnify Portal differs from the one used to log in to Google, this setup won't work.\nYou can verify your email in ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/user-settings"},(0,r.kt)("strong",{parentName:"a"},"User Settings")),"."),(0,r.kt)("p",{parentName:"admonition"},"Instead, add an additional user with the ",(0,r.kt)("strong",{parentName:"p"},"Administrator")," role.\nTo do this, go to ",(0,r.kt)("strong",{parentName:"p"},"Organization Settings"),"\xa0",(0,r.kt)("span",{"aria-label":"and then"},">")," ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/organisation-settings/users"},(0,r.kt)("strong",{parentName:"a"},"Employees")),".")),(0,r.kt)("h2",{id:"register-emnify-in-google"},"Register emnify in Google"),(0,r.kt)("p",null,"First, you need to register emnify in the ",(0,r.kt)("a",{parentName:"p",href:"https://console.developers.google.com/"},"Google Cloud Platform console")," and retrieve an OAuth 2.0 client ID and client secret."),(0,r.kt)("h3",{id:"select-or-create-an-emnify-project"},"Select or create an emnify project"),(0,r.kt)("p",null,"Log in with your Google account and navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/dashboard"},"APIs & Services dashboard"),"."),(0,r.kt)("p",null,"Select your organization's project for managing OAuth credentials for emnify."),(0,r.kt)("p",null,"If you don't already have a designated project, create one with the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"New Project"),"."),(0,r.kt)("li",{parentName:"ol"},"If prompted, agree to the terms of service."),(0,r.kt)("li",{parentName:"ol"},"Enter a ",(0,r.kt)("strong",{parentName:"li"},"Project name"),' (for example, "emnify SSO") and ',(0,r.kt)("strong",{parentName:"li"},"Location"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),", then you should land on the ",(0,r.kt)("strong",{parentName:"li"},"Enabled APIs & Services")," page."),(0,r.kt)("li",{parentName:"ol"},"In the APIs & Services navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"OAuth consent screen"),"."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/cloud/answer/10311615#user-type"},(0,r.kt)("strong",{parentName:"a"},"User Type"))," for your project."),(0,r.kt)("li",{parentName:"ol"},"Specify app information about emnify (",(0,r.kt)("strong",{parentName:"li"},"App Name"),", ",(0,r.kt)("strong",{parentName:"li"},"User support email"),", and ",(0,r.kt)("strong",{parentName:"li"},"Developer contact information")," are necessary, but all other fields are optional)."),(0,r.kt)("li",{parentName:"ol"},"(Optional) Define any ",(0,r.kt)("strong",{parentName:"li"},"Scopes")," or ",(0,r.kt)("strong",{parentName:"li"},"Test Users"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save and Continue")," to proceed."),(0,r.kt)("li",{parentName:"ol"},"Navigate to the summary screen, review your settings, and click ",(0,r.kt)("strong",{parentName:"li"},"Back to Dashboard"),".")),(0,r.kt)("h3",{id:"get-an-oauth-client-id-and-secret"},"Get an OAuth client ID and Secret"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("strong",{parentName:"p"},"Credentials")," option to retrieve the OAuth client ID and secret that you'll enter into the emnify Portal."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Head to ",(0,r.kt)("strong",{parentName:"li"},"Credentials")," in the APIs & Services navigation bar."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"+ Create Credentials")," (on the top next to the page header), then select the ",(0,r.kt)("inlineCode",{parentName:"li"},"OAuth client ID")," option."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Application type")," list, select ",(0,r.kt)("inlineCode",{parentName:"li"},"Web application"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter a ",(0,r.kt)("strong",{parentName:"li"},"Name"),' (for example, "emnify Portal" or "Enterprise Portal").'),(0,r.kt)("li",{parentName:"ol"},"Set an ",(0,r.kt)("strong",{parentName:"li"},"Authorized redirect URI")," with the value: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://prod-e5.okta.com/oauth2/v1/authorize/callback")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create")," and wait for the ",(0,r.kt)("strong",{parentName:"li"},"OAuth client created")," modal to appear."),(0,r.kt)("li",{parentName:"ol"},"Copy the displayed values (you'll need them later) or download the provided JSON.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can access your client ID and secret at any time in your Google Cloud Platform console on the ",(0,r.kt)("strong",{parentName:"p"},"Credentials")," page.")),(0,r.kt)("h2",{id:"configure-the-emnify-portal"},"Configure the emnify Portal"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/sign/"},"Log in to the emnify Portal"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Organization Settings")," (building icon) in the top-level navigation and click ",(0,r.kt)("a",{parentName:"li",href:"https://portal.emnify.com/organisation-settings/federation"},(0,r.kt)("strong",{parentName:"a"},"Single Sign-On")),"."),(0,r.kt)("li",{parentName:"ol"},"If you need SSO enabled for your account, ",(0,r.kt)("a",{parentName:"li",href:"https://support.emnify.com/"},"contact emnify support"),".\nOtherwise, click ",(0,r.kt)("strong",{parentName:"li"},"Add")," under the Google SSO provider."),(0,r.kt)("li",{parentName:"ol"},"Enter the ",(0,r.kt)("strong",{parentName:"li"},"Client ID")," and ",(0,r.kt)("strong",{parentName:"li"},"Client Secret")," you copied earlier, then click ",(0,r.kt)("strong",{parentName:"li"},"Create and Activate"),"."),(0,r.kt)("li",{parentName:"ol"},"Once you're back on ",(0,r.kt)("strong",{parentName:"li"},"Single Sign-On"),", you should see Google listed as a ",(0,r.kt)("strong",{parentName:"li"},"Provider"),"."),(0,r.kt)("li",{parentName:"ol"},"Finally, click ",(0,r.kt)("strong",{parentName:"li"},"Verify Integration")," and follow the prompts.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You must complete the final step and verify the provider to configure SSO.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/sso/troubleshooting"},"SSO troubleshooting")," if you encounter issues while setting up SSO.")))}m.isMDXComponent=!0}}]);