import React, { useState } from "react";
import BusinessProfile from "../../pages/Business-Pages/BusinessProfile";
import { useUser } from "../../UserContext";

function NewRequest({ postNewRequest, setShowForm }){

    const {businessUser, date_created} = useUser()

    const [description, setDescription] = useState('')
    const [compensation, setCompensation] = useState('')
    

    const handleChangeDescription = e => setDescription(e.target.value)
    const handleChangeCompensation = e => setCompensation(e.target.value)
    
    const business_id = businessUser.id

    const newRequest = {
        business_id,
        description,
        compensation,
        date_created
    };

    function handleNewRequestSubmission(e){
        e.preventDefault();
        postNewRequest(newRequest)
        setShowForm(false);
        alert(`Request Submitted`);
    };

    function handleHideForm(e){
        e.preventDefault();
        setShowForm(false);
    }


    return(
        <div className="new-request-form-div">
            <form className="new-request-form" onSubmit={handleNewRequestSubmission}>
                <label className='login-text'>Business</label>
                <p className="form-text">{businessUser.name}</p>
                <label className='login-text'>Date Created</label>
                <p className="form-text">{date_created}</p>
                <label className='login-text'>Description</label>
                <input
                    type='text'
                    placeholder="Enter a short description"
                    className='form-input'
                    value={description}
                    onChange={handleChangeDescription}
                />
                <label className='login-text'>Compensation</label>
                <input
                    type='text'
                    placeholder="Enter a dollar amount"
                    className='form-input'
                    value={compensation}
                    onChange={handleChangeCompensation}
                />
                <p>*Subject to change upon consultation</p>
                <div className="submit-button-div">
                    <button type="submit" className="submit-button">Submit</button>
                    <button className="cancel-button" onClick={handleHideForm}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default NewRequest;
