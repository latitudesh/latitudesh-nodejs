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
- `Traffic.get`. Params: `(searchParams)`. [Reference]()
- `Traffic.Quota`. Params: `(searchParams)`. [Reference]()
- `Traffic.Quota.get`. Params: `(projectSlug)`. [Reference]()
- 
- `User.ApiKeys.list Params: `(searchParams)`. [Reference]()
- `User.ApiKeys.update Params: `(apiKeyId, bodyData)`. [Reference]()
- `User.ApiKeys.create Params: `(bodyData)`. [Reference]()
- `User.ApiKeys.delete Params: `(apiKeyId)`. [Reference]()
- 
- `User.Profile.get Params: `(searchParams)`. [Reference]()
- `User.Profile.update Params: `(userId, data)`. [Reference]()
- 
- `VirtualNetworks.get`. Params: `id, searchParams`. [Reference]()
- `VirtualNetworks.list`. Params: `searchParams`. [Reference]()
- `VirtualNetworks.create`. Params: `bodyData`. [Reference]()
- `VirtualNetworks.update`. Params: `id, bodyData`. [Reference]()
- `VirtualNetworks.delete`. Params: `id`. [Reference]()
- 
- `VirtualNetworks.Assignments.list`. Params: `searchParams`. [Reference]()
- `VirtualNetworks.Assignments.create`. Params: `bodyData`. [Reference]()
- `VirtualNetworks.Assignments.delete`. Params: `id`. [Reference]()
- 
- `VirtualNetworks.VpnSessions.list`. Params: `searchParams`. [Reference]()
- `VirtualNetworks.VpnSessions.refreshPassword`. Params: `searchParams`. [Reference]()
- `VirtualNetworks.VpnSessions.create`. Params: `searchParams`. [Reference]()
- `VirtualNetworks.VpnSessions.delete`. Params: `searchParams`. [Reference]()
- 

