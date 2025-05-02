import React from 'react'
import './App.css'
import Profile from './components/Profile'
import  Login from './components/Login'
import UserContextProvider from './context/UserContext'
import { useState } from 'react'

function App() {
    const [user, setUser] = React.useState(null)

  return (
    <UserContextProvider>
<h1>Mini Context</h1>
<Login />
<Profile />
    </UserContextProvider>
  )
}

export default App
