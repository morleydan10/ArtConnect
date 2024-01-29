import React, { useState} from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

function Login(){

    return (
        <div className="login-page-div">
            <Header /> 
            <LoginForm attemptLogin={attemptLogin}/>
        </div>
    )
}

export default Login;
