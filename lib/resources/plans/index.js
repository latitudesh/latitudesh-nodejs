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

  addons(searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString()
    return this.Maxihost._get("/addons",
      this.Maxihost._headers,
      searchParams);
  }

  operatingSystems(searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString()
    return this.Maxihost._get("/operating-systems",
      this.Maxihost._headers,
      searchParams);
  }
}

module.exports = (Maxihost) => {
  Maxihost.prototype.Plans = new Plans(Maxihost);
}