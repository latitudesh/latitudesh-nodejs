const Members = require('./members/index.js');
const SshKeys = require('./sshKeys/index.js');
const UserData = require('./user-data/index.js');

class Projects {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
    this.baseUrl = '/projects';
  }

  list(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(this.baseUrl, headers, searchParams);
  }

  get(projectIdOrSlug, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._get(
      `${this.baseUrl}/${projectIdOrSlug}`,
      headers,
      searchParams
    );
  }

  update(projectIdOrSlug, bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._patch(
      `${this.baseUrl}/${projectIdOrSlug}`,
      headers,
      bodyData
    );
  }

  create(bodyData) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._post(`${this.baseUrl}`, headers, bodyData);
  }

  delete(projectIdOrSlug) {
    const headers = this.LatitudeSh._headers;
    return this.LatitudeSh._delete(
      `${this.baseUrl}/${projectIdOrSlug}`,
      headers
    );
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.Projects = new Projects(LatitudeSh);
  LatitudeSh.prototype.Projects.Members = new Members(LatitudeSh);
  LatitudeSh.prototype.Projects.SshKeys = new SshKeys(LatitudeSh);
  LatitudeSh.prototype.Projects.UserData = new UserData(LatitudeSh);
};
