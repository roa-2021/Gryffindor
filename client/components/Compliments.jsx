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
    return (
        <>
        <h3>{comp.compliment}</h3>
        </>
    )
}

export default Compliment