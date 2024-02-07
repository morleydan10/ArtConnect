import React, { useState, useEffect } from "react";
import { useTable } from 'react-table';
import { useUser } from "../UserContext";
import AddCWForm from "./AddCWForm";


function CwTable() {

    const { artistUser } = useUser()
    const [works, setWorks] = useState([])
    const [showAddForm, setShowAddForm] = useState(false)

    useEffect(() => {

        console.log(artistUser)


        fetch(`/api/creative_works/${artistUser.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setWorks(data);
        })
    }, [])

    function postNewCW(newCW){

        fetch('/api/creative_works', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCW)
        })
        .then((res) => {
            if (res.ok) {
                res.json().then((newCW) => setWorks([...works, newCW]))
            } else {
                console.log("POST is not working")
            }})
    }

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


    return showAddForm ? (<AddCWForm postNewCW={postNewCW}/>):(
        <div className="portfolio-table-div">
            <h2>My Portfolio</h2>
            <button onClick={(e) => setShowAddForm(true)}>Add to Portfolio</button>
            <table className="portfolio-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Sample</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {works.map((work) => (
                    <tr key={work.id}>
                        <td>{work.id}</td>
                        <td>{work.description}</td>
                        <td>
                            {/* need conditional for file type */}
                            <img className="cw-file" src={work.file} alt={work.description} />
                        </td>
                        <td>
                            <button className='delete-icon' onClick={(e) => handleCWDelete(e, work)}>🗑️</button>
                        </td>
                    </tr>
                    )
                    )}
                </tbody>
        </table>
    </div>
    )
}

export default CwTable;