import React from 'react'
import './style.css'
import postService from "../../services/post-service";
import Destination from "../Destination";
import Post from "../Trip";


const Destinations = () => {
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        postService.load(null).then(posts => {
            setPosts(posts);
        });
    }, []);

    return <div className='container'>
        {posts ?
            <div>
                {posts.map((post) =>
                    <Destination key={post._id} imageUrl={post.imageUrl} imageAlt="alt" postId={post.postId}
                          destination={post.destination}/>)}
            </div> : <div>Loading...</div>
        }
    </div>;
};
export default Destinations