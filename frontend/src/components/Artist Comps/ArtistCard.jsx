import React, { useState, useEffect} from "react";

function ArtistCard ({ artist, viewArtistProfile }) {


    return(
        <div className="card">
                <div className='card-img-div'>
                    <img src={artist.profile_pic_url ? (artist.profile_pic_url):('https://m.media-amazon.com/images/I/81fd1B3HUWL.jpg')} className="card-img" alt="Artist Picture"/>
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