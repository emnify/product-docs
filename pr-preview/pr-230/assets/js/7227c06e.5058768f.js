"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[7038],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>g});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(i),u=n,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return i?o.createElement(g,r(r({ref:t},p),{},{components:i})):o.createElement(g,r({ref:t},p))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,r[1]=s;for(var l=2;l<a;l++)r[l]=i[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5277:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=i(7462),n=(i(7294),i(3905));const a={description:"Assign a device to a service policy or coverage policy in the emnify Portal",last_update:{date:"01-09-2024"},slug:"/how-tos/assign-devices-to-policies"},r="Assign devices to a policy",s={unversionedId:"how-tos/device-policies/assign-devices-to-policies",id:"how-tos/device-policies/assign-devices-to-policies",title:"Assign devices to a policy",description:"Assign a device to a service policy or coverage policy in the emnify Portal",source:"@site/docs/how-tos/device-policies/assign-devices-to-policies.md",sourceDirName:"how-tos/device-policies",slug:"/how-tos/assign-devices-to-policies",permalink:"/pr-preview/pr-230/how-tos/assign-devices-to-policies",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/how-tos/device-policies/assign-devices-to-policies.md",tags:[],version:"current",lastUpdatedAt:1704758400,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{description:"Assign a device to a service policy or coverage policy in the emnify Portal",last_update:{date:"01-09-2024"},slug:"/how-tos/assign-devices-to-policies"},sidebar:"mainDocsSidebar",previous:{title:"Create a new coverage policy",permalink:"/pr-preview/pr-230/how-tos/create-coverage-policies"},next:{title:"Update existing policies",permalink:"/pr-preview/pr-230/how-tos/update-existing-device-policies"}},c={},l=[{value:"Single device assignment",id:"single-device-assignment",level:2},{value:"Bulk assignments",id:"bulk-assignments",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:l};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"assign-devices-to-a-policy"},"Assign devices to a policy"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/portal/device-policies"},"Device policies")," only become useful after you start assigning devices to them.\nYou can assign single or multiple devices to a policy in the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Develop a strategy for grouping your devices according to specific use cases, deployment regions, product lines, or services.\nChoose policy names and device tags related to these criteria.\nThis helps with selections when performing bulk assignments.")),(0,n.kt)("admonition",{title:"Warning",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Devices don't automatically reset if you change the service or coverage policy.\nDue to caching, it can also take up to 24 hours before changes are applied to a device."),(0,n.kt)("p",{parentName:"admonition"},"Be sure to ",(0,n.kt)("a",{parentName:"p",href:"/portal/connected-devices#reset-connectivity"},"reset its connectivity")," for the change to take effect sooner.")),(0,n.kt)("h2",{id:"single-device-assignment"},"Single device assignment"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to ",(0,n.kt)("a",{parentName:"li",href:"https://portal.emnify.com/connected-devices"},(0,n.kt)("strong",{parentName:"a"},"Connected Devices")),"."),(0,n.kt)("li",{parentName:"ol"},"Find the device you wish to assign to a policy, then click ",(0,n.kt)("strong",{parentName:"li"},"Details"),"."),(0,n.kt)("li",{parentName:"ol"},"When viewing the device details, select ",(0,n.kt)("strong",{parentName:"li"},"Edit")," for either ",(0,n.kt)("strong",{parentName:"li"},"Service Policy")," or ",(0,n.kt)("strong",{parentName:"li"},"Coverage Policy")," to show a dropdown list of available policies."),(0,n.kt)("li",{parentName:"ol"},"Select your policy from the list.")),(0,n.kt)("p",null,"You should see a real-time notification confirming the change."),(0,n.kt)("h2",{id:"bulk-assignments"},"Bulk assignments"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to ",(0,n.kt)("a",{parentName:"p",href:"https://portal.emnify.com/connected-devices"},(0,n.kt)("strong",{parentName:"a"},"Connected Devices")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Search for the devices you wish to assign to a policy and select the checkbox next to every relevant device."),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can filter by tag or any other property to show only the devices to be assigned.\nIf the filtered list looks good, select the top checkbox in the table heading to select them all."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A new menu at the top of the page provides bulk operations.\nSelect ",(0,n.kt)("strong",{parentName:"p"},"More")," and then either ",(0,n.kt)("strong",{parentName:"p"},"Change Service Policy")," or ",(0,n.kt)("strong",{parentName:"p"},"Change Coverage Policy"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose your policy from the presented dropdown list and then select ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("p",null,"The devices you selected are assigned to their new policy, and you should see a real-time notification confirming the change."),(0,n.kt)("details",{className:"custom-details-example"},(0,n.kt)("summary",null,"Show an example"),(0,n.kt)("img",{src:i(9394).Z,style:{width:900},alt:""})),(0,n.kt)("h2",{id:"next-steps"},"Next steps"),(0,n.kt)("p",null,"After you've created and assigned policies, you can also update existing policies in the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal"),".\nFor more information, see ",(0,n.kt)("a",{parentName:"p",href:"/how-tos/update-existing-device-policies"},"Update existing device policies"),"."))}d.isMDXComponent=!0},9394:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/portal-connected-devices-bulk-policy-change-21cd6ccf28098a6356d2f2e0ea946ae8.png"}}]);