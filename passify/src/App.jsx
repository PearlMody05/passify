import { useState } from 'react'

import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/home'
import View from './components/View'
import About from './components/About'
import Create from './components/Create'
import Login from './components/Login'
import Navbar from './components/navbar'
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
