class User {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/user/teams';
  }

  listTeams(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString()
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers, searchParams);
  }
}

module.exports = User;
