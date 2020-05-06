const Bandwidth = require('./bandwidth/index.js');

class Device {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }
  
  get(device_id) {
    return this.Maxihost._get('/devices/' + device_id, { 
      headers: this.Maxihost._headers
    });
  }
  
  list(limit = 0) {
    return this.Maxihost._get('/devices?limit=' + limit, {
      headers: this.Maxihost._headers
    });
  }

  
  create(postData) {
    return this.Maxihost._post('/devices', postData, { 
      headers: this.Maxihost._headers 
    });
  }

  delete(deviceId) {
    return this.Maxihost._delete('/devices/' + deviceId, {
      headers: this.Maxihost._headers
    });
  }
}

module.exports = (Maxihost) => {
  Maxihost.prototype.Device = new Device(Maxihost);
  Maxihost.prototype.Device.Bandwidth = new Bandwidth(Maxihost);
}