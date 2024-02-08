import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../UserContext";
import BidsPopup from "./BidsPopup";

function ArtistRequestsTable(){

    const { artistUser } = useUser()

    const [artistRequests, setArtistRequests] = useState([])
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    

    useEffect(() => {
        fetch(`/api/requests/${artistUser.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setYourRequests(data)
        })
    }, [])

    
    // PATCH for when Bid is accepted
    function handleUpdateRequest(updatedRequest) {
        const updatedRequests = yourRequests.map((yourRequest) =>
            yourRequest.id === updatedRequest.id ? updatedRequest : yourRequest
        );
    
        setYourRequests(updatedRequests);
    }



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
                    {artistRequests.map((artistRequest) => (
                    <tr key={artistRequest.id}>
                        <td>{artistRequest.id}</td>
                        <td>{artistRequest.business.name}</td>
                        <td>{artistRequest.description}</td>
                        <td>{artistRequest.date_created}</td>
                        <td>{artistRequest.compensation}</td>
                        {/* To add Navlink to artist's profile, need to solve authentication issues */}
                        <td>{ yourRequest.artist  ? (yourRequest.artist.name) : ('')}</td>
                        <td>{ yourRequest.artist ? ('Closed') : (
                            <>
                                <button onClick={() => {
                                    setIsPopupOpen(true)}}>View Bids</button>
                                <BidsPopup trigger={isPopupOpen} setTrigger={setIsPopupOpen} yourRequestId={yourRequest.id} handleUpdateRequest={handleUpdateRequest} />
                            </>
                        )}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ArtistRequestsTable;