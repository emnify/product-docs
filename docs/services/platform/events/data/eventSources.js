const eventSources = [
  {
    'event source': 'Network',
    description: 'The cellular network your device is connected to (for example, a location is updated or purged).'
  },
  {
    'event source': 'Policy control',
    description: 'Both the emnify system and your organization can define and enforce policies, quotas, or other limitations <ul> <li>The emnify system can block devices that exceed predefined traffic limits. </li><li> Your organization could configure the maximum SMS usage for devices to limit SMS traffic.</li></ul>'
  },
  {
    'event source': 'API',
    description: 'The [emnify REST API](https://cdn.emnify.net/api/doc/index.html).'
  },
]

export default eventSources
