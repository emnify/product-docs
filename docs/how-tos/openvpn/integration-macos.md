---
description: Integration Guide for OpenVPN on MacOS
last_update: 
  date: 01-11-2024
pagination_next: /how-tos/openvpn-integration-windows
pagination_prev: /how-tos/openvpn-integration-linux
slug: /how-tos/openvpn-integration-macos
---

# OpenVPN Integration Guide for MacOS

emnify customers can create their own Virtual Private Network for their mobile IoT/M2M devices fitted with emnify SIMs.
Data traffic will be exchanged between the devices and the application server through an OpenVPN tunnel, enabling direct communication with the IPs of the mobile devices (no NAT applied).

The tunnel is established between the emnify Core Network and the customers VPN gateway or server.

See this video [guide for how to secure your devices with Open VPN](https://www.youtube.com/watch?v=yt44fJpfkQ4).

## Add mandatory layer of security and privacy

Any traffic exchanged with the mobile devices is encrypted before transmitted over the public internet, therefore adding an additional layer of security and privacy.
For that **no** VPN software needs to be installed on the device or any configuration changes to be done, the default emnify APN does also support VPN flows.


First, download the VPN config file from the emnify User Interface

1. Click on the "Integrations" menu
2. Scroll down to the "secure connection" section and download the configuration file

Additionally, you need to change the Internet Regional Breakout in the device policy:

1. Click on "Device Policies"
2. Scroll down to "Service Policies", select the policy assigned to the devices you want to secure and click on "Details".
3. On the "Internet Breakout Region" menu, set the Service Policy to a VPN breakout region, e.g., `eu-west-1 (VPN)`


## Setting Up OpenVPN Client with OpenVPN

Install OpenVPN, this can be done from Homebrew (https://formulae.brew.sh/formula/openvpn) using 
`brew install openvpn`

### Create the credentials file:
```
sudo touch /etc/openvpn/credentials.txt
sudo nano /etc/openvpn/credentials.txt
```

The `credentials.txt` file should contain OrgID and Application Token (preferred):

```
orgId
Application Token
```

or username and password: 

```
username@domain.com
YourPassword
```

Connect with the following command, passing the configuration file to openvpn using the `--config` option:

`sudo openvpn --config path/to/emnify-eu-west-1.conf`

## Setting Up OpenVPN Client with Tunnelblick

## Setup
Drop the configuration file onto the Tunnelblick icon in the topbar. Alternatively, via the settings panel in
**VPN Details -> Configurations** and drop the configuration file onto the *Configurations* list.
Tunnelblick will ask for a user password.
 

## Create credentials
In /etc/openvpn directory, create the credentials file.

```
sudo touch /etc/openvpn/credentials.txt
sudo nano /etc/openvpn/credentials.txt
```

To connect to the regions VPN, you will need to enter the password of your mac.

