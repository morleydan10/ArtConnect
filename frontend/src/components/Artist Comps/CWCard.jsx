import React, { useState, useEffect } from "react";
import { useTable } from 'react-table';
import { useUser } from "../../UserContext";

function CWCard({ work, handleCWDelete }){

    

    return(
        <div className='cw-card'>
            <div className='cw-card-img-div'>
                <img className="cw-file" src={work.file} alt={work.description} />
            </div>
            <div className="cw-card-body">
                <h4 className="card-subtitle">{work.description}</h4>
                <button className='delete-button' onClick={(e) => handleCWDelete(e, work)}>Delete</button>
            </div>
        </div>
    )
}

export default CWCard;