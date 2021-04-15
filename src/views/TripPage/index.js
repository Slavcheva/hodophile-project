import React from 'react'
import postService from "../../services/post-service";
import TripCard from "../TripCard";

const TripPage = (props) => {
    const id = props.match.params.id

    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        postService.load(null).then(posts => {
            setPosts(posts);
        });
    }, []);

    return <div>
        {posts ?
            <div>
                {posts.filter(e => e._id === id)
                    .map((post) =>
                        <TripCard key={post._id} {...post}>
                            {post.description}
                        </TripCard>)}
            </div> : <div>Loading...</div>
        }
    </div>;
};
export default TripPage
