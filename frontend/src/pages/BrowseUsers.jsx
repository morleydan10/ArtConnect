import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

import Header from "../components/Header";
import ArtistList from "../components/Artist Comps/ArtistList";
import BusinessList from "../components/Business Comps/BusinessList";
import ViewBusinessProfile from "./Business-Pages/ViewBusinessProfile";
import ViewArtistProfile from "./Artist-Pages/ViewArtistProfile";

function BrowseUsers(){

    const navigate = useNavigate();

    const [viewArtists, setViewArtists] = useState(true)

    const [selectedArtist, setSelectedArtist] = useState(null)
    const [selectedBusiness, setSelectedBusiness] = useState(null)

    const handleViewArtistsClick = (e) => setViewArtists(true)
    const handleViewBusinessesClick = (e) => setViewArtists(false)

    function viewBusinessProfile(business){
        setSelectedBusiness(business);
        navigate(`/ViewBusinessProfile/${business.id}}`)
    }


    function viewArtistProfile(artist){
        console.log('Clicked');
        setSelectedArtist(artist);
        navigate(`/ViewArtistProfile/${artist.id}}`)
    }



    return (
        <main>
            <Header/>
                <div className="view-tabs-div">
                    <a className="tabs-text" onClick={handleViewArtistsClick}>View Artists</a>
                    <p className="tabs-text">/</p>
                    <a className="tabs-text" onClick={handleViewBusinessesClick}>View Businesses</a>
                </div>
                <div className="lists-container">
                {viewArtists ? (
                    <ArtistList viewArtistProfile={viewArtistProfile}/>
                ):(
                    <BusinessList viewBusinessProfile={viewBusinessProfile}/>
                )
                }
                
            </div>
        </main>
    )

}

export default BrowseUsers;