const Usage = require('./usage/index.js');

class Billing {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/billing/usage';
  }

  get(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(`${this.baseUrl}`, headers, searchParams);
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.Billing = new Billing(LatitudeSh);
  LatitudeSh.prototype.Billing.Usage = new Usage(LatitudeSh);
};
