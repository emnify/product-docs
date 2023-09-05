"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[5571],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(a),p=n,f=c["".concat(l,".").concat(p)]||c[p]||u[p]||s;return a?r.createElement(f,o(o({ref:t},m),{},{components:a})):r.createElement(f,o({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1844:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const s={description:"Set up, filter, pause, or delete data streams with the emnify multicloud Data Streamer",slug:"/multicloud-data-streamer/manage-data-streams"},o="Manage data streams",i={unversionedId:"services/platform/data-streamer/data-streams",id:"services/platform/data-streamer/data-streams",title:"Manage data streams",description:"Set up, filter, pause, or delete data streams with the emnify multicloud Data Streamer",source:"@site/docs/services/platform/data-streamer/data-streams.md",sourceDirName:"services/platform/data-streamer",slug:"/multicloud-data-streamer/manage-data-streams",permalink:"/multicloud-data-streamer/manage-data-streams",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/platform/data-streamer/data-streams.md",tags:[],version:"current",lastUpdatedAt:1693920212,formattedLastUpdatedAt:"Sep 5, 2023",frontMatter:{description:"Set up, filter, pause, or delete data streams with the emnify multicloud Data Streamer",slug:"/multicloud-data-streamer/manage-data-streams"},sidebar:"mainDocsSidebar",previous:{title:"Stream types",permalink:"/multicloud-data-streamer/stream-types"},next:{title:"Use the Data Streamer",permalink:"/multicloud-data-streamer/usage"}},l={},d=[{value:"Set up a data stream",id:"set-up-a-data-stream",level:2},{value:"Filter event data streams",id:"filter-event-data-streams",level:2},{value:"Pause or delete a data stream",id:"pause-or-delete-a-data-stream",level:2}],m={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"manage-data-streams"},"Manage data streams"),(0,n.kt)("h2",{id:"set-up-a-data-stream"},"Set up a data stream"),(0,n.kt)("p",null,"Each ",(0,n.kt)("a",{parentName:"p",href:"/multicloud-data-streamer/connection-types"},"connection type")," requires specific credentials to ensure that the Data Streamer has permission to write data to that service.\nAPI keys and configuration parameters differ by connection type."),(0,n.kt)("p",null,"During creation, you can define the connection type and the corresponding destination settings, the stream type, and the filtering."),(0,n.kt)("h2",{id:"filter-event-data-streams"},"Filter event data streams"),(0,n.kt)("p",null,"The Data Streamer can apply filtering for event data streams based on event types."),(0,n.kt)("p",null,"By default, the data stream has no filters and streams all events. You can apply multiple filters to each stream to create more granular and targeted data for analysis.\nThe data stream only contains events matching the selected event types."),(0,n.kt)("h2",{id:"pause-or-delete-a-data-stream"},"Pause or delete a data stream"),(0,n.kt)("p",null,"You can pause a stream (for example, if you want to take down the receiving server for maintenance) and resume later when convenient by activating the data stream again via your preferred interface.\nThe event and usage data is available for seven days after creation."),(0,n.kt)("p",null,"If you want to remove a data stream permanently, you need to delete it."))}c.isMDXComponent=!0}}]);