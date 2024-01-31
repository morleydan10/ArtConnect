import React from "react";
import Header from "../components/Header";

function Signup() {

    // Post Request

    // edit to add select function

    return(
        <main>
            <Header />
            <div className="signup-form-div">
                <form className="signup-form">
                    <label>Account Type</label>
                    <select>
                        <option value='Artist'>Artist</option>
                        <option value='Business'>Business</option>
                    </select>
                    {/* ternary for business or for user */}
                    <label>Name:</label>
                    <input type='text' placeholder="Enter your full name"></input>
                    <label>Specialty</label>
                    <input type='select' placeholder="Enter your Specialty"></input>
                    <label>City</label>
                    <input type='text' placeholder="Enter your City"></input>
                    {/* use geolocation? */}
                    <label>Create a username</label>
                    <input type='text' placeholder="Create a username"></input>
                    {/* Validate Username/must be unique */}
                    <label>Create a password</label>
                    <input type='password' placeholder="Enter a password"></input>
                    {/* Validate password? */}
                    <button>Submit</button>
                </form>
            </div>
        </main>

    )
}

export default Signup;
