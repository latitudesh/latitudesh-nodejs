class SshKeys {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/user/ssh_keys/';
  }

  list(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers, searchParams);
  }

  get(sshId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl + sshId, headers, searchParams);
  }

  update(sshId, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._put(this.baseUrl + sshId, headers, bodyData);
  }

  create(bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(this.baseUrl, headers, bodyData);
  }

  delete(sshId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._delete(this.baseUrl + sshId, headers);
  }
}

module.exports = SshKeys;
