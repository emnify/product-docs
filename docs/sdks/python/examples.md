---
description: Code samples showing how to use the emnify python SDK
slug: /sdks/python/examples
---

# Examples

The following examples show you how to use the emnify Python SDK. 

The source code for each example is available in the [emnify-sdk-python GitHub repository](https://github.com/emnify/emnify-sdk-python/tree/main/docs/examples).

## 1 Example Table

| Example                             | Description  |
|---|---|
| [Get your first device online](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/mass_sim_activation.py)     |  Connect an emnify SIM to your device and configure the APN to access the internet. |
| [Initialization of the SDK client](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py#L6) |  Initialize the SDK using the specific app token. |
| [Create and activate a device](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py#L12)    |   |
| [Configure a device](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py#L51)               |        Possibility to configure attributes, such as the tag and the name of the device.       |
| [Configure operator blocklist for device](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py#L69) |  You may want to refrain from using a specific operator to avoid incurring costs with the device.  |
| [Disable device](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py#L95) |  With a specific ID. |
| [Delete device](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py#L114)  |  With a specific ID.  |
| [Filtering and sorting](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/filtering_and_sorting.py) | To perform certain tasks, as  <ul><li>finding all SIMs for a specific customer organization</li><li>sorts all devices by the last updated date</li></ul>    |
| [Manage device connectivity](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py#L143)  | To reset device's data connectivity or the network connectivity. <br /> [Connectivity troubleshooting](https://www.emnify.com/developer-blog/5-ways-to-detect-and-solve-connectivity-issues#network-events) |
