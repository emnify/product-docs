"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2772],{4864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var s=n(5893),i=n(1151),l=n(3229),r=n(3577);const c={description:"Learn how to manage your devices via the Connected Devices page in the emnify Portal",last_update:{date:"01-17-2024"},slug:"/portal/connected-devices"},d="Connected devices",o={id:"portal/sims-and-devices/connected-devices",title:"Connected devices",description:"Learn how to manage your devices via the Connected Devices page in the emnify Portal",source:"@site/docs/portal/sims-and-devices/connected-devices.mdx",sourceDirName:"portal/sims-and-devices",slug:"/portal/connected-devices",permalink:"/pr-preview/pr-272/portal/connected-devices",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1705449600,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{description:"Learn how to manage your devices via the Connected Devices page in the emnify Portal",last_update:{date:"01-17-2024"},slug:"/portal/connected-devices"},sidebar:"mainDocsSidebar",previous:{title:"SIM inventory",permalink:"/pr-preview/pr-272/portal/sim-inventory"},next:{title:"Device policies",permalink:"/pr-preview/pr-272/portal/device-policies"}},a={},h=[{value:"Create a new device",id:"create-a-new-device",level:2},{value:"Get your device online",id:"get-your-device-online",level:2},{value:"Filter devices",id:"filter-devices",level:2},{value:"Available filters",id:"available-filters",level:3},{value:"Wildcard support",id:"wildcard-support",level:3},{value:"Upload a CSV file",id:"upload-a-csv-file",level:3},{value:"Enter a list of values",id:"enter-a-list-of-values",level:3},{value:"Search devices",id:"search-devices",level:2},{value:"Get device information",id:"get-device-information",level:2},{value:"Device status",id:"device-status",level:2},{value:"Configure the device status",id:"configure-the-device-status",level:3},{value:"Bulk actions",id:"bulk-actions",level:3},{value:"Reset connectivity",id:"reset-connectivity",level:2}];function x(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:c}=t;return c||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"connected-devices",children:"Connected devices"}),"\n","\n","\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://portal.emnify.com/connected-devices",children:(0,s.jsx)(t.strong,{children:"Connected Devices"})})," is where you manage your devices."]}),"\n",(0,s.jsx)(t.h2,{id:"create-a-new-device",children:"Create a new device"}),"\n",(0,s.jsxs)(t.p,{children:["As part of the SIM registration process, you can ",(0,s.jsx)(t.a,{href:"/quickstart/register-sims#create-a-new-device",children:"create a new device"})," for the newly registered SIM while still in the SIM registration dialog."]}),"\n",(0,s.jsxs)(t.p,{children:["To create a new device to be used with an unattached SIM, navigate to ",(0,s.jsx)(t.strong,{children:"Connected Devices"})," and select ",(0,s.jsx)(t.strong,{children:"Add Device"}),".\nAfter providing a name for the new device and selecting device policies, you can select a SIM from the list of registered, unassigned SIMs or search for a specific SIM under ",(0,s.jsx)(t.strong,{children:"Assign SIM (optional)"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"get-your-device-online",children:"Get your device online"}),"\n",(0,s.jsxs)(t.p,{children:["For information about configuring a device for network connectivity, see ",(0,s.jsx)(t.a,{href:"/apn-configuration",children:"Get a device online"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"filter-devices",children:"Filter devices"}),"\n",(0,s.jsxs)(t.p,{children:["Filters are available for both the ",(0,s.jsx)(t.strong,{children:"Extensive"})," and ",(0,s.jsx)(t.strong,{children:"Plain"})," view of the ",(0,s.jsx)(t.strong,{children:"Connected Devices"})," table.\nThese filters allow you to query devices based on one or more properties (for example, assigned tags or the device ID)."]}),"\n",(0,s.jsxs)(t.p,{children:["Select the filter you want to edit, enter a value, then press the ",(0,s.jsx)(t.code,{children:"Tab"})," or ",(0,s.jsx)(t.code,{children:"Enter"})," key.\nOnce you've entered all the values you want to filter by, click ",(0,s.jsx)(t.strong,{children:"Apply"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["To remove a filter or value, click the corresponding ",(0,s.jsx)(t.strong,{children:"X"}),"."]}),"\n",(0,s.jsx)("img",{src:n(4113).Z,alt:"",style:{height:450}}),"\n",(0,s.jsxs)(t.p,{children:["Filters can be combined or used together with the ",(0,s.jsx)(t.a,{href:"#search-devices",children:"search bar"}),".\nFiltered values are saved in the URL as a query parameter (for example, after filtering for devices with the ",(0,s.jsx)(t.code,{children:"Zapier"})," tag, the URL includes ",(0,s.jsx)(t.code,{children:"&tags=Zapier"})," at the end)."]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["Your selected filters remain active when you visit a device's ",(0,s.jsx)(t.strong,{children:"Details"})," page.\nHowever, the filters reset if you go to another page in the Portal."]})}),"\n",(0,s.jsx)(t.h3,{id:"available-filters",children:"Available filters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"#wildcard-support",children:"Wildcard support"})}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.Z,{alt:"Yes"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Name of a device."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ICCID"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.Z,{alt:"Yes"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Integrated circuit card identifier including the final Luhn checksum digit."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Tag"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.Z,{alt:"Yes"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Name of a tag you've assigned to a device."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Device ID"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.Z,{alt:"No"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Unique identifier for a device."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Status"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Predefined"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.Z,{alt:"No"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["List of possible device statuses, specifically: ",(0,s.jsx)(t.strong,{children:"Enabled"})," or ",(0,s.jsx)(t.strong,{children:"Disabled"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"EID"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.Z,{alt:"Yes"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Unique global serial number for an eUICC."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"IMEI"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.Z,{alt:"Yes"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"International mobile equipment identity, used to identify cellular modems."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"IP address"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.Z,{alt:"Yes"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Unique address that identifies a device on the internet or a local network (for example, ",(0,s.jsx)(t.code,{children:"10.1.1.9"}),")."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Coverage policy"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Predefined"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.Z,{alt:"No"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["List of your configured ",(0,s.jsx)(t.a,{href:"/portal/device-policies#coverage-policies",children:"coverage policies"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Service policy"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Predefined"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.Z,{alt:"No"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["List of your configured ",(0,s.jsx)(t.a,{href:"/portal/device-policies#service-policies",children:"service policies"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"wildcard-support",children:"Wildcard support"}),"\n",(0,s.jsxs)(t.p,{children:["A wildcard filter lets you find various value forms based on a partial match.\nYou can also use character matching with an asterisk ",(0,s.jsx)(t.code,{children:"*"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"This is especially useful if a term has multiple spellings or you're unsure of the exact value."}),"\n",(0,s.jsxs)(t.p,{children:["For example, if you have two devices named ",(0,s.jsx)(t.code,{children:"Phase modem"})," and ",(0,s.jsx)(t.code,{children:"My iPhone"}),", filtering for ",(0,s.jsx)(t.code,{children:"ph"})," or ",(0,s.jsx)(t.code,{children:"ph*e"})," shows both devices in the results.\nAnother example is filtering names using ",(0,s.jsx)(t.code,{children:"organi*ation"})," shows all results regardless of whether the device name uses American (organization) or British (organisation) spelling."]}),"\n",(0,s.jsx)(t.h3,{id:"upload-a-csv-file",children:"Upload a CSV file"}),"\n",(0,s.jsx)(t.p,{children:"You can use a comma-separated values (CSV) file to apply multiple values to any filter that accepts string values."}),"\n",(0,s.jsx)(t.p,{children:"This feature is especially useful if you have dozens of values (for example, 100 ICCIDs).\nImporting values through a CSV file lets you skip the tedious task of entering each value individually."}),"\n",(0,s.jsx)(t.p,{children:"To upload a CSV file, follow these steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["On ",(0,s.jsx)(t.a,{href:"https://portal.emnify.com/connected-devices",children:(0,s.jsx)(t.strong,{children:"Connected Devices"})}),", choose the corresponding filter for the property in your CSV file (for example, ",(0,s.jsx)(t.strong,{children:"ICCID"}),")."]}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Import a CSV file"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Drag and drop the file or select ",(0,s.jsx)(t.strong,{children:"Browse file"})," to find the file you want to import."]}),"\n",(0,s.jsxs)(t.li,{children:["Verify the file name and line count are correct, then click ",(0,s.jsx)(t.strong,{children:"Confirm"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Each value is parsed, and the table shows any devices with the corresponding values."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Uploading a CSV file won't overwrite any existing filters.\nTo add or remove any values, select the filter again."})}),"\n",(0,s.jsx)(t.p,{children:"Please note the following limits:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["You can only upload one ",(0,s.jsx)(t.code,{children:".csv"})," or ",(0,s.jsx)(t.code,{children:".txt"})," file at a time"]}),"\n",(0,s.jsx)(t.li,{children:"Maximum rows: 10,000"}),"\n",(0,s.jsx)(t.li,{children:"Maximum row length: 100 characters"}),"\n",(0,s.jsx)(t.li,{children:"The CSV file size can't exceed 400 KB in total"}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["You can download and view a sample CSV file to use as a template.\nChoose the filter, select ",(0,s.jsx)(t.strong,{children:"Import a CSV file"}),", then click ",(0,s.jsx)(t.strong,{children:"Download example of right format CSV"}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"enter-a-list-of-values",children:"Enter a list of values"}),"\n",(0,s.jsx)(t.p,{children:"You can also enter a list of values to filter for multiple ones simultaneously.\nThis works for any property that accepts string values."}),"\n",(0,s.jsx)(t.p,{children:"Lists must be plain text with every value on its own line.\nWrite the values exactly as they appear in the Portal."}),"\n",(0,s.jsxs)(t.p,{children:["To demonstrate, if you enter the following in the ",(0,s.jsx)(t.strong,{children:"Tag"})," filter and press the ",(0,s.jsx)(t.code,{children:"Enter"})," key:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-txt",children:"test\nv1\nbeta\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Each value is parsed, and the table shows any devices with the ",(0,s.jsx)(t.code,{children:"test"}),", ",(0,s.jsx)(t.code,{children:"v1"}),", and ",(0,s.jsx)(t.code,{children:"beta"})," tags."]}),"\n",(0,s.jsx)("img",{src:n(3867).Z,alt:"",style:{height:400}}),"\n",(0,s.jsx)(t.h2,{id:"search-devices",children:"Search devices"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Connected Devices"})," search bar is next to the ",(0,s.jsx)(t.strong,{children:"Add device"})," button.\nIt's visible on both the ",(0,s.jsx)(t.strong,{children:"Extensive"})," and ",(0,s.jsx)(t.strong,{children:"Plain"})," table view."]}),"\n",(0,s.jsxs)(t.p,{children:["To search your devices, type a value in the text field, then press the ",(0,s.jsx)(t.code,{children:"Enter"})," key.\nTo reset, click the corresponding ",(0,s.jsx)(t.strong,{children:"X"}),"."]}),"\n",(0,s.jsx)("img",{src:n(1187).Z,alt:""}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["All the ",(0,s.jsx)(t.a,{href:"#available-filters",children:"Available filter properties"})," are searchable except ",(0,s.jsx)(t.strong,{children:"Status"}),", ",(0,s.jsx)(t.strong,{children:"Coverage policy"}),", and ",(0,s.jsx)(t.strong,{children:"Service policy"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["Unlike filters, where the results are focused on one property, the search simultaneously looks for matches across multiple properties.\nFor example, if you enter the number ",(0,s.jsx)(t.code,{children:"2"}),", the search results would show any device with ",(0,s.jsx)(t.code,{children:"2"})," in its name (like ",(0,s.jsx)(t.code,{children:"WalkieTalkie 2.0"}),"), any assigned tags, or one or more of its numeric values (",(0,s.jsx)(t.strong,{children:"ICCID"}),", ",(0,s.jsx)(t.strong,{children:"EID"}),", etc.)."]}),"\n",(0,s.jsxs)(t.p,{children:["The search is case insensitive, meaning ",(0,s.jsx)(t.code,{children:"GPS Tracker"})," and ",(0,s.jsx)(t.code,{children:"gps tracker"})," would produce the same results.\nYou can also combine the search with filters, but searched values aren't saved in the URL."]}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsxs)(t.p,{children:["Wildcards using an asterisk ",(0,s.jsx)(t.code,{children:"*"})," aren't supported in the search bar."]}),(0,s.jsxs)(t.p,{children:["For example, if your device's ",(0,s.jsx)(t.strong,{children:"Name"})," is ",(0,s.jsx)(t.code,{children:"My iPhone"}),", searching ",(0,s.jsx)(t.code,{children:"phone"})," would show results, but searching ",(0,s.jsx)(t.code,{children:"*phone"})," wouldn't."]})]}),"\n",(0,s.jsx)(t.h2,{id:"get-device-information",children:"Get device information"}),"\n",(0,s.jsxs)(t.p,{children:["To view all information about a device, navigate to ",(0,s.jsx)(t.strong,{children:"Connected Devices"}),", find it in the list, and select ",(0,s.jsx)(t.strong,{children:"Details"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"General"})," view shows the following properties:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Status"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Current state of the device (in this document, see ",(0,s.jsx)(t.a,{href:"#device-status",children:"Device status"}),")."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Services"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Indicates whether the following services are active or disabled: ",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Data"}),(0,s.jsx)("li",{children:"SMS MT"}),(0,s.jsx)("li",{children:"SMS MO"})]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Connection"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.a,{href:"/glossary#connectivity-status",children:"Connectivity status"})," and available PDP context, with an option to reset the connectivity. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," If the device is ",(0,s.jsx)(t.strong,{children:"Online"}),", click the ",(0,s.jsx)(t.code,{children:"i"})," icon to show all connectivity information\u2014breakout IP, MSC, VLR, etc."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Blocked networks"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Names of any operators on the device's networks blocklist (often used for ",(0,s.jsx)(t.a,{href:"/quickstart/troubleshooting#other-general-troubleshooting-tips",children:"troubleshooting"}),")."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Device"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Identifiers for the device, including: ",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["Device ID (referred to as ",(0,s.jsx)(t.code,{children:"endpoint_id"})," when working with the ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/endpoint.html",children:"REST API"}),")"]}),(0,s.jsx)("li",{children:"Configured IP address"}),(0,s.jsxs)("li",{children:["IMEI and a toggle to indicate whether ",(0,s.jsx)(t.a,{href:"/services/security#imei-lock",children:"IMEI lock"})," is turned on"]})]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Policies"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Names of the assigned ",(0,s.jsx)(t.a,{href:"/portal/device-policies#service-policies",children:"service policy"})," and ",(0,s.jsx)(t.a,{href:"/portal/device-policies#coverage-policies",children:"coverage policy"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"SIM"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Properties of the assigned SIM, including: ",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"IMSI"}),(0,s.jsx)("li",{children:"MSISDN"}),(0,s.jsx)("li",{children:"ICCID"})]})," Also includes an option to release the SIM. If there's no assigned SIM, this section is empty and shows an option to assign a SIM."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Usage"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Data and SMS traffic based on a selected time period: ",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Last hour"}),(0,s.jsx)("li",{children:"Current month"}),(0,s.jsx)("li",{children:"Last month"})]})]})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["For definitions of any unfamiliar terms or acronyms, see the ",(0,s.jsx)(t.a,{href:"/glossary",children:"Glossary"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"device-status",children:"Device status"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"State"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Enabled"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A SIM is assigned to the device and activated. The device must be enabled to connect to a network."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Disabled"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"No SIM assigned, or the assigned SIM is suspended."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Deleted"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Permanently removed from your ",(0,s.jsx)(t.strong,{children:"Connected Devices"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"configure-the-device-status",children:"Configure the device status"}),"\n",(0,s.jsxs)(t.p,{children:["A device has only two configurable states, ",(0,s.jsx)(t.strong,{children:"Enabled"})," or ",(0,s.jsx)(t.strong,{children:"Disabled"}),".\nYou can toggle one or more devices between these states to control their data usage."]}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsxs)(t.p,{children:["If you're using the ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/index.html",children:"emnify REST API"})," to configure devices, it's possible to have a ",(0,s.jsx)(t.strong,{children:"Disabled"})," endpoint with an ",(0,s.jsx)(t.strong,{children:"Activated"})," assigned SIM.\nIn this case, you'll continue to accrue costs as emnify charges for activated SIMs.\nBe sure to suspend the assigned SIM to avoid unexpected charges."]}),(0,s.jsxs)(t.p,{children:["You can also check the ",(0,s.jsx)(t.strong,{children:"Dashboard"})," to see if you have unused but charged SIMs."]}),(0,s.jsx)("img",{src:n(6325).Z,alt:"Warning banner displayed for unused SIMs displayed on the emnify Portal Dashboard. It reads, '2 unused but charged SIM cards detected. We found active SIMs not connected to any device. In this case we may still charge for them, but they won't be of any use for you.' Next to this text, there's a link to the SIM Inventory and a button reading 'Deactivate SIMs now.'"}),(0,s.jsxs)(t.p,{children:["Reference: ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/endpoint.html",children:"Endpoint Object"})," and ",(0,s.jsx)(t.a,{href:"https://cdn.emnify.net/api/doc/swagger.html#/Endpoint",children:"Endpoint API"})]})]}),"\n",(0,s.jsxs)(t.p,{children:["When you want a device to connect to a network, change its status to ",(0,s.jsx)(t.strong,{children:"Enabled"}),".\nTo do this, use the ",(0,s.jsx)(t.strong,{children:"Status"})," toggle from the ",(0,s.jsx)(t.strong,{children:"Connected Devices"})," list or the device's ",(0,s.jsx)(t.strong,{children:"Details"})," page."]}),"\n",(0,s.jsx)(t.h3,{id:"bulk-actions",children:"Bulk actions"}),"\n",(0,s.jsx)(t.p,{children:"You can also perform a bulk Enable/Disable operation on a group of devices."}),"\n",(0,s.jsxs)(t.p,{children:["Use a filter to display a list of the targeted devices.\nOnce their checkboxes indicate that they have been selected, the bulk actions menu bar appears at the top of the screen.\nSelect ",(0,s.jsx)(t.strong,{children:"Device"})," and then one of the actions:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Enable Device(s)"}),"\n",(0,s.jsx)(t.li,{children:"Disable Device(s)"}),"\n"]}),"\n",(0,s.jsxs)(c,{className:"custom-details-troubleshooting",children:[(0,s.jsx)("summary",{children:"Show where this happens in the Portal"}),(0,s.jsx)("img",{src:n(4704).Z,alt:""})]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Devices can't be deleted.\nYou can rename or repurpose unwanted devices for use with unassigned SIMs."})}),"\n",(0,s.jsx)(t.h2,{id:"reset-connectivity",children:"Reset connectivity"}),"\n",(0,s.jsxs)(t.p,{children:["You can reset a device's connectivity by selecting its ",(0,s.jsx)(t.strong,{children:"Reset connectivity"})," icon while viewing it in the list of ",(0,s.jsx)(t.strong,{children:"Connected Devices"})," or by selecting the ",(0,s.jsx)(t.strong,{children:"Reset Connectivity"})," link for ",(0,s.jsx)(t.strong,{children:"Connection"})," located in the ",(0,s.jsx)(t.strong,{children:"Status"})," column of the ",(0,s.jsx)(t.strong,{children:"General"})," view of the device's ",(0,s.jsx)(t.strong,{children:"Details"})," modal."]}),"\n",(0,s.jsxs)(c,{className:"custom-details-troubleshooting",children:[(0,s.jsx)("summary",{children:"Show where this happens in the Portal"}),(0,s.jsx)("img",{src:n(1934).Z,style:{width:900},alt:""}),(0,s.jsx)("img",{src:n(7498).Z,style:{width:325},alt:""})]})]})}function j(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},3229:(e,t,n)=>{n.d(t,{Z:()=>r});var s,i=n(7294);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},l.apply(this,arguments)}const r=e=>{let{title:t,titleId:n,...r}=e;return i.createElement("svg",l({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?i.createElement("title",{id:n},t):null,s||(s=i.createElement("path",{d:"m20.5 6.41-12 12-5.5-5.5 1.41-1.41 4.09 4.08L19.09 5l1.41 1.41Z",fill:"#33B147"})))}},3577:(e,t,n)=>{n.d(t,{Z:()=>r});var s,i=n(7294);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},l.apply(this,arguments)}const r=e=>{let{title:t,titleId:n,...r}=e;return i.createElement("svg",l({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?i.createElement("title",{id:n},t):null,s||(s=i.createElement("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",fill:"#FF5757"})))}},4704:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/portal-connected-devices-bulk-enable-disable-e3573f3f1405e5ca22c5e44218e59dda.png"},3867:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/portal-connected-devices-filters-tag-26d1851f8802790f5d7f0514306de17d.png"},4113:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/portal-connected-devices-filters-34fc9f1073c1e4b8c7f2dd77b06cfe2f.png"},1934:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/portal-connected-devices-reset-connectivity-e54adaefe80f46306ed9fed96f7f4126.png"},1187:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/portal-connected-devices-search-32db7b19b2eea13a2fb4f6cb870185e0.png"},6325:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/portal-dashboard-unused-sim-warning-ee439c0f4637f9a1f013684703a96ea2.png"},7498:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/portal-device-details-reset-connectivity-8c26f56b201a169bbac7b94291cdb4ce.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var s=n(7294);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);