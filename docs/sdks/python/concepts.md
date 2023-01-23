---
description: Must-knows for working with the Python SDK
---

# Concepts

## SDK Glossary

| Name      | Description |
| :-------- | :---------- |
| Device  | Any physical device supplied with a SIM that obtains connectivity. It's important not to mix up the terms 'Device' and 'Endpoint.' A device is a superset of the endpoint and SIM acting as a whole. [Learn more about devices](https://support.emnify.com/hc/en-us/sections/115000981005-Device-Configuration).  |
| Device Status  | Primary way to control connectivity. It can be either **Enabled** or **Disabled**. When **Enabled**, a device that has a SIM assigned can go online. On the other hand, when **Disabled**, the device doesn't get any service.  |
| SIM  | Represents a physical or eSIM issued by emnify. [Learn more about SIM cards](https://support.emnify.com/hc/en-us/sections/360000642374-SIM-cards).  |
| SIM Status  | Status of the SIM's phase in the [SIM lifecycle](https://www.emnify.com/blog/sim-lifecycle-management). When using the SDK, avoid changing the SIM status directly. Instead, change it using the device status.  |
| Tariff Profile  | Controls where and how your devices have coverage. Referred to as **Coverage Policy** in the Enterprise Portal. [Learn more about tariff profiles](https://cdn.emnify.net/api/doc/tariff-profile.html).  |
| Service Profile  | Defines available services (e.g., SMS, 4G, etc.) and traffic limits for a device. Referred to as **Service Policy** in the Enterprise Portal. [Learn more about service profiles](https://cdn.emnify.net/api/doc/service-profile.html).  |
| Blacklist Operators  | Method that allows you to restrict device connectivity to a specific operator or group of operators.  |
| Operator  | Underlying mobile network operator (MNO) used to provide connectivity. Explore operator coverage by country and region on [our pricing page](https://www.emnify.com/pricing).  |
| SMS  | [Learn more about SMS](../../services/sms).  |
| Application Token  | Authenticates your identity when using the emnify SDK and API. [Learn how to generate an application token](https://www.emnify.com/developer-blog/how-to-use-an-application-token-for-api-authentication).  |

:::tip
More terminology and definitions are available in the [Developer Glossary](/glossary). 
:::

