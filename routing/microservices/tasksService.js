var express = require('express');
var router = express.Router()
const http = require("./httpRequest/httpRequest.js")
const serviceURL = require('../serviceRegistry/serviceRegistry.js');

router.get('/admin/tasks', async (req, res, next) => {
  const BASE_URL = await serviceURL.tasksService();
  http.request(req, res, BASE_URL, req.method);
})

router.post('/users/tasks', async (req, res) => {
  const BASE_URL = await serviceURL.tasksService();
  http.request(req, res, BASE_URL, req.method);
})

router.get('/users/tasks', async (req, res) => {
  const BASE_URL = await serviceURL.tasksService();
  http.request(req, res, BASE_URL, req.method);
})

router.get('/users/tasks/:taskId', async(req, res) => {
  const BASE_URL = await serviceURL.tasksService();
  http.request(req, res, BASE_URL, req.method);
})

router.delete('/users/tasks/:taskId', async(req, res) => {
  const BASE_URL = await serviceURL.tasksService();
  http.request(req, res, BASE_URL, req.method);
})

router.put('/users/tasks/:taskId', async (req, res) => {
  const BASE_URL = await serviceURL.tasksService();
  http.request(req, res, BASE_URL, req.method);
})

module.exports = router