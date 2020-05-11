class Ips {
  constructor(Maxihost) {
    this.Maxihost = Maxihost
  }

  list(deviceId, searchParams) {
    searchParams = new URLSearchParams(searchParams).toString()
    const headers = this.Maxihost._headers
    return this.Maxihost._get('/devices/' + deviceId + '/ips',
      headers, searchParams
    );
  }
}

module.exports = Ips;
