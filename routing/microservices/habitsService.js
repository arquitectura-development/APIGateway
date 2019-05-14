var express = require('express');
var router = express.Router();
const serviceURL = require('../serviceRegistry/serviceRegistry.js');
const http = require('./httpRequest/httpRequest.js');

router.get('/admin/habits', async (req, res) => {
	const BASE_URL = await serviceURL.habitsService();
	http.request(req, res, BASE_URL, req.method);
});

router.get('/users/habits', async (req, res) => {
	const BASE_URL = await serviceURL.habitsService();
	http.request(req, res, BASE_URL, req.method);
});

router.post('/users/habits', async (req, res) => {
	const BASE_URL = await serviceURL.habitsService();
	http.request(req, res, BASE_URL, req.method);

});

router.get('/users/habits/:habitId', async (req, res) => {
	const BASE_URL = await serviceURL.habitsService();
	http.request(req, res, BASE_URL, req.method);
});

router.delete('/users/habits/:habitId', async (req, res) => {
	const BASE_URL = await serviceURL.habitsService();
	http.request(req, res, BASE_URL, req.method);
});

router.put('/users/habits/:habitId', async(req, res) => {
	const BASE_URL = await serviceURL.habitsService();
	http.request(req, res, BASE_URL, req.method);
});




module.exports = router;