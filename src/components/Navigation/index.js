import React from 'react'
import {Link} from "react-router-dom";

import logo from '../../icons8-suitcase-100.png'
import './style.css'
import {AuthContext} from "../ContextWrapper";

function Navigation({userD}) {
    const name = userD.username

    return <nav className="navbar-menu">
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="header-logo" className="header-logo"/>
            </Link>
        </div>
        <h2>Hodophile - "One who loves to travel"</h2>
        <AuthContext.Consumer>
            {
                value => (<div className="navbar">
                    <ul className="nav-links">
                        {
                            value.isLogged
                                ? <span>Hello, {name}! </span>
                                : undefined
                        }
                        {!value.isLogged && <Link to="/login" className="header-nav-link">Sign in</Link>}
                        {!value.isLogged && <Link to="/register" className="header-nav-link">Sign up</Link>}
                        {value.isLogged && <Link to="/logout" className="header-nav-link">Sign out</Link>}
                    </ul>
                </div>)
            }
        </AuthContext.Consumer>
    </nav>
}

export default Navigation
