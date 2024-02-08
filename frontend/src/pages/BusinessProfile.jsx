import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../UserContext";
import YourRequestsTable from "../components/Business Comps/YourRequestsTable";

import Header from "../components/Header";
import NewRequest from "../components/Artist Comps/NewRequest";

function BusinessProfile () {

    const {businessUser, requests, setRequests} = useUser()
    const [showForm, setShowForm] = useState(false)

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
        
        function handleShowForm (e){

            e.preventDefault();
            setShowForm(!showForm)
        }


    return (
        <main>
            <Header />
            <div className="business-profile-div">
                <h1>My Profile</h1>
                <h2 id='business-profile-name'>{businessUser.name}</h2>
                <img className='profile-pic'  alt='Profile Picture' src={businessUser.profile_pic_url}></img>
                <h3>{businessUser.city}</h3>
                <h3>{businessUser.phone_number}</h3>
                <h3>{businessUser.email}</h3>
                {/* src={user.profile_pic_url} */}
            </div>
            {/* requests table */}
            <button onClick={handleShowForm}>{ showForm ? ('Cancel') : ('Create New Request')}</button>
            { showForm ? (
            <NewRequest postNewRequest={postNewRequest} />
            ) : (
            <YourRequestsTable />
            )}
            
        </main>
    )
};

export default BusinessProfile;