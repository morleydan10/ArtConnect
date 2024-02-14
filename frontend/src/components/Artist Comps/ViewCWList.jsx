import React, { useState, useEffect } from "react";
import ViewCWCard from "./ViewCWCard";

function ViewCWList({ artist }){

    const [works, setWorks] = useState([])

    useEffect(() => {
        console.log(artist)

        fetch(`/api/creative_works/${artist.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setWorks(data);
        })
    }, [])

    const allCreativeWorks = works.map((work) => 
        <ViewCWCard 
            key={work.id}
            work={work}
        />)

    return(
        <div className="cws-container">
            {works.length > 0 ? allCreativeWorks: (<p>Portfolio empty at this time</p>)}
        </div>
    )
}

export default ViewCWList;