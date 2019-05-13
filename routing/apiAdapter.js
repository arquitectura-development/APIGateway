const axios = require('axios');

module.exports = (baseURL, method) => {
  return axios.create({
    baseURL: baseURL,
    method: method
  });
}