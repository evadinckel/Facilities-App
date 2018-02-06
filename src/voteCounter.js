class VoteCounter{
 constructor(votes){
   this.votes = votes
 }
}


VoteCounter.prototype.voteHot = function(){
  this.votes++
};

VoteCounter.prototype.voteCold = function(){
  this.votes--
}

VoteCounter.prototype.voteNeutral = function(){
  if (this.votes > 0){
    this.votes--
  } else if (this.votes < 0){
    this.votes++
  };
};


 module.exports = VoteCounter
