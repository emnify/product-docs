# IoT Cloud Communication Platform

emnify’s platform (consisting of a mobile core network and a communication platform dedicated for IoT) has been built up cloud-natively.
Being deployed in 3 AWS cloud regions within 2-3 availability zones / data centers per region increases the availability of the solution - even when one cloud data center becomes unavailable, data will still be transported over the emnify network.

## Distributed Data Plane

Traditional connectivity providers have a centrally located network core. All data is backhauled to the home country of the operator which means that customer data travels across the globe and distributed latency optimized application infrastructure is not possible.

![200](assets/traditional_operators.png)

Traditional operators

![200](assets/emnify_distributed_plane.png)

emnify

Traditional operators vs emnify

The data plane of emnify’s cloud communication platform is distributed across major cloud regions (Virginia/US, Ireland/Europe, Singapore/APAC) and directly connected to central peering points with the local operators.

## Regional Breakout

emnify’s distributed data plane enables device data to breakout locally, keeping the customer data within the same region. Moreover, it also helps reduce network latency. You can either select a specific breakout region or the network automatically selects the breakout region closest to the device. This can be done on the emnify Portal → Service Profile which is applicable to a group of devices.

![regional](assets/regional.png)

Regional Breakout Setting in the emnify Portal
