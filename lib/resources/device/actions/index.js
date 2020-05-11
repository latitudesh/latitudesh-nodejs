class Actions {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = "/devices/";
  }

  managePower(deviceId, searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString()
    const headers = this.Maxihost._headers;
    return this.Maxihost._put(this.baseUrl + deviceId + "/actions",
      searchParams, headers
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
      bodyData, headers
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