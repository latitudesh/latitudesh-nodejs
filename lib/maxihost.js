requests = require('./http-methods/index.js');
dotenv = require('dotenv');

dotenv.config();

const loadMethods = (apiKey) => {
  requests.setHttpMethods(Maxihost, apiKey);
  resources = require('./resources/index.js')(Maxihost);
}
class Maxihost {
  constructor(apiKey) {
    this.apiKey = apiKey;
    loadMethods(apiKey);
  }
}

module.exports = Maxihost;