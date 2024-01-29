import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../UserContext";

import Header from "../components/Header";
import CwTable from "../components/CwTable";

function ArtistProfile () {

    const {user, setUser} = useUser()

    // const [user, setUser] = useState('')

    // useEffect(() => {
    //     fetch(`http://127.0.0.1:5555/api/creative_works/${id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setUser(data)
    //     })
    // }, [])

    

    return (
        <main>
            <Header />
            <div className="artist-profile-div">
                <h1>My Profile</h1>
                <h2 id='artist-profile-name'></h2>
                <img id='profile pic'  alt='Profile Picture'></img>
                {/* src={user.profile_pic_url} */}
            </div>
            <CwTable />
        </main>
    )
}

export default ArtistProfile;