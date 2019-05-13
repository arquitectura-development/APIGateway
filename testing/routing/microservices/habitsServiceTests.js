'use strict';

var chai = require("chai");
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';


describe("habitsService", async function(){
    it('path /users/habits/?userId=1 should return status 200', function(done){
        chai.request(url)
            .get("/users/habits/?userId=1")
            .end( function(err, res){
                expect(res).to.have.status(200)
                done();
            })
    })
    it('path /users/habits/?userId=1 should return body', function(done){
        chai.request(url)
            .get("/users/habits/?userId=1")
            .end( function(err, res){
                expect(res.body).to.exist
                done();
            })
    })
    
})