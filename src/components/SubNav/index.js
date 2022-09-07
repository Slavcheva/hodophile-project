import React from 'react'
import {Link} from "react-router-dom";
import './style.css'
import {AuthContext} from "../ContextWrapper";

function SubNav() {

    return <AuthContext.Consumer>
        {
            value => (
                <div className="sub-nav-wrapper">
                    <ul className='sub-nav'>
                            <Link to="/destinations">Destinations</Link>
                            <Link to="/trips">All Trip Notes</Link>
                            {value.isLogged && <Link to="/create-trip">Create Trip Note</Link>}
                            {value.isLogged && <Link to="/profile">My Trip Notes</Link>}
                    </ul>
                </div>
            )
        }
    </AuthContext.Consumer>
}

export default SubNav
