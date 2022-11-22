class SshKeys {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/projects';
  }

  list(projectIdOrSlug, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(
      `${this.baseUrl}/${projectIdOrSlug}/ssh_keys`,
      headers,
      searchParams
    );
  }

  get(projectIdOrSlug, sshKeyId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(
      `${this.baseUrl}/${projectIdOrSlug}/ssh_keys/${sshKeyId}`,
      headers,
      searchParams
    );
  }

  create(projectIdOrSlug, bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(
      `${this.baseUrl}/${projectIdOrSlug}/ssh_keys`,
      headers,
      bodyData
    );
  }

  update(projectIdOrSlug, sshKeyId, bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._patch(
      `${this.baseUrl}/${projectIdOrSlug}/ssh_keys/${sshKeyId}`,
      headers,
      bodyData
    );
  }

  delete(projectIdOrSlug, sshKeyId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._delete(
      `${this.baseUrl}/${projectIdOrSlug}/ssh_keys/${sshKeyId}`,
      headers
    );
  }
}

module.exports = SshKeys;
