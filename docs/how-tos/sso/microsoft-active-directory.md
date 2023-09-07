---
description: Setup SSO for your emnify account with Microsoft Active Directory
last_update: 
  date: 12-20-2022
pagination_next: how-tos/sso/google-cloud-platform
slug: /sso/microsoft-active-directory
---

# Setup SSO with Microsoft Active Directory

This guide walks through enabling single sign-on (SSO), so your organization can access the emnify Portal using your Microsoft Business credentials.

**Prerequisites:**

- An Azure Subscription with an Active Directory license
- An [emnify account](/quickstart) using the same email address as the one used to sign in to Microsoft Azure

:::caution
If your email address used in the emnify Portal differs from the one used to log in to Azure, this setup won't work.
You can verify your email in [**User Settings**](https://portal.emnify.com/user-settings).

Instead, add an additional user with the **Administrator** role.
To do this, go to **Organization Settings**&nbsp;<span aria-label="and then">></span> [**Employees**](https://portal.emnify.com/organisation-settings/users).
:::

## SSO with Microsoft

Log in to Azure and navigate to **Azure Active Directory** in the left sidebar.

<img
  src={require('./assets/sso-azure-active-directory.png').default}
  alt=""
  className="no-border"
/>

At the top of the page, click **+ Add** and then **App Registration**.
From there:

<img
  src={require('./assets/sso-azure-app-registration.png').default}
  alt=""
  className="no-border"
/>

- Give your app a **Name** (for example, "emnify").
- The **Supported Account Types** should be `Multitenant`.
This requests a consent screen on IDP verification in the Portal later. 
- Set the Redirect URI to type `Web` with the value: `https://prod-e5.okta.com/oauth2/v1/authorize/callback`

<img
  src={require('./assets/sso-azure-app-registration-details.png').default}
  alt=""
  className="no-border"
/>

Navigate to **Authentication** in the left sidebar, and in the section **Implicit grand and hybrid flows**, enable `Access tokens` and `ID tokens`.

<img
  src={require('./assets/sso-azure-authentication.png').default}
  alt=""
  className="no-border"
/>

Go to **Token configuration** in the left sidebar, click **Add optional claim**, and under **SAML**, enable the `upn` claim.
Leave the option `Turn on the Microsoft Graph profile` permission unchecked.

<img
  src={require('./assets/sso-azure-token-configuration.png').default}
  alt=""
  className="no-border"
/>

Head to **API permissions** in the left sidebar, click the existing permission entry **Microsoft Graph (1)** and confirm the `email` and `profile` OpenID permissions.

<img
  src={require('./assets/sso-azure-api-permissions-1.png').default}
  alt=""
  className="no-border"
/>

Your configuration should look like this:

<img
  src={require('./assets/sso-azure-api-permissions-2.png').default}
  alt=""
  className="no-border"
/>

In the left sidebar, go to **Expose an API**, click **Set**, and then click **Save**.

<img
  src={require('./assets/sso-azure-expose-api.png').default}
  alt=""
  className="no-border"
/>

After navigating to **Certificates & Secrets** in the left sidebar, click **New client secret**.

<img
  src={require('./assets/sso-azure-new-client-secret.png').default}
  alt=""
  className="no-border"
/>

Copy the **Value** and save it to a secure location.

:::danger
This value won't be shown again.
:::

<img
  src={require('./assets/sso-azure-new-client-secret-returned.png').default}
  alt=""
  className="no-border"
/>

Choose an expiration date and mark your calendar to generate and configure a new secret before it expires.

Navigate to **Overview** in the sidebar and copy the **Application (client) ID** to use later in the emnify Portal.

<img
  src={require('./assets/sso-azure-app-id.png').default}
  alt=""
  className="no-border"
/>

## Configure the emnify Portal

[Log in to your emnify account](https://portal.emnify.com/sign/), go to Organization Settings (building icon) in the top-level navigation, and click [**Single Sign-On**](https://portal.emnify.com/organisation-settings/federation).

<img
  src={require('./assets/portal-organization-settings-sso.png').default}
  alt="Portal screenshot showing the Organization settings dropdown menu. Menu items from top to bottom, Organization Data, Employees, Subscription, Billing, Single Sign-On."
  style={{ width: 358 }}
/>

If you need SSO enabled for your account, contact support by selecting **Upgrade**.
Otherwise, click **Add** under the Microsoft SSO provider.

Enter the **Client ID** and **Client Secret** with the values you copied earlier, then click **Create and Activate**.

The final step is to verify the provider.
Click **Verify Integration** and follow the prompts.

:::caution
You must complete the final step and verify the provider to configure SSO.
:::

:::tip
Refer to the [Troubleshooting page](/sso/troubleshooting#microsoft-active-directory) if you encounter issues while setting up SSO.
:::
