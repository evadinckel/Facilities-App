var assert = require('assert');
const VoteCounter = require("../src/voteCounter.js")



describe('VoteCounter', function() {
    it('can vote for hot', function(){
      var voteCounter = new VoteCounter(0);
      assert.equal(voteCounter.votes, 0);
    });
});
