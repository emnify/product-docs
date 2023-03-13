---
description: Form factors, quality grades, multi-IMSI, eSIM, eUICC
---
# Global IoT SIM

emnify provides eSIMs that are built specifically for IoT solutions.
Compared to regular operator SIMs, emnify eSIMs come in different quality grades that are more durable, can be updated over the air using different eSIM remote SIM provisioning technologies, and come in different [form factors](#form-factors).  

emnify eSIMs have a [multi-IMSI application](#multi-imsi-application) installed on the SIM. The multi-IMSI applet ensures that the best network and network partners are used based on the location of the device.
Using this technology, emnify provides a larger number of networks than traditional operators, giving it the largest LPWAN (LTE-M and NB.IoT) footprint which ensures regulatory network access in over 100 countries.  

## eSIM technology

### M2M eSIM

Every emnify SIM you order from emnify is an [M2M eSIM](https://www.gsma.com/esim/remote-sim-provisioning-for-machine-to-machine/) (compliant with SGP.01, SGP.02, and SGP.016).
The M2M eSIM is also referred to as an [eUICC](/glossary#euicc---embedded-universal-integrated-circuit-card) (Embedded Subscriber Identity Module).
Unlike a regular SIM (UICC), an eUICC can be updated over the air.
Because M2M eSIMs can be updated with new configurations or profiles, this eliminates the need for SIM swaps.

### Consumer eSIM

emnify also offers consumer eSIMs for Smartphones, tablets, and watches.
The consumer eSIM can be downloaded to a device by scanning a QR code.
If you are interested in consumer eSIM technology, please contact sales@emnify.com.  

## Form factors

emnify [M2M](#m2m-esim) eSIMs are available in the following form factors:

| Form factor     | Dimensions             |
| --------------- | ---------------------- |
| **2FF** (mini SIM)  | 15 x 25 x 0.75 mm      |
| **3FF** (Micro SIM) | 12 x 15 x 0.75 mm      |
| **4FF** (Nano SIM)  | 8.8 x 12.3 x 0.75 mm   |
| **MFF2** (eSIM)     | 5 x 6 x 0.75 mm, 8 pin |

MFF2 eSIMs can be soldered onto a device and are not readily removable.
Visit the [emnify SIM Shop](https://portal.emnify.com/sim-order) where you can choose between these packages:

- Triple-cut commercial
  - Mini (2FF)
  - Micro (3FF)
  - Nano (4FF)
- Dual-cut commercial
  - Mini (2FF)
  - Micro (3FF)
- Single-cut Mini Industrial (2FF)
- Single-cut Micro Industrial (3FF)
- Embedded MFF2

In use cases where devices are mobile, we highly recommend choosing the form factor that fits the device exactly, not multi-cut ones that include a smaller form factor than is needed.
Not only are such pluggable SIMs more durable, but their contact with the device is also firmer.

## Quality grades

emnify eSIMs come in three different quality grades: **Commercial**, **Industrial**, and **MFF2**.

|                   | Commercial&nbsp;eUICC  | Industrial&nbsp;eUICC  | MFF2        |
| ----------------- | :---------------------: | :---------------: | :-------------: |
| Form factors      | Triple-cut or Dual-Cut | 2FF or 3FF        | MFF2             |
| Temperature Range<br />(JESD22-A104) | –25°C to +85°C | –40°C to +105°C | –40°C to +105°C |
| Operating voltage | 1.62V to 5.5V          | 1.62V to 5.5V     | 1.62V to 5.5V    |
| Chipset NVM size  | 704 kB                 | 704 kB            | 704 kB           |
| Chipset RAM size  | 20 kB                  | 20 kB             | 20 kB            |
| Write endurance*  | 10,000,000 cycles      | 10,000,000 cycles | 10,000,000 cycles |
| Data Retention    | 15 years at 85°C       | 15 years at 85°C  | 15 years at 85°C |
| Moisture/Reflow conditions<br /> | – | MSL3 (J-STD020) | MSL3 (J-STD020) |
| Humidity<br />(JESD22-A101D) | – |  HA as per ETSI TS 102.671 | HA as per ETSI TS 102.671 |
| Corrosion Resistance<br />(JESD22-A107) | – | – | CX as per ETSI TS 102.671 |
| Vibration Resistance<br />(JESD22-B103) | – | – | VX as per ETSI TS 102.671 |
| Mechanical Shock<br />(JESD22-B104) | – | – | SX as per ETSI TS 102.671|
| Common Criteria Certificate | CCN-CC-5/2019 | CCN-CC-5/2019 | CCN-CC-5/2019 |
| eUICC Compliance: GSMA<br />SGP.01 Embedded SIM Remote Provisioning Architecture | 1.1 | 1.1 | 1.1 |
| eUICC Compliance: GSMA<br />SGP.02 Embedded UICC Technical Specification | 3.2 | 3.2 | 3.2 |
| eUICC Compliance: GSMA<br />SGP.16 M2M Compliance Process | 1.1 | 1.1 | 1.1 |
| eUICC Compliance: TCA<br />eUICC Profile Package Interoperable Format Technical Specification | 2.1 | 2.1 | 2.1 |
| eUICC: Maximum number of profiles | 10 | 10 | 10 |
| eUICC: ISD-A and ISD-R system applets | Supported | Supported | Supported |
| eUICC: EAP-SIM and EAP-AKA authentication protocols | Supported | Supported | Supported |
| LPWAN features:<br />Suspend and resume SIM state ETSI TS 102 221<br />Poll Interval Negotiation ETSI TS 102 221 | Supported | Supported | Supported |
| OTA Capabilities on ISD-P:<br />Remote file management - RFM<br />Remote applet management - RAM | Supported | Supported | Supported |
| GlobalPlatform: All Secure Channel Protocols | Supported | Supported | Supported |
| Java Card: Standard Java Card APIs | Supported | Supported | Supported |
| Java Card: GlobalPlatform API | Supported | Supported | Supported |
| Compliance: ROHS | Yes | Yes | Yes |
| Compliance: REACH | Yes | Yes | Yes |<br />
\* 500k erase per page with OS High Endurance


## Compliance and software features

<table>
<tbody>
<tr>
  <td rowspan="4">emnify eUICC Compliance</td>
  <td rowspan="3">GSMA</td>
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
  <td>eUICC Profile Package Interoperable<br />
      Format Technical Specification</td>
  <td>2.1</td>
</tr>
<tr>
  <td rowspan="10">Software Features</td>
  <td rowspan="3">Embedded Universal Integrated Circuit Card (eUICC)</td>
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
  <td>Suspend and resume SIM state ETSI TS 102 221
      Poll Interval Negotiation ETSI TS 102 221</td>
  <td>Supported</td>
</tr>
<tr>
  <td rowspan="3">OTA Capabilities on ISD-P:<br />
      Remote file management - RFM<br />
      Remote applet management - RAM</td>
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
  <td rowspan="2">Java Card</td>
  <td>Standard Java Card APIs</td>
  <td>Supported</td>
</tr>
<tr>
  <td>GlobalPlatform API</td>
  <td>Supported</td>
</tr>
<tr>
  <td rowspan="2" colspan="2">Compliance</td>
  <td>ROHS</td>
  <td>Yes</td>
</tr>
<tr>
  <td>REACH</td>
  <td>Yes</td>
</tr>
</tbody>
</table>

## Multi-IMSI application

emnify IoT eSIM cards are equipped with a multi-IMSI applet that runs in the background using minimal resources without any negative impact on the device's performance.
This technology is similar to a mobile phone using dual-SIM technology.
The emnify IoT eSIM basically has the cellular provider information from multiple SIM cards already included. 
While emnify has roaming agreements and local contracts with operators around the world, emnify also uses operator partners to increase the network coverage footprint in order to provide a fallback when preferred networks experience outages.

The multi-IMSI applet works in the following manner.
emnify has its own operator identity ([IMSI](/glossary#imsi---international-mobile-subscriber-identity)) as well as the operator partner IMSI stored on the SIM card.
Each IMSI / partner operator usually has more than one network accessible per country.
The SIM applet also includes a preferred IMSI list per country.
For example, this list defines that IMSI *X* will be used for access in country *A* as highest priority – and as second priority another operator IMSI *Y* will be used in case the device is unable to connect. 
So when a device then moves to country *A*, the applet dynamically overwrites the active IMSI with IMSI *X* based on the preferred IMSI list.
When then operator *X* has a service outage, the SIM automatically falls back to IMSI *Y* to ensure that the device can maintain connectivity.

The selection of the preferred IMSI for each country is based on multiple factors including:

- If permanent roaming is permitted in that country
- IMSI that has the most network partners in the country
- IMSI that has the best availability of radio access types (LTE, NB-IoT, LTE-M) or features (PSM/eDRX)
