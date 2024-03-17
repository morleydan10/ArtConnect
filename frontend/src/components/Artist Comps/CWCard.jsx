import React, { useState } from "react";
import ImagePopup from "./ImagePopup";

function CWCard({ work, handleCWDelete }){

    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleCardClick = () => {
        setPopupVisible(true);
    };

    return(
        <>
            <a className="cw-card-anchor" href="#" onClick={handleCardClick}>
                <div className='cw-card'>
                    <div className='cw-card-img-div'>
                        {work.file.startsWith("data:video/mp4") ? 
                        (
                            <video className="cw-file" src={work.file} alt={work.description} />
                        ):(
                            <img className="cw-file" src={work.file} alt={work.description} />
                        )
                        }
                    </div>
                    <div className="cw-card-body">
                        <h4 className="card-subtitle">{work.description}</h4>
                        <button className='delete-button' onClick={(e) => handleCWDelete(e, work)}>Delete</button>
                    </div>
                </div>
            </a>
            <ImagePopup trigger={isPopupVisible} setTrigger={setPopupVisible} file={work.file} />
        </>
    )
}

export default CWCard;