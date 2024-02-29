"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[5469],{3403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(5893),o=n(1151);const r={description:"How to set up multi-factor authentication on your emnify account",last_update:{date:"11-16-2023"},slug:"/how-tos/multi-factor-authentication"},a="Set up multi-factor authentication",s={id:"how-tos/multi-factor-authentication",title:"Set up multi-factor authentication",description:"How to set up multi-factor authentication on your emnify account",source:"@site/docs/how-tos/multi-factor-authentication.md",sourceDirName:"how-tos",slug:"/how-tos/multi-factor-authentication",permalink:"/pr-preview/pr-284/how-tos/multi-factor-authentication",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1700092800,formattedLastUpdatedAt:"Nov 16, 2023",frontMatter:{description:"How to set up multi-factor authentication on your emnify account",last_update:{date:"11-16-2023"},slug:"/how-tos/multi-factor-authentication"},sidebar:"mainDocsSidebar",previous:{title:"Manage data or SMS quotas",permalink:"/pr-preview/pr-284/how-tos/manage-data-sms-quotas"},next:{title:"Microsoft Active Directory",permalink:"/pr-preview/pr-284/sso/microsoft-active-directory"}},c={},d=[{value:"Supported methods",id:"supported-methods",level:2},{value:"Mandatory enforcement",id:"mandatory-enforcement",level:2},{value:"Existing accounts",id:"existing-accounts",level:3},{value:"New accounts",id:"new-accounts",level:3},{value:"Invited users",id:"invited-users",level:3},{value:"Configure TOTP MFA in the emnify Portal",id:"configure-totp-mfa-in-the-emnify-portal",level:2},{value:"Third-party authenticator apps",id:"third-party-authenticator-apps",level:3},{value:"Manage trusted devices",id:"manage-trusted-devices",level:2},{value:"Disable MFA",id:"disable-mfa",level:2}];function l(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"set-up-multi-factor-authentication",children:"Set up multi-factor authentication"}),"\n",(0,i.jsx)(t.p,{children:"Multi-factor authentication (MFA) is a security process that requires you to provide two or more pieces of evidence to verify your identity before accessing your emnify account.\nThese pieces of evidence (also known as factors) are typically numeric codes that are either sent to an email address or phone number by the emnify system or provided by a third-party authenticator app."}),"\n",(0,i.jsx)(t.p,{children:"MFA enhances security by adding an extra layer of protection that makes it more difficult for unauthorized individuals to access your account.\nEven if someone knows your password (the first factor), they would still need access to your second factor (for example, your phone or email account) to successfully log in."}),"\n",(0,i.jsx)(t.p,{children:"MFA is sometimes called two-factor authentication (2FA) and has historically been at emnify."}),"\n",(0,i.jsx)(t.admonition,{title:"important update",type:"warning",children:(0,i.jsxs)(t.p,{children:["MFA will be mandatory for all emnify Portal accounts as of January 2024 to proactively safeguard our IoT ecosystem and meet regulatory security compliance.\nFor more information, see the ",(0,i.jsx)(t.a,{href:"https://support.emnify.com/hc/en-us/articles/11119662291740-MFA-FAQ",children:"MFA FAQ in the emnify Knowledge Base"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"supported-methods",children:"Supported methods"}),"\n",(0,i.jsx)(t.p,{children:"emnify supports the following MFA methods:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Email-based MFA"})," (default method when ",(0,i.jsx)(t.a,{href:"#mandatory-enforcement",children:"enforced"}),")",(0,i.jsx)(t.br,{}),"\n","A one-time code or an authentication link is sent to the email address associated with the account."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Time-based one-time password (TOTP) MFA"})," (configured in the ",(0,i.jsx)(t.a,{href:"#configure-totp-mfa-in-the-emnify-portal",children:"Portal"}),")",(0,i.jsx)(t.br,{}),"\n","One-time codes are generated using a ",(0,i.jsx)(t.a,{href:"#third-party-authenticator-apps",children:"third-party authenticator app"})," (for example, Google Authenticator) and entered during the login process."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["As soon as one of these methods is enabled, you'll need to enter a one-time code to verify your identity if you log in to the Portal on a device you haven't ",(0,i.jsx)(t.a,{href:"#manage-trusted-devices",children:"set as trusted"}),", use a different browser, or change your password."]}),"\n",(0,i.jsx)(t.h2,{id:"mandatory-enforcement",children:"Mandatory enforcement"}),"\n",(0,i.jsx)(t.h3,{id:"existing-accounts",children:"Existing accounts"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["This process is only required if you haven't enabled MFA for your account.\n",(0,i.jsx)(t.a,{href:"#configure-totp-mfa-in-the-emnify-portal",children:"Configure TOTP MFA in the Portal"})," before it becomes mandatory to avoid any potential disruptions to your workflow."]})}),"\n",(0,i.jsx)(t.p,{children:"Once MFA becomes mandatory for you, follow these steps to access your account:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://portal.emnify.com/sign",children:"Log in to your emnify account"})," with your email and password as usual."]}),"\n",(0,i.jsx)(t.li,{children:"Navigate to the email account you use to access the Portal.\nOpen the message from emnify with your 6-digit verification code.\nThe code is valid for 20 minutes and should contain letters and numbers."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Check your spam folder if you haven't received a code after a few minutes."})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Go back to the Portal. Enter the code and click ",(0,i.jsx)(t.strong,{children:"Verify code"})," to verify your identity."]}),"\n"]}),"\n",(0,i.jsxs)(n,{className:"custom-details-troubleshooting",children:[(0,i.jsx)("summary",{children:"Need help verifying your identity?"}),(0,i.jsx)("p",{children:"You may have issues verifying your identity once MFA becomes mandatory."}),(0,i.jsx)("p",{children:"Here are a few common error messages and what to do if you see them:"}),(0,i.jsx)("b",{children:"This code is invalid. Try again."}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["Re-enter your code and click ",(0,i.jsx)("b",{children:"Verify code"})," again."]}),(0,i.jsxs)("li",{children:["Wait at least 20 minutes, and then click ",(0,i.jsx)("b",{children:"Resend"}),". Enter the new verification code once you've received it."]}),(0,i.jsxs)("li",{children:["Still having trouble? Contact the ",(0,i.jsx)("a",{href:"https://docs.emnify.com/support",children:"emnify support team"}),"."]})]}),(0,i.jsx)("b",{children:"This code is not valid anymore. Get a new one via email."}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["Click ",(0,i.jsx)("b",{children:"Resend"})," and enter the new verification code once you've received it."]}),(0,i.jsxs)("li",{children:["Still having trouble? Contact the ",(0,i.jsx)("a",{href:"https://docs.emnify.com/support",children:"emnify support team"}),"."]})]}),(0,i.jsx)("b",{children:"Invalid code, your account will be locked after [number] of incorrect attempts."}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["Re-enter your code and click ",(0,i.jsx)("b",{children:"Verify code"})," again."]}),(0,i.jsxs)("li",{children:["Click ",(0,i.jsx)("b",{children:"Resend"})," and enter the new verification code once you've received it."]}),(0,i.jsxs)("li",{children:["Still having trouble? Contact the ",(0,i.jsx)("a",{href:"https://docs.emnify.com/support",children:"emnify support team"}),"."]})]}),(0,i.jsx)("b",{children:"You've reached the limit of failed authentication attempts. Please try again in 1 hour."}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Wait at least 60 minutes, and then try to log in again."}),(0,i.jsxs)("li",{children:["If you've waited and the next attempt is blocked, contact the ",(0,i.jsx)("a",{href:"https://docs.emnify.com/support",children:"emnify support team"}),"."]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Assuming no errors, you'll be redirected to the ",(0,i.jsx)(t.strong,{children:"Dashboard"})," with a message that your account's MFA is now successfully enabled. \ud83c\udf89"]}),"\n",(0,i.jsx)(t.h3,{id:"new-accounts",children:"New accounts"}),"\n",(0,i.jsxs)(t.p,{children:["You don't need to set up MFA when creating a new account, as the sign up process requires you to validate your phone number (via SMS) and email address.\nAfter you access your account, you can either ",(0,i.jsx)(t.a,{href:"#configure-totp-mfa-in-the-emnify-portal",children:"configure TOTP MFA in the Portal"})," or ",(0,i.jsx)(t.a,{href:"#existing-accounts",children:"set up email-based MFA"})," the next time you log in."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["MFA isn't required if you're on the ",(0,i.jsx)(t.a,{href:"/quickstart#emnifys-trial",children:"Trial plan"}),", but you can still ",(0,i.jsx)(t.a,{href:"#configure-totp-mfa-in-the-emnify-portal",children:"configure TOTP MFA"})," to secure your account."]})}),"\n",(0,i.jsx)(t.h3,{id:"invited-users",children:"Invited users"}),"\n",(0,i.jsxs)(t.p,{children:["You don't need to set up MFA initially when you're invited to join a Workspace, as you'll be invited via email.\nAfter you access your account, you can either ",(0,i.jsx)(t.a,{href:"#configure-totp-mfa-in-the-emnify-portal",children:"configure TOTP MFA in the Portal"})," or ",(0,i.jsx)(t.a,{href:"#existing-accounts",children:"set up email-based MFA"})," the next time you log in."]}),"\n",(0,i.jsx)(t.h2,{id:"configure-totp-mfa-in-the-emnify-portal",children:"Configure TOTP MFA in the emnify Portal"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Log in to your ",(0,i.jsx)(t.a,{href:"https://portal.emnify.com/sign",children:"emnify account"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Navigate to ",(0,i.jsx)(t.a,{href:"https://portal.emnify.com/user-settings",children:(0,i.jsx)(t.strong,{children:"User Settings"})})," by clicking on your avatar and selecting ",(0,i.jsx)(t.strong,{children:"User Settings"})," from the dropdown menu."]}),"\n",(0,i.jsxs)(t.li,{children:["Find the ",(0,i.jsx)(t.a,{href:"https://portal.emnify.com/user-settings#two-factor-authentication",children:(0,i.jsx)(t.strong,{children:"Two-Factor Authentication"})})," section and click ",(0,i.jsx)(t.strong,{children:"Enable"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Enter your password to verify your identity, then click ",(0,i.jsx)(t.strong,{children:"Submit"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Activate your device's temporary authentication key by scanning the QR code with a ",(0,i.jsx)(t.a,{href:"#third-party-authenticator-apps",children:"third-party authenticator app"}),".\nAlternatively, click ",(0,i.jsx)(t.strong,{children:"here"})," in the Portal text to reveal a secret key and add it to your app.\nAfter you've scanned the QR code or entered the key, a 6-digit token appears in the app."]}),"\n",(0,i.jsx)(t.li,{children:"Finally, return to the Portal and enter the token."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Assuming no errors, MFA is now enabled for your account. \ud83c\udf89"}),"\n",(0,i.jsx)(t.h3,{id:"third-party-authenticator-apps",children:"Third-party authenticator apps"}),"\n",(0,i.jsx)(t.p,{children:"A third-party authenticator app is an alternative way to receive your verification code.\nInstead of receiving an email or SMS, these apps provide a randomly generated and frequently changing code that you can enter to verify your identity."}),"\n",(0,i.jsx)(t.p,{children:"Popular third-party authenticator apps that you can use with your emnify account:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://authy.com/download/",children:"Authy"})}),"\n",(0,i.jsxs)(t.li,{children:["Google Authenticator (",(0,i.jsx)(t.a,{href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&pli=1",children:"Google Play Store"})," or ",(0,i.jsx)(t.a,{href:"https://apps.apple.com/us/app/google-authenticator/id388497605",children:"App Store"}),")"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.microsoft.com/en/security/mobile-authenticator-app",children:"Microsoft Authenticator"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"manage-trusted-devices",children:"Manage trusted devices"}),"\n",(0,i.jsxs)(t.p,{children:["Reaching for your device and entering a one-time password every time you need to log in to your account can be a pain, especially if you usually sign in from the same device.\nTo bypass this process, select ",(0,i.jsx)(t.strong,{children:"Trust this device"})," before entering the MFA code from your authentication app."]}),"\n",(0,i.jsxs)(t.p,{children:["Then, ",(0,i.jsx)(t.a,{href:"https://portal.emnify.com/user-settings#trusted-devices",children:(0,i.jsx)(t.strong,{children:"Trusted Devices"})})," should be visible in the ",(0,i.jsx)(t.strong,{children:"Two-Factor Authentication"})," section of ",(0,i.jsx)(t.strong,{children:"User Settings"}),".\nThese devices remain trusted for 30 days.\nAfter that, you'll need to verify your identity again."]}),"\n",(0,i.jsxs)(t.p,{children:["To remove a device from ",(0,i.jsx)(t.strong,{children:"Trusted Devices"}),", click ",(0,i.jsx)(t.strong,{children:"Remove"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Your changes are saved automatically."})}),"\n",(0,i.jsx)(t.h2,{id:"disable-mfa",children:"Disable MFA"}),"\n",(0,i.jsxs)(t.p,{children:["To turn off your existing MFA setup, go to ",(0,i.jsx)(t.strong,{children:"User Settings"}),", find the ",(0,i.jsx)(t.a,{href:"https://portal.emnify.com/user-settings#two-factor-authentication",children:(0,i.jsx)(t.strong,{children:"Two-Factor Authentication"})})," section, and click ",(0,i.jsx)(t.strong,{children:"Disable"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"You won't be able to disable MFA once it's enforced."})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var i=n(7294);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);