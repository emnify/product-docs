---
description: Form factors, quality grades, multi-IMSI, eSIM
---
# emnify eSIMs

As of 08 March 2023, every emnify eSIM that ships is an [eUICC](/glossary#euicc---embedded-universal-integrated-circuit-card) (Embedded Subscriber Identity Module), commonly referred as an eSIM.
Unlike consumer eSIMs, the emnify eSIM is designed for commercial M2M applications.

The term *eSIM* is sometimes used for referring to the MFF2 form factor.
However, the term eSIM in its broader meaning refers to both the eUUIC hardware and software that allows this next generation SIM to be physically installed once, but upgraded and reprogrammed as needed.

These eUICC-based eSIMs can come in any of the described form factors, not just MFF2.
While eSIM/eUICC is widely adopted for consumer smartphone and watches, for IoT use cases (where the profile cannot be download via a screen or QR reader) the commercial and deployment model of the required infrastructure prohibits an easy change of operator profiles and is therefore not widely adopted.

Some of the advantages that eSIMs offer are:

- [OTA provisioning](/glossary#ota-provisioning) and operator profile updates 
- eUICCs contain multiple MNO (Mobile Network Operator) profiles and can switch between them remotely
- 512 MB of memory means sufficient storage for additional applications, such as security features 

## Form factors

emnify eSIMs are available in the following form factors:

| Format Factor    | Dimensions           |
| ---------------- | -------------------- |
| 2FF (mini eSIM)  | 25 x 15 x 0,76 mm    |
| 3FF (Micro eSIM) | 15 x 12 x 0,76 mm    |
| 4FF (Nano eSIM)  | 12.3 x 8.8 x 0,67 mm |
| MFF2 (embedded)  | 6 x 5 x 0.75-0.82 mm |

MFF2 eSIMs need to be soldered onto a device and are not readily removable.

Visit the [emnify eSIM Shop](https://portal.emnify.com/sim-order) where you can choose between these packages:

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

In use cases where devices are mobile, we highly recommend choosing the eSIM form factor that fits the device exactly and does not contain another smaller form factor punched out.
Not only are such eSIMs are more durable, but their contact with the device is firmer.



## Quality grades

The emnify eSIM cards come in two different quality grades **Commercial** and **Industrial**.
The following table shows comparisons to a standard consumer eSIM.

| Parameter | Consumer eSIM | Commercial | Industrial |
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

emnify IoT eSIM cards are equipped with a multi-IMSI applet that contains emnify’s as well as our partner operators' profiles. 
Different operator profiles are identified by their [IMSI](/glossary#imsi---international-mobile-subscriber-identity).
Each IMSI / partner operator usually has more than one network accessible per country.

The eSIM applet utilizes a preferred IMSI list per country.
When a device moves to a different country which has a different preferred IMSI configured, the applet dynamically overwrites the previously active IMSI with the preferred IMSI for this country. 
Similarly, when an operator’s service experiences an outage, the eSIM can automatically fall back to another IMSI to ensure that the connection remains uninterrupted.

The selection of the preferred IMSI for each country is based on multiple factors including:

- If permanent roaming is permitted in that country
- IMSI that has the most network partners in the country
- IMSI that has the best availability of radio access types (LTE, NB-IoT, LTE-M) or features (PSM/eDRX)
    
The Multi-IMSI applet is transparent for the device and has no impact on the device operation. 
In order to analyze which IMSI is currently in use, you can either check in the [**emnify Portal**](https://portal.emnify.com/) → [**Connected Devices**](https://portal.emnify.com/connected-devices) → **Details** or also query the device directly using the AT-command `AT+CIMI?`.
