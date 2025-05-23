class SshKeys {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  list(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(`/ssh_keys`, headers, searchParams);
  }
  get(sshKeyId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(`/ssh_keys/${sshKeyId}`, headers, searchParams);
  }

  create(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(`/ssh_keys`, headers, bodyData);
  }

  update(sshKeyId, bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._patch(`/ssh_keys/${sshKeyId}`, headers, bodyData);
  }

  delete(sshKeyId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._delete(`/ssh_keys/${sshKeyId}`, headers);
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.SshKeys = new SshKeys(LatitudeSh);
};
