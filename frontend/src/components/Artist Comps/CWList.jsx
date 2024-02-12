import React, { useState, useEffect } from "react";
import { useTable } from 'react-table';
import { useUser } from "../../UserContext";
import CWCard from "./CWCard";

function CWList(){

    const { artistUser } = useUser()
    const [works, setWorks] = useState([])

    useEffect(() => {

        console.log(artistUser)

        fetch(`/api/creative_works/${artistUser.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setWorks(data);
        })
    }, [])

    
    function handleCWDelete(e, work){
        e.preventDefault(e);
        
        fetch(`/api/creative_works/${work.id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setWorks(works.filter((w) => w.id == work.id))
        })
    }

    const allCreativeWorks = works.map((work) => 
        <CWCard 
            key={work.id}
            work={work}
            handleCWDelete={handleCWDelete}
        />)

    return(
        <div className="cws-container">
            {works.length > 0 ? allCreativeWorks: (<p>You have nothing in your porfolio at this time</p>)}
        </div>
    )
}

export default CWList;
