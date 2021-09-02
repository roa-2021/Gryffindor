const request = require('superagent')

const express = require('express')
const router = express.Router()

const baseURL = 'https://evilinsult.com/generate_insult.php?lang=en&type=json'

router.get('/', (req, res) => {
    return request.get(`${baseURL}`)
    .then(response => {
        return res.json(response.body)
    })
  })

  module.exports = router