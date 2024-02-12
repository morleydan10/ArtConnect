import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import { Button, Container, Row, Col, Breadcrumb, BreadcrumbItem} from 'react-bootstrap';

import Header from "../components/Header";
import ArtistList from "../components/Artist Comps/ArtistList";
import BusinessList from "../components/Business Comps/BusinessList";
import ViewBusinessProfile from "../components/ViewBusinessProfile";
import ViewArtistProfile from "../components/ViewArtistProfile";

function BrowseUsers(){

    const [viewArtists, setViewArtists] = useState(true)

    const [openBusModal, setOpenBusModal] = useState(false)
    const [openArtModal, setOpenArtModal] = useState(false)
    const [selectedArtist, setSelectedArtist] = useState(null)
    const [selectedBusiness, setSelectedBusiness] = useState(null)

    const handleViewArtistsClick = (e) => setViewArtists(true)
    const handleViewBusinessesClick = (e) => setViewArtists(false)

    function viewBusinessProfile(business){
        setSelectedBusiness(business);
        setOpenBusModal(true);
    }

    function closeBusinessProfile(){
        setSelectedBusiness(null);
        setOpenBusModal(false)
    }

    function viewArtistProfile(artist){
        console.log('Clicked');
        setSelectedArtist(artist);
        setOpenArtModal(true);
    }

    function closeArtistProfile(){
        setSelectedArtist(null);
        setOpenArtModal(false)
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
                    <>
                    <ArtistList viewArtistProfile={viewArtistProfile}/>
                    <ViewArtistProfile
                        trigger={openArtModal}
                        setTrigger={setOpenArtModal}
                        artist={selectedArtist}
                        openArtModal={openArtModal}
                        closeArtistProfile={closeArtistProfile}
                    />
                    </>
                    
                ):( 
                <>
                    <BusinessList viewBusinessProfile={viewBusinessProfile}/>
                    <ViewBusinessProfile 
                        trigger={openBusModal} 
                        setTrigger={setOpenBusModal}
                        business={selectedBusiness}
                        closeBusinessProfile={closeBusinessProfile}
                    />
                </>
                )
                }
                
            </div>
        </main>
    )

}

export default BrowseUsers;