"use strict";

class Roles {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = "/roles";
  }

  list() {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers);
  }

  get(id) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(`${this.baseUrl}/${id}`, headers);
  }

}

module.exports = Roles;
