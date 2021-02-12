class Actions {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }

  managePower(projectId, serverId, postData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(
      '/projects/' + projectId + '/servers/' + serverId + '/actions',
      headers,
      postData
    );
  }

  getReinstall(serverId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get('/servers/' + serverId + '/reinstall', headers);
  }

  reinstall(serverId, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(
      '/servers/' + serverId + '/reinstall',
      headers,
      bodyData
    );
  }

  getRemoteAccess(serverId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get('/servers/' + serverId + '/remote_access', headers);
  }
}

module.exports = Actions;
