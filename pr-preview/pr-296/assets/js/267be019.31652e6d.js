"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[4001],{2862:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=s(5893),r=s(1151);const t={description:"Multiple workspaces is designed to help organizations with complex business structures manage entities in the emnify Portal",last_update:{date:"02-26-2024"},slug:"/workspaces"},a="Multiple workspaces",o={id:"portal/organization/workspaces",title:"Multiple workspaces",description:"Multiple workspaces is designed to help organizations with complex business structures manage entities in the emnify Portal",source:"@site/docs/portal/organization/workspaces.md",sourceDirName:"portal/organization",slug:"/workspaces",permalink:"/pr-preview/pr-296/workspaces",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708905600,formattedLastUpdatedAt:"Feb 26, 2024",frontMatter:{description:"Multiple workspaces is designed to help organizations with complex business structures manage entities in the emnify Portal",last_update:{date:"02-26-2024"},slug:"/workspaces"},sidebar:"mainDocsSidebar",previous:{title:"Single sign-on",permalink:"/pr-preview/pr-296/sso"},next:{title:"User settings",permalink:"/pr-preview/pr-296/portal/user-settings"}},l={},c=[{value:"Useful terms",id:"useful-terms",level:2},{value:"Features",id:"features",level:2},{value:"Partition of business units",id:"partition-of-business-units",level:3},{value:"Partition access and visibility",id:"partition-access-and-visibility",level:3},{value:"Single sign-on",id:"single-sign-on",level:3},{value:"SuperAdmin user role",id:"superadmin-user-role",level:2},{value:"Available guides",id:"available-guides",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"multiple-workspaces",children:"Multiple workspaces"}),"\n",(0,i.jsx)(n.p,{children:"A workspace is where you manage the IoT cellular connectivity for your devices.\nEvery emnify customer has free access to a single workspace."}),"\n",(0,i.jsx)(n.p,{children:"When you need more than one workspace to manage independent aspects of your business, you can use multiple workspaces.\nThis feature is designed to address the needs of organizations with complex business structures, particularly those with entities that should remain independent in functionality but may have users managing both aspects."}),"\n",(0,i.jsx)(n.p,{children:"Potential use cases for multiple workspaces include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Entities that require independent billing"}),"\n",(0,i.jsx)(n.li,{children:"Diverse product lines within the same company with varying technical requirements"}),"\n",(0,i.jsx)(n.li,{children:"Separating sandbox and live systems"}),"\n",(0,i.jsx)(n.li,{children:"Entities that need independent contracts"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Multiple workspaces come with the ",(0,i.jsx)(n.strong,{children:"Pro Package"}),".\nBy default, you can have up to three workspaces."]})}),"\n",(0,i.jsx)(n.h2,{id:"useful-terms",children:"Useful terms"}),"\n",(0,i.jsx)(n.p,{children:"The following terms are commonly used when discussing the workspaces feature.\nEach listed term includes a link to its associated glossary entry:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/glossary#default-workspace",children:"Default workspace"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/glossary#linked-workspaces",children:"Linked workspaces"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/glossary#main-organization",children:"Main organization"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#superadmin-user-role",children:"SuperAdmin"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/glossary#workspace-switcher",children:"Workspace switcher"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(n.p,{children:"Implementing multiple workspaces reduces operational costs and management complexity for organizations that meet the specified criteria.\nAdministrators with privileges to manage linked workspaces only need one set of login credentials to administer them all."}),"\n",(0,i.jsx)(n.p,{children:"Multiple workspaces can provide other benefits and solutions, but these vary depending on need."}),"\n",(0,i.jsx)(n.h3,{id:"partition-of-business-units",children:"Partition of business units"}),"\n",(0,i.jsx)(n.p,{children:"Using multiple workspaces to partition business units helps facilitate requirements for supporting fundamental differences in the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IoT businesses"}),"\n",(0,i.jsx)(n.li,{children:"Services or product lines"}),"\n",(0,i.jsx)(n.li,{children:"Billing conditions"}),"\n",(0,i.jsx)(n.li,{children:"Currencies"}),"\n",(0,i.jsx)(n.li,{children:"Tax requirements"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"partition-access-and-visibility",children:"Partition access and visibility"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Users"})," in a workspace see only the IoT assets they need to manage."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Administrators"})," manage only the users in their workspace."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see ",(0,i.jsx)(n.a,{href:"/portal/roles#user-management",children:"user management roles and permissions"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"single-sign-on",children:"Single sign-on"}),"\n",(0,i.jsxs)(n.p,{children:["Users with the ",(0,i.jsx)(n.strong,{children:"Administrator"})," role can set single sign-on (SSO) for their default workspace.\nOnce SSO is enabled for the workspace, subsequent users with this workspace as their default must use SSO to log in to the emnify Portal.\nIf SSO is enabled in a workspace that isn't your default, you continue to use your email and password."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"For most people, the default workspace is the first one you were invited to and is always shown at the top of the list."})}),"\n",(0,i.jsxs)(n.p,{children:["For the available SSO providers and implementation guides, see ",(0,i.jsx)(n.a,{href:"/sso",children:"Single sign-on"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"superadmin-user-role",children:"SuperAdmin user role"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"SuperAdmin"})," role is provided when emnify sets up your multiple workspace architecture.\nBy default, this role is assigned to the longest-standing ",(0,i.jsx)(n.strong,{children:"Administrator"})," in the main organization."]}),"\n",(0,i.jsxs)(n.p,{children:["The SuperAdmin automatically receives access to all existing and any new workspaces linked to the main organization.\nIn the workspace switcher, they can see all of these workspaces, plus any other workspaces they have access to.\nThis role can manage other users like administrators across multiple workspaces in the ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/organisation-settings/users",children:(0,i.jsx)(n.strong,{children:"Users"})})," tab of the ",(0,i.jsx)(n.strong,{children:"Workspace settings"})," in the emnify Portal."]}),"\n",(0,i.jsxs)(n.p,{children:["There is only one SuperAdmin per main organization, and users with this role can't be removed from any workspace linked to that organization, as they are the assumed owner.\nHowever, a user can be a SuperAdmin in one main organization but hold another role (for example, ",(0,i.jsx)(n.strong,{children:"Observer"}),") in an unrelated workspace with a different main organization.\nIn those workspaces, this user can be updated or deleted as usual.\nFor more information, see ",(0,i.jsx)(n.a,{href:"/portal/roles#user-management",children:"user management roles and permissions"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Reassigning the SuperAdmin role can only be done by the emnify team on request."})}),"\n",(0,i.jsx)(n.p,{children:"If you unlink your workspaces, the SuperAdmin role is removed as it's no longer needed.\nBy default, the former SuperAdmin becomes an administrator of any workspace they already had access to before the workspaces were linked and lose access to the others."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Unlinked workspaces only affect the SuperAdmin's role and access.\nThere are no visual differences or permission changes for other users."})}),"\n",(0,i.jsx)(n.h2,{id:"available-guides",children:"Available guides"}),"\n",(0,i.jsx)(n.p,{children:"The following guides offer step-by-step guidance for configuring workspaces:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/workspaces/create",children:"Create a new workspace"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/workspaces/link",children:"Link an existing workspace"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/workspaces/switch",children:"Switch between workspaces"})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"API reference",type:"info",children:(0,i.jsxs)(n.p,{children:["Many operations are also executable using the emnify REST API.\nAvailable endpoints are listed under the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Workspaces",children:"Workspaces tag in the OpenAPI specification"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var i=s(7294);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);