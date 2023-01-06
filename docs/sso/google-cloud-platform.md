---
description: Setup SSO with Google Cloud Platform
---

# Setup SSO with Google Cloud Platform

This guide walks through enabling single sign-on (SSO), so your organization can access the [emnify Portal](https://portal.emnify.com/) using your Google Cloud Platform credentials.

**Prerequisites:**

- A Google account that's a user within a [Google Cloud Platform organization](https://cloud.google.com/resource-manager/docs/creating-managing-organization)
- An account in the emnify Portal using the same email address as the one used to sign into Google 

:::caution
If your email address in the emnify Portal differs from the one used to log in to Google, this setup won't work. 
Instead, add an additional user to the emnify Portal with **Administrator** privileges.
:::

## Register emnify in Google

First, you need to register emnify in the [Google Cloud Platform console](https://console.developers.google.com/) and retrieve an OAuth 2.0 client ID and client secret. 

### Select or create an emnify project

Log in with your Google account and navigate to the [APIs & Services dashboard](https://console.developers.google.com/apis/dashboard). 

Select your organization's project for managing OAuth credentials for emnify. 

If you don't already have a designated project, create one with the following steps:

1. Click **New Project**.
1. If prompted, agree to the terms of service.
1. Enter a **Project name** (e.g., "emnify SSO") and **Location**.
1. Click **Create**, then you should land on the **Enabled APIs & Services** page.
1. In the APIs & Services navigation bar, click **OAuth consent screen**.
1. Choose the [**User Type**](https://support.google.com/cloud/answer/10311615#user-type) for your project.
1. Specify app information about emnify (**App Name**, **User support email**, and **Developer contact information** are necessary, but all other fields are optional).
1. (Optional) Define any **Scopes** or **Test Users**.
1. Click **Save and Continue** to proceed.
1. Navigate to the summary screen, review your settings, and click **Back to Dashboard**.

### Get an OAuth client ID and Secret

Use the **Credentials** option to retrieve the OAuth client ID and secret that you'll enter into the emnify Portal.

1. Head to **Credentials** in the APIs & Services navigation bar.
1. Click **+ Create Credentials** (on the top next to the page header), then select the `OAuth client ID` option.
1. In the **Application type** list, select `Web application`.
1. Enter a **Name** (e.g., "emnify Portal" or "Enterprise Portal").
1. Set an **Authorized redirect URI** with the value: `https://prod-e5.okta.com/oauth2/v1/authorize/callback`
1. Click **Create** and wait for the **OAuth client created** modal to appear.
1. Copy the displayed values (you'll need them later) or download the provided JSON.

:::tip
You can access your client ID and secret at any time in your Google Cloud Platform console on the **Credentials** page.
:::

## Configure the emnify Portal

1. Log in to the [emnify Portal](https://portal.emnify.com/).
1. Go to **Organization Settings** (building icon) in the top-level navigation and click **Single Sign-On**.
1. If you need SSO enabled for your account, [contact support](https://support.emnify.com/). 
Otherwise, click **Add** under the Google SSO provider.
1. Fill in the **Client ID** and **Client Secret** you copied earlier, then click **Create and Activate**.
1. Once you're back on the Single Sign-On page of the **Organization Settings**, you should see Google listed as a **Provider**.
1. Finally, click **Verify Integration** and follow the prompts.

:::caution
You must complete the final step and verify the provider to configure SSO.
:::

:::tip
We have a [Troubleshooting page](troubleshooting#general) if you encounter issues while setting up SSO.
:::