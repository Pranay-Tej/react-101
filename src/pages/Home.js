import React from "react";

import {Link} from "react-router-dom"

function Home() {
    return (
        <div>
            <h2>React 101</h2>
            <Link to="/communication">Component Communication</Link>
            <br />
            <Link to="/routing">Routing</Link>

        </div>
    );
}

export default Home;
