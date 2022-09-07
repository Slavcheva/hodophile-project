import React from 'react';
import './style.css'

function TripCard({imageUrl, imageAlt, destination, children, author, _id}) {

    return <div className='tripCard'>
        <h3>{destination}</h3>
        <div className="card-img">
            <img src={imageUrl} alt={imageAlt}/>
        </div>
        <div className="card-content">
            <p>{children}</p>
            <span>
            <small>Author: </small>
                {author}
            </span>
        </div>
    </div>;
}

export default TripCard;