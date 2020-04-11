import React from 'react'
import { useParams } from 'react-router-dom'

function Description() {
    let {itemId} = useParams()
    return (
        <div>
            <h3>Description</h3>
            <p>{itemId}</p>
        </div>
    )
}

export default Description
