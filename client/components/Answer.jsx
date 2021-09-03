import React, { useState, useEffect } from 'react'
import { getcompliment } from '../apis/compliments'
import { getinsult } from '../apis/insults'

import Compliment from './Compliments'
import Insult from './Insults'

function Answer (props) {
  const [compSwitch, setCompSwitch] = useState(undefined)

  function proceed (e) {
    if (e.target.innerHTML == props.ca) {
      // correct answer
      setCompSwitch('compliment')
    } else {
      // incorrect answer
      setCompSwitch('insult')
    }
  }

  const checkWhatResponse = () => {
    if (compSwitch === 'compliment') {
      return <Compliment />
    } else if (compSwitch === "insult") {
      return <Insult />
    } else { 
      return <p>Compliment or insult pending...</p>
    }
  }

  useEffect(() => {
    setCompSwitch(undefined)
  }, [props.ca])

  return (
    <>
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
        {checkWhatResponse()}
    </>
  )
}

export default Answer
