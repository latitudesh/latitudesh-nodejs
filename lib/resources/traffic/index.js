const Quota = require('./quota/index');

class Traffic {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  get(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get('/traffic', headers, searchParams);
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.Traffic = new Traffic(LatitudeSh);
  LatitudeSh.prototype.Traffic.Quota = new Quota(LatitudeSh);
};
