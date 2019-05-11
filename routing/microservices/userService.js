var express = require('express');
var router = express.Router()
const apiAdapter = require('../apiAdapter')
const serviceURL = require('../serviceRegistry/serviceRegistry.js');

router.get('/user/login', async(req, res) => {
  const BASE_URL = await serviceURL.userService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

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

router.get('/user/signin', async(req, res) => {
  const BASE_URL = await serviceURL.userService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

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

router.get('/user/:userId/name', async(req, res) => {
  const BASE_URL = await serviceURL.userService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

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

module.exports = router