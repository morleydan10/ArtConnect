import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";


function CarouselSlider({ artistUser }){

    const settings = {
        autoplaySpeed: 300,
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return(
        <Slider {...settings} className="slider">

            <div className="slider-slide">
                <h2 className="homepage-feature-header">Welcome to our platform for connecting artists and businesses!</h2>
                <p className="set-up-text">Finish setting up your profile now!</p>
                {artistUser ? (
                    <NavLink to="/ArtistProfile">
                        <button className="call-to-action">Get Started</button>
                    </NavLink>
                ):(
                    <NavLink to="/BusinessProfile">
                        <button className="call-to-action">Get Started</button>
                    </NavLink>
                )
                }
            </div>
            <div className="slider-slide">
                <h2 className="homepage-feature-header">Find Artists</h2>
                <p className="set-up-text">Discover talented artists right in your neighborhood.</p>
                <NavLink to="/BrowseUsers">
                    <button className="call-to-action">View Artists</button>
                </NavLink>
            </div>
            <div className="slider-slide">
                {artistUser ? (
                    <>
                        <h2 className="homepage-feature-header">Apply to Open Requests</h2>
                        <p className="set-up-text">Apply to open requests and get the ball rolling today</p>
                        <NavLink to="/OpenRequests">
                            <button className="call-to-action">View Open Requests</button>
                        </NavLink>
                    </>
                ):(
                    <>
                        <h2 className="homepage-feature-header">Post Requests</h2>
                        <p className="set-up-text">Businesses can post creative work requests.</p>
                        <NavLink to="/OpenRequests">
                            <a to="/OpenRequests" className="call-to-action">View Open Requests</a>
                        </NavLink>
                    </>
                )}
                
            </div>
        </Slider>

    )
}

export default CarouselSlider;