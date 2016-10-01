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

var users = require('./testData')

var clearUserTable = function(done){
  User.remove({}, done)
}

describe('#Database', function(){

  afterEach(clearUserTable)

  it('Should not create invalid user', function (done){
    var badUser = {nine: "jack"}
    User.create(badUser)
    User.findOne({nine: "jack"}, function (err, user){
      if (err){
        console.error("Error in find user: ", err)
      } else {
        assert.equal(user, null)
      }
      done()
    })
  })

  it('Should return a valid user', function(done){
    // Populate Database
    User.create(users.jack, function (err, user){
      expect(user._id).to.exist
      done()
    })
  })

  it('Should only create valid user'/*, function (done){
    // Enforce data structure for User model
  }*/)
})



describe('#API', function (){

  afterEach(clearUserTable)

  it('Should return 404 for invalid API calls', function (done){
    request(app)
      .get('/')
      .expect(404)
      .end(done)
  });

  it('Should sign user up', function (done){
    request(app)
      .post('/api/signup')
      .send(users.jack)
      .expect(function (res){
        console.log(res.body)
      })
      .end(done)
  })


})
