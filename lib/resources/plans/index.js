const Bandwidth = require('./bandwidth/index.js');
class Plans {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      '/plans',
      this.LatitudeSh._headers,
      searchParams
    );
  }

  get(planId, searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      `/plans/${planId}`,
      this.LatitudeSh._headers,
      searchParams
    );
  }

  /**
   * @deprecated
   */
  addons(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      '/plans/addons',
      this.LatitudeSh._headers,
      searchParams
    );
  }

  operatingSystems(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      '/plans/operating_systems',
      this.LatitudeSh._headers,
      searchParams
    );
  }

  storage(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      '/plans/storage',
      this.LatitudeSh._headers,
      searchParams
    );
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.Plans = new Plans(LatitudeSh);
  LatitudeSh.prototype.Plans.Bandwidth = new Bandwidth(LatitudeSh);
};
