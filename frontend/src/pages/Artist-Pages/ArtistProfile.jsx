import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../UserContext"

import Header from "../../components/Header";
import CWList from "../../components/Artist Comps/CWList";
import AddCWForm from "../../components/Artist Comps/AddCWForm";
import BioInput from "../../components/Artist Comps/BioInput";
import ArtistRequestsTable from "../../components/Artist Comps/ArtistRequestsTable";
import EditPicForm from "../../components/Artist Comps/EditPicForm";

function ArtistProfile () {

    const {artistUser, setArtistUser} = useUser()
    const [showBio, setShowBio] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [showAddForm, setShowAddForm] = useState(false)
    const [updatedUser, setUpdatedUser] = useState(null)
    const [works, setWorks] = useState([])

    function postNewCW(newCW){

        fetch('/api/creative_works', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCW)
        })
        .then((res) => {
            if (res.ok) {
                res.json().then((newCW) => {
                    setWorks((works) => [...works, newCW]);
                    alert("Work successfully added.")
                })
            } else {
                console.log("POST is not working")
            }})
    }

    function handleUpdateBio(updatedBio) {
        setUpdatedUser((prevUser) => ({
        ...prevUser,
        bio: updatedBio.bio,
        }));
        setShowBio(false);

        setArtistUser((prevUser) => ({
            ...prevUser,
            bio: updatedBio.bio,
        }));
    }

    const handleEditClick = e => {
        console.log("I've been clicked")
        setShowEditForm(true)
    }

    return (
        <main>
            <Header />
            <div className="profile-div-container">
                <div className="profile-div">
                    {/* <h1 className="profile-header">Your Profile</h1> */}
                    <div className="profile-body">
                        <div className='profile-name-image-div'>
                            <div className="profile-pic-div">
                                {showEditForm? (
                                    <EditPicForm setShowEditForm={setShowEditForm}/>
                                ):(
                                    <>
                                        <img className='profile-pic' alt='Profile Picture' src={artistUser.profile_pic_url ? (artistUser.profile_pic_url):('https://m.media-amazon.com/images/I/81fd1B3HUWL.jpg')}/>
                                        <button onClick={handleEditClick}>Edit</button>
                                    </>
                                )}
                            </div>
                            <h2 className='profile-name'>{artistUser.name}</h2>
                            <h3>Date Joined: {artistUser.date_joined}</h3>
                        </div>
                        <div className="contact-info-div">
                            <h2 className="contact-info-header">Contact Info</h2>
                            <h3>{artistUser.type}</h3>
                            <h3>{artistUser.city}</h3>
                            <h3>{artistUser.phone_number}</h3>
                            <h3>{artistUser.email}</h3>
                        </div>
                        <div className="bio-and-requests-div">
                            <div className='bio-div'>
                                <h2 className="contact-info-header">Bio</h2>
                                {showBio ? (
                                    <BioInput setShowBio={setShowBio} handleUpdateBio={handleUpdateBio} />
                                ) : (
                                    <p>
                                    {artistUser.bio ? (
                                        <>
                                            <p className="bio-text">{artistUser.bio}</p>
                                            <button onClick={() => setShowBio(true)}>Edit Bio</button>
                                        </>
                                    ) : (
                                        <>
                                            <p>Edit your bio here</p>
                                            <button onClick={() => setShowBio(true)}>Edit Bio</button>
                                        </>
                                    )}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="artist-requests-div">
                    <div className="artist-requests-body">
                        <h2 className="profile-header">Your Requests</h2>
                    </div>
                    <ArtistRequestsTable />
                            </div>
                <div className="your-portfolio-div">
                    <h2 className="profile-header">Your Portfolio</h2>
                    {showAddForm ? (
                            <AddCWForm postNewCW={postNewCW} setShowAddForm={setShowAddForm}/>
                    ):(
                        <>
                            <button onClick={(e) => setShowAddForm(true)}>Add to Portfolio</button>
                            <CWList works={works} setWorks={setWorks} />
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}

export default ArtistProfile;