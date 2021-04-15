import React from 'react';
import './style.css'

function TripCard({imageUrl, imageAlt, destination, children, author, _id}) {

    return <div className="tripCard-wrapper">

        <div className='tripCard'>
            <h5>{destination}</h5>
            <img src={imageUrl} alt={imageAlt}/>
            <p className="description">{children}</p>
            <span>
            <small>Author: </small>
                {author}
            </span>
        </div>
    </div>;
}

export default TripCard;