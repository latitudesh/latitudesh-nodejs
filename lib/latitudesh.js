const requests = require('./http-methods/index.js');
const dotenv = require('dotenv');

dotenv.config();

const loadMethods = (apiKey, origin, version) => {
  requests.setHttpMethods(LatitudeSh, apiKey, origin, version);
  const resources = require('./resources/index.js')(LatitudeSh);
};

class LatitudeSh {
  constructor(apiKey, origin, version) {
    this.apiKey = apiKey;
    this.origin = origin;
    this.version = version;
    loadMethods(apiKey, origin, version);
  }
}

module.exports = LatitudeSh;
