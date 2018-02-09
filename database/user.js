var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String
  }
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to mongo');
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
