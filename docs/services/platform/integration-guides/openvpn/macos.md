---
description: Step-by-step guide for integrating OpenVPN on macOS to use on devices with emnify eSIMs.
last_update: 
  date: 11-24-2022
pagination_label: OpenVPN on macOS
sidebar_label: macOS
slug: /integration-guides/openvpn-macos
---

# Integrate OpenVPN on macOS

Using emnify, you can create a [virtual private network (VPN)](/glossary#vpn) for your mobile IoT/M2M devices fitted with emnify SIMs.
Data traffic is exchanged between the devices and the application server through an OpenVPN tunnel, enabling direct communication with the IPs of the mobile devices (no NAT applied).

The tunnel is established between the emnify Core Network and the customer's VPN gateway or server.

:::tip
The [Cellular IoT University: Secure your devices with OpenVPN video](https://www.youtube.com/watch?v=yt44fJpfkQ4) provides a step-by-step walk-through.
:::

## Required preparation in the emnify Portal

Any traffic exchanged with mobile devices is encrypted before being transmitted over the public internet, which adds an additional layer of security and privacy.
No VPN software needs to be installed on the device, or there aren't any required configuration changes necessary.
The default emnify APN also supports VPN flows.

### Download the VPN configuration file

1. [Log in to your emnify account](https://portal.emnify.com/sign).
1. Navigate to **Integrations** and find the [**Secure Connection**](https://portal.emnify.com/integrations#secure-connection) section.
1. Under **OpenVPN**, select **Show instructions**.
1. Make sure you're on the **macOS** tab, then click **Download client.ovpn**.
Select the desired region or choose **Download all regions**.

Once downloaded, store that file on your server in the folder `/etc/openvpn`.

## Set up with OpenVPN

### Install the OpenVPN software

First, install OpenVPN via [Homebrew](https://formulae.brew.sh/formula/openvpn):

```bash
brew install openvpn
```

### Create the credentials file

```bash
sudo touch /etc/openvpn/credentials.txt
sudo nano /etc/openvpn/credentials.txt
```

The `credentials.txt` file should contain OrgID and Application Token (preferred):

```txt
orgId
Application Token
```

Alternatively, you can use your username and password:

```txt
username@domain.com
YourPassword
```

Connect with the following command, passing the configuration file to OpenVPN using the `--config` option:

```bash
sudo openvpn --config path/to/emnify-eu-west-1.conf
```

## Set up with Tunnelblick

Drop the configuration file onto the Tunnelblick icon in the top bar.
Alternatively, drop the configuration file onto the **Configurations** list via the settings panel in
**VPN Details <span aria-label="and then">></span> Configurations**.
Tunnelblick asks for a user password.

### Create credentials

In the `/etc/openvpn` directory, create the credentials file:

```bash
sudo touch /etc/openvpn/credentials.txt
sudo nano /etc/openvpn/credentials.txt
```

:::note
To connect to the regions VPN, you need to enter your Mac's password.
:::