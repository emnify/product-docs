# OpenVPN

emnify’s communication platform hosts an OpenVPN service that allows to establish a private network between the device and any remote client location. 
The remote client can either be on the application server itself, or on any machine that wants to remotely access the device (such as operational staff).

## OpenVPN Overview

To use the OpenVPN service the IoT device does not need any private APN, OpenVPN software or dynamic DNS resolution.
Through the emnify SIM, every device will get a static private IP address which can be used to identify and address the device.

<!--This image is missing: OpenVPN.png -->
<!-- image caption: OpenVPN System Overview -->

At the same time the IoT device can send data through the private tunnel to the IP address of the remote machine.

## OpenVPN setup

In order to set up OpenVPN on your machine the following high-level steps are required.

1. In the emnify Portal → Device Policies: Set the Service Policy to a VPN breakout region, e.g., `eu-west-1 (VPN)`
1. Portal → Integrations → OpenVPN: download the VPN configuration file for your region and operating system
1. Create a `credentials.txt` with your username / password or organisation ID / application token (recommended).
1. Load the VPN configuration file and `credentials.txt` with your OpenVPN client
    

For detailed instructions please refer to our knowledge base articles

1. [OpenVPN Integration MacOS](https://support.emnify.com/hc/en-us/articles/360019625379-OpenVPN-Integration-Guide-for-MacOS)
1. [OpenVPN Integration Windows](https://support.emnify.com/hc/en-us/articles/115001723273-OpenVPN-Integration-Guide-for-Windows) 
1. [OpenVPN Integration Linux](https://support.emnify.com/hc/en-us/articles/115001724434-OpenVPN-Integration-Guide-for-Linux)
