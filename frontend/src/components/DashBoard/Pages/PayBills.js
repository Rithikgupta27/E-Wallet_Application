import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import PayBillsForm from '../Forms/PayBillForm'
const PayBills = () => {
  return (
    <div>
      <Navbar/>
      <h1>PayBills</h1>
      <PayBillsForm/>
      <Footer/>
    </div>
  )
}

export default PayBills
