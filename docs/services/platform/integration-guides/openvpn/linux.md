---
description: Step-by-step guide for integrating OpenVPN on Linux to use on devices with emnify eSIMs.
last_update: 
  date: 11-24-2022
pagination_label: OpenVPN on Linux
sidebar_label: Linux
slug: /integration-guides/openvpn-linux-ubuntu
---

# Integrate OpenVPN on Linux

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
1. Make sure you're on the **Linux** tab, then click **Download client.conf**.
Select the desired region or choose **Download all regions**.

Once downloaded, store that file on your server in the folder `/etc/openvpn`.

### Change the internet breakout region

1. Navigate to [**Device Policies**](https://portal.emnify.com/device-policies) in the emnify Portal.
1. In the **Service Policies** section, select the policy assigned to the devices you want to secure and click **Details**.
1. Under **Internet Breakout Region**, set the service policy to a VPN breakout region (for example, `eu-west-1 (VPN)`).

## Set up the OpenVPN client on Linux/Ubuntu

### Install the OpenVPN software

First, install the OpenVPN package:

```bash
sudo apt-get install openvpn
```

### Create credentials for authentication

:::warning
User accounts with MFA enabled can't be used to authenticate the OpenVPN tunnel.
:::

Once you install the software and [download the configuration file](#download-the-vpn-configuration-file), setting up authentication is next.
Create a file called `credentials.txt` in the folder `/etc/openvpn`.
You can use your user credentials to authenticate or use an application token (recommended).

#### Authentication with user credentials

The content of the `credentials.txt` must be two lines.
The first line is your username, and the second is your password.

```txt
username@domain.com
YourPassword
```

:::note
If you don't want to store your credentials, you can also choose to enter them each time the VPN tunnel is established.
If you prefer that option, comment out the line `auth-user-pass /etc/openvpn/credentials.txt` in the `client.conf` file.
:::

#### Authentication with an application token

When you run the OpenVPN client on a VPN gateway or application server, using a dedicated application token is recommended.
In this case, the first line in the `credentials.txt` file needs to contain your emnify organization identifier. Instead of the password on the second line, store the application token.

You can create application tokens in the emnify Portal.
For instructions, see [Application tokens](/portal/application-tokens).

Once created, copy the token into the credentials file.
The content of the credentials file would then look like this:

```txt
orgId
ApplicationToken
```

When you log in to the emnify Portal, it shows this data under the VPN settings.

### Protect the credentials file

You should keep the `credentials.txt` file only readable by root and not by other server users.
You can ensure this with the following commands:

```bash
sudo chown root:root /etc/openvpn/credentials.txt
sudo chmod 600 /etc/openvpn/credentials.txt
```

### Start and monitor the OpenVPN connection

Now you can start the VPN client by running:

```bash
sudo service openvpn start
```

The OpenVPN daemon logs into `/var/log/syslog`.
If everything works, it looks like this:

```txt
Jul 12 17:53:55 openvpn-client ovpn-client[3027]: Data Channel Encrypt: Cipher 'BF-CBC' initialized with 128 bit key
Jul 12 17:53:55 openvpn-client ovpn-client[3027]: Data Channel Encrypt: Using 160 bit message hash 'SHA1' for HMAC authentication
Jul 12 17:53:55 openvpn-client ovpn-client[3027]: Control Channel: TLSv1, cipher TLSv1/SSLv3 DHE-RSA-AES256-SHA, 2048 bit RSA
Jul 12 17:53:55 openvpn-client ovpn-client[3027]: [openvpn.emnify.net] Peer Connection Initiated with [AF_INET]52.209.x.y:1194
Jul 12 17:53:57 openvpn-client ovpn-client[3027]: SENT CONTROL [openvpn.emnify.net]: 'PUSH_REQUEST' (status=1)
Jul 12 17:53:57 openvpn-client ovpn-client[3027]: PUSH: Received control message: 'PUSH_REPLY,route 10.64.0.1,topology net30,ping 1,ping-restart 5,route 10.x.y.z 255.255.128.0,ifconfig 10.64.0.224 10.64.0.225'
Jul 12 17:53:57 openvpn-client ovpn-client[3027]: TUN/TAP device tun0 opened
Jul 12 17:53:57 openvpn-client ovpn-client[3027]: /sbin/route add -net 10.64.0.1 netmask 255.255.255.255 gw 10.64.0.225
Jul 12 17:53:57 openvpn-client ovpn-client[3027]: /sbin/route add -net 10.x.y.z netmask 255.255.128.0 gw 10.64.0.225
```

### Find the static private IP of your VPN client

The emnify OpenVPN server allocates a static IP address to the tun interface of your VPN client.
This IP also stays the same when your VPN client is reconnecting or if you move the tunnel to a different machine.
So you can use it on your mobile devices to address your application.
Nevertheless, you should never configure the IP directly on your devices but use a DNS to resolve it.

Once the tunnel is established, you can see that IP address on your tun interface.
In this example, the IP address is `10.64.0.224`:

```bash
ubuntu@openvpn-client:~$ ip a s tun0
14: tun0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UNKNOWN qlen 100
    link/none 
    inet 10.64.0.224 peer 10.64.0.225/32 scope global tun0
```

### Test successful data connectivity

If the VPN tunnel is established successfully, you can connect directly to your mobile devices' private IP addresses.

For testing, you can choose any of your devices that are currently in an active data session.

1. [Log in to your emnify account](https://portal.emnify.com/sign).
1. Navigate to **Connected Devices** and select one of your devices.
1. Under **Details**, you can see if it's currently online and the IP address it has assigned.

Now you can ping that private IP address:

```bash
root@openvpn-client:~# ping 10.x.y.z
PING 10.x.y.z (10.x.y.z) 56(84) bytes of data.
64 bytes from 10.x.y.z: icmp_req=1 ttl=62 time=72 ms
64 bytes from 10.x.y.z: icmp_req=2 ttl=62 time=80 ms
64 bytes from 10.x.y.z: icmp_req=3 ttl=62 time=75 ms
```

For this to work, your device must run an IP stack responding to ICMP echo requests.
This might differ for embedded devices that implement only partial IP stack functionality.

You can use any network protocol.
For example, if your device runs an `sshd` daemon you can log into it via SSH.

### Enable access for servers behind the VPN client

If you have multiple servers behind your VPN gateway that need to communicate with your mobile device, you can apply masquerading using `iptables` to hide them behind the single IP address of your VPN client.

First, you need to enable IP forwarding on your VPN gateway (if it isn't already active):

1. Open your `/etc/sysctl.conf`
1. Set `net.ipv4.ip_forward=1`
1. Load the configuration with `sudo sysctl -p /etc/sysctl.conf`

After, you need to enable masquerading for the tun interface by running:

```bash
sudo iptables -t nat -A POSTROUTING -o tun0 -j MASQUERADE
```

You can also forward connections coming to specific ports to an application server behind your VPN gateway by using DNAT.
For example, to forward to an internal HTTP server at IP `192.168.100.21` use:

```bash
sudo iptables -t nat -A PREROUTING -i tun0 -p tcp --dport 80 -j DNAT --to-destination 192.168.100.21
```

To make these settings persistent, you can use the `iptables-persistent` package.
