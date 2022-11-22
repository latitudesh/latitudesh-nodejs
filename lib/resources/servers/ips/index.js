class Ips {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  /**
   * @deprecated
   */
  list(serverId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(
      '/servers/' + serverId + '/ips',
      headers,
      searchParams
    );
  }
}

module.exports = Ips;
