import React, { useState, useRef } from "react";

function ImagePopup (props){

    const {file}= props;
    // const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)

    const handleVideoClick = (e) => {
        const video = videoRef.current
        {video.paused ? video.play(): video.pause()}
    }

    return((props.trigger) ? (
        <div className="popup" >
            <div className='image-popup-inner' >
                <button className="close-button" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
                {file.startsWith("data:video/mp4") ?
                (
                <video className="cw-popup-video" ref={videoRef} src={file} alt='video file' onClick={handleVideoClick} />
                ):(
                <img className="cw-popup-image" src={file} alt='enlarged image' />
                )
                }
            </div>
        </div>
    ):("")
    )

}

export default ImagePopup;