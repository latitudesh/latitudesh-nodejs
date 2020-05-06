const got = require('got');
require('dotenv').config();

const handleError = (err) => {
  if(err && err.response) {
    throw new Error(JSON.parse(err.response.body));
  } else {
    throw new Error(err)
  }
}

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

const getRequest = async (path, searchParams, headers) => {
  try {
    const response = await instance.get(buildUrl(path,  "?" + searchParams),
    { context: headers })
    return JSON.parse(response.body)
  } catch(err) {
    handleError(err)
  }
}

const postRequest = async (path, data, headers) => {
  try {
    const response = await instance.post(buildUrl(path), {
      json: data, context: headers
    })
    return JSON.parse(response.body)
  } catch(err) {
    handleError(err)
  }
}

const patchRequest = async (path, data, headers) => {
  try {
    const response = await instance.patch(buildUrl(path), {
      json: data, context: headers
    })
    return JSON.parse(response.body)
  } catch (err) {
    handleError(err)
  }
}

const deleteRequest = async (path, headers) => {
  try {
    const response = await instance.delete(buildUrl(path), { context: headers })
    return JSON.parse(response.body)
  } catch (err) {
    handleError(err)
  }
}

const buildUrl = (path, searchParams = "") => {
  const url = process.env.URL;
  return url + path + searchParams;
}

exports.setHttpMethods = setHttpMethods;
exports.setAuthHeaders = setAuthHeaders;
exports.getRequest = getRequest;
exports.postRequest = postRequest;
exports.patchRequest = patchRequest;
exports.setAuthHeaders = deleteRequest;
