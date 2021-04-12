import React from 'react'
import './style.css'
import Post from "../../views/Trip";
import postService from "../../services/post-service";


const Posts = () => {
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
                        <Post key={post._id} imageUrl={post.imageUrl} imageAlt="alt" postId={post.postId}
                              author={post.author} destination={post.destination}>{post.description}</Post>)}
                </div> : <div>Loading...</div>
            }
    </div>;
};

export default Posts