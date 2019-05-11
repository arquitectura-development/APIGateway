var request = require('request'); // "Request" library
var loadBalancer = require("../loadBalancer/loadBalancer");
var dictionary = require("./servicesDictionary")

module.exports = {
    habitsService: function() {
        let service = "habits"
        habitsServiceURL = dictionary.services("main", service);
        console.log("\n Checking if Habits service is active")
        let testingPath = ''

        var options = {
            url: habitsServiceURL+ testingPath,
            method: 'HEAD'
          };
        
        request.post(options, function(error, response) {
            //return loadBalancer.balance(error, response, service)
            if(error){ 
                console.log("\n Service Registry DIDN'T FOUND", service,  " service.")
                return loadBalancer.balance(options, service)
            }else{
                console.log("\n Service Registry Found", service,  "Service works by getting a", response.statusCode, " status code")
                return habitsServiceURL
            }
        })
    },
    reportsService: function() {
        let service = "reports"
        console.log("\n Checking if Reports service is active")
        reportsServiceURL = dictionary.services("main", service);
        let testingPath = 'admin/reports/tasks'

        var options = {
            url: reportsServiceURL+ testingPath,
            method: 'HEAD'
          };
        
        request.post(options, function(error, response) {
            //return loadBalancer.balance(error, response, service)
            if(error){ 
                console.log("\n Service Registry DIDN'T FOUND", service,  " service.")
                return loadBalancer.balance(options, service)
            }else{
                console.log("\n Service Registry Found", service,  "Service works by getting a", response.statusCode, " status code")
                return reportsServiceURL
            }
        })
         
    },
    tasksService: function() {
        let service = "tasks"
        console.log("\n Checking if Tasks service is active")
        tasksServiceURL= dictionary.services("main", service);
        let testingPath = ""

        var options = {
            url: tasksServiceURL+ testingPath,
            method: 'HEAD'
          };
        
        request.post(options, function(error, response) {
            //return loadBalancer.balance(error, response, service)
            if(error){ 
                console.log("\n Service Registry DIDN'T FOUND", service,  " service.")
                return loadBalancer.balance(options, service)
            }else{
                console.log("\n Service Registry Found", service,  "Service works by getting a", response.statusCode, " status code")
                return tasksServiceURL
            }
        })
    },
    userService: function() {
        let service = "user"
        console.log("\n Checking if User service is active")
        userServiceURL = dictionary.services("main", service);
        let testingPath = ""

        var options = {
            url: userServiceURL+ testingPath,
            method: 'HEAD'
          };
        
        request.post(options, function(error, response) {
            //return loadBalancer.balance(error, response, service)
            if(error){ 
                console.log("\n Service Registry DIDN'T FOUND", service,  " service.")
                return loadBalancer.balance(options, service)
            }else{
                console.log("\n Service Registry Found", service,  "Service works by getting a", response.statusCode, " status code")
                return userServiceURL
            }
        })
    },
}