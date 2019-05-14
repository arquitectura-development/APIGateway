'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';




describe('tasksService', async function(){
	this.timeout(15000);
	it(' get path /admin/tasks?userId=0 should respond', function(done){
		chai.request(url)
			.get('/admin/tasks?userId=0')
			.end( async function(err, res){
				expect(res.body).to.be.an('array');
				done();
			});
	});
    
	it('post path /users/tasks?userId=x should respond', function(done){
		chai.request(url)
			.post('/users/tasks?userId=x')
			.type('form')
			.send({title:'test',
				description:'test',
				dueDate:'02/02/2024',
				reminder:'02/02/2022 10:00'})
			.end( async function(err, res){
				console.log(res.body);
				expect(res.body).to.be.an('object');
				done();
			});
	});

	it(' get path /users/tasks?userId=x should respond', function(done){
		chai.request(url)
			.get('/users/tasks?userId=x')
			.end( async function(err, res){
				expect(res).to.have.status(404);
				done();
			});
	});
    
	it(' get path /users/tasks/x?userId=x should respond', function(done){
		chai.request(url)
			.get('/users/tasks/x?userId=x')
			.end( async function(err, res){
				expect(res).to.have.status(404);
				done();
			});
	});

	it(' delete path /users/tasks/x?userId=x should respond ', function(done){
		chai.request(url)
			.delete('/users/tasks/x?userId=x')
			.end( async function(err, res){
				console.log(res.body);
				expect(res).to.have.status(404);
				done();
			});
	});

	it(' put path /users/tasks/x?userId=x should respond ', function(done){
		chai.request(url)
			.put('/users/tasks/x?userId=x')
			.end( async function(err, res){
				expect(res).to.have.status(404);
				done();
			});
	});
});