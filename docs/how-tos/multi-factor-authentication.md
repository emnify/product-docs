---
description: How to set up multi-factor authentication on your emnify account
last_update: 
  date: 11-16-2023
slug: /how-tos/multi-factor-authentication
---

# Set up multi-factor authentication

Multi-factor authentication (MFA) is a security process that requires you to provide two or more pieces of evidence to verify your identity before accessing your emnify account.
These pieces of evidence (also known as factors) are typically numeric codes that are either sent to an email address or phone number by the emnify system or provided by a third-party authenticator app.

MFA enhances security by adding an extra layer of protection that makes it more difficult for unauthorized individuals to access your account.
Even if someone knows your password (the first factor), they would still need access to your second factor (for example, your phone or email account) to successfully log in.

MFA is sometimes called two-factor authentication (2FA) and has historically been at emnify.

:::warning important update
MFA will be mandatory for all emnify Portal accounts as of January 2024 to proactively safeguard our IoT ecosystem and meet regulatory security compliance.
For more information, see the [MFA FAQ in the emnify Knowledge Base](https://support.emnify.com/hc/en-us/articles/11119662291740-MFA-FAQ).
:::

## Supported methods

emnify supports the following MFA methods:

- **Email-based MFA** (default method when [enforced](#mandatory-enforcement))  
A one-time code or an authentication link is sent to the email address associated with the account.
- **Time-based one-time password (TOTP) MFA** (configured in the [Portal](#configure-totp-mfa-in-the-emnify-portal))  
One-time codes are generated using a [third-party authenticator app](#third-party-authenticator-apps) (for example, Google Authenticator) and entered during the login process.

As soon as one of these methods is enabled, you'll need to enter a one-time code to verify your identity if you log in to the Portal on a device you haven't [set as trusted](#manage-trusted-devices), use a different browser, or change your password.

## Mandatory enforcement

### Existing accounts

:::info
This process is only required if you haven't enabled MFA for your account.
[Configure TOTP MFA in the Portal](#configure-totp-mfa-in-the-emnify-portal) before it becomes mandatory to avoid any potential disruptions to your workflow.
:::

Once MFA becomes mandatory for your organization, follow these steps to access your account:

1. [Log in to your emnify account](https://portal.emnify.com/sign) with your email and password as usual.
1. Navigate to the email account you use to access the Portal. 
Open the message from emnify with your 6-digit verification code.
The code is valid for 20 minutes and should contain letters and numbers.
:::tip
Check your spam folder if you haven't received a code after a few minutes.
:::

1. Go back to the Portal. Enter the code and click **Verify code** to verify your identity.

<details className="custom-details-troubleshooting">
  <summary>Need help verifying your identity?</summary>
    <p>You may have issues verifying your identity once MFA becomes mandatory for your organization.</p>
    <p>Here are a few common error messages and what to do if you see them:</p>
    <b>This code is invalid. Try again.</b>
    <ul>
      <li>Re-enter your code and click <b>Verify code</b> again.</li>
      <li>Wait at least 20 minutes, and then click <b>Resend</b>. Enter the new verification code once you've received it.</li>
      <li>Still having trouble? Contact the <a href="https://docs.emnify.com/support">emnify support team</a>.</li>
    </ul>
    <b>This code is not valid anymore. Get a new one via email.</b>
    <ul>
      <li>Click <b>Resend</b> and enter the new verification code once you've received it.</li>
      <li>Still having trouble? Contact the <a href="https://docs.emnify.com/support">emnify support team</a>.</li>
    </ul>
    <b>Invalid code, your account will be locked after [number] of incorrect attempts.</b>
    <ul>
      <li>Re-enter your code and click <b>Verify code</b> again.</li>
      <li>Click <b>Resend</b> and enter the new verification code once you've received it.</li>
      <li>Still having trouble? Contact the <a href="https://docs.emnify.com/support">emnify support team</a>.</li>
    </ul>
    <b>You've reached the limit of failed authentication attempts. Please try again in 1 hour.</b>
    <ul>
      <li>Wait at least 60 minutes, and then try to log in again.</li>
      <li>If you've waited and the next attempt is blocked, contact the <a href="https://docs.emnify.com/support">emnify support team</a>.</li>
    </ul>
</details>

Assuming no errors, you'll be redirected to the **Dashboard** with a message that your account's MFA is now successfully enabled. 🎉

### New accounts

You don't need to set up MFA when creating a new account, as the sign up process requires you to validate your phone number (via SMS) and email address.
After you access your account, you can either [configure TOTP MFA in the Portal](#configure-totp-mfa-in-the-emnify-portal) or [set up email-based MFA](#existing-accounts) the next time you log in.

:::note
MFA isn't required if you're on the [Trial plan](/quickstart#emnifys-trial), but you can still [configure TOTP MFA](#configure-totp-mfa-in-the-emnify-portal) to secure your account.
:::

### Invited users

You don't need to set up MFA initially when you're invited to join an organization, as you'll be invited via email.
After you access your account, you can either [configure TOTP MFA in the Portal](#configure-totp-mfa-in-the-emnify-portal) or [set up email-based MFA](#existing-accounts) the next time you log in.

## Configure TOTP MFA in the emnify Portal

1. Log in to your [emnify account](https://portal.emnify.com/sign).
1. Navigate to [**User Settings**](https://portal.emnify.com/user-settings) by clicking on your avatar and selecting **User Settings** from the dropdown menu.
1. Find the [**Two-Factor Authentication**](https://portal.emnify.com/user-settings#two-factor-authentication) section and click **Enable**.
1. Enter your password to verify your identity, then click **Submit**.
1. Activate your device's temporary authentication key by scanning the QR code with a [third-party authenticator app](#third-party-authenticator-apps).
Alternatively, click **here** in the Portal text to reveal a secret key and add it to your app.
After you've scanned the QR code or entered the key, a 6-digit token appears in the app. 
1. Finally, return to the Portal and enter the token.

Assuming no errors, MFA is now enabled for your account. 🎉

### Third-party authenticator apps

A third-party authenticator app is an alternative way to receive your verification code.
Instead of receiving an email or SMS, these apps provide a randomly generated and frequently changing code that you can enter to verify your identity.

Popular third-party authenticator apps that you can use with your emnify account:

- [Authy](https://authy.com/download/)
- Google Authenticator ([Google Play Store](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&pli=1) or [App Store](https://apps.apple.com/us/app/google-authenticator/id388497605))
- [Microsoft Authenticator](https://www.microsoft.com/en/security/mobile-authenticator-app)

## Manage trusted devices

Reaching for your device and entering a one-time password every time you need to log in to your account can be a pain, especially if you usually sign in from the same device.
To bypass this process, select **Trust this device** before entering the MFA code from your authentication app.

Then, [**Trusted Devices**](https://portal.emnify.com/user-settings#trusted-devices) should be visible in the **Two-Factor Authentication** section of **User Settings**.
These devices remain trusted for 30 days.
After that, you'll need to verify your identity again.

To remove a device from **Trusted Devices**, click **Remove**.

:::note
Your changes are saved automatically.
:::

## Disable MFA

To turn off your existing MFA setup, go to **User Settings**, find the [**Two-Factor Authentication**](https://portal.emnify.com/user-settings#two-factor-authentication) section, and click **Disable**.

:::warning
You won't be able to disable MFA once it's enforced for your organization.
:::
