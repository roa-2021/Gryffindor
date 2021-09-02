import request from 'superagent'

export const getFruit = () => {
  return request.get('/api/v1/quiz')
    .then(response => {
      console.log(response)
      return response.body

    })
}

export function complimentapi () {
  return request
  .get ('https://complimentr.com/api')
  .then (res => res.body)
  .catch (err => console.log('Oh snap!', err.message))
}
