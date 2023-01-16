---
description: How to manually configure the APN
---
# iOS devices

When setting up an iOS device with an emnify IoT SIM, you need to follow 4 steps:

1. Go to **Settings** → **Mobile Data**
1. Select `emnify` under **Data Plans** (first one if regular SIM or secondary if eSIM)
1. Enable **Data Roaming** and select **Mobile Data Network**
1. Set APN to `em` - leave everything else blank

import iOSsettings from './assets/ios-1-settings.png';
import iOSmobiledata from './assets/ios-2-mobile-data.png';
import iOSmobilenetwork from './assets/ios-3-mobile-network.png';
import iOSapn from './assets/ios-4-apn.png';

<div class="medium-zoom-image">
    <img src={iOSsettings} style={{width:200}} 
      alt="iOS settings" />&nbsp;
    <img src={iOSmobiledata} style={{width:200}}
      alt="iOS mobile data" />&nbsp;
    <img src={iOSmobilenetwork} style={{width:200}}
      alt="iOS mobile data network" />&nbsp;
    <img src={iOSapn} style={{width:200}}
      alt="iOS APN" /> 
</div>