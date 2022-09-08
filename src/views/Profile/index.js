import React from 'react'
import postService from "../../services/post-service";
import TripCard from "../../components/TripCard";

const Profile = ({userD}) => {
    const name = userD.username
    let filteredPosts=[];

    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        postService.load(null).then(posts => {
            setPosts(posts);
        });
    }, []);

    if(posts){
        filteredPosts = posts.filter(post => post.author === name).reverse();
    }

    return <div>
        {filteredPosts.length?
            <div>
                <h2>Your posts: </h2>
                {filteredPosts.map((post) =>
                        <TripCard key={post._id} {...post}>
                            {post.description}
                        </TripCard>
                    )}
            </div> : <h2>No posts yet!</h2>
        }
    </div>;
};

export default Profile

