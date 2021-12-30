const Members = require('./members/index.js');
const SshKeys = require('./sshKeys/index.js');
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

  get(projectId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      `${this.baseUrl}/${projectId}`,
      headers,
      searchParams
    );
  }

  update(projectId, bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._patch(`${this.baseUrl}/${projectId}`, headers, bodyData);
  }

  create(bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(`${this.baseUrl}`, headers, bodyData);
  }

  delete(idOrSlug) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._delete(`${this.baseUrl}/projects/${idOrSlug}`, headers);
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.Projects = new Projects(Maxihost);
  Maxihost.prototype.Projects.Members = new Members(Maxihost);
  Maxihost.prototype.Projects.SshKeys = new SshKeys(Maxihost);
};
