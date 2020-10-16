class Profile {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/user/profile';
  }

  get(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString()
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers, searchParams);
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.Profile = new Profile(Maxihost);
};
