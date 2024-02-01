import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [requests, setRequests] = useState([]) 

    
    // fetch artist for testing purposes (artist pages)
    // useEffect(() => {

    //     fetch('/api/artists/3')
    //         .then((res) => res.json())
    //         .then((userData) => {
    //             setUser(userData);
    //         })
    //     }, [])

    // fetch business for testing purposes (business pages)
    useEffect(() => {

        fetch('/api/businesses/3')
            .then((res) => res.json())
            .then((userData) => {
                setUser(userData);
            })
        }, [])

        console.log(user.id)



    return (
        <UserContext.Provider value={{ user, setUser, requests, setRequests }}>
        {children}
        </UserContext.Provider>
    );
    };


export const useUser = () => useContext(UserContext);