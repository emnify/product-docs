# Stream Types

Through stream types, you can configure the type of content delivered by the data stream. 
You may choose between receiving usage data or event data. 

Streaming event and usage data within one stream is possible but not advised, as these data records don't share a common schema definition.

## Usage Data

Usage data records get generated when devices consume data or SMS services. 
These records provide information about the SIM, used service, visited network, volumes, and cost. 

Usage data streams are often used for monitoring and analyzing data consumption and as input for custom billing systems.

**Each usage data record contains information about the**:

- Device (organization, endpoint, SIM, IMSI)
- Time (start and end time)
- Price applied for rating (tariff, tariff profile, ratezone)
- Mobile network operator used for the service (operator, country)
- Type of service (SMS or data)
- Consumed service volumes (down- and upstream, total volume)
- Costs (amount, currency)

## Event Data

The emnify platform generates different types of events, and we regularly add new events types. 
Events are often used as triggers for custom business processes and for monitoring. 
They provide information about lifecycle transitions and config changes.

<!-- TODO: Link to Event documentation -->