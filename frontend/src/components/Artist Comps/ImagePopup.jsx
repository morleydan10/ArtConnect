import React from "react";

function ImagePopup (props){

    const {file}= props;

    return((props.trigger) ? (
        <div className="popup" >
            <div className='image-popup-inner' >
                <button className="close-button" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
                <img className="cw-popup-image" src={file} alt='enlarged image' />
            </div>
        </div>
    ):("")
    )

}

export default ImagePopup;