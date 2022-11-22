class Bandwidth {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/plans/bandwidth';
  }

  list() {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(this.baseUrl, headers);
  }

  update(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(this.baseUrl, headers, bodyData);
  }
}

module.exports = Bandwidth;
