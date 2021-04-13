import React from 'react';
import './style.css'

function Post({imageUrl, imageAlt, destination,  children, author, postId}) {
    return <div className="post-wrapper">
        <div className='post'>
        <h5>{destination}</h5>
        <img src={imageUrl} alt={imageAlt}/>
        <p className="description">{children}</p>
            <span>
            <small>Author:</small>
                {author}
            </span>
        </div>
    </div>;
}

export default Post;