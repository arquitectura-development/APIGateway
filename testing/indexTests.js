'use strict';

var index = require('../index');
var router = require('../routing/routers');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';


describe('index', async function(){
	it('root path should return 200 status code & Habitton API Gateway message', function(done){
		chai.request(url)
			.get('')
			.end(function(err, res){
				expect(res).to.have.status(200);
				expect(res.text).to.equal('Habitton API Gateway');
				done();
			});
	});
});