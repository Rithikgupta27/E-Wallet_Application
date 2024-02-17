import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import TransactionTable from '../Forms/TransactionTable'

const TransactionHistory = () => {
  return (
    <div>
    <Navbar/>
    <TransactionTable/>
    <Footer/>
    </div>
  )
}

export default TransactionHistory
