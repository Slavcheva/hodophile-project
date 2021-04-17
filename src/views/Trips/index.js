import React from 'react'

import './style.css'
import TripCard from "../../components/TripCard";
import postService from "../../services/post-service";


const Trips = () => {
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        postService.load(null).then(posts => {
            setPosts(posts);
        });
    }, []);

    return <div>
        {posts ?
            <div>
                {posts.reverse().map((post) =>
                    <TripCard key={post._id} {...post}>
                        {post.description}
                    </TripCard>)}
            </div> : <div>Loading...</div>
        }
    </div>;
};

export default Trips