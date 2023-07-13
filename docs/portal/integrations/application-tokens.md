---
description: Add or view existing application tokens on the Integrations page of the emnify Portal
slug: /portal/application-tokens
---

# Application tokens

To add or view existing [application tokens](/glossary#application-tokens), navigate to [**Integrations**](https://portal.emnify.com/integrations) and scroll down to [**Application Tokens**](https://portal.emnify.com/integrations#application-tokens).

## Add a new token

1. Select **Add First Token** or **Add Token**.
2. Add a **Description** and optionally add an **Expiry date** or **IP restriction**.

:::caution
While adding an expiration date and IP restriction are technically optional, it's **_highly recommended_** as an additional security measure.

If your token is compromised, the **IP restriction** helps limit the attacker's access, while having an **Expiry date** set means the token is short-lived and the attacker has no way to generate a new one.
:::

3. Select **Create Application Token**.
4. Select **Copy Token** and paste it into a secure location for future use.

<details className="custom-details-troubleshooting">
  <summary>Show me how to add a new token in the Portal</summary>

  Collapse the following sections or scroll down to **Application Tokens**.  
  <img
    src={require('./assets/integrations-application-tokens.png').default}
    alt=""
  /> 

  Select **Add Token** or **Add First Token**.  

  <img
    src={require('./assets/application-tokens-add-first-token.png').default}
    alt=""
  /> 

  After choosing a descriptive label and optionally adding an **Expiry date** or **IP restriction**, select **Create Application Token**.  

  <img
    src={require('./assets/application-tokens-add-token-dialog.png').default}
    alt=""
  /> 

  Your token will then be generated.
  Select **Copy Token** and paste it in a secure location for future use.

  **Warning**: The token can only be copied during this session.
  You cannot retrieve it later in another session.

  <img
    src={require('./assets/token-created.png').default}
    alt=""
  /> 
</details>
