'use strict';

var chai = require("chai");
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';


describe("reportsService", async function(){
    this.timeout(10000);

    it(' get path /users/reports?userId=1 should return an object with 4 arrays', function(done){
        chai.request(url)
            .get("/users/reports?userId=1")
            .end( async function(err, res){
                expect(res.body).to.be.an("object")
                expect(res.body.goodHabits).to.be.an("array")
                expect(res.body.badHabits).to.be.an("array")
                expect(res.body.delayedTasks).to.be.an("array")
                expect(res.body.todayTasks).to.be.an("array")
                done();
            })
    })
    
    it(' get path /admin/reports/tasks/?userId=0 should return an object with properties', function(done){
        chai.request(url)
            .get("/admin/reports/tasks?userId=0")
            .end( async function(err, res){
                expect(res.body).to.be.an("object")
                expect(res.body.completed).to.be.an("object")
                done();
            })
    })

    it(' get path /admin/reports/habits?userId=0 should return an object with properties', function(done){
        chai.request(url)
            .get("/admin/reports/habits?userId=0")
            .end( async function(err, res){
                expect(res.body).to.be.an("object")
                expect(res.body.perRange).to.be.an("object")
                done();
            })
    })
})