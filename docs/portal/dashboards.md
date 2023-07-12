# Dashboards

If you want a summary of your usage for the current billing cycle, the [Dashboard](https://portal.emnify.com/) is the first page you will see after logging in.

## Usage summary 

- **Current Month Data Volume**
  - Uploaded volume
  - Downloaded volume
- **Inclusive Volume (per active device)**  
  This is the free data volume based on (the [Main zone](/portal/group-policies#zones)) you chose for your [Coverage Policy](/portal/group-policies#coverage-policies).
  For instance, if you selected **Europe Basic** as your *Main zone*, your first 100 MB (pooled across multiple devices) are free.
  If the rate for this zone is €0.10 per MB, then you will see **100 MB in Europe Basic € 1.00** here.
- **Current Data/SMS Cost** (running balance of total costs in your currency)
- **Active (charged) devices** (count)
  - **SMS** (current usage costs in your currency)
  - **SMS fee** (in your currency))
- **Device Traffic** (Chart: last 4 hours, upload/download volumes)
- **Devices Status**
  - **Online** (count)
  - **Disabled** (count)
  - **Offline** (count)

<details className="custom-details-example">
  <summary>Show an example of the current usage summary</summary>
  <img
    src={require('./assets/dashboard-usage.png').default}
    style={{width:695}}
    alt=""
  />
</details>

## Events

The **Dashboard** also shows recent events for all of your devices in reverse chronological order which you can also download as a CSV file.

<details className="custom-details-example">
  <summary>Show an example of Events</summary>
  <img
    src={require('./assets/dashboard-events.png').default}
    alt=""
  />
</details>

## Reports

For more specialized reporting, see the [Reports](https://portal.emnify.com/reports/default) page that includes these reports:

- CDRs
- Data traffic per ratezone
- Data usage per device policy
- Device list
- Global distribution
- Live traffic
- Network activity
- Online devices KPI
- Overview current month
- SIM list
- Traffic by mobile network
- Traffic history
- Traffic per Day
- Usage per device
