import React, { useState, useEffect } from "react";
import { useUser } from "../../UserContext";


function EditPicForm({ setShowEditForm }){

    const {artistUser}= useUser()
    const {businessUser} = useUser()

    const [file, setFile] = useState('')
    
    const id = artistUser ? artistUser.id : businessUser.id;


    function cancelEditPic(e) {
        e.preventDefault();
        setShowEditForm(false);
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
    
    function handleSubmitPic(e) {
        e.preventDefault();

        const updatedProfilePic = {
            profile_pic_url: file
        }

        const endpoint = artistUser ? `/api/artists/${id}` : `/api/businesses/${id}`;

        fetch(endpoint, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProfilePic)
        })
        .then((res)=> {
            if (res.ok){
                res.json()
                .then(data =>{
                    console.log(data);
                    alert("Profile Picture successfully updated.");
                })
            } else {
                alert("Failed to update profile picture.")
                throw{
                    Error: ("Failed to update profile picture.")
                }
            }
            })
            setShowEditForm(false);
        }


    
    return(
        <div className="add-cw-form-div">
            <form className="add-cw-form" onSubmit={handleSubmitPic}>
                <input 
                    type="file"
                    placeholder="Add file here"
                    onInput={handleFileChange}
                    name='file'
                />
                <div className="submit-button-div">
                    <button type="submit" className="submit-button">Submit</button>
                    <button className="cancel-button" onClick={cancelEditPic}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditPicForm;