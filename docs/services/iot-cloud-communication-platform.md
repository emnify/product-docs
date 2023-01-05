# IoT cloud communication platform

emnify’s platform (consisting of a mobile core network and a communication platform dedicated for IoT) has been built up cloud-natively.
Being deployed in 3 AWS cloud regions within 2-3 availability zones / data centers per region increases the availability of the solution - even when one cloud data center becomes unavailable, data will still be transported over the emnify network.

## Distributed data plane

Traditional connectivity providers have a centrally located network core.
All data is backhauled to the home country of the operator which means that customer data travels across the globe and distributed latency optimized application infrastructure is not possible.

![Traditional operators](assets/traditional_operators.png)


![emnify](assets/emnify_distributed_plane.png)

## Traditional operators vs emnify

The data plane of emnify’s cloud communication platform is distributed across major cloud regions (Virginia/US, Ireland/Europe, Singapore/APAC) and directly connected to central peering points with the local operators.

## Regional breakout

emnify’s distributed data plane enables device data to breakout locally, keeping the customer data within the same region.
Moreover, it also helps reduce network latency.
You can either select a specific breakout region or the network automatically selects the breakout region closest to the device.
This can be done on the emnify Portal → **Service Profile** which is applicable to a group of devices.

<!--  To be recreated
![Regional Breakout Setting in the emnify Portal](assets/regional.png)
-->