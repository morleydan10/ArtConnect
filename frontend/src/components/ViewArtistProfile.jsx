import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { Button, Card, Modal, Container} from 'react-bootstrap';
import ArtistCard from "./Artist Comps/ArtistCard";

function ViewArtistProfile(){

    return(
        <Modal 
            onShow={} 
            onHide={}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                {artist.name}
            </Modal.Title>
            </Modal.Header>
            
        </Modal>

    )
}

export default ViewArtistProfile;