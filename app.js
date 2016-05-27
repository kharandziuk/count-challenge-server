var getRandomList = require('./prototype')
var express = require('express')
var morgan = require('morgan')
var _ = require('lodash');
var app = express()

app.use(morgan('combined'))
app.get('/book', (req, res) => {
  let {size, seed} = req.query
  let list = getRandomList(seed, Number(size))
  res.json({items: list})
})

module.exports = app
