class Regions {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
    this.baseUrl = '/regions';
  }

  list() {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(this.baseUrl, headers);
  }

  get(regionId) {
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(`${this.baseUrl}/${regionId}`, headers);
  }
}

module.exports = Maxihost => {
  Maxihost.prototype.Regions = new Regions(Maxihost);
};
