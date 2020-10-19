const Bandwidth = require("./bandwidth/index.js");
const Ips = require("./ips/index.js");
const Actions = require("./actions/index.js");
const CustomScripts = require("./custom-scripts/index.js");
class Device {
  constructor(Maxihost) {
    this.Maxihost = Maxihost;
  }

  get(deviceId, searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString()
    return this.Maxihost._get("/devices/" + deviceId,
      this.Maxihost._headers, searchParams);
  }

  list(searchParams = "") {
    searchParams = new URLSearchParams(searchParams).toString()
    return this.Maxihost._get("/devices",
      this.Maxihost._headers,
      searchParams);
  }

  create(bodyData) {
    return this.Maxihost._post("/devices",
      this.Maxihost._headers,
      bodyData);
  }

  delete(deviceId) {
    return this.Maxihost._delete("/devices/" + deviceId,
      this.Maxihost._headers);
  }
}

module.exports = (Maxihost) => {
  Maxihost.prototype.Device = new Device(Maxihost);
  Maxihost.prototype.Device.Bandwidth = new Bandwidth(Maxihost);
  Maxihost.prototype.Device.Ips = new Ips(Maxihost);
  Maxihost.prototype.Device.Actions = new Actions(Maxihost);
  Maxihost.prototype.Device.CustomScripts = new CustomScripts(Maxihost);
}
