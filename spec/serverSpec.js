// Local testing
var request = require('supertest')
var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

// DB requirements
var app = require('../server/server')
var db = require('mongoose').connect('mongodb://localhost/treasuretrek')
var User = require('../server/models/Users')
var jwt = require('jwt-simple')

var users = require('./testData')

var clearUserTable = function(done){
  User.remove({}, done)
}
describe('Local #Database', function(){

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

  it('Should create user in db', function(done){
    // Populate Database
    User.create(users.jack, function (err, user){
      expect(user._id).to.exist
      done()
    })
  })

  it('Should only create valid user'/*, function (done){
    // Enforce valid data structure for User model
  }*/)
})



describe('Local #API', function (){

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

  // Let's get our token at sign in, then do another API call that requirements
  // a valid jwt token
  it('Should receive valid token of userid at signin', function (done){
    // TODO: Refactor token validity test to not require db call and
    // subsequently jwt encoding
    User.findOne({first: "Jack"}, function (err, user){
      request(app)
      .post('/api/signin')
      .send(users.jack)
      // Decoding here is unnecessary. Instead, make another API call that 
      // requires token to test for validity
      .expect(200/*, {userid: jwt.encode(user, 'secret')}*/)
      .end(done)
    })
  })

})
