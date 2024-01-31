import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../UserContext";
import BidsPopup from "./BidsPopup";

function YourRequestsTable(){

    const { user } = useUser()

    const [yourRequests, setYourRequests] = useState([])
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [yourRequestId, setYourRequestId] = useState(null)

    useEffect(() => {
        fetch(`/api/requests/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setYourRequests(data)
        })
    }, [])



    return(
        <div className="your-requests-table">
            <h2> Your Requests</h2>
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
                    {yourRequests.map((yourRequest) => (
                    <tr key={yourRequest.id}>
                        <td>{yourRequest.id}</td>
                        <td>{yourRequest.business.name}</td>
                        <td>{yourRequest.description}</td>
                        <td>{yourRequest.date_created}</td>
                        <td>{yourRequest.compensation}</td>
                        {/* To add Navlink to artist's profile, need to solve authentication issues */}
                        <td>{ yourRequest.artist  ? (yourRequest.artist.name) : ('')}</td>
                        <td>{ yourRequest.artist ? ('Closed') : (
                            <>
                                <button onClick={() => {
                                    setIsPopupOpen(true)}}>View Bids</button>
                                <BidsPopup trigger={isPopupOpen} setTrigger={setIsPopupOpen} yourRequestId={yourRequest.id}/>
                            </>
                        )}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default YourRequestsTable;