import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import RequestTable from "../components/Business Comps/RequestTable";

function OpenRequests() {

    const [bids, setBids] = useState([])

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
                res.json().then((newBid) => setBids([...bids, newBid]))
            } else {
                console.log("POST is not working")
            }
        })

    }

    return (
        <main>
            <Header />
            <div className="request-table-div">
                <RequestTable postNewBid={postNewBid} />
            </div>
        </main>
    )
}

export default OpenRequests;