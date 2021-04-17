import React from 'react';

import './style.css'
import {Link} from "react-router-dom";

function DestinationCard({...trip}) {

    return <div className="card-wrapper">
        <div className='card-container'>
            <Link to={`/trip/${trip._id}`}>
                <h5 className='card-header'>{trip.destination}</h5>
                <div>
                <img src={trip.imageUrl} alt={trip.imageAlt}/>
                </div>
                <span className='card-author'><small>Author: </small>{trip.author}</span>
            </Link>
        </div>
    </div>;
}


export default DestinationCard;