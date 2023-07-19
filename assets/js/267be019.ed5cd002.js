"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[4001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=s,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,i=new Array(n);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var a=r(7462),s=(r(7294),r(3905));const n={title:"Workspaces",description:"Organizations with complex business structures or diverse product lines can benefit from Workspaces in the emnify Portal",slug:"/workspaces"},i='Workspaces <span className="theme-doc-version-badge badge badge--primary beta">beta</span>',o={unversionedId:"portal/organization/workspaces",id:"portal/organization/workspaces",title:"Workspaces",description:"Organizations with complex business structures or diverse product lines can benefit from Workspaces in the emnify Portal",source:"@site/docs/portal/organization/workspaces.md",sourceDirName:"portal/organization",slug:"/workspaces",permalink:"/workspaces",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/portal/organization/workspaces.md",tags:[],version:"current",lastUpdatedAt:1689772761,formattedLastUpdatedAt:"Jul 19, 2023",frontMatter:{title:"Workspaces",description:"Organizations with complex business structures or diverse product lines can benefit from Workspaces in the emnify Portal",slug:"/workspaces"},sidebar:"mainDocsSidebar",previous:{title:"Single sign-on",permalink:"/sso"},next:{title:"User settings",permalink:"/portal/user-settings"}},l={},p=[{value:"Useful terms",id:"useful-terms",level:2},{value:"Features",id:"features",level:2},{value:"Partition of business units",id:"partition-of-business-units",level:3},{value:"Partition access and visibility",id:"partition-access-and-visibility",level:3},{value:"Workspaces UI",id:"workspaces-ui",level:2},{value:"No workspaces present",id:"no-workspaces-present",level:3},{value:"Multiple workspaces created",id:"multiple-workspaces-created",level:3},{value:"Available guides",id:"available-guides",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"workspaces-beta"},"Workspaces ",(0,s.kt)("span",{className:"theme-doc-version-badge badge badge--primary beta"},"beta")),(0,s.kt)("p",null,"This feature comes with the ",(0,s.kt)("a",{parentName:"p",href:"https://portal.emnify.com/organisation-settings/subscription"},(0,s.kt)("strong",{parentName:"a"},"Pro")," plan")," subscribers.\nIt's designed to address the needs of organizations with complex business structures and those with diverse product lines."),(0,s.kt)("h2",{id:"useful-terms"},"Useful terms"),(0,s.kt)("p",null,"The following terms are commonly used when discussing the Workspaces feature.\nEach listed term includes a link to its associated ",(0,s.kt)("a",{parentName:"p",href:"/glossary"},"Glossary")," entry:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/glossary#workspace"},"Workspaces")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/glossary#linked-workspaces"},"Linked workspaces")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/glossary#main-organization"},"Main organization")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/glossary#workspace-switcher"},"Workspace switcher"))),(0,s.kt)("h2",{id:"features"},"Features"),(0,s.kt)("p",null,"Implementing ",(0,s.kt)("strong",{parentName:"p"},"Workspaces")," reduces operational costs and management complexity for organizations that meet the specified criteria.\nAdministrators with privileges to manage linked workspaces only need one set of login credentials to administer them all."),(0,s.kt)("p",null,"There are other benefits and solutions that ",(0,s.kt)("strong",{parentName:"p"},"Workspaces")," can provide, but these vary depending on the organization, such as:"),(0,s.kt)("h3",{id:"partition-of-business-units"},"Partition of business units"),(0,s.kt)("p",null,"This helps facilitate requirements for supporting fundamental differences in the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"IoT businesses"),(0,s.kt)("li",{parentName:"ul"},"Services or product lines"),(0,s.kt)("li",{parentName:"ul"},"Billing conditions"),(0,s.kt)("li",{parentName:"ul"},"Currencies"),(0,s.kt)("li",{parentName:"ul"},"Tax requirements")),(0,s.kt)("h3",{id:"partition-access-and-visibility"},"Partition access and visibility"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Workspace users see only the IoT assets they need to manage."),(0,s.kt)("li",{parentName:"ul"},"Administrators manage only the users in their business unit.")),(0,s.kt)("h2",{id:"workspaces-ui"},"Workspaces UI"),(0,s.kt)("h3",{id:"no-workspaces-present"},"No workspaces present"),(0,s.kt)("img",{src:r(7732).Z,style:{width:300},alt:""}),(0,s.kt)("h3",{id:"multiple-workspaces-created"},"Multiple workspaces created"),(0,s.kt)("img",{src:r(3342).Z,style:{width:300},alt:""}),(0,s.kt)("h2",{id:"available-guides"},"Available guides"),(0,s.kt)("p",null,"The following guides offer step-by-step guidance for configuring Workspaces for your organization:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/workspaces/create"},"Create a new workspace")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/workspaces/link"},"Link an existing workspace")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/workspaces/switch"},"Switch between workspaces"))))}u.isMDXComponent=!0},7732:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/workspaces-create-1adfbf536db75981042b27f5dc2989ca.png"},3342:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/workspaces-created-ba393f92b0f85ab2a501ae2b03967d35.png"}}]);