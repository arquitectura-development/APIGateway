var requestP = require('request-promise'); // "Request" library
var loadBalancer = require("../loadBalancer/loadBalancer");
var dictionary = require("./servicesDictionary")

module.exports = {
    habitsService: async function() {
        let service = "habits"
        habitsServiceURL = dictionary.services("main", service);
        console.log("\n Checking if Habits service is active")
        let testingPath = ''

        var options = {
            uri: habitsServiceURL+ testingPath,
            method: 'GET',
            resolveWithFullResponse: true
          };
        
        return await requestP(options).then(function(response) {
            console.log("\n Service Registry Found", service,  "Service works by getting a", response.statusCode, " status code")
            return habitsServiceURL
        }).catch((error)=>{
            console.log("error ", response.statusCode)
            console.log("\n Service Registry DIDN'T FOUND", service,  " service.")
            return loadBalancer.balance(options, service)
        })  

    },
    reportsService: async function() {
        let service = "reports"
        console.log("\n Checking if Reports service is active")
        reportsServiceURL = dictionary.services("main", service);
        let testingPath = '/'

        var options = {
            uri: reportsServiceURL+ testingPath,
            method: 'GET',
            resolveWithFullResponse: true
          };
        
        return await requestP(options).then(function(response) {
            console.log("\n Service Registry Found", service,  "Service works by getting a", response.statusCode, " status code")
            return reportsServiceURL
        }).catch((error)=>{
            console.log("error ", response.statusCode)
            console.log("\n Service Registry DIDN'T FOUND", service,  " service.")
            return loadBalancer.balance(options, service)
        })  
         
    },
    tasksService: async function() {
        let service = "tasks"
        console.log("\n Checking if Tasks service is active")
        let tasksServiceURL= dictionary.services("main", service);
        let testingPath = ""
        
        var options = {
            uri: tasksServiceURL+ testingPath,
            method: 'GET',
            resolveWithFullResponse: true
          };
        
        return await requestP(options).then(function(response) {
            console.log("\n Service Registry Found", service,  "Service works by getting a", response.statusCode, " status code")
            return tasksServiceURL
        }).catch((error)=>{
            console.log("error ", response.statusCode)
            console.log("\n Service Registry DIDN'T FOUND", service,  " service.")
            return loadBalancer.balance(options, service)
        })        
    },
    userService: async function() {
        let service = "user"
        console.log("\n Checking if User service is active")
        userServiceURL = dictionary.services("main", service);
        let testingPath = ""

        var options = {
            uri: userServiceURL+ testingPath,
            method: 'GET',
            resolveWithFullResponse: true
          };
        
        return await requestP(options).then(function(response) {
            console.log("\n Service Registry Found", service,  "Service works by getting a", response.statusCode, " status code")
            return userServiceURL
        }).catch((error)=>{
            console.log("error ", response.statusCode)
            console.log("\n Service Registry DIDN'T FOUND", service,  " service.")
            return loadBalancer.balance(options, service)
        })  
    },
}