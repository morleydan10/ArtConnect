import React, {useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import { Button, Container,} from 'react-bootstrap';


function Header () {

    const { artistUser, setArtistUser, businessUser, setBusinessUser, signedIn, setSignedIn} = useUser()
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
                setSignedIn(false);
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
                setSignedIn(false);
            } else {
                throw new Error("Logout failed");
            }
        })
        .catch((error) => {
            console.error("Logout error:", error);
        });
    }

    return signedIn ? (
        <div className="navbar-div">
                <div className="app-title-div">
                    <NavLink to="/Home">
                        <h1 className="app-title">ArtConnect</h1>
                    </NavLink>
                </div>
                <div className="header-buttons-container">
                    {/* Conditional for either Artist or Business when signed in */}
                    {artistUser ? (
                        <NavLink to="/ArtistProfile">
                            <button>Profile</button>
                        </NavLink>
                    ) : (
                        <NavLink to="/BusinessProfile">
                            <button>Bus Profile</button>
                        </NavLink>
                    )}
                    <NavLink to="/OpenRequests">
                        <button>Open Requests</button>
                    </NavLink>
                    <NavLink to='/BrowseUsers'>
                        <Button>View Users</Button>
                    </NavLink>
                    {artistUser ? (
                        <NavLink to="/">
                            <button onClick={artistLogout}>Logout</button>
                        </NavLink>
                    ) : (
                        <NavLink to="/">
                            <Button onClick={businessLogout}>Logout</Button>
                        </NavLink>
                    )}
                </div>
                {/* <div className="searchbar-div">
                    <form className="search-form">
                        <input type="search" placeholder="Search users here"></input>
                        <button type="submit">🔎</button>
                    </form>
                </div> */}
        </div>
            
    ) : (
        <div className="navbar-div">
            <div className="app-title-div">
                <NavLink to="/Home">
                    <h1 className="app-title">ArtConnect</h1>
                </NavLink>
            </div>
        </div>
        
    );
}

export default Header;