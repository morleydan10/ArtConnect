import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { Button, Card, Modal, Container} from 'react-bootstrap';

function ViewArtistProfile(props){

    const { artist } = props;
    const { closeArtistProfile} = props;
    const { openArtModal } = props;

    return( props.trigger ? (
        <div className="artist-profile-popup">
            <div className="artist-profile-inner">
                <button className="close-button" onClick={closeArtistProfile}>❌</button>
                <h1 className='profile-name'>{artist.name}</h1>
                <img className='profile-pic' alt='Profile Picture' src={artist.profile_pic_url}></img>
                <h2>Contact Info:</h2>
                <h3>{artist.city}</h3>
                <h3>{artist.phone_number}</h3>
                <h3>{artist.email}</h3>
            </div>
        </div>
    ):('')
    )
}

export default ViewArtistProfile;