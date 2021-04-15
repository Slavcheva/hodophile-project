import React from 'react'
import './style.css'
import TripCard from "../../views/TripCard";
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
                {posts.map((post) =>
                    <TripCard key={post._id} {...post}>
                        {post.description}
                    </TripCard>)}
            </div> : <div>Loading...</div>
        }

    </div>;
};

export default Trips