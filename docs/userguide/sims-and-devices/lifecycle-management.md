# SIM and device lifecycle management

## SIM states

A SIM can transition through four different states during its lifecycle.

### Issued

When you order emnify IoT eSIMs they are from new inventory and have never been used.
They are shipped in an inactive state which means no fees are incurred.

### Factory test mode

After you have received and registered your emnify IoT eSIMs you can put them in factory test mode.
In factory test mode, the device can used without incurring any charges until a certain threshold of data usage is reached.
Currently, the threshold is set to 100 kB.

### Active

 If you choose to bypass factory test mode by setting your eSIMs to **Active**, all data and SMS usage will be billed according to your [subscription](/userguide/organization/subscription) plan. 

 If you chose to use factory test mode and exceeded the free data usage limit, your eSIMs will automatically transition to the **Active** state.
 All subsequent data usage will be included in the current billing cycle.

 ### Suspended
 
 SIMs can be suspended any time in order to eliminate charges for future billing cycles.

## SIM management

The [SIM inventory](https://portal.emnify.com/sim-inventory) page provides a complete list of your registered SIMs.
You can search by various identifiers including ICCID, EID, and phone number, just to name a few.

The **Details** view of a SIM shows all identifiers as well as:

- **Assigned device** (if the SIM is attached to a device)
- **Vendor**
- **Memory** 
- **Produced** (date and time)
- **Model**
- **SIM Type** (e.g., triple-cut commercial)

**Events** and **Statistics** are additional views that provide logs and aggregated usage respectively if the SIM has been assigned to a device and is **Active**.

To expand your SIM inventory, follow the appropriate link at the top of the page:

- To visit the [SIM Shop](https://portal.emnify.com/sim-order) select **Order SIMs**
- To [register SIMs](https://portal.emnify.com/sim-registration), either individually or in batches, select **Register SIMs**.

## Managing devices

You can manage your devices from the [Connected Devices](https://portal.emnify.com/connected-devices) page.


#### Creating a new device 

As part of the SIM registration process, you can [create a new device](/userguide/quickstart/registering-sims#creating-a-new-device) for the newly registered SIM while you are still in the SIM registration dialog.

If you want to create a new device to be used with an unattached SIM, navigate to [Connected Devices](https://portal.emnify.com/connected-devices) and select **Add Device**.
After providing a name for the new device and selecting device policies, you can select a SIM from the list of registered, unassigned SIMs, or you can search for a specific SIM under **Assign SIM (optional)**.

### Getting your device online

If this is your first time configuring a device for network connectivity, see the instructions in the [Quickstart guide](/quickstart/) for how to [get your first device online](/userguide/quickstart/devices/apn-configuration).

### Getting device information 

To view all information about a device, navigate to [Connected Devices](https://portal.emnify.com/connected-devices), find it in the list, and select **Details**.

<details>
  <summary>Show me an example of Device Details.</summary>
  <img
    src={require('./assets/device-details.png').default}
    alt=""
  />
</details>

#### IMSI

The international mobile subscriber identity (IMSI) is a unique number used to identify a GSM subscriber, therefore it will change if a device connects to a different operator while roaming.

<details>
  <summary>See how the IMSI is constructed.</summary>
  An IMSI is usually a 15-digit number but can be 14 digits in some cases.   
  
  It comprises three components: MCC, MNC, and MSIN.

  MCC: a 3-digit country identifier  
  MNC: an operator identifier (2 or 3 digits)  
  MSIN: an identifier for the connected device (9 or 10 digits)  

  <img
    src={require('./assets/imsi-components-table.png').default}
    style={{width:300}}
    alt=""
  />
</details> 

#### MSISDN

The Mobile Station International Subscriber Directory Number (MSISDN) is essentially the telephone number assigned to each SIM.
For an emnify IoT eSIM, this number is needed for its ability to receive SMS messages, i.e., SMS MT.

#### IMEI

The International Mobile Equipment Identity (IMEI) is a unique number used to identify cellular modems.

<details>
  <summary>Learn more about IMEIs</summary>
  An IMEI has 15 digits (14 digits plus a check digit).

  An IMEISV has 16 digits: (14 digits plus two software version digits).

  For more detailed information, see emnify's IoT Glossary article: [What is an IMEI number?](https://www.emnify.com/iot-glossary/imei-number)

</details>

### Device status

A device has only two states: **Enabled** or **Disabled**.
You can toggle one or more devices between these states in order to control their data usage.
A disabled device doesn't incur any charges.
When you are ready to deploy a device and want it to connect to a network, change its status to **Enabled**.
For changing a device's status, use the **Status** toggle switch either from the **Connected Devices** list, or from the device's **Details** page.

You can also perform a bulk Enable/Disable operation on a group of devices.
Use a filter to display a list of the targeted devices.
Once their checkboxes indicate that they have been selected, you will see the bulk actions menu bar appear at the top of the screen.
Select **Device** and then one of the actions:

- Enable Device(s)
- Disable Device(s)

<details>
  <summary>Show me how to enable/disable multiple devices.</summary>
  <img
    src={require('./assets/bulk-enable-disable.png').default}
    alt=""
  />
</details>

:::info
Devices cannot be deleted.
You can rename/repurpose unwanted devices for use with unassigned SIMs.
:::

### Reset connectivity

You can reset a device's connectivity either by selecting its **Reset connectivity** icon while viewing it in the list of [Connected Devices](https://portal.emnify.com/connected-devices) or by selecting the **Reset Connectivity** link for **Connection** located in the **Status** column of the **General** view of the device's **Details** modal.

<details>
  <summary>Show me</summary>
  <img
    src={require('./assets/connected-devices-reset-connectivity.png').default}
    style={{width:900}}
    alt=""
  />
  <img
    src={require('./assets/device-details-reset-connectivity.png').default}
    style={{width:325}}
    alt=""
  />
</details>