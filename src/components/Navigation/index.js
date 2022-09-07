import React from 'react'
import {Link} from "react-router-dom";

import logo from '../../icons8-suitcase-100.png'
import './style.css'
import {AuthContext} from "../ContextWrapper";

function Navigation({userD}) {
    const name = userD.username

    return <nav className="navbar-menu">
            <Link to="/" className="nav-logo">
                <img src={logo} alt="header-logo"/>
                <p>Hodophiles</p>
            </Link>

        <AuthContext.Consumer>
            {
                value => (
                        <ul className="nav-links">
                            {
                                value.isLogged
                                    ? <span>Hello, {name}! </span>
                                    : undefined
                            }
                            {!value.isLogged && <Link to="/login" className="nav-link">Sign in</Link>}
                            {!value.isLogged && <Link to="/register" className="nav-link">Sign up</Link>}
                            {value.isLogged && <Link to="/logout" className="nav-link">Sign out</Link>}
                        </ul>
                )
            }
        </AuthContext.Consumer>
    </nav>
}

export default Navigation
