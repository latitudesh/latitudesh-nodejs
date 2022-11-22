const User = require('./user/index.js');
const Members = require('./members/index.js');
const Roles = require('./roles/index.js');

class Teams {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/team';
  }

  current(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(this.baseUrl, headers, searchParams);
  }

  update(teamId, data) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._patch(`${this.baseUrl}/${teamId}`, headers, data);
  }

  create(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(this.baseUrl, headers, bodyData);
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.Teams = new Teams(LatitudeSh);
  LatitudeSh.prototype.Teams.User = new User(LatitudeSh);
  LatitudeSh.prototype.Teams.Members = new Members(LatitudeSh);
  LatitudeSh.prototype.Teams.Roles = new Roles(LatitudeSh);
};
