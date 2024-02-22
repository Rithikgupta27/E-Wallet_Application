<<<<<<< HEAD
import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='heading'>About Us</h1>
=======
import React, { useEffect } from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import NavbarLand from '../../Header/NavbarLand';
import { toast, ToastContainer } from 'react-toastify';
import About from '../../Helper/About';


const AboutUs = () => {

  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
      <h1 className='heading'>About Us</h1>
      <About/>
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
      <Footer/>
    </div>
  )
}

export default AboutUs
