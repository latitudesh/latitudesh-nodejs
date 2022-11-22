const requests = require('./http-methods/index.js');
const dotenv = require('dotenv');

dotenv.config();

const loadMethods = (apiKey, origin) => {
  requests.setHttpMethods(LatitudeSh, apiKey, origin);
  const resources = require('./resources/index.js')(LatitudeSh);
};

class LatitudeSh {
  constructor(apiKey, origin) {
    this.apiKey = apiKey;
    this.origin = origin;
    loadMethods(apiKey, origin);
  }
}

module.exports = LatitudeSh;
