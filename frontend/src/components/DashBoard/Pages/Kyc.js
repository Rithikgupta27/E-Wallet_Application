import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import KycForm from '../Forms/KycForm'
const Kyc = () => {
  return (
    <div>
      <Navbar/>
      <div className='flexed'>
        <KycForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default Kyc;
