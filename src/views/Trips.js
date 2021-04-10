import React from 'react'
import Post from "../views/Trip";
import postService from "../services/post-service";

// const Posts = () => {
//     const [posts, setPosts] = React.useState(null);
//
//     React.useEffect(() => {
//         postService.load(null).then(posts => {
//             setPosts(posts);
//         });
//     }, []);
//
//     return <div>
//         {posts ?
//             <div className="Posts">
//                 {posts.map((post) =>
//                     <Post key={post._id} imageUrl="/logo192.png" imageAlt="alt"
//                           author={post.userId}>{post.body}</Post>)}
//             </div> : <div>Loading...</div>
//         }
//     </div>;
// };

class Posts extends React.Component {
    state = {
        posts: null
    };
    textInput = null;

    componentDidMount() {
        postService.load().then(posts => {
            this.setState({posts});
        });
    }

    inputChangeHandler = (e) => {
        console.log(e.target.value);
    }

    render() {
        const {posts} = this.state;

        return <div>
            {posts ?
                <div>
                    {posts.map((post) =>
                        <Post key={post._id} imageUrl={post.imageUrl} imageAlt="alt" postId={post.postId}
                              author={post.author} destination={post.destination}>{post.description}</Post>)}
                </div> : <div>Loading...</div>
            }
        </div>
    }
}
export default Posts