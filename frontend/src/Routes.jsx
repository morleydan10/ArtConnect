import React from "react";
import { createBrowserRouter } from 'react-router-dom';


import App from "./App";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import BrowseUsers from "./pages/BrowseUsers";
// *************ARTIST****************
import ArtistProfile from "./Artist-Pages/ArtistProfile";
import OpenRequests from "./Artist-Pages/OpenRequests";
// ***********BUSINESS****************
import BusinessProfile from "./pages/BusinessProfile";
// ***********VIEW PROFILES**************
import ViewBusinessProfile from "./components/ViewBusinessProfile";
import ViewArtistProfile from "./components/ViewArtistProfile";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
                errorElement: <ErrorPage />
            },
            {
                path: "/Home",
                element: <Home />,
                errorElement: <ErrorPage />
            },
            {
                path: "/BrowseUsers",
                element: <BrowseUsers />,
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
            // ************VIEW PROFILES**********
            {
                path: '/ViewBusinessProfile/:id',
                element: <ViewBusinessProfile />,
                errorElement: <ErrorPage />
            },
            {
                path: '/ViewArtistProfile/:id',
                element: <ViewArtistProfile />,
                errorElement: <ErrorPage />
            },
        ]
    }
]);

export default Routes;