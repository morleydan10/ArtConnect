import React, { useState, useEffect} from "react";


function BusinessCard ({ business, viewBusinessProfile }) {


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
    )
}

export default BusinessCard;