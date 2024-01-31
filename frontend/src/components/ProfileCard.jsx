import React, { useEffect, useState } from "react";
import { useUser } from "../UserContext";


function ProfileCard() {

    // Add settings page?

    const { user } = useUser()
    const [newPhone, setNewPhone] = useState('')
    const [newEmail, setNewEmail] = useState('')

    return(
        <div className="profile-card">
            <h1>My Profile</h1>
            <button>Edit contact information</button>
                <h2 id='profile-name'>{user.name}</h2>
                <img className='profile-pic'  alt='Profile Picture' src={user.profile_pic_url}></img>
                <h3>{user.phone_number}</h3>
                <h3>{user.email}</h3>
        </div>
    )
}

export default ProfileCard;