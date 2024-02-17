import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SendMoneyForm from '../forms/SendMoneyForm'

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
