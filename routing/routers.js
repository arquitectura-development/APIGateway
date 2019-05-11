var express = require('express');
var router = express.Router()
var reportService = require('./microservices/reportService')
var habitsService = require('./microservices/habitsService')
var tasksService = require('./microservices/tasksService')
var userService = require('./microservices/userService')
const apiAdapter = require('../routing/apiAdapter')
const serviceURL = require('../routing/serviceRegistry/serviceRegistry.js');


router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(async (req, res, next) => {
    if(req.path == "/users/login" || req.path == "/users/signup" ){
        next()
    }else if(!req.query.userId || req.query.userId == ""){
        res.status(401)
        console.log("Unauthorized user")
        res.sendStatus(res.statusCode)
    }else{
        const BASE_URL = await serviceURL.userService();
        const api = apiAdapter(BASE_URL)
        api.get("users/auth?userId=" + req.query.userId ).then((resp) => {
            console.log("the userId exists")
            next()
        }).catch((error) =>{
            console.log("error ", error)
        })
    }
})
router.use(reportService)
router.use(habitsService)
router.use(tasksService)
router.use(userService)

module.exports = router;