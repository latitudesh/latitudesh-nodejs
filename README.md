# maxihost-nodejs

Nodejs Package to use Maxihost API. Check our [API documentation](https://developers.maxihost.com)

# Instalation

`npm install maxihost-nodejs`

# Usage

```javascript

const Maxihost  = require('maxihost-nodejs');
maxihostApi = new Maxihost(<APITOKEN>);

// Async Await

const device = (async () => {
  await maxihostApi.Device.list()
})

// Promise then

  maxihostApi.Device.list().then((response) => {
    // success
  }, (response) => {
    // failure
  })

```

# Available API Methods

- `Device.list`. SearchParams: `limit, page, status`. [Reference](https://developers.maxihost.com/reference#list-servers-1)
- `Device.get`. Params: `deviceId`. [Reference](https://developers.maxihost.com/reference#retrieve-server-1)
- `Device.create`. Params: `facility, plan, hostname, operating_system, billing_cycle, ssh_keys, custom_scripts, raid`. [Reference](https://developers.maxihost.com/reference#create-server-1)
- `Device.delete`. Params: `deviceId`. [Reference](https://developers.maxihost.com/reference#delete-server-1)
- `Device.Bandwidth.get`. Params: `deviceId`. SearchParams: `output_format, period, start_time, end_time`. [Reference](https://developers.maxihost.com/reference#retrieve-server-bandwidth-1)
- `Device.Actions.manage_power`. Params: `id, type`. [Reference](https://developers.maxihost.com/reference#server-power-management-1)
- `Device.Actions.getReinstall`. Params: `id`. [Reference](https://developers.maxihost.com/reference#reinstall-eligibility-1)
- `Device.Actions.reinstall`. Params: `id, label, operating_system, ssh`. [Reference](https://developers.maxihost.com/reference#reinstall-server-1)
- `Device.Actions.remote_access`. Params: `id`. [Reference](https://developers.maxihost.com/reference#create-ipmi-session-1)
- `Device.Ips.list`. Params: `page, limit `. [Reference](https://developers.maxihost.com/reference#list-all-ips-1)
- `Device.CustomScripts.list`. Params: `page, limit`. [Reference](https://developers.maxihost.com/reference#custom-scripts-get)
- `Device.CustomScripts.update`. Params: `id, name, content`. [Reference](https://developers.maxihost.com/reference#custom-scripts-id-put)
- `Device.CustomScripts.delete`. Params: `id`. [Reference](https://developers.maxihost.com/reference#custom-script-id-delete)
- `Device.CustomScripts.create`. Params: `name, content`. [Reference](https://developers.maxihost.com/reference#custom-script-post)
- `Device.Plans.list`. Params: `page, limit`. [Reference](https://developers.maxihost.com/reference#list-available-servers-1)
- `Device.Plans.addons`. Params: `page, limit`. [Reference](https://developers.maxihost.com/reference#list-available-addons-1)
- `Device.Plans.operatingSystems`. Params: `page, limit`. [Reference](https://developers.maxihost.com/reference#list-operating-systems-1)
