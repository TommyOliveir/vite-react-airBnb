import JokerData from "./JokerData"
import JokerCard from "./JokerCard"
import React from 'react'

export default function ArrayMap() {

    const nameOfjoker = JokerData.map((item) => {
        return <JokerCard name={item.name} />
    })
    return (
        <div>
            {nameOfjoker}
        </div>
    )
}
