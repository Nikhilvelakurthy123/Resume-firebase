import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App.js'
import ExpenseTrackerComponent from './practice/ExpenseTrackerComponent'
import CalcComponent from './practice/CalculatorComponent'
import TictactoeComponent from './practice/TictactoeComponent'
import WeatherIndexComponent from './weatherapp/WeatherIndexComponent.js'

export default function RouterComponent() {
    return (
        <div className="container-fluid">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route exact path="/expenseTracker">
                        <ExpenseTrackerComponent />
                    </Route>
                    <Route exact path="/calc">
                        <CalcComponent />
                    </Route>
                    <Route exact path="/TictactoeComponent">
                        <TictactoeComponent />
                    </Route>
                    <Route exact path="/weatherapp"><WeatherIndexComponent /></Route>
                </Switch>
            </Router>
        </div>
    );
}