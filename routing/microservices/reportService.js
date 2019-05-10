var express = require('express');
var router = express.Router()
const apiAdapter = require('../apiAdapter')
const serviceURL = require('../serviceRegistry.js');

const BASE_URL = serviceURL.reportsService();
const api = apiAdapter(BASE_URL)

router.get('/report/user/', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/report/admin/tasks', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/report/admin/habits', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

module.exports = router