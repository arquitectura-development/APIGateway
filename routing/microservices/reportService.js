var express = require('express');
var router = express.Router()
const apiAdapter = require('../apiAdapter')
const serviceURL = require('../serviceRegistry/serviceRegistry.js');

router.get('/users/reports', async (req, res) => {
  const BASE_URL = await serviceURL.reportsService();
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

router.get('/admin/reports/tasks', async (req, res) => {
  const BASE_URL = await serviceURL.reportsService();
  const api = apiAdapter(BASE_URL)
  console.log("making get request to ", BASE_URL + req.path)

  api.get(req.path).then((resp) => {
      console.log("data", resp.data)
      res.send(resp.data)
    }).catch(error){
      console.log("error", error)
      res.send(error)
    }
})

router.get('/admin/reports/habits', async (req, res) => {
    const BASE_URL = await serviceURL.reportsService();
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
