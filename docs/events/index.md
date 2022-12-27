# emnify Platform Events

The emnify platform generates several types of events. These events allow you to track notable system occurances based on behavior.

Some common use cases for events on emnify include:
* **Triggers for custom business processes** (e.g. authentication or custom usage limitations configured on our Portal).
* **Monitoring** (e.g. SIM or data connection lifecycles)
* **Input for custom billing systems** (i.e. updating billing configuration, processing invoices, etc.)

Events are often used as triggers for custom business processes, for monitoring, and as an input for custom billing systems. They provide information about lifecycle transitions and configuration changes. 

## Structure 

Each event is represented by an object that is based on the [generic Event Object](https://cdn.emnify.net/api/doc/event.html). 

Depending on the event type, some generic properties may not apply and some events may have additional custom fields to provide information about what happened. 

:::tip
You can find detailed information on the Event Object and its associated properties in our [Event API Reference](https://cdn.emnify.net/api/doc/event.html) in the emnify System Documentation.  
:::

### Event Severity

Events are distinguished by three severity levels:

* `INFO`: Expected behavior of the executed event (e.g. a device successfully attaches to a network).
* `WARN`: Problem or unusual behavior, but doesn't necessarily require immediate action (e.g. a credit card expires in 60 days).
* `CRITICAL`: Serious issue that likely requires additional follow-up (e.g. charging for an invoice failed).

:::note API Reference 
[Event Severity Object - Event API Reference Documentation](https://cdn.emnify.net/api/doc/event.html#event-severity-object)
:::

### Event Source
Every event is triggered by one of three available event sources:

* `Network`: The cellular network that your device is connected to (e.g. a location is updated or purged).
* `Policy Control`: The emnify system, typically to enforce a policy, quota, or otherwise set limitation. These limitations can be set by the emnify platform (e.g. an endpoint is currently blocked due to exceeded traffic limit) or by your organization (e.g. a pre-configured SMS usage limit for a specific device has been reached).
* `API`: The [emnify REST API](https://cdn.emnify.net/api/doc/index.html).

🔗 [Event Source Object - Event API Reference Documentation](https://cdn.emnify.net/api/doc/event.html#event-source-object)

:::info
Any events triggered in the [Portal](https://portal.emnify.com/) will show `API` as the event source. That's because the Portal is an interface that uses the API under the hood. 
::: 

### Event Type

An overview of the specific events that our platform generates can be found on the [Event Types](event-types) page.

## Working with events

There are three main ways you can access and trigger events: 
- [emnify's Data Streamer](usage#emnifys-data-streamer)
- [emnify REST API](usage#emnify-rest-api) 
- [The emnify Portal](usage#the-emnify-portal)

For more information on each of these systems and how they compare, please refer to our [Working with events guide](usage).