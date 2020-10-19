const User = require('./user/index.js');

class Teams {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/team';
  }

  current(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString()
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers, searchParams);
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.Teams = new Teams(Maxihost);
  Maxihost.prototype.Teams.User = new User(Maxihost);
};
