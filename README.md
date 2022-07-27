# maxihost-nodejs

Nodejs Package to use Maxihost API. Check our [API documentation](https://developers.maxihost.com/v2.0/reference)

# Instalation

`npm install maxihost-nodejs`

# Usage

```javascript

const Maxihost  = require('maxihost-nodejs');
maxihostApi = new Maxihost(<APITOKEN>);

// Async Await

const profile = (async () => {
  await maxihostApi.Profile.get()
})

// Promise then

maxihostApi.Profile.get().then((response) => {
  // success
}, (response) => {
  // failure
})

```

# Available API Methods

- `Ips.list`. Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-ips)
- 
- `Plans.list`. Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-plans)
- `Plans.get`. Params: `(planId, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-plan)
- `Plans.addons`. Params: `(searchParams)`. [Reference]()
- `Plans.operatingSystems`. Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-plans-operating-system^)
- `Plans.Bandwidth.list`. Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-plans-bandwidth)
- `Plans.Bandwidth.update`. Params: `(bodyData)`. [Reference](https://docs.maxihost.com/reference/update-plans-bandwidth)
- 
- `Projects.Members.list`. Params: `(projectId, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-team-members)
- `Projects.SshKeys.get`. Params: `(projectId, sshKeyId, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-project-ssh-key)
- `Projects.SshKeys.create`. Params: `(projectId, bodyData)`. [Reference](https://docs.maxihost.com/reference/post-project-ssh-key)
- `Projects.SshKeys.update`. Params: `(projectId, bodyData)`. [Reference](https://docs.maxihost.com/reference/put-project-ssh-key)
- `Projects.SshKeys.delete`. Params: `(projectId, bodyData)`. [Reference](https://docs.maxihost.com/reference/delete-project-ssh-key)
- 
- `Device.list`. SearchParams: `limit, page, status`. [Reference](https://developers.maxihost.com/reference#list-servers-1)
- `Device.get`. Params: `deviceId`. [Reference](https://developers.maxihost.com/reference#retrieve-server-1)
- `Device.create`. Params: `facility, plan, hostname, operating_system, billing_cycle, ssh_keys, custom_scripts, raid`. [Reference](https://developers.maxihost.com/reference#create-server-1)
- `Device.delete`. Params: `deviceId`. [Reference](https://developers.maxihost.com/reference#delete-server-1)
- `Device.Bandwidth.get`. Params: `deviceId`. SearchParams: `output_format, period, start_time, end_time`. [Reference](https://developers.maxihost.com/reference#retrieve-server-bandwidth-1)
- `Device.Actions.manage_power`. Params: `id, type`. [Reference](https://developers.maxihost.com/reference#server-power-management-1)
- `Device.Actions.getReinstall`. Params: `id`. [Reference](https://developers.maxihost.com/reference#reinstall-eligibility-1)
- `Device.Actions.reinstall`. Params: `id, label, operating_system, ssh`. [Reference](https://developers.maxihost.com/reference#reinstall-server-1)
- `Device.Actions.remote_access`. Params: `id`. [Reference](https://developers.maxihost.com/reference#create-ipmi-session-1)
- `Device.CustomScripts.list`. Params: `page, limit`. [Reference](https://developers.maxihost.com/reference#custom-scripts-get)
- `Device.CustomScripts.update`. Params: `id, name, content`. [Reference](https://developers.maxihost.com/reference#custom-scripts-id-put)
- `Device.CustomScripts.delete`. Params: `id`. [Reference](https://developers.maxihost.com/reference#custom-script-id-delete)
- `Device.CustomScripts.create`. Params: `name, content`. [Reference](https://developers.maxihost.com/reference#custom-script-post)
- `Account.Regions`. Params: `page, limit`. [Reference](https://developers.maxihost.com/reference#list-regions-1)
- `VirtualNetworks.list`. Params: `region`. [Reference](https://developers.maxihost.com/reference#get_virtual-networks)
- `VirtualNetworks.create`. Params: `region, description`. [Reference](https://developers.maxihost.com/reference#post_virtual-networks)
- `VirtualNetworks.update`. Params: `vid, description`. [Reference](https://developers.maxihost.com/reference#put_virtual-networks-vlan-id)
- `VirtualNetworks.delete`. Params: `vid`. [Reference](https://developers.maxihost.com/reference#delete_virtual-networks-vlan-id)
- `VirtualNetworks.Assignments.list`. Params: `vid`. [Reference](https://developers.maxihost.com/reference#virtual-network-assignments)

- `Profile.get`. Params: `(searchParams)` [Reference](https://developers.maxihost.com/v2.0/reference#get-user-profile)
- `Projects.list`> Params: `(searchParams)` [Reference](https://developers.maxihost.com/v2.0/reference#get-projects)
- `Projects.get`. Params: `(projectId, searchParams)`. [Reference](https://developers.maxihost.com/v2.0/reference#retrieve-project)
- `Projects.Ips.list`. Params: `(projectId, searchParams)`. [Reference](https://developers.maxihost.com/v2.0/reference#get-project-ips)
- `Projects.Servers.list`. Params: `(projectId, searchParams)`. [Reference](https://developers.maxihost.com/v2.0/reference#get-project-servers)
- `Projects.Servers.get`. Params: `(projectId, serverId, searchParams)`. [Reference](https://developers.maxihost.com/v2.0/reference#get-project-server)
- `Regions.list`. Params: `(searchParams)` [Reference](https://developers.maxihost.com/v2.0/reference#get-regions)
- `Regions.get`. Params: `(regionId, searchParams)`. [Reference](https://developers.maxihost.com/v2.0/reference#get-region-id)
- `Teams.current`. Params: `(searchParams)` [Reference](https://developers.maxihost.com/v2.0/reference#get-team)
- `Teams.User.listTeams`. Params: `(searchParams)` [Reference](https://developers.maxihost.com/v2.0/reference#get-user-teams)
