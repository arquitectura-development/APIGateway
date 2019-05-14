'use strict';

var chai = require("chai");
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';


describe("habitsService", async function(){
    this.timeout(5000);

    it('path /admin/habits?userId=0 should return status 200 & array', function(done){
        chai.request(url)
            .get("/admin/habits?userId=0")
            .end( async function(err, res){
                expect(res).to.have.status(200)
                expect(res.body).to.be.an('array')
                done();
            })
    })
    it('get path /users/habits/?userId=1 should return status 200 & array', function(done){
        chai.request(url)
            .get("/users/habits/?userId=1")
            .end( function(err, res){
                expect(res).to.have.status(200)
                expect(res.body).to.be.an('array')
                done();
            })
    })
    it('post path /users/habits/?userId=1 without Json should return an object in the body', function(done){
        chai.request(url)
            .post("/users/habits/?userId=1")
            .end( function(err, res){
                expect(res.text).to.equal("Bad Request")
                expect(res.body).to.be.an("object")
                done();
            })
    })
    
    it('get path /users/habits/2?userId=1 should return 200 & array ', function(done){
        chai.request(url)
            .get("/users/habits/1?userId=1")
            .end( function(err, res){
                expect(res).to.have.status(200)
                expect(res.body).to.be.an("array")
                done();
            })
    })

    it('delete path /users/habits/0?userId=1 should return 404  ', function(done){
        chai.request(url)
            .delete("/users/habits/0?userId=1")
            .end( function(err, res){
                expect(res).to.have.status(404)
                done();
            })
    })

    it('put path /users/habits/0?userId=1 should return 404  ', function(done){
        chai.request(url)
            .delete("/users/habits/0?userId=1")
            .end( function(err, res){
                expect(res).to.have.status(404)
                done();
            })
    })
})