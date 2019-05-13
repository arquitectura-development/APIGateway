var express = require('express');
var router = express.Router()
const http = require("./httpRequest/httpRequest.js")
const serviceURL = require('../serviceRegistry/serviceRegistry.js');

router.get('/users/reports', async (req, res) => {
  const BASE_URL = await serviceURL.reportsService();
  http.request(req, res, BASE_URL, req.method);
})

router.get('/admin/reports/tasks', async (req, res) => {
  const BASE_URL = await serviceURL.reportsService();
  http.request(req, res, BASE_URL, req.method);
})

router.get('/admin/reports/habits', async (req, res) => {
  const BASE_URL = await serviceURL.reportsService();
  http.request(req, res, BASE_URL, req.method);
})

module.exports = router
