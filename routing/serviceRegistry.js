var request = require('request'); // "Request" library

module.exports = {
    habitsService: function() {
        habitsServiceURL = "URL";
        return habitsServiceURL
    },
    reportsService: function() {
        console.log("Checking if Reports service is active")
        reportsServiceURL = "https://arqui-reports-montoya.herokuapp.com/";
        testingPath = 'reports/admin/tasks'

        var options = {
            url: reportsServiceURL+ testingPath,
            method: 'HEAD'
          };
        
        request.post(options, function(error, response, body) {
            if(error){ 
                console.log("\n Service Registry DIDN'T FOUND Reports Service.")
                return error
            }else if(response.statusCode != 200){
                console.log("\n Service Registry found Reports Service BUT with status code:", reponse.statusCode);
                return response.statusCode
            }else{
                console.log("\n Service Registry found Reports Service works by getting a", response.statusCode, "status code from reports/admin/tasks \n")
                return reportsServiceURL
            }
            
        })
         
    },
    tasksService: function() {
        console.log("Checking if Tasks service is active")
        tasksServiceURL = "";
        testingPath = ""

        var options = {
            url: tasksServiceURL+ testingPath,
            method: 'HEAD'
          };
        
        request.post(options, function(error, response, body) {
            if(error){ 
                console.log("\n Service Registry DIDN'T FOUND Tasks Service.");
                return error
            }else if(response.statusCode != 200){
                console.log("\n Service Registry found Tasks Service BUT with status code:", reponse.statusCode);
                return response.statusCode
            }else{
                console.log("\n Service Registry found Reports Service work by getting a", response.statusCode, "status code from reports/admin/tasks \n")
                return tasksServiceURL
            }
            
        })
    },
    userService: function() {
        console.log("Checking if User service is active")
        userServiceURL = "http://userapi-env.4hvthj6jvp.us-west-1.elasticbeanstalk.com";
        testingPath = ""

        var options = {
            url: userServiceURL+ testingPath,
            method: 'HEAD'
          };
        
        request.post(options, function(error, response, body) {
            if(error){ 
                console.log("\n Service Registry DIDN'T FOUND User Service.");
                return error
            }else if(response.statusCode != 200){
                console.log("\n Service Registry found User Service BUT with status code:", response.statusCode);
                return response.statusCode
            }else{
                console.log("\n Service Registry found Reports Service work by getting a", response.statusCode, "status code from reports/admin/tasks \n")
                return userServiceURL
            }
            
        })
    },
}