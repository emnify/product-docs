# OpenVPN Integration Guide for Windows

**Author**: Jorge Merino  
**Last Updated**: 2 months ago  

EMnify customers can create their own Virtual Private Network for their mobile IoT/M2M devices fitted with EMnify SIMs.  
Data traffic will be exchanged between the devices and the application server through an OpenVPN tunnel, enabling direct communication with the IPs of the mobile devices (no NAT applied).  

The tunnel is established between the EMnify Core Network and the customers VPN gateway or server.  

TODO - INSERT IMAGE

Any traffic exchanged with the mobile devices is encrypted before transmitted over the public internet, therefore adding an additional layer of security and privacy.  
For that **no** VPN software needs to be installed on the device or any configuration changes to be done, the default EMnify APN does also support VPN flows.  

First, download the VPN config file from the EMnify User Interface:

1. Click on the "Integrations" menu  
2. Scroll down to "secure connection" and download the configuration file  

TODO - INSERT IMAGE

Additionally, you need to change the Internet Regional Breakout in the device policy:

1. Click on "Device Policies" (1)  
2. Scroll down to "Service Policies" (2), select the policy assigned to the devices you want to secure and click on "Open" (3).  
3. On the "Internet Breakout Region" menu (4), Set the Service Policy to a VPN breakout region, e.g., `eu-west-1 (VPN)`.  

TODO - INSERT IMAGE

## Setting Up OpenVPN Client on Windows

### Install OpenVPN Software

Download the installation file according to your Windows machine at OpenVPN Downloads.  

The pre-built configuration file's name is either **emnify-eu-west-1.ovpn, emnify-eu-east-1.ovpn or emnify-ap-southeast-1.ovpn**.  

Please store that file in your server in the folder _\OpenVPN\config_.  

### Create Credentials for Authentication

Next, create a file titled e.g. **credentials.txt** in the folder _\OpenVPN\config_.  
This will contain the information to authenticate your session, either via EMnify user credentials or with an application token (recommended).  

#### Authentication with User Credentials

The contents of the **credentials.txt** file should only have two lines as follows:

```
username@domain.com
YourPassword
```


#### Authentication with Application Token

When you run the OpenVPN client on a VPN gateway or application server it is recommended to use a dedicated application token.  
In that case, the first line in the *credentials.txt* file needs to be filled with your EMnify organisation identifier and the application token instead of the password.  

You can create application tokens in the EMnify portal, same section you downloaded the configuration file from.  
Select "Create New Application Token" and Copy/Paste the token into the `credentials.txt` file.  
Your organisation ID is also available there.  

```
orgId
ApplicationToken
```

TODO - INSERT IMAGE

### Correct Credentials File Path in Client Configuration File

Find the following line in *client.ovpn* and insert the complete file path from *credentials.txt*:  

```
auth-user-pass "(...)\\OpenVPN\\config\\credentials.txt"
```

In case you do not want to store your credentials, you can choose to enter them each time the VPN tunnel is established.  
For that, please comment the line above with `;`.  

### Starting and Monitoring the OpenVPN connection

You can start the OpenVPN Gui application and connect the client tunnel through the icon in the taskbar notification area.  

To monitor the connection go to _OpenVPN/log/client.txt_.  
If everything works, you should see something like this:

```
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

In this sample, the static private IP address of your VPN client is **10.64.24.122**.  

### Testing the Successful Data Connectivity

If the VPN tunnel is successfully established you will be able to connect directly to the private IP addresses of your mobile devices.  
For testing, you can choose any for your endpoints that has currently an active data session (marked as **ONLINE** in the EMnify Portal) and retrieve the assigned IP address from the details section.  

Using the command Prompt (_cmd_ application on Windows), ping the chosen IP address from your device:

```
C:\>ping 10.193.104.2

Pinging 10.193.104.2 with 32 bytes of data:
Reply from 10.193.104.2: bytes=32 time=1158ms TTL=62
Reply from 10.193.104.2: bytes=32 time=391ms TTL=62
Reply from 10.193.104.2: bytes=32 time=413ms TTL=62
Reply from 10.193.104.2: bytes=32 time=1307ms TTL=62
```

For this to work your device needs to run an IP stack that is responding to ICMP echo request, this might not be the case for embedded devices that do implement only partial IP stack functionality.  


