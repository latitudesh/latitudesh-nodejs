class Quota {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/traffic';
  }

  get(projectSlug) {
    const searchParams = new URLSearchParams({
      ["filter[project]"]: projectSlug
    }).toString()
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(`${this.baseUrl}/quota`, headers, searchParams);
  }
}

module.exports = Quota;
