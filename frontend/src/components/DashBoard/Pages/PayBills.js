import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import PayBillsForm from '../Forms/PayBillForm'
import ShowBillsTable from '../Tables/ShowBillsTable'
<<<<<<< HEAD

const PayBills = () => {
  return (
    <div>
      <Navbar/>
=======
import NavbarLand from '../../Header/NavbarLand'

const PayBills = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
      <div className='flexed'>
      <div className='boxed'>
        <ShowBillsTable/>
      </div>
      <div>
         <PayBillsForm/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default PayBills
