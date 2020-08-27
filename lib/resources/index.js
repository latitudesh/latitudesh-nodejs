module.exports = (Maxihost) => {
  const device = require("./device/index.js")(Maxihost);
  const plans = require("./plans/index.js")(Maxihost);
  const virtualNetworks = require("./virtual-networks/index.js")(Maxihost);
  const sshKeys = require("./account/ssh-keys/index.js")(Maxihost);
};
