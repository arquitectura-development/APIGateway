var express = require('express');
var router = express.Router()
const apiAdapter = require('../apiAdapter')

const BASE_URL = 'http://localhost:8088'
const api = apiAdapter(BASE_URL)

router.get('/tasks', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.post('/tasks/user', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/tasks/user', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

  router.get('/tasks/user/:taskId', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

  router.delete('/tasks/user/:taskId', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

  router.delete('/tasks/user/:taskId', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

  router.put('/tasks/user/:taskId', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

module.exports = router