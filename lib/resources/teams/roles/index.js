'use strict';

class Roles {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/roles';
  }

  list() {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(this.baseUrl, headers);
  }

  get(id) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(`${this.baseUrl}/${id}`, headers);
  }
}

module.exports = Roles;
