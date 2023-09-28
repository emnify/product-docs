---
description: How to configure DNS settings
slug: /services/security/how-to-configure-dns-settings
---

# How to configure the DNS settings of a public or private DNS server?

Customers also have the option to configure their own DNS settings, no matter if it's a public or a private DNS server.
These changes can be applied in the [emnify Portal](https://portal.emnify.com/).

1.  Navigate to [**Device Policies**](https://portal.emnify.com/device-policies).
2.  Click **New service policy**.
3.  Then, select the **More options** tab.
4.  Locate the **Custom DNS** section.


Utilizing a private DNS server not accessible via the public internet requires establishing a private network with the device or a network where the private DNS server is situated.
This can be accomplished using Cloud Connect through Amazon Transit Gateway or IPsec.
A tutorial on how to set up a DNS firewall based on a private DNS using Amazon Route 53 is available [here](https://www.emnify.com/en/developer-hub/dns-filtering).
