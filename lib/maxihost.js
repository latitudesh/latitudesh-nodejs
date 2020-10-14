const requests = require("./http-methods/index.js");
const dotenv = require("dotenv");

dotenv.config();

const loadMethods = (apiKey, apiVersion) => {
  requests.setHttpMethods(Maxihost, apiKey, apiVersion);
  const resources = require("./resources/index.js")(Maxihost);
};

class Maxihost {
  constructor(apiKey, apiVersion) {
    this.apiKey = apiKey;
    this.apiVersion = apiVersion;
    loadMethods(apiKey, apiVersion);
  }
}

module.exports = Maxihost;
