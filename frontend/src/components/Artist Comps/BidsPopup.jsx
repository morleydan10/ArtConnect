import React, { useEffect, useState } from "react";

import BidsTable from "./BidsTable";


function BidsPopup(props) {

    const { yourRequestId } = props;
    const { handleUpdateRequest } = props;
    const {setIsPopupOpen} = props;

    console.log("Bids Popup is running")
    console.log(yourRequestId)

    return( (props.trigger) ? (
        <div className="popup">
            <div className="inner-bids-popup">
                <button className="close-button" onClick={() => setIsPopupOpen(false)}>Close</button>
                { props.children }
                <BidsTable yourRequestId={yourRequestId} handleUpdateRequest={handleUpdateRequest} setIsPopupOpen={setIsPopupOpen} />
            </div>
        </div>
    ): 
    ("")
    )
}

export default BidsPopup;