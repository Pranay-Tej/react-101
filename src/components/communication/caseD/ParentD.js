import React from 'react'
import ChildD1 from './ChildD1'
import ChildD2 from './ChildD2'

// https://medium.com/@krzakmarek88/eventemitter-instead-of-lifting-state-up-f5f105054a5
// https://www.npmjs.com/package/eventemitter3

function ParentD() {
    return (
        <div>
            <p>Case D: Without parent-child interaction</p>
            <h2>ParentD</h2>
            <ChildD1 />
            <ChildD2 />
        </div>
    )
}

export default ParentD
