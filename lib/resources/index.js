module.exports = LatitudeSh => {
  const account = require('./account/index.js')(LatitudeSh);
  const apiVersion = require('./api-version/index.js')(LatitudeSh);
  const servers = require('./servers/index.js')(LatitudeSh);
  const ips = require('./ips/index.js')(LatitudeSh);
  const plans = require('./plans/index.js')(LatitudeSh);
  const user = require('./user/index.js')(LatitudeSh);
  const projects = require('./projects/index.js')(LatitudeSh);
  const regions = require('./regions/index.js')(LatitudeSh);
  const teams = require('./teams/index.js')(LatitudeSh);
  const traffic = require('./traffic/index.js')(LatitudeSh);
  const virtualNetworks = require('./virtual-networks/index.js')(LatitudeSh);
  const vpnSessions = require('./vpn-sessions/index.js')(LatitudeSh);
};
