"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>L,contentTitle:()=>I,default:()=>A,frontMatter:()=>x,metadata:()=>O,toc:()=>C});var a=n(7462),r=n(7294),o=n(3905),i=n(6010),l=n(2466),s=n(6550),u=n(1980),p=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=y({queryString:n,groupId:a}),[p,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),d(e)}),[u,d,o]),tabValues:o}}var f=n(2389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},l,{className:(0,i.Z)("tabs__item",b,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function q(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(q,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}const T="tabItem_Ymn6";function E(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(T,a),hidden:n},t)}const x={last_update:{date:"08-30-2023"},slug:"/graphql/graphiql-ide"},I="Use the GraphiQL IDE",O={unversionedId:"graphql/graphiql-ide",id:"graphql/graphiql-ide",title:"Use the GraphiQL IDE",description:"There's an in-browser emnify GraphiQL IDE where you can experiment with the GraphQL API.",source:"@site/docs/graphql/graphiql-ide.mdx",sourceDirName:"graphql",slug:"/graphql/graphiql-ide",permalink:"/pr-preview/pr-228/graphql/graphiql-ide",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/graphql/graphiql-ide.mdx",tags:[],version:"current",lastUpdatedAt:1693353600,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{last_update:{date:"08-30-2023"},slug:"/graphql/graphiql-ide"},sidebar:"mainDocsSidebar",previous:{title:"Preview the GraphQL API",permalink:"/pr-preview/pr-228/graphql"},next:{title:"emnify SDKs",permalink:"/pr-preview/pr-228/sdks"}},L={},C=[{value:"Navigate the interface",id:"navigate-the-interface",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Retrieve your authentication token",id:"retrieve-your-authentication-token",level:3},{value:"Add your authentication token to GraphiQL",id:"add-your-authentication-token-to-graphiql",level:3},{value:"Execute your first query",id:"execute-your-first-query",level:2},{value:"Write your own query",id:"write-your-own-query",level:2},{value:"Generate code from your query",id:"generate-code-from-your-query",level:2}],j={toc:C};function A(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},j,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-the-graphiql-ide"},"Use the GraphiQL IDE"),(0,o.kt)("p",null,"There's an in-browser ",(0,o.kt)("a",{parentName:"p",href:"https://graphql-playground.emnify.net/"},"emnify GraphiQL IDE")," where you can experiment with the GraphQL API."),(0,o.kt)("p",null,"Similar to OpenAPI in the REST world, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL"),' (pronounced "graphical") helps you accurately structure and validate queries, then run them directly against the server endpoint.\nIt\'s equipped with tools to help you try out the GraphQL API.\nNotable features include autocompleting, syntax highlighting, interactive documentation, and schema explorers.'),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you're new to GraphQL, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/"},"official GraphQL documentation")," to familiarize yourself with how the query language is structured.")),(0,o.kt)("h2",{id:"navigate-the-interface"},"Navigate the interface"),(0,o.kt)("p",null,"The UI is divided into three parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sidebar")," where you can open plugin panes and change settings"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Left panel")," where you write your queries"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Right panel")," where the results of your queries are displayed")),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/25433336/225385087-37c5fa5c-4b23-4fca-a1b5-675974392473.png",alt:""}),(0,o.kt)("p",null,"At the top of the sidebar, there are buttons for the documentation explorer, history, and GraphiQL explorer.\nUnderneath, the sidebar shows buttons that allow you to re-fetch the GraphQL schema, see the keyboard shortcuts, and change settings."),(0,o.kt)("p",null,"The bottom of the left panel has two sections, ",(0,o.kt)("strong",{parentName:"p"},"Variables")," and ",(0,o.kt)("strong",{parentName:"p"},"Headers"),".\nBy default, there's a placeholder for the ",(0,o.kt)("strong",{parentName:"p"},"Authorization")," header."),(0,o.kt)("p",null,"When you type queries into this side of the screen, the IDE provides autocomplete based on the current GraphQL type schema and live syntax and validation error highlighting."),(0,o.kt)("p",null,"An example GraphQL query might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  field(arg: "value") {\n    subField\n  }\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"GraphQL queries typically start with a ",(0,o.kt)("inlineCode",{parentName:"p"},"{")," character.\nLines that start with a ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," are ignored.")),(0,o.kt)("h2",{id:"authorization"},"Authorization"),(0,o.kt)("p",null,"To make calls from this IDE, you need to provide an authentication token in the ",(0,o.kt)("strong",{parentName:"p"},"Headers")," section."),(0,o.kt)("h3",{id:"retrieve-your-authentication-token"},"Retrieve your authentication token"),(0,o.kt)("p",null,"Use the emnify REST API to retrieve your authentication token.\nFor step-by-step instructions, see ",(0,o.kt)("a",{parentName:"p",href:"https://cdn.emnify.net/api/doc/getting-started.html"},"Getting started")," in the emnify System Documentation."),(0,o.kt)("h3",{id:"add-your-authentication-token-to-graphiql"},"Add your authentication token to GraphiQL"),(0,o.kt)("p",null,"Once you have your authentication token, you need to pass that token to the GraphiQL IDE."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("a",{parentName:"li",href:"https://graphql-playground.emnify.net/"},"emnify GraphiQL IDE")),(0,o.kt)("li",{parentName:"ol"},"Locate the ",(0,o.kt)("strong",{parentName:"li"},"Headers")," section",(0,o.kt)("br",{parentName:"li"}),"By default, this section has the following placeholder:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "Authorization": "Bearer AUTH_TOKEN"\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Replace ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"AUTH_TOKEN"))," with your authentication token value")),(0,o.kt)("p",null,"To test that you're authorized, click the ",(0,o.kt)("strong",{parentName:"p"},"Execute query")," button (\u25b6\ufe0f) and check your result."),(0,o.kt)("h2",{id:"execute-your-first-query"},"Execute your first query"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"GraphiQL's interactive documentation is used throughout this example.\nTo follow along, click the ",(0,o.kt)("strong",{parentName:"p"},"Show Documentation Explorer")," button in the sidebar.\nOnce the ",(0,o.kt)("strong",{parentName:"p"},"Docs")," are visible, choose ",(0,o.kt)("inlineCode",{parentName:"p"},"Query"),", then select ",(0,o.kt)("inlineCode",{parentName:"p"},"myUser"),"."),(0,o.kt)("img",{src:n(9741).Z,alt:"",style:{width:350}})),(0,o.kt)("p",null,"When you first visit the GraphiQL IDE, there's a pre-populated example query in the left panel:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  myUser {\n    organisation {\n      name\n      id\n    }\n  }\n}\n")),(0,o.kt)("p",null,"In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"myUser")," is a ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/"},"query")," that can return your user and organization details, including endpoint (device) status and active tariff plan (data plan)."),(0,o.kt)("img",{src:n(9517).Z,alt:"",style:{width:700}}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In GraphQL, the ",(0,o.kt)("inlineCode",{parentName:"p"},"!")," means that ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#variable-definitions"},"variable definition")," is required.")),(0,o.kt)("p",null,"Within ",(0,o.kt)("inlineCode",{parentName:"p"},"myUser"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," is listed as a required ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#object-types-and-fields"},"object type")," and indicates which ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#fields"},"fields")," you can use in this query.\nBecause ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," is the only type available, you don't need to type it out explicitly."),(0,o.kt)("img",{src:n(3602).Z,alt:"",style:{width:700}}),(0,o.kt)("p",null,"This example uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"organisation")," field, which requires the ",(0,o.kt)("inlineCode",{parentName:"p"},"Organisation")," object type.\nYou want to receive the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," fields from that object type."),(0,o.kt)("img",{src:n(843).Z,alt:"",style:{width:700}}),(0,o.kt)("p",null,"Finally, when you execute the query, it returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," object with your requested information."),(0,o.kt)("img",{src:n(8899).Z,alt:""}),(0,o.kt)("h2",{id:"write-your-own-query"},"Write your own query"),(0,o.kt)("p",null,"Remove any content in the left panel and begin typing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n\n}\n")),(0,o.kt)("p",null,"Inside the curly braces, you can start typing or use the keyboard shortcuts to open the autocomplete window."),(0,o.kt)("p",null,"In the following example, the IDE suggests ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoint"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoints"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"endpointsQuery"),' once you\'ve started typing "end":'),(0,o.kt)("img",{src:n(9712).Z,alt:"",style:{width:450}}),(0,o.kt)("p",null,"If you need help with what to write, click the ",(0,o.kt)("strong",{parentName:"p"},"Show GraphiQL Explorer")," button on the sidebar."),(0,o.kt)("img",{src:n(7422).Z,alt:"",style:{width:450}}),(0,o.kt)("p",null,"This displays an interactive overview of the current GraphQL schema.\nOpen and select your desired fields, and the query builds and formats itself automatically."),(0,o.kt)("img",{src:n(6792).Z,alt:"",style:{width:800}}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To see the queries you've executed during a session, click the ",(0,o.kt)("strong",{parentName:"p"},"Show history")," button on the sidebar."),(0,o.kt)("img",{src:n(3259).Z,alt:"",style:{width:350}})),(0,o.kt)("h2",{id:"generate-code-from-your-query"},"Generate code from your query"),(0,o.kt)("p",null,"On the left panel are buttons allowing you to generate a cURL query, Node.js code, or Python code from your GraphQL query.\nClick these buttons to copy this code to your clipboard."),(0,o.kt)("img",{src:n(5824).Z,alt:"",style:{width:450}}),(0,o.kt)("p",null,"The following examples show code generated from the default query:"),(0,o.kt)(N,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Node.js",value:"node"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,o.kt)(E,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST \\\n   -H "Authorization: Bearer AUTH_TOKEN" \\\n   -H "Content-Type: application/json" \\\n    https://cdn.emnify.net/graphql \\\n    --data-raw \'{"query":"{\\n  myUser {\\n    organisation {\\n      name\\n      id\\n    }\\n  }\\n}"}\'\n'))),(0,o.kt)(E,{value:"node",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var axios = require('axios');\nvar data = JSON.stringify({\n  query: `{\n  myUser {\n    organisation {\n      name\n      id\n    }\n  }\n}`,\n  variables: {}\n});\n\nvar config = {\n  method: 'post',\n  url: 'https://cdn.emnify.net/graphql',\n  headers: { \n    'Authorization': 'Bearer AUTH_TOKEN', \n    'Content-Type': 'application/json'\n  },\n  data : data\n};\n\naxios(config)\n.then(function (response) {\n  console.log(JSON.stringify(response.data));\n})\n.catch(function (error) {\n  console.log(error);\n});\n"))),(0,o.kt)(E,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nimport json\n\nurl = "https://cdn.emnify.net/graphql"\n\npayload = {"query": """{\n  myUser {\n    organisation {\n      name\n      id\n    }\n  }\n}"""}\nheaders = {\n  \'Authorization\': \'Bearer AUTH_TOKEN\',\n  \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.request("POST", url, headers=headers, data=json.dumps(payload))\n\nprint(response.text)\n')))))}A.isMDXComponent=!0},5824:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graphiql-default-generate-code-buttons-0d11bd4793578b4f1216bf298148b51c.png"},8899:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graphiql-default-query-response-2bb3a0cdaec903deec0cfb9985e87f35.png"},843:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graphiql-docs-query-myuser-user-organisation-7e9aa4ad267880a3cc785466aa74ddd3.png"},3602:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graphiql-docs-query-myuser-user-28951cdd6913c3ef8a934685d3a776d3.png"},9517:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graphiql-docs-query-myuser-70119b8f6f4b4eec1ce2505412173d26.png"},6792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graphiql-graphiql-explorer-endpoints-54f8e35c461e5d9d0c253acf12cccbae.png"},9712:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graphiql-query-autocomplete-d82d2269c00e78f23f392272eabc9219.png"},9741:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graphiql-sidebar-show-documentation-explorer-button-b57608087cd3526140ee870ad0507f3e.png"},7422:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graphiql-sidebar-show-graphiql-explorer-button-739297257dc8b592553cc16d35dc6df2.png"},3259:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graphiql-sidebar-show-history-button-c7409b03c5d143bbc40150dc407e9a0d.png"}}]);