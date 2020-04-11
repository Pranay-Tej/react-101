import React from "react";
import ItemList from "./ItemList";
import Description from "./Description";
import { Switch, Route, useRouteMatch } from "react-router-dom";

function ItemDesc() {
    let {path} = useRouteMatch()
    return (
        <div>
            <h2>Item-Desc Demo</h2>
            <ItemList />
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:itemId`}>
                    <Description />
                </Route>
            </Switch>
        </div>
    );
}

export default ItemDesc;
