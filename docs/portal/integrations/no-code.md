---
description: Setup no-code workflows via Zapier, SMS, as well as event or application triggers in the emnify Portal
pagination_next: portal/integrations/application-tokens
slug: /portal/no-code
---

# No-code workflows

Zapier is a service that allows you to connect more than 4000 applications—including emnify—to automate workflows.

With the available integrations, you can automate device provisioning between emnify and your application.
For example, you can send a configuration SMS to set the proper APN when the device connects for the first time.
Other use cases are scheduled or application-triggered SIM activations/deactivations so that the SIM contract starts and ends with the device subscription of your customers.

:::tip
To learn more about using Zapier and emnify for automating your workflows, see [How to Automate Workflows With Zapier and emnify in 5 Minutes](https://www.emnify.com/developer-blog/emnify-zapier-nocode).
:::

The following events are available as triggers:

- All events in the Data Streamer
- Device enabled (SIM activated)
<!-- vale Google.WordList = NO -->
<!-- 'disabled' is part of the trigger name -->
- Device disabled (SIM deactivated)
<!-- vale Google.WordList = YES -->
- Usage Limit Reached

The following actions are available:

- Send SMS to device
- Create a device (SIM configuration)
- Enable a device (SIM activation)
- Block current network (add the last tried network to the blocklist)
- Reconfigure a device
- Disable a device

Using the Zapier webhook, you can also use triggers from:

- SMS delivered notification
- [Mobile originated SMS (SMS MO)](/glossary#sms-mo)

:::info
Browse the available workflows in the emnify Portal by navigating to the [**No-Code Workflows**](https://portal.emnify.com/integrations#no-code-workflows) section of the [**Integrations**](https://portal.emnify.com/integrations) page.
:::
