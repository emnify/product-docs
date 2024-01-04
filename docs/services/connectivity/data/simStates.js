const simStates = [
  {
    state: 'Issued',
    description: 'Initial state after the SIM has been registered to an account. The SIM isn\'t usable in this state, so it won\'t generate traffic or incur charges. Issued SIMs can be tested by patching them to the _Factory Test_ state. It\'s impossible to transition the SIM back to _Issued_ once it has been in another state.'
  },
  {
    state: 'Activated',
    description: 'The SIM is enabled and can use network services if connected to a device with configured policies. Regardless, the SIM is chargeable if activated anytime during the month.'
  },
  {
    state: 'Suspended',
    description: 'Temporarily blocks an _Activated_ SIM from network access. Starting from the first day of the next month, the suspended SIM doesn\'t accrue any charges. The SIM can be reactivated and suspended again at any time.'
  },
  {
    state: 'Factory Test',
    description: 'The SIM is enabled and can generate traffic. It can be used up to defined data and SMS thresholds without incurring charges. Once either threshold is crossed or the test period has elapsed, the SIM automatically moves to the _Activated_ state. For more information, see [Factory test mode](/services/factory-test-mode).'
  },
  {
    state: 'Deleted',
    description: 'Permanently removes the SIM from the SIM Inventory. Once deleted, it can\'t be restored for network access.'
  },
]

export default simStates
