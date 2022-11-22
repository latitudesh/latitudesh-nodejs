class Ips {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/ips';
  }

  get(id, searchParams = '') {
    const headers = this.LatitudeSh._headers;
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(`${this.baseUrl}/${id}`, headers, searchParams);
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      this.baseUrl,
      this.LatitudeSh._headers,
      searchParams
    );
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.Ips = new Ips(LatitudeSh);
};
