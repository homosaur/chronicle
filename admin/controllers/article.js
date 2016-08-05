'use strict'

const uuid = require('uuid')
const db = require('lowdb')

module.exports = class Article {
  constructor () {
    this.id = uuid.v4()
    this.title = 'New Article'
    this.date = new Date()
    this.body = ''
  }

  save (id) {

  }
}
