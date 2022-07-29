const Regions = require('./regions/index.js');

/**
 * @deprecated
 */
module.exports = Maxihost => {
  Maxihost.prototype.Account = {};
  Maxihost.prototype.Account.Regions = new Regions(Maxihost);
};
