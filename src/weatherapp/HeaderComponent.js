import React, { Component } from "react"
import { Link } from 'react-router-dom'

export default class HeaderComponent extends Component {

    render() {
        return (
            <div>
                <header className="container-fluid">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark p-4 overflow-auto">
                        <div>
                            <Link to="/" className="navbar-brand">Weather</Link>
                        </div>
                        <ul className="navbar-nav navbar-collapse justify-content-end weather-home">
                            <Link className="nav-link " to="/">Home</Link>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}