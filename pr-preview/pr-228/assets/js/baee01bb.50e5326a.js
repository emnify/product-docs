"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[9029],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>g});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(i),v=o,g=d["".concat(s,".").concat(v)]||d[v]||u[v]||a;return i?n.createElement(g,r(r({ref:t},p),{},{components:i})):n.createElement(g,r({ref:t},p))}));function g(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,r[1]=c;for(var l=2;l<a;l++)r[l]=i[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}v.displayName="MDXCreateElement"},2632:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=i(7462),o=(i(7294),i(3905));const a={description:"Update or change the service policy or coverage policy assigned to your devices in the emnify Portal",last_update:{date:"01-09-2024"},sidebar_label:"Update existing policies",slug:"/how-tos/update-existing-device-policies"},r="Update existing device policies",c={unversionedId:"how-tos/device-policies/update-existing-policies",id:"how-tos/device-policies/update-existing-policies",title:"Update existing device policies",description:"Update or change the service policy or coverage policy assigned to your devices in the emnify Portal",source:"@site/docs/how-tos/device-policies/update-existing-policies.md",sourceDirName:"how-tos/device-policies",slug:"/how-tos/update-existing-device-policies",permalink:"/how-tos/update-existing-device-policies",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/how-tos/device-policies/update-existing-policies.md",tags:[],version:"current",lastUpdatedAt:1704758400,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{description:"Update or change the service policy or coverage policy assigned to your devices in the emnify Portal",last_update:{date:"01-09-2024"},sidebar_label:"Update existing policies",slug:"/how-tos/update-existing-device-policies"},sidebar:"mainDocsSidebar",previous:{title:"Assign devices to a policy",permalink:"/how-tos/assign-devices-to-policies"},next:{title:"Set up multi-factor authentication",permalink:"/how-tos/multi-factor-authentication"}},s={},l=[{value:"Change a device&#39;s policy assignments",id:"change-a-devices-policy-assignments",level:2},{value:"Bulk reset connectivity",id:"bulk-reset-connectivity",level:2}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"update-existing-device-policies"},"Update existing device policies"),(0,o.kt)("p",null,"In addition to creating ",(0,o.kt)("a",{parentName:"p",href:"/portal/device-policies"},"device policies")," and assigning devices to them, you can also update existing policies using the same interface in the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal"),"."),(0,o.kt)("p",null,"When several devices are deployed and assigned to the same policies, your changes to the policy are automatically pushed to devices in the group.\nFor instance, you might want to increase the data usage limits for a service policy that has 100 devices assigned to it.\nAs soon as you change the service policy, it's pushed to all 100 devices."),(0,o.kt)("h2",{id:"change-a-devices-policy-assignments"},"Change a device's policy assignments"),(0,o.kt)("p",null,"Another way to change a device's policy is to switch from its current policy to another one."),(0,o.kt)("p",null,"For a single device, you can select its new policy from a dropdown list when viewing the ",(0,o.kt)("strong",{parentName:"p"},"Device Details")," as described in ",(0,o.kt)("a",{parentName:"p",href:"/how-tos/assign-devices-to-policies#single-device-assignment"},"Single device assignment"),".\nSee ",(0,o.kt)("a",{parentName:"p",href:"/how-tos/assign-devices-to-policies#bulk-assignments"},"Bulk assignments")," for changing a group of devices to a new policy."),(0,o.kt)("admonition",{title:"Warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Devices don't automatically reset if you change the service or coverage policy.\nDue to caching, it can also take up to 24 hours before changes are applied to a device."),(0,o.kt)("p",{parentName:"admonition"},"Be sure to ",(0,o.kt)("a",{parentName:"p",href:"/portal/connected-devices#reset-connectivity"},"reset its connectivity")," for the change to take effect sooner.")),(0,o.kt)("h2",{id:"bulk-reset-connectivity"},"Bulk reset connectivity"),(0,o.kt)("p",null,"Resetting connectivity is also available as a bulk option."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://portal.emnify.com/connected-devices"},(0,o.kt)("strong",{parentName:"a"},"Connected Devices")),"."),(0,o.kt)("li",{parentName:"ol"},"Search for the devices you wish to reset connectivity for and select the checkbox next to every relevant device."),(0,o.kt)("li",{parentName:"ol"},"A new menu at the top of the page provides bulk operations.\nSelect ",(0,o.kt)("strong",{parentName:"li"},"Reset"),"."),(0,o.kt)("li",{parentName:"ol"},"Finally, click ",(0,o.kt)("strong",{parentName:"li"},"Confirm"),".",(0,o.kt)("admonition",{parentName:"li",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Once you confirm, the network detaches your device and waits for the modem to connect again.")))))}d.isMDXComponent=!0}}]);