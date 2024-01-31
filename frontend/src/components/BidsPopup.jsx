import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../UserContext";


function BidsPopup(props) {

    return( (props.trigger) ? (
        <div className="bids-popup">
            <div className="inner-bids-popup">
                <button className="close-button" onClick={() => props.setTrigger(false)}>Close</button>
                { props.children }
            </div>
        </div>
    ): 
    ("")
    )
}

export default BidsPopup;