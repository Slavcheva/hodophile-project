import React from 'react'
import {Link} from "react-router-dom";


function Navigation() {
    return <div>

        <nav className="nav">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <p>Logo</p>
                        {/*<img src={logo} alt="header-logo" className="header-logo"/>*/}
                    </Link>
                </div>
                <div className="main_list">
                    <ul className="nav-links">
                        <Link to="/login" className="header-nav-link">Sign in</Link>
                        <Link to="/register" className="header-nav-link">Sign up</Link>
                        <Link to="/profile" className="header-nav-link">Profile</Link>
                    </ul>
                </div>
                <br/>
                <div className="main_list">
                    <ul className="nav-links">
                        <Link to="/trips" className="nav-link">Пътеписи</Link>
                        <Link to="/destinations" className="nav-link">Дестинации</Link>
                        <Link to="/create-trip" className="nav-link">Създайте пътепис</Link>
                    </ul>
                </div>
            </div>
        </nav>

        {/*<section className="home">*/}
        {/*</section>*/}
        {/*    <div>*/}
        {/*        <p className="myP">*/}
        {/*            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam*/}
        {/*            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam*/}
        {/*        </p>*/}
        {/*    </div>*/}
    </div>
}

export default Navigation
