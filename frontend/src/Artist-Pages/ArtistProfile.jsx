import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../UserContext";

import Header from "../components/Header";
import CwTable from "../components/CwTable";

function ArtistProfile () {

    const {artistUser} = useUser()

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
                <h2 id='profile-name'>{artistUser.name}</h2>
                <img className='profile-pic'  alt='Profile Picture' src={artistUser.profile_pic_url}></img>
                <h3>{artistUser.city}</h3>
                <h3>{artistUser.phone_number}</h3>
                <h3>{artistUser.email}</h3>
                {/* src={user.profile_pic_url} */}
            </div>
            <div className="card">
                <img src={artistUser.profile_pic_url} className="card-img-top" alt=""/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
</div>
            <CwTable />
        </main>
    )
}

export default ArtistProfile;