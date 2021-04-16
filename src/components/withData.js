// import React, {Fragment} from "react";
// import TripCard from "./TripCard";
//
// export default function withData(Comp, initialState, service) {
//     return class extends React.Component {
//         state = {
//             data: null,
//             service: ''
//         }
//
//         componentDidMount() {
//             service.load().then(data => {
//                 this.setState({data});
//             });
//         }
//
//
//         getAllUsers = (data, name) => {
//             return <div>
//                 {data ?
//                     <div>
//                         {data.filter(user => user.username === name)
//                             .map((user) =>
//                                 <Fragment>
//                                     <p>
//                                         <span>Username:</span>
//                                         <div>{user._id}</div>
//                                     </p>
//                                     <p>
//                                         <span>Posts: </span>
//                                     </p>
//
//                                 </Fragment>
//                             )}            </div> : <div>Loading...</div>
//                 }
//             </div>;
//         }
//         getAllPosts = (data, id) => {
//             return <div>
//                 {data ?
//                     <div>
//                         {data.filter(e => e._id === id)
//                             .map((post) =>
//                                 <TripCard key={post._id} {...post}>
//                                     {post.description}
//                                 </TripCard>)}
//                     </div> : <div>Loading...</div>
//                 }
//             </div>;
//         }
//
//
//         render() {
//
//             return <Comp {...this.props} getAllUsers={this.getAllUsers}
//                          getAllPosts={this.getAllPosts} />
//         }
//     }
// }
