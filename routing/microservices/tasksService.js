var express = require('express');
var router = express.Router()
const apiAdapter = require('../apiAdapter')

const serviceURL = require('../serviceRegistry/serviceRegistry.js');

const BASE_URL = serviceURL.tasksService();
const api = apiAdapter(BASE_URL)

router.get('/admin/tasks/', (req, res) => {
  console.log("making get request to /admin/tasks")
  api.get(req.path).then((resp, error) => {
    if(error){
      console.log("error", error)
      res.send(error)
    }else{
      console.log("data", resp.data)
      res.send(resp.data)
    }
  })
})

router.post('/users/tasks/', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/users/tasks/', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

  router.delete('/users/tasks/', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

  router.put('/users/tasks/', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

module.exports = router