---
description: List of all available event types
toc_max_heading_level: 2
---

# Event types

The following is a list of available event types, including their corresponding IDs and descriptions.

:::note API Reference
[Event Type Object - Event API Reference Documentation](https://cdn.emnify.net/api/doc/event.html#event-type-object)
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

<details>
  <summary>Example JSON response: Disconnecting data access for a device to apply throttling action</summary>

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

<details>
  <summary>Example JSON response: Disconnecting data access for a device after updating the quota</summary>

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

When a device attaches for the first time, it will send an authentication request.
This request is immediately followed by an `Update location` event.

After the first authentication, the device will send additional `Update location` events to inform the network about the current location.
This happens periodically or when entering a new location area.

These `Update location` events register the device in the circuit-switched (CS) domain, allowing the device to send and receive SMS.
Devices not using 2G or 3G may not register on the CS domain.

**Example**: A SIM card has (re)authenticated with a different network element.
If successful, the device will appear as **Attached** in the [emnify Portal](usage#emnify-portal) and will be ready to receive SMS.

<details>
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

**Example**: A SIM card has successfully registered for data sessions with a different network element.

:::note
A device can only establish a data session after registering on the PS domain.
:::

<details>
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

Once executed, the device status will appear as **Offline** in the [emnify Portal](usage#emnify-portal).

**Example**: The network deletes the routing information for a mobile-terminated call or mobile-terminated short message and marks the device not reachable.

<details>
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

<details>
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

Activation (or rejection) of data connectivity.

**Example**: A device has established a data session and started transferring data.
This device will appear as **Online** in the [emnify Portal](usage#emnify-portal) as long as there hasn't been a subsequent [Delete PDP Context](#delete-pdp-context) event.

<details>
  <summary>Example JSON response: Create PDP context accepted</summary>

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
      "tariff_profile_id": "395978",
      "tx_teid_control_plane": 570842943,
      "breakout_ip": "97.106.216.29",
      "tariff_id": "555",
      "rac": null,
      "ratezone_id": "8178",
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

<details>
  <summary>Example JSON response: Create PDP context rejected because data service is disabled in the service profile</summary>

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

<details>
  <summary>Example JSON response: Create PDP context rejected because the device doesn't have a quota</summary>

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

<details>
  <summary>Example JSON response: Create PDP Context Request rejected because the device's quota volume is exhausted, and the defined action is to block data traffic</summary>

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

<details>
  <summary>Example JSON response: Create PDP context request rejected because the SIM isn't activated</summary>

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

**Example**: A device disconnected and ended a data transfer.
The event details will also show the data transmitted, and the device will appear as **Attached** in the [emnify Portal](usage#emnify-portal).

<details>
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

<details>
  <summary>Example JSON response: Authentication failed due to a wrong password</summary>

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

<details>
  <summary>Example JSON response: Authentication failed after too many attempts</summary>

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

<details>
  <summary>Example response message</summary>

```
Failed authentication request from 'Application Token Name', Reason: TokenStatus Revoked from IP 54.64.35.156
```

</details>

### Support Access

emnify team accessed your organization on behalf of one of your users for service or support purposes.

<details>
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

<details>
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

<details>
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

<details>
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

The SIM is patched to the **Activated** status after previously holding one of the following statuses:
**Issued**, **Suspended**, or **Factory Test**.

You can manually trigger this event by using the [emnify Portal or REST API](usage).
Or, it will be automatically triggered when the factory test mode threshold (data or SMS) is reached.

:::note
Activated SIMs can use network services.
:::

<details>
  <summary>Example JSON response</summary>

```json

```

</details>

### SIM suspension

The SIM is patched to the **Suspended** status, temporarily suspending and blocking it from network access.
Starting from the first day of the next month, the suspended SIM will not accrue any charges.

:::tip
Activating a SIM with the **Suspended** status again is possible at any time.
:::

<details>
  <summary>Example JSON response</summary>

```json

```

</details>

### SIM deletion

The SIM is deleted and permanently removed from the SIM repository.

:::caution
Once deleted, the SIM cannot be restored for network access.
:::

<details>
  <summary>Example JSON response</summary>

```json

```

</details>

### Endpoint enabled

Device is enabled.

<details>
  <summary>Example JSON response</summary>

```json

```

</details>

### Endpoint disabled

Device is disabled.

<details>
  <summary>Example JSON response</summary>

```json

```

</details>

### SIM factory test

SIM is patched from **Issued** to **Factory Test** status (for SIM testing).

<details>
  <summary>Example JSON response</summary>

```json

```

</details>

### SIM registration

SIM or SIM batch is registered to an organization via a [Batch Identification Code (BIC)](../../glossary#bic---batch-identification-code). 

:::note
This event doesn't trigger when the emnify team assigns SIMs to an organization.
It also doesn't trigger for every SIM of a SIM batch, so the event log will only be visible on the individual SIM when registering single SIM batches.
:::

<details>
  <summary>Example JSON response</summary>

```json

```

</details>

### SIM Released

SIM is released from a device.

:::info
Triggered through the [emnify User Interface (EUI)](https://support.emnify.com/hc/en-us/sections/115000969189-EMnify-User-Interface-EUI-) or [REST API](usage#event-api).
:::

<details>
  <summary>Example JSON response</summary>

```json

```

</details>

### SIM Assigned

SIM is assigned to a device.

:::info
Triggered through the [emnify User Interface (EUI)](https://support.emnify.com/hc/en-us/sections/115000969189-EMnify-User-Interface-EUI-) or while [creating an endpoint using the emnify REST API](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/CreateEndpoint).
:::

<details>
  <summary>Example JSON response</summary>

```json

```

</details>

## Limit enforcement

| ID  | Description                                   |
| :-- | :-------------------------------------------- |
| 11  | [Endpoint blocked](#endpoint-blocked)         |
| 12  | [Organisation blocked](#organisation-blocked) |

### Endpoint blocked

Device is blocked from all services after exceeding device policies (e.g., reaching its traffic limit).

:::tip
Changing the policies will unblock the device.
:::

### Organisation blocked

The organization is blocked after exceeding the monthly cost limit (defined by emnify) or exceeding their prepaid balance (if not set up to be postpaid).

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
Quota information is in the [detail object](https://cdn.emnify.net/api/doc/event.html#detail-object) of the event.
:::

### Quota threshold reached

Remaining data quota volume fell below the configured threshold percentage.
Exclusively for devices with enabled data quota management and a configured quota threshold percentage.

:::note
The threshold percentage can be submitted when the data quota is assigned to the device.
:::

**Example**: If the device's data quota volume is set to 100 MB and the threshold percentage to 15%, the system will generate an event when the remaining volume falls below 15 MB.

### Quota used up

Data quota volume is completely depleted.
Exclusively for devices with data quota management enabled.

:::caution
Once this happens, the data quota status updates from **Active** to **Exhausted**, and the device won't be able to consume from the data service.
Established connections for that device will disconnect within seconds, and new connection requests will be denied until a new data quota is assigned or data quota management is disabled in the service profile.

It is also possible to define an action on **Throttle**.
This means the device can still use data services with less throughput.
:::

### Data quota enabled

Data quota management is enabled in a service profile.

:::caution
All devices using this service profile need to have an active data quota assigned to use the data service.
Devices without active data quotas will disconnect within seconds.
New connection requests will be denied until a new data quota is assigned or data quota management is disabled in the service profile.
:::

### Data quota disabled

Data quota management is disabled in a service profile.

:::caution
There will no longer be data service restrictions for devices using this service profile.
:::

### Data quota assigned

New data quota is assigned to a device.

:::tip
Assigning a new data quota to a device is possible at any time.
[Data quota management must be enabled](#data-quota-enabled) in the service profile.
:::

**Example**: A device has a quota volume of 50 MB with daily auto-refill enabled, valid until May 27, 2025, and action on exhaustion set to block.
The event description will read:
"Data quota got assigned with a volume of 50.000000 MB with daily refill till 2025-05-27T22:56:17Z.
On exhaustion, the data service will be blocked.”

### Data quota deleted

Data quota is deleted from a device.

:::caution
Once deleted, devices on this service profile with data quota management enabled won't be able to use the data service.
Potential data connections of this device will disconnect within seconds.
New connection requests will be denied until an active data quota is assigned or data quota management is disabled in the service profile.
:::

### Data quota expired

Active data quota of a device expired and the quota status changed to **Expired**.
Once expired, the device isn't able to establish a data session.

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

**Example**: If the device's SMS quota volume is set to 10 SMS and the threshold percentage to 50%, the system will generate an event when the remaining volume falls below 5 MB.

### SMS quota used up

SMS quota volume is completely depleted.
Exclusively for devices with enabled SMS quota management.

:::caution
Once this happens, the SMS quota status updates from **Active** to **Exhausted**, and the device won't be able to consume from the SMS service.
Established connections for that device will disconnect within seconds, and new connection requests will be denied until a new SMS quota is assigned or SMS quota management is disabled in the service profile.
:::

### SMS quota enabled

SMS quota management is enabled in a service profile.

:::caution
All devices using this service profile need to have an active SMS quota assigned to use the SMS service.
Devices without active SMS quotas will disconnect within seconds.
New connection requests will be denied until a new SMS quota is assigned or SMS quota management is disabled in the service profile.
:::

### SMS quota disabled

SMS quota management is disabled in a service profile.

:::caution
There will no longer be SMS service restrictions for devices using this service profile.
:::

### SMS quota assigned

New SMS quota is assigned to a device.

:::tip
Assigning a new SMS quota to a device is possible at any time.
[SMS quota management must be enabled](#sms-quota-enabled) in the service profile.
:::

### SMS quota deleted

SMS quota is deleted from a device.

:::caution
Once deleted, devices on this service profile (with SMS quota management enabled) won't be able to use the SMS service until an active SMS quota is assigned, or SMS quota management is disabled in the service profile.
:::

## CloudConnect lifecycle

| ID  | Description                                                                         |
| :-- | :---------------------------------------------------------------------------------- |
| 22  | [CloudConnect TGW Resource Share created](#cloudconnect-tgw-resource-share-created) |
| 23  | [CloudConnect TGW available](#cloudconnect-tgw-available)                           |
| 25  | [CloudConnect TGW breakout terminated](#cloudconnect-tgw-breakout-terminated)       |

### CloudConnect TGW Resource Share created

[CloudConnect Transit Gateway (TGW)](https://www.emnify.com/integration-guides/emnify-cloud-connect-into-aws-transit-gateway) resource share is created.

### CloudConnect TGW available

[CloudConnect Transit Gateway (TGW)](https://www.emnify.com/integration-guides/emnify-cloud-connect-into-aws-transit-gateway) is available.

### CloudConnect TGW breakout terminated

[CloudConnect Transit Gateway (TGW)](https://www.emnify.com/integration-guides/emnify-cloud-connect-into-aws-transit-gateway) breakout is terminated.

## OpenVPN lifecycle

| ID  | Description                                       |
| :-- | :------------------------------------------------ |
| 30  | [OpenVPN authentication](#openvpn-authentication) |

### OpenVPN authentication

Client is successfully authenticated on [OpenVPN](https://www.emnify.com/iot-glossary/open-vpn).

## Organization and billing

| ID  | Description                                                     |
| :-- | :-------------------------------------------------------------- |
| 31  | [Organisation updated](#organisation-updated)                   |
| 32  | [Billing configuration updated](#billing-configuration-updated) |

### Organisation updated

Organization's country, name, or verification data changed.

### Billing configuration updated

Organization's billing configuration changed.
