XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

class VoteClient{
  constructor(){
  }
}


VoteClient.prototype.voteHot = function(){
  //request to API
}

VoteClient.prototype.apiCall = function(url) {
  return new Promise(function(resolve, reject) {

    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          resolve(httpRequest.responseText);
        } else {
          reject(Error(httpRequest.status))
        }
      }
    };
    httpRequest.open('GET', url);
    httpRequest.send();
  })
};



module.exports = VoteClient
// voteclient = new VoteClient
// voteclient.apiCall('http://localhost:3000/vote_hot')
