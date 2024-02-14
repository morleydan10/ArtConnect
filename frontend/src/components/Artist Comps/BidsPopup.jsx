import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../UserContext";

import BidsTable from "./BidsTable";


function BidsPopup(props) {

    const { yourRequestId } = props;
    const { handleUpdateRequest } = props;

    console.log(yourRequestId)

    return( (props.trigger) ? (
        <div className="popup">
            <div className="inner-bids-popup">
                <button className="close-button" onClick={() => props.setTrigger(false)}>Close</button>
                { props.children }
                <BidsTable yourRequestId={yourRequestId} handleUpdateRequest={handleUpdateRequest} />
            </div>
        </div>
    ): 
    ("")
    )
}

export default BidsPopup;