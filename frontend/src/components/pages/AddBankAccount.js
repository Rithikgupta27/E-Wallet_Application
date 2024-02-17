import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import AddAccountForm from '../forms/AddAccountForm'

const AddBankAccount = () => {
  return (
    <div>
      <Navbar/>
      <h1>Add bank Account</h1>
      <AddAccountForm/>
      <Footer/>
    </div>
  )
}

export default AddBankAccount
