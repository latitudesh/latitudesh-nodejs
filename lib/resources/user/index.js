const Profile = require('./profile/index.js');
const ApiKeys = require('./api-keys/index.js');

class User {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.User = new User(LatitudeSh);
  LatitudeSh.prototype.User.Profile = new Profile(LatitudeSh);
  LatitudeSh.prototype.User.ApiKeys = new ApiKeys(LatitudeSh);
};
