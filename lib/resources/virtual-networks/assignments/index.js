class Assignments {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/virtual_networks/assignments';
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(this.baseUrl, headers, searchParams);
  }

  create(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(this.baseUrl, headers, bodyData);
  }

  delete(id) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._delete(`${this.baseUrl}/${id}`, headers);
  }
}

module.exports = Assignments;
