import React from 'react'
import Compliment from './Compliments'

function Answer (props) {
  
  function proceed (e) {
    if (e.target.innerHTML == props.ca) {
      console.log('CORRECT!')
      props.next()
    } else {
      console.log('WRONG!!!!!')
    }
  }

  return (
    <div>
        {/* <h1>Answer Component</h1> */}
        <ul>
          {
            props.a.map(ans => {

              return (
                <li key={ans}>
                  <button onClick={(e) => proceed(e)}>
                    {ans}
                  </button>
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default Answer
