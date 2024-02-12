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
                        <option value="Restaurant/Cafe">Restaurant</option>
                        <option value="Private-Practice">Private Practice</option>
                        <option value="Shop/Store">Shop/Store</option>
                        <option value="Other">Other</option>
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
                    <button className="cancel-button" onClick={cancelBusinessSignup}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default BusinessSignupForm;
