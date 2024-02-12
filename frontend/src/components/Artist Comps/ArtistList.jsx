import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";
import { Button, Row, Container} from 'react-bootstrap';
import ArtistCard from "./ArtistCard";

function ArtistList({ viewArtistProfile }){

    const [artists, setArtists] = useState([])

    // function renderArtists(){

    useEffect(() => {
        fetch('/api/artists')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setArtists(data);
        })
    },[])

        
    

    const allArtists = artists.map(artist => 
        <ArtistCard
            key={artist.id}
            artist={artist}
            viewArtistProfile={viewArtistProfile}
        />)

    return (
        <div className="artists-container">
            {allArtists}
        </div>

    )
}

export default ArtistList;