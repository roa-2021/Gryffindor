import React, { useState, useEffect } from 'react'

import Question from './Question'
import Answer from './Answer'
import Compliment from './Compliments'
import Insult from './Insults'

import request from 'superagent'

// UNWANTED SHIT
// /api/v1/questions/3

function Quiz () {
  const [quest, setQuest] = useState({
    "id": 3,
    "question": "Loading...",
    "possibleAnswers": [
      "Loading.",
      "Loading..",
      "Loading...",
      "Loading...."
    ],
    "correctAnswer": "Not an answer!!"
  })

  const getQuestion = () => {
    const randomNumber = Math.floor(Math.random() * 10 + 1)
    return request.get(`/api/v1/questions/${randomNumber}`)
      .then (response => {
        return response.body
      })
      .then (response => {
        setQuest(response)
      })
  }

  useEffect(() => {
    // refreshQuestion()
    getQuestion()
  }, [])
  
  const refreshQuestion = () => {
    getQuestion()
      // .then(nextQuestion => setQuest(nextQuestion))
  }

  return (
    <div>
      <h1>Quiz Page</h1>
      <Question q={quest.question}/>
      <Answer a={quest.possibleAnswers} ca={quest.correctAnswer} next={refreshQuestion} />
      <Compliment />
      <Insult />
      <button onClick={refreshQuestion}> Next Question </button>
    </div>
  )
}

export default Quiz
