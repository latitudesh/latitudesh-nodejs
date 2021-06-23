class Ips {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.Maxihost._get('/ips', this.Maxihost._headers, searchParams);
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.Ips = new Ips(Maxihost);
};
