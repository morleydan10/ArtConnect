import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";


function CarouselSlider({ artistUser }){

    const settings = {
        autoplaySpeed: 3000,
        dots: true,
        infinite: false,
        centerMode: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return(
        <Slider {...settings} className="slider">

            <div id="slider-slide-1">
                <p>Welcome to our platform for connecting artists and businesses!</p>
                <p>Finish setting up your profile now!</p>
                {artistUser ? (
                    <NavLink to="/ArtistProfile">
                        <a to="/ArtistProfile" className="get-started-button">Get Started</a>
                    </NavLink>
                ):(
                    <NavLink to="/BusinessProfile">
                        <a to="/BusinessProfile" className="get-started-button">Get Started</a>
                    </NavLink>
                )
                }
            </div>
            <div id="slider-slide-2">
                <h2 className="homepage-feature-header">Connect and Collaborate</h2>
                <p>Connect with artists and start creative collaborations.</p>
            </div>
            <div id="slider-slide-3">
                <h2 className="homepage-feature-header">Find Artists</h2>
                <p>Discover talented artists right in your neighborhood.</p>
            </div>
            <div id="slider-slide-4">
                <h2 className="homepage-feature-header">Post Requests</h2>
                <p>Businesses can post creative work requests.</p>
            </div>
        </Slider>

    )
}

export default CarouselSlider;