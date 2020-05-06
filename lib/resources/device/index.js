const Bandwidth = require("./bandwidth/index.js");

class Device {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }

  get(deviceId) {
    return this.Maxihost._get("/devices/" + deviceId, {
      headers: this.Maxihost._headers
    });
  }

  list(searchParams) {
    searchParams = new URLSearchParams(searchParams).toString()
    return this.Maxihost._get("/devices", searchParams, {
      headers: this.Maxihost._headers
    });
  }


  create(postData) {
    return this.Maxihost._post("/devices", postData, {
      headers: this.Maxihost._headers
    });
  }

  delete(deviceId) {
    return this.Maxihost._delete("/devices/" + deviceId, {
      headers: this.Maxihost._headers
    });
  }
}

module.exports = (Maxihost) => {
  Maxihost.prototype.Device = new Device(Maxihost);
  Maxihost.prototype.Device.Bandwidth = new Bandwidth(Maxihost);
}
