import React, { useState, useEffect } from "react";
import { useUser } from "../../UserContext";
import Header from "../../components/Header";
import RequestTable from "../../components/Business Comps/RequestTable";
import BusRequestTable from "../../components/Business Comps/BusRequestTable";


function OpenRequests() {

    const {artistUser} = useUser();

    const [bids, setBids] = useState([])
    const [showApply, setShowApply] = useState(true)

    function postNewBid(newBid) {

        fetch('/api/bids', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newBid)
        })
        .then((res) => {
            if (res.ok) {
                res.json().then((newBid) => {
                    setBids([...bids, newBid]);
                    setShowApply(false);
                    setTimeout(() => {
                        alert('Application successful');
                    }, 400);
                })
            } else {
                console.log("POST is not working")
            }
        })

    }

    return (
        <main>
            <Header />
            <div className="requests-table-header-div">
                <h2 className="requests-table-header">Requests</h2>
            </div>
            {artistUser ? (
                <RequestTable postNewBid={postNewBid} showApply={showApply} />
            ):(
                <BusRequestTable/>
            )}
            
        </main>
    )
}

export default OpenRequests;