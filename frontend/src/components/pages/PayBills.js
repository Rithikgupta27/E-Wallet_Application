import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import PayBillsForm from '../forms/PayBillForm'
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
