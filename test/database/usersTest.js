const assert = require('assert');
const User = require('../../database/user.js');

describe('Users', () => {
  it('#can create users', () => {
    var nero = new User({ name: 'Nero' });
    nero.save();
    User.find({ name: 'Nero' }).then(data => {
      assert(data[0].name === 'Nero');
    });
  });
});
