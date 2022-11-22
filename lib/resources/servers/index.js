const Ips = require('./ips/index.js');
const Actions = require('./actions/index.js');
const DeployConfig = require('./deploy-config/index.js');
const RemoteAccess = require('./remote-access/index.js');
const RescueMode = require('./rescue-mode/index.js');
class Device {
  constructor(LatitudeSh) {
    this.LatitudeSh = LatitudeSh;
  }

  get(deviceId, searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      '/servers/' + deviceId,
      this.LatitudeSh._headers,
      searchParams
    );
  }

  list(searchParams = '') {
    searchParams = new URLSearchParams(searchParams).toString();
    return this.LatitudeSh._get(
      '/servers',
      this.LatitudeSh._headers,
      searchParams
    );
  }

  create(bodyData) {
    return this.LatitudeSh._post(
      '/servers',
      this.LatitudeSh._headers,
      bodyData
    );
  }

  update(deviceId, bodyData) {
    return this.LatitudeSh._patch(
      `/servers/${deviceId}`,
      this.LatitudeSh._headers,
      bodyData
    );
  }

  delete(deviceId) {
    return this.LatitudeSh._delete(
      '/servers/' + deviceId,
      this.LatitudeSh._headers
    );
  }
}

module.exports = LatitudeSh => {
  LatitudeSh.prototype.Server = new Device(LatitudeSh);
  LatitudeSh.prototype.Server.Ips = new Ips(LatitudeSh);
  LatitudeSh.prototype.Server.Actions = new Actions(LatitudeSh);
  LatitudeSh.prototype.Server.RemoteAccess = new RemoteAccess(LatitudeSh);
  LatitudeSh.prototype.Server.RescueMode = new RescueMode(LatitudeSh);
  LatitudeSh.prototype.Server.DeployConfig = new DeployConfig(LatitudeSh);
};
