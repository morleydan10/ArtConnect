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

    const [openViewProf, setOpenViewProf] = useState(false)
    const [selectedBusiness, setSelectedBusiness] = useState(null)

    const handleViewArtistsClick = (e) => setViewArtists(true)
    const handleViewBusinessesClick = (e) => setViewArtists(false)

    function handleViewBusinessProfile(business){

        setSelectedBusiness(business);
        setOpenViewProf(true);
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
                    <BusinessList handleViewBusinessProfile={handleViewBusinessProfile}/>
                    <ViewBusinessProfile 
                        trigger={openViewProf} 
                        setTrigger={setOpenViewProf}
                        setOpenViewProf={setOpenViewProf}
                        business={selectedBusiness}
                    />
                </>
                )
                }
                
            </div>
        </main>
    )

}

export default BrowseUsers;