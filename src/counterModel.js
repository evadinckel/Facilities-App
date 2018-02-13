// const User = require('../database/user');

class Counter {
  constructor() {
    this.hotCounter = 0;
    this.coldCounter = 0;
    this.neutralCounter = 0;
  }

  voteHot() {
    this.hotCounter++;
  }

  voteCold() {
    this.coldCounter++;
  }

  voteNeutral() {
    this.neutralCounter++;
  }
}

export default Counter;
