import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

import Header from "../components/Header";

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

            {/* IMPLEMENT CAROUSEL */}

            <section className="homepage-carousel">
                <ol className="carousel-viewport">
                    {/* GET STARTED PAGE */}
                    <li id="get-started-slide"
                        tabIndex={0}
                        className="carousel-slide"
                    >
                        <p>Welcome to our platform for connecting artists and businesses!</p>
                        <p>Finish setting up your profile now!</p>
                        {artistUser ? (
                                <NavLink to="/ArtistProfile">
                                    <a to="/ArtistProfile" className="get-started-button">
                                    Get Started
                                    </a>
                                </NavLink>
                            ):(
                                <NavLink to="/BusinessProfile">
                                    <a to="/BusinessProfile" className="get-started-button">
                                        Get Started
                                    </a>
                                </NavLink>
                            )
                        }
                        <div className="carousel-snapper">
                            <a href="#features-3" className="carousel_prev">Go to last slide</a>
                            <a href="#features-1" className="carousel_next">Go to next slide</a>
                        </div>
                    </li>
                    <li id='features-1'
                        tabindex={1}
                        className="carousel-slide"
                    >
                        <div className="feature">
                            <h2 className="homepage-feature-header">Connect and Collaborate</h2>
                            <p>Connect with artists and start creative collaborations.</p>
                        </div>
                        <div className="carousel-snapper">
                            <a href="#get-started-slide" className="carousel_prev">Go to last slide</a>
                            <a href="#features-2" className="carousel_next">Go to next slide</a>
                        </div>
                    </li>
                    <li id='features-2'
                        tabindex={2}
                        className="carousel-slide"
                    >
                        <div className="feature">
                            <h2 className="homepage-feature-header">Find Artists</h2>
                            <p>Discover talented artists right in your neighborhood.</p>
                        </div>
                        <div className="carousel-snapper">
                            <a href="#features-1" className="carousel_prev">Go to last slide</a>
                            <a href="#features-3" className="carousel_next">Go to next slide</a>
                        </div>
                    </li>
                    <li id='features-3'
                        tabindex={3}
                        className="carousel-slide"
                    >
                        <div className="feature">
                            <h2 className="homepage-feature-header">Post Requests</h2>
                            <p>Businesses can post creative work requests.</p>
                        </div>
                        <div className="carousel-snapper">
                            <a href="#features-2" className="carousel_prev">Go to last slide</a>
                            <a href="#get-started-slide" className="carousel_next">Go to next slide</a>
                        </div>
                    </li>
                    
                </ol>
            </section>


            
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
