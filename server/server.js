const path = require('path')
const express = require('express')
const cors = require('cors') // <- if you use this, npm install cors

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

const questionRoute = require('./routes/questions')
const insultRoute = require('./routes/insult')

server.use('/api/v1/questions', questionRoute)
server.use('/api/v1/insult/', insultRoute)

module.exports = server
