import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";


function BusinessCard ({ business, viewBusinessProfile }) {

    

    // const navigate = useNavigate();
    
    // need to figure out how to view profile
    // const handleClickBusiness = (e) => navigate('')

    return(
        <div className="card">
            <div className='card-img-div'>
                <img src={business.profile_pic_url} className="card-img" alt="Business Picture"/>
            </div>
        <div className="card-body">
                <h2 className="card-title">{business.name}</h2>
                <h4 className="card-subtitle">{business.city}</h4>
                <h4 className="card-subtitle">{business.type}</h4>
                <button className="view-button" onClick={() => viewBusinessProfile(business)}>View Profile</button>
                
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