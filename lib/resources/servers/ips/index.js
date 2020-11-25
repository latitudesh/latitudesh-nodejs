class Ips {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }

  list(serverId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      '/servers/' + serverId + '/ips',
      headers,
      searchParams
    );
  }
}

module.exports = Ips;
