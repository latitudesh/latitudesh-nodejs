module.exports = (Maxihost) => {
  const device = require("./device/index.js")(Maxihost);
  const plans = require("./plans/index.js")(Maxihost);
  const virtualNetworks = require("./virtual-networks/index.js")(Maxihost);
  const account = require("./account/index.js")(Maxihost);
};
