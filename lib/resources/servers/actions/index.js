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
  scheduleDeletion(serverId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(
      '/servers/' + serverId + '/schedule_deletion',
      headers
    );
  }
  unscheduleDeletion(serverId) {
    const headers = this.LatitudeSh._headers;
    this.LatitudeSh._delete(
      '/servers/' + serverId + '/schedule_deletion',
      headers
    );
    return;
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
