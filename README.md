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
- `Projects.list`. Params: `(searchParams)` [Reference](https://docs.maxihost.com/reference/get-projects)
- `Projects.get`. Params: `(projectId, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-project)
- `Projects.update`. Params: `(projectId, bodyData)`. [Reference](https://docs.maxihost.com/reference/update-project)
- `Projects.create`. Params: `(bodyData)`. [Reference](https://docs.maxihost.com/reference/create-project)
- `Projects.delete`. Params: `(idOrSlug)`. [Reference](https://docs.maxihost.com/reference/delete-project)
- 
- `Projects.Members.list`. Params: `(projectId, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-team-members)
- 
- `Projects.SshKeys.get`. Params: `(projectId, sshKeyId, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-project-ssh-key)
- `Projects.SshKeys.create`. Params: `(projectId, bodyData)`. [Reference](https://docs.maxihost.com/reference/post-project-ssh-key)
- `Projects.SshKeys.update`. Params: `(projectId, bodyData)`. [Reference](https://docs.maxihost.com/reference/put-project-ssh-key)
- `Projects.SshKeys.delete`. Params: `(projectId, bodyData)`. [Reference](https://docs.maxihost.com/reference/delete-project-ssh-key)
- 
- `Projects.UserData.list`. Params: `(projectIdOrSlug, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-project-users-data)
- `Projects.UserData.get`. Params: `(projectIdOrSlug, userDataId, searchParams)`. [Reference]()
- `Projects.UserData.update`. Params: `(projectIdOrSlug, userDataId, searchParams)`. [Reference]()
- `Projects.UserData.create`. Params: `(projectIdOrSlug, bodyData)`. [Reference]()
- `Projects.UserData.delete`. Params: `(projectIdOrSlug, userDataId)`. [Reference]()
- 
- `Regions.list`. Params: `(searchParams)` [Reference]()
- `Regions.get`. Params: `(regionId, searchParams)`. [Reference]()
- 
- `Server.get`. Params: `(serverId, searchParams)` [Reference]()
- `Server.list`. Params: `(searchParams)` [Reference]()
- `Server.create`. Params: `(deviceId, bodyData)` [Reference]()
- `Server.update`. Params: `(deviceId, bodyData)` [Reference]()
- `Server.delete`. Params: `(deviceId)` [Reference]()
- 
- `Server.Actions.managePower`. Params: `(serverId, postData)` [Reference]()
- `Server.Actions.getReinstall`. Params: `(serverId)`. [Reference]()
- `Server.Actions.reinstall`. Params: `(serverId, bodyData)`. [Reference]()
- `Server.Actions.getRemoteAccess`. Params: `(serverId)`. [Reference]()
- 
- `Server.DeployConfig.get`. Params: `(serverId)`. [Reference]()
- `Server.DeployConfig.update`. Params: `(serverId, bodyData)`. [Reference]()
- 
- `Server.Ips.list`. Params: `(serverId, searchParams)`. [Reference]()
- 
- `Server.RemoteAccess.create`. Params: `(serverId)`. [Reference]()
- 
- `Teams.current`. Params: `(searchParams)`. [Reference]()
- `Teams.update`. Params: `(teamId, data)`. [Reference]()
- `Teams.create`. Params: `(bodyData)`. [Reference]()
- 
- `Teams.Members.list`. Params: `(searchParams)`. [Reference]()
- `Teams.Members.create`. Params: `(bodyData)`. [Reference]()
- `Teams.Members.delete`. Params: `(memberId)`. [Reference]()
- 
- `Teams.User.listTeams`. Params: `(searchParams)`. [Reference]()
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
- `Teams.current`. Params: `(searchParams)` [Reference](https://developers.maxihost.com/v2.0/reference#get-team)
- `Teams.User.listTeams`. Params: `(searchParams)` [Reference](https://developers.maxihost.com/v2.0/reference#get-user-teams)
