const deviceStates = [
  {
    state: 'Attached',
    description: 'If the device has successfully attached to the emnify Core Network in the past, its state is displayed as Attached until the visited network has signaled that the device is inactive/offline. Usually, the visited network informs the emnify Core Network within 1-2 days after a device has gone offline.'
  },
  {
    state: 'Blocked',
    description: 'Service is suspended either due to exceeded traffic limits or [IMEI lock](/glossary#imei-lock).'
  },
  {
    state: 'Offline',
    description: 'A network connection isn\'t possible. There are many reasons for this state.'
  },
  {
    state: 'Online',
    description: 'A network connection is active, and the device can use data and SMS per the device policies.'
  },
]

export default deviceStates
