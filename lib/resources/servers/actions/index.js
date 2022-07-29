class Actions {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }

  managePower(serverId, postData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(
      '/servers/' + serverId + '/actions',
      headers,
      postData
    );
  }

  /**
   * @deprecated
   */
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

  /**
   * @deprecated
   */
  getRemoteAccess(serverId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get('/servers/' + serverId + '/remote_access', headers);
  }
}

module.exports = Actions;
