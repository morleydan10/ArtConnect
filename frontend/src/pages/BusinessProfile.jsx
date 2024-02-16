"use client";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../UserContext";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";


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
        };

    const position = { lat: 40.708824030640926,  lng: -73.83027974001327}


    console.log(import.meta.env.VITE_BUSINESS_PROFILE_MAP_ID)


    return (
        <main>
            <Header />
            <div className="profile-div">
                <h1 className="profile-header">Your Profile</h1>
                <div className="profile-body">
                    <div className='profile-name-image-div'>
                        <div className="profile-pic-div">
                            <img className='profile-pic'  alt='Profile Picture' src={businessUser.profile_pic_url ? businessUser.profile_pic_url : ('https://searchengineland.com/wp-content/seloads/2015/07/small-business-shops-ss-1920.jpg')}/>
                        </div>
                        <h2 className='profile-name'>{businessUser.name}</h2>
                        <h3>Date Joined: {businessUser.date_joined}</h3>
                    </div>
                    <div className="contact-info-div">
                        <h2 className="contact-info-header">Contact Information</h2>
                        <h3>{businessUser.city}</h3>
                        <h3>{businessUser.type}</h3>
                        <h3>{businessUser.phone_number}</h3>
                        <h3>{businessUser.email}</h3>
                    </div>
                    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_PUBLIC_KEY}>
                        <div className="map-div">
                            <Map zoom={16} center={position} mapID={import.meta.env.VITE_BUSINESS_PROFILE_MAP_ID}>
                                <AdvancedMarker position={position}>
                                    <Pin 
                                        background={"navy blue"}
                                        borderColor={"teal"}
                                        glyphColor={"white"}/>
                                </AdvancedMarker>
                            </Map>
                        </div>
                    </APIProvider>
                </div>
            </div>
            <div className="your-request-div">
                <div className="your-requests-table-header-div">
                    <h2 className="requests-table-header">Requests</h2>
                </div>
                { showForm ? (
                <NewRequest postNewRequest={postNewRequest} setShowForm={setShowForm} />
                ) : (
                    <>
                        <button className="new-request-button" onClick={handleShowForm}>Create New Request</button>
                        <YourRequestsTable />
                    </>
                )}
            </div>
        </main>
    )
};

export default BusinessProfile;