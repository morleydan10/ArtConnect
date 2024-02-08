import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";
import { Button, Card} from 'react-bootstrap';

function ArtistCard ({ artist, viewArtistProfile }) {


    return(
        <Card className="card">
                <Card.Img src={artist.profile_pic_url} className="card-img-top" alt="Artist Picture"/>
                <Card.Body className="card-body">
                    <Card.Title className="card-title">{artist.name}</Card.Title>
                    <Card.Subtitle className="card-subtitle">{artist.city}</Card.Subtitle>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <Button href="#" className="btn btn-primary" onClick={() => viewArtistProfile(artist)}>View Profile</Button>
                </Card.Body>
        </Card>
    )
}

export default ArtistCard;