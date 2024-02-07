import React, { useState, useEffect } from "react";
import { useUser } from "../UserContext";


function AddCWForm({ postNewCW }){

    const {artistUser}= useUser()

    const [description, setDescription] = useState('')
    const [file, setFile] = useState('')
    
    // const newCW = new FormData();

    const artist_id = artistUser.id;
    // newCW.append("artist_id", artist_id);

    
    const handleChangeDescription = e => {
        setDescription(e.target.value);
        console.log("Description:", e.target.value);

        // newCW.append("description", description);
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
    }
    
    // useEffect(() => {
    //     newCW.append("artist_id", artist_id);
    //     newCW.append("description", description);
    //     newCW.append("file", file);

    //     console.log(artist_id);
    //     console.log(description);
    //     console.log(file);
    //     console.log(newCW.get('artist_id'));
    //     console.log(newCW.get('description'));
    //     console.log(newCW.get('file'));
    // }, [file])
    
    // const data = new FormData(e.target);
    // console.log(data);
    // for (var [key, value] of data.entries()) { 
    //     console.log(key, value);
    // }

    
    return(
        <div className="add-cw-form-div">
            <form className="add-cw-form" onSubmit={handleSubmitCW}>
                <label>Description</label>
                <input
                    type='text'
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default AddCWForm;