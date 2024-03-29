import React, { useEffect, useState } from "react";
import { useUser } from "../../UserContext";
import BidsPopup from "../Artist Comps/BidsPopup";

function YourRequestsTable(){

    const { businessUser } = useUser()

    const [yourRequests, setYourRequests] = useState([])
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [selectedRequest, setSelectedRequest] = useState(null)
    
    

    console.log("YourRequests Table is Running");

    useEffect(() => {
        if (!yourRequests.length) {
            fetch(`/api/requests/${businessUser.id}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setYourRequests(data);
                });
        } else {
            console.log("Table is already populated.");
        }
    }, [yourRequests, businessUser.id]);

    
    // PATCH for when Bid is accepted
    function handleUpdateRequest(updatedRequest) {
        const updatedRequests = yourRequests.map((yourRequest) =>
            yourRequest.id === updatedRequest.id ? updatedRequest : yourRequest
        );
    
        setYourRequests(updatedRequests);
    }

    function handleDeleteYourRequest(e, yourRequest){
        e.preventDefault(e);

        fetch(`/api/requests/${yourRequest.id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setYourRequests(yourRequests.filter((yr) => yr.id !== yourRequest.id))
        })
    }



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
                            <th>Delete</th>
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
                                        setSelectedRequest(yourRequest.id)
                                        setIsPopupOpen(true)}}>View Bids</button>
                                    <BidsPopup trigger={isPopupOpen} setIsPopupOpen={setIsPopupOpen} yourRequestId={selectedRequest} handleUpdateRequest={handleUpdateRequest} />
                                </>
                            )}</td>
                            <td>{yourRequest.artist ? (
                                '--'
                                ):(
                                <button className="delete-button" onClick={(e) => handleDeleteYourRequest(e, yourRequest)}>
                                    Delete
                                </button>
                                )}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default YourRequestsTable;