---
sidebar_position: 5
---

# REST API

REST APIs are one way to integrate external services into your application.
The emnify API provides a variety of HTTP requests to integrate several emnify services into your application.

The emnify API is based on the OpenAPI Specification OAS3.
You can try out our API using the [API reference](https://cdn.emnify.net/api/doc/swagger.html).

The sections below will describe the services available through the emnify API.

## API authentication

To use the emnify API, you need to authenticate with an authentication token.
We use JSON Web Tokens (JWTs) as the authentication token.

There are two ways to retrieve this token:

1. [**Authenticate with user credentials**](#authenticate-with-user-credentials): Use the username and password you used while signing up for the [emnify Portal](https://portal.emnify.com/).
2. [**Authenticate with an application token**](#authenticate-with-an-application-token): You can use the application token generated in your emnify account.

### Authenticate with user credentials

The `/api/v1/authenticate` API is used to generate a JWT `auth_token`, which authenticates subsequent API calls.
The request body must provide a `username` (typically the email address used when signing up) and the `user password`. 

Once authenticated, you'll receive an `auth_token` and `refresh_token`.

```
POST https://cdn.emnify.net/api/v1/authenticate
```

**Request body**:

```json
{
  "username": "user@domain.com",
  "password": "2fd4e1c67a2d28fced849ee1bb76e7391b93eb12"
}
```

:::note
If you signed up using the [emnify Portal](https://portal.emnify.com/), you'll need to enter the password as a SHA1 hashed string.
The SHA1 of a password can be generated online or in the terminal via the following command: `echo -n 'my_password' | openssl sha1`
:::

**Response**:

```json
{
  "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

To authenticate all API calls, you can use this `auth_token` as the bearer token.
This `auth_token` is valid for 240 minutes, so you don’t need to retrieve the `auth_token` before every API call.
Once the `auth_token` expires, you can use the `refresh_token` to retrieve the new `auth_token`.

### Authenticate with an application token

As you should not store your emnify user credentials on your application server, you can generate an `application_token` via the [emnify Portal](https://portal.emnify.com/) or the API: `/api/v1/application_token`.
The request body should have a description of the token usually used to indicate who is using the token and can have an `expiry_date` for the token.

```
POST https://cdn.emnify.net/api/v1/application_token
```

**Request header**:

```
Authorization: Bearer {auth_token}
```

**Request body**:

```json
{
  "description": "Token with expiry date",
  "expiry_date": "2021-10-29"
}
```

**Response**:

```json
{
  "application_token": "KAOp24TuMgjO2FpZmZ3ZFjSqpk7ea_mY8..."
}
```

This calls returns an `application_token`. 
You can use this token instead of the username and password combination. 
The token can be revoked at any time.

You can alternatively generate the `application_token` in the emnify Portal:

1. Log in to the [emnify Portal](https://portal.emnify.com/login)
1. Navigate to **Integrations** → **Application Tokens** → **Add Token**.

![generate application token](./assets/generate_app_token.png)

To get the `auth_token` using the `application_token`, use the `/api/v1/authenticate` API. 
The `auth_token` can then be used to authenticate all subsequent API calls.

```
POST https://cdn.emnify.net/api/v1/authenticate
```

**Request body**:

```json
{
  "application_token": "kNTktNTA1My00YzdhLT..."
}
```

**Response**:

```json
{
  "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Unlike user and password authentication, only `auth_token`s are returned by the server. 
No `refresh_token` will be included in the response.
This `auth_token` is valid for 240 minutes.

:::caution
It's *not* advisable to generate an `auth_token` before making each API call.
You should reuse the generated `auth_token` for 240 minutes after it's generated. 
Then, update it after its expiration.
:::

## Sending and receiving SMS

You can perform the following SMS related operations using the `endpoint` API.

1. List sent and received SMS: `GET /api/v1/endpoint/{endpoint_id}/sms`
1. Send SMS to and endpoint: `POST /api/v1/endpoint/{endpoint_id}/sms`
1. Get details about an endpoint SMS: `GET /api/v1/endpoint/{endpoint_id}/sms/{sms_id}`
1. Cancel a buffered SMS: `DELETE /api/v1/endpoint/{endpoint_id}/sms/{sms_id}`

**Example**: Send SMS to an endpoint

```
POST [https://cdn.emnify.net/api/v1/endpoint/{endpoint_id}/sms](https://cdn.emnify.net/api/v1/endpoint/%7Bendpoint_id%7D/sms?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670530991861.1670533602068.8&__hssc=115846617.3.1670533602068&__hsfp=3017379904)
```

**Request body**:

```json
{
  "source_address": 12345689,
  "payload": "This is the message text"
}
```

**Responses**

```
201
```

The source address is the sender number appearing on the receiving device.
The payload is the actual text to be sent as SMS.

## Code samples

Check out [JavaScript Examples](https://github.com/emnify/API_Examples_JS) with the emnify API in our GitHub repository.