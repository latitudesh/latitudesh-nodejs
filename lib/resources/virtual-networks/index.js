const Assignments = require("./assignments/index.js");

class VirtualNetworks {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = "/virtual_networks";
  }

  get(id, searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(`${this.baseUrl}/${id}`, headers, searchParams);
  }

  list(searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers, searchParams);
  }

  update(bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._put(this.baseUrl, headers, bodyData);
  }

  create(bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(this.baseUrl, headers, bodyData);
  }

  delete(id) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._delete(`${this.baseUrl}/${id}`, headers);
  }
}

module.exports = (Maxihost) => {
  Maxihost.prototype.VirtualNetworks = new VirtualNetworks(Maxihost);
  Maxihost.prototype.VirtualNetworks.Assignments = new Assignments(Maxihost);
};
