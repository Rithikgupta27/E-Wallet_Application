import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import NavbarLand from '../../Header/NavbarLand';

const AboutUs = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
      <h1 className='heading'>About Us</h1>
      <Footer/>
    </div>
  )
}

export default AboutUs
