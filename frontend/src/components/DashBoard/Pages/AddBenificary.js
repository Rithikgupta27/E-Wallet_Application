import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import AddBenificaryForm from '../Forms/AddBenificaryForm'
import BeneficiaryTable from '../Tables/BeneficiaryTable'

const AddBenificary = () => {
  return (
    <div>
      <Navbar/>
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
