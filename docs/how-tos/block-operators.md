---
description: How to block operators on specific devices using the emnify Portal
last_update: 
  date: 01-31-2024
slug: /how-tos/block-operators
---

# Block operators on specific devices

emnify's mobile core network manages the network selection from the network side in conjunction with the SIM settings.
It has a global view of the available radio networks, their supported features, and live network status.
This view helps temporarily or permanently steer SIMs away from 'low signal quality' networks and to the networks with the strongest signal.

The manual carrier switching can be done in two ways:

- Select the preferred operator in the device's menu.
- Block other operators using the emnify Portal.

:::info
Adding a network to the **Blocked Operators** list doesn't prevent your devices from trying to connect to those networks.
You still see the attempts in the **Events** tab, but emnify's mobile core rejects any connection attempt.
You should only use this feature to solve technical issues associated with specific operators.
:::

## Individual device

### Block an operator

1. [Log in to your emnify account](https://portal.emnify.com/sign).
1. Navigate to the **Connected Devices** table.
1. Find the device where you wish to block an operator and click **Details**.
1. Locate the **Blocked Operators** section and click **Edit**.
1. Select the operator you want to block.

Changes save automatically.

### Remove an operator from the blocklist

1. [Log in to your emnify account](https://portal.emnify.com/sign).
1. Navigate to the **Connected Devices** table.
1. Find the device with the blocked operator and click **Details**.
1. Locate the **Blocked Operators** section and click **Edit**.
1. Click the **X** next to the blocked operator you wish to remove.

## Multiple devices in bulk

It's also possible to select several devices on the Portal and update the blocked operators list for all of them simultaneously.

1. [Log in to your emnify account](https://portal.emnify.com/sign).
1. Navigate to the **Connected Devices** table.
1. Search for the devices where you wish to block an operator and select the checkbox next to every relevant device.
1. A new menu at the top of the page provides bulk operations.
Select **More** and then **Block Operators**.
1. Select the operator you want to block for these devices.
