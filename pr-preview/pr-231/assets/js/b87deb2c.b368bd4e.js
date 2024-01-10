"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8408],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(o),v=a,m=d["".concat(l,".").concat(v)]||d[v]||u[v]||n;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<n;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}v.displayName="MDXCreateElement"},9566:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var r=o(7462),a=(o(7294),o(3905));const n={description:"Create a new coverage policy or delete an old policy with the emnify Portal",last_update:{date:"01-09-2024"},slug:"/how-tos/create-coverage-policies"},i="Create a new coverage policy",c={unversionedId:"how-tos/device-policies/create-coverage-policies",id:"how-tos/device-policies/create-coverage-policies",title:"Create a new coverage policy",description:"Create a new coverage policy or delete an old policy with the emnify Portal",source:"@site/docs/how-tos/device-policies/create-coverage-policies.md",sourceDirName:"how-tos/device-policies",slug:"/how-tos/create-coverage-policies",permalink:"/pr-preview/pr-231/how-tos/create-coverage-policies",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/how-tos/device-policies/create-coverage-policies.md",tags:[],version:"current",lastUpdatedAt:1704758400,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{description:"Create a new coverage policy or delete an old policy with the emnify Portal",last_update:{date:"01-09-2024"},slug:"/how-tos/create-coverage-policies"},sidebar:"mainDocsSidebar",previous:{title:"Create a new service policy",permalink:"/pr-preview/pr-231/how-tos/create-service-policies"},next:{title:"Assign devices to a policy",permalink:"/pr-preview/pr-231/how-tos/assign-devices-to-policies"}},l={},s=[{value:"Delete a coverage policy",id:"delete-a-coverage-policy",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-new-coverage-policy"},"Create a new coverage policy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://portal.emnify.com/sign"},"Log in to your emnify account"),"."),(0,a.kt)("li",{parentName:"ol"},"Navigate to the ",(0,a.kt)("a",{parentName:"li",href:"https://portal.emnify.com/device-policies#coverage-policies"},(0,a.kt)("strong",{parentName:"a"},"Coverage Policies"))," section of ",(0,a.kt)("strong",{parentName:"li"},"Device Policies"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"New coverage policy"),"."),(0,a.kt)("li",{parentName:"ol"},"Replace ",(0,a.kt)("strong",{parentName:"li"},"New coverage policy")," with the name of your policy and add a ",(0,a.kt)("strong",{parentName:"li"},"Description"),".\nThen, choose a ",(0,a.kt)("strong",{parentName:"li"},"Data Plan")," and ",(0,a.kt)("strong",{parentName:"li"},"Data allowance")," from the available options."),(0,a.kt)("li",{parentName:"ol"},"Finally, click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,"By default, connectivity is disabled, and any devices assigned to this coverage policy are blocked from all networks.\nYou need to enable at least one ",(0,a.kt)("strong",{parentName:"p"},"Coverage area")," for your devices to connect."),(0,a.kt)("p",null,"Changes save automatically."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Creating multiple coverage policies lets you differentiate between device types based on their coverage needs and the associated costs.")),(0,a.kt)("h2",{id:"delete-a-coverage-policy"},"Delete a coverage policy"),(0,a.kt)("p",null,"Click the trash bin icon next to ",(0,a.kt)("strong",{parentName:"p"},"Details")," to remove a coverage policy."),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"Coverage policies only become useful after you start assigning devices to them.\nFor instructions on how to do this in the emnify Portal, see ",(0,a.kt)("a",{parentName:"p",href:"/how-tos/assign-devices-to-policies"},"Assign devices to a policy"),"."))}d.isMDXComponent=!0}}]);