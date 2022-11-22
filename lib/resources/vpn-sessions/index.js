class VpnSessions {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/vpn_sessions';
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(this.baseUrl, headers, searchParams);
  }

  refreshPassword(sessionId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._put(
      `${this.baseUrl}/${sessionId}/refresh_password`,
      headers
    );
  }

  create(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(this.baseUrl, headers, bodyData);
  }

  delete(sessionId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._delete(`${this.baseUrl}/${sessionId}`, headers);
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.VpnSessions = new VpnSessions(LatitudeSh);
};
