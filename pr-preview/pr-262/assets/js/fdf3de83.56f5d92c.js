"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[8030],{8588:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(5893),s=t(1151);const o={description:"Step-by-step guide for installing and using the emnify Python SDK",last_update:{date:"09-07-2022"},pagination_label:"Getting started with the Python SDK",pagination_next:"sdks/python/examples",sidebar_label:"Getting started",slug:"/sdks/python/quickstart"},a="Getting started with the emnify Python SDK",r={id:"sdks/python/quickstart",title:"Getting started with the emnify Python SDK",description:"Step-by-step guide for installing and using the emnify Python SDK",source:"@site/docs/sdks/python/quickstart.md",sourceDirName:"sdks/python",slug:"/sdks/python/quickstart",permalink:"/pr-preview/pr-262/sdks/python/quickstart",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1662508800,formattedLastUpdatedAt:"Sep 7, 2022",frontMatter:{description:"Step-by-step guide for installing and using the emnify Python SDK",last_update:{date:"09-07-2022"},pagination_label:"Getting started with the Python SDK",pagination_next:"sdks/python/examples",sidebar_label:"Getting started",slug:"/sdks/python/quickstart"},sidebar:"mainDocsSidebar",previous:{title:"Concepts",permalink:"/pr-preview/pr-262/sdks/concepts"},next:{title:"Python SDK examples",permalink:"/pr-preview/pr-262/sdks/python/examples"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install from source code",id:"install-from-source-code",level:3},{value:"Install with pip",id:"install-with-pip",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Create an application token",id:"create-an-application-token",level:3},{value:"Use the SDK",id:"use-the-sdk",level:3},{value:"Explore more",id:"explore-more",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started-with-the-emnify-python-sdk",children:"Getting started with the emnify Python SDK"}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["The emnify Python SDK is open source and the ",(0,i.jsx)(n.a,{href:"https://github.com/emnify/emnify-sdk-python",children:"source code is available on GitHub"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Python (",(0,i.jsx)(n.a,{href:"https://www.python.org/downloads/release/python-360/",children:"version 3.6.0"})," or higher)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"install-from-source-code",children:"Install from source code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/emnify/emnify-sdk-python.git\ncd emnify-sdk-python\npython setup.py install\n"})}),"\n",(0,i.jsx)(n.h3,{id:"install-with-pip",children:"Install with pip"}),"\n",(0,i.jsxs)(n.p,{children:["The emnify Python SDK is also available on ",(0,i.jsxs)(n.a,{href:"https://pypi.org/project/emnify-sdk/",children:["PyPI as ",(0,i.jsx)(n.code,{children:"emnify-sdk"})]}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"pip install emnify-sdk\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.h3,{id:"create-an-application-token",children:"Create an application token"}),"\n",(0,i.jsxs)(n.p,{children:["To use the Python SDK, you need to create an application token.\nYou can do this on the ",(0,i.jsx)(n.strong,{children:"Integrations"})," page of the emnify Portal under ",(0,i.jsx)(n.a,{href:"https://portal.emnify.com/integrations#application-tokens",children:(0,i.jsx)(n.strong,{children:"Application Tokens"})})," or the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/application-token.html",children:"emnify REST API"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Once created, you'll apply it to initiate the SDK."}),"\n",(0,i.jsx)(n.h3,{id:"use-the-sdk",children:"Use the SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"TOKEN = 'APP_TOKEN'\n\n# Import the package\nfrom emnify import EMnify\n\n# Initiate the SDK instance using your application token\nemnify = EMnify(TOKEN)\n\n# Execute a command against the desired API\ndevices = emnify.devices.get_devices_list()\n\n# Show all the devices\nprint([device for device in devices])\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"APP_TOKEN"})})," with your application token."]}),"\n",(0,i.jsx)(n.h2,{id:"explore-more",children:"Explore more"}),"\n",(0,i.jsx)(n.p,{children:"Now that you have the SDK configured, it's time to learn what you can do with it."}),"\n",(0,i.jsxs)(n.p,{children:["If you're new to IoT connectivity and emnify, start by learning the ",(0,i.jsx)(n.a,{href:"/sdks/concepts",children:"common terminology and concepts"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Once you're comfortable with these ",(0,i.jsx)(n.a,{href:"/sdks/concepts",children:"concepts"}),", you can explore some use cases that show what the SDK is capable of based on a few ",(0,i.jsx)(n.a,{href:"/sdks/python/examples",children:"Examples"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Also, see the ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/index.html",children:"emnify System Documentation"})," and ",(0,i.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html",children:"OpenAPI specification"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);