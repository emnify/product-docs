---
description: List of all available event types
last_update: 
  date: 09-08-2023
slug: /system-events/event-types
---

# Event types

The following is a list of available event types, including their corresponding IDs and descriptions.

:::note API Reference
[Event type object](https://cdn.emnify.net/api/doc/event.html#event-type-object)
:::

## Generic events

| ID  | Description         |
| :-- | :------------------ |
| 0   | [Generic](#generic) |

### Generic

Data session disconnected while applying the updated actions on the connectivity ([PDP sessions](#data-connection-lifecycle)) or while applying the [updated quota information](#data-quota-management).

:::info
Other generic event triggers are possible.

We're in the process of adding more specific event types that will replace these.
We'll update this list as new event types are created.
:::

<details className="custom-details-example">
  <summary>Example JSON response: disconnecting data access for a device to apply throttling action</summary>

```json
{
  "timestamp": "2021-10-27T11:59:29.000Z",
  "alert": true,
  "description": "Disconnecting data access for endpoint to apply throttling action.",
  "id": 543839962673704,
  "event_type": {
    "id": 0,
    "description": "Generic"
  },
  "event_source": {
    "id": 1,
    "description": "Policy Control"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 891418,
    "name": "Sample Corp"
  },
  "endpoint": {
    "id": 55214676,
    "imei": "908525440918796",
    "ip_address": "27.187.78.212",
    "name": "Test Sim 2",
    "tags": null
  },
  "sim": {
    "iccid": "7772229804214642989",
    "id": 7053671,
    "production_date": "2020-12-23T13:02:11.000Z"
  },
  "imsi": {
    "id": 51595711,
    "import_date": "2020-12-23T13:02:11.000Z",
    "imsi": "37807012732326"
  }
}
```

</details>

<details className="custom-details-example">
  <summary>Example JSON response: disconnecting data access for a device after updating the quota</summary>

```json
{
  "timestamp": "2021-10-27T12:38:44.000Z",
  "alert": true,
  "description": "Disconnecting data access for endpoint, because quota has been updated.",
  "id": 843273935666500,
  "event_type": {
    "id": 0,
    "description": "Generic"
  },
  "event_source": {
    "id": 1,
    "description": "Policy Control"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 719710,
    "name": "Sample Corp"
  },
  "endpoint": {
    "id": 13296071,
    "imei": "125850842548013",
    "ip_address": "145.215.185.221",
    "name": "Test Sim 2",
    "tags": null
  },
  "sim": {
    "iccid": "6820705229564377698",
    "id": 3951118,
    "production_date": "2020-12-23T13:02:11.000Z"
  },
  "imsi": {
    "id": 69382468,
    "import_date": "2020-12-23T13:02:11.000Z",
    "imsi": "57019691302535"
  }
}
```

</details>

## Network attachment and location

| ID  | Description                                   |
| :-- | :-------------------------------------------- |
| 1   | [Update location](#update-location)           |
| 2   | [Update GPRS location](#update-gprs-location) |
| 15  | [Purge location](#purge-location)             |
| 16  | [Purge GPRS location](#purge-gprs-location)   |

### Update location

When a device attaches for the first time, it sends an authentication request.
This request is immediately followed by an `Update location` event.

After the first authentication, the device sends additional `Update location` events to inform the network about the current location.
This happens periodically or when entering a new location area.

The `Update location` event registers the device in the circuit-switched domain (2G/3G) and packet-switched domain (4G/LTE).
It enables the network to know the location/region of the device to send/retrieve the subscription information.
In 2G/3G it allows the device to send and receive SMS.

**Example**: a SIM card has (re)authenticated with a different network element.
If successful, the device appears as **Attached** in the [emnify Portal](/system-events/usage#emnify-portal) and is ready to receive SMS.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "id": 176777623,
  "alert": false,
  "description": "New location received from VLR for IMSI='901430111111111', now
attached to VLR='491720000095'.",
  "timestamp": "2017-10-26T07:28:00.000+0000",
  "event_type": {
    "id": 1,
    "description": "Update location"
  },
  "event_source": {
    "id": 0,
    "description": "Network"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 215294,
    "name": "Demo Company"
  },
  "endpoint": {
    "id": 733023,
    "name": "GPS Tracker",
    "ip_address": "127.137.56.181",
    "tags": null,
    "imei": "732554536373291"
  },
  "imsi": {
    "id": 216476,
    "imsi": "401960166508658",
    "import_date": "2016-12-27T10:09:23.000+0000"
  },
  "sim": {
    "id": 2614385,
    "iccid": "3590376990354243198",
    "production_date": "2016-12-27T10:09:23.000+0000"
  },
  "detail": {
    "id": 3,
    "name": "Vodafone",
    "country": {
      "id": 74,
      "name": "Germany",
      "country_code": "49",
      "mcc": "262",
      "iso_code": "de"
    },
    "tapcode": [
      {
        "id": 2,
        "tapcode": "DEUD2"
      }
    ],
    "mnc": [
      {
        "id": 3,
        "mnc": "02"
      }
    ]
  }
}
```

</details>

### Update GPRS location

Similar to the [`Update location`](#update-location) event, the `Update GPRS location` event shows the registration on the packet-switched (PS) domain.
This event is also sent periodically or when changing the location area.

**Example**: a SIM card has successfully registered for data sessions with a different network element.

:::note
A device can only establish a data session after registering on the PS domain.
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-10-24T12:44:09.901Z",
  "alert": false,
  "description": "New location received from SGSN for IMSI='668507304809640', now attached to SGSN='569307110740151', IP='213.181.60.148'.",
  "id": 158057547412841,
  "event_type": {
    "id": 2,
    "description": "Update GPRS location"
  },
  "event_source": {
    "id": 0,
    "description": "Network"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 35030,
    "name": "Test Org"
  },
  "endpoint": {
    "id": 11396946,
    "imei": "818076512105738",
    "ip_address": "163.93.166.228",
    "name": "Test Sim 2",
    "tags": null
  },
  "sim": {
    "iccid": "14610948273291945919",
    "id": 1748517,
    "production_date": "2020-12-23T13:02:11.000Z"
  },
  "imsi": {
    "id": 322634,
    "import_date": "2020-12-23T13:02:11.000Z",
    "imsi": "668507304809640"
  },
  "detail": {
    "id": 3,
    "name": "Vodafone",
    "country": {
      "id": 74,
      "name": "Germany",
      "country_code": "49",
      "mcc": "262",
      "iso_code": "de"
    },
    "tapcode": [
      {
        "id": 2,
        "tapcode": "DEUD2"
      }
    ],
    "mnc": [
      {
        "id": 3,
        "mnc": "02"
      }
    ]
  }
}
```

</details>

### Purge location

The `Purge location` event can be sent by the visited or home network to delete all location information for the circuit-switched (CS) domain.

The visited network may send this event if the device is unreachable or switched off for a longer period, indicating to the home network that the device is unavailable.

The home network (emnify) may send this event to delete all information on the visited network, so the device needs a new authentication.

Once executed, the [connectivity status](/glossary#connectivity-status) appears as **Offline** in the [emnify Portal](/system-events/usage#emnify-portal).

**Example**: the network deletes the routing information for a mobile-terminated call or mobile-terminated short message and marks the device not reachable.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-10-27T10:49:23.673Z",
  "alert": false,
  "description": "VLR location information has been purged for IMSI='674828638458881'.",
  "id": 5993503928,
  "event_type": {
    "id": 15,
    "description": "Purge location"
  },
  "event_source": {
    "id": 0,
    "description": "Network"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 58617,
    "name": "Test Org"
  },
  "endpoint": {
    "id": 16292274,
    "imei": "544699331267254",
    "ip_address": "88.8.18.46",
    "name": "Test Sim 2",
    "tags": null
  },
  "sim": {
    "iccid": "71247175489021804405",
    "id": 1135076,
    "production_date": "2020-12-23T13:02:11.000Z"
  },
  "imsi": {
    "id": 8245866,
    "import_date": "2020-12-23T13:02:11.000Z",
    "imsi": "674828638458881"
  }
}
```

</details>

### Purge GPRS location

Similar to the [`Purge location`](#purge-location) event, the `Purge GPRS location` event deletes all state information in the visited or home network but for the packet-switched (PS) domain.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-10-24T12:43:51.486Z",
  "alert": false,
  "description": "SGSN location information has been purged for IMSI='67282840195069'.",
  "id": 311518630325,
  "event_type": {
    "id": 16,
    "description": "Purge GPRS location"
  },
  "event_source": {
    "id": 0,
    "description": "Network"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 4218,
    "name": "Test Org"
  },
  "endpoint": {
    "id": 11914780,
    "imei": "796069824764979",
    "ip_address": "46.127.35.53",
    "name": "Test Sim 2",
    "tags": null
  },
  "sim": {
    "iccid": "5061064643679211967",
    "id": 3686752,
    "production_date": "2020-12-23T13:02:11.000Z"
  },
  "imsi": {
    "id": 78713389,
    "import_date": "2020-12-23T13:02:11.000Z",
    "imsi": "67282840195069"
  }
}
```

</details>

## Data connection lifecycle

| ID  | Description                               |
| :-- | :---------------------------------------- |
| 3   | [Create PDP Context](#create-pdp-context) |
| 5   | [Delete PDP Context](#delete-pdp-context) |

### Create PDP Context

A [Packet Data Protocol (PDP) context](/glossary/#pdp-context) allows UE to exchange IP packets over the network.

A `Create PDP Context` event indicates the activation of data connectivity.

**Example**: a device has established a data session and started transferring data.
This device appears as **Online** in the [emnify Portal](/system-events/usage#emnify-portal) as long as there hasn't been a subsequent [Delete PDP Context](#delete-pdp-context) event.

<details className="custom-details-example">
  <summary>Example JSON response: create PDP context accepted</summary>

```json
{
  "timestamp": "2021-10-27T08:38:02.000Z",
  "alert": false,
  "description": "New PDP Context successfully activated with SGSN CP=60.195.159.61, DP=117.72.59.30.",
  "id": 31877325941,
  "event_type": {
    "id": 3,
    "description": "Create PDP Context"
  },
  "event_source": {
    "id": 0,
    "description": "Network"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 1825,
    "name": "Test Org"
  },
  "endpoint": {
    "id": 20200078,
    "imei": "960407272413998",
    "ip_address": "189.79.243.228",
    "name": "Test Sim 2",
    "tags": null
  },
  "sim": {
    "iccid": "5746435358418205328",
    "id": 646486,
    "production_date": "2020-12-23T13:02:11.000Z"
  },
  "imsi": {
    "id": 12105613,
    "import_date": "2020-12-23T13:02:11.000Z",
    "imsi": "693601932595201"
  },
  "detail": {
    "country": {
      "country_code": "49",
      "mcc": "262",
      "name": "Germany",
      "iso_code": "de",
      "id": 74
    },
    "name": "Vodafone",
    "pdp_context": {
      "tariff_profile_id": "395978", // coverage policy
      "tx_teid_control_plane": 570842943,
      "breakout_ip": "97.106.216.29",
      "tariff_id": "555", // data plan
      "rac": null,
      "ratezone_id": "8178", // coverage area
      "ci": 5174,
      "imeisv": "6887426203768011",
      "lac": 921,
      "sac": null,
      "gtp_version": 1,
      "rat_type": 2,
      "mcc": "262",
      "tx_teid_data_plane": 557727595,
      "ue_ip_address": "101.124.109.214",
      "ggsn_data_plane_ip_address": "150.85.110.76",
      "tunnel_created": "2021-10-27T08:38:02",
      "pdp_context_id": 51755555,
      "ggsn_control_plane_ip_address": "60.195.159.61",
      "sgsn_control_plane_ip_address": "117.72.59.30",
      "nsapi": 5,
      "region": "eu-west-1",
      "apn": "em",
      "mnc": "02",
      "sgsn_data_plane_ip_address": "223.253.0.120",
      "operator_id": "3",
      "imsi": "82186563190127",
      "rx_teid": 96601675
    },
    "id": 3
  }
}
```

</details>

<details className="custom-details-example">
  <summary>Example JSON response: create PDP context rejected because data service is disabled in the service profile</summary>

```json
{
  "timestamp": "2021-10-24T12:43:51.000Z",
  "alert": true,
  "description": "PDP Context Request rejected, because data service disabled in service profile.",
  "id": 2836707022,
  "event_type": {
    "id": 3,
    "description": "Create PDP Context"
  },
  "event_source": {
    "id": 1,
    "description": "Policy Control"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 1222,
    "name": "Test Org"
  },
  "endpoint": {
    "id": 14002489,
    "imei": "211785743231328",
    "ip_address": "173.97.253.42",
    "name": "Test Sim 2",
    "tags": null
  },
  "sim": {
    "iccid": "41595256071723032296",
    "id": 801148,
    "production_date": "2020-12-23T13:02:11.000Z"
  },
  "imsi": {
    "id": 62004293,
    "import_date": "2020-12-23T13:02:11.000Z",
    "imsi": "175904061168404"
  }
}
```

</details>

<details className="custom-details-example">
  <summary>Example JSON response: create PDP context rejected because the device doesn't have a quota</summary>

```json
{
  "timestamp": "2021-10-27T08:55:59.000Z",
  "alert": true,
  "description": "PDP Context Request rejected, because endpoint has no quota.",
  "id": 7745432124,
  "event_type": {
    "id": 3,
    "description": "Create PDP Context"
  },
  "event_source": {
    "id": 1,
    "description": "Policy Control"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 177,
    "name": "Test Org"
  },
  "endpoint": {
    "id": 10238,
    "imei": "127957062642784",
    "ip_address": "113.252.159.78",
    "name": "Test Sim 2",
    "tags": null
  },
  "sim": {
    "iccid": "6300267938152764468",
    "id": 3012262,
    "production_date": "2020-12-23T13:02:11.000Z"
  },
  "imsi": {
    "id": 66367669,
    "import_date": "2020-12-23T13:02:11.000Z",
    "imsi": "85785128232645"
  }
}
```

</details>

<details className="custom-details-example">
  <summary>Example JSON response: create PDP Context Request rejected because the device's quota volume is exhausted, and the defined action is to block data traffic</summary>

```json
{
  "timestamp": "2021-10-27T09:12:27.000Z",
  "alert": true,
  "description": "PDP Context Request rejected, because quota volume of endpoint is exhausted and defined action is to block data traffic.",
  "id": 7598008306,
  "event_type": {
    "id": 3,
    "description": "Create PDP Context"
  },
  "event_source": {
    "id": 1,
    "description": "Policy Control"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 8087,
    "name": "Test Org"
  },
  "endpoint": {
    "id": 39063467,
    "imei": "454208457191395",
    "ip_address": "120.133.145.19",
    "name": "Test Sim 2",
    "tags": null
  },
  "sim": {
    "iccid": "91447762462599458698",
    "id": 609020,
    "production_date": "2020-12-23T13:02:11.000Z"
  },
  "imsi": {
    "id": 97534929,
    "import_date": "2020-12-23T13:02:11.000Z",
    "imsi": "715343715967543"
  }
}
```

</details>

<details className="custom-details-example">
  <summary>Example JSON response: create PDP context request rejected because the SIM isn't activated</summary>

```json
{
  "timestamp": "2021-10-27T12:33:17.000Z",
  "alert": true,
  "description": "PDP Context Request rejected, because SIM is not activated.",
  "id": 117138486882,
  "event_type": {
    "id": 3,
    "description": "Create PDP Context"
  },
  "event_source": {
    "id": 1,
    "description": "Policy Control"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 4823,
    "name": "Test Org"
  },
  "endpoint": {
    "id": 1257319,
    "imei": "25631320011492911",
    "ip_address": "230.105.77.310",
    "name": "Test Sim 2",
    "tags": null
  },
  "sim": {
    "iccid": "87901100765269508687",
    "id": 45142,
    "production_date": "2020-12-23T13:02:11.000Z"
  },
  "imsi": {
    "id": 497998,
    "import_date": "2020-12-23T13:02:11.000Z",
    "imsi": "76604441813689"
  }
}
```

</details>

### Delete PDP Context

Data session between the device and the network is deleted.

**Example**: a device disconnected and ended a data transfer.
The event details also show the data transmitted, and the device appears as **Attached** in the [emnify Portal](/system-events/usage#emnify-portal).

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
    "timestamp": "2021-10-27T08:40:10.000Z",
    "alert": false,
    "description": "PDP Context deleted.",
    "id": 1906081382592,
    "event_type": {
        "id": 5,
        "description": "Delete PDP Context"
    },
    "event_source": {
        "id": 0,
        "description": "Network"
    },
    "event_severity": {
        "id": 0,
        "description": "Info"
    },
    "organisation": {
        "id": 39089,
        "name": "Test Org"
    },
    "endpoint": {
        "id": 8163445,
        "imei": "82586199276110710",
        "ip_address": "104.86.8.106",
        "name": "Test Sim 2",
        "tags": null
    },
    "sim": {
        "iccid": "9335742231782809262",
        "id": 1931060,
        "production_date": "2020-12-23T13:02:11.000Z"
    },
    "imsi": {
        "id": 5216225,
        "import_date": "2020-12-23T13:02:11.000Z",
        "imsi": "49652622520507"
    },
    "detail": {
        "country": {
            "country_code": "49",
            "mcc": "262",
            "name": "Germany",
            "iso_code": "de",
            "id": 82
        },
        "name": "Vodafone",
        "volume": {
            "total": 0.641984,
            "rx": 0.418811,
            "tx": 0.223173
        },
        "pdp_context": {
            "tx_teid_control_plane": 397629956,
            "breakout_ip": null,
            "rac": null,
            "ci": 6471,
            "imeisv": "4555797980633712",
            "lac": 767,
            "sac": null,
            "gtp_version": 1,
            "rat_type": 2,
            "mcc": "262",
            "tx_teid_data_plane": 966839357,
            "ue_ip_address": "66.185.97.229",
            "ggsn_data_plane_ip_address": "225.129.61.136",
            "tunnel_created": "2021-10-27T08:38:02",
            "pdp_context_id": 79790039,
            "ggsn_control_plane_ip_address": "67.185.18.116",
            "sgsn_control_plane_ip_address": "234.39.123.228",
            "nsapi": 5,
            "region": "eu-west-1",
            "apn": null,
            "mnc": "02",
            "sgsn_data_plane_ip_address": "173.69.12.45",
            "imsi": "369573775632443",
            "rx_teid": 18195957
        },
        "id": 3
    }
}
```

</details>

## Application and user authentication

| ID  | Description                                                             |
| :-- | :---------------------------------------------------------------------- |
| 6   | [User authentication failed](#user-authentication-failed)               |
| 7   | [Application authentication failed](#application-authentication-failed) |
| 13  | [Support Access](#support-access)                                       |
| 14  | [Multi-factor Authentication](#multi-factor-authentication)             |

### User authentication failed

Someone tried (and failed) to authenticate using an email from your organization.

<details className="custom-details-example">
  <summary>Example JSON response: authentication failed due to a wrong password</summary>

```json
{
    "timestamp": "2021-11-04T11:47:10.517Z",
    "alert": false,
    "description": "Failed authentication request from 'example@yourorg.com', Reason: Invalid password from IP 176.11.24.173, 45.196.240.161",
    "id": 13096831909,
    "event_type": {
        "id": 6,
        "description": "User authentication failed"
    },
    "event_source": {
        "id": 2,
        "description": "API"
    },
    "event_severity": {
        "id": 1,
        "description": "Warn"
    },
    "organisation": {
        "id": 5833,
        "name": "Test Org"
    },
    "user": {
        "id": 3492824,
        "name": "John Doe",
        "username": "example@yourorg.com"
    }
}
```

</details>

<details className="custom-details-example">
  <summary>Example JSON response: authentication failed after too many attempts</summary>

```json
{
    "timestamp": "2021-11-04T11:49:32.141Z",
    "alert": false,
    "description": "Failed authentication request from 'example@yourorg.com', Reason: Invalid password. Too many failed authentication requests from IP 139.39.233.94, 32.7.85.228",
    "id": 975229042336,
    "event_type": {
        "id": 6,
        "description": "User authentication failed"
    },
    "event_source": {
        "id": 2,
        "description": "API"
    },
    "event_severity": {
        "id": 1,
        "description": "Warn"
    },
    "organisation": {
        "id": 2981,
        "name": "Test Org"
    },
    "user": {
        "id": 816899,
        "name": "John Doe",
        "username": "example@yourorg.com"
    }
}
```

</details>

### Application authentication failed

Application token failed to authenticate.

<details className="custom-details-example">
  <summary>Example response message</summary>

```text
Failed authentication request from 'Application Token Name', Reason: TokenStatus Revoked from IP 54.64.35.156
```

</details>

### Support Access

emnify team accessed your organization on behalf of one of your users for service or support purposes.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
    "timestamp": "2021-11-04T12:48:12.977Z",
    "alert": false,
    "description": "Support user max.mustermann@emnify.com of organisation emnify GmbH generated a support token for user example-user@test.com of organisation Test Org",
    "id": 136301313516,
    "event_type": {
        "id": 13,
        "description": "Support Access"
    },
    "event_source": {
        "id": 2,
        "description": "API"
    },
    "event_severity": {
        "id": 1,
        "description": "Warn"
    },
    "organisation": {
        "id": 4511,
        "name": "Test Org"
    },
    "user": {
        "id": 601841,
        "name": "John Doe",
        "username": "example-user@test.com"
    },
    "detail": {
        "support_username": "max.mustermann@emnify.com",
        "support_user_org": {
            "id": 2,
            "name": "emnify GmbH"
        },
        "target_username": "example-user@test.com"
    }
}
```

</details>

### Multi-factor Authentication

User removed multi-factor authentication (MFA) from their account.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
    "timestamp": "2021-11-04T12:51:40.100Z",
    "alert": false,
    "description": "MFA key with Id '717' of Type 'Time-Based One-Time Password' deleted for user 'user@test.com'",
    "id": 164681229500,
    "event_type": {
        "id": 14,
        "description": "Multi-factor Authentication"
    },
    "event_source": {
        "id": 2,
        "description": "API"
    },
    "event_severity": {
        "id": 0,
        "description": "Info"
    },
    "organisation": {
        "id": 5253,
        "name": "Test Org"
    },
    "user": {
        "id": 176257,
        "name": "John Doe",
        "username": "user@test.com"
    }
}
```

</details>

## User management

| ID  | Description                     |
| :-- | :------------------------------ |
| 41  | [User verified](#user-verified) |
| 46  | [User deleted](#user-deleted)   |

### User verified

User successfully verified their email.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-20T00:12:23.000Z",
  "alert": false,
  "description": "User 'user@sample.com' verified successfully",
  "id": 85170815043,
  "event_type": {
    "id": 41,
    "description": "User verified"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 14543,
    "name": "Sample Corp"
  },
  "user": {
    "id": 676919,
    "name": "Sample User",
    "username": "user@sample.com"
  }
}
```

</details>

### User deleted

A user deleted another user's account.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-20T08:52:10.000Z",
  "alert": false,
  "description": "User 'user@sample.com' deleted",
  "id": 1082729721368,
  "event_type": {
    "id": 46,
    "description": "User deleted"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 53246,
    "name": "Sample Corp"
  },
  "user": {
    "id": 292,
    "name": "Sample Admin",
    "username": "admin@sample.com"
  },
  "detail": {
    "user": {
      "id": 82894,
      "username": "user@sample.com"
    }
  }
}
```

</details>

## Device status management

| ID  | Description                             |
| :-- | :-------------------------------------- |
| 8   | [SIM activation](#sim-activation)       |
| 9   | [SIM suspension](#sim-suspension)       |
| 10  | [SIM deletion](#sim-deletion)           |
| 42  | [Endpoint enabled](#endpoint-enabled)   |
| 43  | [Endpoint disabled](#endpoint-disabled) |
| 45  | [SIM factory test](#sim-factory-test)   |
| 48  | [SIM registration](#sim-registration)   |
| 50  | [SIM Released](#sim-registration)       |
| 51  | [SIM Assigned](#sim-assigned)           |

### SIM activation

The SIM is patched to the **Activated** [status](/glossary#sim-status) after previously holding one of the following statuses:
**Issued**, **Suspended**, or **Factory Test**.

You can manually trigger this event by using the [emnify Portal or REST API](/system-events/usage).
Or, it's automatically triggered when the factory test mode threshold (data or SMS) is reached.

:::note
Activated SIMs can use network services.
:::

<details className="custom-details-example">
  <summary>Example JSON response: SIM status changed from <b>Suspended</b> to <b>Activated</b></summary>

```json
{
    "timestamp": "2021-10-27T08:44:56.147Z",
    "alert": false,
    "description": "Status of SIM changed from 'Suspended' to 'Activated'",
    "id": 2107485359,
    "event_type": {
        "id": 8,
        "description": "SIM activation"
    },
    "event_source": {
        "id": 2,
        "description": "API"
    },
    "event_severity": {
        "id": 0,
        "description": "Info"
    },
    "organisation": {
        "id": 624,
        "name": "Test Org"
    },
    "endpoint": {
        "id": 83173458,
        "imei": "9953599921446542",
        "ip_address": "174.249.170.160",
        "name": "Factory Test Sim 2",
        "tags": null
    },
    "sim": {
        "iccid": "8242757752885188552",
        "id": 3668977,
        "production_date": "2020-12-23T13:02:11.000Z"
    },
    "imsi": {
        "id": 323245909,
        "import_date": "2020-12-23T13:02:11.000Z",
        "imsi": "44137163473706"
    }
}
```

</details>

<details className="custom-details-example">
  <summary>Example JSON response: SIM activation after Factory Test volume reached</summary>

```json
{
    "timestamp": "2021-10-27T11:58:15.000Z",
    "alert": false,
    "description": "SIM activated after factory test volume reached.",
    "id": 15235673491,
    "event_type": {
        "id": 8,
        "description": "SIM activation"
    },
    "event_source": {
        "id": 1,
        "description": "Policy Control"
    },
    "event_severity": {
        "id": 0,
        "description": "Info"
    },
    "organisation": {
        "id": 35216,
        "name": "Test Org"
    },
    "endpoint": {
        "id": 39654118,
        "imei": "8516353639994804",
        "ip_address": "174.238.2.179",
        "name": "Factory Test Sim 2",
        "tags": null
    },
    "sim": {
        "iccid": "57486230661905310281",
        "id": 598611,
        "production_date": "2020-12-23T13:02:11.000Z"
    },
    "imsi": {
        "id": 7790199,
        "import_date": "2020-12-23T13:02:11.000Z",
        "imsi": "984189013845491"
    },
    "detail": {
        "transition": {
            "sim": {
                "status": {
                    "from": {
                        "id": 4,
                        "description": "FACTORY TEST"
                    },
                    "to": {
                        "id": 1,
                        "description": "ACTIVATED"
                    }
                }
            },
            "reason": "SIM reached factory test volume."
        }
    }
}
```

</details>

### SIM suspension

The SIM is patched to the **Suspended** [status](/glossary#sim-status), temporarily suspending and blocking it from network access.
Starting from the first day of the next month, the suspended SIM doesn't accrue any charges.

:::tip
Activating a SIM with the **Suspended** status again is possible at any time.
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
    "timestamp": "2021-10-27T08:44:46.267Z",
    "alert": false,
    "description": "Status of SIM changed from 'Activated' to 'Suspended'",
    "id": 6664262361,
    "event_type": {
        "id": 9,
        "description": "SIM suspension"
    },
    "event_source": {
        "id": 2,
        "description": "API"
    },
    "event_severity": {
        "id": 0,
        "description": "Info"
    },
    "organisation": {
        "id": 4046,
        "name": "Test Org"
    },
    "endpoint": {
        "id": 1541102,
        "imei": "3446623275770945",
        "ip_address": "227.147.158.142",
        "name": "Test Sim 2",
        "tags": null
    },
    "sim": {
        "iccid": "8930423315326577121",
        "id": 209035,
        "production_date": "2020-12-23T13:02:11.000Z"
    },
    "imsi": {
        "id": 90246192,
        "import_date": "2020-12-23T13:02:11.000Z",
        "imsi": "116892797180278"
    }
}
```

</details>

### SIM deletion

The SIM is deleted and permanently removed from the SIM repository.

:::caution
Once deleted, the SIM cannot be restored for network access.
:::

### Endpoint enabled

Device is enabled.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
    "timestamp": "2021-10-27T08:44:52.828Z",
    "alert": false,
    "description": "Status of Endpoint 96485463 changed to Enabled",
    "id": 55793293648,
    "event_type": {
        "id": 42,
        "description": "Endpoint enabled"
    },
    "event_source": {
        "id": 2,
        "description": "API"
    },
    "event_severity": {
        "id": 0,
        "description": "Info"
    },
    "organisation": {
        "id": 6461,
        "name": "Test Org"
    },
    "endpoint": {
        "id": 96485463,
        "imei": "1831095813329187",
        "ip_address": "121.214.125.202",
        "name": "Test Sim 2",
        "tags": null
    },
    "sim": {
        "iccid": "5363218780648553126",
        "id": 9270816,
        "production_date": "2020-12-23T13:02:11.000Z"
    },
    "imsi": {
        "id": 96756141,
        "import_date": "2020-12-23T13:02:11.000Z",
        "imsi": "87393970592520"
    }
}
```

</details>

### Endpoint disabled

Device is disabled.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
    "timestamp": "2021-10-27T08:44:49.585Z",
    "alert": false,
    "description": "Status of Endpoint 28778135 changed to Disabled",
    "id": 19126170545,
    "event_type": {
        "id": 43,
        "description": "Endpoint disabled"
    },
    "event_source": {
        "id": 2,
        "description": "API"
    },
    "event_severity": {
        "id": 0,
        "description": "Info"
    },
    "organisation": {
        "id": 2448,
        "name": "Test Org"
    },
    "endpoint": {
        "id": 28778135,
        "imei": "4042850244446350",
        "ip_address": "183.104.130.246",
        "name": "Test Sim 2",
        "tags": null
    },
    "sim": {
        "iccid": "5011996012476043533",
        "id": 5492364,
        "production_date": "2020-12-23T13:02:11.000Z"
    },
    "imsi": {
        "id": 5508107,
        "import_date": "2020-12-23T13:02:11.000Z",
        "imsi": "741161647249343"
    }
}
```

</details>

### SIM factory test

SIM is patched from **Issued** to **Factory Test** [status](/glossary#sim-status) (for SIM testing).

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
    "timestamp": "2021-10-27T11:30:52.684Z",
    "alert": false,
    "description": "Status of SIM changed from 'Issued' to 'Factory Test'",
    "id": 1955109934112,
    "event_type": {
        "id": 45,
        "description": "SIM factory test"
    },
    "event_source": {
        "id": 2,
        "description": "API"
    },
    "event_severity": {
        "id": 0,
        "description": "Info"
    },
    "organisation": {
        "id": 40163,
        "name": "Test Org"
    },
    "endpoint": {
        "id": 896737335,
        "imei": "760116392707263",
        "ip_address": "199.153.59.220",
        "name": "Test Sim 2",
        "tags": null
    },
    "sim": {
        "iccid": "49176386291337319872",
        "id": 703869,
        "production_date": "2020-12-23T13:02:11.000Z"
    },
    "imsi": {
        "id": 391022,
        "import_date": "2020-12-23T13:02:11.000Z",
        "imsi": "165974752113101"
    }
}
```

</details>

### SIM registration

SIM or SIM batch is registered to an organization via a [Batch Identification Code (BIC)](/glossary#bic).

:::note
This event doesn't trigger when the emnify team assigns SIMs to an organization.
It also doesn't trigger for every SIM of a SIM batch, so the event log is only be visible on the individual SIM when registering single SIM batches.
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-20T00:13:36.000Z",
  "alert": false,
  "description": "Batch of 1 SIM(s) registered.",
  "id": 9539556207944,
  "event_type": {
    "id": 48,
    "description": "SIM registration"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 3376,
    "name": "Sample Corp"
  },
  "sim": {
    "iccid": "68429007768008033558",
    "id": 96112629,
    "production_date": "2020-05-15T08:50:07.000Z"
  },
  "user": {
    "id": 28757,
    "name": "Sample User",
    "username": "user@sample.com"
  },
  "detail": {
    "sim_batch": {
      "id": 57716,
      "sim_model": {
        "id": 9
      },
      "batch_size": 1,
      "first_iccid": "68429007768008033558",
      "last_iccid": "68429007768008033558"
    }
  }
}
```

</details>

### SIM Released

SIM is released from a device.

:::info
Triggered through the [emnify User Interface (EUI)](https://support.emnify.com/hc/en-us/sections/115000969189-emnify-User-Interface-EUI-) or [REST API](/system-events/usage#event-api).
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-15T07:39:24.905Z",
  "alert": false,
  "description": "SIM 3423335 released from endpoint 5749159",
  "id": 9511580614964,
  "event_type": {
    "id": 50,
    "description": "SIM Released"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 316,
    "name": "Test Org"
  },
  "endpoint": {
    "id": 5749159,
    "imei": "601262876950445",
    "ip_address": "182.112.132.120",
    "name": "Factory Test Sim 3",
    "tags": null
  },
  "sim": {
    "iccid": "4423772578905695775",
    "id": 3423335,
    "production_date": "2020-12-23T13:02:11.000Z"
  },
  "imsi": {
    "id": 63513617,
    "import_date": "2020-12-23T13:02:11.000Z",
    "imsi": "616139522755995"
  }
}
```

</details>

### SIM Assigned

SIM is assigned to a device.

:::info
Triggered through the [emnify User Interface (EUI)](https://support.emnify.com/hc/en-us/sections/115000969189-emnify-User-Interface-EUI-) or while [creating an endpoint using the emnify REST API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/CreateEndpoint).
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-15T07:45:45.807Z",
  "alert": false,
  "description": "SIM 2972420 assigned to endpoint 38463269",
  "id": 60798254506111,
  "event_type": {
    "id": 51,
    "description": "SIM Assigned"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 89698,
    "name": "Test Org"
  },
  "endpoint": {
    "id": 38463269,
    "imei": "821536534391790",
    "ip_address": "100.102.41.214",
    "name": "Factory Test Sim 3",
    "tags": null
  },
  "sim": {
    "iccid": "10314787648254377158",
    "id": 2972420,
    "production_date": "2020-12-23T13:02:11.000Z"
  },
  "imsi": {
    "id": 5236562,
    "import_date": "2020-12-23T13:02:11.000Z",
    "imsi": "963687450685669"
  },
  "detail": {
    "imei": "821536534391790"
  }
}
```

</details>

## Limit enforcement

| ID  | Description                                   |
| :-- | :-------------------------------------------- |
| 11  | [Endpoint blocked](#endpoint-blocked)         |
| 12  | [Organisation blocked](#organisation-blocked) |

### Endpoint blocked

Device is blocked from all services after exceeding [device policies](/portal/device-policies) (for example, reaching its traffic limit).

:::tip
Changing the policies unblocks the device.
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
    "timestamp": "2021-10-27T14:44:11.000Z",
    "alert": true,
    "description": "Blocking data access for endpoint, traffic limit exceeded.",
    "id": 155295222517,
    "event_type": {
        "id": 11,
        "description": "Endpoint blocked"
    },
    "event_source": {
        "id": 1,
        "description": "Policy Control"
    },
    "event_severity": {
        "id": 1,
        "description": "Warn"
    },
    "organisation": {
        "id": 42855,
        "name": "Test Org"
    },
    "endpoint": {
        "id": 29232748,
        "imei": "31397643565228411",
        "ip_address": "188.167.183.228",
        "name": "Factory Test Sim 3",
        "tags": null
    },
    "sim": {
        "iccid": "1919136237414891188",
        "id": 9979202,
        "production_date": "2020-12-23T13:02:11.000Z"
    },
    "imsi": {
        "id": 705745558,
        "import_date": "2020-12-23T13:02:11.000Z",
        "imsi": "54450740741651"
    }
}
```

</details>

### Organisation blocked

The organization is blocked after exceeding the monthly cost limit (defined by emnify) or exceeding their prepaid balance (if not set up to be postpaid).

<details className="custom-details-example">
  <summary>Example JSON response: prepaid balance exceeded</summary>

```json
{
    "id": 1697107630311,
    "timestamp": "2021-10-06 10:42:58",
    "event_source": {
        "id": 1,
        "name": "Policy Control"
    },
    "event_severity": {
        "id": 1,
        "description": "WARN"
    },
    "event_type": {
        "id": 12,
        "description": "Organisation blocked"
    },
    "organisation": {
        "id": 4732,
        "name": "Test Org"
    },
    "user": null,
    "alert": 1,
    "description": "Blocking services for organisation, because of insufficient prepaid balance.",
    "endpoint": null,
    "sim": null,
    "imsi": null,
    "detail": null
}
```

</details>

<details className="custom-details-example">
  <summary>Example JSON response: monthly cost limit exceeded</summary>

```json
{
    "id": 656817714005,
    "timestamp": "2021-10-06 10:42:58",
    "event_source": {
        "id": 1,
        "name": "Policy Control"
    },
    "event_severity": {
        "id": 1,
        "description": "WARN"
    },
    "event_type": {
        "id": 12,
        "description": "Organisation blocked"
    },
    "organisation": {
        "id": 6805,
        "name": "Test Org"
    },
    "user": null,
    "alert": 1,
    "description": "Blocking services for organisation, because monthly cost limit exceeded.",
    "endpoint": null,
    "sim": null,
    "imsi": null,
    "detail": null
}
```

</details>

## Data quota management

| ID  | Description                                         |
| :-- | :-------------------------------------------------- |
| 18  | [Quota threshold reached](#quota-threshold-reached) |
| 19  | [Quota used up](#quota-used-up)                     |
| 52  | [Data quota enabled](#data-quota-enabled)           |
| 53  | [Data quota disabled](#data-quota-disabled)         |
| 56  | [Data quota assigned](#data-quota-assigned)         |
| 57  | [Data quota deleted](#data-quota-deleted)           |
| 60  | [Data quota expired](#data-quota-expired)           |

:::note API Reference
Quota information is in the event's [detail object](https://cdn.emnify.net/api/doc/event.html#detail-object).
:::

### Quota threshold reached

Remaining data quota volume fell below the configured threshold percentage.
Exclusively for devices with enabled data quota management and a configured quota threshold percentage.

:::note
The threshold percentage can be submitted when the data quota is assigned to the device.
:::

**Example**: if the device's data quota volume is set to 100 MB and the threshold percentage to 15%, the system generates an event when the remaining volume falls below 15 MB.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
    "timestamp": "2021-10-27T09:06:50.000Z",
    "alert": true,
    "description": "Endpoint quota threshold reached, volume is below 80%.",
    "id": 17357540123,
    "event_type": {
        "id": 18,
        "description": "Quota threshold reached"
    },
    "event_source": {
        "id": 1,
        "description": "Policy Control"
    },
    "event_severity": {
        "id": 1,
        "description": "Warn"
    },
    "organisation": {
        "id": 6713,
        "name": "Test Org"
    },
    "endpoint": {
        "id": 86473615,
        "imei": "250642987889789",
        "ip_address": "202.37.156.180",
        "name": "Factory Test Sim 2",
        "tags": null
    },
    "sim": {
        "iccid": "56816736458812006983",
        "id": 1467960,
        "production_date": "2020-12-23T13:02:11.000Z"
    },
    "imsi": {
        "id": 20616184,
        "import_date": "2020-12-23T13:02:11.000Z",
        "imsi": "58834171155367"
    },
    "detail": {
        "quota": {
            "threshold_percentage": 80,
            "threshold_volume": 0.8,
            "volume": -0.00120000000000009
        }
    }
}
```

</details>

### Quota used up

Data quota volume is completely depleted.
Exclusively for devices with data quota management enabled.

:::caution
Once this happens, the data quota status updates from **Active** to **Exhausted**, and the device won't be able to consume from the data service.
Established connections for that device disconnects within seconds, and new connection requests are denied until a new data quota is assigned or data quota management is disabled in the service profile.

It's also possible to define an action on **Throttle**.
This means the device can still use data services with less throughput.
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
    "timestamp": "2021-10-27T09:06:50.000Z",
    "alert": true,
    "description": "Quota volume is completely used up and data access denied for endpoint.",
    "id": 1071715568978,
    "event_type": {
        "id": 19,
        "description": "Quota used up"
    },
    "event_source": {
        "id": 1,
        "description": "Policy Control"
    },
    "event_severity": {
        "id": 1,
        "description": "Warn"
    },
    "organisation": {
        "id": 649,
        "name": "Test Org"
    },
    "endpoint": {
        "id": 19565190,
        "imei": "535561812785483",
        "ip_address": "147.188.3.101",
        "name": "Factory Test Sim 2",
        "tags": null
    },
    "sim": {
        "iccid": "6971715153842702145",
        "id": 28734421,
        "production_date": "2020-12-23T13:02:11.000Z"
    },
    "imsi": {
        "id": 28726038,
        "import_date": "2020-12-23T13:02:11.000Z",
        "imsi": "341399783365891"
    },
    "detail": {
        "quota": {
            "threshold_percentage": 80,
            "threshold_volume": 0.8,
            "volume": "1.000000"
        }
    }
}
```

</details>

### Data quota enabled

Data quota management is enabled in a service profile.

:::caution
All devices using this service profile need to have an active data quota assigned to use the data service.
Devices without active data quotas disconnect within seconds.
New connection requests are denied until a new data quota is assigned or data quota management is disabled in the service profile.
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2022-07-14T13:32:49.046Z",
  "alert": false,
  "description": "Data quota management enabled for service profile (id = 99133 - Generic Service Profile), endpoints of this service profile without an active data quota will be throttled or blocked from data service.",
  "id": 215900319904123,
  "event_type": {
    "id": 52,
    "description": "Data quota enabled"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 9684,
    "name": "Example Org"
  }
}
```

</details>

### Data quota disabled

Data quota management is disabled in a service profile.

:::caution
There's no longer data service restrictions for devices using this service profile.
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2022-07-14T12:11:41.640Z",
  "alert": false,
  "description": "Data quota management disabled for service profile (id = 99133 - Generic Service Profile).",
  "id": 2990738287492,
  "event_type": {
    "id": 53,
    "description": "Data quota disabled"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 604,
    "name": "Example Org"
  }
}
```

</details>

### Data quota assigned

New data quota is assigned to a device.

:::tip
Assigning a new data quota to a device is possible at any time.
[Data quota management must be enabled](#data-quota-enabled) in the service profile.
:::

**Example**: a device has a quota volume of 50 MB with daily auto-refill enabled, valid until May 27, 2025, and action on exhaustion set to block.
The event description reads:
"Data quota got assigned with a volume of 50.000000 MB with daily refill till 2025-05-27T22:56:17Z.
On exhaustion, the data service will be blocked.”

<details className="custom-details-example">
  <summary>Example JSON response: action on exhaustion set to block</summary>

```json
{
  "timestamp": "2022-07-14T13:35:07.626Z",
  "alert": false,
  "description": "Data quota assigned with volume of 10.000000 MB without daily refill until 2022-07-31T00:00:00Z and action on exhaustion set to blocking.",
  "id": 1028076751946,
  "event_type": {
    "id": 56,
    "description": "Data quota assigned"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 2256,
    "name": "Example Org"
  },
  "endpoint": {
    "id": 5293531,
    "imei": "5839369400489068",
    "ip_address": "188.167.183.228",
    "name": "Test Device",
    "tags": null
  },
  "sim": {
    "iccid": "8412861332142732293",
    "id": 935826,
    "production_date": "2017-05-03T20:36:28.000Z"
  },
  "imsi": {
    "id": 186306,
    "import_date": "2017-05-03T20:36:28.000Z",
    "imsi": "175971182377611"
  },
  "detail": {
    "quota": {
      "status": {
        "id": 1,
        "description": "ACTIVE"
      },
      "action_on_exhaustion": {
        "id": 1,
        "description": "Block",
        "peak_throughput": 128000
      },
      "volume": 10,
      "expiryDate": "2022-07-31T00:00:00Z",
      "lastVolumeAdded": 10,
      "lastStatusChangeDate": "2022-07-14T13:35:06Z",
      "autoRefill": false,
      "thresholdPercentage": 10,
      "thresholdVolume": 1
    }
  }
}
```

</details>

<details className="custom-details-example">
  <summary>Example JSON response: action on exhaustion set to throttle</summary>

```json
{
  "timestamp": "2022-07-14T13:38:11.537Z",
  "alert": false,
  "description": "Data quota assigned with volume of 100.000000 MB without daily refill until 2022-07-14T13:39:00Z and action on exhaustion set to throttling to a throughput of 128 kbit/s.",
  "id": 55632453271862,
  "event_type": {
    "id": 56,
    "description": "Data quota assigned"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 2782,
    "name": "Example Org"
  },
  "endpoint": {
    "id": 5477169,
    "imei": "2220624023468711",
    "ip_address": "174.249.170.160",
    "name": "Example Device",
    "tags": null
  },
  "sim": {
    "iccid": "1013367122100019039",
    "id": 899958,
    "production_date": "2017-05-03T20:36:28.000Z"
  },
  "imsi": {
    "id": 943048,
    "import_date": "2017-05-03T20:36:28.000Z",
    "imsi": "209549041950251"
  },
  "detail": {
    "quota": {
      "status": {
        "id": 1,
        "description": "ACTIVE"
      },
      "action_on_exhaustion": {
        "id": 2,
        "description": "Throttle",
        "peak_throughput": 128000
      },
      "volume": 100,
      "expiryDate": "2022-07-14T13:39:00Z",
      "lastVolumeAdded": 100,
      "lastStatusChangeDate": "2022-07-14T13:38:11Z",
      "autoRefill": false,
      "thresholdPercentage": 15,
      "thresholdVolume": 15
    }
  }
}
```

</details>

### Data quota deleted

Data quota is deleted from a device.

:::caution
Once deleted, devices on this service profile with data quota management enabled won't be able to use the data service.
Potential data connections of this device disconnect within seconds.
New connection requests are denied until an active data quota is assigned or data quota management is disabled in the service profile.
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2022-07-14T13:35:18.686Z",
  "alert": false,
  "description": "Data quota deleted.",
  "id": 44285280402507,
  "event_type": {
    "id": 57,
    "description": "Data quota deleted"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 7806,
    "name": "Example Org"
  },
  "endpoint": {
    "id": 387316,
    "imei": "9044128511360644",
    "ip_address": "174.238.2.179",
    "name": "Example Device",
    "tags": null
  },
  "sim": {
    "iccid": "7626384783536271949",
    "id": 949644,
    "production_date": "2017-05-03T20:36:28.000Z"
  },
  "imsi": {
    "id": 108458,
    "import_date": "2017-05-03T20:36:28.000Z",
    "imsi": "236366434880861"
  }
}
```

</details>

### Data quota expired

Active data quota of a device expired and the quota status changed to **Expired**.
Once expired, the device isn't able to establish a data session.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2022-07-14T13:39:03.199Z",
  "alert": true,
  "description": "Data quota expired.",
  "id": 35944374073138,
  "event_type": {
    "id": 60,
    "description": "Data quota expired"
  },
  "event_source": {
    "id": 1,
    "description": "Policy Control"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 8238,
    "name": "Example Org"
  },
  "endpoint": {
    "id": 501389,
    "imei": "8134820216492081",
    "ip_address": "227.147.158.142",
    "name": "Example Device",
    "tags": null
  },
  "sim": {
    "iccid": "3694452932824047676",
    "id": 103965,
    "production_date": "2017-05-03T20:36:28.000Z"
  },
  "imsi": {
    "id": 357765,
    "import_date": "2017-05-03T20:36:28.000Z",
    "imsi": "29821710188733"
  }
}
```

</details>

## SMS quota management

| ID  | Description                                                 |
| :-- | :---------------------------------------------------------- |
| 20  | [SMS quota threshold reached](#sms-quota-threshold-reached) |
| 21  | [SMS quota used up](#sms-quota-used-up)                     |
| 54  | [SMS quota enabled](#sms-quota-enabled)                     |
| 55  | [SMS quota disabled](#sms-quota-disabled)                   |
| 58  | [SMS quota assigned](#sms-quota-assigned)                   |
| 59  | [SMS quota deleted](#sms-quota-deleted)                     |

:::note API Reference
Quota information is in the event's [detail object](https://cdn.emnify.net/api/doc/event.html#detail-object).
:::

### SMS quota threshold reached

Remaining SMS quota volume fell below the configured threshold percentage.
Exclusively for devices with enabled SMS quota management and a configured quota threshold percentage.

:::note
The threshold percentage can be submitted when the SMS quota is assigned to the device.
:::

**Example**: if the device's SMS quota volume is set to 10 SMS and the threshold percentage to 50%, the system generates an event when the remaining volume falls below 5 MB.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
    "timestamp": "2021-10-27T09:21:30.000Z",
    "alert": true,
    "description": "SMS quota threshold reached, volume is below 50%.",
    "id": 6734033817529352,
    "event_type": {
        "id": 20,
        "description": "SMS quota threshold reached"
    },
    "event_source": {
        "id": 1,
        "description": "Policy Control"
    },
    "event_severity": {
        "id": 1,
        "description": "Warn"
    },
    "organisation": {
        "id": 42139,
        "name": "Test Org"
    },
    "endpoint": {
        "id": 10991244,
        "imei": "7345023067541287",
        "ip_address": "121.214.125.202",
        "name": "Factory Test Sim 2",
        "tags": null
    },
    "sim": {
        "iccid": "9097920854483458667",
        "id": 114667,
        "production_date": "2020-12-23T13:02:11.000Z"
    },
    "imsi": {
        "id": 7940611,
        "import_date": "2020-12-23T13:02:11.000Z",
        "imsi": "570416925414349"
    },
    "detail": {
        "quota": {
            "volume": 0,
            "threshold_percentage": 50,
            "threshold_volume": 1,
            "traffic_type": {
                "id": 6,
                "description": "SMS"
            }
        }
    }
}
```

</details>

### SMS quota used up

SMS quota volume is completely depleted.
Exclusively for devices with enabled SMS quota management.

:::caution
Once this happens, the SMS quota status updates from **Active** to **Exhausted**, and the device won't be able to consume from the SMS service.
Established connections for that device disconnect within seconds, and new connection requests are denied until a new SMS quota is assigned or SMS quota management is disabled in the service profile.
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
    "timestamp": "2021-10-27T09:21:30.000Z",
    "alert": true,
    "description": "SMS quota volume is completely used up and SMS access denied for endpoint.",
    "id": 896151190639914,
    "event_type": {
        "id": 21,
        "description": "SMS quota used up"
    },
    "event_source": {
        "id": 1,
        "description": "Policy Control"
    },
    "event_severity": {
        "id": 1,
        "description": "Warn"
    },
    "organisation": {
        "id": 63910,
        "name": "Test Org"
    },
    "endpoint": {
        "id": 98084339,
        "imei": "7280773798507910",
        "ip_address": "183.104.130.246",
        "name": "Test Sim 2",
        "tags": null
    },
    "sim": {
        "iccid": "4786561754166784043",
        "id": 2242607,
        "production_date": "2020-12-23T13:02:11.000Z"
    },
    "imsi": {
        "id": 3710068,
        "import_date": "2020-12-23T13:02:11.000Z",
        "imsi": "485182190937960"
    },
    "detail": {
        "quota": {
            "volume": "1.000000",
            "threshold_percentage": 50,
            "threshold_volume": 5,
            "traffic_type": {
                "id": 6,
                "description": "SMS"
            }
        }
    }
}
```

</details>

### SMS quota enabled

SMS quota management is enabled in a service profile.

:::caution
All devices using this service profile need to have an active SMS quota assigned to use the SMS service.
Devices without active SMS quotas disconnect within seconds.
New connection requests are denied until a new SMS quota is assigned or SMS quota management is disabled in the service profile.
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2022-07-14T13:32:54.252Z",
  "alert": false,
  "description": "SMS quota management enabled for service profile (id = 99133 - Generic Service Profile), endpoints of this service profile without an active SMS quota will be blocked from SMS service.",
  "id": 503128940665149,
  "event_type": {
    "id": 54,
    "description": "SMS quota enabled"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 25885,
    "name": "Example Org"
  }
}
```

</details>

### SMS quota disabled

SMS quota management is disabled in a service profile.

:::caution
There's no longer SMS service restrictions for devices using this service profile.
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2022-07-14T13:33:06.602Z",
  "alert": false,
  "description": "SMS quota management disabled for service profile (id = 99133 - Generic Service Profile).",
  "id": 381092102647412,
  "event_type": {
    "id": 55,
    "description": "SMS quota disabled"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 6034,
    "name": "Example Org"
  }
}
```

</details>

### SMS quota assigned

New SMS quota is assigned to a device.

:::tip
Assigning a new SMS quota to a device is possible at any time.
[SMS quota management must be enabled](#sms-quota-enabled) in the service profile.
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2022-07-14T13:35:11.973Z",
  "alert": false,
  "description": "SMS quota assigned with volume of 10 SMS without daily refill until 2022-07-31T00:00:00Z.",
  "id": 10526095035190,
  "event_type": {
    "id": 58,
    "description": "SMS quota assigned"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 9631,
    "name": "Example Org"
  },
  "endpoint": {
    "id": 6276513,
    "imei": "761090808370721",
    "ip_address": "199.153.59.220",
    "name": "Example Device",
    "tags": null
  },
  "sim": {
    "iccid": "1099167253920209804",
    "id": 531078,
    "production_date": "2017-05-03T20:36:28.000Z"
  },
  "imsi": {
    "id": 496809,
    "import_date": "2017-05-03T20:36:28.000Z",
    "imsi": "19010090094479"
  },
  "detail": {
    "quota": {
      "status": {
        "id": 1,
        "description": "ACTIVE"
      },
      "action_on_exhaustion": {
        "id": 1,
        "description": "Block",
        "peak_throughput": 128000
      },
      "volume": 10,
      "expiryDate": "2022-07-31T00:00:00Z",
      "lastVolumeAdded": 10,
      "lastStatusChangeDate": "2022-07-14T13:35:11Z",
      "autoRefill": false,
      "thresholdPercentage": 10,
      "thresholdVolume": 1
    }
  }
}
```

</details>

### SMS quota deleted

SMS quota is deleted from a device.

:::caution
Once deleted, devices on this service profile (with SMS quota management enabled) won't be able to use the SMS service until an active SMS quota is assigned, or SMS quota management is disabled in the service profile.
:::

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2022-07-14T13:35:22.488Z",
  "alert": false,
  "description": "SMS quota deleted.",
  "id": 41270752471139,
  "event_type": {
    "id": 59,
    "description": "SMS quota deleted"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 6599,
    "name": "Example Org"
  },
  "endpoint": {
    "id": 3419153,
    "imei": "7882775753194244",
    "ip_address": "182.112.132.120",
    "name": "Example Device",
    "tags": null
  },
  "sim": {
    "iccid": "6587040688575397618",
    "id": 112577,
    "production_date": "2017-05-03T20:36:28.000Z"
  },
  "imsi": {
    "id": 180774,
    "import_date": "2017-05-03T20:36:28.000Z",
    "imsi": "310255491186321"
  }
}
```

</details>

## CloudConnect lifecycle

| ID  | Description                                                                         |
| :-- | :---------------------------------------------------------------------------------- |
| 22  | [CloudConnect TGW Resource Share created](#cloudconnect-tgw-resource-share-created) |
| 23  | [CloudConnect TGW available](#cloudconnect-tgw-available)                           |
| 25  | [CloudConnect TGW breakout terminated](#cloudconnect-tgw-breakout-terminated)       |

### CloudConnect TGW Resource Share created

[CloudConnect Transit Gateway (TGW)](https://www.emnify.com/integration-guides/emnify-cloud-connect-into-aws-transit-gateway) resource share is created.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-22T10:34:13.000Z",
  "alert": false,
  "description": "CloudConnect Transit Gateway Resource Share created",
  "id": 99738069602631,
  "event_type": {
    "id": 22,
    "description": "CloudConnect TGW Resource Share created"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 7774,
    "name": "Sample Corp"
  },
  "user": {
    "id": 5177,
    "name": "Sample User",
    "username": "user@sample.com"
  },
  "detail": {
    "username": "user@sample.com",
    "breakout_id": 385,
    "creation_date": "2021-12-22T10:34:11Z",
    "deletion_date": null,
    "region": "eu-west-1",
    "resource_share_name": "Cloud Native Connectivity: VPC and VPN of customers connected",
    "breakout_type_id": 1,
    "breakout_type": "Transit Gateway",
    "price": 149
  }
}
```

</details>

### CloudConnect TGW available

[CloudConnect Transit Gateway (TGW)](https://www.emnify.com/integration-guides/emnify-cloud-connect-into-aws-transit-gateway) is available.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-22T10:39:19.000Z",
  "alert": false,
  "description": "CloudConnect Transit Gateway breakout 222 is available",
  "id": 2383714595353,
  "event_type": {
    "id": 23,
    "description": "CloudConnect TGW available"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 739,
    "name": "Sample Corp"
  },
  "user": {
    "id": 928,
    "name": "Sample User",
    "username": "user@sample.com"
  },
  "detail": {
    "username": "user@sample.com",
    "breakout_id": 222,
    "creation_date": "2021-12-22T10:34:11Z",
    "deletion_date": null,
    "region": "eu-west-1",
    "resource_share_name": "Cloud Native Connectivity: VPC and VPN of customers connected",
    "breakout_type_id": 1,
    "breakout_type": "Transit Gateway",
    "price": 149
  }
}
```

</details>

### CloudConnect TGW breakout terminated

[CloudConnect Transit Gateway (TGW)](https://www.emnify.com/integration-guides/emnify-cloud-connect-into-aws-transit-gateway) breakout is terminated.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-22T14:31:14.000Z",
  "alert": false,
  "description": "CloudConnect Transit Gateway breakout 316 has been terminated",
  "id": 2634578262948,
  "event_type": {
    "id": 25,
    "description": "CloudConnect TGW breakout terminated"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 571,
    "name": "Sample Corp"
  },
  "user": {
    "id": 40817,
    "name": "Sample User",
    "username": "user@sample.com"
  },
  "detail": {
    "username": "user@sample.com",
    "breakout_id": 316,
    "creation_date": "2021-12-22T10:34:11Z",
    "deletion_date": null,
    "region": "eu-west-1",
    "resource_share_name": "Cloud Native Connectivity: VPC and VPN of customers connected",
    "breakout_type_id": 1,
    "breakout_type": "Transit Gateway",
    "price": 149
  }
}
```

</details>

## OpenVPN lifecycle

| ID  | Description                                       |
| :-- | :------------------------------------------------ |
| 30  | [OpenVPN authentication](#openvpn-authentication) |

### OpenVPN authentication

Client is successfully authenticated on [OpenVPN](https://www.emnify.com/iot-glossary/open-vpn).

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "user": {
    "username": "jane.doe@example.com",
    "id": 225061,
    "name": "Jane Doe"
  },
  "endpoint": null,
  "event_source": {
    "description": "API",
    "id": 2
  },
  "description": "OpenVPN client (re-)authenticated successfully",
  "event_severity": {
    "description": "INFO",
    "id": 0
  },
  "timestamp": "2021-10-27T15:17:23Z",
  "organisation": {
    "id": 19910,
    "name": "Example Org"
  },
  "detail": {
    "region": "eu-west-1",
    "client": {
      "public_ip": "53.240.46.216",
      "version": "2.5.4",
      "private_ip": "40.220.96.255"
    },
    "protocol": "udp"
  },
  "alert": false,
  "keen": {
    "timestamp": "2021-10-27T15:17:38.065Z",
    "created_at": "2021-10-27T15:17:38.065Z",
    "id": "11855d2331d1f324470ca3b"
  },
  "sim": null,
  "id": 153792067277,
  "imsi": null,
  "event_type": {
    "description": "OpenVPN authentication",
    "id": 30
  }
}
```

</details>

## Organization and billing

| ID  | Description                                                     |
| :-- | :-------------------------------------------------------------- |
| 31  | [Organisation updated](#organisation-updated)                   |
| 32  | [Billing configuration updated](#billing-configuration-updated) |
| 67  | [User switched workspaces](#user-switched-workspaces)           |

### Organisation updated

Organization's country, name, or verification data changed.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-20T16:09:23.950Z",
  "alert": false,
  "description": "Organisation data updated.",
  "id": 9807326865071,
  "event_type": {
    "id": 31,
    "description": "Organisation updated"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 0,
    "description": "Info"
  },
  "organisation": {
    "id": 58465,
    "name": "Sample Corp"
  },
  "detail": {
    "changed_data": [
      {
        "name": {
          "old": "Sample Corp",
          "new": "Sample Corp Ltd."
        }
      },
      {
        "verification_type_id": {
          "old": "null",
          "new": "1"
        }
      },
      {
        "verification": {
          "old": "null",
          "new": "DE123456789"
        }
      }
    ]
  }
}
```

</details>

### Billing configuration updated

Organization's billing configuration changed.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2021-12-20T10:18:39.000Z",
  "alert": false,
  "description": "Billing config has been updated.",
  "id": 129565779460,
  "event_type": {
    "id": 32,
    "description": "Billing configuration updated"
  },
  "event_source": {
    "id": 2,
    "description": "API"
  },
  "event_severity": {
    "id": 1,
    "description": "Warn"
  },
  "organisation": {
    "id": 627328,
    "name": "Sample Corp"
  },
  "user": {
    "id": 278906,
    "name": "Sample User",
    "username": "user@sample.com"
  },
  "detail": {
    "billing_config": {
      "charging_model": {
        "id": 0
      },
      "payment_term": {
        "id": 0
      },
      "vatin": "DE123456789"
    }
  }
}
```

</details>

### User switched workspaces

A user switched to a different workspace.
The description indicates the user ID and the ID of the workspace they're currently in.

<details className="custom-details-example">
  <summary>Example JSON response</summary>

```json
{
  "timestamp": "2023-09-06T11:14:44.000Z",
  "alert": false,
  "description": "User with id: '330885', switched to workspace: 44",
  "id": 1088341100077457,
  "event_type": {
      "id": 67,
      "description": "User switched workspaces"
  },
  "event_source": {
      "id": 2,
      "description": "API"
  },
  "event_severity": {
      "id": 0,
      "description": "Info"
  },
  "organisation": {
      "id": 44,
      "name": "Example Organization"
  },
  "user": {
      "id": 330885,
      "name": "cruz@example.com",
      "username": "cruz@example.com"
  }
}
```

</details>
