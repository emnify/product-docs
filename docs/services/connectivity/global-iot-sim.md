---
description: Overview of the available emnify SIMs, including form factors, quality grades, multi-IMSI, eSIM, and eUICC
last_update: 
  date: 11-30-2023
pagination_next: services/connectivity/sim-lifecycle-management
slug: /services/global-iot-sim
---

# emnify IoT eSIM

emnify provides eSIMs that are built specifically for IoT solutions.

Compared to regular operator SIMs, emnify eSIMs come in different quality grades that are more durable.
They can be updated over the air (OTA) using different eSIM remote SIM provisioning technologies and come in different form factors.


## M2M eSIM



Every new SIM you order from **emnify** is an M2M eSIM (compliant with SGP.01, SGP.02, and SGP.16).
The M2M eSIM is also referred to as an [embedded universal integrated circuit card (eUICC)](/glossary#euicc) and comes in different [form factors](#form-factors).
Unlike a regular SIM (UICC), an eUICC can be updated [over the air (OTA)](/glossary#ota) using different eSIM remote SIM provisioning technologies.
Because M2M eSIMs can be updated with new configurations or profiles, this eliminates the need for SIM swaps.

### Main benefits

As a key component of the emnify IoT SuperNetwork service, the new emnify IoT eSIM unlocks a number of benefits for our customers, including:  
1. Optimized coverage and network selection: connect to the best range of networks for your specific needs, ensuring you take advantage of expanding coverage options without SIM swaps. 
1. Future-proof connectivity: get access to the latest network technologies and have the best possible connection, including satellite NB-IoT and 5G. 
1. Streamlined network access to new markets: network regulations are changing continuously. To expand into regulated countries, the emnify IoT eSIM will enable you to comply with local laws without changing your setup.

:::note
To do an over-the-Air update, your IoT device and the network needs to support SMS. Please note that devices that only support NB-IoT lack SMS support and therefore, the SIM cannot be updated.
:::


## Form factors

emnify [M2M eSIMs](#m2m-esim) are available in the following form factors:

| Form factor         | Dimensions             |
|---------------------|------------------------|
| **2FF** (Mini SIM)  | 15 x 25 x 0.75 mm      |
| **3FF** (Micro SIM) | 12 x 15 x 0.75 mm      |
| **4FF** (Nano SIM)  | 8.8 x 12.3 x 0.75 mm   |
| **MFF2** (eSIM)     | 5 x 6 x 0.75 mm, 8 pin |

:::note
MFF2 eSIMs can be soldered onto a device and aren't readily removable.
:::

## Quality grades

emnify IoT eSIMs come in three different quality grades: **Commercial eUICC**, **Industrial eUICC**, and **MFF2**.

<table>
  <thead>
    <tr>
      <th colSpan="3"> </th>
      <th>Commercial eUICC</th>
      <th>Industrial eUICC</th>
      <th>MFF2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan="15">Hardware characteristics</td>
      <td rowSpan="2">Form Factor</td>
      <td>Embedded/solderable</td>
      <td align="center">—</td>
      <td align="center">—</td>
      <td align="center">MFF2</td>
    </tr>
    <tr>
      <td>Removable Card</td>
      <td>Triple-cut or Dual-Cut</td>
      <td>2FF or 3FF</td>
      <td align="center">—</td>
    </tr>
    <tr>
      <td rowSpan="5">Chip Type</td>
      <td>Operational and storage temperature</td>
      <td>-25°C to +85°C (JESD22-A104)</td>
      <td colSpan="2" align="center">-40°C to +105°C (JESD22-A104)</td>
    </tr>
    <tr>
      <td>Operating voltage</td>
      <td colSpan="3" align="center">1.62V to 5.5V</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td colSpan="3" align="center">ISO-7816, T=0</td>
    </tr>
    <tr>
      <td>Chipset NVM size</td>
      <td colSpan="3" align="center">704 kilobytes</td>
    </tr>
    <tr>
      <td>Chipset RAM size</td>
      <td colSpan="3" align="center">20 kilobytes</td>
    </tr>
    <tr>
      <td rowSpan="8">NVRAM characteristics</td>
      <td>Write Endurance</td>
      <td colSpan="3">500k erase per page 10M cycles with OS High Endurance</td>
    </tr>
    <tr>
      <td>Data retention</td>
      <td colSpan="3" align="center">15 years @85°C</td>
    </tr>
    <tr>
      <td>Moisture/Reflow conditions</td>
      <td align="center">—</td>
      <td colSpan="2">MSL3 (J-STD020)</td>
    </tr>
    <tr>
      <td>Humidity</td>
      <td align="center">—</td>
      <td colSpan="2">HA as per ETSI TS 102.671 / (JESD22-A101D)</td>
    </tr>
    <tr>
      <td>Corrosion</td>
      <td align="center">—</td>
      <td align="center">—</td>
      <td>CX as per ETSI TS 102.671 (JESD22-A107)</td>
    </tr>
    <tr>
      <td>Vibration</td>
      <td align="center">—</td>
      <td align="center">—</td>
      <td>VX as per ETSI TS 102.671 (JESD22-B103)</td>
    </tr>
    <tr>
      <td>Shock</td>
      <td align="center">—</td>
      <td align="center">—</td>
      <td>SX as per ETSI TS 102.671 (JESD22-B104)</td>
    </tr>
    <tr>
      <td>Common Criteria Certificate</td>
      <td colSpan="3" align="center">CCN-CC-5/2019</td>
    </tr>
  </tbody>
</table>

## Compliance and software features

Here's a table showcasing the compliance standards and software features applicable to all quality grades of emnify eSIMs:

<table>
  <tbody>
    <tr>
      <td rowSpan="4">emnify eUICC Compliance</td>
      <td rowSpan="3">GSMA</td>
      <td>SGP.01 Embedded SIM Remote Provisioning Architecture</td>
      <td>1.1</td>
    </tr>
    <tr>
      <td>SGP.02 Embedded UICC Technical Specification</td>
      <td>3.2</td>
    </tr>
    <tr>
      <td>SGP.16 M2M Compliance Process</td>
      <td>1.1</td>
    </tr>
    <tr>
      <td>TCA</td>
      <td>eUICC Profile Package Interoperable<br /> Format Technical Specification</td>
      <td>2.1</td>
    </tr>
    <tr>
      <td rowSpan="10">Software Features</td>
      <td rowSpan="3">Embedded Universal Integrated Circuit Card (eUICC)</td>
      <td>Maximum number of profiles</td>
      <td>10</td>
    </tr>
    <tr>
      <td>ISD-A and ISD-R system applets</td>
      <td>Supported</td>
    </tr>
    <tr>
      <td>EAP-SIM and EAP-AKA authentication protocols</td>
      <td>Supported</td>
    </tr>
    <tr>
      <td>LPWAN features</td>
      <td>Suspend and resume SIM state ETSI TS 102 221<br /> Poll Interval Negotiation ETSI TS 102 221</td>
      <td>Supported</td>
    </tr>
    <tr>
      <td rowSpan="3">OTA Capabilities on ISD-P:<br /> Remote file management - RFM<br /> Remote applet management - RAM</td>
      <td>HTTPS</td>
      <td>Supported</td>
    </tr>
    <tr>
      <td>TLS 1.2</td>
      <td>Supported</td>
    </tr>
    <tr>
      <td>AES algorithm (128-bit, 192-bit, and 256-bit keys)</td>
      <td>Supported</td>
    </tr>
    <tr>
      <td>GlobalPlatform</td>
      <td>All Secure Channel Protocols</td>
      <td>Supported</td>
    </tr>
    <tr>
      <td rowSpan="2">Java Card</td>
      <td>Standard Java Card APIs</td>
      <td>Supported</td>
    </tr>
    <tr>
      <td>GlobalPlatform API</td>
      <td>Supported</td>
    </tr>
    <tr>
      <td rowSpan="2" colSpan="2">Compliance</td>
      <td>ROHS</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>REACH</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>



## Multi-IMSI applet

EMnify eSIM cards are equipped with a multi-IMSI applet installed on the SIM.  
This applet runs in the background using minimal resources, ensuring there's no negative impact on the device's performance.  

This technology allows devices to dynamically select the best network based on their location.  
As a result, EMnify can provide access to a larger number of networks compared to traditional operators.  
Moreover, with access to the largest global [LPWAN](global-iot-network#lpwan-lte-mnb-iot) (LTE-M and NB-IoT) footprint, EMnify SIMs ensure regulatory network access in over 100 countries.  

An EMnify eSIM contains cellular provider information from multiple SIM cards.  
While EMnify has established roaming agreements and local contracts with operators worldwide, it also collaborates with partner operators.  
This collaboration increases the network coverage footprint and offers a fallback option when preferred networks face outages.  

Here's how the multi-IMSI applet functions:  

- EMnify has both its own operator identity ([IMSI](/glossary#imsi)) and the IMSI of partner operators stored on the SIM card.  
- Each IMSI or partner operator usually supports access to more than one network in a country.  
- The applet contains a preferred IMSI list for each country.  
  For instance, this list might specify that IMSI _X_ is prioritized for access in country _A_.  
  If a device can't establish a connection using IMSI _X_, then IMSI _Y_ becomes the next viable option.  
- When a device moves to country _A_, the applet dynamically switches the active IMSI to IMSI _X_ based on this preferred list.  
  Should operator _X_ experience service disruptions, the SIM would automatically switch to IMSI _Y_, ensuring continuous connectivity for the device.  

The selection of the preferred IMSI for each country considers several factors:  

- Whether permanent roaming is allowed in that country.  
- The IMSI with the most network partners within the country.  
- The IMSI offering the best availability of radio access types (e.g., LTE, NB-IoT, LTE-M) or features like PSM/eDRX.  
