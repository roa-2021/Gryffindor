import React from 'react'
import { Link } from 'react-router-dom'

export default function StartButton() {

  return (
    <div>
      <Link to="/question">
        <button className='button'>Start Quiz!</button>
      </Link>
    </div>
  )
}
