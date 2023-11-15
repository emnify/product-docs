---
description: How to set up multi-factor authentication on your emnify account
last_update: 
  date: 11-15-2023
pagination_next: null
pagination_prev: null
slug: /how-tos/multi-factor-authentication
---

# Set up multi-factor authentication

Multi-factor authentication (MFA) is a security process that requires you to provide two or more pieces of evidence to verify your identity before accessing your emnify account.
These pieces of evidence (also known as factors) are typically numeric codes that are either sent to an email address or phone number by the emnify system or provided by a third-party authenticator app.

MFA enhances security by adding an extra layer of protection that makes it more difficult for unauthorized individuals to access your account.
Even if someone knows your password (the first factor), they would still need access to your second factor (for example, your phone or email account) to successfully log in.

MFA is sometimes referred to as two-factor authentication (2FA) and has historically been at emnify.

:::caution important update
To proactively safeguard our IoT ecosystem and meet regulatory security compliance, **MFA will be mandatory for all emnify Portal accounts as of January 2024**.
Refer to the [MFA FAQ in the emnify Knowledge Base](https://support.emnify.com/hc/en-us/articles/11119662291740-MFA-FAQ) for more information and the enforcement timeline for existing accounts.
:::

## Supported MFA methods

emnify supports the following MFA methods:

- **Email-based MFA** (default method)  
A one-time code or a authentication link is sent to the email address associated with the account.
- **Time-based one-time password (TOTP) MFA**  
One-time codes are generated using a [third-party authenticator app](#third-party-authenticator-apps) (for example, Google Authenticator) and entered during the login process.

## Configure MFA in the emnify Portal

1. Log in to your [emnify account](https://portal.emnify.com/sign).
1. Navigate to [**User Settings**](https://portal.emnify.com/user-settings) by clicking on your avatar and selecting **User Settings** from the dropdown menu.
1. Find the [**Two-Factor Authentication**](https://portal.emnify.com/user-settings#two-factor-authentication) section and click **Enable**.
<img
  src={require('./assets/portal-user-settings-2fa-enable-button.png').default}
  alt=""
/>

1. Enter your password to verify your identity then click **Submit**.
1. Activate your personal device's temporary authentication key by scanning the QR code with a [third-party authenticator app](#third-party-authenticator-apps).
Alternatively, you can copy the secret key to add it manually.
After you've scanned the QR code or entered the key, a 6-digit token appears in the app. 
Finally, enter the token.
<img
  src={require('./assets/portal-user-settings-2fa-activate-key.png').default}
  alt=""
/>

Assuming there are no errors, MFA should be enabled for your account. 🎉

Now, if you log in to the Portal on a device you haven't [set as trusted](#manage-trusted-devices) before or use a different browser, you'll be asked to enter a one-time code to verify your identity.

### MFA enforcement for existing accounts

Once MFA becomes mandatory for your organization, you'll receive an email with a verification code the next time you log in to the Portal.

Follow these steps to access your account:

1. [Log in to your emnify account](https://portal.emnify.com/sign) with your email and password as usual.
1. Navigate to the email account you use to access the emnify Portal. 
Open the message from emnify with your verification code.
:::tip
This code will be valid for 20 minutes.
If you haven't received a code after a couple of minutes, check your spam folder.
:::

1. Go back to the Portal. Enter the code and click **Verify code** to verify your identity.

<details className="custom-details-troubleshooting">
  <summary>Need help verifying your identity?</summary>
    <p>Once MFA becomes mandatory for your organization, you may have issues verifying your identity.</p>
    <p>Here are a few common error messages and what to do if you see them:</p>
    <b>This code is invalid. Try again.</b>
    <ul>
      <li>Re-enter your code and click <b>Verify code</b> again.</li>
      <li>Wait at least 20 minutes, and then click <b>Resend</b>. Enter the new verification code once you've received it.</li>
      <li>Still having trouble? <a href="https://docs.emnify.com/support">Contact the emnify support team</a>.</li>
    </ul>
    <b>This code is not valid anymore. Get a new one via email.</b>
    <ul>
      <li>Click <b>Resend</b> and enter the new verification code once you've received it.</li>
      <li>Still having trouble? <a href="https://docs.emnify.com/support">Contact the emnify support team</a>.</li>
    </ul>
    <b>Invalid code, your account will be locked after [number] of incorrect attempts.</b>
    <ul>
      <li>Re-enter your code and click <b>Verify code</b> again.</li>
      <li>Click <b>Resend</b> and enter the new verification code once you've received it.</li>
      <li>Still having trouble? <a href="https://docs.emnify.com/support">Contact the emnify support team</a>.</li>
    </ul>
    <b>You've reached the limit of failed authentication attemps. Please try again in 1 hour.</b>
    <ul>
      <li>Wait at least 60 minutes, and then try to log in again.</li>
      <li>If you've waited and the next attempt is also blocked, <a href="https://docs.emnify.com/support">contact the emnify support team</a>.</li>
    </ul>
</details>

Assuming there are no errors, you'll be directed to the **Dashboard** with a message that MFA  was successfully enabled for your account. 🎉

Now, if you log in to the Portal on a device you haven't [set as trusted](#manage-trusted-devices) before or use a different browser, you'll be asked to enter a one-time code to verify your identity.

### Third-party authenticator apps

A third-party authenticator app is an alternative way to receive your verification code.
Instead of receiving an email or SMS, these apps provide a randomly generated and frequently changing code that you can enter to verify your identity.

Popular third-party authenticator apps that you can use with your emnify account:

- [Authy](https://authy.com/download/)
- Google Authenticator ([Google Play Store](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&pli=1) or [App Store](https://apps.apple.com/us/app/google-authenticator/id388497605))
- [Microsoft Authenticator](https://www.microsoft.com/en/security/mobile-authenticator-app)

## Manage trusted devices

Reaching for your personal device and entering a one-time password every time you need to log in to your account can be a pain, especially if you usually sign in from the same device.

To bypass this process, select **Trust this device** before entering the MFA code from your authentication app.

<img
  src={require('./assets/portal-login-2fa-confirmation-trust-this-device-checkbox.png').default}
  alt=""
  style={{ width:550 }}
/>

Then, [**Trusted Devices**](https://portal.emnify.com/user-settings#trusted-devices) should be visible in the **Two-Factor Authentication** section of **User Settings**.
Click **Remove** to remove a device from **Trusted Devices**.

<img
  src={require('./assets/portal-user-settings-trusted-devices-remove-button.png').default}
  alt=""
/>

:::info
Your changes are saved automatically.
:::

## Disable MFA

To turn off your existing MFA setup, go to **User Settings**, find the [**Two-Factor Authentication**](https://portal.emnify.com/user-settings#two-factor-authentication) section, and click **Disable**.

<img
  src={require('./assets/portal-user-settings-2fa-disable-button.png').default}
  alt=""
/>

:::info
You can turn on MFA again at any time.
:::