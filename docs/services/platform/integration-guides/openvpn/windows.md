---
description: Step-by-step guide for integrating OpenVPN on Windows to use on devices with emnify eSIMs.
last_update: 
  date: 01-11-2024
pagination_label: OpenVPN on Windows
sidebar_label: Windows
slug: /integration-guides/openvpn-windows
---

# Integrate OpenVPN on Windows

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
1. Make sure you're on the **Windows** tab, then click **Download client.ovpn**.
Select the desired region or choose **Download all regions**.

Once downloaded, store that file on your server in the folder `\OpenVPN\config`.

### Change the internet breakout region

1. Navigate to [**Device Policies**](https://portal.emnify.com/device-policies) in the emnify Portal.
1. In the **Service Policies** section, select the policy assigned to the devices you want to secure and click **Details**.
1. Under **Internet Breakout Region**, set the service policy to a VPN breakout region (for example, `eu-west-1 (VPN)`).

## Set up the OpenVPN client on Windows

### Install the OpenVPN software

Download the installation file according to your Windows machine at [OpenVPN Downloads](https://openvpn.net/community-downloads/).  

The pre-built configuration file's name is one of the following:

- `emnify-eu-west-1.ovpn` 
- `emnify-eu-east-1.ovpn`
- `emnify-ap-southeast-1.ovpn`  

Store that file in your server in the folder `\OpenVPN\config`.

### Create credentials for authentication

Next, create a file titled `credentials.txt` in the folder `\OpenVPN\config`.  
This file contains the information to authenticate your session via emnify user credentials or with an application token (recommended).

#### Authentication with user credentials

The contents of the `credentials.txt` file should only have two lines as follows:

```txt
username@domain.com
YourPassword
```

#### Authentication with an application token

When you run the OpenVPN client on a VPN gateway or application server, it's recommended to use a dedicated application token.  
In that case, the first line in the `credentials.txt` file must contain your emnify organization identifier and the application token instead of the password.  

You can create application tokens in the emnify Portal.
For instructions, see [Application tokens](/portal/application-tokens).

Once created, copy the token into the credentials file.
The content of the credentials file would then look like this:

```txt
orgId
ApplicationToken
```

#### Correct the credentials path

Find the following line in `client.ovpn` and insert the complete path from `credentials.txt`:  

```txt
auth-user-pass "(...)\\OpenVPN\\config\\credentials.txt"
```

:::note
If you don't want to store your credentials, you can enter them each time you establish the VPN tunnel.
For that, comment out the preceding line with `;`.  
:::

### Start and monitor the OpenVPN connection

You can start the OpenVPN GUI application and connect the client tunnel through the icon in the taskbar notification area.

To monitor the connection, go to `OpenVPN/log/client.txt`.  
If everything works, you should see something like this:

```txt
Fri Nov 04 10:03:35 2016 Successful ARP Flush on interface [20] {BD06804E-FC58-480D-B6A5-13E0EAE98940}
Fri Nov 04 10:03:40 2016 TEST ROUTES: 2/2 succeeded len=2 ret=1 a=0 u/d=up
Fri Nov 04 10:03:40 2016 MANAGEMENT: >STATE:1478250220,ADD_ROUTES,,,
Fri Nov 04 10:03:40 2016 C:\WINDOWS\system32\route.exe ADD 10.64.0.1 MASK 255.255.255.255 10.64.24.122
Fri Nov 04 10:03:40 2016 ROUTE: CreateIpForwardEntry succeeded with dwForwardMetric1=35 and dwForwardType=4
Fri Nov 04 10:03:40 2016 Route addition via IPAPI succeeded [adaptive]
Fri Nov 04 10:03:40 2016 C:\WINDOWS\system32\route.exe ADD 10.193.104.0 MASK 255.255.252.0 10.64.24.122
Fri Nov 04 10:03:40 2016 ROUTE: CreateIpForwardEntry succeeded with dwForwardMetric1=35 and dwForwardType=4
Fri Nov 04 10:03:40 2016 Route addition via IPAPI succeeded [adaptive]
Fri Nov 04 10:03:40 2016 Initialization Sequence Completed
Fri Nov 04 10:03:40 2016 MANAGEMENT: >STATE:1478250220,CONNECTED,SUCCESS,10.64.24.121,52.209.29.183
```

In this example, your VPN client's static private IP address is `10.64.24.122`.  

### Test successful data connectivity

If the VPN tunnel is successfully established, you can connect directly to the private IP addresses of your mobile devices.
For testing, you can choose any device with an active data session (marked as **Online** in the emnify Portal) and retrieve the assigned IP address from the details section.

Using the command prompt (`cmd` application on Windows), ping the chosen IP address from your device:

```shell
C:\>ping 10.193.104.2

Pinging 10.193.104.2 with 32 bytes of data:
Reply from 10.193.104.2: bytes=32 time=1158ms TTL=62
Reply from 10.193.104.2: bytes=32 time=391ms TTL=62
Reply from 10.193.104.2: bytes=32 time=413ms TTL=62
Reply from 10.193.104.2: bytes=32 time=1307ms TTL=62
```

For this to work, your device must run an IP stack responding to ICMP echo requests.
This might differ for embedded devices that only implement partial IP stack functionality.
