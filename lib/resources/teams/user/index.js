class User {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/user/teams';
  }

  listTeams() {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers);
  }
}

module.exports = User;
