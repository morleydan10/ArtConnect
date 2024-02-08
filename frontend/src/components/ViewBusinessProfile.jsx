import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { Button, Card, Modal, Container} from 'react-bootstrap';


function ViewBusinessProfile(props) {

    const { business } = props;
    const { closeBusinessProfile } = props;



    return( (props.trigger)?(
        <div className="business-profile-popup">
            <div className="business-profile-inner">
            <button className="close-button" onClick={closeBusinessProfile}>❌</button>
                <h1 className='profile-name'>{business.name}</h1>
                <img className='profile-pic'  alt='Profile Picture' src={business.profile_pic_url}></img>
                <h2>Contact Info:</h2>
                <h3>{business.city}</h3>
                <h3>{business.phone_number}</h3>
                <h3>{business.email}</h3>

            </div>
        </div>
    ):('')
    )
}

export default ViewBusinessProfile;