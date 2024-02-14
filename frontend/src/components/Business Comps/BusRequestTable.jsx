import React, { useState, useEffect } from "react";


function BusRequestTable () {

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



    return (
        <div className="requests-table-div">
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
                            <td>{ request.artist  ? (request.artist.name):('')}</td>
                            <td>{ request.artist ? ('Closed'):('Open')}</td>
                        </tr>
                        ))}
                    </tbody>
            </table>
        </div>
    </div>
    )
}

export default BusRequestTable;