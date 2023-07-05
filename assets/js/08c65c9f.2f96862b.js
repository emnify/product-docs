"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2810],{3905:(t,e,a)=>{a.d(e,{Zo:()=>g,kt:()=>o});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var k=r.createContext({}),c=function(t){var e=r.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},g=function(t){var e=c(t.components);return r.createElement(k.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,k=t.parentName,g=m(t,["components","mdxType","originalType","parentName"]),p=c(a),s=n,o=p["".concat(k,".").concat(s)]||p[s]||d[s]||l;return a?r.createElement(o,i(i({ref:e},g),{},{components:a})):r.createElement(o,i({ref:e},g))}));function o(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var m={};for(var k in e)hasOwnProperty.call(e,k)&&(m[k]=e[k]);m.originalType=t,m[p]="string"==typeof t?t:n,i[1]=m;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},820:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>k,default:()=>s,frontMatter:()=>m,metadata:()=>c,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABv0lEQVRIibXUO2tUURQF4G8mg2gYLIKFiAg+sBVs1GARH4iIoAiCqGAxiJWFj87mNBZRxCaIIEqCRVADFvbDCJrSIj8ghCksBg0WEiTKYHFOkmu8o3ce2dXZ65671t6bdXbJRkUwgq2lDSAu4zQe4nN5wOTDGMdbtFAbXAfBPkxhFC9wU7DUv0AAh/EKO/EUtwTLMIgRncE77MKTLHn/AsFVvMG2RH4nSw69jSg65RKeYzNmcGU9Ob13cB7PEvksrueR00sHwVlMo4oFHBMsdLpe6YIYDopWrGIZtSTSMYoLRAtOYyTlDwT1//1USdXtEOfaxozgyx+3gmqqfH9C6rhfpKqSYBQvsSdhszi3KhIQn/9d0RSL4tznigiUcSNDTnzq9zL5Sdy25rhxipGvdDCcOriQwX9gdzp/zBTwCYcEv4oKDGn4aUwdp7A94RV8xUUcT9gSrgnmi5LHDlYiOIr31kaxKNpxU8onURO0uxEYWj01NI3ZiwMJ2ZL53sJlwbduyPl7VTzC95x7j9HsljxPYA6NdVgTE8mufQpEkqmUtfEaR4TcrgpF3qr4gHnR75OdtmQ/Ai2c+NeG7CZ+A7FWYpiQvDwyAAAAAElFTkSuQmCC",i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACnElEQVRIiZWV3WrbQBCFvxGNMEb0Gaw30W2TYoJbGlq3uC0YE0ovQp+jlyWUQBI3iegvmFACvdOb2I9QgjFBAU0vdiWv5FVIB4RX6z0zc87OjATHFkn4GHii8D7O8iX/YYskjIBDhR9xll+W+wIwT0JAtwX5BnSBmcKrOMtX93TeBc6AXWAF7AFXvSwnMEd0W5ALIAICYCAwtcD7OD9RGFhsBFwA2wCySMK+3YjUAQqg6Exg1Mtur33O58lWJMhU0YEVA9ASvQQZBsAj0G7ptHzMu/RBvEwWSdgVZArsikUYbImmK+hOAHxQSBWlZOAwCYBd0FoQjyw+S0EOxAI6oJ9A3ronSrJUcskIKIAp6KBMRJyk7PpUkP1elt9UfOZJ2BE4Al64WTlBCuDSvvfVnmk4L0BTRcZxlt+wxtaofwZettBeX6E/+3Ng0nPKu6af+UPHwDHU7sJZm9sStLk+Bca9Ru/UGDhMOli5FAK3AD1Zb8jimrcCeubgBEjdDLzZwFeQic85wAM/xgRXNPI0UI2DQleQVj/epOZ2toiZLW11XloBXALDpv74wKZDORHbRM2L1irzqjUDRTea0RtgnmxFCmcKz+rO1us2U3iq6MUiCR+6+5VEjZHrk6UAZva3bURsyBU4zqvZ4qt/RX8CI+AN8N2R6E65xHyJdKrIwEvcVMwXQSa2fFkkYUfhEPS1IFUgdw3MBBnJIgnPaMyfBuVU0XGc3dbqfJ5sdYAjQVqxCmmg8APzmfON6xSYNJ0DmD2ZrEf9hlwr4FdgP9B7wN+G81P1zJZ6kHwlMAY5dvcFuQaex1k+K6ldAUOBpaAF6Dmw39b+rtmZ/w4zSQuBJTAEfptgjs2TsC+wAxzclbnPTPfrR5A/cZbPyv1/p05HsGuAURUAAAAASUVORK5CYII=",m={description:"Access control of endpoint, SIM, and service profile management",slug:"/portal/user-management"},k="User management",c={unversionedId:"portal/user-management",id:"portal/user-management",title:"User management",description:"Access control of endpoint, SIM, and service profile management",source:"@site/docs/portal/user-management.md",sourceDirName:"portal",slug:"/portal/user-management",permalink:"/portal/user-management",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/portal/user-management.md",tags:[],version:"current",lastUpdatedAt:1688560985,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{description:"Access control of endpoint, SIM, and service profile management",slug:"/portal/user-management"},sidebar:"mainDocsSidebar",previous:{title:"No-code workflow automation",permalink:"/portal/no-code-automation"},next:{title:"Global IoT SIM",permalink:"/services/global-iot-sim"}},g={},p=[{value:"Endpoint management",id:"endpoint-management",level:2},{value:"SIM management",id:"sim-management",level:2},{value:"Service profile",id:"service-profile",level:2},{value:"Tariff profile",id:"tariff-profile",level:2},{value:"User management",id:"user-management-1",level:2},{value:"Alerts",id:"alerts",level:2},{value:"MFA keys",id:"mfa-keys",level:2}],d={toc:p};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"user-management"},"User management"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://portal.emnify.com/"},"emnify Portal")," is a powerful application to control the connectivity of devices of a production system."),(0,n.kt)("p",null,"Employees across your organization may use the Portal, from operations and finance to development and product.\nThat's why emnify offers 3 levels of access (referred to as ",(0,n.kt)("strong",{parentName:"p"},"Roles"),") to use and manage Portal features and functionality:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Admin (has access to all services and user management)"),(0,n.kt)("li",{parentName:"ol"},"Observer (has access to limited services)"),(0,n.kt)("li",{parentName:"ol"},"User (has access to all services)")),(0,n.kt)("p",null,"You can view and edit these roles on the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.emnify.com/organisation-settings/users"},(0,n.kt)("strong",{parentName:"a"},"Employees")," page")," under your ",(0,n.kt)("strong",{parentName:"p"},"Organization settings"),". "),(0,n.kt)("p",null,"The following tables describe the permissions for different roles."),(0,n.kt)("h2",{id:"endpoint-management"},"Endpoint management"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Action"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Admin"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Observer"),(0,n.kt)("th",{parentName:"tr",align:"center"},"User"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve an endpoint by ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Update, Delete an endpoint by ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve the blacklisted Operators for an Endpoint"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Add, Remove Operator from Blacklist of Endpoint by ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"List all Endpoints"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Create new endpoint"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve connectivity information of an Endpoint"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))))),(0,n.kt)("h2",{id:"sim-management"},"SIM management"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Action"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Admin"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Observer"),(0,n.kt)("th",{parentName:"tr",align:"center"},"User"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve SIMs by ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Update, Delete SIMs by ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"List available SIM Statuses"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"List of available SIMs"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))))),(0,n.kt)("h2",{id:"service-profile"},"Service profile"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Action"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Admin"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Observer"),(0,n.kt)("th",{parentName:"tr",align:"center"},"User"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve list of available Countries"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve list of available Currencies"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve single Currency details by ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve List of available Services"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"List available Traffic Limits for a Service by ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve Service Profiles"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Create Service Profiles"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve Service Profiles by ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Update, Delete Service Profiles by ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Add, Delete services from Service Profiles"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Add, Delete Traffic Limit from Service"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve the ESME interface types"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))))),(0,n.kt)("h2",{id:"tariff-profile"},"Tariff profile"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Action"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Admin"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Observer"),(0,n.kt)("th",{parentName:"tr",align:"center"},"User"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"List of available Ratezone Statuses"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"List of available Tariff Statuses"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve Tariff details by ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve Tariffs"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve list of tariff plan statuses"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Create Tariff Profiles"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"List Tariff Profiles"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve Coverage of a Tariff Profile"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve single Country details by ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"List Operators"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve my currently active tariff plan"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))))),(0,n.kt)("h2",{id:"user-management-1"},"User management"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Action"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Admin"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Observer"),(0,n.kt)("th",{parentName:"tr",align:"center"},"User"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Create Support Token to assume permissions of a User by ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Update, Delete Users"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve my user role permissions"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Update User password"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Create, List Users"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Add, Delete Role from a User"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Delete, List trusted devices for a given user"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Create, Retrieve Application Token"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Edit an Application Token"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"}))))),(0,n.kt)("h2",{id:"alerts"},"Alerts"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Action"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Admin"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Observer"),(0,n.kt)("th",{parentName:"tr",align:"center"},"User"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve Organization/Endpoint Alerts"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve events of a User by ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve events of an IMSI/SIM"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))))),(0,n.kt)("h2",{id:"mfa-keys"},"MFA keys"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Action"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Admin"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Observer"),(0,n.kt)("th",{parentName:"tr",align:"center"},"User"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Generate user shared secret key for MFA"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Activate user shared secret key for MFA"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"List available MFA Key Statuses"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Delete shared secret key for MFA of a user by ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:i,alt:"\xd7"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"List of trusted devices for own user"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Delete a trusted device by ID for own user"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"List of available MFA Key Types"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Delete my shared secret for MFA"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"List of trusted devices for own user"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Delete a trusted device for own user"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:l,alt:"\u2713"}))))))}s.isMDXComponent=!0}}]);