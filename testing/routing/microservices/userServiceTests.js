'use strict';

var chai = require("chai");
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';


describe("reportsService", async function(){
    this.timeout(10000);

    it(' get path /admin/users/name?userId=0 should return an object', function(done){
        chai.request(url)
            .get("/admin/users/name?userId=0")
            .end( async function(err, res){
                expect(res.body).to.be.an("object")
                done();
            })
    })
    
})