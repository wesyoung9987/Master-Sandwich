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
var jwt = require('jwt-simple')
<<<<<<< HEAD
<<<<<<< 8961efae3e9de8a1eb033b942519abf9d7d637f8

var users = require('./testData')

var clearUserTable = function(done){
  User.remove({}, done)
}
=======
>>>>>>> (test)
=======
>>>>>>> a1f4afbb37e86b6be65ee0d346313fe69539d42e

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

<<<<<<< HEAD
<<<<<<< 8961efae3e9de8a1eb033b942519abf9d7d637f8
<<<<<<< 618488d9bef59b36989b7df342b1b0795a38c05b
  it('Should create user in db', function(done){
=======
  it('Should return a valid user', function(done){
>>>>>>> (test) setup db test
=======
  it('Should create user in db', function(done){
>>>>>>> (test)
=======
  it('Should create user in db', function(done){
>>>>>>> a1f4afbb37e86b6be65ee0d346313fe69539d42e
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

<<<<<<< HEAD
<<<<<<< 8961efae3e9de8a1eb033b942519abf9d7d637f8
<<<<<<< 618488d9bef59b36989b7df342b1b0795a38c05b
  after(clearUserTable)
=======
  afterEach(clearUserTable)
>>>>>>> (test) setup db test
=======
  after(clearUserTable)
>>>>>>> (test)
=======
  after(clearUserTable)
>>>>>>> a1f4afbb37e86b6be65ee0d346313fe69539d42e

  it('Should return 404 for invalid API calls', function (done){
    request(app)
      .get('/')
      .expect(404)
      .end(done)
  });

<<<<<<< HEAD
<<<<<<< 8961efae3e9de8a1eb033b942519abf9d7d637f8
<<<<<<< 618488d9bef59b36989b7df342b1b0795a38c05b
=======
>>>>>>> a1f4afbb37e86b6be65ee0d346313fe69539d42e
  it('Should signup new user', function (done){
    request(app)
      .post('/api/signup')
      .send(users.jack)
      .expect(200)
      .end(done)
  })

  // Testing jwt tokenization for local dev purposes only as it requires
  // exposing the matching server side jwt salt
  it('Should receive token of userid at signin', function (done){
    User.findOne({first: "Jack"}, function (err, user){
      request(app)
      .post('/api/signin')
      .send(users.jack)
      // TODO: Remove jwt token test for live servers
      .expect(200, {userid: jwt.encode(user, 'secret')})
      .end(done)
    })
  })
<<<<<<< HEAD
=======
  it('Should sign user up', function (done){
=======
  it('Should signup new user', function (done){
>>>>>>> (test)
    request(app)
      .post('/api/signup')
      .send(users.jack)
      .expect(200)
      .end(done)
  })

  // Testing jwt tokenization for local dev purposes only as it requires
  // exposing the matching server side jwt salt
  it('Should receive token of userid at signin', function (done){
    User.findOne({first: "Jack"}, function (err, user){
      request(app)
      .post('/api/signin')
      .send(users.jack)
      // TODO: Remove jwt token test for live servers
      .expect(200, {userid: jwt.encode(user, 'secret')})
      .end(done)
    })
  })

<<<<<<< 8961efae3e9de8a1eb033b942519abf9d7d637f8
>>>>>>> (test) setup db test

=======
>>>>>>> (test)
=======

>>>>>>> a1f4afbb37e86b6be65ee0d346313fe69539d42e
})
