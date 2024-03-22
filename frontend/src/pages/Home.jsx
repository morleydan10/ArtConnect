import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

import Header from "../components/Header";
import CarouselSlider from "../components/CarouselSlider";

function Home() {

    const {artistUser, setArtistUser, setBusinessUser, signedIn} = useUser()
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



    return signedIn ? (
        // ternary to if artist or if business
        <main>
            <Header />
            <div className="hero-section">
                <h1 className="homepage-title">ArtConnect</h1>
            </div>
            <CarouselSlider artistUser={artistUser}/>
            <br></br>
            <br/>
            <div className="testimonial-section">
                <h2 className="homepage-feature-header">What Our Users Say</h2>
                <p className="quote-person">Donna, Owner of ABC Cafe:</p>
                <i className="testimonial-quote">"I wanted a mural painted for my new cafe.  ArtConnect helped me find an artist 5 miuntes away! Now my cafe looks great and I have a new customer!"</i>
                <p className="quote-person">Hector, photographer: </p>
                <i className="testimonial-quote">I was having a difficult time finding work in the immediate area, but now with ArtConnect, I've found work as close as down the block!</i>
            </div>
        </main>
    ):(
        useEffect(() => 
        navigate('/')
        )
    )
}

export default Home;
