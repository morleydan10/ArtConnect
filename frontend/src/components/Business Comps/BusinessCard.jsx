import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";


function BusinessCard ({ business, viewBusinessProfile }) {

    

    // const navigate = useNavigate();
    
    // need to figure out how to view profile
    // const handleClickBusiness = (e) => navigate('')

    return(
        <div class="card">
        <img src={business.profile_pic_url} class="card-img-top" alt="Business Picture"/>
        <div class="card-body">
            <h5 class="card-title">{business.name}</h5>
            <div class="container">
                <button onClick={() => viewBusinessProfile(business)}>View Profile</button>
                </div>
            </div>
        </div>
        // <Card className="card">
        //     <Card.Img src={business.profile_pic_url} className="card-img-top" alt="Business Picture"/>
        //     <Card.Body className="card-body">
        //         <Card.Title className="card-title">{business.name}</Card.Title>
        //         <Container>
        //             <Button href="#" className="btn btn-primary" onClick={() => handleViewBusinessProfile(business) }>View Profile</Button>
        //         </Container>
        //     </Card.Body>
        // </Card>
    )
}

export default BusinessCard;