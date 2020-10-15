const Members = require("./members/index.js");
const Servers = require("./servers/index.js");
const Ips = require("./ips/index.js");

class Projects {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = "/projects";
  }

  list() {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers);
  }

  get(projectId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(`${this.baseUrl}/${projectId}`, headers);
  }
}

module.exports = (Maxihost) => {
  Maxihost.prototype.Projects = new Projects(Maxihost);
  Maxihost.prototype.Projects.Members = new Members(Maxihost);
  Maxihost.prototype.Projects.Servers = new Servers(Maxihost);
  Maxihost.prototype.Projects.Ips = new Ips(Maxihost);
};
