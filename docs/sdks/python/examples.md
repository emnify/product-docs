---
description: Code samples showing how to use the emnify python SDK
slug: /sdks/python/examples
---

# Examples

This guide shows a listing of the main examples to get devices online including subtasks, such as registering a SIM, creating, configuring or deleting a device.

## 1 Example Table

| Task                             | Description   | Link |
|---|---|---|
| Get your first device online     |   Follow these steps to get your devices online. The example demonstrates complex operations, such as: <ul><li>Device policies</li><li>SIM registration</li><li>Device creation</li><li>SIM assignment</li><li>Error handling</li><li>Device details retrieval</li><li>Device activation or deactivation</li></ul>|  [Source code](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/mass_sim_activation.py)  |
| Initialization of the SDK client |        Initialization using the specific app token.      | [Source code](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py) |
| Create and activate a device     |   <ul><li>Device creation</li><li>SIM registration</li><li>SIMs listing</li><li>Device details retrieval</li><li>Device activation or deactivation</li></ul> | [Source code](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py)  |
| Configure a device               |        Possibility to configure attributes, such as the tag and the name of the device.       |  [Source code](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py) |
| Configure operator blocklist for device |  You may want to refrain from using a specific operator to avoid incurring costs with the device.  |  [Source code](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py)  |
| Disable device |  With a specific ID. | [Source code](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py)  |
| Delete device  |  With a specific ID.  |  [Source code](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py) |
| Filtering and sorting | To perform certain tasks, as  <ul><li>finding all SIMs for a specific customer organization</li><li>sorts all devices by the last updated date</li></ul>    | [Source code](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/filtering_and_sorting.py)  |
| Manage device connectivity | To reset device's data connectivity or the network connectivity. <br /> [Connectivity troubleshooting](https://www.emnify.com/developer-blog/5-ways-to-detect-and-solve-connectivity-issues#network-events) | [Source code](https://github.com/emnify/emnify-sdk-python/blob/main/docs/examples/device_lifecycle_management.py)  |

