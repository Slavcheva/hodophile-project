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
                    {isLogged && <Link to="/create-trip">Create Trip Note</Link>}
                    {isLogged && <Link to="/profile">Profile</Link>}
                </p>
            </div>
            <p>Това е място за всички завладени от магията на пътешествията.
               Тук може да прочетете кратки статии и пътеписи, свързани с пътувания из целия свят.
               Нямаме за цел да предоставяме изчерпателни подробности, а по-скоро – да споделяме лични впечатления и най-общи идеи за някои интересни дестинации.
                Ако искате да разкажете за вашето пътешествие, регистрирайте се и опишете интересните места, които сте посетили...
            </p>
        </div>
    </main>
}
export default Home

