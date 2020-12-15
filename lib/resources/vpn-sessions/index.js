class VpnSessions {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/vpn_sessions';
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers, searchParams);
  }

  refreshPassword(sessionId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._put(
      `${this.baseUrl}/${sessionId}/refresh_password`,
      headers
    );
  }

  create(bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(this.baseUrl, headers, bodyData);
  }

  delete(sessionId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._delete(`${this.baseUrl}/${sessionId}`, headers);
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.VpnSessions = new VpnSessions(Maxihost);
};
