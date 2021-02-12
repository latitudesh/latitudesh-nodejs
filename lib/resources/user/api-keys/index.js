class ApiKeys {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/auth/api_keys/';
  }

  list(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers, searchParams);
  }

  update(apiKeyId, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._put(this.baseUrl + apiKeyId, headers, bodyData);
  }

  create(bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(this.baseUrl, headers, bodyData);
  }

  delete(apiKeyId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._delete(this.baseUrl + apiKeyId, headers);
  }
}

module.exports = ApiKeys;
