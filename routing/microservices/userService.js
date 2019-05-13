var express = require('express');
var router = express.Router()
const http = require("./httpRequest/httpRequest.js")
const serviceURL = require('../serviceRegistry/serviceRegistry.js');
// Parse URL-encoded bodies (as sent by HTML forms)
router.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
router.use(express.json());

router.post('/users/login', async(req, res) => {
  const BASE_URL = await serviceURL.userService();
  http.request(req, res, BASE_URL, req.method);
})

router.post('/users/signup', async(req, res) => {
  console.log("Body ", req.body )
  const BASE_URL = await serviceURL.userService();
  http.request(req, res, BASE_URL, req.method);
})

router.get('/admin/users/name', async(req, res) => {
  const BASE_URL = await serviceURL.userService();
  http.request(req, res, BASE_URL, req.method);
})

router.get('/users/auth', async(req, res) => {
    const BASE_URL = await serviceURL.userService();
    http.request(req, res, BASE_URL, req.method);
})

router.delete("/users/delete", async(req, res) =>{
  const BASE_URL = await serviceURL.userService();
  http.request(req, res, BASE_URL, req.method);

})

module.exports = router