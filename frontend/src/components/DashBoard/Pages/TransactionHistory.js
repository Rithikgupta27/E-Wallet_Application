import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import TransactionTable from '../Tables/TransactionTable'
<<<<<<< HEAD

const TransactionHistory = () => {
  return (
    <div>
    <Navbar/>
=======
import NavbarLand from '../../Header/NavbarLand'

const TransactionHistory = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />}  
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
    <br/>
    <br/>
    <div className='boxed'>
      <TransactionTable/>
    </div>
    <br/>
    <Footer/>
    </div>
  )
}

export default TransactionHistory
