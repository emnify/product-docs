---
description: Overview of the available emnify SIMs, including form factors, quality grades, multi-IMSI, eSIM, and eUICC
last_update: 
  date: 11-30-2023
pagination_next: services/connectivity/sim-lifecycle-management
pagination_prev: null
slug: /services/global-iot-sim
---

# emnify IoT eSIM

emnify provides eSIMs that are built specifically for IoT solutions.
The eSIMs come in different quality grades that are more durable than standard SIM.
They can be updated [over the air (OTA)](/glossary#ota) using eSIM remote SIM provisioning technologies and come in different [form factors](#form-factors).

emnify eSIMs have a [multi-IMSI applet](#multi-imsi-applet) installed on the SIM.
The multi-IMSI applet ensures that the best network and network partners are used based on your device location.

## M2M eSIM

The emnify IoT eSIM is an [M2M eSIM][gsma-m2m] compliant with SGP.01, SGP.02, and SGP.016.
The M2M eSIM is also called an [embedded universal integrated circuit card (eUICC)](/glossary#euicc).
Unlike a regular SIM (UICC), an eUICC can be updated OTA.
You can update M2M eSIMs with new configurations or profiles, eliminating the need for SIM swaps.

### Form factors

emnify IoT eSIMs are available in the following form factors.

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

The following compliance standards and software features apply to all quality grades of emnify eSIMs.

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

emnify IoT eSIM cards are equipped with a multi-IMSI applet.
This technology is similar to a mobile phone using dual-SIM technology or eSIM profiles in consumer phones.
The main difference is that the emnify eSIM already includes cellular provider identities ([IMSI](/glossary#imsi)) from multiple SIM cards and any network switching is done automatically.

The multi-IMSI applet on the eSIM uses a preferred IMSI list per country.
This list defines the available IMSIs for that country and the order in which to try when connecting.
If your device moves to a new country with a different preferred IMSI, the applet dynamically overwrites the previously active IMSI with the preferred one for this country.

The automatic switching by the multi-IMSI applet solves several connectivity challenges.
For example:

- In Brazil, a local Brazilian IMSI must be used to be legally compliant with regulations.
- While emnify has over 400 direct roaming agreements, utilizing roaming agreements from partner operators (IMSI sponsors) provides you with even more coverage and better pricing.
- The applet detects any issues with the preferred IMSI and automatically switches to a fallback IMSI to regain connection.

<!-- External links -->
[gsma-m2m]: https://www.gsma.com/esim/remote-sim-provisioning-for-machine-to-machine/
