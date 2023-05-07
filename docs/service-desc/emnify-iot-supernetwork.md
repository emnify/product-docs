# emnify IoT SuperNetwork

## Cellular IoT connectivity 

Cellular is the most widely-used wireless network technology for connecting things.
It is superior to other wireless technologies with regard to network availability and security.
Cellular solutions improve the end-customer experience by instantly delivering data at the customer site without local integration.
Not only is this solution ideal for mobile use cases but also for stationary devices.
 

### Global coverage

Even in cases where IoT devices remain stationary after deployment, it is important for vendors working with customers from different countries to have a global connectivity solution. This eliminates the overhead of maintaining an inventory of country-specific SIM cards as well as the complexity dealing with multiple contracts and data plans that are unique to each country. 
emnify provides global coverage in more than 180 countries. 


### Dedicated IoT specific multi-network access  

emnify is dedicated to IoT connectivity even without having any base stations of its own.
Instead, emnify has direct roaming agreements with more than 400 networks for the sole purpose of connecting IoT devices. Additionally, emnify works with network partners to increase the number of available networks with the goal of allowing devices to connect through any cellular network.
Consequently, emnify's IoT eSIM can connect to more than 540 networks around the world.

### Radio access types and frequency bands

The emnify IoT SuperNetwork and IoT eSIM  supports all devices and modules using the following radio access technologies.

- [2G (GSM/GPRS/EDGE)](#2g-gsmgprsedge)
- [3G (UMTS/WCDMA/HPSA/HSDPA)](#3g-umtswcdmahpsahsdpa)
- [4G (LTE/LTE-A/LTE-CATXX)](#4g-ltelte-alte-catxx)
- [5G (New Radio)](#5g-new-radio)
- [LTE-M (CAT-M1)](#lpwan-lte-mnb-iot)
- [NB-IoT (CAT-NB1, CAT-NB2)](#lpwan-lte-mnb-iot)

When a device wants to connect with any of these radio technologies, the network needs to support this technology as well as the device needs to support the network-specifc frequency band for this technology.

### 2G (GSM/GPRS/EDGE)

As one of the most dominant IoT technologies still in use, emnify IoT SuperNetwork provides 2G service.
Although the throughput is limited (GPRS max. 120kbps, EDGE max. 1Mbps) it is more than sufficient for many IoT use cases.

GSM/GPRS is easy to deploy for IoT use cases because there are only 4 frequency bands utilized by operators for GSM/GPRS worldwide.

In the Americas

- B2 (1900MHz)
- B5 (850MHz)

In the rest of world

- B3 (1800MHz)
- B8 (900MHz)

Therefore, module manufacturers offer dual-band modules that can be used either in Americas or Rest of World - or Quadband modules that can be deployed globally.

Nevertheless, GSM/GPRS is being phased out in several countries to free up frequency band for newer technologies.
[More than 60 networks have discontinued or announced to discontinue GSM technology](https://www.emnify.com/en/resources/global-2g-phase-out).

### 3G (UMTS/WCDMA/HPSA/HSDPA)

The IoT SuperNetwork also provides 3G services like UMTS, WCDMA, HSDPA, HSUPA. 

3G/UMTS is being phased out by several network operators to make room for newer technologies.
See also the article on [GMS and UMTS networks that are being discontinued](https://www.emnify.com/en/resources/global-2g-phase-out)

### 4G (LTE/LTE-A/LTE-CATXX)

The emnify IoT SuperNetwork provides 4G network service  complying with all LTE categories such as CAT-1, CAT-3, CAT-4, CAT-6, CAT-9, and CAT-12. 

For broadband use cases, higher category LTE device categories offer more bandwidth.
This means that CAT-1 offers a low cost alternative for specific IoT use cases where bandwidth is not a priority. 

### LPWAN: LTE-M/NB-IoT

The emnify IoT SuperNetwork provides the largest coverage of cellular Low-Power Wide Area Networks (LPWAN) - namely LTE-M and NB-IoT.
Our blog post [LTE-M vs NB-IoT: 5 Considerations for Your IoT Solutions](https://www.emnify.com/blog/lte-m-nb-iot) compares their technical differences.
Check our website for a list of [LTE-M networks](https://www.emnify.com/global-iot-coverage/lte-m-coverage) and [NB-IoT networks](https://www.emnify.com/global-iot-coverage/nb-iot-coverage).

LTE-M and NB-IoT available on the IoT SuperNetwork provide 

- Reduced cost - to enable mass production of cellular IoT devices
  - Removing unnecessary LTE features for IoT such as dual carrier, high modulations
- Low power utilization - for battery powered use cases that require years of operation
  -  Introducing power saving features such as [PSM](#psm) and [eDRX](#edrx)
  -  Reducing the max. transmission power to less than 200mA to cater for battery max. current (GSM for example has 2A max power) 
- Wider coverage - (+14 dB for LTE-M and +20 dB for NB-IoT sensitivity) for rural/indoor/underground use cases
  - Utilizing extended coverage feature with more retransmissions to ensure data gets delivered 
- Smaller module size - to enable smaller device use cases


### 5G (New Radio)

5G is the next major technology standard after LTE - which targets 3 different applications areas:

1. Enhanced Mobile Broadband (eMBB)  
    - With faster throughput upto 1Gps+ and more capacity in a local area
    - Utilizing mmWave bands (5Ghz+) for increased throughput
1. Massive Machine Type communication (mMTC)  
    - Targeted at IoT application where a multitude of devices are in the same location and need to communicate with low power
    - LTE-M and NB-IoT often seen as decoupled from 5G to get earlier results will fusion with 5G mMTC  
1. Ultra-Reliable Low Latency Communications (URLLC)
    - For missing critical applications that require low latency and reliable data transmission

The emnify IoT SuperNetwork supports 5G Non-Standalone (5G NSA)networks which are mainly deployed to provide enhanced Mobile Broadband (eMBB).
In 5G NSA deployments the air interface uses 5G technology but the core network is still 4G.

In August 2020 emnify announced its first 5G roaming agreements.
Since then emnify has entered into agreements with more than a dozen network operators worldwide.

## emnify local connectivity

Traditional operators and MVNOs always have a home network - and infrastructure - in a country or market where they provide their service. 
emnify's IoT SuperNetwork doesn't have a "home" country.
Instead, it is comprised of a cloud-based infrastructure that is deployed in 4 regions in order to provide local connectivity to each market. 

### Regional breakout 

When network operators have their infrastructure in one home country, all data from SIM cards of this operator are first routed back to their home country, even if the device is on a different continent.
This is called Home Routing.

### emnify regional breakouts

emnify’s distributed data plane enables device data to breakout locally, keeping the customer data within the same region.
Moreover, it also helps reduce network latency.
You can either select a specific breakout region or the network automatically selects the breakout region closest to the device.
This can be done on the [emnify Portal](https://portal.emnify.com/) → [**Device Policies**](https://portal.emnify.com/device-policies) → **New service policy** which is applicable to a group of devices.

![Breakout regions](assets/portal-device-policies-breakout-regions.png)

### Complying with permanent roaming

- Brazil

