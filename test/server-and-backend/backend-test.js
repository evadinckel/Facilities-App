var assert = require('assert');
const VoteCounter = require("../../src/voteCounter.js")



describe('VoteCounter', function() {
    it('can vote for hot', function(){
    // arrange
      var voteCounter = new VoteCounter(0);
      // act
      voteCounter.voteHot()
    // assert
      assert.equal(voteCounter.votes, 1);
    });
    it('can vote for cold', function(){
      // arrange
      var voteCounter = new VoteCounter(1);
      //act
      voteCounter.voteCold()
      //assert
      assert.equal(voteCounter.votes, 0);
    });
    it('can vote for being fine as is', function(){
      //arrange
      var voteCounter = new VoteCounter(1);
      //act
      voteCounter.voteNeutral()
      //assert
      assert.equal(voteCounter.votes, 0);
    });
});
