module.exports = {
	services: function(type, service){
		const servicesDictionary = {
			'reports': 'https://arqui-reports-montoya.herokuapp.com',
			'user': 'https://users--api.herokuapp.com',
			'tasks': 'https://taskservice.herokuapp.com',
			'habits': 'https://arquitectura-habits.herokuapp.com'
		};

		const secondaryDictionary = {
			'reports': 'https://arqui-reports-montoya-2.herokuapp.com',
			'user': '',
			'tasks': '',
			'habits': 'https://arquitectura-habits2.herokuapp.com'
		};

		const chooseService = function(service){
			if(service == 'reports'){
				return servicesDictionary.reports;
			}else if(service == 'user'){
				return servicesDictionary.user;
			}else if(service == 'tasks'){
				return servicesDictionary.tasks;
			}else if(service == 'habits'){
				return servicesDictionary.habits;
			}
		};

		const chooseSecondaryService = function(service){
			if(service == 'reports'){
				return secondaryDictionary.reports;
			}else if(service == 'user'){
				return secondaryDictionary.user;
			}else if(service == 'tasks'){
				return secondaryDictionary.tasks;
			}else if(service == 'habits'){
				return secondaryDictionary.habits;
			}
		};

		if(type == 'main'){
			return  chooseService(service);
		}else if(type == 'secondary'){
			return  chooseSecondaryService(service);
		} 
        
        
	}
};


