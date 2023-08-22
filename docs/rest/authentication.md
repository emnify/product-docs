---
description: Retrieve your authentication token 
displayed_sidebar: devResourcesSidebar
---

# Authentication

To use the emnify REST API, you need to authenticate with an authentication token.
emnify uses JSON Web Tokens (JWTs) as the authentication token.

There are two ways to retrieve this token:

1. [**Authenticate with user credentials**](#authenticate-with-user-credentials): Use the username and password you provided while signing up for the emnify Portal. This information is available in your [**User Settings**](https://portal.emnify.com/user-settings).
1. [**Authenticate with an application token**](#authenticate-with-an-application-token): You can use the application token generated in your emnify account.

## Authenticate with user credentials

The `/api/v1/authenticate` API is used to generate a JWT `auth_token`, which authenticates subsequent API calls.
The request body must provide a `username` (typically the email address used when signing up) and the `user password`.

Once authenticated, you'll receive an `auth_token` and `refresh_token`.

```javascript
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
If you signed up using the [emnify Portal](https://portal.emnify.com/), you'll need to enter the password as a SHA-1 hashed string.
The SHA-1 of a password can be generated online or in the terminal via the following command: `echo -n 'my_password' | openssl sha1`
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

## Authenticate with an application token

Since you shouldn't store your emnify user credentials on your application server, you can generate an `application_token` via the [emnify Portal](https://portal.emnify.com/integrations#application-tokens) or the API: `/api/v1/application_token`.
The request body should have a description of the token normally used to indicate who is using the token and can have an `expiry_date` for the token.

```javascript
POST https://cdn.emnify.net/api/v1/application_token
```

**Request header**:

```javascript
Authorization: Bearer AUTH_TOKEN
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

This call returns an `application_token`.
You can use this token instead of the username and password combination.
The token can be revoked at any time.

You can alternatively generate the `application_token` in the emnify Portal:

1. [Log in to the emnify Portal](https://portal.emnify.com/sign)
1. On the **Integrations** page, navigate to the [**Application Tokens**](https://portal.emnify.com/integrations#application-tokens) section, and select **Add Token**.

<!-- TODO: Recreate generate_app_token.png (generate application token) -->

To get the `auth_token` using the `application_token`, use the `/api/v1/authenticate` API.
The `auth_token` can then be used to authenticate all subsequent API calls.

```javascript
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

Unlike username and password authentication,  the server returns only `auth_token`s.
No `refresh_token` is included in the response.
This `auth_token` is valid for 240 minutes.

:::caution
It's _not_ advisable to generate an `auth_token` before making each API call.
You should reuse the generated `auth_token` for 240 minutes after it's generated.
Then, update it after its expiration.
:::
