class RescueMode {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  enter(serverId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(
      '/servers/' + serverId + '/rescue_mode',
      headers
    );
  }
  exit(serverId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(
      '/servers/' + serverId + '/exit_rescue_mode',
      headers
    );
  }
}

module.exports = RescueMode;
