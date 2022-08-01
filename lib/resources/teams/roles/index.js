"use strict";

class Roles {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = "/roles/";
  }

  list() {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers);
  }

  get() {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers);
  }

}

module.exports = Roles;
