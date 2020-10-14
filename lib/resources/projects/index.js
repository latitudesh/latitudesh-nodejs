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
};
