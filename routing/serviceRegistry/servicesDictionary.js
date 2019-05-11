module.exports = {
    services: function(type, service){
        servicesDictionary = {
            "reports": "https://arqui-reports-montoya.herokuapp.com/",
            "user": "http://userapi-env.4hvthj6jvp.us-west-1.elasticbeanstalk.com/",
            "tasks": "",
            "habits": ""
        }

        secondaryDictionary = {
            "reports": "",
            "user": "",
            "tasks": "",
            "habits": ""
        }

        chooseService = function(service){
            if(service == "reports"){
                return servicesDictionary.reports
            }else if(service == "user"){
                return servicesDictionary.user
            }else if(service == "tasks"){
                return servicesDictionary.tasks
            }else if(service == "habits"){
                return servicesDictionary.habits
            }
        }

        chooseSecondaryService = function(service){
            if(service == "reports"){
                return secondaryDictionary.reports
            }else if(service == "user"){
                return secondaryDictionary.user
            }else if(service == "tasks"){
                return secondaryDictionary.tasks
            }else if(service == "habits"){
                return secondaryDictionary.habits
            }
        }

        if(type == "main"){
            return  chooseService(service)
        }else if(type == "secondary"){
            return  chooseSecondaryService(service)
        } 
        
        
    }
}


