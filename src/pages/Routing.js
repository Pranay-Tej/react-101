import React from 'react'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import ItemDesc from '../components/routing/ItemDesc'

function Routing() {

    let {path, url} = useRouteMatch()

    return (
        <div>
            <h1>Routing</h1>
            <ul>
                <li>Browser Router</li>
                <li>Switch</li>
                <li>Route</li>
                <li>Link</li>
                <li>Redirect</li>
            </ul>
            <Link to={`${path}/item-desc`}>Item-Description Demo</Link>
        </div>
    )
}

export default Routing
