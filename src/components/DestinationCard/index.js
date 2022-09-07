import React from 'react';

import './style.css'
import {Link} from "react-router-dom";

function DestinationCard({...trip}) {

    return <div className='destinationCard'>
            <Link to={`/trip/${trip._id}`}>
                <div className='card-header'>{trip.destination}</div>
                <div>
                <img src={trip.imageUrl} alt={trip.destination}/>
                </div>
            </Link>
        <span className='card-author'><small>Author: </small>{trip.author}</span>
    </div>;
}


export default DestinationCard;