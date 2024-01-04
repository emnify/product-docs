const generalDeviceDetails = [
  {
    property: 'Status',
    description: 'Current state of the device (in this document, see [Device status](#device-status)).'
  },
  {
    property: 'Services',
    description: 'Indicates whether the following services are active or disabled: <ul><li>Data</li><li>SMS MT</li><li>SMS MO</li></ul>'
  },
  {
    property: 'Connection',
    description: '[Connectivity status](/glossary#connectivity-status) and available PDP context, with an option to reset the connectivity. <br /><br /> If the device is **Online**, click the `i` icon to show all connectivity information—breakout IP, MSC, VLR, etc.'
  },
  {
    property: 'Blocked networks',
    description: 'Names of any operators on the device\'s networks blocklist (often used for [troubleshooting](/quickstart/troubleshooting#other-general-troubleshooting-tips)).'
  },
  {
    property: 'Device',
    description: 'Identifiers for the device, including: <ul><li>Device ID (referred to as `endpoint_id` when working with the [REST API](https://cdn.emnify.net/api/doc/endpoint.html))</li><li>Configured IP address</li><li>IMEI and a toggle to indicate whether [IMEI lock](/services/security#imei-lock) is turned on</li></ul>'
  },
  {
    property: 'Policies',
    description: 'Names of the assigned [service policy](/portal/device-policies#service-policies) and [coverage policy](/portal/device-policies#coverage-policies).'
  },
  {
    property: 'SIM',
    description: 'Properties of the assigned SIM, including: <ul><li>IMSI</li><li>MSISDN</li><li>ICCID</li></ul> Also includes an option to release the SIM. If there\'s no assigned SIM, this section is empty and shows an option to assign a SIM.'
  },
  {
    property: 'Usage',
    description: 'Data and SMS traffic based on a selected time period: <ul><li>Last hour</li><li>Current month</li><li>Last month</li></ul>'
  },
]

export default generalDeviceDetails
