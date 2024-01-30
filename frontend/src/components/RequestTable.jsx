import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import { useUser } from "../UserContext";


function RequestTable () {

    const {user, setUser} = useUser()
    const [requests, setRequests] = useState([])

    // fetch requests

    useEffect(() => {
        fetch('/api/requests')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setRequests(data)
        })
    }, [])



    // UPDATE TABLE STRUCTURE
    // const columns = [
    //     {
    //         id: 'id',
    //         Header: 'Request Number'
    //         Business: ''
    //     }
    // ]


    return (
        <div className="requests-table-div">
            <h2>Requests</h2>
            <table>
                <thead>
                    <tr>
                        <th>Request Number</th>
                        <th>Business</th>
                        <th>Description</th>
                        <th>Date Created</th>
                        <th>Compensation</th>
                        <th>Artist</th>
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
                        {/* <td>{new Date(post.createdAt).toDateString()}</td> */}
                    </tr>
                    ))}
                </tbody>
    </table>
    </div>
    )
}

export default RequestTable;