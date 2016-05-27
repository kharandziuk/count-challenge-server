var expect = require('chai').expect
var app = require('../app')
var S = require('supertest')
var _ = require('lodash')


describe('server', () => {
  it('smoke', function(done) {
    let size = 100
    S(app).get('/book')
      .query({seed: 'seed', size})
      .expect((res) => {
        var {body} = res
        expect(body.items.length).to.eql(size)
      }).end(done)
  })
})
