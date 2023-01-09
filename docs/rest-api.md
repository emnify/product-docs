# REST API

REST APIs are one of the easiest way to integrate external services into your application.
The EMnify API provides a variety of HTTP requests to integrate several EMnify services into your application.
The EMnify API is based on the OpenAPI Specification OAS3.
You can find the API reference [here](https://cdn.emnify.net/api/doc/swagger.html?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670530991861.1670533602068.8&__hssc=115846617.3.1670533602068&__hsfp=3017379904) where you can also try out our API.

The sections below will describe the services available through the EMnify API.

### API Authentication

To use the EMnify API, you need to authenticate with an Authentication Token.
We use JWTs as the authentication token.
Now there are two ways to retreive this token:

1. **Authenticate with User Credentials**: You can use the username and password you used while signing up for the [EMnify Portal](https://portal.emnify.com/).
2. **Authenticate with an Application Token**: You can use the application token that you can generate in your EMnify account.

#### Authenticate with User Credentials

The `/api/v1/authenticate` API is used to generate a JWT `auth_token` which authenticates subsequent API calls.
The request body must provide a `username` (typically the email address used when signing up) and the `user password` and in turn will receive an `auth_token` and `refresh_token`.

```
POST [https://cdn.emnify.net/api/v1/authenticate](https://cdn.emnify.net/api/v1/authenticate?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670530991861.1670533602068.8&__hssc=115846617.3.1670533602068&__hsfp=3017379904)
```

Request Body

```json
{
  "username": "user@domain.com",
  "password": "2fd4e1c67a2d28fced849ee1bb76e7391b93eb12"
}
```

:::note
If users have signed up using the [EMnify Portal](https://portal.emnify.com/), the password will need to be a SHA1 hashed string.
The SHA1 of a password can be generated online or in the terminal via the following command: `echo -n 'my_password' | openssl sha1`.
:::

Response

```json
{
  "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

You can use this `auth_token` as the bearer token to authenticate all API calls.
This `auth_token` is valid for 240 minutes, so you don’t need to retreive the `auth_token` before every API call.
Once the `auth_token` expires, you can use the `refresh_token` to retreive the new `auth_token`.

#### Authenticate with an Application Token

As you should not store your EMnify user credentials on your application server, you can generate an `application_token` via the [EMnify Portal](https://portal.emnify.com/) or via the API `/api/v1/application_token`.
The request body should have description of the token usually used to indicate who is using the token and can have a `expiry_date` for the token.

```
POST [https://cdn.emnify.net/api/v1/application_token](https://cdn.emnify.net/api/v1/application_token?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670530991861.1670533602068.8&__hssc=115846617.3.1670533602068&__hsfp=3017379904)`
```
Request header

```
Authorization: Bearer {auth_token}
```

Request body

```json
{
  "description": "Token with expiry date",
  "expiry_date": "2021-10-29"
}
```


Response

```json
{
  "application_token": "KAOp24TuMgjO2FpZmZ3ZFjSqpk7ea_mY8..."
}
```
This calls returns an `application_token` which can then be used instead of the user/password combination and can be revoked at any time to get the `auth_token`.

You can alternatively generate the `application_token` in the EMnify Portal.
Login in to the [EMnify Portal](https://portal.emnify.com/login) → Integrations → Application Tokens → Add Token.

Generate Application Token using the EMnify Portal

<!-- TODO: Recreate generate_app_token.png (generate application token) -->

To get the `auth_token` using the `application_token`, use the `/api/v1/authenticate` API. The `auth_token` can be then used to authenticate all subsequent API calls.

```
POST [https://cdn.emnify.net/api/v1/authenticate](https://cdn.emnify.net/api/v1/authenticate?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670530991861.1670533602068.8&__hssc=115846617.3.1670533602068&__hsfp=3017379904)
```

Request body

```json
{
  "application_token": "kNTktNTA1My00YzdhLT..."
}
```

Response

```json
{
  "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Unlike user and password authentication, only an `auth_token` is returned by the server and no `refresh_token` will be included in the response.
This `auth_token` is valid for 240 minutes.

:::note
It is NOT advisable to generate an `auth_token` before making every API call.
You should reuse the generated `auth_token` for 240 minutes after it is generated and update it after its expiration.
:::

### Sending and receiving SMS

You can perform the following SMS related operations using the `endpoint` API.

1. List sent and received SMS `GET /api/v1/endpoint/{endpoint_id}/sms`
2. Send SMS to and endpoint `POST /api/v1/endpoint/{endpoint_id}/sms`
3. Get details about an endpoint SMS `GET /api/v1/endpoint/{endpoint_id}/sms/{sms_id}`
4. Cancel a buffered SMS `DELETE /api/v1/endpoint/{endpoint_id}/sms/{sms_id}`

Example: Send SMS to an Endpoint

```
POST [https://cdn.emnify.net/api/v1/endpoint/{endpoint_id}/sms](https://cdn.emnify.net/api/v1/endpoint/%7Bendpoint_id%7D/sms?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1670530991861.1670533602068.8&__hssc=115846617.3.1670533602068&__hsfp=3017379904)
```

Request Body

```json
{
  "source_address": 12345689,
  "payload": "This is the message text"
}
```

Responses

`201`

The source address is the sender number that will appear on the receiving device.
The payload is the actual text to be sent as SMS.

### Code Samples

Check out [JavaScript Examples](https://github.com/EMnify/API_Examples_JS) with the EMnify API in our GitHub repository.