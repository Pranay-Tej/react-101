import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Communication from "./pages/Communication";
import PageNotFound from "./pages/PageNotFound";
import Routing from "./pages/Routing";
import ItemDesc from "./components/routing/ItemDesc";

const routing = (
    <Router>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/communication" component={Communication} />
            <Route path="/home" component={Home} />
            <Route path="/routing" component={Routing} exact />
            <Route path="/routing/item-desc" component={ItemDesc} />
            <Route path="**" component={PageNotFound} />
        </Switch>
    </Router>
);

ReactDOM.render(
    // <React.StrictMode>
        routing
    // </React.StrictMode>
    ,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
