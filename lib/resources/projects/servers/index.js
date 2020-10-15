class Servers {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.Maxihost._headers = {
      ...Maxihost._headers,
      Accept: "application/vnd.maxihost.v2+json",
    };
    this.baseUrl = "/projects";
  }

  list(projectId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(`${this.baseUrl}/${projectId}/servers`, headers);
  }

  getServer(projectId, serverId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      `${this.baseUrl}/${projectId}/servers/${serverId}`,
      headers
    );
  }
}

module.exports = Servers;
