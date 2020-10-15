const User = require('./user/index.js');

class Teams {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/team';
  }

  current() {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers);
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.Teams = new Teams(Maxihost);
  Maxihost.prototype.Teams.User = new User(Maxihost);
};
