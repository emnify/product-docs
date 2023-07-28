---
description: Network aggregation supporting all radio types
pagination_next: services/network/iot-cloud-communication-platform
slug: /services/global-iot-network
---

# Global IoT Network

Even when IoT devices are more often only deployed at a single location and aren't moving, for a vendor selling to multiple countries it's important to have a global connectivity solution, so that there is no need to have different SIM cards in stock or have multiple contracts and tariffs.

<!-- TODO: Find place for service_stack.png -->

## Mobile network aggregation

emnify uses an approach to aggregate the roaming footprint of multiple operators with the goal of offering access to every network in the world.
Mobile operators utilize roaming in foreign countries so their subscribers can stay connected when traveling.
Often operators don't have roaming agreements with all countries or only have a roaming agreement for one network—which is sufficient for roaming travelers but not ideal for devices that could be anywhere in the country.
emnify works with multiple partner operators across the globe to be able to offer more networks at a commercially viable rate.
The emnify [multi-IMSI applet](#multi-imsi-application) makes it completely transparent for the device to identify which roaming agreement of which operator is being utilized.

## Radio access types

The emnify IoT SIM and platform supports all devices and modules using the following radio access technologies

- [2G (GSM/GPRS/EDGE)](#2g-gsmgprsedge)
- [3G (UMTS/WCDMA/HPSA/HSDPA)](#3g-umtswcdmahpsahsdpa)
- [4G (LTE/LTE-A/LTE-CATXX)](#4g-ltelte-alte-catxx)
- [5G (New Radio)](#5g-new-radio)
- [LTE-M (CAT-M1)](#lpwan-lte-mnb-iot)
- [NB-IoT (CAT-NB1, CAT-NB2)](#lpwan-lte-mnb-iot)

When a device wants to connect with any of these radio technologies, the network needs to support this technology as well as the device needs to support the network-specifc frequency band for this technology.

### 2G (GSM/GPRS/EDGE)

GSM/GPRS is still one of the most dominant IoT technologies. Although the throughput is limited (GPRS max. 120kbps, EDGE max. 1Mbps) it's more than sufficient for many IoT use cases. The modules are cheap (<10$) and the coverage is widely available throughout the world in more than 200 countries.

GSM/GPRS isn't complicated to deploy for IoT use cases because there are only four frequency bands utilized by operators for GSM/GPRS worldwide.

In the Americas

- B2 (1900MHz)
- B5 (850MHz)

In the rest of world

- B3 (1800MHz)
- B8 (900MHz)

Therefore, module manufacturers offer dual-band modules that can be used either in Americas or Rest of World—or Quad-band modules that can be deployed globally.

Nevertheless, GSM/GPRS is being phased out in several countries to free up frequency band for newer technologies.
[More than 60 networks have discontinued or announced to discontinue GSM technology](https://www.emnify.com/en/resources/global-2g-phase-out).

### 3G (UMTS/WCDMA/HPSA/HSDPA)

3G technologies like UMTS, WCDMA, HSDPA, HSUPA have been driven by the surge for more data speed.
As an evolution of GSM, many parts of the GSM/GPRS core network and signaling are reused, where the most difference is in the radio part.

Like 2G, 3G modules aren't complicated to deploy, since there are only five different frequency bands utilized by operators worldwide (with exception of Japan and China).
Most UMTS modules therefore can be deployed worldwide.

- B1 (2100MHz) - main UMTS band in the world
- B2 (1900MHz) - used in the Americas
- B4 (1700MHz) - used in the Americas
- B5 (850MHz) - Australia / the Americas
- B8 (900MHz) - Europe

For Europe, a 900/2100 MHz dual-band module is required.
For the Americas a 850/1900 MHz dual-band module is required.

3G/UMTS is also being phased out by several network operators to make room for newer technologies.
See also the article on [GMS and UMTS networks that are being discontinued](https://www.emnify.com/en/resources/global-2g-phase-out)

### 4G (LTE/LTE-A/LTE-CATXX)

LTE is a 4G technology (another one would be WiMAX - which never succeeded).
With the evolution of LTE, various LTE categories have been established, such as CAT-1, CAT-3, CAT-4, CAT-6, CAT-9, and CAT-12 Each successive category has exhibited ever-increasing data throughput when compared to its predecessors.
For consumer phones and broadband use cases, the increased throughput is relevant.
However, the increased costs for these modules resulted in the need to develop a lightweight LTE module for IoT use cases.
In turn, this led to CAT-1 as the preferred LTE category for IoT applications.

LTE CAT-1 offers 10Mbps in downlink, 5Mbps in uplink, and is available with network operators wherever LTE is deployed.
Because of its wide availability and the possibility to roam between operators without limitation, LTE CAT-1 is the most common choice for IoT use cases.

Deploying LTE devices on a global scale is more challenging than with GSM and UMTS because network operators worldwide use more than 27 different frequency bands.
Therefore, most modules only support specific regions where the device can be deployed.

Some main LTE-bands are

- B3 (1800 MHz) - Europe, Africa, APAC
- B7 (2600 MHz) - used in the Americas, Europe, APAC
- B20 (800 MHz) - used in Europe, Asia
- B1 (2100 MHz) - Europe, Asia
- B2 (1900 MHz) - the Americas
- B4 (1700 MHz) - the Americas
- B5 (850 MHz) - North America, APAC

:::tip
Validate the frequency bands utilized by the operators in your deployment countries before deciding on a module.
:::

### LPWAN: LTE-M/NB-IoT

While utilizing LTE infrastructure both NB-IoT and LTE-M are also part of the 5G standardization.
Both technologies have been specified to meet the demand for IoT use cases in terms of:

- Reduced cost - to enable mass production of cellular IoT devices
  - Removing unnecessary LTE features for IoT such as dual carrier, high modulations
- Low power utilization - for battery powered use cases that require years of operation
  -  Introducing power saving features such as [PSM](#psm) and [eDRX](#edrx)
  -  Reducing the max. transmission power to less than 200mA to cater for battery max. current (GSM for example has 2A max power) 
- Wider coverage - (+14 dB for LTE-M and +20 dB for NB-IoT sensitivity) for rural/indoor/underground use cases
  - Utilizing extended coverage feature with more retransmissions to ensure data gets delivered 
- Smaller module size - to enable smaller device use cases

Because LTE-M and NB-IoT rely on LTE infrastructure they're also deployed in a multitude of different frequency bands.
A total of 26 bands have been specified for their use.
To deploy NB-IoT and LTE-M in multiple countries and regions, the modules need to support the operator frequency bands.

Cellular LPWAN modules come in different versions

- NB-IoT only or LTE-M only
- LTE-M/NB-IoT combined
- LTE-M/NB-IoT with 2G fallback and optional additional technologies (3G, 4G)

As of today, roaming for NB-IoT is very limited between operators because of new charging models being implemented for NB-IoT.
For LTE-M, roaming usually works over regular LTE roaming.
Nevertheless, some operators have limited the access to their LTE-M networks and its available features (PSM, eDRX).

Check the emnify [LTE-M coverage](https://www.emnify.com/lte-m-coverage) and [NB-IoT coverage](https://www.emnify.com/nb-iot-coverage), availability of PSM/eDRX and proposed frequency bands on the emnify website.

Power-Save-Mode (PSM)

- Why is cellular communication not ideal for IoT?  
Cellular communication for smartphones usually requires low latency on downlink, for example, in case you are being called, your phone should ring right away.
Because of this, there are two things the device does which require power:  
  1. Continuously listening to the radio if there is an incoming call
  1. Transmitting location information to the network where it should be called - whenever it moves out of a tracking area and periodically every 54 minutes  
&nbsp;  
&nbsp;  
- How does **Power Save Mode** work?  
&nbsp;  
For most IoT use cases a downlink-initiated channel isn't required.
It's usually the device that initiates the communication to send (for example, sensor data).
Therefore, a **Power Save Mode** is introduced that allows the device to go to sleep in case it has nothing to send.  
&nbsp;  
The **Power Save Mode** has the following characteristics:  
  - The Power Save Mode is like a power off period during which the module only consumes a couple of μA.
  - The device tells the network how long it's going periodically into PSM (timer T3412 extended).
  - The device/module isn't reachable during PSM from the outside in downlink.
  - The device can wake up the module and send data (for example, power key, interrupt or pin triggered).
  - When the device wakes up, it doesn't need to reattach and re-establish a PDN connection (unless it has moved to a different tracking area).
  - After the device wakes up, it stays in idle mode for a configurable time (timer T3324) to listen for downlink messages (for example, firmware updates).
  - The actual time the device is then in Power Save Mode is T3412 extended - T3324

<!-- This is the "alt" text for a missing image: "PSM and the 3412 and T3324 timers" -->
   
:::note
Some modules which have a SIM enabled PIN, (for example, u-blox SARA-R4/SARA-N4) don't go into sleep mode.
The PIN is disabled on emnify SIMs.
:::

- Roaming for Power Save Mode 
&nbsp;  
&nbsp;   
Be aware that not all NB-IoT and LTE-M networks have implemented PSM and even when PSM is available with the local operator this doesn't mean that a roaming SIM can use it.
This makes it difficult for devices that are moving - in case they use PSM, and the new network doesn't support PSM - or only other timer configurations.
emnify therefore regularly test the availability of PSM in the [LTE-M](https://www.emnify.com/lte-m-coverage?hsLang=en) and [NB-IoT](https://www.emnify.com/nb-iot-coverage) roaming footprint.
- AT Command calculation and examples for PSM settings 
&nbsp;  
&nbsp;   
The 3GPP defined AT command to configure PSM is `AT+CPSMS` which sets the T3412 extended and T3324 timers. 
&nbsp;  
&nbsp;   
An example command is  
&nbsp;  
`AT+CPSMS=1,,,01001110,00000101`
&nbsp;  
&nbsp;  
PSM is enabled (`1`) and the desired value for T3412 extended is 140 hours (`01001110`) and the desired value for the T3324 timer is 10 seconds (`01001110`).
The network doesn't necessarily use the desired values but utilizes supported values that are close to the desired values.
To read the effective PSM configuration use the command  
&nbsp;   
`AT+CPSMS?`
&nbsp;  
&nbsp;     
There is a good calculator that translates the intended time settings for 3412 and T3324 available from [Thales](https://www.thalesgroup.com/en/markets/digital-identity-and-security/iot/resources/developers/psm-calculation-tool). 
&nbsp;  
&nbsp;  
Module vendors have also implemented module specific commands, for example Quectel
  - `AT+QPSMS` extends PSM settings
  - `AT+QCFG=”psm/enter”,1` used to put the module immediately into PSM when the RRC connection is released (not waiting for T3324 to expire)
  - `AT+QPSMEXTCFG` modem optimization command with different attributes such as making sure that PSM is randomized between different devices so they don't send data at the same time

Extended Discontinuous Reception (eDRX)

- How does eDRX work?  
&nbsp;  
  While PSM is focused on uplink-centric use cases, eDRX tries to reduce the power consumption for IoT use cases that get downlink information.
  Regular smartphones don't continuously listen on the radio for an incoming message.
  They do this only every 1.28 seconds or 2.56 seconds which is called DRX (discontinuous Reception).
  eDRX allows configuration of custom intervals of up to 40-175 minutes - depending on the configuration the visited network allows.
    ![eDRX and the 3412 and T3324 timers](./assets/edrx.png)  
&nbsp;  
&nbsp;  
- Roaming with eDRX  
&nbsp;  
As with PSM - not all NB-IoT and LTE-M networks support eDRX or the same timer configuration - and even if they do this doesn't guarantee that a roaming SIM card can utilize eDRX.
emnify therefore also tests and publishes the eDRX availability on our [LTE-M](https://www.emnify.com/lte-m-coverage?hsLang=en) and [NB-IoT](https://www.emnify.com/nb-iot-coverage) roaming footprint.
- [AT Command examples for eDRX settings](#eDRX_AT_COMMANDS)  
&nbsp;  
The standard 3GPP defined AT-command to configure eDRX is `AT+CEDRXS`.  
&nbsp;   
As an example the below command enables (`1`) eDRX for LTE-M (`4`) and an eDRX cycle of 143.36 seconds (`1000`).
&nbsp;  
&nbsp;  
`AT+CEDRXS=1,4,"1000"`
The setting for NB-IoT would be `5` and the timer values are shown in below table  

| Binary  | Timer Value      |
| ------- | ---------------: |
| 0 0 0 0 |     5.12 seconds |
| 0 0 0 1 |    10.24 seconds |
| 0 0 1 0 |    20.48 seconds |
| 0 0 1 1 |    40.96 seconds |
| 0 1 0 0 |    61.44 seconds |
| 0 1 0 1 |    81.92 seconds |
| 0 1 1 0 |   102.40 seconds |
| 0 1 1 1 |   122.88 seconds |
| 1 0 0 0 |   143.36 seconds |
| 1 0 0 1 |   163.84 seconds |
| 1 0 1 0 |   327.68 seconds |
| 1 0 1 1 |   655.36 seconds |
| 1 1 0 0 |  1310.72 seconds |
| 1 1 0 1 |  2621.44 seconds |
| 1 1 1 0 |  5242.88 seconds |
| 1 1 1 1 | 10485.76 seconds |

    
The network responds with the actual effective interval.
    
`+CEDRXS: [4,"1000","1000","0111"]`
    

### 5G (New Radio)

5G is the next major technology standard after LTE—which targets three different applications areas:

1. Enhanced Mobile Broadband (eMBB)  
    - With faster throughput up to 1Gps+ and more capacity in a local area
    - Utilizing millimeter wave (MM wave) bands (5Ghz+) for increased throughput
1. Massive Machine Type communication (mMTC)  
    - Targeted at IoT application where a multitude of devices are in the same location and need to communicate with low power
    - LTE-M and NB-IoT often seen as decoupled from 5G to get earlier results will fusion with 5G mMTC  
1. Ultra-Reliable Low Latency Communications (URLLC)
    - For missing critical applications that require low latency and reliable data transmission

As of today, 5G is mainly adopted for eMBB use cases - using a 5G non-standalone (NSA) deployment - meaning that the air interface uses 5G technology whereas the core network is still 4G.

emnify has announced its first 5G roaming agreements in August 2020 and since then has reached agreements with more than a dozen network operators worldwide.
