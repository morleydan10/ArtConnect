import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

function ArtistCard ({ artist, viewArtistProfile }) {


    return(
        <div className="card">
                <div className='card-img-div'>
                    <img src={artist.profile_pic_url} className="card-img" alt="Artist Picture"/>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{artist.name}</h2>
                    <h4 className="card-subtitle">{artist.city}</h4>
                    <h4 className="card-subtitle">{artist.type}</h4>
                    <button className="view-button" onClick={() => viewArtistProfile(artist)}>View Profile</button>
                </div>
        </div>
    )
}

export default ArtistCard;