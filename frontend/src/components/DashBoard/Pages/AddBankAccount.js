import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import AddAccountForm from '../Forms/AddAccountForm'
<<<<<<< HEAD

const AddBankAccount = () => {
  return (
    <div>
      <Navbar/>
      <div className='flexed'>
        <div className='boxed'>
           <h2>gif</h2>
=======
import NavbarLand from '../../Header/NavbarLand'

const AddBankAccount = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
      <div className='flexed'>
        <div >
          <img src='images/bank (1).jpg'></img>
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
        </div>
        <div>
          <AddAccountForm/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AddBankAccount
