import React, { useEffect, useState } from "react";

function ViewBusRequests({ business }){

    const [requests, setRequests] = useState([])
    
    useEffect(() => {
        fetch(`/api/requests/${business.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setRequests(data)
        })
    },[])

    return(
        <div className="your-requests-table">
            <div className="table-container">
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
                            <td>{request.artist  ? (request.artist.name) : ('')}</td>
                            <td>{request.artist  ? ('Closed') : ('Open')}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewBusRequests;