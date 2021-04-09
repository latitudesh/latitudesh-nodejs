class DeployConfig {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/servers';
  }

  get(serverId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(`${this.baseUrl}/${serverId}/deploy_config`, headers);
  }

  update(serverId, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._patch(`${this.baseUrl}/${serverId}/deploy_config`, headers, bodyData);
  }
}

module.exports = DeployConfig;
