const got = require('got');
require('dotenv').config();

const handleError = (err) => {
  if(err.response && err.response.body) {
    throw new Error(err.response.body);
  } else {
    console.log(err)
    // throw new Error(err)
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

const getRequest = async (path, searchParams, headers) => {
  try {
    const response = await got.get(buildUrl(path,  "?" + searchParams),
    { headers })
    return JSON.parse(response.body)
  } catch(err) {
    handleError(err)
  }
}

const postRequest = async (path, data, headers) => {
  try {
    console.log(headers)
    const response = await got.post(buildUrl(path), {
      headers: headers, json: data
    })
    return JSON.parse(response.body)
  } catch(err) {
    handleError(err)
  }
}

const patchRequest = async (path, data, headers) => {
  try {
    const response = await got.patch(buildUrl(path), {
      json: data, headers
    })
    return JSON.parse(response.body)
  } catch (err) {
    handleError(err)
  }
}

const deleteRequest = async (path, headers) => {
  try {
    const response = await got.delete(buildUrl(path), { headers })
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
