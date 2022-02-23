class Bandwidth {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/plans/bandwidth';
  }

  list() {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers);
  }

  update(bodyData) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._post(this.baseUrl, headers, bodyData);
  }
}

module.exports = Bandwidth;
