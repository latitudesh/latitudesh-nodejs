# @latitudesh/latitudesh-nodejs

Nodejs Package to use Latitude.sh API. Check our [API documentation](https://docs.latitude.sh/reference)

# Installation

`npm install @latitudesh/latitudesh-nodejs`

# Usage

```javascript

const latitudeSh = require('@latitudesh/latitudesh-nodejs');
latitudeShApi = new latitudeSh(<APITOKEN>);

// Async Await

const profile = (async () => {
  await latitudeShApi.Profile.get()
})

// Promise then

latitudeShApi.Profile.get().then((response) => {
  // success
}, (response) => {
  // failure
})

```

# Available API Methods

- `ApiVersion.get` Params: `()`. [Reference](https://docs.latitude.sh/reference/get-current-version)
- `ApiVersion.update` Params: `(bodyData)`. [Reference](https://docs.latitude.sh/reference/update-current-version)

- `Account.Regions.list`. Params: `(searchParams)`. **_Deprecated_**

- `Ips.get`. Params: `(id, searchParams)`. [Reference](https://docs.latitude.sh/reference/get-ip)
- `Ips.list`. Params: `(searchParams)`. [Reference](https://docs.latitude.sh/reference/get-ips)

- `Plans.Bandwidth.list`. Params: `()`. [Reference](https://docs.latitude.sh/reference/get-plans-bandwidth)
- `Plans.Bandwidth.update`. Params: `(bodyData)`. [Reference](https://docs.latitude.sh/reference/update-plans-bandwidth)

- `Plans.get`. Params: `(planId, searchParams)`. [Reference](https://docs.latitude.sh/reference/get-plan)
- `Plans.list`. Params: `(searchParams)`. [Reference](https://docs.latitude.sh/reference/get-plans)
- `Plans.operatingSystems`. Params: `(searchParams)`. [Reference](https://docs.latitude.sh/reference/get-plans-operating-system)

- `Projects.Members.list`. Params: `(projectIdOrSlug, searchParams)`. [Reference](https://docs.latitude.sh/reference/get-team-members)

- `Projects.SshKeys.create`. Params: `(projectIdOrSlug, bodyData)`. [Reference](https://docs.latitude.sh/reference/post-project-ssh-key)
- `Projects.SshKeys.delete`. Params: `(projectIdOrSlug, sshKeyId)`. [Reference](https://docs.latitude.sh/reference/delete-project-ssh-key)
- `Projects.SshKeys.get`. Params: `(projectIdOrSlug, sshKeyId, searchParams)`. [Reference](https://docs.latitude.sh/reference/get-project-ssh-key)
- `Projects.SshKeys.list`. Params: `(projectIdOrSlug, searchParams)`. [Reference](https://docs.latitude.sh/reference/get-project-ssh-keys)
- `Projects.SshKeys.update`. Params: `(projectIdOrSlug, sskKeyId, bodyData)`. [Reference](https://docs.latitude.sh/reference/put-project-ssh-key)

- `Projects.UserData.create`. Params: `(projectIdOrSlug, bodyData)`. [Reference](https://docs.latitude.sh/reference/post-project-user-data)
- `Projects.UserData.delete`. Params: `(projectIdOrSlug, userDataId)`. [Reference](https://docs.latitude.sh/reference/delete-project-user-data)
- `Projects.UserData.get`. Params: `(projectIdOrSlug, userDataId, searchParams)`. [Reference](https://docs.latitude.sh/reference/get-project-user-data)
- `Projects.UserData.list`. Params: `(projectIdOrSlug, searchParams)`. [Reference](https://docs.latitude.sh/reference/get-project-users-data)
- `Projects.UserData.update`. Params: `(projectIdOrSlug, userDataId, searchParams)`. [Reference](https://docs.latitude.sh/reference/put-project-user-data)

- `Projects.create`. Params: `(bodyData)`. [Reference](https://docs.latitude.sh/reference/create-project)
- `Projects.delete`. Params: `(projectIdOrSlug)`. [Reference](https://docs.latitude.sh/reference/delete-project)
- `Projects.get`. Params: `(projectIdOrSlug, searchParams)`. [Reference](https://docs.latitude.sh/reference/get-project)
- `Projects.list`. Params: `(searchParams)` [Reference](https://docs.latitude.sh/reference/get-projects)
- `Projects.update`. Params: `(projectIdOrSlug, bodyData)`. [Reference](https://docs.latitude.sh/reference/update-project)

- `Regions.get`. Params: `(regionId, searchParams)`. [Reference](https://docs.latitude.sh/reference/get-region)
- `Regions.list`. Params: `(searchParams)` [Reference](https://docs.latitude.sh/reference/get-regions)

- `Server.Actions.getReinstall`. Params: `(serverId)`. **_Deprecated_**
- `Server.Actions.getRemoteAccess`. Params: `(serverId)`. **_Deprecated_**
- `Server.Actions.managePower`. Params: `(serverId, postData)` [Reference](https://docs.latitude.sh/reference/create-server-action)
- `Server.Actions.reinstall`. Params: `(serverId, bodyData)`. [Reference](https://docs.latitude.sh/reference/create-server-reinstall)

- `Server.DeployConfig.get`. Params: `(serverId)`. [Reference](https://docs.latitude.sh/reference/get-server-deploy-config)
- `Server.DeployConfig.update`. Params: `(serverId, bodyData)`. [Reference](https://docs.latitude.sh/reference/update-server-deploy-config)

- `Server.Ips.list`. Params: `(serverId, searchParams)`. **_Deprecated_**
- `Server.RemoteAccess.create`. Params: `(serverId)`. [Reference](https://docs.latitude.sh/reference/create-ipmi-session)
- `Server.create`. Params: `(bodyData)` [Reference](https://docs.latitude.sh/reference/create-server)
- `Server.delete`. Params: `(deviceId)` [Reference](https://docs.latitude.sh/reference/destroy-server)
- `Server.get`. Params: `(deviceId, searchParams)` [Reference](https://docs.latitude.sh/reference/get-server)
- `Server.list`. Params: `(searchParams)` [Reference](https://docs.latitude.sh/reference/get-servers)
- `Server.update`. Params: `(deviceId, bodyData)` [Reference](https://docs.latitude.sh/reference/update-server)

- `Server.OutOfBand.create`. Params: `(serverId, bodyData)` [Reference](https://docs.latitude.sh/reference/create-server-out-of-band)

- `Server.RescueMode.enter`. Params: `(serverId)` [Reference](https://docs.latitude.sh/reference/rescue-mode)
- `Server.RescueMode.exit`. Params: `(serverId)`. [Reference](https://docs.latitude.sh/reference/exit-rescue-mode)

- `Teams.Members.create`. Params: `(bodyData)`. [Reference](https://docs.latitude.sh/reference/post-team-members)
- `Teams.Members.delete`. Params: `(memberId)`. [Reference](https://docs.latitude.sh/reference/destroy-team-member)
- `Teams.Members.list`. Params: `(searchParams)`. [Reference](https://docs.latitude.sh/reference/get-team-members)

- `Teams.User.listTeams`. Params: `(searchParams)`. [Reference](https://docs.latitude.sh/reference/get-user-teams)

- `Teams.Roles.get`. Params: `(id)`. [Reference](https://docs.latitude.sh/reference/get-role-id)
- `Teams.Roles.list`. Params: `()`. [Reference](https://docs.latitude.sh/reference/get-roles)

- `Teams.create`. Params: `(bodyData)`. [Reference](https://docs.latitude.sh/reference/post-team)
- `Teams.current`. Params: `(searchParams)`. [Reference](https://docs.latitude.sh/reference/get-team)
- `Teams.update`. Params: `(teamId, data)`. [Reference](https://docs.latitude.sh/reference/patch-current-team)

- `Traffic.Quota.get`. Params: `(projectSlug)`. [Reference](https://docs.latitude.sh/reference/get-traffic-quota)
- `Traffic.get`. Params: `(searchParams)`. [Reference](https://docs.latitude.sh/reference/get-traffic-consumption)

- `User.ApiKeys.create Params: `(bodyData)`. [Reference](https://docs.latitude.sh/reference/post-api-key)
- `User.ApiKeys.delete Params: `(apiKeyId)`. [Reference](https://docs.latitude.sh/reference/delete-api-key)
- `User.ApiKeys.list Params: `(searchParams)`. [Reference](https://docs.latitude.sh/reference/get-api-keys)
- `User.ApiKeys.update Params: `(apiKeyId, bodyData)`. [Reference](https://docs.latitude.sh/reference/update-api-key)

- `User.Profile.get Params: `(searchParams)`. [Reference](https://docs.latitude.sh/reference/get-user-profile)
- `User.Profile.update Params: `(userId, data)`. [Reference](https://docs.latitude.sh/reference/patch-user-profile)

- `VirtualNetworks.Assignments.create`. Params: `(bodyData)`. [Reference](https://docs.latitude.sh/reference/assign-server-virtual-network)
- `VirtualNetworks.Assignments.delete`. Params: `(id)`. [Reference](https://docs.latitude.sh/reference/delete-virtual-networks-assignments)
- `VirtualNetworks.Assignments.list`. Params: `(searchParams)`. [Reference](https://docs.latitude.sh/reference/get-virtual-networks-assignments)

- `VirtualNetworks.create`. Params: `(bodyData)`. [Reference](https://docs.latitude.sh/reference/create-virtual-network)
- `VirtualNetworks.delete`. Params: `(id)`. [Reference](https://docs.latitude.sh/reference/destroy-virtual-network)
- `VirtualNetworks.get`. Params: `(id, searchParams)`. [Reference](https://docs.latitude.sh/reference/get-virtual-network)
- `VirtualNetworks.list`. Params: `(searchParams)`. [Reference](https://docs.latitude.sh/reference/get-virtual-networks)
- `VirtualNetworks.update`. Params: `(id, bodyData)`. [Reference](https://docs.latitude.sh/reference/update-virtual-network)

- `VpnSessions.create`. Params: `(bodyData)`. [Reference](https://docs.latitude.sh/reference/post-vpn-session)
- `VpnSessions.delete`. Params: `(sessionId)`. [Reference](https://docs.latitude.sh/reference/delete-vpn-session)
- `VpnSessions.list`. Params: `(searchParams)`. [Reference](https://docs.latitude.sh/reference/get-vpn-sessions)
- `VpnSessions.refreshPassword`. Params: `(sessionId)`. [Reference](https://docs.latitude.sh/reference/put-vpn-session)
