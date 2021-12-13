const requests = require('./http-methods/index.js');
const dotenv = require('dotenv');

dotenv.config();

const loadMethods = (apiKey, origin) => {
  requests.setHttpMethods(Maxihost, apiKey, origin);
  const resources = require('./resources/index.js')(Maxihost);
};

class Maxihost {
  constructor(apiKey, origin = null) {
    this.apiKey = apiKey;
    this.origin = origin
    loadMethods(apiKey, origin);
  }
}

module.exports = Maxihost;
