import React, { useEffect, useState } from "react";
import { useUser } from "../../UserContext";

function BioInput({ setShowBio, handleUpdateBio }){
    
    const {artistUser} = useUser()
    const [bio, setBio] = useState('')

    const handleChangeBio = (e) => setBio(e.target.value)


    function handleBioSubmit(e){
        e.preventDefault();

        const updatedBio = {
            bio: bio
        }

        fetch(`/api/artists/${artistUser.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBio)
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                // Handle non-OK response (e.g., show an error message)
                throw new Error('Bio update failed');
            }
        })
        .then((updatedArtist) => {
            // Handle successful update
            console.log('Bio updated successfully:', updatedArtist);
            handleUpdateBio(updatedBio);
            setShowBio(false);
        })
    }

    return(
            <form className='bio-form'>
                <input type="text" placeholder="Add your bio here" value={bio} onChange={handleChangeBio}/>
                <button className="submit-button" onClick={handleBioSubmit}>Add</button>
                <button className='cancel-button' onClick={(e) => setShowBio(false)}>Cancel</button>
            </form>
)
}

export default BioInput;