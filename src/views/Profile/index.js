import React from 'react'
import './style.css'

const Profile = ({userD}) => {

    return <div>
        <p>
            <span>Username:</span>
            <div>{userD.username}</div>
        </p>

        <p>
            <span>Posts:</span>

        </p>
    </div>
}
export default Profile

