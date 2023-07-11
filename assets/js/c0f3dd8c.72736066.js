"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[1629],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>Z,contentTitle:()=>I,default:()=>P,frontMatter:()=>E,metadata:()=>O,toc:()=>C});var n=a(7462),r=a(7294),o=a(3905),i=a(6010),l=a(2466),s=a(6550),p=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=g({queryString:a,groupId:n}),[u,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),d(e)}),[p,d,o]),tabValues:o}}var k=a(2389);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==o&&(c(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},l,{className:(0,i.Z)("tabs__item",b,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=y(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function q(e){const t=(0,k.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}const T="tabItem_Ymn6";function x(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(T,n),hidden:a},t)}const E={displayed_sidebar:"devResourcesSidebar",slug:"/graphql/graphiql-ide"},I="Use the GraphiQL IDE",O={unversionedId:"graphql/graphiql-ide",id:"graphql/graphiql-ide",title:"Use the GraphiQL IDE",description:"So you can experiment with the emnify GraphQL API, we've set up an in-browser GraphiQL IDE.",source:"@site/docs/graphql/graphiql-ide.md",sourceDirName:"graphql",slug:"/graphql/graphiql-ide",permalink:"/graphql/graphiql-ide",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/graphql/graphiql-ide.md",tags:[],version:"current",lastUpdatedAt:1689068344,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{displayed_sidebar:"devResourcesSidebar",slug:"/graphql/graphiql-ide"},sidebar:"devResourcesSidebar",previous:{title:"Preview the GraphQL API",permalink:"/graphql"},next:{title:"emnify SDKs",permalink:"/sdks"}},Z={},C=[{value:"Navigate the interface",id:"navigate-the-interface",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Retrieve your application token",id:"retrieve-your-application-token",level:3},{value:"Add your application token to GraphiQL",id:"add-your-application-token-to-graphiql",level:3},{value:"Execute your first query",id:"execute-your-first-query",level:2},{value:"Write your own query",id:"write-your-own-query",level:2},{value:"Generate code from your query",id:"generate-code-from-your-query",level:2}],L={toc:C};function P(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},L,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-the-graphiql-ide"},"Use the GraphiQL IDE"),(0,o.kt)("p",null,"So you can experiment with the emnify GraphQL API, we've set up an ",(0,o.kt)("a",{parentName:"p",href:"https://graphql-playground.emnify.net/"},"in-browser GraphiQL IDE"),". "),(0,o.kt)("p",null,"Similar to OpenAPI in the REST world, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL"),' (pronounced "graphical") helps you accurately structure and validate queries, then run them directly against the server endpoint.\nIt\'s equipped with tools to help you try out our GraphQL API.\nNotable features include autocompleting, syntax highlighting, interactive documentation, and schema explorers.'),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you're new to GraphQL, we'd recommend visiting the ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/"},"official GraphQL documentation")," to familiarize yourself with how the query language is structured.")),(0,o.kt)("h2",{id:"navigate-the-interface"},"Navigate the interface"),(0,o.kt)("p",null,"The UI is divided into three parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sidebar")," where you can open plugin panes and change settings"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Left panel")," where you write your queries"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Right panel")," where the results of your queries will be displayed")),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/25433336/225385087-37c5fa5c-4b23-4fca-a1b5-675974392473.png",alt:""}),(0,o.kt)("p",null,"At the top of the sidebar, there are buttons for the ",(0,o.kt)("a",{parentName:"p",href:"#documentation-explorer"},"documentation explorer"),", history, and GraphiQL explorer.\nUnderneath, the sidebar shows buttons that allow you to re-fetch the GraphQL schema, see the keyboard shortcuts, and change settings."),(0,o.kt)("p",null,"The bottom of the left panel has two sections: ",(0,o.kt)("strong",{parentName:"p"},"Variables")," and ",(0,o.kt)("strong",{parentName:"p"},"Headers"),".\nBy default, you'll see a placeholder for the ",(0,o.kt)("a",{parentName:"p",href:"#authentication"},(0,o.kt)("strong",{parentName:"a"},"Authorization")," header"),"."),(0,o.kt)("p",null,"When you type queries into this side of the screen, the IDE provides autocompletes based on the current GraphQL type schema and live syntax and validation error highlighting."),(0,o.kt)("p",null,"An example GraphQL query might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  field(arg: "value") {\n    subField\n  }\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"GraphQL queries typically start with a ",(0,o.kt)("inlineCode",{parentName:"p"},"{")," character.\nLines that start with a ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," are ignored.")),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"To make calls from this IDE, you need to provide an ",(0,o.kt)("a",{parentName:"p",href:"#retrieving-your-application-token"},"application token")," in the ",(0,o.kt)("a",{parentName:"p",href:"#adding-your-application-token-to-graphiql"},(0,o.kt)("strong",{parentName:"a"},"Headers")," section"),"."),(0,o.kt)("h3",{id:"retrieve-your-application-token"},"Retrieve your application token"),(0,o.kt)("p",null,"You can generate an\xa0application token\xa0in the emnify Portal:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://portal.emnify.com/sign"},"Log in to your emnify account"),"."),(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("a",{parentName:"li",href:"https://portal.emnify.com/integrations#application-tokens"},(0,o.kt)("strong",{parentName:"a"},"Application Tokens"))," section of the ",(0,o.kt)("a",{parentName:"li",href:"https://portal.emnify.com/integrations"},(0,o.kt)("strong",{parentName:"a"},"Integrations"))," page.")),(0,o.kt)("img",{src:a(8290).Z,alt:""}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Add Token"))),(0,o.kt)("img",{src:a(1536).Z,alt:""}),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Fill out the token's ",(0,o.kt)("strong",{parentName:"li"},"Description")," and ",(0,o.kt)("strong",{parentName:"li"},"Expiry date (UTC)"),", and indicate whether you want to ",(0,o.kt)("strong",{parentName:"li"},"Add IP restriction"),".\nClick ",(0,o.kt)("strong",{parentName:"li"},"Create application token")," to confirm your choices.")),(0,o.kt)("p",null,"In the following example, we are creating a new application token with the description ",(0,o.kt)("strong",{parentName:"p"},"Testing the GraphQL API"),", expiring ",(0,o.kt)("strong",{parentName:"p"},"June 30, 2023"),", with no additional IP restrictions."),(0,o.kt)("img",{src:a(4420).Z,alt:""}),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Once complete, you'll see the ",(0,o.kt)("strong",{parentName:"li"},"Token created")," view.\nClick ",(0,o.kt)("strong",{parentName:"li"},"Copy token")," to copy the value to your clipboard and store it somewhere secure.\nWhen you're ready, click ",(0,o.kt)("strong",{parentName:"li"},"Close"),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"After closing, you won't be able to retrieve this token value again.\nWe recommend storing it in a safe place (e.g., a password manager).")),(0,o.kt)("img",{src:a(1522).Z,alt:""}),(0,o.kt)("p",null,"Your new token should now be available at the bottom of the ",(0,o.kt)("strong",{parentName:"p"},"Application Tokens")," list."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Alternatively, you can retrieve your application token from the ",(0,o.kt)("a",{parentName:"p",href:"/rest/authentication#authenticate-with-an-application-token"},"emnify REST API"),".")),(0,o.kt)("h3",{id:"add-your-application-token-to-graphiql"},"Add your application token to GraphiQL"),(0,o.kt)("p",null,"Once you have an ",(0,o.kt)("a",{parentName:"p",href:"#retrieving-your-application-token"},"application token created and safely stored"),", you need to pass that token to the GraphiQL IDE."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("a",{parentName:"li",href:"https://graphql-playground.emnify.net/"},"emnify GraphiQL IDE")),(0,o.kt)("li",{parentName:"ol"},"Locate the ",(0,o.kt)("strong",{parentName:"li"},"Headers")," section ")),(0,o.kt)("img",{src:a(4325).Z,alt:"",style:{width:800}}),(0,o.kt)("p",null,"By default, this section will have the following placeholder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "Authorization": "Bearer <APP_TOKEN>"\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<APP_TOKEN>")," with your application token value")),(0,o.kt)("p",null,"To test that you're authorized, click the ",(0,o.kt)("strong",{parentName:"p"},"Execute query")," button (\u25b6\ufe0f) and check your result."),(0,o.kt)("h2",{id:"execute-your-first-query"},"Execute your first query"),(0,o.kt)("p",null,"When you first visit our GraphiQL IDE, you'll see a pre-populated example query in the left panel."),(0,o.kt)("img",{src:a(3039).Z,alt:"",style:{width:800}}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We'll use GraphiQL's interactive documentation throughout this example.\nTo follow along, click the ",(0,o.kt)("strong",{parentName:"p"},"Show Documentation Explorer")," button in the sidebar."),(0,o.kt)("img",{src:a(9741).Z,alt:"",style:{width:350}}),(0,o.kt)("p",{parentName:"admonition"},"Once the ",(0,o.kt)("strong",{parentName:"p"},"Docs")," are visible, choose ",(0,o.kt)("inlineCode",{parentName:"p"},"Query"),", then find and select ",(0,o.kt)("inlineCode",{parentName:"p"},"myUser"),".")),(0,o.kt)("p",null,"Let's take a closer look:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  myUser {\n    organisation {\n      name\n      id\n    }\n  }\n}\n")),(0,o.kt)("p",null,"What's happening in this example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"myUser")," is a ",(0,o.kt)("a",{parentName:"li",href:"https://graphql.org/learn/queries/"},"query")," that can return your user and organization details, including ",(0,o.kt)("a",{parentName:"li",href:"/glossary#endpoint-status"},"endpoint status")," and active tariff plan.")),(0,o.kt)("img",{src:a(9517).Z,alt:"",style:{width:700}}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In GraphQL, the ",(0,o.kt)("inlineCode",{parentName:"p"},"!")," means that ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#variable-definitions"},"variable definition")," is required.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Within ",(0,o.kt)("inlineCode",{parentName:"li"},"myUser"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"User")," is listed as a required ",(0,o.kt)("a",{parentName:"li",href:"https://graphql.org/learn/schema/#object-types-and-fields"},"object type")," and indicates which ",(0,o.kt)("a",{parentName:"li",href:"https://graphql.org/learn/queries/#fields"},"fields")," we can use in this query.\nBecause ",(0,o.kt)("inlineCode",{parentName:"li"},"User")," is the only type available, we don't need to type it out explicitly.")),(0,o.kt)("img",{src:a(3602).Z,alt:"",style:{width:700}}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This example uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"organisation")," field, which requires the ",(0,o.kt)("inlineCode",{parentName:"li"},"Organisation")," object type.\nWe want to receive the ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," fields from that object type.")),(0,o.kt)("img",{src:a(843).Z,alt:"",style:{width:700}}),(0,o.kt)("p",null,"Finally, when we execute the query, it returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," object with our requested information."),(0,o.kt)("img",{src:a(8899).Z,alt:""}),(0,o.kt)("h2",{id:"write-your-own-query"},"Write your own query"),(0,o.kt)("p",null,"Remove any content in the left panel and begin typing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n\n}\n")),(0,o.kt)("p",null,"Inside the curly braces, you can start typing or use the keyboard shortcuts to open the autocomplete window."),(0,o.kt)("p",null,'In the following example, we started typing "end", and the IDE suggested ',(0,o.kt)("inlineCode",{parentName:"p"},"endpoint"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoints"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"endpointsQuery"),"."),(0,o.kt)("img",{src:a(9712).Z,alt:"",style:{width:450}}),(0,o.kt)("p",null,"If you need help with what to write, click the ",(0,o.kt)("strong",{parentName:"p"},"Show GraphiQL Explorer")," button on the sidebar."),(0,o.kt)("img",{src:a(7422).Z,alt:"",style:{width:450}}),(0,o.kt)("p",null,"This will display an interactive overview of the current GraphQL schema.\nOpen and select your desired fields, and the query will build and format itself automatically."),(0,o.kt)("img",{src:a(6792).Z,alt:"",style:{width:800}}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To see the queries you've executed during a session, click the ",(0,o.kt)("strong",{parentName:"p"},"Show history")," button on the sidebar."),(0,o.kt)("img",{src:a(3259).Z,alt:"",style:{width:350}})),(0,o.kt)("h2",{id:"generate-code-from-your-query"},"Generate code from your query"),(0,o.kt)("p",null,"On the left panel are buttons allowing you to generate a cURL query, Node.js code, or Python code from your GraphQL query.\nClicking these buttons will copy this code to your clipboard."),(0,o.kt)("img",{src:a(5824).Z,alt:"",style:{width:450}}),(0,o.kt)("p",null,"The following examples show code generated from the default query:"),(0,o.kt)(q,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Node.js",value:"node"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,o.kt)(x,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST \\\n   -H "Authorization: Bearer <APP_TOKEN>" \\\n   -H "Content-Type: application/json" \\\n    https://cdn.emnify.net/graphql \\\n    --data-raw \'{"query":"{\\n  myUser {\\n    organisation {\\n      name\\n      id\\n    }\\n  }\\n}"}\'\n'))),(0,o.kt)(x,{value:"node",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var axios = require('axios');\nvar data = JSON.stringify({\n  query: `{\n  myUser {\n    organisation {\n      name\n      id\n    }\n  }\n}`,\n  variables: {}\n});\n\nvar config = {\n  method: 'post',\n  url: 'https://cdn.emnify.net/graphql',\n  headers: { \n    'Authorization': 'Bearer <APP_TOKEN>', \n    'Content-Type': 'application/json'\n  },\n  data : data\n};\n\naxios(config)\n.then(function (response) {\n  console.log(JSON.stringify(response.data));\n})\n.catch(function (error) {\n  console.log(error);\n});\n"))),(0,o.kt)(x,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nimport json\n\nurl = "https://cdn.emnify.net/graphql"\n\npayload = {"query": """{\n  myUser {\n    organisation {\n      name\n      id\n    }\n  }\n}"""}\nheaders = {\n  \'Authorization\': \'Bearer <APP_TOKEN>\',\n  \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.request("POST", url, headers=headers, data=json.dumps(payload))\n\nprint(response.text)\n')))))}P.isMDXComponent=!0},5824:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphiql-default-generate-code-buttons-0d11bd4793578b4f1216bf298148b51c.png"},4325:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphiql-default-headers-9acc94c64a44ab652c372bbb3b9b6ea8.png"},8899:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphiql-default-query-response-2bb3a0cdaec903deec0cfb9985e87f35.png"},3039:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphiql-default-query-bf84faa08f3a94f4085f3ca4161ebc48.png"},843:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphiql-docs-query-myuser-user-organisation-7e9aa4ad267880a3cc785466aa74ddd3.png"},3602:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphiql-docs-query-myuser-user-28951cdd6913c3ef8a934685d3a776d3.png"},9517:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphiql-docs-query-myuser-70119b8f6f4b4eec1ce2505412173d26.png"},6792:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphiql-graphiql-explorer-endpoints-54f8e35c461e5d9d0c253acf12cccbae.png"},9712:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphiql-query-autocomplete-d82d2269c00e78f23f392272eabc9219.png"},9741:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphiql-sidebar-show-documentation-explorer-button-b57608087cd3526140ee870ad0507f3e.png"},7422:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphiql-sidebar-show-graphiql-explorer-button-739297257dc8b592553cc16d35dc6df2.png"},3259:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphiql-sidebar-show-history-button-c7409b03c5d143bbc40150dc407e9a0d.png"},1536:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-application-tokens-add-token-button-d2ae66743a644c90d273a320ed47b1a2.png"},4420:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-application-tokens-add-token-form-ec1f0b92a44336c9b27e0a88ec7711d0.png"},1522:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-application-tokens-add-token-token-created-5ba34374b5b02048a24afd78c137e69a.png"},8290:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal-integrations-application-tokens-7ec73190bad39c3e71b694e018aa8a47.png"}}]);