import React from 'react'
import {Link} from "react-router-dom";

import logo from '../../icons8-suitcase-100.png'
import './style.css'

function Navigation({isLogged, userD}) {
    const name = userD.username
    return <nav className="navbar-menu">
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="header-logo" className="header-logo"/>
            </Link>
        </div>
        <h2>Hodophile - "One who loves to travel"</h2>
        <div className="navbar">
            <ul className="nav-links">
                {
                    isLogged
                        ? <span>Hello, {name}! </span>
                        : undefined
                }
                {!isLogged && <Link to="/login" className="header-nav-link">Sign in</Link>}
                {!isLogged && <Link to="/register" className="header-nav-link">Sign up</Link>}
                {isLogged && <Link to="/logout" className="header-nav-link">Sign out</Link>}

            </ul>
        </div>
    </nav>
}

export default Navigation
