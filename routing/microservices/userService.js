var express = require('express');
var router = express.Router()
const apiAdapter = require('../apiAdapter')
const serviceURL = require('../serviceRegistry/serviceRegistry.js');
// Parse URL-encoded bodies (as sent by HTML forms)
router.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
router.use(express.json());

router.post('/users/login', async(req, res) => {
  const BASE_URL = await serviceURL.userService();
  const api = apiAdapter(BASE_URL)
  console.log("makin' request to ", BASE_URL + req.path)

  api.post(req.path, req.body).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.response.status)
    res.sendStatus(error.response.status)
  })
})

router.post('/users/signup', async(req, res) => {
  console.log("Body ", req.body )
  const BASE_URL = await serviceURL.userService();
  const api = apiAdapter(BASE_URL)
  console.log("makin' request to ", BASE_URL + req.path)

  api.post(req.path, req.body).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.response.status)
    res.sendStatus(error.response.status)
  })
})

router.get('/admin/users/name', async(req, res) => {
  const BASE_URL = await serviceURL.userService();
  const api = apiAdapter(BASE_URL)
  console.log("makin' request to ", BASE_URL + req.path)

  api.get(req.path + "?userId=" + req.query.userId + "&searchUserId=" + req.query.searchUserId).then((resp) => {
    console.log("data", resp.data)
    res.send(resp.data)
  }).catch(error =>{
    console.log("error", error.response.status)
    res.sendStatus(error.response.status)
  })
})

router.get('/users/auth', async(req, res) => {
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