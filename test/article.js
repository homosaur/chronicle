'use strict'

const Article = require('../admin/controllers/article')
const expect = require('chai').expect

describe('Article', function () {
  it('should be able to be created', function () {
    var article = new Article()
    expect(article).to.exist
  })

  it('should be able to be saved', function () {})
  it('should have a title')
  it('should have a slug')
  it('should be able to be versioned')
  it('should publish latest unless specified')
  it('should respect published version')
})
