var express = require('express');
var router = express.Router()
const apiAdapter = require('../apiAdapter')
const serviceURL = require('../serviceRegistry/serviceRegistry.js')

router.get('/habits', async (req, res) => {
  const BASE_URL = await serviceURL.habitsService();
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

router.get('/habits/user', async (req, res) => {
  const BASE_URL = await serviceURL.habitsService();
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

router.get('/habits/user', async (req, res) => {
  const BASE_URL = await serviceURL.habitsService();
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

  router.post('/habits/user', async (req, res) => {
    const BASE_URL = await serviceURL.habitsService();
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

  router.get('/habits/user/:habitId', async(req, res) => {
    const BASE_URL = await serviceURL.habitsService();
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

  router.delete('/habits/user/:habitId', async(req, res) => {
    const BASE_URL = await serviceURL.habitsService();
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

  router.put('/habits/user/:habitId', async (req, res) => {
    const BASE_URL = await serviceURL.habitsService();
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