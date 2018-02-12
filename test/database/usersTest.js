const assert = require('assert');
const User = require('../../database/user.js');
// const

describe('Users', () => {
  it('#can create users', (done) => {

    var nero = new User({ name: 'Nero' });
    nero.save().then(()=> {
      User.find({ name: 'Nero' })
      .then(data => {
        // console.log(mongoose.connection.readyState)
        console.log(data[0].name);
        done()

      })
    });
  });

  it('a users vote allowance goes down', (done)=>{
    var rory = new User({ name:'Rory'});
    rory.save()
      .then(()=>{
        User.find({name:'Rory'})
          .then(data => {
            console.log(data[0].votes)
            done()
          });
      })
  });

  it('a user can only cast a vote once', ()=>{

  });

  it('a user can cast votes again when 2 hours have passed', ()=>{

  });

  it('a user can cast votes again when 2 hours have passed but not more than 1 vote', ()=>{

  });

});
