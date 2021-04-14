import React from 'react';
import './style.css'
import userService from "../../services/user-service";

// function TripCard ({imageUrl, imageAlt, destination,  children,author,userD, id}) {
function TripCard({imageUrl, imageAlt, destination, children, author, userD, id}) {
    // console.log(author);

    // const [users, setUsers] = React.useState(null);
    //
    // React.useEffect(() => {
    //     userService.load(null).then(users => {
    //         setUsers(users);
    //     });
    // }, []);

    // let name = users.find(e => e._id === author)

    return <div className="tripCard-wrapper">

        <div className='tripCard'>
            <h5>{destination}</h5>
            <img src={imageUrl} alt={imageAlt}/>
            <p className="description">{children}</p>
            <span>
            <small>Author:</small>
                {author}
            </span>
        </div>
    </div>;

}

export default TripCard;