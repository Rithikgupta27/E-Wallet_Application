import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import AddBenificaryForm from '../Forms/AddBenificaryForm'
import BeneficiaryTable from '../Tables/BeneficiaryTable'

const AddBenificary = () => {
  return (
    <div>
      <Navbar/>
      <h1>List of beneficiary</h1>
      <BeneficiaryTable/>
      <h1>Add benificary</h1>
      <AddBenificaryForm/>
      <Footer/>
    </div>
  )
}

export default AddBenificary
