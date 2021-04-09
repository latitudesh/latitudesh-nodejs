class SshKeys {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/projects';
  }

  list(projectId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      `${this.baseUrl}/${projectId}/ssh_keys`,
      headers,
      searchParams
    );
  }

  get(projectId, sshKeyId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      `${this.baseUrl}/${projectId}/ssh_keys/${sshKeyId}`,
      headers,
      searchParams
    );
  }

  create(projectId, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(`${this.baseUrl}/${projectId}/ssh_keys`, headers, bodyData);
  }

  update(projectId, sshKeyId, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._patch(`${this.baseUrl}/${projectId}/ssh_keys/${sshKeyId}`, headers, bodyData);
  }

  delete(projectId, sshKeyId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._delete(`${this.baseUrl}/${projectId}/ssh_keys/${sshKeyId}`, headers);
  }
}

module.exports = SshKeys;
