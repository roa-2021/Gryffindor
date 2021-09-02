import React, { useState, useEffect } from 'react'
import { complimentapi } from '../apis/quiz'

function Compliment () {
    const [comp, setComp] = useState(null)

    useEffect(() => {
        refreshCompliment()
    }, [])

    const refreshCompliment = () => {
        complimentapi()
        .then(getcomp => setComp(getcomp))
    }
    return (
        <>
        <h1>hello world</h1>
        <img src={comp}/>
        </>
    )
}

export default Compliment