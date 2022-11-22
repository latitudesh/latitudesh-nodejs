class Quota {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/traffic';
  }

  get(projectSlug) {
    const searchParams = new URLSearchParams({
      ['filter[project]']: projectSlug,
    }).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(`${this.baseUrl}/quota`, headers, searchParams);
  }
}

module.exports = Quota;
