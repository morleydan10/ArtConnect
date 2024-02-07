import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

import Header from "../components/Header";
import ArtistList from "../components/ArtistList";

function BrowseArtists(){

    const [viewArtists, setViewArtists] = useState(true)

    return (
        <main>
            <Header/>
            {viewArtists ? (
                <ArtistList/>
            ):(
                <div className="business-div">
                {/* business cards here */}
                </div>
            )
            }
        </main>
    )

}

export default BrowseArtists;