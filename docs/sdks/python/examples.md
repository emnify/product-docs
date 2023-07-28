---
description: Code samples showing how to use the emnify python SDK
slug: /sdks/python/examples
---

# Examples

## Get your first device online

Follow the steps in the next code block comments to get your devices online.

This example demonstrates complex operations across multiple SDK [Concepts](/sdks/concepts), such as:

- [Device policies](https://portal.emnify.com/device-policies) (configures which services are available and where)
- SIM registration
- Device creation
- SIM assignment
- Error handling
- Device details retrieval
- Device activation or deactivation

:::tip
You can [learn more about APN configuration via SMS](https://support.emnify.com/hc/en-us/articles/4401906757906-How-to-configure-the-APN-on-different-devices) in the emnify Knowledge Base.
:::

```python title="mass_sim_activation.py"
from emnify import EMnify
from emnify import constants
from emnify.errors import EMnifyBaseException

# === Example: Getting your first device online ===

# To operate the emnify SDK, you need to generate an application token.
# Step-by-step guide: https://www.emnify.com/developer-blog/how-to-use-an-application-token-for-api-authentication
token = input('token: ')
# The client is authorized to perform operations by your name:
emnify_client = EMnify(token)

# Before getting your device online, you need a device and a SIM card.
# This example assumes you have a batch of SIM cards for your devices.
sim_batch_BIC2 = input('BIC2: ')

# emnify allows you to control your coverage and services.
# You can find those IDs on the Portal: https://portal.emnify.com/device-policies 
service_profile_id = input('Service Profile ID: ')
tariff_profile_id = input('Tariff Profile ID: ')
# In order to create devices for SIMs afterwards we need service and coverage profiles.
service_profile = emnify_client.devices.service_profile_model(id=int(service_profile_id))
tariff_profile = emnify_client.devices.tariff_profile_model(id=int(tariff_profile_id))

try:
    # You need to add the SIM card batch to your account.
    # This method also supports single sim registration via BIC1.
    # (meaning you can use your free Evaluation SIM cards)
    issued_sims = emnify_client.sim.register_sim(bic=sim_batch_BIC2)
    # All of the added SIMs are now registered with "Issued" status.
except EMnifyBaseException as e:
    # If an error appears during SIM registration,
    # use EMnifyBaseException for general exceptions 
    # or inherited classes for specific ones.
    raise AssertionError(f"error during sim batch BIC2 activation{e}")

# We also need to define the device status to be applied during creation.
device_status = emnify_client.devices.status_model(
    **constants.DeviceStatuses.ENABLED_DICT.value
)


for sim in issued_sims:
    # Only registering a SIM card won't provide connectivity.
    # You also need to create a new device with the SIM assigned.

    # For device creation, we need to specify the parameters of the device:
    device_name = f"Device({sim.iccid})"
    device_model = emnify_client.devices.device_create_model(
        tariff_profile=tariff_profile,
        status=device_status,
        service_profile=service_profile,
        sim=sim,
        name=device_name
    )

    # See the API Reference to learn other device parameters:
    # https://emnify.github.io/emnify-sdk-python/autoapi/index.html

    # Here's how we create the device we want:
    device_id = emnify_client.devices.create_device(device=device_model)

    # After creation, we're able to retrieve full device information.
    # You can store this information in your local inventory for future needs.
    device = emnify_client.devices.retrieve_device(device_id=device_id)

    # Connectivity is disabled by default (so you're not getting billed).
    # The following command will enable connectivity for your device with a SIM card installed:
    emnify_client.devices.change_status(enable=True, device=device)

    # At this point, emnify can provide connectivity services.
    # You can already send and receive SMS (if enabled in the assigned Service Profile).

    # After the device is created and enabled, you need to configure it.

    # Proper APN configuration of the device is required to access internet.
    # The emnify APN is: em (two characters, no spaces)
    # For example purposes, we'll send a special configuration SMS command:
    ACTIVATION_CODE = 'AT+CGDCONT=1,"IP","em",,'
    SENDER = "city_scooters_admin"

    activation_sms = emnify_client.devices.sms_create_model(
        payload=ACTIVATION_CODE,
        source_adress=SENDER
    )
    # This configuration may vary by the device manufacturer.
    # See our documentation to learn if this method suits your devices.

    # Finally, send the configuration SMS to the device:
    emnify_client.devices.send_sms(device=device, sms=activation_sms)

    # Congratulations! Your device is online!
    # Now, you can check your device's internet access.
```

## Device status management

### Initialization of the SDK client

```python title="device_lifecycle_management.py"
from emnify import EMnify
from emnify import constants as emnify_constants

emnify = EMnify(app_token='your token')
```

### Create and activate a device

- Device creation
- SIM registration
- SIMs listing
- Device details retrieval
- Device activation or deactivation

```python title="device_lifecycle_management.py"
#  === Example: Create and activate a device ===

unassigned_sims = [i for i in emnify.sim.get_sim_list(without_device=True)]
#  If there are no unassigned_sims, register a new one by batch code:
if not unassigned_sims:
    registered_sim = emnify.sim.register_sim(bic='sample_bic_code')  # Returns a list
    sim = emnify.sim.retrieve_sim(registered_sim[0].id)
else:
    sim = unassigned_sims[0]  # Takes the first unassigned SIM

# Defining new device parameters
# All required models can be retrieved through the manager's properties
service_profile = emnify.devices.service_profile_model(id=1)
tariff_profile = emnify.devices.tariff_profile_model(id=1)
device_status = emnify.devices.status_model(id=0)
name = 'new_device'
device_model = emnify.devices.device_create_model(
    tariff_profile=tariff_profile,
    status=device_status,
    service_profile=service_profile,
    sim=sim,
    name=name
)

# After creation, the model SDK returns the id of the device:
device_id = emnify.devices.create_device(device=device_model)
# Then you can retrieve all of the device details:
device = emnify.devices.retrieve_device(device_id=device_id)
# Finally, activate the device:
emnify.devices.change_status(device=device, enable=True)

# Retrieving updated device details
device = emnify.devices.retrieve_device(device_id=device_id)
device_status = device.status.description  # Device status will be 'Enabled'
sim_status = device.sim.status.description  # SIM status will be 'Activated'
```

### Configure a device

```python title="device_lifecycle_management.py"
#  === Example: Configure a device ===

# Retrieving device details
device = emnify.devices.retrieve_device(device_id=device_id)

tags = 'arduino, meter, temp'  # Sample tags
name = 'new name'  # Sample name

# Adjust the device configuration
update_device_fields = emnify.devices.device_update_model(name='new name', tags='arduino')
emnify.devices.update_device(device_id=device.id, device=update_device_fields)

# Retrieving updated device details
updated_device = emnify.devices.retrieve_device(device_id=device_id)
device_tags = updated_device.tags  # Updated tag will be 'arduino'
deivce_name = updated_device.name  # Updated name will be 'new name'
```

### Configure operator blocklist for device

You may want to refrain from using a specific operator to avoid incurring costs with the device.

This is possible by adding the operator to the blocklist of the device:

```python title="device_lifecycle_management.py"
#  === Example: Configure operator blocklist for device ===

# Retrieve a list of all operators
all_operators = [i for i in emnify.operator.get_operators()]

# The following adds three operators to the blocklist:
device_id = 0  # Your device id
emnify.devices.add_device_blacklist_operator(operator_id=all_operators[0].id, device_id=device_id)
emnify.devices.add_device_blacklist_operator(operator_id=all_operators[1].id, device_id=device_id)
emnify.devices.add_device_blacklist_operator(operator_id=all_operators[2].id, device_id=device_id)

# Gets all blocklist operators of the device by device_id:
device_blacklist = emnify.devices.get_device_operator_blacklist(device_id=device_id)

operator_id = 0
for operator in device_blacklist:
    print(operator.country)
    print(operator.id)
    print(operator.mnc)
    operator_id = operator.id

# Removes the last operator from the blocklist
emnify.devices.delete_device_blacklist_operator(device_id=device_id, operator_id=operator_id)
```

### Disable device

```python title="device_lifecycle_management.py"
#  === Example: Disable device ===

device_filter = emnify.devices.get_device_filter_model(status=emnify_constants.DeviceStatuses.ENABLED_ID.value)
all_devices_with_sim = [
    device for device in emnify.devices.get_devices_list(filter_model=device_filter) if device.sim
]

# Gets a list of all devices with SIM cards and the 'Enabled' status
device = all_devices_with_sim[0]

# Disables a device
emnify.devices.change_status(disable=True, device=device.id)

disabled_device = emnify.devices.retrieve_device(device_id=device.id)
device_status = disabled_device.status.description  # Device status will be 'Disabled'
sim_status = disabled_device.sim.status.description # SIM status will be 'Suspended'
```

### Delete device

```python title="device_lifecycle_management.py"
#  === Example: Delete device ===

old_devices_list = [device for device in emnify.devices.get_devices_list()]

# Gets a list of all devices
device_to_delete = list(
        filter(
            lambda device: device.sim and device.status.id == emnify_constants.DeviceStatuses.ENABLED_ID,
            old_devices_list
        )
)[0]

# Pick a device to delete with an assigned SIM and the 'Enabled' status
sim_id_of_deleted_device = device_to_delete.sim.id

emnify.devices.delete_device(device_id=device_to_delete.id)

# Deletes a device
new_device_list = [device for device in emnify.devices.get_devices_list()]

# Gets a new list of all devices
assert len(old_devices_list) > len(new_device_list)
# After deleting, the total device count will be lowered.

sim = emnify.sim.retrieve_sim(sim_id=sim_id_of_deleted_device)
sim_status = sim.status.description  # SIM status will be 'Suspended'
```

### Filtering and sorting

```python title="filtering_and_sorting.py"
# === Example: Using a Filtering for List calls  ===
from emnify import EMnify
from emnify import constants as emnify_constants

emnify_client = EMnify(app_token='your_application_token')

# Some methods that return multiple objects allow sorting and filtering.
# This optimizes processing time because:
# * Filtering enables you to immediately get the necessary objects with the necessary qualities.
# * Sorting allows you to set the order objects are displayed.
# Instead of sending several requests searching for the required object, you only need one.

# This example finds all SIMs for a specific customer organization.
# Specifying the necessary parameters as arguments initiates the model for filtering.
sim_filter = emnify_client.sim.get_sim_filter_model(customer_org=1)

# To retrieve the filtering model for filling, you need to get it as a property of a SIM card manager: get_sim_filter_model
# For devices, it would be: get_device_filter_model

# After initializing the model object, you must pass it as an argument to request a list of objects.
sims = emnify_client.sim.get_sim_list(filter_model=sim_filter)
# Now, the sims variable contains the objects for customer organization 1.

# For a more detailed search, pass several parameters for filtering:
sim_filter = emnify_client.sim.get_sim_filter_model(
    customer_org=1,
    status=emnify_constants.SimStatusesID.ACTIVATED_ID.value,
    production_date='2019-01-25'
)

# The list SIM cards request also has a separate filter, passed as an argument.
# The following example searches for SIMs without a device:
sims_without_assigned_device = emnify_client.sim.get_sim_list(without_device=True)


# === Example: Using sorting on list calls  ===

# Like filtering, sorting reduces processing time by ordering objects in the server.
# Sorting enables you to group objects by specifying a particular attribute.

# The following example sorts all devices by the last updated date:
sort_parameter = emnify_client.devices.get_device_sort_enum.LAST_UPDATED.value
# Note that all sorting uses enums.

# After choosing a filtering parameter, pass it as an argument to sort_enum:
sorted_devices = emnify_client.devices.get_devices_list(
    sort_enum=sort_parameter
)

# Now, you have a list of devices with the most recently updated at the top.
for latest_device in sorted_devices:
    ...
```

### Manage device connectivity

[Connectivity troubleshooting](https://www.emnify.com/developer-blog/5-ways-to-detect-and-solve-connectivity-issues#network-events)

```python title="device_lifecycle_management.py"
#  === Manage device connectivity ===

# There are many reasons why connection issues arise. For example:
# * The device executes the wrong procedures due to a bad firmware update.
# * The device executes network registration too frequently, so the network no longer allows it to register.
# * You changed a policy for a blocked device.

# To reset device connectivity, use the following methods:
# * Resetting the device's data connectivity
device_id = 0
emnify.devices.reset_connectivity_data(device_id=device_id)
# * Resetting the network connectivity
emnify.devices.reset_connectivity_network(device_id=device_id)

# For checking the connectivity, use the following method:
connectivity = emnify.devices.get_device_connectivity_status(device_id=device_id)
print(connectivity.status.description)  # Status will be either 'Attached,' 'Online,' 'Offline,' or 'Blocked.'
```
