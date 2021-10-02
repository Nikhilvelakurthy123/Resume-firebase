import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import CountDownComponent from "../../practice/CountDownComponent";
import CounterComponent from "../../practice/CounterComponent";
import HeaderComponent from "./HeaderComponent";

import ShoppingHome from "./ShoppingHome";

function ShoppingHomeComponent() {
    return (
        <div className="container-fluid bg-light">
            <Router>
                <HeaderComponent />
                <Switch>
                    <Route exact path="/shopping/">
                        <ShoppingHome />
                    </Route>
                    <Route exact path="/shopping/Counter">
                        <CounterComponent />
                    </Route>
                    <Route exact path="/shopping/countdown">
                        <CountDownComponent />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default ShoppingHomeComponent;