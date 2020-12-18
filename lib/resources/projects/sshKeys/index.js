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
}

module.exports = SshKeys;
