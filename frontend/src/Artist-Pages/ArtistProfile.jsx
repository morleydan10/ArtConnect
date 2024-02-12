import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../UserContext";

import Header from "../components/Header";
import CWList from "../components/Artist Comps/CWList";
import AddCWForm from "../components/Artist Comps/AddCWForm";

function ArtistProfile () {

    const {artistUser} = useUser()
    const [showAddForm, setShowAddForm] = useState(false)

    function postNewCW(newCW){

        fetch('/api/creative_works', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCW)
        })
        .then((res) => {
            if (res.ok) {
                res.json().then((newCW) => setWorks([...works, newCW]))
            } else {
                console.log("POST is not working")
            }})
    }

    return (
        <main>
            <Header />
            <div className="artist-profile-div">
                <h1>My Profile</h1>
                <h2 id='profile-name'>{artistUser.name}</h2>
                <img className='profile-pic'  alt='Profile Picture' src={artistUser.profile_pic_url}/>
                <h3>{artistUser.city}</h3>
                <h3>{artistUser.phone_number}</h3>
                <h3>{artistUser.email}</h3>
                {/* src={user.profile_pic_url} */}
            </div>
            <h2 className="portfolio-header">Your Portfolio</h2>
            <button onClick={(e) => setShowAddForm(true)}>Add to Portfolio</button>
            {showAddForm ? (
            <AddCWForm postNewCW={postNewCW}/>
            ):(
            <CWList />
            )}
        </main>
    )
}

export default ArtistProfile;