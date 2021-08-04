class RemoteAccess {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }

  create(serverId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post('/servers/' + serverId + '/remote_access', headers);
  }
}

module.exports = RemoteAccess;
