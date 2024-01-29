import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import './index.css'
import { UserProvider } from './UserContext';

function App() {

  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  )
}

export default App;
