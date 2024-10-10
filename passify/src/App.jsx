import { useState } from 'react'

import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import View from './components/View'
import About from './components/About'
import Create from './components/Create'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import PassState from './context/passwords/passState'

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <><Home/></>
    },
    {
      path : "/about",
      element : <><Navbar/><About/></>
    },
    {
      path : "/Login",
      element : <><Navbar/><Login/></>
    },
    {
      path : "/Signup",
      element : <><Navbar/><Signup/></>
    },
    {
      path : "/View",
      element : <><Navbar/><View/></>
    },
    {
      path : "/Create",
      element : <><Navbar/><Create/></>
    },
  ])
  return (
    <>
    <PassState>
    <RouterProvider router = {router} />
    </PassState>
    </>
  );
}

export default App
