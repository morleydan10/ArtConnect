import React from "react";
import { createBrowserRouter } from 'react-router-dom';


import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
// ***********AUTHENTICATION*********
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
// *************ARTIST****************
import ArtistProfile from "./Artist-Pages/ArtistProfile";
import OpenRequests from "./Artist-Pages/OpenRequests";
// ***********BUSINESS****************
import BusinessProfile from "./pages/BusinessProfile";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <ErrorPage />
            },
            // ***********AUTHENTICATION*********
            {
                path: "/Login",
                element: <Login />,
                errorElement: <ErrorPage />
            },
            {
                path: '/Signup',
                element: <Signup />,
                errorElement: <ErrorPage />
            },
            // ******ARTIST ROUTES**********
            // conditonal for artist vs business?
            {
                path: '/ArtistProfile',
                element: <ArtistProfile />,
                errorElement: <ErrorPage />
            },
            {
                path: '/OpenRequests',
                element: <OpenRequests />,
                errorElement: <ErrorPage />
            },
            // ***********BUSINESS ROUTES*********
            {
                path: '/BusinessProfile',
                element: <BusinessProfile />,
                errorElement: <ErrorPage />
            },
        ]
    }
]);

export default Routes;