class Profile {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/user/profile';
  }

  get(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers, searchParams);
  }

  update(userId, data) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._patch(`${this.baseUrl}/${userId}`, headers, data);
  }
}

module.exports = Profile;
