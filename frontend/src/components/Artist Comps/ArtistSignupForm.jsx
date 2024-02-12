import React, { useState, useEffect } from "react";
import { useUser } from "../../UserContext";

function ArtistSignupForm({ attemptArtistSignup, cancelArtistSignup }) {

    const {date_created} = useUser()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [phone_number, setPhone_Number] = useState('');
    const [type, setType] = useState('')
    const [selectedOption, setSelectedOption] = useState("");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangeCity = (e) => setCity(e.target.value);
    const handleChangePhoneNumber = (e) => setPhone_Number(e.target.value);
    const handleChangeType = (e) => {
        setType(e.target.value);
        setSelectedOption(e.target.value);
        };
    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const newArtist = {
        name,
        email,
        phone_number,
        city,
        type,
        username,
        password,
        date_joined: date_created
    }


    function handleSignupSubmit(e) {
        e.preventDefault();
        attemptArtistSignup(newArtist)
    };

    return(
        <div className="signup-form-div">
            <form 
                className="signup-form"
                onSubmit={handleSignupSubmit}
                >
                <div className="info-div">
                <label className='login-text'>Name</label>
                <input
                    type="text"
                    placeholder="Enter your full name"
                    className='form-input'
                    value={name}
                    onChange={handleChangeName}
                />
                </div>
                <div className="info-div">
                    <label className='login-text'>Email</label>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className='form-input'
                        value={email}
                        onChange={handleChangeEmail}
                    />
                </div>
                <div className="info-div">
                    <label className='login-text'>Phone</label>
                    <input
                        type="text"
                        placeholder="Enter your phone number"
                        className='form-input'
                        value={phone_number}
                        onChange={handleChangePhoneNumber}
                    />
                </div>
                <div className="info-div">
                    <label className='login-text'>City</label>
                    <input
                        type="text"
                        placeholder="Enter your city"
                        className='form-input'
                        value={city}
                        onChange={handleChangeCity}
                    />
                </div>
                <div className="info-div">
                <label className='login-text'>Type</label>
                <select className="type-select" value={selectedOption} onChange={handleChangeType}>
                        <option value="">Select...</option>
                        <option value="Paint-Mural">Paint-Mural</option>
                        <option value="Paint-Canvas">Paint-Canvas</option>
                        <option value="Paint-Spray">Paint-Spray</option>
                        <option value="Photography">Photography</option>
                        <option value="Videography">Videography</option>
                        <option value="Misc">Misc</option>
                    </select>
                </div>
                <div className="info-div">
                    <label className='login-text'>Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        className='form-input'
                        value={username}
                        onChange={handleChangeUsername}
                    />
                </div>
                <div className="info-div">
                    <label className='login-text'>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className='form-input'
                        value={password}
                        onChange={handleChangePassword}
                    />
                </div>
                <div className="submit-button-div">
                    <button id='signup-submit-button' type='submit'>Submit</button>
                    <button className="cancel-button" onClick={cancelArtistSignup}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ArtistSignupForm;