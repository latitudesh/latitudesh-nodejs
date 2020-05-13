class Actions {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = "/devices/";
  }

  managePower(deviceId, putData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._put(this.baseUrl + deviceId + "/actions",
      headers, putData
    );
  }

  getReinstall(deviceId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl + deviceId + "/reinstall",
      headers
    );
  }

  reinstall(deviceId, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(this.baseUrl + deviceId + "/reinstall",
      headers, bodyData
    );
  }

  getRemoteAccess(deviceId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl + deviceId + "/remote_access",
      headers
    );
  }
}

module.exports = Actions;