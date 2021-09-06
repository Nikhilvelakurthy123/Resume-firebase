import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'
import WeatherComponent from './WeatherComponent'

export default class WeatherIndexComponent extends Component {
    render() {
        return (
            <div className="Ticktactoe">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/weatherapp/" exact component={WeatherComponent} />
                        {/* <AuthenticiatedRoute path="/logout" component={LogoutComponent} /> */}
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}