import React from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import SendMoneyForm from '../Forms/SendMoneyForm'

const SendMoney = () => {
  return (
    <div>
      <Navbar/>
      <h1>SendMoney</h1>
      <SendMoneyForm/>
      <Footer/>
    </div>
  )
}

export default SendMoney
