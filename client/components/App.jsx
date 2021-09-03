
import React from 'react'
import {Route} from "react-router-dom" // yay! this exists!

import LandingPage from './LandingPage'
import QuizPage from './QuizPage.jsx'
import CongratsPage from './CongratsPage'

function App () {
  return (
    <>
      {/* <h1>I say... GRYFFINDOR!!!</h1> */}

      <div className='main'> {/*anand to decide*/}
        <Route exact path='/' component={LandingPage} />
        <Route path='/question' component={QuizPage} />
        <Route path='/congrats' component={CongratsPage}/>
      </div>
    </>
  )
}

export default App
