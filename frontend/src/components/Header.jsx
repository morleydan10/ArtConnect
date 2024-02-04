import React, {useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";


function Header () {

    const { artistUser, setArtistUser, businessUser, setBusinessUser} = useUser()
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (!artistUser) {
            
    //         navigate('/');
    //     }
    // }, [artistUser]);
    

    // ***********ARTIST LOGOUT**************

    function artistLogout() {
        fetch('/api/artist_logout', {
            method: "DELETE"
        })
        .then((res) => {
            console.log(res);
            if (res.ok) {
                setArtistUser(null);
            } else {
                throw new Error("Logout failed");
            }
        })
        .catch((error) => {
            console.error("Logout error:", error);
        });
    }
    


    // ***********BUSINESS LOGOUT************
    function businessLogout() {
        fetch('/api/business_logout', {
            method: "DELETE"
        })
        .then((res) => {
            console.log(res);
            if (res.ok) {
                setBusinessUser(null);
            } else {
                throw new Error("Logout failed");
            }
        })
        .catch((error) => {
            console.error("Logout error:", error);
        });
    }

    return (
        <div className="header-div">
            <NavLink to= '/Home'>
                <h1 id='app-title'>ArtConnect</h1>
            </NavLink>
            <div className="header-buttons-container">
                {/* Conditional for either Artist or Buisness when signed in */}
                { artistUser ? (
                    <NavLink to='/ArtistProfile'>
                        <button>Profile</button>
                    </NavLink>
                    ):(
                    <NavLink to='/BusinessProfile'>
                        <button>Bus Profile</button>
                    </NavLink>
                )}
                <NavLink to='/OpenRequests'>
                    <button>Open Requests</button>
                </NavLink>
                {artistUser ? (
                    <NavLink to='/'>
                        <button onClick={artistLogout}>Logout</button>
                    </NavLink>
                ):(
                    <NavLink to='/'>
                        <button onClick={businessLogout}>Logout</button>
                    </NavLink>
                )}
            </div>
        </div>
    )
}

export default Header;