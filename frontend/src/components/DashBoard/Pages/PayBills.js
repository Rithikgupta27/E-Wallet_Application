import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import PayBillsForm from '../Forms/PayBillForm'
import ShowBillsTable from '../Tables/ShowBillsTable'

const PayBills = () => {
  return (
    <div>
      <Navbar/>
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
