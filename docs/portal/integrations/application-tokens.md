---
description: Add or view existing application tokens on the Integrations page of the emnify Portal
last_update: 
  date: 01-31-2023
slug: /portal/application-tokens
---

# Application tokens

<!-- markdownlint-disable MD029 -->

To add or view existing application tokens, navigate to **Integrations** and then [**Application Tokens**](https://portal.emnify.com/integrations#application-tokens).

## Add a new token

1. Navigate to your [**Application Tokens**](https://portal.emnify.com/integrations#application-tokens). 
2. Select **Add First Token** or **Add Token**.
3. Add a **Description** and optionally add an **Expiry date** or **IP restriction**.

:::caution
While adding an expiration date and IP restriction are technically optional, it's highly recommended as an additional security measure.

If your token is compromised, the **IP restriction** helps limit the attacker's access, while having an **Expiry date** set means the token is short-lived and the attacker has no way to generate a new one.
:::

4. Select **Create Application Token**.
This generates your token.
5. Select **Copy Token** and save it in a secure location for future use.

:::danger
The token can only be copied during this session.
You can't retrieve it later in another session.
:::
