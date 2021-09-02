import React, { useState, useEffect } from 'react'
import { complimentapi } from '../apis/quiz.js'

function Compliment () {
    const [comp, setComp] = useState("test")

    useEffect(() => {
        refreshCompliment()
    }, [])

    const refreshCompliment = () => {
        complimentapi()
        .then(getcomp => {
         setComp(getcomp) 
        })

    }
    console.log(comp)
    return (
        <>
        <h1>{comp.compliment}</h1>
        </>
    )
}

export default Compliment