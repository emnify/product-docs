"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[2873],{3905:(e,i,t)=>{t.d(i,{Zo:()=>l,kt:()=>f});var n=t(7294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function s(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?s(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function o(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),d=function(e){var i=n.useContext(c),t=i;return e&&(t="function"==typeof e?e(i):r(r({},i),e)),t},l=function(e){var i=d(e.components);return n.createElement(c.Provider,{value:i},e.children)},v="mdxType",m={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},p=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),v=d(t),p=a,f=v["".concat(c,".").concat(p)]||v[p]||m[p]||s;return t?n.createElement(f,r(r({ref:i},l),{},{components:t})):n.createElement(f,r({ref:i},l))}));function f(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=p;var o={};for(var c in i)hasOwnProperty.call(i,c)&&(o[c]=i[c]);o.originalType=e,o[v]="string"==typeof e?e:a,r[1]=o;for(var d=2;d<s;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9205:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>v,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=t(7462),a=(t(7294),t(3905));const s={description:"Code samples showing how to use the SDK"},r="Examples",o={unversionedId:"sdks/python/examples",id:"sdks/python/examples",title:"Examples",description:"Code samples showing how to use the SDK",source:"@site/docs/sdks/python/examples.md",sourceDirName:"sdks/python",slug:"/sdks/python/examples",permalink:"/sdks/python/examples",draft:!1,editUrl:"https://github.com/emnify/product-docs/blob/main/docs/sdks/python/examples.md",tags:[],version:"current",lastUpdatedAt:1683791560,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{description:"Code samples showing how to use the SDK"},sidebar:"sdkSidebar",previous:{title:"Getting started with the emnify Python SDK",permalink:"/sdks/python/getting-started"},next:{title:"Help and contributing",permalink:"/sdks/python/help"}},c={},d=[{value:"Getting your first device online",id:"getting-your-first-device-online",level:2},{value:"Device status management",id:"device-status-management",level:2},{value:"Initialization of the SDK client",id:"initialization-of-the-sdk-client",level:3},{value:"Create and activate a device",id:"create-and-activate-a-device",level:3},{value:"Configure a device",id:"configure-a-device",level:3},{value:"Configure operator blocklist for device",id:"configure-operator-blocklist-for-device",level:3},{value:"Disable device",id:"disable-device",level:3},{value:"Delete device",id:"delete-device",level:3},{value:"Filtering and sorting",id:"filtering-and-sorting",level:3},{value:"Manage device connectivity",id:"manage-device-connectivity",level:3}],l={toc:d};function v(e){let{components:i,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"examples"},"Examples"),(0,a.kt)("h2",{id:"getting-your-first-device-online"},"Getting your first device online"),(0,a.kt)("p",null,"Follow the steps in the next code block comments to get your devices online."),(0,a.kt)("p",null,"This example demonstrates complex operations across multiple SDK ",(0,a.kt)("a",{parentName:"p",href:"/sdks/concepts"},"Concepts"),", such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://portal.emnify.com/device-policies"},"Device policies")," (configures which services are available and where)"),(0,a.kt)("li",{parentName:"ul"},"SIM registration"),(0,a.kt)("li",{parentName:"ul"},"Device creation"),(0,a.kt)("li",{parentName:"ul"},"SIM assignment"),(0,a.kt)("li",{parentName:"ul"},"Error handling"),(0,a.kt)("li",{parentName:"ul"},"Device details retrieval"),(0,a.kt)("li",{parentName:"ul"},"Device activation or deactivation")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can ",(0,a.kt)("a",{parentName:"p",href:"https://support.emnify.com/hc/en-us/articles/4401906757906-How-to-configure-the-APN-on-different-devices"},"learn more about APN configuration via SMS")," on our Support page.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="mass_sim_activation.py"',title:'"mass_sim_activation.py"'},"from emnify import EMnify\nfrom emnify import constants\nfrom emnify.errors import EMnifyBaseException\n\n# === Example: Getting your first device online ===\n\n# To operate the emnify SDK, you need to generate an application token.\n# Step-by-step guide: https://www.emnify.com/developer-blog/how-to-use-an-application-token-for-api-authentication\ntoken = input('token: ')\n# The client is authorized to perform operations by your name:\nemnify_client = EMnify(token)\n\n# Before getting your device online, you need a device and a SIM card.\n# This example assumes you have a batch of SIM cards for your devices.\nsim_batch_BIC2 = input('BIC2: ')\n\n# emnify allows you to control your coverage and services.\n# You can find those IDs on the Portal: https://portal.emnify.com/device-policies \nservice_profile_id = input('Service Profile ID: ')\ntariff_profile_id = input('Tariff Profile ID: ')\n# In order to create devices for SIMs afterwards we need service and coverage profiles.\nservice_profile = emnify_client.devices.service_profile_model(id=int(service_profile_id))\ntariff_profile = emnify_client.devices.tariff_profile_model(id=int(tariff_profile_id))\n\ntry:\n    # You need to add the SIM card batch to your account.\n    # This method also supports single sim registration via BIC1.\n    # (meaning you can use your free Evaluation SIM cards)\n    issued_sims = emnify_client.sim.register_sim(bic=sim_batch_BIC2)\n    # All of the added SIMs are now registered with \"Issued\" status.\nexcept EMnifyBaseException as e:\n    # If an error appears during SIM registration,\n    # use EMnifyBaseException for general exceptions \n    # or inherited classes for specific ones.\n    raise AssertionError(f\"error during sim batch BIC2 activation{e}\")\n\n# We also need to define the device status to be applied during creation.\ndevice_status = emnify_client.devices.status_model(\n    **constants.DeviceStatuses.ENABLED_DICT.value\n)\n\n\nfor sim in issued_sims:\n    # Only registering a SIM card won't provide connectivity.\n    # You also need to create a new device with the SIM assigned.\n\n    # For device creation, we need to specify the parameters of the device:\n    device_name = f\"Device({sim.iccid})\"\n    device_model = emnify_client.devices.device_create_model(\n        tariff_profile=tariff_profile,\n        status=device_status,\n        service_profile=service_profile,\n        sim=sim,\n        name=device_name\n    )\n\n    # See the API Reference to learn other device parameters:\n    # https://emnify.github.io/emnify-sdk-python/autoapi/index.html\n\n    # Here's how we create the device we want:\n    device_id = emnify_client.devices.create_device(device=device_model)\n\n    # After creation, we're able to retrieve full device information.\n    # You can store this information in your local inventory for future needs.\n    device = emnify_client.devices.retrieve_device(device_id=device_id)\n\n    # Connectivity is disabled by default (so you're not getting billed).\n    # The following command will enable connectivity for your device with a SIM card installed:\n    emnify_client.devices.change_status(enable=True, device=device)\n\n    # At this point, emnify can provide connectivity services.\n    # You can already send and receive SMS (if enabled in the assigned Service Profile).\n\n    # After the device is created and enabled, you need to configure it.\n\n    # Proper APN configuration of the device is required to access internet.\n    # The emnify APN is: em (two characters, no spaces)\n    # For example purposes, we'll send a special configuration SMS command:\n    ACTIVATION_CODE = 'AT+CGDCONT=1,\"IP\",\"em\",,'\n    SENDER = \"city_scooters_admin\"\n\n    activation_sms = emnify_client.devices.sms_create_model(\n        payload=ACTIVATION_CODE,\n        source_adress=SENDER\n    )\n    # This configuration may vary by the device manufacturer.\n    # See our documentation to learn if this method suits your devices.\n\n    # Finally, send the configuration SMS to the device:\n    emnify_client.devices.send_sms(device=device, sms=activation_sms)\n\n    # Congratulations! Your device is online!\n    # Now, you can check your device's internet access.\n")),(0,a.kt)("h2",{id:"device-status-management"},"Device status management"),(0,a.kt)("h3",{id:"initialization-of-the-sdk-client"},"Initialization of the SDK client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="device_lifecycle_management.py"',title:'"device_lifecycle_management.py"'},"from emnify import EMnify\nfrom emnify import constants as emnify_constants\n\nemnify = EMnify(app_token='your token')\n")),(0,a.kt)("h3",{id:"create-and-activate-a-device"},"Create and activate a device"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Device creation"),(0,a.kt)("li",{parentName:"ul"},"SIM registration"),(0,a.kt)("li",{parentName:"ul"},"SIMs listing"),(0,a.kt)("li",{parentName:"ul"},"Device details retrieval"),(0,a.kt)("li",{parentName:"ul"},"Device activation or deactivation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="device_lifecycle_management.py"',title:'"device_lifecycle_management.py"'},"#  === Example: Create and activate a device ===\n\nunassigned_sims = [i for i in emnify.sim.get_sim_list(without_device=True)]\n#  If there are no unassigned_sims, register a new one by batch code:\nif not unassigned_sims:\n    registered_sim = emnify.sim.register_sim(bic='sample_bic_code')  # Returns a list\n    sim = emnify.sim.retrieve_sim(registered_sim[0].id)\nelse:\n    sim = unassigned_sims[0]  # Takes the first unassigned SIM\n\n# Defining new device parameters\n# All required models can be retrieved through the manager's properties\nservice_profile = emnify.devices.service_profile_model(id=1)\ntariff_profile = emnify.devices.tariff_profile_model(id=1)\ndevice_status = emnify.devices.status_model(id=0)\nname = 'new_device'\ndevice_model = emnify.devices.device_create_model(\n    tariff_profile=tariff_profile,\n    status=device_status,\n    service_profile=service_profile,\n    sim=sim,\n    name=name\n)\n\n# After creation, the model SDK returns the id of the device:\ndevice_id = emnify.devices.create_device(device=device_model)\n# Then you can retrieve all of the device details:\ndevice = emnify.devices.retrieve_device(device_id=device_id)\n# Finally, activate the device:\nemnify.devices.change_status(device=device, enable=True)\n\n# Retrieving updated device details\ndevice = emnify.devices.retrieve_device(device_id=device_id)\ndevice_status = device.status.description  # Device status will be 'Enabled'\nsim_status = device.sim.status.description  # Device status will be 'Activated'\n")),(0,a.kt)("h3",{id:"configure-a-device"},"Configure a device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="device_lifecycle_management.py"',title:'"device_lifecycle_management.py"'},"#  === Example: Configure a device ===\n\n# Retrieving device details\ndevice = emnify.devices.retrieve_device(device_id=device_id)\n\ntags = 'arduino, meter, temp'  # Sample tags\nname = 'new name'  # Sample name\n\n# Adjust the device configuration\nupdate_device_fields = emnify.devices.device_update_model(name='new name', tags='arduino')\nemnify.devices.update_device(device_id=device.id, device=update_device_fields)\n\n# Retrieving updated device details\nupdated_device = emnify.devices.retrieve_device(device_id=device_id)\ndevice_tags = updated_device.tags  # Updated tag will be 'arduino'\ndeivce_name = updated_device.name  # Updated name will be 'new name'\n")),(0,a.kt)("h3",{id:"configure-operator-blocklist-for-device"},"Configure operator blocklist for device"),(0,a.kt)("p",null,"You may want to refrain from using a specific operator to avoid incurring costs with the device."),(0,a.kt)("p",null,"This is possible by adding the operator to the blocklist of the device:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="device_lifecycle_management.py"',title:'"device_lifecycle_management.py"'},"#  === Example: Configure operator blocklist for device ===\n\n# Retrieve a list of all operators\nall_operators = [i for i in emnify.operator.get_operators()]\n\n# The following adds three operators to the blocklist:\ndevice_id = 0  # Your device id\nemnify.devices.add_device_blacklist_operator(operator_id=all_operators[0].id, device_id=device_id)\nemnify.devices.add_device_blacklist_operator(operator_id=all_operators[1].id, device_id=device_id)\nemnify.devices.add_device_blacklist_operator(operator_id=all_operators[2].id, device_id=device_id)\n\n# Gets all blocklist operators of the device by device_id:\ndevice_blacklist = emnify.devices.get_device_operator_blacklist(device_id=device_id)\n\noperator_id = 0\nfor operator in device_blacklist:\n    print(operator.country)\n    print(operator.id)\n    print(operator.mnc)\n    operator_id = operator.id\n\n# Removes the last operator from the blocklist\nemnify.devices.delete_device_blacklist_operator(device_id=device_id, operator_id=operator_id)\n")),(0,a.kt)("h3",{id:"disable-device"},"Disable device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="device_lifecycle_management.py"',title:'"device_lifecycle_management.py"'},"#  === Example: Disable device ===\n\ndevice_filter = emnify.devices.get_device_filter_model(status=emnify_constants.DeviceStatuses.ENABLED_ID.value)\nall_devices_with_sim = [\n    device for device in emnify.devices.get_devices_list(filter_model=device_filter) if device.sim\n]\n\n# Gets a list of all devices with SIM cards and the 'Enabled' status\ndevice = all_devices_with_sim[0]\n\n# Disables a device\nemnify.devices.change_status(disable=True, device=device.id)\n\ndisabled_device = emnify.devices.retrieve_device(device_id=device.id)\ndevice_status = disabled_device.status.description  # Device status will be 'Disabled'\nsim_status = disabled_device.sim.status.description # SIM status will be 'Suspended'\n")),(0,a.kt)("h3",{id:"delete-device"},"Delete device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="device_lifecycle_management.py"',title:'"device_lifecycle_management.py"'},"#  === Example: Delete device ===\n\nold_devices_list = [device for device in emnify.devices.get_devices_list()]\n\n# Gets a list of all devices\ndevice_to_delete = list(\n        filter(\n            lambda device: device.sim and device.status.id == emnify_constants.DeviceStatuses.ENABLED_ID,\n            old_devices_list\n        )\n)[0]\n\n# Pick a device to delete with an assigned SIM and the 'Enabled' status\nsim_id_of_deleted_device = device_to_delete.sim.id\n\nemnify.devices.delete_device(device_id=device_to_delete.id)\n\n# Deletes a device\nnew_device_list = [device for device in emnify.devices.get_devices_list()]\n\n# Gets a new list of all devices\nassert len(old_devices_list) > len(new_device_list)\n# After deleting, the total device count will be lowered.\n\nsim = emnify.sim.retrieve_sim(sim_id=sim_id_of_deleted_device)\nsim_status = sim.status.description  # SIM status will be 'Suspended'\n")),(0,a.kt)("h3",{id:"filtering-and-sorting"},"Filtering and sorting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="filtering_and_sorting.py"',title:'"filtering_and_sorting.py"'},"# === Example: Using a Filtering for List calls  ===\nfrom emnify import EMnify\nfrom emnify import constants as emnify_constants\n\nemnify_client = EMnify(app_token='your_application_token')\n\n# Some methods that return multiple objects allow sorting and filtering.\n# This optimizes processing time because:\n# * Filtering enables you to immediately get the necessary objects with the necessary qualities.\n# * Sorting allows you to set the order objects are displayed.\n# Instead of sending several requests searching for the required object, you only need one.\n\n# This example finds all SIMs for a specific customer organization.\n# Specifying the necessary parameters as arguments initiates the model for filtering.\nsim_filter = emnify_client.sim.get_sim_filter_model(customer_org=1)\n\n# To retrieve the filtering model for filling, you need to get it as a property of a SIM card manager: get_sim_filter_model\n# For devices, it would be: get_device_filter_model\n\n# After initializing the model object, you must pass it as an argument to request a list of objects.\nsims = emnify_client.sim.get_sim_list(filter_model=sim_filter)\n# Now, the sims variable contains the objects for customer organization 1.\n\n# For a more detailed search, pass several parameters for filtering:\nsim_filter = emnify_client.sim.get_sim_filter_model(\n    customer_org=1,\n    status=emnify_constants.SimStatusesID.ACTIVATED_ID.value,\n    production_date='2019-01-25'\n)\n\n# The list SIM cards request also has a separate filter, passed as an argument.\n# The following example searches for SIMs without a device:\nsims_without_assigned_device = emnify_client.sim.get_sim_list(without_device=True)\n\n\n# === Example: Using sorting on list calls  ===\n\n# Like filtering, sorting reduces processing time by ordering objects in the server.\n# Sorting enables you to group objects by specifying a particular attribute.\n\n# The following example sorts all devices by the last updated date:\nsort_parameter = emnify_client.devices.get_device_sort_enum.LAST_UPDATED.value\n# Note that all sorting uses enums.\n\n# After choosing a filtering parameter, pass it as an argument to sort_enum:\nsorted_devices = emnify_client.devices.get_devices_list(\n    sort_enum=sort_parameter\n)\n\n# Now, you have a list of devices with the most recently updated at the top.\nfor latest_device in sorted_devices:\n    ...\n")),(0,a.kt)("h3",{id:"manage-device-connectivity"},"Manage device connectivity"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.emnify.com/developer-blog/5-ways-to-detect-and-solve-connectivity-issues#network-events"},"Connectivity troubleshooting")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="device_lifecycle_management.py"',title:'"device_lifecycle_management.py"'},"#  === Manage device connectivity ===\n\n# There are many reasons why connection issues arise. For example:\n# * The device executes the wrong procedures due to a bad firmware update.\n# * The device executes network registration too frequently, so the network no longer allows it to register.\n# * You changed a policy for a blocked device.\n\n# To reset device connectivity, use the following methods:\n# * Resetting the device's data connectivity\ndevice_id = 0\nemnify.devices.reset_connectivity_data(device_id=device_id)\n# * Resetting the network connectivity\nemnify.devices.reset_connectivity_network(device_id=device_id)\n\n# For checking the connectivity, use the following method:\nconnectivity = emnify.devices.get_device_connectivity_status(device_id=device_id)\nprint(connectivity.status.description)  # Status will be either 'Attached,' 'Online,' 'Offline,' or 'Blocked.'\n")))}v.isMDXComponent=!0}}]);