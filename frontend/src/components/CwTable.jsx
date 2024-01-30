import React, { useState, useEffect } from "react";
import { useTable } from 'react-table';
import { useUser } from "../UserContext";


function CwTable() {

    const {user, setUser} = useUser()
    const [works, setWorks] = useState([])

    useEffect(() => {
        fetch(`/api/creative_works/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setWorks(data)
        })
    }, [])



    return(
        <div className="portfolio-table">
            <h2>My Portfolio</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Sample</th>
                        {/* <th>Created At</th> */}
                    </tr>
                </thead>
                <tbody>
                    {works.map((work) => (
                    <tr key={work.id}>
                        <td>{work.id}</td>
                        <td>{work.description}</td>
                        <td>
                            <img className="cw-image" src={work.file_url}/>
                        </td>
                        {/* <td>{new Date(post.createdAt).toDateString()}</td> */}
                    </tr>
                    ))}
                </tbody>
    </table>
    </div>
        
    )
}

export default CwTable;