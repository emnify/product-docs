---
description: How to configure DNS settings
last_update:
  date: 01-17-2023
slug: /how-tos/configure-dns-settings
---

# Configure DNS settings

You have the option to configure your own DNS settings, no matter if it's a public or a private server.
DNS settings can be changed in the emnify Portal.

1. [Log in to your emnify account](https://portal.emnify.com/sign).
1. Navigate to [**Device Policies**](https://portal.emnify.com/device-policies).
1. Click **New service policy**.
1. Select the **More options** tab to find the **Custom DNS** section.

:::note
Utilizing a private DNS server that isn't accessible via the public internet requires establishing a private network with the device or a network where the private DNS server is situated.
This can be accomplished using Cloud Connect through Amazon Transit Gateway or IPsec.

See [DNS Filtering with emnify Cloud Connect and AWS Route53](https://www.emnify.com/developer-blog/dns-filtering) on the emnify Developer Blog for step-by-step instructions.
:::
