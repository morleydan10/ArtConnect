import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../UserContext";

function BidsTable ({ yourRequestId }) {

    const { user } = useUser()

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


    return(
        <div className="bids-table-div">
            <table>
                <thead>
                    <tr>
                        <th>Bid ID</th>
                        <th>Artist</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {bids.map((bid) => {
                        <tr key={bid.id}>
                            <td>{bid.id}</td>
                            {/* Set up link to view profile */}
                            <td>{bid.artist.name}</td>
                            <td>{bid.artist.email}</td>
                            <td>{bid.artist.phone_number}</td>
                            </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default BidsTable;