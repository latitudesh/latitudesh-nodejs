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
