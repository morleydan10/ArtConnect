import React from "react";


function ViewCWCard({ work }){


    return(
        <div className='cw-card'>
            <div className='cw-card-img-div'>
                <img className="cw-file" src={work.file} alt={work.description} />
            </div>
            <div className="cw-card-body">
                <h4 className="card-subtitle">{work.description}</h4>
            </div>
        </div>
    )
}

export default ViewCWCard;