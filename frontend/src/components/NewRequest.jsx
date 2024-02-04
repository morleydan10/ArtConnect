import React, { useState } from "react";
import BusinessProfile from "../pages/BusinessProfile";
import { useUser } from "../UserContext";

function NewRequest({ postNewRequest }){

    const {businessUser, date_created} = useUser()

    const [description, setDescription] = useState('')
    const [compensation, setCompensation] = useState('')
    

    
    // function getDate() {
    //     const today = new Date();
    //     const month = today.getMonth() + 1;
    //     const year = today.getFullYear();
    //     const date = today.getDate();
    //     return `${month}/${date}/${year}`;
    // }
    
    // const [date_created, setDateCreated] = useState(getDate())

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
    };


    return(
        <div className="new-request-form-div">
            <form className="new-request-form" onSubmit={handleNewRequestSubmission}>
                <label>Business</label>
                <p>{businessUser.name}</p>
                <p>{date_created}</p>
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
                    placeholder="Enter a dollar amount"
                    value={compensation}
                    onChange={handleChangeCompensation}
                />
                <p>*Subject to change upon consultation</p>
                {/* validation on compensation */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewRequest;
