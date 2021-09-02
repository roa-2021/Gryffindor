import request from 'superagent'

// const baseURL = 'https://evilinsult.com/generate_insult.php?lang=en&type=json'
const baseURL = '/api/v1/insult/'

export const getinsult = () => {
  return request.get(`${baseURL}`)
  .then(response => {
      return response.body
  })
}
