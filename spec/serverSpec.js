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
  var jillToken;
  var jackToken;
  var adventureid;
  var userAdventureId;

  it('should return 404 for invalid API calls', function (done){
    request(app)
      .get('/')
      .expect(404)
      .end(done)
  });

  it('should signup new users and provide jwt token', function (done){
    // Also grabs some user tokens for use with later tests
    request(app)
      .post('/api/signup')
      .send(users.jack)
      .expect(200)
      .end(function (err, res){
        if (err) return done(err)
        jackToken = res.body.userid;
        request(app)
          .post('/api/signup')
          .send(users.jill)
          .expect(200)
          .end(function (err, res){
            if (err) return done(err)
            jillToken = res.body.userid;
            done()
          })
      })
  })

  it('tokens should allow access', function (done){

    request(app)
      .get('/api/fetchAll')
      .set('x-access-token', jackToken)
      .expect(200)
      .end(done)

  })

  it('should allow users to create an adventure', function (done){
    // Expects {title: 'title', adventure: [riddles], startingLocation: 'location'}

    request(app)
      .post('/api/createAd')
      .set('x-access-token', jackToken)
      .send(users.form)
      .expect(function (res){
        adventureid = res.body._id
      })
      .expect(200, done)
  })

  it('should allow users to accept an adventure', function (done){
    request(app)
      .post('/api/pickAd')
      .set('x-access-token', jillToken)
      .send({ adventureid })
      .expect(function (res){
        userAdventureId = res.body._id
      })
      .expect(200, done)
  })

  describe('#API Adventure Points', function (){

    var jillsPoints = 0;
    var min = 99;
    var max = 301;

    it('should receive random points between 100-300 for every complete riddle',
    function(done) {

      var reqBody = {
        adventureid: adventureid,
        riddleNumber: 0
      }
      request(app)
        .put('/api/updateProgress')
        .set('x-access-token', jillToken)
        .send(reqBody)
        .expect(function(res){
          jillsPoints += res.body;
          expect(res.body).to.be.within(min, max)
        })
        .expect(200, done)
    })

    it('points should be accumulative', function(done) {

      var reqBody = {
        adventureid: adventureid,
        riddleNumber: 1
      }
      request(app)
        .put('/api/updateProgress')
        .set('x-access-token', jillToken)
        .send(reqBody)
        .expect(function(res){
          jillsPoints += res.body;
          User.find({ first: 'Jill'}, function (err, user){
            min = jillsPoints + min;
            max = jillsPoints + max;
            expect(user.points).to.be.within(min, max)
          })
        })
        .expect(200, done)
    })

    it('should get mad points for completing Adventure', function(done) {

      var reqBody = {
        adventureid: adventureid,
        riddleNumber: 2
      }
      request(app)
        .put('/api/updateProgress')
        .set('x-access-token', jillToken)
        .send(reqBody)
        .expect(function(res){
          jillsPoints += res.body;
          User.find({ first: 'Jill'}, function (err, user){
            // min = jillsPoints + min; // add Adventure bonus for both max and
            // max = jillsPoints + max; // min before applying assertion
            // expect(user.points).to.be.within(min, max)
          })
        })
        .expect(200, done)
    })


  })

})
