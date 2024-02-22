import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import AddBenificaryForm from '../Forms/AddBenificaryForm'
import BeneficiaryTable from '../Tables/BeneficiaryTable'
<<<<<<< HEAD

const AddBenificary = () => {
  return (
    <div>
      <Navbar/>
=======
import NavbarLand from '../../Header/NavbarLand'

const AddBenificary = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
      <div className='flexed'>
        <div className='boxed'>
          <BeneficiaryTable/> 
        </div>
        <div>
           <AddBenificaryForm/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AddBenificary
