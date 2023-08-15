"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,y=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return n?r.createElement(y,o(o({ref:t},m),{},{components:n})):r.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={description:"Learn how to manage your SIMs via the SIM Inventory in the emnify Portal",pagination_next:"portal/sims-and-devices/connected-devices",slug:"/portal/sim-inventory"},o="SIM inventory",s={unversionedId:"portal/sims-and-devices/sim-inventory",id:"portal/sims-and-devices/sim-inventory",title:"SIM inventory",description:"Learn how to manage your SIMs via the SIM Inventory in the emnify Portal",source:"@site/docs/portal/sims-and-devices/sim-inventory.md",sourceDirName:"portal/sims-and-devices",slug:"/portal/sim-inventory",permalink:"/portal/sim-inventory",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/portal/sims-and-devices/sim-inventory.md",tags:[],version:"current",lastUpdatedAt:1692107015,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{description:"Learn how to manage your SIMs via the SIM Inventory in the emnify Portal",pagination_next:"portal/sims-and-devices/connected-devices",slug:"/portal/sim-inventory"},sidebar:"mainDocsSidebar",previous:{title:"Dashboard",permalink:"/portal"},next:{title:"Connected devices",permalink:"/portal/connected-devices"}},l={},p=[{value:"SIM states",id:"sim-states",level:2},{value:"SIM management",id:"sim-management",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sim-inventory"},"SIM inventory"),(0,a.kt)("h2",{id:"sim-states"},"SIM states"),(0,a.kt)("p",null,"A SIM can transition through five states during its lifecycle, ",(0,a.kt)("strong",{parentName:"p"},"Issued"),", ",(0,a.kt)("strong",{parentName:"p"},"Activated"),", ",(0,a.kt)("strong",{parentName:"p"},"Suspended"),", ",(0,a.kt)("strong",{parentName:"p"},"Factory Test"),", and ",(0,a.kt)("strong",{parentName:"p"},"Deleted"),"."),(0,a.kt)("p",null,"These states are sometimes referred to as the ",(0,a.kt)("a",{parentName:"p",href:"/glossary#sim-status"},"SIM status"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Learn more about each SIM state and what they mean in the ",(0,a.kt)("a",{parentName:"p",href:"/services/sim-lifecycle-management"},"SIM lifecycle management")," overview.")),(0,a.kt)("h2",{id:"sim-management"},"SIM management"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://portal.emnify.com/sim-inventory"},(0,a.kt)("strong",{parentName:"a"},"SIM Inventory"))," provides a complete list of your registered SIMs.\nYou can search by various identifiers, including ",(0,a.kt)("a",{parentName:"p",href:"/glossary#iccid"},"ICCID"),", ",(0,a.kt)("a",{parentName:"p",href:"/glossary#eid"},"EID"),", and phone number, to name a few."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Details")," view of a SIM shows all identifiers as well as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Assigned device")," (if the SIM is attached to a device)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Vendor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Memory")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Produced")," (date and time)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Model")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SIM Type")," (for example, triple-cut commercial)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Events")," and ",(0,a.kt)("strong",{parentName:"p"},"Statistics")," are additional views that provide logs and aggregated usage, respectively, if the SIM has been assigned to a device and is ",(0,a.kt)("strong",{parentName:"p"},"Active"),"."),(0,a.kt)("p",null,"To expand your SIM inventory, follow the appropriate link at the top of the page:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To visit the ",(0,a.kt)("a",{parentName:"li",href:"https://portal.emnify.com/sim-order"},"SIM Shop"),", select ",(0,a.kt)("strong",{parentName:"li"},"Order SIMs")),(0,a.kt)("li",{parentName:"ul"},"To ",(0,a.kt)("a",{parentName:"li",href:"https://portal.emnify.com/sim-registration"},"register SIMs"),", either individually or in batches, select ",(0,a.kt)("strong",{parentName:"li"},"Register SIMs"),".")))}c.isMDXComponent=!0}}]);