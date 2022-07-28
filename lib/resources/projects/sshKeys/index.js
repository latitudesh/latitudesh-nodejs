class SshKeys {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/projects';
  }

  list(projectIdOrSlug, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      `${this.baseUrl}/${projectIdOrSlug}/ssh_keys`,
      headers,
      searchParams
    );
  }

  get(projectIdOrSlug, sshKeyId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      `${this.baseUrl}/${projectIdOrSlug}/ssh_keys/${sshKeyId}`,
      headers,
      searchParams
    );
  }

  create(projectIdOrSlug, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(`${this.baseUrl}/${projectIdOrSlug}/ssh_keys`, headers, bodyData);
  }

  update(projectIdOrSlug, sshKeyId, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._patch(`${this.baseUrl}/${projectIdOrSlug}/ssh_keys/${sshKeyId}`, headers, bodyData);
  }

  delete(projectIdOrSlug, sshKeyId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._delete(`${this.baseUrl}/${projectIdOrSlug}/ssh_keys/${sshKeyId}`, headers);
  }
}

module.exports = SshKeys;
