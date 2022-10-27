class RescueMode {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }

  enter(serverId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(
      '/servers/' + serverId + '/rescue_mode',
      headers
    );
  }
  exit(serverId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(
      '/servers/' + serverId + '/exit_rescue_mode',
      headers
    );
  }
}

module.exports = RescueMode;
