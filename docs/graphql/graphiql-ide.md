---
displayed_sidebar: devResourcesSidebar
last_update: 
  date: 08-30-2023
slug: /graphql/graphiql-ide
---

# Use the GraphiQL IDE

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

There's an in-browser [emnify GraphiQL IDE](https://graphql-playground.emnify.net/) where you can experiment with the GraphQL API.

Similar to OpenAPI in the REST world, [GraphiQL](https://github.com/graphql/graphiql) (pronounced "graphical") helps you accurately structure and validate queries, then run them directly against the server endpoint.
It's equipped with tools to help you try out the GraphQL API.
Notable features include autocompleting, syntax highlighting, interactive documentation, and schema explorers.

:::tip
If you're new to GraphQL, visit the [official GraphQL documentation](https://graphql.org/learn/) to familiarize yourself with how the query language is structured.
:::

## Navigate the interface

The UI is divided into three parts:

- **Sidebar** where you can open plugin panes and change settings
- **Left panel** where you write your queries
- **Right panel** where the results of your queries are displayed

<!-- Same screenshot as the graphql-playground README -->
<img
  src="https://user-images.githubusercontent.com/25433336/225385087-37c5fa5c-4b23-4fca-a1b5-675974392473.png"
  alt=""
/>

At the top of the sidebar, there are buttons for the documentation explorer, history, and GraphiQL explorer.
Underneath, the sidebar shows buttons that allow you to re-fetch the GraphQL schema, see the keyboard shortcuts, and change settings.

The bottom of the left panel has two sections, **Variables** and **Headers**.
By default, there's a placeholder for the **Authorization** header.

When you type queries into this side of the screen, the IDE provides autocomplete based on the current GraphQL type schema and live syntax and validation error highlighting.

An example GraphQL query might look like this:

```graphql
{
  field(arg: "value") {
    subField
  }
}
```

:::tip
GraphQL queries typically start with a `{` character.
Lines that start with a `#` are ignored.
:::

## Authorization

To make calls from this IDE, you need to provide an authentication token in the **Headers** section.

### Retrieve your authentication token

Use the emnify REST API to retrieve your authentication token.
For step-by-step instructions, see [Getting started](https://cdn.emnify.net/api/doc/getting-started.html) in the emnify System Documentation.

### Add your authentication token to GraphiQL

Once you have your authentication token, you need to pass that token to the GraphiQL IDE.

1. Navigate to the [emnify GraphiQL IDE](https://graphql-playground.emnify.net/)
2. Locate the **Headers** section  
By default, this section has the following placeholder:

```graphql
{
  "Authorization": "Bearer AUTH_TOKEN"
}
```

<!-- markdownlint-disable-next-line MD029 -->
3. Replace _`AUTH_TOKEN`_ with your authentication token value

To test that you're authorized, click the **Execute query** button (▶️) and check your result.

## Execute your first query

:::note
GraphiQL's interactive documentation is used throughout this example.
To follow along, click the **Show Documentation Explorer** button in the sidebar.
Once the **Docs** are visible, choose `Query`, then select `myUser`.

<img
  src={require('./assets/graphiql-sidebar-show-documentation-explorer-button.png').default}
  alt=""
  style={{ width: 350 }}
/>

:::

When you first visit the GraphiQL IDE, there's a pre-populated example query in the left panel:

```graphql
{
  myUser {
    organisation {
      name
      id
    }
  }
}
```

In this example, `myUser` is a [query](https://graphql.org/learn/queries/) that can return your user and organization details, including endpoint (device) status and active tariff plan (data plan).

<img
  src={require('./assets/graphiql-docs-query-myuser.png').default}
  alt=""
  style={{ width: 700 }}
/>

:::info
In GraphQL, the `!` means that [variable definition](https://graphql.org/learn/queries/#variable-definitions) is required.
:::

Within `myUser`, `User` is listed as a required [object type](https://graphql.org/learn/schema/#object-types-and-fields) and indicates which [fields](https://graphql.org/learn/queries/#fields) you can use in this query.
Because `User` is the only type available, you don't need to type it out explicitly.

<img
  src={require('./assets/graphiql-docs-query-myuser-user.png').default}
  alt=""
  style={{ width: 700 }}
/>

This example uses the `organisation` field, which requires the `Organisation` object type.
You want to receive the `name` and `id` fields from that object type.

<img
  src={require('./assets/graphiql-docs-query-myuser-user-organisation.png').default}
  alt=""
  style={{ width: 700 }}
/>

Finally, when you execute the query, it returns a `data` object with your requested information.

<img
  src={require('./assets/graphiql-default-query-response.png').default}
  alt=""
/>

## Write your own query

Remove any content in the left panel and begin typing:

```graphql
{

}
```

Inside the curly braces, you can start typing or use the keyboard shortcuts to open the autocomplete window.

In the following example, the IDE suggests `endpoint`, `endpoints`, and `endpointsQuery` once you've started typing "end":

<img
  src={require('./assets/graphiql-query-autocomplete.png').default}
  alt=""
  style={{ width: 450 }}
/>

If you need help with what to write, click the **Show GraphiQL Explorer** button on the sidebar.

<img
  src={require('./assets/graphiql-sidebar-show-graphiql-explorer-button.png').default}
  alt=""
  style={{ width: 450 }}
/>

This displays an interactive overview of the current GraphQL schema.
Open and select your desired fields, and the query builds and formats itself automatically.

<img
  src={require('./assets/graphiql-graphiql-explorer-endpoints.png').default}
  alt=""
  style={{ width: 800 }}
/>

:::tip
To see the queries you've executed during a session, click the **Show history** button on the sidebar.

<img
  src={require('./assets/graphiql-sidebar-show-history-button.png').default}
  alt=""
  style={{ width: 350 }}
/>
:::

## Generate code from your query

On the left panel are buttons allowing you to generate a cURL query, Node.js code, or Python code from your GraphQL query.
Click these buttons to copy this code to your clipboard.

<img
  src={require('./assets/graphiql-default-generate-code-buttons.png').default}
  alt=""
  style={{ width:450 }}
/>

The following examples show code generated from the default query:

<Tabs
  defaultValue="curl"
  values={[
      { label: 'cURL', value: 'curl', },
      { label: 'Node.js', value: 'node', },
      { label: 'Python', value: 'python', },
  ]}
>
<TabItem value="curl">

```shell
curl -X POST \
   -H "Authorization: Bearer AUTH_TOKEN" \
   -H "Content-Type: application/json" \
    https://cdn.emnify.net/graphql \
    --data-raw '{"query":"{\n  myUser {\n    organisation {\n      name\n      id\n    }\n  }\n}"}'
```

</TabItem>
<TabItem value="node">

```js
var axios = require('axios');
var data = JSON.stringify({
  query: `{
  myUser {
    organisation {
      name
      id
    }
  }
}`,
  variables: {}
});

var config = {
  method: 'post',
  url: 'https://cdn.emnify.net/graphql',
  headers: { 
    'Authorization': 'Bearer AUTH_TOKEN', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

</TabItem>
<TabItem value="python">

```python
import requests
import json

url = "https://cdn.emnify.net/graphql"

payload = {"query": """{
  myUser {
    organisation {
      name
      id
    }
  }
}"""}
headers = {
  'Authorization': 'Bearer AUTH_TOKEN',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=json.dumps(payload))

print(response.text)
```

</TabItem>
</Tabs>
