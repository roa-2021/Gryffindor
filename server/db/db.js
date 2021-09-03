const knex = require('knex')(config)
const config = require('./knexfile')[env]
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

const getQuestionById = (id, db = connection) => {
  return db('questions')
    .where('id', id)
    .first()
}

module.exports = {
  getQuestionById
}
