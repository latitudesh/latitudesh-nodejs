const Assignments = require('./assignments/index.js');

class VirtualNetworks {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/virtual_networks';
  }

  get(id, searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(`${this.baseUrl}/${id}`, headers, searchParams);
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(this.baseUrl, headers, searchParams);
  }

  update(id, bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._patch(`${this.baseUrl}/${id}`, headers, bodyData);
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

module.exports = LatitudeSh => {
  LatitudeSh.prototype.VirtualNetworks = new VirtualNetworks(LatitudeSh);
  LatitudeSh.prototype.VirtualNetworks.Assignments = new Assignments(
    LatitudeSh
  );
};
