module.exports = Maxihost => {
  const account = require('./account/index.js')(Maxihost);
  const servers = require('./servers/index.js')(Maxihost);
  const ips = require('./ips/index.js')(Maxihost);
  const plans = require('./plans/index.js')(Maxihost);
  const user = require('./user/index.js')(Maxihost);
  const projects = require('./projects/index.js')(Maxihost);
  const regions = require('./regions/index.js')(Maxihost);
  const teams = require('./teams/index.js')(Maxihost);
  const traffic = require('./traffic/index.js')(Maxihost);
  const virtualNetworks = require('./virtual-networks/index.js')(Maxihost);
  const vpnSessions = require('./vpn-sessions/index.js')(Maxihost);
};
