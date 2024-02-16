const Usage = require('./usage/index.js');

class Billing {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/billing';
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.Billing = new Billing(LatitudeSh);
  LatitudeSh.prototype.Billing.Usage = new Usage(LatitudeSh);
};
