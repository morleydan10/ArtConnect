import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

function ArtistCard ({ artist, viewArtistProfile }) {


    return(
        <div className="card">
                <img src={artist.profile_pic_url} className="card-img" alt="Artist Picture"/>
                <div className="card-body">
                    <h3 className="card-title">{artist.name}</h3>
                    <h4 className="card-subtitle">{artist.city}</h4>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <button onClick={() => viewArtistProfile(artist)}>View Profile</button>
                </div>
        </div>
    )
}

export default ArtistCard;