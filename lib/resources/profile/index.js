class Profile {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/user/profile';
  }

  get() {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers);
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.Profile = new Profile(Maxihost);
};
