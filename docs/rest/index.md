---
description: Introduce the OpenAPI structure and code samples
last_update: 
  date: 11-02-2021
pagination_next: rest/sms-operations
pagination_prev: null
slug: /rest
---

# emnify REST API

REST APIs are one way to integrate external services into your application.
The emnify API provides a variety of HTTP requests to integrate several emnify services into your application.

The emnify REST API is based on the OpenAPI Specification OAS3.
You can try out the API using the [interactive API reference](https://cdn.emnify.net/api/doc/swagger.html).

## Authentication

To use the emnify REST API, you must authenticate with an authentication token.
emnify uses JSON Web Tokens (JWTs) as the authentication token.

You can retrieve this authentication token using an application token generated in your emnify account.
For step-by-step instructions, see [Authenticate with application tokens](https://cdn.emnify.net/api/doc/application-token.html) in the emnify System Documentation.

## Code samples

See the [emnify examples in JavaScript](https://github.com/emnify/API_Examples_JS) GitHub repository for examples of how to authenticate and get the device status via the REST API.

:::info
The [How to use Rest-API via Postman](https://www.emnify.com/developer-blog/postman-emnify-api) guide provides information on how to more efficiently work with the emnify REST API.
:::
