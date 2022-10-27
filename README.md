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

- `ApiVersion.get` Params: `()`. [Reference](https://docs.maxihost.com/reference/get-current-version)
- `ApiVersion.update` Params: `(bodyData)`. [Reference](https://docs.maxihost.com/reference/update-current-version)


- `Account.Regions.list`. Params: `(searchParams)`. ***Deprecated***


- `Ips.get`. Params: `(id, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-ip)
- `Ips.list`. Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-ips)


- `Plans.Bandwidth.list`. Params: `()`. [Reference](https://docs.maxihost.com/reference/get-plans-bandwidth)
- `Plans.Bandwidth.update`. Params: `(bodyData)`. [Reference](https://docs.maxihost.com/reference/update-plans-bandwidth)


- `Plans.get`. Params: `(planId, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-plan)
- `Plans.list`. Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-plans)
- `Plans.operatingSystems`. Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-plans-operating-system)


- `Projects.Members.list`. Params: `(projectIdOrSlug, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-team-members)


- `Projects.SshKeys.create`. Params: `(projectIdOrSlug, bodyData)`. [Reference](https://docs.maxihost.com/reference/post-project-ssh-key)
- `Projects.SshKeys.delete`. Params: `(projectIdOrSlug, sshKeyId)`. [Reference](https://docs.maxihost.com/reference/delete-project-ssh-key)
- `Projects.SshKeys.get`. Params: `(projectIdOrSlug, sshKeyId, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-project-ssh-key)
- `Projects.SshKeys.list`. Params: `(projectIdOrSlug, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-project-ssh-keys)
- `Projects.SshKeys.update`. Params: `(projectIdOrSlug, sskKeyId, bodyData)`. [Reference](https://docs.maxihost.com/reference/put-project-ssh-key)


- `Projects.UserData.create`. Params: `(projectIdOrSlug, bodyData)`. [Reference](https://docs.maxihost.com/reference/post-project-user-data)
- `Projects.UserData.delete`. Params: `(projectIdOrSlug, userDataId)`. [Reference](https://docs.maxihost.com/reference/delete-project-user-data)
- `Projects.UserData.get`. Params: `(projectIdOrSlug, userDataId, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-project-user-data)
- `Projects.UserData.list`. Params: `(projectIdOrSlug, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-project-users-data)
- `Projects.UserData.update`. Params: `(projectIdOrSlug, userDataId, searchParams)`. [Reference](https://docs.maxihost.com/reference/put-project-user-data)


- `Projects.create`. Params: `(bodyData)`. [Reference](https://docs.maxihost.com/reference/create-project)
- `Projects.delete`. Params: `(projectIdOrSlug)`. [Reference](https://docs.maxihost.com/reference/delete-project)
- `Projects.get`. Params: `(projectIdOrSlug, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-project)
- `Projects.list`. Params: `(searchParams)` [Reference](https://docs.maxihost.com/reference/get-projects)
- `Projects.update`. Params: `(projectIdOrSlug, bodyData)`. [Reference](https://docs.maxihost.com/reference/update-project)


- `Regions.get`. Params: `(regionId, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-region)
- `Regions.list`. Params: `(searchParams)` [Reference](https://docs.maxihost.com/reference/get-regions)


- `Server.Actions.getReinstall`. Params: `(serverId)`. ***Deprecated***
- `Server.Actions.getRemoteAccess`. Params: `(serverId)`. ***Deprecated***
- `Server.Actions.managePower`. Params: `(serverId, postData)` [Reference](https://docs.maxihost.com/reference/create-server-action)
- `Server.Actions.reinstall`. Params: `(serverId, bodyData)`. [Reference](https://docs.maxihost.com/reference/create-server-reinstall)


- `Server.DeployConfig.get`. Params: `(serverId)`. [Reference](https://docs.maxihost.com/reference/get-server-deploy-config)
- `Server.DeployConfig.update`. Params: `(serverId, bodyData)`. [Reference](https://docs.maxihost.com/reference/update-server-deploy-config)


- `Server.Ips.list`. Params: `(serverId, searchParams)`. ***Deprecated***
- `Server.RemoteAccess.create`. Params: `(serverId)`. [Reference](https://docs.maxihost.com/reference/create-ipmi-session)
- `Server.create`. Params: `(bodyData)` [Reference](https://docs.maxihost.com/reference/create-server)
- `Server.delete`. Params: `(deviceId)` [Reference](https://docs.maxihost.com/reference/destroy-server)
- `Server.get`. Params: `(deviceId, searchParams)` [Reference](https://docs.maxihost.com/reference/get-server)
- `Server.list`. Params: `(searchParams)` [Reference](https://docs.maxihost.com/reference/get-servers)
- `Server.update`. Params: `(deviceId, bodyData)` [Reference](https://docs.maxihost.com/reference/update-server)

- `Server.RescueMode.enter`. Params: `(serverId)` [Reference](https://docs.maxihost.com/reference/rescue-mode)
- `Server.RescueMode.exit`. Params: `(serverId)`. [Reference](https://docs.maxihost.com/reference/exit-rescue-mode)

- `Teams.Members.create`. Params: `(bodyData)`. [Reference](https://docs.maxihost.com/reference/post-team-members)
- `Teams.Members.delete`. Params: `(memberId)`. [Reference](https://docs.maxihost.com/reference/destroy-team-member)
- `Teams.Members.list`. Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-team-members)


- `Teams.User.listTeams`. Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-user-teams)

- `Teams.Roles.get`. Params: `(id)`. [Reference](https://docs.maxihost.com/reference/get-role-id)
- `Teams.Roles.list`. Params: `()`. [Reference](https://docs.maxihost.com/reference/get-roles)

- `Teams.create`. Params: `(bodyData)`. [Reference](https://docs.maxihost.com/reference/post-team)
- `Teams.current`. Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-team)
- `Teams.update`. Params: `(teamId, data)`. [Reference](https://docs.maxihost.com/reference/patch-current-team)


- `Traffic.Quota.get`. Params: `(projectSlug)`. [Reference](https://docs.maxihost.com/reference/get-traffic-quota)
- `Traffic.get`. Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-traffic-consumption)


- `User.ApiKeys.create Params: `(bodyData)`. [Reference](https://docs.maxihost.com/reference/post-api-key)
- `User.ApiKeys.delete Params: `(apiKeyId)`. [Reference](https://docs.maxihost.com/reference/delete-api-key)
- `User.ApiKeys.list Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-api-keys)
- `User.ApiKeys.update Params: `(apiKeyId, bodyData)`. [Reference](https://docs.maxihost.com/reference/update-api-key)


- `User.Profile.get Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-user-profile)
- `User.Profile.update Params: `(userId, data)`. [Reference](https://docs.maxihost.com/reference/patch-user-profile)


- `VirtualNetworks.Assignments.create`. Params: `(bodyData)`. [Reference](https://docs.maxihost.com/reference/assign-server-virtual-network)
- `VirtualNetworks.Assignments.delete`. Params: `(id)`. [Reference](https://docs.maxihost.com/reference/delete-virtual-networks-assignments)
- `VirtualNetworks.Assignments.list`. Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-virtual-networks-assignments)


- `VirtualNetworks.create`. Params: `(bodyData)`. [Reference](https://docs.maxihost.com/reference/create-virtual-network)
- `VirtualNetworks.delete`. Params: `(id)`. [Reference](https://docs.maxihost.com/reference/destroy-virtual-network)
- `VirtualNetworks.get`. Params: `(id, searchParams)`. [Reference](https://docs.maxihost.com/reference/get-virtual-network)
- `VirtualNetworks.list`. Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-virtual-networks)
- `VirtualNetworks.update`. Params: `(id, bodyData)`. [Reference](https://docs.maxihost.com/reference/update-virtual-network)


- `VpnSessions.create`. Params: `(bodyData)`. [Reference](https://docs.maxihost.com/reference/post-vpn-session)
- `VpnSessions.delete`. Params: `(sessionId)`. [Reference](https://docs.maxihost.com/reference/delete-vpn-session)
- `VpnSessions.list`. Params: `(searchParams)`. [Reference](https://docs.maxihost.com/reference/get-vpn-sessions)
- `VpnSessions.refreshPassword`. Params: `(sessionId)`. [Reference](https://docs.maxihost.com/reference/put-vpn-session)


