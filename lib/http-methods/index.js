const got = require('got');
require('dotenv').config();


const setAuthHeaders = (apiKey) => {
  return {
    'Authorization': apiKey,
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.maxihost.v1.1+json'
  };
}

const setHttpMethods = (Maxihost, apiKey) => {
  Maxihost._headers = setAuthHeaders(apiKey)
  Maxihost._get = getRequest;
  Maxihost._patch = patchRequest;
  Maxihost._post = postRequest;
  Maxihost._delete = deleteRequest;
}

const instance = got.extend({
  hooks: {
    beforeRequest: [
      options => {
        if (!options.context.headers || !options.context.headers.Authorization) {
          throw new Error('Token required');
        }
        
        options.headers = options.context.headers
      }
    ]
  }
});

const getRequest = async (path, headers) => {
  try {
    const response = await instance.get(buildUrl(path), { context: headers })
    return JSON.parse(response.body)
  } catch(err) {
    console.log(err)
    throw new Error(JSON.parse(err.response.body));
  }
}

const postRequest = async (path, data, headers) => {
  try {
    const response = await instance.post(buildUrl(path), {
      json: data, context: headers
    })
    return JSON.parse(response.body)
  } catch(err) {
    throw new Error(JSON.parse(err.response.body));
  }
}

const patchRequest = async (path, data, headers) => {
  try {
    const response = await instance.patch(buildUrl(path), {
      json: data, context: headers
    })
    return JSON.parse(response.body)
  } catch (err) {
    throw new Error(JSON.parse(err.response.body));
  }
}

const deleteRequest = async (path, headers) => {
  try {
    const response = await instance.delete(buildUrl(path), { context: headers })
    return JSON.parse(response.body)
  } catch (err) {
    throw new Error(JSON.parse(err.response.body));
  }
}

const buildUrl = (path) => {
  const url = process.env.URL;
  return url + path;
}

exports.setHttpMethods = setHttpMethods;
exports.setAuthHeaders = setAuthHeaders;
exports.getRequest = getRequest;
exports.postRequest = postRequest;
exports.patchRequest = patchRequest;
exports.setAuthHeaders = deleteRequest;

