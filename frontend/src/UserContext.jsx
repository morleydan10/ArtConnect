import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [artistUser, setArtistUser] = useState({})
    const [businessUser, setBusinessUser] = useState({})
    const [requests, setRequests] = useState([])
    const [signedIn, setSignedIn] = useState(false)

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }
    
    const [date_created, setDateCreated] = useState(getDate())

    const serviceID = 'service_4bdftxg'
    const templateAcceptId = 'template_bid_accept'
    const templateRecId= 'template_bid_reception'
    const publicKey = 'j_O8DIiOmsbztu-5b'

    
    // fetch artist for testing purposes (artist pages)
    // useEffect(() => {

    //     fetch('/api/artists/3')
    //         .then((res) => res.json())
    //         .then((userData) => {
    //             setArtistUser(userData);
    //         })
    //     }, [])

    // fetch business for testing purposes (business pages)
    // useEffect(() => {

    //     fetch('/api/businesses/3')
    //         .then((res) => res.json())
    //         .then((userData) => {
    //             setUser(userData);
    //         })
    //     }, [])

    //     console.log(user.id)



    return (
        <UserContext.Provider value={{ 
            artistUser, setArtistUser, 
            businessUser, setBusinessUser, 
            requests, setRequests, 
            date_created, 
            signedIn, setSignedIn,
            serviceID, 
            templateAcceptId, templateRecId,
            publicKey}}>
        {children}
        </UserContext.Provider>
    );
    };


export const useUser = () => useContext(UserContext);