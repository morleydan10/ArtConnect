import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import Routes from './Routes.jsx'
import App from './App.jsx'
import './App'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Routes} />);
