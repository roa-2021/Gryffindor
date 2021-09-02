const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

const getQuestionById = (id, db = connection) => {
  return db('questions')
    .where('id', id)
}

module.exports = {
  getQuestionById
}
