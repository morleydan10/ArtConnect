import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import { Button, Container, Row, Col, Breadcrumb, BreadcrumbItem} from 'react-bootstrap';

import Header from "../components/Header";
import ArtistList from "../components/Artist Comps/ArtistList";
import BusinessList from "../components/Business Comps/BusinessList";
import ViewBusinessProfile from "../components/ViewBusinessProfile";

function BrowseUsers(){

    const [viewArtists, setViewArtists] = useState(true)

    const [openBusModal, setOpenBusModal] = useState(false)
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


    return (
        <main>
            <Header/>
            <div className="lists-container">
                <Breadcrumb>
                    <BreadcrumbItem onClick={handleViewArtistsClick}>View Artists</BreadcrumbItem>
                    <BreadcrumbItem onClick={handleViewBusinessesClick}>View Businesses</BreadcrumbItem>
                </Breadcrumb>
                {viewArtists ? (
                    <ArtistList/>
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