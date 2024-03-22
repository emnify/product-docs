"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[3580],{582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(5893),a=t(1151),i=t(4866),s=t(5162);const o={last_update:{date:"08-30-2023"},slug:"/graphql/graphiql-ide"},l="Use the GraphiQL IDE",c={id:"graphql/graphiql-ide",title:"Use the GraphiQL IDE",description:"There's an in-browser emnify GraphiQL IDE where you can experiment with the GraphQL API.",source:"@site/docs/graphql/graphiql-ide.mdx",sourceDirName:"graphql",slug:"/graphql/graphiql-ide",permalink:"/pr-preview/pr-304/graphql/graphiql-ide",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1693353600,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{last_update:{date:"08-30-2023"},slug:"/graphql/graphiql-ide"},sidebar:"mainDocsSidebar",previous:{title:"Preview the GraphQL API",permalink:"/pr-preview/pr-304/graphql"},next:{title:"emnify SDKs",permalink:"/pr-preview/pr-304/sdks"}},h={},d=[{value:"Navigate the interface",id:"navigate-the-interface",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Retrieve your authentication token",id:"retrieve-your-authentication-token",level:3},{value:"Add your authentication token to GraphiQL",id:"add-your-authentication-token-to-graphiql",level:3},{value:"Execute your first query",id:"execute-your-first-query",level:2},{value:"Write your own query",id:"write-your-own-query",level:2},{value:"Generate code from your query",id:"generate-code-from-your-query",level:2}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"use-the-graphiql-ide",children:"Use the GraphiQL IDE"}),"\n","\n","\n",(0,r.jsxs)(n.p,{children:["There's an in-browser ",(0,r.jsx)(n.a,{href:"https://graphql-playground.emnify.net/",children:"emnify GraphiQL IDE"})," where you can experiment with the GraphQL API."]}),"\n",(0,r.jsxs)(n.p,{children:["Similar to OpenAPI in the REST world, ",(0,r.jsx)(n.a,{href:"https://github.com/graphql/graphiql",children:"GraphiQL"}),' (pronounced "graphical") helps you accurately structure and validate queries, then run them directly against the server endpoint.\nIt\'s equipped with tools to help you try out the GraphQL API.\nNotable features include autocompleting, syntax highlighting, interactive documentation, and schema explorers.']}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you're new to GraphQL, visit the ",(0,r.jsx)(n.a,{href:"https://graphql.org/learn/",children:"official GraphQL documentation"})," to familiarize yourself with how the query language is structured."]})}),"\n",(0,r.jsx)(n.h2,{id:"navigate-the-interface",children:"Navigate the interface"}),"\n",(0,r.jsx)(n.p,{children:"The UI is divided into three parts:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Sidebar"})," where you can open plugin panes and change settings"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Left panel"})," where you write your queries"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Right panel"})," where the results of your queries are displayed"]}),"\n"]}),"\n",(0,r.jsx)("img",{src:"https://user-images.githubusercontent.com/25433336/225385087-37c5fa5c-4b23-4fca-a1b5-675974392473.png",alt:""}),"\n",(0,r.jsx)(n.p,{children:"At the top of the sidebar, there are buttons for the documentation explorer, history, and GraphiQL explorer.\nUnderneath, the sidebar shows buttons that allow you to re-fetch the GraphQL schema, see the keyboard shortcuts, and change settings."}),"\n",(0,r.jsxs)(n.p,{children:["The bottom of the left panel has two sections, ",(0,r.jsx)(n.strong,{children:"Variables"})," and ",(0,r.jsx)(n.strong,{children:"Headers"}),".\nBy default, there's a placeholder for the ",(0,r.jsx)(n.strong,{children:"Authorization"})," header."]}),"\n",(0,r.jsx)(n.p,{children:"When you type queries into this side of the screen, the IDE provides autocomplete based on the current GraphQL type schema and live syntax and validation error highlighting."}),"\n",(0,r.jsx)(n.p,{children:"An example GraphQL query might look like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:'{\n  field(arg: "value") {\n    subField\n  }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["GraphQL queries typically start with a ",(0,r.jsx)(n.code,{children:"{"})," character.\nLines that start with a ",(0,r.jsx)(n.code,{children:"#"})," are ignored."]})}),"\n",(0,r.jsx)(n.h2,{id:"authorization",children:"Authorization"}),"\n",(0,r.jsxs)(n.p,{children:["To make calls from this IDE, you need to provide an authentication token in the ",(0,r.jsx)(n.strong,{children:"Headers"})," section."]}),"\n",(0,r.jsx)(n.h3,{id:"retrieve-your-authentication-token",children:"Retrieve your authentication token"}),"\n",(0,r.jsxs)(n.p,{children:["Use the emnify REST API to retrieve your authentication token.\nFor step-by-step instructions, see ",(0,r.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/getting-started.html",children:"Getting started"})," in the emnify System Documentation."]}),"\n",(0,r.jsx)(n.h3,{id:"add-your-authentication-token-to-graphiql",children:"Add your authentication token to GraphiQL"}),"\n",(0,r.jsx)(n.p,{children:"Once you have your authentication token, you need to pass that token to the GraphiQL IDE."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Navigate to the ",(0,r.jsx)(n.a,{href:"https://graphql-playground.emnify.net/",children:"emnify GraphiQL IDE"})]}),"\n",(0,r.jsxs)(n.li,{children:["Locate the ",(0,r.jsx)(n.strong,{children:"Headers"})," section",(0,r.jsx)(n.br,{}),"\n","By default, this section has the following placeholder:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:'{\n  "Authorization": "Bearer AUTH_TOKEN"\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Replace ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"AUTH_TOKEN"})})," with your authentication token value"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To test that you're authorized, click the ",(0,r.jsx)(n.strong,{children:"Execute query"})," button (\u25b6\ufe0f) and check your result."]}),"\n",(0,r.jsx)(n.h2,{id:"execute-your-first-query",children:"Execute your first query"}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["GraphiQL's interactive documentation is used throughout this example.\nTo follow along, click the ",(0,r.jsx)(n.strong,{children:"Show Documentation Explorer"})," button in the sidebar.\nOnce the ",(0,r.jsx)(n.strong,{children:"Docs"})," are visible, choose ",(0,r.jsx)(n.code,{children:"Query"}),", then select ",(0,r.jsx)(n.code,{children:"myUser"}),"."]}),(0,r.jsx)("img",{src:t(9741).Z,alt:"",style:{width:350}})]}),"\n",(0,r.jsx)(n.p,{children:"When you first visit the GraphiQL IDE, there's a pre-populated example query in the left panel:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"{\n  myUser {\n    organisation {\n      name\n      id\n    }\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, ",(0,r.jsx)(n.code,{children:"myUser"})," is a ",(0,r.jsx)(n.a,{href:"https://graphql.org/learn/queries/",children:"query"})," that can return your user and organization details, including endpoint (device) status and active tariff plan (data plan)."]}),"\n",(0,r.jsx)("img",{src:t(9517).Z,alt:"",style:{width:700}}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["In GraphQL, the ",(0,r.jsx)(n.code,{children:"!"})," means that ",(0,r.jsx)(n.a,{href:"https://graphql.org/learn/queries/#variable-definitions",children:"variable definition"})," is required."]})}),"\n",(0,r.jsxs)(n.p,{children:["Within ",(0,r.jsx)(n.code,{children:"myUser"}),", ",(0,r.jsx)(n.code,{children:"User"})," is listed as a required ",(0,r.jsx)(n.a,{href:"https://graphql.org/learn/schema/#object-types-and-fields",children:"object type"})," and indicates which ",(0,r.jsx)(n.a,{href:"https://graphql.org/learn/queries/#fields",children:"fields"})," you can use in this query.\nBecause ",(0,r.jsx)(n.code,{children:"User"})," is the only type available, you don't need to type it out explicitly."]}),"\n",(0,r.jsx)("img",{src:t(3602).Z,alt:"",style:{width:700}}),"\n",(0,r.jsxs)(n.p,{children:["This example uses the ",(0,r.jsx)(n.code,{children:"organisation"})," field, which requires the ",(0,r.jsx)(n.code,{children:"Organisation"})," object type.\nYou want to receive the ",(0,r.jsx)(n.code,{children:"name"})," and ",(0,r.jsx)(n.code,{children:"id"})," fields from that object type."]}),"\n",(0,r.jsx)("img",{src:t(843).Z,alt:"",style:{width:700}}),"\n",(0,r.jsxs)(n.p,{children:["Finally, when you execute the query, it returns a ",(0,r.jsx)(n.code,{children:"data"})," object with your requested information."]}),"\n",(0,r.jsx)("img",{src:t(8899).Z,alt:""}),"\n",(0,r.jsx)(n.h2,{id:"write-your-own-query",children:"Write your own query"}),"\n",(0,r.jsx)(n.p,{children:"Remove any content in the left panel and begin typing:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"{\n\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Inside the curly braces, you can start typing or use the keyboard shortcuts to open the autocomplete window."}),"\n",(0,r.jsxs)(n.p,{children:["In the following example, the IDE suggests ",(0,r.jsx)(n.code,{children:"endpoint"}),", ",(0,r.jsx)(n.code,{children:"endpoints"}),", and ",(0,r.jsx)(n.code,{children:"endpointsQuery"}),' once you\'ve started typing "end":']}),"\n",(0,r.jsx)("img",{src:t(9712).Z,alt:"",style:{width:450}}),"\n",(0,r.jsxs)(n.p,{children:["If you need help with what to write, click the ",(0,r.jsx)(n.strong,{children:"Show GraphiQL Explorer"})," button on the sidebar."]}),"\n",(0,r.jsx)("img",{src:t(7422).Z,alt:"",style:{width:450}}),"\n",(0,r.jsx)(n.p,{children:"This displays an interactive overview of the current GraphQL schema.\nOpen and select your desired fields, and the query builds and formats itself automatically."}),"\n",(0,r.jsx)("img",{src:t(6792).Z,alt:"",style:{width:800}}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["To see the queries you've executed during a session, click the ",(0,r.jsx)(n.strong,{children:"Show history"})," button on the sidebar."]}),(0,r.jsx)("img",{src:t(3259).Z,alt:"",style:{width:350}})]}),"\n",(0,r.jsx)(n.h2,{id:"generate-code-from-your-query",children:"Generate code from your query"}),"\n",(0,r.jsx)(n.p,{children:"On the left panel are buttons allowing you to generate a cURL query, Node.js code, or Python code from your GraphQL query.\nClick these buttons to copy this code to your clipboard."}),"\n",(0,r.jsx)("img",{src:t(5824).Z,alt:"",style:{width:450}}),"\n",(0,r.jsx)(n.p,{children:"The following examples show code generated from the default query:"}),"\n",(0,r.jsxs)(i.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Node.js",value:"node"},{label:"Python",value:"python"}],children:[(0,r.jsx)(s.Z,{value:"curl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST \\\n   -H "Authorization: Bearer AUTH_TOKEN" \\\n   -H "Content-Type: application/json" \\\n    https://cdn.emnify.net/graphql \\\n    --data-raw \'{"query":"{\\n  myUser {\\n    organisation {\\n      name\\n      id\\n    }\\n  }\\n}"}\'\n'})})}),(0,r.jsx)(s.Z,{value:"node",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"var axios = require('axios');\nvar data = JSON.stringify({\n  query: `{\n  myUser {\n    organisation {\n      name\n      id\n    }\n  }\n}`,\n  variables: {}\n});\n\nvar config = {\n  method: 'post',\n  url: 'https://cdn.emnify.net/graphql',\n  headers: {\n    'Authorization': 'Bearer AUTH_TOKEN',\n    'Content-Type': 'application/json'\n  },\n  data : data\n};\n\naxios(config)\n.then(function (response) {\n  console.log(JSON.stringify(response.data));\n})\n.catch(function (error) {\n  console.log(error);\n});\n"})})}),(0,r.jsx)(s.Z,{value:"python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests\nimport json\n\nurl = "https://cdn.emnify.net/graphql"\n\npayload = {"query": """{\n  myUser {\n    organisation {\n      name\n      id\n    }\n  }\n}"""}\nheaders = {\n  \'Authorization\': \'Bearer AUTH_TOKEN\',\n  \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.request("POST", url, headers=headers, data=json.dumps(payload))\n\nprint(response.text)\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var r=t(6905);const a={tabItem:"tabItem_Ymn6"};var i=t(5893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>q});var r=t(7294),a=t(6905),i=t(2466),s=t(6550),o=t(469),l=t(1980),c=t(7392),h=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=u(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=g({queryString:t,groupId:a}),[y,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,h.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),f=(()=>{const e=c??y;return p({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),h=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:h,...i,className:(0,a.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=y(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(b,{...e,...n})]})}function q(e){const n=(0,m.Z)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},5824:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/graphiql-default-generate-code-buttons-0d11bd4793578b4f1216bf298148b51c.png"},8899:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/graphiql-default-query-response-2bb3a0cdaec903deec0cfb9985e87f35.png"},843:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/graphiql-docs-query-myuser-user-organisation-7e9aa4ad267880a3cc785466aa74ddd3.png"},3602:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/graphiql-docs-query-myuser-user-28951cdd6913c3ef8a934685d3a776d3.png"},9517:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/graphiql-docs-query-myuser-70119b8f6f4b4eec1ce2505412173d26.png"},6792:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/graphiql-graphiql-explorer-endpoints-54f8e35c461e5d9d0c253acf12cccbae.png"},9712:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/graphiql-query-autocomplete-d82d2269c00e78f23f392272eabc9219.png"},9741:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/graphiql-sidebar-show-documentation-explorer-button-b57608087cd3526140ee870ad0507f3e.png"},7422:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/graphiql-sidebar-show-graphiql-explorer-button-739297257dc8b592553cc16d35dc6df2.png"},3259:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/graphiql-sidebar-show-history-button-c7409b03c5d143bbc40150dc407e9a0d.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(7294);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);