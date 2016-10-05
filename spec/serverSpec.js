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

// var addAdventure
var createData = function (){

}

var createUsers = function(cb){
  User.create(users.jack)
    .exec(user => {
      user._id
    })
}

describe('#Database', function(){

  afterEach(clearUserTable)

  it('Should create user in db', function(done){
    // Populate Database
    User.create(users.jack, function (err, user){
      expect(user._id).to.exist
      done()
    })
  })

  it('Should not create invalid user', function (done){
    var badUser = {fakeProperty: "jack"}
    User.create(badUser)
    User.findOne({fakeProperty: "jack"}, function (err, user){
      if (err){
        console.error("Error in find user: ", err)
      } else {
        assert.equal(user, null)
      }
      done()
    })
  })

  it('Should only create valid user'/*, function (done){
    // Enforce valid data structure for User model
  }*/)

  it('Should allow users to create an adventure', function (done){
     User.create(users.jack, done)
  })

  it('Should allow users to accept an adventure', function (){

  })
})



describe('#API signin/signup', function (){

  after(clearUserTable)

  it('Should return 404 for invalid API calls', function (done){
    request(app)
      .get('/')
      .expect(404)
      .end(done)
  });

  it('Should signup new user', function (done){
    request(app)
      .post('/api/signup')
      .send(users.jack)
      .expect(200)
      .end(done)
  })

  it('Should receive valid token of userid at signin', function (done){
    // Let's signin first to get token, then hit another endpoint that
    // requires received id
    request(app)
      .post('/api/signin')
      .send(users.jack)
      .expect(200)
      .end(function(err, res){
        if (err) {
          done(err, null)
        } else {
          // Second call to endpoint requiring valid token using received token
          var token = res.body.userid;
          request(app)
            .get('/api/fetchAll')
            .set('x-access-token', token)
            .expect(200)
            .end(done)
        }
      })

  })

})

describe('#API points', function (){

  before(createData)
  after(clearUserTable)

  it('Should receive random points between 100-300 for every complete riddle',
    function(done) {



    done()
  })
})
