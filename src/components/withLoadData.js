// import React, {Fragment} from "react";
// import postService from "../../services/post-service";
// import userService from "../../services/user-service";
// import TripCard from "./TripCard";
//
// const WithLoadData = (Comp, props, {userD}) => {
//     // // const id = props.match.params.id
//     // const id = props.match.params.id
//     // const name = userD.username
//     // console.log(name);
//
//     const [users, setUsers] = React.useState(null);
//     const [posts, setPosts] = React.useState(null);
//
//     React.useEffect(() => {
//         userService.load(null).then(users => {
//             setUsers(users);
//         });
//     }, []);
//
//
//     React.useEffect(() => {
//         postService.load(null).then(posts => {
//             setPosts(posts);
//         });
//     }, []);
//
//
//     const getAllUsers = (users, name) => {
//         return <div>
//             {users ?
//                 <div>
//                     {users.filter(user => user.username === name)
//                         .map((user) =>
//                             <Fragment>
//                                 <p>
//                                     <span>Username:</span>
//                                     <div>{user._id}</div>
//                                 </p>
//                                 <p>
//                                     <span>Posts: </span>
//                                 </p>
//
//                             </Fragment>
//                         )}            </div> : <div>Loading...</div>
//             }
//         </div>;
//     }
//     const getAllPosts = (posts, id) =>{
//         return <div>
//             {posts ?
//                 <div>
//                     {posts.filter(e => e._id === id)
//                         .map((post) =>
//                             <TripCard key={post._id} {...post}>
//                                 {post.description}
//                             </TripCard>)}
//                 </div> : <div>Loading...</div>
//             }
//         </div>;
//     }
//
//     return <Comp {...props} getAllPost={getAllPost} getAllUsers={getAllUsers}/>
// };
//
// export default WithLoadData