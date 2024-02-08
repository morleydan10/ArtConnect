import React, { useState } from "react";
import { useUser } from "../../UserContext";

function BusinessSignupForm({ attemptBusinessSignup, cancelBusinessSignup }) {

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

    const newBusiness = {
            name,
            email,
            city,
            phone_number,
            type,
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

                <label>Type</label>
                <select id="mySelect" value={selectedOption} onChange={handleChangeType}>
                    <option value="">Select...</option>
                    <option value="Restaurant/Cafe">Restaurant</option>
                    <option value="Private-Practice">Private Practice</option>
                    <option value="Shop/Store">Shop/Store</option>
                    <option value="Other">Other</option>
                </select>

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
                <button className="cancel-button" onClick={cancelBusinessSignup}>Cancel</button>
            </form>
        </div>
    );
}

export default BusinessSignupForm;
