class Regions {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/regions';
  }

  list(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(this.baseUrl, headers, searchParams);
  }

  get(regionId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(
      `${this.baseUrl}/${regionId}`,
      headers,
      searchParams
    );
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.Regions = new Regions(LatitudeSh);
};
