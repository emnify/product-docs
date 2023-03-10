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

emnify eSIM cards come in two different quality grades **Commercial** and **Industrial**.
The following table shows comparisons to a standard consumer SIM.

| Parameter | Consumer SIM | Commercial | Industrial |
| --------- | ------------ | ---------- | ---------- |
| Available form factors | 2FF, 3FF, 4FF | 2FF, 3FF, 4FF |MFF2, 2FF, 3FF (2-in-1 or 3-in-1) |
| Temperature Range | | -25° - 85°C | -40° - 105°C |
| Data Retention | 10 years | 10 years | 15 years at 85°C |
| Write Cycles | 100,000 | 500,000 | 10,000,000 cycles with OS High Endurance |
| Memory | 64-128 kB | 128 kB | 704 kB |
| Corrosion Resistance Jedec JSD22-A107 | | CA | CC |
| Moisture Resistance Jedec JESD22-A102 | | 110°C / 85% RH | 130°C / 85% RH |
| Humidity Resistance Jedec JESD22-A101 | | | HA |
| Vibration Jedec JESD22-B103 | | | VA |
| Mechnical Shock Jedec JESD22-B104 | | | SA |
| Low Power features | | •&nbsp;Poll Interval negotiation •&nbsp;UICC&nbsp;suspension and resume | •&nbsp;Poll Interval negotiation •&nbsp;UICC&nbsp;suspension and resume |

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
