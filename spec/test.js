var assert = require('assert');

describe('Mocha', function() {
  describe('#Mocha', function() {

    // Having no callback to do assertion tests will label the test as "pending"
    // This system is good for writing speculative tests to be completed later.
    it('should exist'/*, function (){...}*/);
    it('should do something else', function (){
      assert.equal("This test runs", "and fails equality assertion")
    })
  });
});
