import React, { useState, useEffect } from "react";
import { useUser } from "../../UserContext";


function AddCWForm({ postNewCW, setShowAddForm}){

    const {artistUser}= useUser()

    const [description, setDescription] = useState('')
    const [file, setFile] = useState('')
    

    const artist_id = artistUser.id;

    function cancelAddCW(e) {
        e.preventDefault();
        setShowAddForm(false);
    }

    
    const handleChangeDescription = e => {
        setDescription(e.target.value);
        console.log("Description:", e.target.value);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            console.log(reader.result);
            setFile(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };
    
    function handleSubmitCW(e) {
        e.preventDefault();

        const newCW = {
            artist_id,
            description,
            file
        }
        console.log(newCW);
        postNewCW(newCW);
        setShowAddForm(false);
    }

    
    return(
        <div className="add-cw-form-div">
            <form className="add-cw-form" onSubmit={handleSubmitCW}>
                <label className='login-text'>Description</label>
                <input
                    type='text'
                    className='form-input'
                    placeholder="Enter a short description"
                    value={description}
                    onChange={handleChangeDescription}
                    name='desc'
                />
                <input 
                    type="file"
                    placeholder="Add file here"
                    onInput={handleFileChange}
                    name='file'
                />
                <div className="submit-button-div">
                    <button type="submit" className="submit-button">Submit</button>
                    <button className="cancel-button" onClick={cancelAddCW}>Cancel</button>
                </div>
            </form>
        </div>
    )

}

export default AddCWForm;