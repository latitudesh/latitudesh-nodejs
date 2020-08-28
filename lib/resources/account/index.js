const SshKeys = require("./ssh-keys/index.js");
const Regions = require("./regions/index.js");

module.exports = (Maxihost) => {
  Maxihost.prototype.Account = {};
  Maxihost.prototype.Account.SshKeys = new SshKeys(Maxihost);
  Maxihost.prototype.Account.Regions = new Regions(Maxihost);
};
