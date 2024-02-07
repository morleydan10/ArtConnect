import React, { useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import { Button, Container} from 'react-bootstrap';
import BusinessCard from "./BusinessCard";

function BusinessList(){

    const [businesses, setBusinesses] = useState([])

    function renderBusinesses(){

        fetch('/api/businesses')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setBusinesses(data);
        })
    }

    const allBusinesses = businesses.map(business => <BusinessCard business={business}/>)

    return (
        <Container className="businesses-container">
            <Row>
                {allBusinesses}
            </Row>
        </Container>
    )
}

export default BusinessList;