'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';


describe('reportsService', async function(){
	this.timeout(15000);

	it(' get path /users/reports?userId=1 should return an object', function(done){
		chai.request(url)
			.get('/users/reports?userId=1')
			.end( async function(err, res){
				expect(res.body).to.be.an('object');
				done();
			});
	});
    
	it(' get path /admin/reports/tasks/?userId=0 should return an object with properties', function(done){
		chai.request(url)
			.get('/admin/reports/tasks?userId=0')
			.end( async function(err, res){
				expect(res.body).to.be.an('object');
				expect(res.body.completed).to.be.an('object');
				done();
			});
	});

	it(' get path /admin/reports/habits?userId=0 should return an object with properties', function(done){
		chai.request(url)
			.get('/admin/reports/habits?userId=0')
			.end( async function(err, res){
				expect(res.body).to.be.an('object');
				expect(res.body.perRange).to.be.an('object');
				done();
			});
	});
});