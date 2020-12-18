module.exports = Maxihost => {
  const account = require('./account/index.js')(Maxihost);
  const servers = require('./servers/index.js')(Maxihost);
  const plans = require('./plans/index.js')(Maxihost);
  const profile = require('./profile/index.js')(Maxihost);
  const projects = require('./projects/index.js')(Maxihost);
  const regions = require('./regions/index.js')(Maxihost);
  const sshKeys = require('./ssh-keys/index.js')(Maxihost);
  const teams = require('./teams/index.js')(Maxihost);
  const virtualNetworks = require('./virtual-networks/index.js')(Maxihost);
  const vpnSessions = require('./vpn-sessions/index.js')(Maxihost);
};
