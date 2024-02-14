import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../UserContext";

function ArtistRequestsTable(){

    const { artistUser } = useUser()

    const [artistRequests, setArtistRequests] = useState([])
    

    useEffect(() => {
        fetch(`/api/requests/${artistUser.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setArtistRequests(data)
        })
    }, [])



    return( artistRequests ? 
        (
        <div className="artist-requests-table">
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Request Number</th>
                            <th>Business</th>
                            <th>Description</th>
                            <th>Date Created</th>
                            <th>Compensation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artistRequests.map((artistRequest) => (
                        <tr key={artistRequest.id}>
                            <td>{artistRequest.id}</td>
                            <td>{artistRequest.business.name}</td>
                            <td>{artistRequest.description}</td>
                            <td>{artistRequest.date_created}</td>
                            <td>{artistRequest.compensation}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        ):(<p className="bio-text">You have no requests at this time</p>)
    )
}

export default ArtistRequestsTable;