import React from "react";
import { NavLink } from "react-router-dom";


function Header () {

    return (
        <div>
            <NavLink to= '/'>
                <h1 id='app-title'>ArtConnect</h1>
            </NavLink>
            <div className="header-buttons-container">
                {/* Conditional for either Artist or Buisness when signed in */}
                <NavLink to='/ArtistProfile'>
                    <button>Profile</button>
                </NavLink>
                <NavLink to='/OpenRequests'>
                    <button>Requests</button>
                </NavLink>
                <NavLink to='/Login'>
                    <button>Logout</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Header;