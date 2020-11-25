class Bandwidth {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }

  get(serverId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      '/servers/' + serverId + '/bandwidth',
      headers,
      searchParams
    );
  }
}

module.exports = Bandwidth;
