import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import AddAccountForm from '../Forms/AddAccountForm'

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
