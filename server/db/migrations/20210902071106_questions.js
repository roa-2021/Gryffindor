
exports.up = knex => {
  return knex.schema.createTable('questions', table => {
    table.increments('id')
    table.string('question')
    table.string('possible_answers')
    table.string('correct_answer')
  })
}

exports.down = knex => knex.schema.dropTable('questions')
