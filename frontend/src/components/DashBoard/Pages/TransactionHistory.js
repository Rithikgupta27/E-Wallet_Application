import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import TransactionTable from '../Tables/TransactionTable'

const TransactionHistory = () => {
  return (
    <div>
    <Navbar/>
    <br/>
    <br/>
    <div className='boxed'>
      <TransactionTable/>
    </div>
    <br/>
    <Footer/>
    </div>
  )
}

export default TransactionHistory
