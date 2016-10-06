// Local testing
var request = require('supertest')
var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

// DB requirements
var app = require('../server/server')
var db = require('mongoose').connect('mongodb://localhost/treasuretrek')
var jwt = require('jwt-simple')
// db models
var User = require('../server/models/Users')
var Adventure = require('../server/models/Adventures')
var UserAdventure = require('../server/models/UserAdventure')

var users = require('./testData')

var clearUserTable = function(done){
  User.remove({}, done)
}

describe('#Database', function(){

  after(clearUserTable)
  var jackId;

  it('should create user in db', function(done){
    // Populate Database
    User.create(users.jack, function(err, user){
      if (err) {
        done(err, null)
      } else {
        jackId = user._id
        done()
      }
    })
  })

  it('should not create invalid user', function (done){
    var badUser = {fakeProperty: "jack"}
    User.create(badUser)
    User.findOne({fakeProperty: "jack"}, function (err, user){
      if (err){
        console.error("Error in find user: ", err)
      } else {
        assert.equal(user, null)
        done()
      }
    })
  })

  it('should only create valid user'/*, function (done){
    // Enforce valid data structure for User model
  }*/)

})

describe('#API signin/signup', function (){

  ///////////// LIBRARY OF IDs FOR CALLS ////////////////////
  var jackToken;
  var adventureId;
  var userAdventureId;

  it('should return 404 for invalid API calls', function (done){
    request(app)
      .get('/')
      .expect(404)
      .end(done)
  });

  it('should signup new user', function (done){
    request(app)
      .post('/api/signup')
      .send(users.jack)
      .expect(200)
      .end(done);
  })

  //////// GETS TOKEN HERE FOR USE WITH NEXT TESTS ////////////////////
  it('should receive valid token of userid at signin', function (done){
    // Let's signin first to get token, then hit another endpoint that
    // requires received token
    request(app)
      .post('/api/signin')
      .send(users.jack)
      .expect(200)
      .end(function(err, res){
        if (err) {
          done(err, null)
        } else {
          // Second call to endpoint requiring valid token using received token
          jackToken = res.body.userid;
          request(app)
            .get('/api/fetchAll')
            .set('x-access-token', jackToken)
            .expect(200)
            .end(done)
        }
      })
  })

  it('should allow users to create an adventure', function (done){
    // Expects {title: 'title', adventure: [riddles], startingLocation: 'location'}

    request(app)
      .post('/api/createAd')
      .set('x-access-token', jackToken)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send(users.form)
      .expect(function (res){
        adventureId = res.body._id
      })
      .expect(200)
      .end(done)
  })


})

describe('#API Adventure Points', function (){

  it('should receive random points between 100-300 for every complete riddle',
  function(done) {
    done()
  })

})
