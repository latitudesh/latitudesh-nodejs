class Events {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/events';
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
  LatitudeSh.prototype.Events = new Events(LatitudeSh);
};
