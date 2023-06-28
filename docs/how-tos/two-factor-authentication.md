---
description: How to enable two-factor authentication on your emnify account
slug: /how-tos/two-factor-authentication
---

# Enable two-factor authentication

Setting up two-factor authentication (2FA) makes unauthorized access to your account more improbable because your password is secured via your personal device, which generates a temporary authentication key.

You can [enable 2FA via the emnify Portal](https://portal.emnify.com/user-settings#two-factor-authentication).

## Configuration steps

1. Log in to your [emnify account](https://portal.emnify.com/sign).
2. Navigate to your [**User Settings**](https://portal.emnify.com/user-settings) page by clicking on your avatar and selecting **User Settings** from the dropdown menu.

<img
  src={require('./assets/portal-dashboard-avatar-user-settings.png').default}
  alt=""
/>

<img
  src={require('./assets/portal-user-settings.png').default}
  alt=""
/>

3. Find the [**Two-Factor Authentication**](https://portal.emnify.com/user-settings#two-factor-authentication) section and click **Enable**.

<img
  src={require('./assets/portal-user-settings-2fa-enable-button.png').default}
  alt=""
/>

4. Enter your password to verify your identity then click **Submit**.

<img
  src={require('./assets/portal-user-settings-2fa-password.png').default}
  alt=""
/>

5. Activate your personal device's temporary authentication key by scanning the QR code with a 2FA app.
Alternatively, you can copy the secret key to add it manually.
After you've scanned the QR code or entered the key, a 6-digit token will appear in the app. 
Finally, enter the token.

<img
  src={require('./assets/portal-user-settings-2fa-activate-key.png').default}
  alt=""
/>

<details className="custom-details-tip">
  <summary>Need a 2FA app to scan the QR code?</summary>
    <p>Download the Google Authenticator app from the <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&pli=1" target="_blank" rel="noopener noreferrer">Google Play Store</a> or <a href="https://apps.apple.com/app/google-authenticator/id388497605" target="_blank" rel="noopener noreferrer">App Store</a>.</p>
</details>

Assuming there are no errors, 2FA should be enabled for your account. 🎉

<img
  src={require('./assets/portal-user-settings-2fa-enabled.png').default}
  alt=""
/>

Now, if you log in to the Portal on a device you haven't set as trusted before or use a different browser, you'll be asked to enter a one-time password to verify your identity.

## Manage trusted devices

Reaching for your personal device and entering a one-time password every time you need to log in to your account can be a pain, especially if you usually sign in from the same device.

To bypass this process, check **Trust this device** before entering the 2FA code from your authentication app. 

<img
  src={require('./assets/portal-login-2fa-confirmation-trust-this-device-checkbox.png').default}
  alt=""
  style={{ width:550 }}
/>

A [**Trusted Devices**](https://portal.emnify.com/user-settings#trusted-devices) section should be visible on your [**User Settings**](https://portal.emnify.com/user-settings) page under [**Two-Factor Authentication**](https://portal.emnify.com/user-settings#two-factor-authentication).

<img
  src={require('./assets/portal-user-settings-trusted-devices.png').default}
  alt=""
/>

You can remove a device from your **Trusted Devices** by clicking the associated **Remove** button.

<img
  src={require('./assets/portal-user-settings-trusted-devices-remove-button.png').default}
  alt=""
/>

:::info
Your changes will be saved automatically. 
:::

## Disable two-factor authentication

If you want to disable 2FA, go to your [**User Settings**](https://portal.emnify.com/user-settings) page, find the [**Two-Factor Authentication**](https://portal.emnify.com/user-settings#two-factor-authentication) section, and click **Disable**.

<img
  src={require('./assets/portal-user-settings-2fa-disable-button.png').default}
  alt=""
/>

:::info
You can re-enable 2FA at any time.
:::
