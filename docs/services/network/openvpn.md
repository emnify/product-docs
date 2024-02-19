---
description: Overview and setup
last_update: 
  date: 11-04-2021
slug: /services/openvpn
---

# OpenVPN

emnify's communication platform hosts an OpenVPN service that allows you to establish a private network between a device and any remote client location.
The remote client can be on the application server or any machine that wants to access the device remotely (such as operational staff).

## IoT device requirements

Your IoT device doesn't need a private APN, OpenVPN software, or dynamic DNS resolution to use the OpenVPN service.
Through the emnify SIM, each device has a [static](/glossary#static-ip) [private IP address](/glossary#private-ip) that you can use to identify and address the device.

<!--This image is missing: OpenVPN.png -->
<!-- image caption: OpenVPN System Overview -->

At the same time, the IoT device can send data through the private tunnel to the IP address of the remote machine.

## Set up OpenVPN using the emnify Portal

The following steps are required to set up OpenVPN on your machine:

1. Log in to the [emnify Portal](https://portal.emnify.com/). 
1. Go to [**Device Policies**](https://portal.emnify.com/device-policies) and set the **Service Policy** to a VPN breakout region (for example, `eu-west-1 (VPN)`).
1. Then, navigate to [**Integrations**](https://portal.emnify.com/integrations) and find the [**Secure Connection**](https://portal.emnify.com/integrations#secure-connection) section. 
On the **OpenVPN** panel, click **Show Instructions**. 
1. Select your operating system and install the OpenVPN software.
1. Download and store the VPN configuration file for your region.
1. Create the `credentials.txt` file as instructed, using either your [user credentials](https://portal.emnify.com/user-settings) or your [organization ID](https://portal.emnify.com/organisation-settings/details) and [application token](https://portal.emnify.com/integrations#application-tokens) (recommended)
1. Follow the remaining steps in the Portal to start the OpenVPN application or service on your operating system.

:::warning
You can't use accounts with multi-factor authentication (MFA) enabled to authenticate the OpenVPN tunnel.
:::

:::tip
For more detailed instructions based on your operating system, please refer to the following knowledge base articles:

- [Linux](/integration-guides/openvpn-linux-ubuntu)
- [macOS](/integration-guides/openvpn-macos)
- [Windows](/integration-guides/openvpn-windows) 
:::
