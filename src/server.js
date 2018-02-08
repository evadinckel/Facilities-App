const express = require('express')
const app = express()
const VoteCounter = require("../src/voteCounter.js")

voteCounter = new VoteCounter(0)

app.get('/vote_hot', function (req, res, next) {
  voteCounter.voteHot()
  console.log('here')
  next()
}, function (req, res) {
  res.send(`${voteCounter.votes}`)
})

app.get('/vote_cold', function (req, res, next) {
  voteCounter.voteCold()
  next()
}, function (req, res) {
  res.send(`${voteCounter.votes}`)
})

app.get('/vote_neutral', function (req, res, next) {
  voteCounter.voteNeutral()
  next()
}, function (req, res) {
  res.send(`${voteCounter.votes}`)
})

var server = app.listen(4000, ()=> console.log('Example app listening on port 4000!'))

module.exports = {
  server: server,
  app: app
}
