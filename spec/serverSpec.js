// Test System
var request = require('supertest')
var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

// DB requirements
var app = require('../server/server')
var db = require('mongoose').connect('mongodb://localhost/treasuretrek')
var User = require('../server/models/Users')

describe('#Database', function(){

  it('Should not create invalid user', function (done){
    var jack = {nine: "jack"}
    User.create(jack)
    User.findOne({nine: "jack"}, function (err, user){
      if (err){
        console.error("Error in find user: ", err)
      } else {
        assert.equal(user, null)
      }
      done()
    })

    it('Should only create valid user'/*, function (done){
      // Enforce data structure for User model
    }*/)
  })
})

describe('#API', function (){
  it('Should return 404 for invalid API calls', function (done){
    request(app)
      .get('/')
      .expect(404)
      .end(done)
  });
})
