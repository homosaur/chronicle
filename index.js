'use strict'

const express = require('express')
const admin = require(__dirname + '/admin')
const app = express()

app.use(express.static(__dirname + '/dist'))
app.use('/admin', admin)

app.listen(2001)
