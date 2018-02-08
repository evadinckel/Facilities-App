const express = require('express')
const app = express()
const Counter = require("../src/counterModel.js")

voteCounter = new Counter()

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
})

app.get('/vote_hot', function (req, res, next) {
  voteCounter.voteHot()
  console.log(voteCounter.currentVote)
  next()
}, function (req, res) {
  res.send(`${voteCounter.currentVote}`)
})

// app.get('/vote_cold', function (req, res, next) {
//   voteCounter.voteCold()
//   next()
// }, function (req, res) {
//   res.send(`${voteCounter.currentVote}`)
// })

// app.get('/vote_neutral', function (req, res, next) {
//   voteCounter.voteNeutral()
//   next()
// }, function (req, res) {
//   res.send(`${voteCounter.currentVote}`)
// })

var server = app.listen(4000, ()=> console.log('Example app listening on port 4000!'))

module.exports = {
  server: server,
  app: app
}
