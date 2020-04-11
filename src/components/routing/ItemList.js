import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function ItemList() {
    let {path, url} = useRouteMatch()
    {console.log("ItemList: path: ",path, "url: ", url)}

    return (
        <div>
            <h2>ItemList</h2>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>
        </div>
    );
}

export default ItemList;
