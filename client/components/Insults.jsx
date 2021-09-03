import React, { useState, useEffect } from 'react'
import { getinsult } from '../apis/insults.js'

function Insult () {
    const [salty, setSalty] = useState(null)

    useEffect(() => {
        refreshInsult()
    }, [])

    const refreshInsult = () => {
        getinsult()
        .then(getsalt => {
         setSalty(getsalt) 
        })

    }

    return (
        <>
        {salty ? <p className='make-red'>{salty.insult}</p> : <p>the sorting hat is thinking....</p>}
        </>
    )
}

export default Insult