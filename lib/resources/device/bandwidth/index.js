class Bandwidth {
  constructor(Maxihost) {
    this.Maxihost = Maxihost
  }

  get(deviceId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString()
    const headers = this.Maxihost._headers
    return this.Maxihost._get('/devices/' + deviceId + '/bandwidth',
      headers, searchParams
    );
  }
}

module.exports = Bandwidth;
