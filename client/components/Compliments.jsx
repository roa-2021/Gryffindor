import React, { useState, useEffect } from 'react'
import { getcompliment } from '../apis/compliments.js'

function Compliment () {
    const [comp, setComp] = useState("test")

    useEffect(() => {
        refreshCompliment()
    }, [])

    const refreshCompliment = () => {
        getcompliment()
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