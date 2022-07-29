const Members = require('./members/index.js');
const SshKeys = require('./sshKeys/index.js');
const UserData = require('./user-data/index.js');

class Projects {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/projects';
  }

  list(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers, searchParams);
  }

  get(projectIdOrSlug, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      `${this.baseUrl}/${projectIdOrSlug}`,
      headers,
      searchParams
    );
  }

  update(projectIdOrSlug, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._patch(`${this.baseUrl}/${projectIdOrSlug}`, headers, bodyData);
  }

  create(bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(`${this.baseUrl}`, headers, bodyData);
  }

  delete(projectIdOrSlug) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._delete(`${this.baseUrl}/${projectIdOrSlug}`, headers);
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.Projects = new Projects(Maxihost);
  Maxihost.prototype.Projects.Members = new Members(Maxihost);
  Maxihost.prototype.Projects.SshKeys = new SshKeys(Maxihost);
  Maxihost.prototype.Projects.UserData = new UserData(Maxihost);
};
