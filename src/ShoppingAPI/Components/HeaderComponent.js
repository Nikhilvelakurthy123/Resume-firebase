import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function HeaderComponent() {

    const [show, setShow] = useState(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  text-dark ">
                <Link className="nav-link text-dark" to="/shopping/" ><b>E-Shopping </b></Link>
                {/* <div style={show ? { display: "block" } : { display: 'none' }} className={"collapse navbar-collapse"}>onClick={ this.toggleMenu } */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* </div> */}

                <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-dark" to="/shopping/" ><b>Home</b> <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link text-dark" to="/shopping/Counter"><b>Counter Component</b></Link>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-dark" href="/"><b>Resume</b></a>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link text-dark" to="/shopping/countdown"><b>Countdown Component</b></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link text-dark" to="/shopping/RandomUserComponent"><b>RandomUserComponent</b></Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                        */}
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
            <hr />
        </div>
    );
}

export default HeaderComponent;