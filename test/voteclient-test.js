let server = require('../src/server.js');

var assert = require('assert');
const VoteClient = require("../src/voteclient.js")



describe('VoteClient', function(){
  this.timeout(10000);
  it('can vote hot on the server', function() {
    var voteclient = new VoteClient;
    return voteclient.apiCall('http://localhost:3000/vote_hot')
    .then(function(data) {
      assert.equal(data, 1);
    });
  });
  
  it('can vote cold on the server', function() {
    var voteclient = new VoteClient;
    return voteclient.apiCall('http://localhost:3000/vote_cold')
    .then(function(data) {
      assert.equal(data, 0);
    });
  });

  it('can vote neutral on the server', function() {
    var voteclient = new VoteClient;
    return voteclient.apiCall('http://localhost:3000/vote_neutral')
    .then(function(data) {
      assert.equal(data, 0);
    });
  });
});
