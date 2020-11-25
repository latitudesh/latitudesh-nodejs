class Actions {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/servers/';
  }

  managePower(serverId, putData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._put(
      this.baseUrl + serverId + '/actions',
      headers,
      putData
    );
  }

  getReinstall(serverId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl + serverId + '/reinstall', headers);
  }

  reinstall(serverId, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(
      this.baseUrl + serverId + '/reinstall',
      headers,
      bodyData
    );
  }

  getRemoteAccess(serverId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      this.baseUrl + serverId + '/remote_access',
      headers
    );
  }
}

module.exports = Actions;
