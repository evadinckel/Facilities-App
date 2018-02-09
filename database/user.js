var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;