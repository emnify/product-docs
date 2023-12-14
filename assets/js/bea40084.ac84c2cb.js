"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3358],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=m(a),g=r,c=s["".concat(p,".").concat(g)]||s[g]||d[g]||l;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5414:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={description:"View your organization's billing details in the emnify Portal",last_update:{date:"09-07-2023"},slug:"/portal/org/billing"},i="Billing",o={unversionedId:"portal/organization/billing",id:"portal/organization/billing",title:"Billing",description:"View your organization's billing details in the emnify Portal",source:"@site/docs/portal/organization/billing.md",sourceDirName:"portal/organization",slug:"/portal/org/billing",permalink:"/portal/org/billing",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/portal/organization/billing.md",tags:[],version:"current",lastUpdatedAt:1694044800,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{description:"View your organization's billing details in the emnify Portal",last_update:{date:"09-07-2023"},slug:"/portal/org/billing"},sidebar:"mainDocsSidebar",previous:{title:"Subscription",permalink:"/portal/org/subscription"},next:{title:"Single sign-on",permalink:"/sso"}},p={},m=[{value:"Payment information",id:"payment-information",level:2},{value:"Monthly cost details",id:"monthly-cost-details",level:2},{value:"Billing history",id:"billing-history",level:2}],u={toc:m};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"billing"},"Billing"),(0,r.kt)("p",null,"To view your billing details, navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/organisation-settings/"},(0,r.kt)("strong",{parentName:"a"},"Workspace settings")),", then click ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/organisation-settings/billing"},(0,r.kt)("strong",{parentName:"a"},"Billing")),".\nThere, you find the following:"),(0,r.kt)("h2",{id:"payment-information"},"Payment information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Type")," (for example, Postpaid)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Billing")," (for example, Monthly, during the first week of every month)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pay with")," (for example, Visa \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 1234 ",(0,r.kt)("strong",{parentName:"li"},"Change"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VAT")," (for example, Add VAT Number)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VAT rate")," (for example, 19%)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Currency")," (for example, \u20ac EUR)")),(0,r.kt)("h2",{id:"monthly-cost-details"},"Monthly cost details"),(0,r.kt)("p",null,"This section has a ",(0,r.kt)("strong",{parentName:"p"},"Month")," dropdown that defaults to ",(0,r.kt)("strong",{parentName:"p"},"Current month (preview)"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Any changes are reflected in this table within a few hours.")),(0,r.kt)("p",null,"The following is an example of the shown table and potential values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Settlement"),(0,r.kt)("th",{parentName:"tr",align:null},"Cost"),(0,r.kt)("th",{parentName:"tr",align:null},"Volume"),(0,r.kt)("th",{parentName:"tr",align:null},"Total"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Transit Gateway Breakout")),(0,r.kt)("td",{parentName:"tr",align:null},"Breakout ID: \u2022\u2022\u2022 (Transit Gateway)"),(0,r.kt)("td",{parentName:"tr",align:null},"Monthly Payment"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(currency amount)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Data plan")),(0,r.kt)("td",{parentName:"tr",align:null},"Pro EUR"),(0,r.kt)("td",{parentName:"tr",align:null},"Every 21 days"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(currency amount)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Data allowance")),(0,r.kt)("td",{parentName:"tr",align:null},"100 MB per device Included per activated SIM"),(0,r.kt)("td",{parentName:"tr",align:null},"Monthly Payment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(currency amount)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022\u2022\u2022 SIMs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(currency amount)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Data usage in"),' "',(0,r.kt)("em",{parentName:"td"},"your coverage area"),'"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022\u2022\u2022 MB"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(currency amount)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Data costs for"),' "',(0,r.kt)("em",{parentName:"td"},"your coverage area"),'"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022\u2022\u2022 GB included"),(0,r.kt)("td",{parentName:"tr",align:null},"Per MB"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(currency amount)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022\u2022\u2022 MB"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(currency amount)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"SMS Usage")),(0,r.kt)("td",{parentName:"tr",align:null},"Mobile SMS Usage"),(0,r.kt)("td",{parentName:"tr",align:null},"Per SMS"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022\u2022 SMS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(currency amount)"))))),(0,r.kt)("p",null,"The preceding table also provides a ",(0,r.kt)("strong",{parentName:"p"},"Subtotal")," of all costs incurred, tax if applicable, and a ",(0,r.kt)("strong",{parentName:"p"},"Total")," cost in your currency for your billing period."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Data usage in"),' "',(0,r.kt)("em",{parentName:"p"},"your coverage area"),'" is what you selected from the ',(0,r.kt)("strong",{parentName:"p"},"Data Plan")," dropdown under ",(0,r.kt)("a",{parentName:"p",href:"https://portal.emnify.com/device-policies#coverage-policies"},(0,r.kt)("strong",{parentName:"a"},"Coverage Policies")),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Data costs for"),' "',(0,r.kt)("em",{parentName:"p"},"your coverage area"),'" is what you selected in the list of regions under ',(0,r.kt)("strong",{parentName:"p"},"Coverage Policies"),".")),(0,r.kt)("h2",{id:"billing-history"},"Billing history"),(0,r.kt)("p",null,"You can also view your billing history for these periods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Last 3 months"),(0,r.kt)("li",{parentName:"ul"},"Last 12 months"),(0,r.kt)("li",{parentName:"ul"},"All billing history")))}s.isMDXComponent=!0}}]);