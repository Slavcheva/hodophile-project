import React from 'react'
import {Link} from "react-router-dom";

import logo from '../../icons8-suitcase-100.png'
import './style.css'

function Navigation({isLogged}) {
    return <nav className="navbar-menu">
        <div className="logo">
            <Link to="/">
                {/*<p>Logo</p>*/}
                <img src={logo} alt="header-logo" className="header-logo"/>
            </Link>
        </div>

        <h2>Hodophile - "One who loves to travel"</h2>
        <div className="navbar">
            <ul className="nav-links">
                {!isLogged && <Link to="/login" className="header-nav-link">Sign in</Link>}
                {!isLogged && <Link to="/register" className="header-nav-link">Sign up</Link>}
                {isLogged && <Link to="/logout" className="header-nav-link">Sign out</Link>}
            </ul>
        </div>
    </nav>

    {/*<section className="home">*/
    }
    {/*</section>*/
    }
    {/*    <div>*/
    }
    {/*        <p className="myP">*/
    }
    {/*            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam*/
    }
    {/*            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam*/
    }
    {/*        </p>*/
    }
    {/*    </div>*/
    }

}

export default Navigation
