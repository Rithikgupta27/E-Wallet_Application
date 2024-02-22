import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import SendMoneyForm from '../Forms/SendMoneyForm'
<<<<<<< HEAD

const SendMoney = () => {
  return (
    <div>
      <Navbar/>
=======
import NavbarLand from '../../Header/NavbarLand'

const SendMoney = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
      <SendMoneyForm/>
      <Footer/>
    </div>
  )
}

export default SendMoney
