
module.exports = (Maxihost) => {
  const device = require('./device/index.js')(Maxihost);
  const plans = require('./plans/index.js')(Maxihost);
}