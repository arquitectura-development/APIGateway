var request = require('request'); // "Request" library
var dictionary = require("../serviceRegistry/servicesDictionary")

module.exports = {
    balance: function(options, service) {
        habitsServiceURL = dictionary.services("secondary", service);
        console.log("\n Checking if SECONDARY Habits service is active")
        testingPath = ''

        request.post(options, function(error, response) {
            //return loadBalancer.balance(error, response, service)
            if(error){ 
                console.log("\n Service Registry DIDN'T FOUND SECONDARY", service,  " service.")
                return error
            }else{
                console.log("\n Service Registry Found", service,  "Service works by getting a", response.statusCode, " status code")
                return habitsServiceURL
            }
        })   
    }
}