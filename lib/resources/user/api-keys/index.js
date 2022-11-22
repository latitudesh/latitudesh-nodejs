class ApiKeys {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/auth/api_keys/';
  }

  list(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(this.baseUrl, headers, searchParams);
  }

  update(apiKeyId, bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._put(this.baseUrl + apiKeyId, headers, bodyData);
  }

  create(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(this.baseUrl, headers, bodyData);
  }

  delete(apiKeyId) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._delete(this.baseUrl + apiKeyId, headers);
  }
}

module.exports = ApiKeys;
