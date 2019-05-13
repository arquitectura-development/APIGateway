'use strict';

var index = require("../index"),
router = require("../routing/routers"),
chai = require("chai"),
should = chai.should(),
expect = chai.expect;

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    }
};


describe("index", function(){
    it('Should require express', function(){
        var 
    })
})