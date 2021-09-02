const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/:id', (req, res) => {
  const requestedId = req.params.id
  return db.getQuestionById(requestedId)
    .then(question => {
      question = {
        ...question,
        possibleAnswers: JSON.parse(question.possible_answers),
        correctAnswer: question.correct_answer,
      }
      delete question.possible_answers
      delete question.correct_answer

      return res.json(question)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

module.exports = router
