import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

import Header from "../components/Header";

function Home() {

    const {artistUser, setArtistUser, businessUser, setBusinessUser, getToken} = useUser()
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/api/check_artist_session')
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((user) => {
                console.log(user);
                if (user.user_type === 'artist') {
                    setArtistUser(user.user_data);
                }
            });
    }, [navigate, setArtistUser]);
    
    useEffect(() => {
        fetch('/api/check_business_session')
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((user) => {
                console.log(user);
                if (user.user_type === 'business') {
                    setBusinessUser(user.user_data);
                }
            });
    }, [navigate, setBusinessUser]);



    return(
        <main>
            <Header />

            <h1>This is the Homepage</h1>


        </main>
    )
}

export default Home;
