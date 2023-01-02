---
description: Configuring the type of content delivered by the data stream.
---

# Stream types

Through stream types, you can configure the type of content delivered by the data stream. 
You may choose between receiving _event data_ or _usage data_. 

Streaming event and usage data within one stream is possible but not advised, as these data records don't share a common schema definition.

## Event data

The emnify system generates several types of events. 
These events allow you to track notable system occurances based on behavior.

Some common use cases for events on emnify include:

- **Triggers for custom business processes** (e.g., authentication or custom usage limitations configured on our Portal)
- **Monitoring** (e.g., SIM or data connection lifecycles)
- **Input for custom billing systems** (i.e., updating billing configuration, processing invoices, etc.)

:::tip
Learn more about the available event types and how to use them in the [Event documentation](../events/getting-started).
:::

## Usage data

Usage data records get generated when devices consume data or SMS services. 
These records provide information about the SIM, used service, visited network, volumes, and cost. 

Usage data streams are often used for monitoring and analyzing data consumption and as input for custom billing systems.

Each usage data record contains information about the:

- **Device** (organization, endpoint, SIM, IMSI)
- **Time** (start and end time)
- **Price applied for rating** (tariff, tariff profile, ratezone)
- **Mobile network operator used for the service** (operator, country)
- **Type of service** (SMS or data)
- **Consumed service volumes** (down- and upstream, total volume)
- **Costs** (amount, currency)

<!-- ### Examples -->
<!-- TODO: Add anonymized JSON examples -->