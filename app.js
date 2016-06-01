var getRandomList = require('./prototype')
var express = require('express')
var morgan = require('morgan')
var _ = require('lodash');
var bodyParser = require('body-parser')
var app = express()


app.use(morgan('combined'))
app.use(bodyParser.json())
app.get('/games', (req, res) => {
  let {size, seed} = req.query
  let list = getRandomList(seed, Number(size))
  res.json({items: list})
})

app.post('/games', (req, res) => {
  let {size, seed, answer} = req.body

  let list = getRandomList(seed, Number(size))
  if(_.uniq(list).length === Number(answer)) {
    res.json({status: 'Your answer is correct'})
  } else {
    res.json({status: 'Your answer is wrong'})
  }

})

module.exports = app
