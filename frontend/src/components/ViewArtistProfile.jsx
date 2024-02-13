import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import ViewCWList from "./Artist Comps/ViewCWList";

function ViewArtistProfile(){

    const [artist, setArtist] = useState(null)

    const { id } = useParams();
    const artistId = id.substring(0, id.length - 1);

    console.log(artistId);

    useEffect(() => {
        fetch(`/api/artists/${artistId}/profile`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setArtist(data)
        })
    },[id])

    if (!artist) {
        // Loading state, you can render a loading spinner or message here
        return <div>Loading...</div>;
    }



    return(
        <main>
            <Header />
            <div className="profile-div">
                {/* <h1 className="profile-header">Profile</h1> */}
                <div className="profile-body">
                    <div className='profile-name-image-div'>
                        <div className="profile-pic-div">
                            <img className='profile-pic' alt='Profile Picture' src={artist.profile_pic_url ? (artist.profile_pic_url):('https://m.media-amazon.com/images/I/81fd1B3HUWL.jpg')}/>
                        </div>
                        <h2 className='profile-name'>{artist.name}</h2>
                        <h3>Date Joined: {artist.date_joined}</h3>
                    </div>
                    <div className="contact-info-div">
                        <h2 className="contact-info-header">Contact Information</h2>
                        <h3>{artist.city}</h3>
                        <h3>{artist.type}</h3>
                        <h3>{artist.phone_number}</h3>
                        <h3>{artist.email}</h3>
                    </div>
                </div>
            </div>
            <div className="your-portfolio-div">
                <h2 className="portfolio-header">Portfolio</h2>
                <ViewCWList artist={artist} />
            </div>
        </main>
    )
}

export default ViewArtistProfile;