import React, { useState, useEffect } from 'react'
import { getcompliment } from '../apis/compliments.js'

function Compliment () {
    const [comp, setComp] = useState(null)

    useEffect(() => {
        refreshCompliment()
    }, [])

    const refreshCompliment = () => {
        getcompliment()
        .then(getcomp => {
         setComp(getcomp) 
        })

    }
    return (
        <>
        {comp ? <p className='make-green'>{comp.compliment}</p> : <p>the sorting hat is thinking....</p>}
        </>
    )
}

export default Compliment