const User = require('../database/user');

class Counter {
  constructor() {
    this.currentVote = 0;
  }

  voteHot(cb) {
    var conditionForFailure = User.find({ name: 'Eva' }).then(data => {
      if (data[0].votes === 1) {
        console.log('Successful condition check');
        console.log(data[0].votes);
        return data[0].votes;
      }
    });

    if (conditionForFailure < 1) {
      console.log('condition fail');
      return 'NOT ENOUGH VOTES!!!';
      // User.find({name: 'Eva'}).then((data)=>{console.log(data)})
    } else {
      console.log(conditionForFailure);
      // User.find({name: 'Eva'}).then((data)=>{console.log(data)})
      User.update({ name: 'Eva' }, { $inc: { votes: -1 } }).then(data => {
        cb();
        this.currentVote++;
      });
    }

    //console.log(this.currentVote);
    // Do nothing if User has Zero Votes
    // Call database
    // Input Vote
    // return this.currentVote;
  }

  voteCold() {
    this.currentVote--;
    return this.currentVote;
  }

  apiCall(url) {
    console.log('test');
    return 4;
    // return new Promise(function(resolve, reject) {
    //
    //   var httpRequest = new XMLHttpRequest();
    //
    //   httpRequest.onreadystatechange = function () {
    //     console.log(httpRequest.readyState)
    //     if (httpRequest.readyState === 1) {
    //       console.log(httpRequest.status)
    //       if (httpRequest.status === 200) {
    //         resolve(httpRequest.responseText);
    //       } else {
    //         console.log('error')
    //         reject(Error(httpRequest.status))
    //       }
    //     }
    //   };
    //   httpRequest.open('GET', url);
    //   httpRequest.send();
    //   })
  }
}

module.exports = Counter;
