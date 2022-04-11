const Bandwidth = require('./bandwidth/index.js');
class Plans {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }

  list(searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString()
    return this.Maxihost._get("/plans",
      this.Maxihost._headers,
      searchParams);
  }

  get(planId, searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString()
    return this.Maxihost._get(`/plans/${planId}`,
      this.Maxihost._headers,
      searchParams);
  }

  addons(searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString()
    return this.Maxihost._get("/plans/addons",
      this.Maxihost._headers,
      searchParams);
  }

  operatingSystems(searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString()
    return this.Maxihost._get("/plans/operating_systems",
      this.Maxihost._headers,
      searchParams);
  }
}

module.exports = (Maxihost) => {
  Maxihost.prototype.Plans = new Plans(Maxihost);
  Maxihost.prototype.Plans.Bandwidth = new Bandwidth(Maxihost);
}
