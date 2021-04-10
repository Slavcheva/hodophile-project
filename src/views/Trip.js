import React from 'react';

function Post({imageUrl, imageAlt, destination,  children, author, postId}) {
    return <div className="Post">
        <img src={imageUrl} alt={imageAlt}/>
        <h5>{destination}</h5>
        <p className="description">{children}</p>
        <div>
            <span>
            <small>Author:</small>
                {author}
            </span>
        </div>
    </div>;
}

export default Post;