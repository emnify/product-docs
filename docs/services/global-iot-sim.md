---
description: Form factors, quality grades, multi-IMSI, eSIM, eUICC
---
# Global IoT SIM

emnify IoT SIMs are more durable than regular SIM cards and come in different [form factors](#form-factors) and [quality grades](#quality-grades).

emnify SIMs that shipped prior to 08 March 2023 have a [multi-IMSI software application](#multi-imsi-application) that enables different operator profiles to be used based on the device's geographical location.
Using this technology, emnify SIMs can leverage the [emnify IoT SuperNetwork](/services/global-iot-network).

As of 08 March 2023, every emnify SIM that ships is an [eUICC](/glossary#euicc---embedded-universal-integrated-circuit-card) (Embedded Subscriber Identity Module), commonly referred as an eSIM.
Unlike consumer eSIMs, emnify eSIMs are designed for commercial M2M applications.

The term *eSIM* is sometimes used for referring to the MFF2 form factor.
However, its broader meaning refers to both the eUUIC hardware and software that allows this next-generation SIM to be physically installed once, but upgraded and reprogrammed as often as needed.
While eSIM/eUICC technology has been widely adopted for consumer smartphones and watches, its M2M implementation for IoT use cases includes additional features needed for industrial applications.
Some of these features include:

- [OTA provisioning](/glossary#ota-provisioning)
- OTA operator profile updates
- Permanent roaming: eUICCs contain multiple [MNO](https://www.emnify.com/iot-glossary/mno) (Mobile Network Operator) profiles and can switch between them remotely
- With at least 512 MB of memory, additional applications can be installed, such as security features

The new eUICC-based emnify eSIMs are available also as pluggable SIM cards in various form factors, not just MFF2.

## Form factors

emnify SIMs are available in the following form factors:

| Form factor     | Dimensions           |
| --------------- | -------------------- |
| 2FF (mini SIM)  | 25 x 15 x 0,76 mm    |
| 3FF (Micro SIM) | 15 x 12 x 0,76 mm    |
| 4FF (Nano SIM)  | 12.3 x 8.8 x 0,67 mm |
| MFF2 (embedded) | 6 x 5 x 0.75-0.82 mm |

MFF2 eSIMs need to be soldered onto a device and are not readily removable.

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

The emnify SIM cards come in two different quality grades **Commercial** and **Industrial**.
The following table shows comparisons to a standard consumer SIM.

| Parameter | Consumer SIM | Commercial | Industrial |
| --------- | ------------ | ---------- | ---------- |
| Available form factors | 2FF, 3FF, 4FF | 2FF, 3FF, 4FF |MFF2, 2FF, 3FF (2-in-1 or 3-in-1) |
| Temperature Range | | 25° - 85°C | -40° - 105°C |
| Data Retention | 10 years | 10 years | 15 years at 85°C |
| Write Cycles | 100,000 | 500,000 | 1,000,000
| Memory | 64-128 kB | 128 kB | 128 kB |
| Corrosion Resistance Jedec JSD22-A107 | | CA | CC |
| Moisture Resistance Jedec JESD22-A102 | | 110°C / 85% RH | 130°C / 85% RH |
| Humidity Resistance Jedec JESD22-A101 | | | HA |
| Vibration Jedec JESD22-B103 | | | VA |
| Mechnical Shock Jedec JESD22-B104 | | | SA |
| Low Power features | | •&nbsp;Poll Interval negotiation •&nbsp;UICC&nbsp;suspension and resume | •&nbsp;Poll Interval negotiation •&nbsp;UICC&nbsp;suspension and resume |

## Multi-IMSI application

emnify SIM cards are equipped with a multi-IMSI applet that contains emnify’s as well as our partner operators' profiles. 
Different operator profiles are identified by their [IMSI](/glossary#imsi---international-mobile-subscriber-identity).
Each IMSI / partner operator usually has more than one network accessible per country.

The emnify SIM applet utilizes a preferred IMSI list per country.
When a device moves to a different country which has a different preferred IMSI configured, the applet dynamically overwrites the previously active IMSI with the preferred IMSI for this country. 
Similarly, when an operator’s service experiences an outage, the emnify SIM can automatically fall back to another IMSI to ensure that the connection remains uninterrupted.

The selection of the preferred IMSI for each country is based on multiple factors including:

- If permanent roaming is permitted in that country
- IMSI that has the most network partners in the country
- IMSI that has the best availability of radio access types (LTE, NB-IoT, LTE-M) or features (PSM/eDRX)
    
The Multi-IMSI applet is transparent for the device and has no impact on the device operation. 
In order to analyze which IMSI is currently in use, you can either check in the [**emnify Portal**](https://portal.emnify.com/) → [**Connected Devices**](https://portal.emnify.com/connected-devices) → **Details** or also query the device directly using the AT-command `AT+CIMI?`.
