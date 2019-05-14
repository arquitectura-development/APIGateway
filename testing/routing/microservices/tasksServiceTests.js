'use strict';

var chai = require("chai");
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';


describe("tasksService", async function(){
    this.timeout(15000);

    it(' get path /admin/tasks?userId=0 should return an array', function(done){
        chai.request(url)
            .get("/admin/tasks?userId=0")
            .end( async function(err, res){
                expect(res.body).to.be.an("array")
                done();
            })
    })
    //falta el post
    it(' get path /users/tasks?userId=1 should return an array', function(done){
        chai.request(url)
            .get("/users/tasks?userId=1")
            .end( async function(err, res){
                expect(res.body).to.be.an("array")
                done();
            })
    })
    
    it(' get path /users/tasks/1?userId=1 should return an object with id=1', function(done){
        chai.request(url)
            .get("/users/tasks/1?userId=3")
            .end( async function(err, res){
                expect(res.body).to.be.an("object")
                expect(res.body.id).to.equal(1)
                done();
            })
    })

    it(' delete path /users/tasks/1?userId=0 should return an object ', function(done){
        chai.request(url)
            .delete("/users/tasks/1?userId=0")
            .end( async function(err, res){
                expect(res.body).to.be.an("object")
                done();
            })
    })

    it(' put path /users/tasks/1?userId=0 should return an object ', function(done){
        chai.request(url)
            .put("/users/tasks/1?userId=0")
            .end( async function(err, res){
                expect(res.body).to.be.an("object")
                done();
            })
    })
})