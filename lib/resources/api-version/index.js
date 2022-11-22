class ApiVersion {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/auth';
  }

  get() {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(`${this.baseUrl}/current_version`, headers);
  }

  update(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._patch(
      `${this.baseUrl}/update_version`,
      headers,
      bodyData
    );
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.ApiVersion = new ApiVersion(LatitudeSh);
};
