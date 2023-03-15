---
description: Form factors, quality grades, multi-IMSI, eSIM, eUICC
---
# Global IoT SIM

emnify provides eSIMs that are built specifically for IoT solutions.
Compared to regular operator SIMs, emnify eSIMs come in different quality grades that are more durable.
They can be updated [over the air (OTA)](/glossary#ota---overtheair) using different eSIM remote SIM provisioning technologies and come in different [form factors](#form-factors).

emnify eSIMs have a [multi-IMSI applet](#multi-imsi-applet) installed on the SIM.
The multi-IMSI applet makes sure that the best network and network partners are used based a device's location.
Using this technology, emnify provides a larger number of networks than traditional operators. With access to the largest global [LPWAN](global-iot-network#lpwan-lte-mnb-iot) (LTE-M and NB-IoT) footprint, emnify SIMs ensure regulatory network access in over 100 countries.

## eSIM technology

### M2M eSIM

Every new SIM you order from emnify is an [M2M eSIM](https://www.gsma.com/esim/remote-sim-provisioning-for-machine-to-machine/) (compliant with SGP.01, SGP.02, and SGP.016).
The M2M eSIM is also referred to as an [eUICC](/glossary#euicc---embedded-universal-integrated-circuit-card) (Embedded universal integrated circuit card).
Unlike a regular SIM (UICC), an eUICC can be updated over the air.
Because M2M eSIMs can be updated with new configurations or profiles, this eliminates the need for SIM swaps.

### Consumer eSIM

emnify also offers consumer eSIMs for phones, tablets, and smart watches.
The consumer eSIM can be downloaded to a device by scanning a QR code.
If you are interested in consumer eSIM technology, please [contact us](https://www.emnify.com/talk-to-us).

## Form factors

emnify [M2M eSIMs](#m2m-esim) are available in the following form factors:

| Form factor     | Dimensions             |
| --------------- | ---------------------- |
| **2FF** (Mini SIM)  | 15 x 25 x 0.75 mm      |
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

emnify eSIMs come in three different quality grades: **Commercial eUICC**, **Industrial eUICC**, and **MFF2**.

<table>
<thead>
    <th colspan="3"></th>
    <th>Commercial eUICC</th>
    <th>Industrial eUICC</th>
    <th>MFF2</th>
  </thead>
<tbody>
<tr>
  <td rowspan="15">Hardware characteristics</td>
  <td rowspan="2">Form Factor</td>
  <td>Embedded/solderable</td>
  <td align="center">-</td>
  <td align="center">-</td>
  <td align="center">MFF2</td>
</tr>
<tr>
  <td>Removable Card</td>
  <td>Triple-cut or Dual-Cut</td>
  <td>2FF or 3FF</td>
  <td align="center">-</td>
</tr>
<tr>
  <td rowspan="5">Chip Type</td>
  <td>Operational and storage temperature</td>
  <td>–25°C to +85°C (JESD22-A104)</td>
  <td colspan="2" align="center">–40°C to +105°C (JESD22-A104)</td>
</tr>
<tr>
  <td>Operating voltage</td>
  <td colspan="3" align="center">1.62V to 5.5V</td>
</tr>
<tr>
  <td>Interface</td>
  <td colspan="3" align="center">ISO-7816, T=0</td>
</tr>
<tr>
  <td>Chipset NVM size</td>
  <td colspan="3" align="center">704 Kbytes</td>
</tr>
<tr>
  <td>Chipset RAM size</td>
  <td colspan="3" align="center">20 Kbytes</td>
</tr>
<tr>
  <td rowspan="8">NVRAM characteristics</td>
  <td>Write Endurance</td>
  <td colspan="3">500k erase per page 10M cycles with OS High Endurance</td>
</tr>
<tr>
  <td>Data retention</td>
  <td colspan="3" align="center">15 years @85°C</td>
</tr>
<tr>
  <td>Moisture/Reflow conditions</td>
  <td align="center">-</td>
  <td colspan="2">MSL3 (J-STD020)</td>
</tr>
<tr>
  <td>Humidity</td>
  <td align="center">-</td>
  <td colspan="2">HA as per ETSI TS 102.671 / (JESD22-A101D)</td>
</tr>
<tr>
  <td>Corrosion</td>
  <td align="center">-</td>
  <td align="center">-</td>
  <td>CX as per ETSI TS 102.671 (JESD22-A107)</td>
</tr>
<tr>
  <td>Vibration</td>
   <td align="center">-</td>
   <td align="center">-</td>
  <td>VX as per ETSI TS 102.671 (JESD22-B103)</td>
</tr>
<tr>
  <td>Shock</td> <td align="center">-</td> <td align="center">-</td>
  <td>SX as per ETSI TS 102.671 (JESD22-B104)</td>
</tr>
<tr>
  <td>Common Criteria Certificate</td>
  <td colspan="3" align="center">CCN-CC-5/2019</td>
</tr>
</tbody>
</table>

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
  <td>Suspend and resume SIM state ETSI TS 102 221<br />
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

## Multi-IMSI applet
emnify eSIM cards are equipped with a multi-IMSI applet that runs in the background using minimal resources without any negative impact on the device's performance.
This technology is similar to a mobile phone using dual-SIM technology.
An emnify eSIM has cellular provider information from multiple SIM cards already included. 
While emnify has roaming agreements and local contracts with operators around the world, emnify also uses partner operators to increase the network coverage footprint in order to provide a fallback when preferred networks experience outages.

The multi-IMSI applet works in the following manner.
emnify has its own operator identity ([IMSI](/glossary#imsi---international-mobile-subscriber-identity)) as well as the partner operator's IMSI stored on the SIM card.
Each IMSI / partner operator usually has more than one network accessible per country.
The applet also includes a preferred IMSI list per country.
For example, this list defines that IMSI *X* will have the highest priority for access in country *A*.
However, if the device can't connect, another operator, IMSI *Y*, will be next on the list of priorities.
So when a device then moves to country *A*, the applet dynamically overwrites the active IMSI with IMSI *X* based on the preferred IMSI list.
Then when operator *X* has a service outage, the SIM automatically falls back to IMSI *Y* to ensure the device can maintain connectivity.

The selection of the preferred IMSI for each country is based on multiple factors, including:

- If permanent roaming is permitted in that country
- IMSI that has the most network partners in the country
- IMSI that has the best availability of radio access types (LTE, NB-IoT, LTE-M) or features (PSM/eDRX)
