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
            <div className="profile-div">
                <h1 className="profile-header">Your Profile</h1>
                <div className="profile-body">
                    <div className='profile-name-image-div'>
                        <div className="profile-pic-div">
                            <img className='profile-pic' alt='Profile Picture' src={artistUser.profile_pic_url ? (artistUser.profile_pic_url):('https://m.media-amazon.com/images/I/81fd1B3HUWL.jpg')}/>
                        </div>
                        <h2 className='profile-name'>{artistUser.name}</h2>
                        <h3>Date Joined: {artistUser.date_joined}</h3>
                    </div>
                    <div className="contact-info-div">
                        <h2 className="contact-info-header">Contact Information</h2>
                        <h3>{artistUser.city}</h3>
                        <h3>{artistUser.type}</h3>
                        <h3>{artistUser.phone_number}</h3>
                        <h3>{artistUser.email}</h3>
                    </div> 
                    {/* src={user.profile_pic_url} */}
                </div>
            </div>
            <div className="your-portfolio-div">
                <h2 className="portfolio-header">Your Portfolio</h2>
                <button onClick={(e) => setShowAddForm(true)}>Add to Portfolio</button>
                {showAddForm ? (
                <AddCWForm postNewCW={postNewCW}/>
                ):(
                <CWList />
                )}
            </div>
        </main>
    )
}

export default ArtistProfile;