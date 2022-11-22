class Actions {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  managePower(serverId, postData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(
      '/servers/' + serverId + '/actions',
      headers,
      postData
    );
  }

  /**
   * @deprecated
   */
  getReinstall(serverId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get('/servers/' + serverId + '/reinstall', headers);
  }

  reinstall(serverId, bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(
      '/servers/' + serverId + '/reinstall',
      headers,
      bodyData
    );
  }

  /**
   * @deprecated
   */
  getRemoteAccess(serverId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(
      '/servers/' + serverId + '/remote_access',
      headers
    );
  }
}

module.exports = Actions;
