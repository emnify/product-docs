---
description: Must-knows for working with the emnify SDKs
slug: /sdks/concepts
---

# Concepts

## SDK glossary

| Name      | Description |
| :-------- | :---------- |
| Device  | Any physical device supplied with a SIM that obtains connectivity. It's important not to mix up the terms 'Device' and 'Endpoint.' A device is a superset of the endpoint and SIM acting as a whole. [Learn more about devices](/quickstart/create-device).  |
| Device status  | Primary way to control connectivity. It can be either **Enabled** or **Disabled**. When **Enabled**, a device that has a SIM assigned can go online. On the other hand, when **Disabled**, the device doesn't get any service.  |
| SIM  | Represents a physical or eSIM issued by emnify. [Learn more about SIMs](/services/global-iot-sim).  |
| SIM status  | Status of the SIM's phase in the [SIM lifecycle](/services/sim-lifecycle-management). When using the SDK, avoid changing the SIM status directly. Instead, change it using the device status.  |
| Tariff profile  | Controls where and how your devices have coverage. Referred to as **coverage profiles** in the emnify Portal. [Learn more about tariff profiles](https://cdn.emnify.net/api/doc/tariff-profile.html).  |
| Service profile  | Defines available services (for example, SMS, 4G, etc.) and usage for a device. Referred to as a **service policy** in the Portal. [Learn more about service profiles](https://cdn.emnify.net/api/doc/service-profile.html).  |
| Blacklist operators  | Method that allows you to restrict device connectivity to a specific operator or group of operators. Referred to as **networks blocklist** in the Portal.  |
| Operator  | Underlying mobile network operator (MNO) used to provide connectivity. Referred to as a **network** in the Portal. Explore network coverage by country and region on [emnify's pricing page](https://www.emnify.com/pricing).  |
| SMS  | [Learn more about SMS](/services/sms).  |
| Application token  | Authenticates your identity when using the emnify SDK and API. [Learn how to generate an application token](/rest/authentication#authenticate-with-an-application-token).  |

:::tip
More terminology and definitions are available in the [Glossary](/glossary).
:::
