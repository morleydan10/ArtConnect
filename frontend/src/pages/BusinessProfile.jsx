import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../UserContext";

import Header from "../components/Header";
import NewRequest from "../components/NewRequest";

function BusinessProfile () {

    const {user, requests, setRequests} = useUser()

    // Post request for generate request
    function postNewRequest(newRequest) {

        fetch('/api/requests', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newRequest)
        })
        .then((res) => {
            if (res.ok) {
                res.json().then((newRequest) => setRequests([...requests, newRequest]))
            } else {
                console.log("POST is not working")
            }})
        }


    return (
        <main>
            <Header />
            <div className="business-profile-div">
                <h1>My Profile</h1>
                <h2 id='business-profile-name'>{user.name}</h2>
                <img className='profile-pic'  alt='Profile Picture' src={user.profile_pic_url}></img>
                {/* src={user.profile_pic_url} */}
            </div>
            {/* requests table */}
            <NewRequest postNewRequest={postNewRequest} />
        </main>
    )
};

export default BusinessProfile;