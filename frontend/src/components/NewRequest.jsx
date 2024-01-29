import React, { useState } from "react";
import BusinessProfile from "../pages/BusinessProfile";
import { useUser } from "../UserContext";

function NewRequest({ postNewRequest }){

    const {user, setUser} = useUser()

    const [description, setDescription] = useState('')
    const [compensation, setCompensation] = useState('')

    const handleChangeDescription = e => setDescription(e.target.value)
    const handleChangeCompensation = e => setCompensation(e.target.value)

    const newRequest = {
        description,
        compensation
    };

    function handleNewRequestSubmission(newRequest){
        postNewRequest(newRequest)
    };


    return(
        <div>
            <form className="new-request-form">
                <label>Business</label>
                <p>{user.name}</p>
                <label>Description</label>
                <input
                    type='text'
                    placeholder="Enter a short description"
                    value={description}
                    onChange={handleChangeDescription}
                />
                <label>Compensation</label>
                <input
                    type='text'
                    placeholder="Enter a short description"
                    value={compensation}
                    onChange={handleChangeCompensation}
                />
                <p>*Subject to change upon consultation</p>
                {/* validation on compensation */}
                <button onClick={handleNewRequestSubmission}>Submit</button>
            </form>
        </div>
    )
}

export default NewRequest;
