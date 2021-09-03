import React, { useState, useEffect } from 'react'
import { getinsult } from '../apis/insults.js'

function Insult () {
    const [salty, setSalty] = useState("test")

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
        <h3>{salty.insult}</h3>
        </>
    )
}

export default Insult