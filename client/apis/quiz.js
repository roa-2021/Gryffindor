import request from 'superagent'

export function complimentapi () {
  return request.get('https://complimentr.com/api')
  .then (res => res.body)
  .catch (err => console.log('Oh snap!', err.message))
}
