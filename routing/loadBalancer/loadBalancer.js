var requestP = require('request-promise'); // "Request" library
var dictionary = require('../serviceRegistry/servicesDictionary');

module.exports = {
	balance: async function(service) {
		const url = await dictionary.services('secondary', service);
		console.log('\n Checking if SECONDARY', service, ' service is active');

		var options = {
			uri: url+ testingPath,
			method: 'GET',
			resolveWithFullResponse: true
		};

		return await requestP(options).then(function(response) {
			console.log('\n Service Registry Found Secondary', service,  'Service works by getting a', response.statusCode, ' status code');
			return url;
		}).catch((error)=>{
			console.log('\n Service Registry DIDN\'T FOUND SECONDARY', service,  ' service.');
			console.log('error', error);
			res.send(error);
		});    
	}
};