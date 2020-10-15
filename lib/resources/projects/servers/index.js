class Servers {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/projects';
  }

  list(projectId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(`${this.baseUrl}/${projectId}/servers`, headers);
  }

  get(projectId, serverId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      `${this.baseUrl}/${projectId}/servers/${serverId}`,
      headers
    );
  }
}

module.exports = Servers;
