// import React, {Fragment} from "react";
// import postService from "../services/post-service";
// import DestinationCard from "../views/DestinationCard";
//
// const PostsLoad = () => {
//     const [posts, setPosts] = React.useState(null);
//
//     React.useEffect(() => {
//         postService.load(null).then(posts => {
//             setPosts(posts);
//         });
//     }, []);
//
//
//     return <div className='container'>
//         {posts ?
//             <div>
//                 {renderCards(posts)}
//             </div> : <div>Loading...</div>
//         }
//     </div>;
// };
// const renderCards = (posts) => {
//     return posts.map(post => {
//         return (
//             <Fragment>
//                 <DestinationCard key={post._id} {...post} />
//             </Fragment>
//         )
//     })
// }
// export default PostsLoad()