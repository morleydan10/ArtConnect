import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useTable } from "react-table";
import { useUser } from "../../UserContext";
import { json } from "react-router-dom";


function RequestTable ({ postNewBid }) {

    const {artistUser, serviceID, templateRecId, publicKey,} = useUser()
    const [requests, setRequests] = useState([])
    const [request_id, setRequestId]= useState()
    

    // fetch requests

    useEffect(() => {
        fetch('/api/requests')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setRequests(data)
        })
    }, [])

    const artist_id = artistUser.id

    
    
    
    function handleClickApply(e, requestId, requestBusinessName){
        e.preventDefault();
        setRequestId(requestId);
        
        emailjs.send(serviceID, templateRecId, {
            business_name: requestBusinessName,
            artist_name: artistUser.name,
            }, 
            publicKey);

        const newBid = {
            artist_id,
            request_id: requestId
        }

        postNewBid(newBid)
    };


    return (
        <div className="requests-table-div">
            <h2 className="requests-table-header">Requests</h2>
            <table>
                <thead>
                    <tr>
                        <th>Request Number</th>
                        <th>Business</th>
                        <th>Description</th>
                        <th>Date Created</th>
                        <th>Compensation</th>
                        <th>Artist</th>
                        <th>Open/Closed</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => (
                    <tr key={request.id}>
                        <td>{request.id}</td>
                        <td>{request.business.name}</td>
                        <td>{request.description}</td>
                        <td>{request.date_created}</td>
                        <td>{request.compensation}</td>
                        {/* To add Navlink to artist's profile, need to solve authentication issues */}
                        <td>{ request.artist  ? (request.artist.name):('')}</td>
                        <td>{ request.artist ? ('Closed'):(
                            <button onClick={(e) => {
                                handleClickApply(e, request.id, request.business.name)}}>Apply</button>
                        )}</td>
                    </tr>
                    ))}
                </tbody>
        </table>
    </div>
    )
}

export default RequestTable;