var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  voteValue: {
    type: Number
  }
});

const Vote = mongoose.model('vote', VoteSchema);

module.exports = Vote;
