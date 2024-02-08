import React, { useState, useEffect } from "react";


function ArtistLoginForm({ attemptArtistLogin, cancelArtistLogin }) {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleArtistLoginSubmit(e) {
        e.preventDefault();

        attemptArtistLogin({"username": username, "password": password})
        };

        const handleChangeUsername = e => setUsername(e.target.value)
        const handleChangePassword = e => setPassword(e.target.value)
    

    return(
        <form id='login-form' 
        onSubmit={handleArtistLoginSubmit}
        >
            <label className='login-text'>
            Username:
            </label>
            <input
                type='text'
                placeholder="Enter your username"
                className='login-input'
                value={username}
                onChange={handleChangeUsername}
            />
            <label className='login-text'>
            Password:
            </label>
            <input
                type='password'
                placeholder="Enter your password"
                className='login-input'
                value={password}
                onChange={handleChangePassword}
            />
            <button id='login-submit-button' type='submit'>Submit</button>
            <button className="cancel-button" onClick={cancelArtistLogin}>Cancel</button>
        </form>
    )
    };

export default ArtistLoginForm;