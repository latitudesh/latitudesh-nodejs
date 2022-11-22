class Profile {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/user/profile';
  }

  get(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(this.baseUrl, headers, searchParams);
  }

  update(userId, data) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._patch(`${this.baseUrl}/${userId}`, headers, data);
  }
}

module.exports = Profile;
