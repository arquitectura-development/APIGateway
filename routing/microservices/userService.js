var express = require('express');
var router = express.Router()
const apiAdapter = require('../apiAdapter')
const serviceURL = require('../serviceRegistry/serviceRegistry.js');

router.get('/user/login', async(req, res) => {
  const BASE_URL = await serviceURL.userService();
  const api = apiAdapter(BASE_URL)
  console.log("makin' request to ", BASE_URL + req.path)

  api.get(req.path).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.response.status)
    res.sendStatus(error.response.status)
  })
})

router.get('/user/signup', async(req, res) => {
  const BASE_URL = await serviceURL.userService();
  const api = apiAdapter(BASE_URL)
  console.log("makin' request to ", BASE_URL + req.path)

  api.get(req.path).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.response.status)
    res.sendStatus(error.response.status)
  })
})

router.get('/user/name', async(req, res) => {
  const BASE_URL = await serviceURL.userService();
  const api = apiAdapter(BASE_URL)
  console.log("makin' request to ", BASE_URL + req.path)

  api.get(req.path + "?userId=" + req.query.userId ).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.response.status)
    res.sendStatus(error.response.status)
  })
})

router.get('/user/auth', async(req, res) => {
    const BASE_URL = await serviceURL.userService();
    const api = apiAdapter(BASE_URL)
    console.log("makin' request to ", BASE_URL + req.path)
  
    api.get(req.path + "?userId=" + req.query.userId ).then((resp) => {
      console.log("data", resp.data)
      res.send(resp.data)
    }).catch(error =>{
      console.log("error", error.response.status)
      res.sendStatus(error.response.status)
    })
})

module.exports = router