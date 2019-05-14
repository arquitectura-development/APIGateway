var requestP = require('request-promise'); // "Request" library
var loadBalancer = require('../loadBalancer/loadBalancer');
var dictionary = require('./servicesDictionary');

module.exports = {
	habitsService: async function() {
		const service = 'habits';
		const habitsServiceURL = dictionary.services('main', service);
		console.log('\n Checking if Habits service is active');

		var options = {
			uri: habitsServiceURL,
			method: 'GET',
			resolveWithFullResponse: true
		};
        
		return await requestP(options).then(function(response) {
			console.log('\n Service Registry Found', service,  'Service works by getting a', response.statusCode, ' status code');
			return habitsServiceURL;
		}).catch((error)=>{
			console.log('error', error);
			console.log('\n Service Registry DIDN\'T FOUND', service,  ' service.');
			return loadBalancer.balance(service);
		});  

	},
	reportsService: async function() {
		let service = 'reports';
		console.log('\n Checking if Reports service is active');
		const reportsServiceURL = dictionary.services('main', service);

		var options = {
			uri: reportsServiceURL,
			method: 'GET',
			resolveWithFullResponse: true
		};
        
		return await requestP(options).then(function(response) {
			console.log('\n Service Registry Found', service,  'Service works by getting a', response.statusCode, ' status code');
			return reportsServiceURL;
		}).catch((error)=>{
			console.log('error', error.response.status);
			console.log('\n Service Registry DIDN\'T FOUND', service,  ' service.');
			return loadBalancer.balance(service);
		});  
         
	},
	tasksService: async function() {
		let service = 'tasks';
		console.log('\n Checking if Tasks service is active');
		let tasksServiceURL= dictionary.services('main', service);
        
		var options = {
			uri: tasksServiceURL,
			method: 'GET',
			resolveWithFullResponse: true
		};
        
		return await requestP(options).then(function(response) {
			console.log('\n Service Registry Found', service,  'Service works by getting a', response.statusCode, ' status code');
			return tasksServiceURL;
		}).catch((error)=>{
			console.log('error', error.response.status);
			console.log('\n Service Registry DIDN\'T FOUND', service,  ' service.');
			return loadBalancer.balance(service);
		});        
	},
	userService: async function() {
		let service = 'user';
		console.log('\n Checking if User service is active');
		const userServiceURL = dictionary.services('main', service);

		var options = {
			uri: userServiceURL,
			method: 'GET',
			resolveWithFullResponse: true
		};
        
		return await requestP(options).then(function(response) {
			console.log('\n Service Registry Found', service,  'Service works by getting a', response.statusCode, ' status code');
			return userServiceURL;
		}).catch((error)=>{
			console.log('error', error.response.status);
			console.log('\n Service Registry DIDN\'T FOUND', service,  ' service.');
			return loadBalancer.balance( service);
		});  
	},
};