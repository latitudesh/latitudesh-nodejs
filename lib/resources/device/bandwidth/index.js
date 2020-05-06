class Bandwidth {
  constructor(Maxihost) {
    this.Maxihost = Maxihost
  }

  get(device_id) {
    return this.Maxihost._get('/devices/' + device_id + '/bandwidth', {
      headers: this.Maxihost._headers
    });
  }
}

module.exports = Bandwidth;