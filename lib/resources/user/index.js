const SshKeys = require('./ssh-keys/index.js');
const Profile = require('./profile/index.js');

class User {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.User = new User(Maxihost);
  Maxihost.prototype.User.Profile = new Profile(Maxihost);
  Maxihost.prototype.User.SshKeys = new SshKeys(Maxihost);
};
