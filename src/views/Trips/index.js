import React from 'react'
import './style.css'
import TripCard from "../../views/TripCard";
import postService from "../../services/post-service";
import userService from "../../services/user-service";


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
                    // <TripCard key={post._id} imageUrl={post.imageUrl} imageAlt="alt" id={post._id} author={post.author} destination={post.destination}>
                    <TripCard key={post._id} {...post}>
                        {post.description}
                    </TripCard>)}
            </div> : <div>Loading...</div>
        }

    </div>;
};

export default Trips