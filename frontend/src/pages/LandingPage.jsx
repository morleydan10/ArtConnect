import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

import Header from "../components/Header";
import BusinessSignupForm from "../components/Business Comps/BusinessSignupForm";
import BusinessLoginForm from "../components/Business Comps/BusinessLoginForm";
import ArtistSignupForm from "../components/Artist Comps/ArtistSignupForm";
import ArtistLoginForm from "../components/Artist Comps/ArtistLoginForm";




function LandingPage() {
    
    const navigate = useNavigate();
    const { setArtistUser, setBusinessUser, setSignedIn} = useUser()

    const [showBusinessLogin, setShowBusinessLogin] = useState(false)
    const [showBusinessSignup, setShowBusinessSignup]= useState(false)

    const [showArtistLogin, setShowArtistLogin] = useState(false)
    const [showArtistSignup, setShowArtistSignup] = useState(false)

    // const getToken = () => localStorage.getItem('authToken');

// **************CHECK SESSION************************

useEffect(() => {
    fetch('/api/check_artist_session')
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then((user) => {
            console.log(user);
            if (user.user_type === 'artist') {
                setArtistUser(user.user_data);
            }
        });
}, [navigate, setArtistUser]);

useEffect(() => {
    fetch('/api/check_business_session')
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then((user) => {
            console.log(user);
            if (user.user_type === 'business') {
                setBusinessUser(user.user_data);
            }
        });
}, [navigate, setBusinessUser]);

// **************BUSINESS LOGIN/SIGNUP**********************

    function handleClickToLoginBusiness(e){
        e.preventDefault();
        setShowBusinessLogin(!showBusinessLogin)
    };

    function handleClickToSignupBusiness(e){
        e.preventDefault();
        setShowBusinessSignup(!showBusinessSignup)
    };

// **************BUSINESS AUTHENTICATION*********************
// ********signup************
    // attempt signup with post

    function attemptBusinessSignup(newBusiness){

        console.log(newBusiness)
        // need to make signup route on backend

            fetch('/api/create_new_business', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newBusiness)
            })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw res;
            })
            .then((data) => {
                console.log(data);

                setBusinessUser(data);
                setSignedIn(true);
                navigate('/Home');
            })
            // add navigate logic outside of useEffect
            }
            // if (businessUser) {
            //     return <Navigate to='/' />;
            // } 

// *********login*************
    function attemptBusinessLogin(userInfo){

        console.log(userInfo)

            fetch('/api/business_login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userInfo)
            })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw res;
            })
            .then((data) => {
                console.log(data);
                setBusinessUser(data);
                setSignedIn(true);
                navigate('/Home');
            })
            // add navigate logic outside of useEffect
            }


// ****************ARTIST SIGNUP/LOGIN**********************

    function handleClickToLoginArtist(e){
        e.preventDefault();
        setShowArtistLogin(!showArtistLogin)
    };

    function handleClickToSignupArtist(e){
        e.preventDefault();
        setShowArtistSignup(!showArtistSignup)
    };

// *****************ARTIST AUTHENTICATION********************

// *********signup************

    function attemptArtistSignup(newArtist) {

        console.log(newArtist)
    // need to make signup route on backend

            fetch('/api/create_new_artist', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newArtist)
            })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw res;
            })
            .then((data) => {
                console.log(data);
                setArtistUser(data);
                setSignedIn(true);
                navigate('/Home');
            })
            }
// ********login**********
    function attemptArtistLogin(userInfo){

        console.log(userInfo)

            fetch('/api/artist_login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userInfo)
            })
            .then((res) => {
                if (res.ok){
                    return res.json()
                }
                throw res;
            })
            .then((data) => {
                console.log(data);
                setArtistUser(data);
                setSignedIn(true);
                navigate('/Home');
            })
            // add navigate logic outside of useEffect
            }
            // if (artistUser) {
            //     return <Navigate to='/' />;
            // } 

    return (
        <main>
            <Header />
            <h1>Welcome to ArtConnect</h1>
            {showBusinessSignup ? (
                <BusinessSignupForm attemptBusinessSignup={attemptBusinessSignup} />
            ) : showArtistSignup ? (
                <ArtistSignupForm attemptArtistSignup={attemptArtistSignup} />
            ) : (
                <div className="sign-up-div">
                <h2>New to ArtConnect? Sign up here</h2>
                <button onClick={handleClickToSignupBusiness}>Signup as a Business</button>
                <button onClick={handleClickToSignupArtist}>Signup as an Artist</button>
                </div>
            )}

            {showBusinessLogin ? (
                <BusinessLoginForm attemptBusinessLogin={attemptBusinessLogin} />
            ) : showArtistLogin ? (
                <ArtistLoginForm attemptArtistLogin={attemptArtistLogin} />
            ) : (
                <div className="login-div">
                <h2>Have an account? Login Here</h2>
                <button onClick={handleClickToLoginBusiness}>Business Login</button>
                <button onClick={handleClickToLoginArtist}>Artist Login</button>
                </div>
            )}
        </main>
        );
}

export default LandingPage;