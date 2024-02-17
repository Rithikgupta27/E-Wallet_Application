import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import AddBenificaryForm from '../forms/AddBenificaryForm'

const AddBenificary = () => {
  return (
    <div>
      <Navbar/>
      <h1>Add benificary</h1>
      <AddBenificaryForm/>
      <Footer/>
    </div>
  )
}

export default AddBenificary
