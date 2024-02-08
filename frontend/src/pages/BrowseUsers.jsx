import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import { Button, Container, Row, Col, Breadcrumb, BreadcrumbItem} from 'react-bootstrap';

import Header from "../components/Header";
import ArtistList from "../components/Artist Comps/ArtistList";
import BusinessList from "../components/Business Comps/BusinessList";

function BrowseUsers(){

    const [viewArtists, setViewArtists] = useState(true)

    const handleViewArtistClick = (e) => setViewArtists(true)
    const handleViewBusinessClick = (e) => setViewArtists(false)

    return (
        <main>
            <Header/>
            <Container className="lists-container">
                <Breadcrumb>
                    <BreadcrumbItem onClick={handleViewArtistClick}>View Artists</BreadcrumbItem>
                    <BreadcrumbItem onClick={handleViewBusinessClick}>View Businesses</BreadcrumbItem>
                </Breadcrumb>
                {viewArtists ? (
                    <ArtistList/>
                ):(
                    <BusinessList/>
                )
                }
            </Container>
        </main>
    )

}

export default BrowseUsers;