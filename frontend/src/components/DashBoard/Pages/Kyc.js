import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import KycForm from '../Forms/KycForm'
<<<<<<< HEAD
const Kyc = () => {
  return (
    <div>
      <Navbar/>
=======
import NavbarLand from '../../Header/NavbarLand'
const Kyc = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
      <div className='flexed'>
        <KycForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default Kyc;
