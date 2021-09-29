import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App.js'
import ExpenseTrackerComponent from './practice/ExpenseTrackerComponent'
import CalcComponent from './practice/CalculatorComponent'
import TictactoeComponent from './practice/TictactoeComponent'
// import WeatherIndexComponent from './weatherapp/WeatherIndexComponent.js'
import ContactsComponent from './ContactsComponents/ContactsComponent'
import ShoppingHomeComponent from './ShoppingAPI/Components/ShoppingHomeComponent.js'

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
                    {/* <Route exact path="/weatherapp"><WeatherIndexComponent /></Route> */}
                    <Route exact path="/shopping/">
                        <ShoppingHomeComponent />
                    </Route>
                    <Route exact path="/ContactsComponent">
                        <ContactsComponent />
                    </Route>
                    {/* <Route exact path="*">
                        <Redirect>
                            <App />
                        </Redirect>
                    </Route> */}
                </Switch>
            </Router>
        </div>
    );
}