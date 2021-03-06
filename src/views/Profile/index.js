import React from 'react'

import './style.css'
import postService from "../../services/post-service";
import TripCard from "../../components/TripCard";

const Profile = ({userD}) => {
    const name = userD.username

    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        postService.load(null).then(posts => {
            setPosts(posts);
        });
    }, []);

    return <div>
        <h2>Username: {name}</h2>
        <h2>Your posts: </h2>
        {posts ?
            <div>
                {posts.filter(post => post.author === name)
                    .reverse()
                    .map((post) =>
                            <TripCard key={post._id} {...post}>
                                {post.description}
                            </TripCard>
                    )}
            </div> : <div>Loading...</div>
        }
    </div>;
};

export default Profile

