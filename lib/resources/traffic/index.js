class Traffic {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }

  get(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString();
    const headers = this.Maxihost._headers;
    return this.Maxihost._get(
      '/traffic',
      headers,
      searchParams
    );
  }
}

module.exports = (Maxihost) => {
  Maxihost.prototype.Traffic = new Traffic(Maxihost);
}
