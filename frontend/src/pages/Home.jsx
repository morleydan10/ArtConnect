import React, { useState, useEffect} from "react";
import { NavLink, Navigate } from "react-router-dom";
import Header from "../components/Header";
import { useUser } from "../UserContext";




function Home() {

    const {user, setUser} = useUser()

    

    // Authentication fetches



    return(
        <main>
            <Header />
                <h1>Welcome to ArtConnect</h1>
            <div className="sign-up-div">
                <h2>New to ArtConnect? Sign up here</h2>
                <NavLink to='/Signup'>
                    <button>Signup</button>
                </NavLink>
                {/* {NavLink to Sign in Page} */}
            </div>
            <div className="login-div">
                <h2>Have an account? Login Here</h2>
                <NavLink to='/Login'>
                    <button>Login</button>
                </NavLink>
                {/* Navlink to Login Page*/}
            </div>
        </main>
    )
}

export default Home;
