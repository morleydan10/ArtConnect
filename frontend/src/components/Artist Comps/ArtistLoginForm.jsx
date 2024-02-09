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
        <form className='login-form' 
        onSubmit={handleArtistLoginSubmit}
        >
            <div className="username-div">
                <label className='login-text'>
                Username:
                </label>
                <input
                    type='text'
                    placeholder="Enter your username"
                    className='form-input'
                    value={username}
                    onChange={handleChangeUsername}
                />
            </div>
            <div className="password-div">
                <label className='login-text'>
                Password:
                </label>
                <input
                    type='password'
                    placeholder="Enter your password"
                    className='form-input'
                    value={password}
                    onChange={handleChangePassword}
                />
            </div>
            <div className="submit-button-div">
                <button id='login-submit-button' type='submit'>Submit</button>
                <br/>
                <button className="cancel-button" onClick={cancelArtistLogin}>Cancel</button>
            </div>
        </form>
    )
    };

export default ArtistLoginForm;