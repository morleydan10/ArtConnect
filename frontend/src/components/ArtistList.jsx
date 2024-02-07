import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import { Button, Container} from 'react-bootstrap';
import ArtistCard from "./ArtistCard";

function ArtistList(){

    const [artists, setArtists] = useState([])

    function renderArtists(){

        fetch('/api/artists')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setArtists(data);
        })
    }

    const allArtists = artists.map(artist => <ArtistCard artist={artist}/>)

    return (
        <Container className="artists-container">
            <Row>
                {allArtists}
            </Row>
        </Container>

    )
}

export default ArtistList;