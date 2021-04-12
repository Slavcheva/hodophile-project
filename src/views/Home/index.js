import React from 'react'
import './style.css'
import {Link} from "react-router-dom";

const Home = ({isLogged}) => {
    return <main>
        <div className="welcome-wrapper">
            <div className='welcome'>
                <p>
                    <Link to="/destinations">Destinations</Link>
                    <Link to="/trips">Trip Notes</Link>
                    {isLogged && <Link to="/profile">Profile</Link>}
                    {isLogged && <Link to="/create-trip">Create Trip Note</Link>}
                </p>
            </div>
            <p>Това е място за всички завладени от магията на пътешествията.</p>
        </div>
    </main>
}
export default Home

