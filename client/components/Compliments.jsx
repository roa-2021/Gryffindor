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
        <p className='make-green'>{comp.compliment}</p>
        </>
    )
}

export default Compliment