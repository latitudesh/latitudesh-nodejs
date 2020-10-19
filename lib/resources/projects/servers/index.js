class Servers {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/projects';
  }

  list(projectId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString()
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(`${this.baseUrl}/${projectId}/servers`, headers, searchParams);
  }

  get(projectId, serverId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString()
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      `${this.baseUrl}/${projectId}/servers/${serverId}`,
      headers,
      searchParams
    );
  }
}

module.exports = Servers;
