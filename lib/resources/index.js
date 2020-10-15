module.exports = (Maxihost) => {
  const profile = require("./profile/index.js")(Maxihost);
  const projects = require("./projects/index.js")(Maxihost);
  const regions = require("./regions/index.js")(Maxihost);
  const teams = require("./teams/index.js")(Maxihost);
};
