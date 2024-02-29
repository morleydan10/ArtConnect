import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import ViewBusRequests from "../../components/Business Comps/ViewBusRequests"


function ViewBusinessProfile() {

    const [business, setBusiness] = useState(null)

    const { id } = useParams();
    const businessId = id.substring(0, id.length - 1);

    console.log(businessId);

    useEffect(() => {
        fetch(`/api/businesses/${businessId}/profile`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setBusiness(data)
        })
    },[id])

    if (!business) {
        // Loading state, you can render a loading spinner or message here
        return <div>Loading...</div>;
    }


    return(
        <main>
            <Header />
            <div className="profile-div">
                <div className="profile-body">
                    <div className='profile-name-image-div'>
                        <div className="profile-pic-div">
                            <img className='profile-pic'  alt='Profile Picture' src={business.profile_pic_url ? business.profile_pic_url : ('https://searchengineland.com/wp-content/seloads/2015/07/small-business-shops-ss-1920.jpg')}/>
                        </div>
                        <h2 className='profile-name'>{business.name}</h2>
                        <h3>Date Joined: {business.date_joined}</h3>
                    </div>
                    <div className="contact-info-div">
                        <h2 className="contact-info-header">Contact Information</h2>
                        <h3>{business.city}</h3>
                        <h3>{business.type}</h3>
                        <h3>{business.phone_number}</h3>
                        <h3>{business.email}</h3>
                    </div>
                </div>
            </div>
            <div className="your-request-div">
                <div className="your-requests-table-header-div">
                    <h2 className="portfolio-header">Requests</h2>
                </div>
                <ViewBusRequests business={business} />
            </div>
        </main>
    )
}

export default ViewBusinessProfile;