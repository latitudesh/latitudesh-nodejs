class DeployConfig {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/servers';
  }

  get(serverId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(
      `${this.baseUrl}/${serverId}/deploy_config`,
      headers
    );
  }

  update(serverId, bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._patch(
      `${this.baseUrl}/${serverId}/deploy_config`,
      headers,
      bodyData
    );
  }
}

module.exports = DeployConfig;
