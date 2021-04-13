import React from 'react';
import './style.css'
import {Link} from "react-router-dom";

function Destination({imageUrl, imageAlt, destination, postId}) {
    return <div className="card-wrapper">
        <Link to='/trips/:id'>
            <div className='card-container'>
                <img src={imageUrl} alt={imageAlt}/>
                <h5 className='card-header'>{destination}</h5>
            </div>
        </Link>
    </div>;
}

export default Destination;