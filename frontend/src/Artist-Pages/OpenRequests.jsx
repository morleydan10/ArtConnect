import React from "react";
import Header from "../components/Header";
import RequestTable from "../components/RequestTable";

function OpenRequests() {

    return (
        <main>
            <Header />
            <div className="request-table-div">
                <RequestTable />
            </div>
        </main>
    )
}

export default OpenRequests;