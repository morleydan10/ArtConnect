import React, { useState } from "react";
import { useUser } from "../UserContext";

function BusinessSignupForm({ attemptBusinessSignup }) {

    const {date_created} = useUser()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [phone_number, setPhone_Number] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangeCity = (e) => setCity(e.target.value);
    const handleChangePhoneNumber = (e) => setPhone_Number(e.target.value);
    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const newBusiness = {
            name,
            email,
            city,
            phone_number,
            username,
            password,
            date_joined: date_created
        }

    function handleSignupSubmit(e) {
        e.preventDefault();
        attemptBusinessSignup(newBusiness)
    };

    return (
        <div className="business-signup-form-div">
            <form 
                className="signup-form"
                onSubmit={handleSignupSubmit}
                >
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter your full name"
                    className="login-input"
                    value={name}
                    onChange={handleChangeName}
                />

                <label>Email</label>
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="login-input"
                    value={email}
                    onChange={handleChangeEmail}
                />

                <label>Phone</label>
                <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="login-input"
                    value={phone_number}
                    onChange={handleChangePhoneNumber}
                />

                <label>City</label>
                <input
                    type="text"
                    placeholder="Enter your city"
                    className="login-input"
                    value={city}
                    onChange={handleChangeCity}
                />

                <label>Username</label>
                <input
                    type="text"
                    placeholder="Enter your username"
                    className="login-input"
                    value={username}
                    onChange={handleChangeUsername}
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="login-input"
                    value={password}
                    onChange={handleChangePassword}
                />
                <button id='signup-submit-button' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default BusinessSignupForm;
