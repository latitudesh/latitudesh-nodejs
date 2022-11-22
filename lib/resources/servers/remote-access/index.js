class RemoteAccess {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  create(serverId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(
      '/servers/' + serverId + '/remote_access',
      headers
    );
  }
}

module.exports = RemoteAccess;
