const deviceStatus = [
  {
    state: 'Enabled',
    description: 'A SIM is assigned to the device and activated. The device must be enabled to connect to a network.'
  },
  {
    state: 'Disabled',
    description: 'No SIM assigned, or the assigned SIM is suspended.'
  },
  {
    state: 'Deleted',
    description: 'Permanently removed from your **Connected Devices**.'
  },
]

export default deviceStatus
