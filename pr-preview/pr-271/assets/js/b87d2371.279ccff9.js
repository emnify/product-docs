"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[6958],{639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var a=t(5893),i=t(1151);const s={description:"Step-by-step guide for installing and using the emnify Java SDK",last_update:{date:"08-20-2021"},pagination_label:"Getting started with the Java SDK",pagination_next:"sdks/java/examples",sidebar_label:"Getting started",slug:"/sdks/java/quickstart"},r="Getting started with the emnify Java SDK",l={id:"sdks/java/quickstart",title:"Getting started with the emnify Java SDK",description:"Step-by-step guide for installing and using the emnify Java SDK",source:"@site/docs/sdks/java/quickstart.md",sourceDirName:"sdks/java",slug:"/sdks/java/quickstart",permalink:"/pr-preview/pr-271/sdks/java/quickstart",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1629417600,formattedLastUpdatedAt:"Aug 20, 2021",frontMatter:{description:"Step-by-step guide for installing and using the emnify Java SDK",last_update:{date:"08-20-2021"},pagination_label:"Getting started with the Java SDK",pagination_next:"sdks/java/examples",sidebar_label:"Getting started",slug:"/sdks/java/quickstart"},sidebar:"mainDocsSidebar",previous:{title:"Python SDK examples",permalink:"/pr-preview/pr-271/sdks/python/examples"},next:{title:"Java SDK examples",permalink:"/pr-preview/pr-271/sdks/java/examples"}},d={},o=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Supported Java versions",id:"supported-java-versions",level:4},{value:"TLS requirements",id:"tls-requirements",level:4},{value:"Install with Maven",id:"install-with-maven",level:3},{value:"Install with Gradle",id:"install-with-gradle",level:3},{value:"Install manually",id:"install-manually",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Environment variables",id:"environment-variables",level:3},{value:"Explore more",id:"explore-more",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"getting-started-with-the-emnify-java-sdk",children:"Getting started with the emnify Java SDK"}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:["The emnify Java SDK is open source and the ",(0,a.jsx)(n.a,{href:"https://github.com/EMnify/emnify-sdk-java",children:"source code is available on GitHub"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"To install the SDK, add the emnify dependency to your existing project and use build automation tools, like Maven or Gradle, or install it manually."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Regardless of the package manager you are using, you need to specify the latest version of the emnify Java SDK.\nThe following installation examples use ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"SDK_VERSION"})})," where this should be specified."]})}),"\n",(0,a.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.h4,{id:"supported-java-versions",children:"Supported Java versions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://openjdk.org/projects/jdk8/",children:"OpenJDK 8"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://openjdk.org/projects/jdk/11/",children:"OpenJDK 11"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/downloads/#java8",children:"OracleJDK 8"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/downloads/#java11",children:"OracleJDK 11"})}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"tls-requirements",children:"TLS requirements"}),"\n",(0,a.jsxs)(n.p,{children:["Refer to the ",(0,a.jsx)(n.a,{href:"https://www.ssllabs.com/ssltest/analyze.html?d=cdn.emnify.net&latest",children:"SSL Report table"})," for the supported Transport Layer Security (TLS) versions."]}),"\n",(0,a.jsx)(n.h3,{id:"install-with-maven",children:"Install with Maven"}),"\n",(0,a.jsxs)(n.p,{children:["Use the following dependency in your project to grab via ",(0,a.jsx)(n.a,{href:"https://maven.apache.org/download.cgi",children:"Maven"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"    <dependency>\n        <groupId>com.emnify.sdk</groupId>\n        <artifactId>emnify</artifactId>\n        <version>SDK_VERSION</version>\n    </dependency>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"SDK_VERSION"})})," with the version of the emnify Java SDK you're using."]}),"\n",(0,a.jsx)(n.h3,{id:"install-with-gradle",children:"Install with Gradle"}),"\n",(0,a.jsxs)(n.p,{children:["Use the following to add the emnify dependency to your project via ",(0,a.jsx)(n.a,{href:"https://gradle.org/install/",children:"Gradle"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gradle",children:'    implementation group: "com.emnify.sdk", name: "emnify", version: "SDK_VERSION"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"SDK_VERSION"})})," with the version of the emnify Java SDK you're using."]}),"\n",(0,a.jsx)(n.h3,{id:"install-manually",children:"Install manually"}),"\n",(0,a.jsx)(n.p,{children:"If you want to compile it yourself, here's how:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"    git clone git@github.com:emnify/emnify-sdk-java.git\n    cd emnify-sdk-java\n    mvn install # Requires Maven\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to build your own ",(0,a.jsx)(n.code,{children:".jar"}),", execute the following from within the cloned directory:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"  mvn package\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(n.h3,{id:"environment-variables",children:"Environment variables"}),"\n",(0,a.jsx)(n.p,{children:"To store configuration settings, like an application token or a base URL, use environment variables instead of hardcoding them in your application.\nHere are some examples:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"EMNIFY_BASE_PATH"})}),(0,a.jsxs)(n.td,{children:["Base URL to form a request. Default value:  ",(0,a.jsx)(n.code,{children:"https://cdn.emnify.net"})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"EMNIFY_APPLICATION_TOKEN"})}),(0,a.jsxs)(n.td,{children:["Variable for authenticating via an ",(0,a.jsx)(n.a,{href:"/portal/application-tokens",children:"application token"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.code,{children:"EMNIFY_USERNAME"})," and ",(0,a.jsx)(n.code,{children:"EMNIFY_PASSWORD"})]}),(0,a.jsx)(n.td,{children:"Variables for authenticating via username and password."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"explore-more",children:"Explore more"}),"\n",(0,a.jsxs)(n.p,{children:["If you're new to IoT connectivity and emnify, start by learning some ",(0,a.jsx)(n.a,{href:"/sdks/concepts",children:"common terminology and concepts"})," and explore some ",(0,a.jsx)(n.a,{href:"/sdks/java/examples",children:"use cases"})," that show what the SDK is capable of."]}),"\n",(0,a.jsxs)(n.p,{children:["Also, see the ",(0,a.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/index.html",children:"emnify System Documentation"})," and our ",(0,a.jsx)(n.a,{href:"https://cdn.emnify.net/api/doc/swagger.html",children:"OpenAPI specification"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var a=t(7294);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);