var express = require('express');
var router = express.Router()
const apiAdapter = require('../apiAdapter')
const serviceURL = require('../serviceRegistry/serviceRegistry.js')

router.get('/admin/habits', async (req, res) => {
  const BASE_URL = await serviceURL.habitsService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

  api.get(req.path + "?userId=" + req.query.userId ).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.response.status)
    res.sendStatus(error.response.status)
  })
})

router.get('/users/habits', async (req, res) => {
  const BASE_URL = await serviceURL.habitsService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

  api.get(req.path + "?userId=" + req.query.userId ).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.response.status)
    res.sendStatus(error.response.status)
  })
})

router.post('/users/habits', async (req, res) => {
  const BASE_URL = await serviceURL.habitsService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

  api.get(req.path + "?userId=" + req.query.userId ).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.response.status)
    res.sendStatus(error.response.status)
  })
})

router.get('/users/habits/:habitId', async (req, res) => {
  const BASE_URL = await serviceURL.habitsService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

  api.get(req.path + "?userId=" + req.query.userId ).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.response.status)
    res.sendStatus(error.response.status)
  })
})

router.delete('/users/habits/:habitId', async (req, res) => {
    const BASE_URL = await serviceURL.habitsService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

  api.get(req.path + "?userId=" + req.query.userId ).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.response.status)
    res.sendStatus(error.response.status)
  })
})

router.put('/users/habits:/habitId', async(req, res) => {
    const BASE_URL = await serviceURL.habitsService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

  api.get(req.path + "?userId=" + req.query.userId ).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.response.status)
    res.sendStatus(error.response.status)
  })
})

 

module.exports = router