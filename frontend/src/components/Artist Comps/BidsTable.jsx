import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { NavLink } from "react-router-dom";
import { useUser } from "../../UserContext";

function BidsTable ({ yourRequestId, handleUpdateAccept, setIsPopupOpen }) {

    const {  businessUser, serviceID, templateAcceptId, publicKey } = useUser()

    const [bids, setBids] = useState([])
    
    // get bids
    useEffect(() => {
        fetch(`/api/bids/${yourRequestId}`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else { 
                throw new Error('GET request unsuccessful');
            }
        })
        .then((data) => setBids(data))
        .catch((error) => console.error(error));
    }, [yourRequestId])

    function handleUpdateBids(updatedBid){
        const updatedBids = bids.map((bid) =>
            bid.id === updatedBid.id ? updatedBid : bid);
        setBids(updatedBids);
    }

    function handleClickAccept(e, bidId, bidArtistId, bidArtistName){

        e.preventDefault();

        console.log(bidArtistId);
        console.log(businessUser.name)

        emailjs.send(serviceID, templateAcceptId, {
            business_name: businessUser.name,
            artist_name: bidArtistName,
            },
            publicKey);
        
        const updateYourRequest = {
            artist_id: bidArtistId,
        }

        const updateBid = {
            accepted: true
        }

        fetch(`/api/requests/${yourRequestId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateYourRequest),
        })
        .then((res) => res.json())
        .then(handleUpdateAccept)

        
        fetch(`/api/bids/${bidId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBid),
        })
        .then(res => res.json())
        .then(() => {
            handleUpdateBids(updateBid);
            setIsPopupOpen(false);
        })
    };

    return(
        <div className="bids-table-div">
            <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Bid ID</th>
                        <th>Artist</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Accept</th>
                    </tr>
                </thead>
                <tbody>
                    {bids.map((bid) => {
                    console.log(bid.artist);
                    return (
                        <tr key={bid.id}>
                            <td>{bid.id}</td>
                            {/* Set up link to view profile */}
                            <td>{bid.artist.name}</td>
                            <td>{bid.artist.email}</td>
                            <td>{bid.artist.phone_number}</td>
                            <td>
                                <button onClick={(e) => handleClickAccept(e, bid.id, bid.artist_id, bid.artist.name)
                                }>
                                    Accept
                                </button>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
            
        </div>
    )
}

export default BidsTable;