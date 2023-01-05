# Global IoT SIM

emnify IoT SIMs are more durable than regular SIM cards and come in different [form factors](#form-factors) and [quality grades](#quality-grades).
For testing the platform services quickly without any SIM hardware - emnify offers an [eSIM](#esim) which can be downloaded directly onto a supported smartphone.
emnify also has a [multi-IMSI software application](#multi-imsi-application) directly on the SIM so different operator profiles can be used based on the location of the device.
Using this technology, emnify can provide a superset of roaming networks from traditional operators.

## Form factors

The traditional, pluggable SIM card comes in 4 different form factors:

- 1FF (approximately the size of a credit card) - 85 x 54 x 0,76mm
- 2FF (mini SIM) - 25 x 15 x 0,76mm
- 3FF (Micro SIM) - 15 x 12 x 0,76 mm
- 4FF (Nano SIM) - 12,3 x 8,8 x 0,67 mm

emnify offers pre-punched SIM cards in different combinations 2-in-1 (1FF and 2FF), 3-in-1 (1FF,2FF,3FF), and 4-in-1 (1FF,2FF,3FF,4FF).
Especially in use cases where the devices are moving, it is advisable to use a SIM that fits the device exactly and does not contain another smaller form factor punched out.
Not only are such SIMs are more durable, but their contact with the device is firmer.

Another form factor is MFF2 which is also referred to as an embedded SIM.
Its dimensions  6 x 5 x 0.75-0.82 mm.
These embedded SIMs are soldered onto a device and are not removable.

:::note
The term *eSIM* is used when referring to the MFF2 factor. Nevertheless, the term eSIM is also used when referring to SIMs whose operator profiles can be updated over the air.
These eUICC-based eSIMs can come in any of the described form factors, not just MFF2.
While eSIM/eUICC is widely adopted for consumer smartphone and watches, for IoT use cases (where the profile cannot be download via a screen or QR reader) the commercial and deployment model of the required infrastructure prohibits an easy change of operator profiles and is therefore not widely adopted.
:::

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

## eSIM

emnify offers an easy entry to test the services and platform by downloading an emnify eSIM profile to an eSIM compatible phone or tablet.
During the trial period every organization has the option to download one profile which can be used instantly.

The eSIM does not use a multi-IMSI applet (unlike the physical SIM cards) and therefore has some differences in the network coverage. 
For a list of supported devices and limitations please refer to the [knowledge base](https://support.emnify.com/hc/en-us/articles/360021545600-Evaluation-eSIM-device-support-and-restrictions#h_01F7V2BVKT0RQRVXK3VNSPYQMW).

The eSIM can be used to test and verify all emnify functionalities including:

- Availability of networks
- API functionality
- Cloud Connect and Data Streamer integration
- Zapier No-Code Integrations

## Multi-IMSI application

emnify IoT SIM cards are equipped with a multi-IMSI applet that contains emnify’s as well as our partner operators' profiles. 
Different operator profiles are identified by their [IMSI](../glossary#imsi---international-mobile-subscriber-identity).
Each IMSI / partner operator usually has more than one network accessible per country.

The SIM applet utilizes a preferred IMSI list per country.
When a device moves to a different country which has a different preferred IMSI configured, the applet dynamically overwrites the previously active IMSI with the preferred IMSI for this country. 
Similarly, when an operator’s service experiences an outage, the SIM can automatically fall back to another IMSI to ensure that the connection remains uninterrupted.

The selection of the preferred IMSI for each country is based on multiple factors including:

- If permanent roaming is permitted in that country
- IMSI that has the most network partners in the country
- IMSI that has the best availability of radio access types (LTE, NB-IoT, LTE-M) or features (PSM/eDRX)
    
The Multi-IMSI applet is transparent for the device and has no impact on the device operation. 
In order to analyze which IMSI is currently in use, you can either check in the **emnify Portal** → **Connected devices** → **Details** or also query the device directly using the AT-command `AT+CIMI?`.
