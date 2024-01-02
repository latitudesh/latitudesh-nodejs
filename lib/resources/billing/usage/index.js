class Usage {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/billing/usage';
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

module.exports = Usage;