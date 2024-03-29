import React from 'react'

import './style.css'
import postService from "../../services/post-service";
import DestinationCard from "../../components/DestinationCard";

const Destinations = () => {
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        postService.load(null).then(posts => {
            setPosts(posts);
        });
    }, []);

    return <div className='container'>
        <h2>Destinations</h2>
        {posts ?
            <div className='destinations'>
                {posts.reverse().map((post) =>
                    <DestinationCard key={post._id} {...post}>
                        {post.description}
                    </DestinationCard>)}
            </div> : <div>Loading...</div>
        }
    </div>;
};

export default Destinations