const simProperties = [
  {
    property: 'Assigned device',
    description: 'Name of the device that the SIM is attached to, linked to the respective **Device Details** page.'
  },
  {
    property: 'SIM ID',
    description: 'Unique identifier of the SIM (referred to as the `sim_id` when working with the [REST API](https://cdn.emnify.net/api/doc/sim.html)).'
  },
  {
    property: 'ICCID',
    description: 'Integrated circuit card identifier including the final Luhn checksum digit.'
  },
  {
    property: 'MSISDN',
    description: 'Mobile Station International Subscriber Directory Number of the SIM.'
  },
  {
    property: 'IMSI',
    description: 'International Mobile Subscriber Identity of the SIM.'
  },
  {
    property: 'Vendor',
    description: 'Name of the manufacturer.'
  },
  {
    property: 'Memory',
    description: 'Memory size in kilobytes (KB).'
  },
  {
    property: 'Produced',
    description: 'Date and time in Coordinated Universal Time (UTC) the SIM was produced, formatted based on your language settings.'
  },
  {
    property: 'Model',
    description: 'Description of the SIM model (for example, **Classic**).'
  },
  {
    property: 'SIM Type',
    description: 'Diagram and description of the SIM type, including the [quality grade](/services/global-iot-sim#quality-grades) and [form factors](/services/global-iot-sim#form-factors).'
  },
]

export default simProperties
