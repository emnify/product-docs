"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[5897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={description:"Learn the basics and structure of emnify events"},o="Getting started with events",s={unversionedId:"services/events/getting-started",id:"services/events/getting-started",title:"Getting started with events",description:"Learn the basics and structure of emnify events",source:"@site/docs/services/events/getting-started.md",sourceDirName:"services/events",slug:"/services/events/getting-started",permalink:"/services/events/getting-started",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/services/events/getting-started.md",tags:[],version:"current",lastUpdatedAt:1683023007,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{description:"Learn the basics and structure of emnify events"},sidebar:"mainDocsSidebar",previous:{title:"Events",permalink:"/services/events"},next:{title:"Event types",permalink:"/services/events/event-types"}},l={},c=[{value:"Structure",id:"structure",level:2},{value:"Event severity",id:"event-severity",level:3},{value:"Event source",id:"event-source",level:3},{value:"Event type",id:"event-type",level:3},{value:"Working with events",id:"working-with-events",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-events"},"Getting started with events"),(0,a.kt)("p",null,"The emnify system generates several types of events.\nThese events allow you to track notable system occurrences based on behavior."),(0,a.kt)("p",null,"Some common use cases for events on emnify include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Triggers for custom business processes")," (e.g., authentication or custom usage limitations configured on the ",(0,a.kt)("a",{parentName:"li",href:"usage#emnify-portal"},"emnify Portal"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Monitoring")," (e.g., SIM or data connection lifecycles)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input for custom billing systems")," (i.e., updating billing configuration, processing invoices, etc.)")),(0,a.kt)("p",null,"Events are often used as triggers for custom business processes, for monitoring, and as input for custom billing systems.\nThey provide information about lifecycle transitions and configuration changes. "),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("p",null,"Each event is represented by an object based on the ",(0,a.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/event.html"},"generic Event Object"),". "),(0,a.kt)("p",null,"Depending on the event type, some generic properties may not apply, and some events may have additional custom fields to provide information about what happened. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can find detailed information on the Event Object and its associated properties in the ",(0,a.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/event.html"},"Event API Reference")," in the ",(0,a.kt)("em",{parentName:"p"},"emnify System Documentation"),".  ")),(0,a.kt)("h3",{id:"event-severity"},"Event severity"),(0,a.kt)("p",null,"Events are distinguished by three severity levels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Info"),": Expected behavior of the executed event (e.g., a device successfully attaches to a network)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Warn"),": Problem or unusual behavior, but doesn't necessarily require immediate action (e.g., a credit card expires in 60 days)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Critical"),": Serious issue that likely requires additional follow-up (e.g., charging for an invoice failed).")),(0,a.kt)("admonition",{title:"API Reference ",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/event.html#event-severity-object"},"Event Severity Object - Event API Reference Documentation"))),(0,a.kt)("h3",{id:"event-source"},"Event source"),(0,a.kt)("p",null,"Every event is triggered by one of three available event sources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Network"),": The cellular network your device is connected to (e.g., a location is updated or purged)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Policy Control"),": Both the emnify system and your organization can define and enforce policies, quotas, or other limitations. For instance:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The emnify system can block devices that exceed predefined traffic limits."),(0,a.kt)("li",{parentName:"ul"},"Your organization could configure the maximum SMS usage for devices to limit SMS traffic."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"API"),": The ",(0,a.kt)("a",{parentName:"li",href:"https://cdn.emnify.net/api/doc/index.html"},"emnify REST API"),".")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Any events triggered in the ",(0,a.kt)("a",{parentName:"p",href:"usage#emnify-portal"},"emnify Portal")," will show ",(0,a.kt)("strong",{parentName:"p"},"API")," as the event source.\nThat's because the Portal is an interface that uses the API under the hood. ")),(0,a.kt)("admonition",{title:"API Reference",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/event.html#event-source-object"},"Event Source Object - Event API Reference Documentation"))),(0,a.kt)("h3",{id:"event-type"},"Event type"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"event-types"},"Event Types")," page provides an overview of the specific events generated by our platform."),(0,a.kt)("h2",{id:"working-with-events"},"Working with events"),(0,a.kt)("p",null,"There are three main ways you can access and trigger events: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"usage#data-streamer"},"Data Streamer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"usage#event-api"},"Event API")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"usage#emnify-portal"},"emnify Portal"))),(0,a.kt)("p",null,"More information on these systems and how they compare is available on the ",(0,a.kt)("a",{parentName:"p",href:"usage"},"Working with events")," page."))}u.isMDXComponent=!0}}]);