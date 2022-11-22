const Regions = require('./regions/index.js');

/**
 * @deprecated
 */
module.exports = LatitudeSh => {
  LatitudeSh.prototype.Account = {};
  LatitudeSh.prototype.Account.Regions = new Regions(LatitudeSh);
};
