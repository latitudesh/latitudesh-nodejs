const requests = require('./http-methods/index.js');
const dotenv = require('dotenv');

dotenv.config();

const loadMethods = (apiKey) => {
  requests.setHttpMethods(Maxihost, apiKey);
  const resources = require('./resources/index.js')(Maxihost);
}
class Maxihost {
  constructor(apiKey) {
    this.apiKey = apiKey;
    loadMethods(apiKey);
  }
}

const maxihostApi = new Maxihost('eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5tYXhpaG9zdC5jb20iLCJzdWIiOnsiZW1haWwiOiJsZW9uYXJkby5yaXNjaCtkZXYtYWNjb3VudEBtYXhpaG9zdC5jb20uYnIiLCJjX3VzZXJfaWQiOiIyMjYtMzQyIn0sImF1ZCI6ImNvbnRyb2wubWF4aWhvc3QuY29tLmJyIiwiaWF0IjoxNTg1NTkyNDMyLCJleHAiOjE2MTcxMjg0MzIsImp0aSI6ImZmNTFlZWQ4LTM3ZTItNDgzZS05ZmM4LWNiMTkzOTUwNzc3ZSJ9.b2zZSWFxl6p1IP4nhdjmxzprQTxuTOliuc5wbcx3dIU')
maxihostApi.Device.Ips.list(4)
module.exports = Maxihost;