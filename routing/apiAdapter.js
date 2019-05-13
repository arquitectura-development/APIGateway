const axios = require('axios');

module.exports = (baseURL, method, body) => {
  return axios.create({
    baseURL: baseURL,
    method: method,
      headers: {
        'Content-type': 'application/json'
    },
    data: body
  });
}