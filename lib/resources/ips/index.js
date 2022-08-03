class Ips {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = "/ips";
  }

  get(id, searchParams = '') {
    const headers = this.Maxihost._headers;
    searchParams = new URLSearchParams(searchParams).toString();
    return this.Maxihost._get(`${this.baseUrl}/${id}`, headers, searchParams);
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.Maxihost._get(this.baseUrl, this.Maxihost._headers, searchParams);
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.Ips = new Ips(Maxihost);
};
