var expect = require('chai').expect
var app = require('../app')
var S = require('supertest')
var _ = require('lodash')


describe('integration', () => {
  it('get game', function(done) {
    let size = 3
    S(app).get('/games')
      .query({seed: 'seed', size})
      .expect((res) => {
        var {body} = res
        expect(body.items.length).to.eql(size)
      }).end(done)
  })
  it('post wrong solution', function(done) {
    S(app).post('/games')
      .send({seed: 'seed', size: 3, answer: 2})
      .expect(({body}) => {
        expect(body.status).to.equal('Your answer is wrong')
      }).end(done)
  })
  it('post correct solution', function(done) {
    S(app).post('/games')
      .send({seed: 'seed', size: 3, answer: 3})
      .expect(({body}) => {
        expect(body.status).to.equal('Your answer is correct')
      }).end(done)
  })
})
