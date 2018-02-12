class Counter {
  constructor() {
    this.currentVote = 0;
  }

  voteHot() {
    this.currentVote ++;
    console.log(this.currentVote);
    // Do nothing if User has Zero Votes
    // Call database
    // Input Vote
    return this.currentVote
  }

  voteCold(){
    this.currentVote --;
    return this.currentVote
  }

  apiCall(url){
    console.log('test')
    return 4
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
