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
    console.log(salty)
    return (
        <>
        <h1>{salty.insult}</h1>
        </>
    )
}

export default Insult