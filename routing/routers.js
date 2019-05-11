var express = require('express');
var router = express.Router()
var reportService = require('./microservices/reportService')
var habitsService = require('./microservices/habitsService')
var tasksService = require('./microservices/tasksService')
var userService = require('./microservices/userService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(reportService)
router.use(habitsService)
router.use(tasksService)
router.use(userService)

module.exports = router;