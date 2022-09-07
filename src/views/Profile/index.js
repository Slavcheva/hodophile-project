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
    console.log(posts);

    // let filteredPosts = posts.filter(post => post.author === name);

    return <div>
        {posts?(
            <div>
                <h2>Your posts: </h2>
                {posts.filter(post => post.author === name)
                    .reverse()
                    .map((post) =>
                        <TripCard key={post._id} {...post}>
                            {post.description}
                        </TripCard>
                    )}
            </div> ): (<h2>You haven't posts yet!</h2>)
        }
    </div>;
};

export default Profile

