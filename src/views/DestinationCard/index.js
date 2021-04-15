import React from 'react';
import './style.css'
import {Link} from "react-router-dom";

function DestinationCard({...trip}) {

    return <div className="card-wrapper">
        <Link to={`/trip/${trip._id}`}>
            <div className='card-container'>
                <h5 className='card-header'>{trip.destination}</h5>
                <img src={trip.imageUrl} alt={trip.imageAlt}/>
                <span><small>Author: </small>{trip.author}</span>
            </div>
        </Link>
    </div>;
}


export default DestinationCard;