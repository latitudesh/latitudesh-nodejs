class CustomScripts {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/servers/custom_scripts/';
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers, searchParams);
  }

  get(serverId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl + serverId, headers);
  }

  update(serverId, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._put(this.baseUrl + serverId, headers, bodyData);
  }

  create(bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(this.baseUrl, headers, bodyData);
  }

  delete(serverId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._delete(this.baseUrl + serverId, headers);
  }
}

module.exports = CustomScripts;
