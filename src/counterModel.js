// const User = require('../database/user');

class Counter {
  constructor() {
    this.hotCounter = 0;
    this.coldCounter = 0;
    this.neutralCounter = 0;
    this.cookieIDLog = [];
    console.log(this.cookieIDLog)
    // console.log(this.hotCounter)
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

  addCookie(cookie) {
    this.cookieIDLog.push(cookie)
  }
}

export default Counter;
