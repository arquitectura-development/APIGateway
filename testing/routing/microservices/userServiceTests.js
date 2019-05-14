'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';


describe('reportsService', async function(){
	this.timeout(10000);

	it(' get path /admin/users/name?userId=x&searchUserId=x should respond', function(done){
		chai.request(url)
			.get('/admin/users/name?userId=x&searchUserId=x')
			.end( async function(err, res){
				expect(res).to.have.status(403);
				done();
			});
	});
    
	it(' get path /users/auth?userId=x&searchUserId=x should respond', function(done){
		chai.request(url)
			.get('/users/auth?userId=x&searchUserId=x')
			.end( async function(err, res){
				expect(res).to.have.status(404);
				done();
			});
	});

	it(' get path /users/login?userId=x&searchUserId=x should respond ', function(done){
		chai.request(url)
			.post('/users/login?userId=x&searchUserId=x')
			.end( async function(err, res){
				expect(res).to.have.status(400);
				done();
			});
	});

	it(' get path /users/signup?userId=x&searchUserId=x should respond ', function(done){
		chai.request(url)
			.post('/users/signup?userId=x&searchUserId=x')
			.end( async function(err, res){
				expect(res).to.have.status(400);
				done();
			});
	});
    

	it(' delete path /users/delete?userId=x&searchUserId=x should respond ', function(done){
		chai.request(url)
			.delete('/users/delete?userId=x&searchUserId=x')
			.end( async function(err, res){
				expect(res).to.have.status(404);
				done();
			});
	});
});
