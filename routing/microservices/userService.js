var express = require('express');
var router = express.Router()
const apiAdapter = require('../apiAdapter')

const serviceURL = require('../serviceRegistry/serviceRegistry.js');

const BASE_URL = serviceURL.userService();
const api = apiAdapter(BASE_URL)

router.get('/user/login', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/user/signin', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/user/:userId/name', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

module.exports = router