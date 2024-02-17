import React, { useState } from 'react'
import './Form.css'
// import axios from axios
const SendMoneyForm = () => {
    const [form,setForm] = useState({userAccount:"",userIfsc:"",userAmount:0});
    
    const changedBankAccount =(events)=>{
            setForm({...form,userAccount:events.target.value})

    }

    const changedBankAccountIfsc = (events) =>{
      setForm({...form,userIfsc:events.target.value})

    }

    const changedAmount =(events)=>{
      setForm({...form,userAmount:events.target.value})

    }
 
    const clickSubmit =(events)=>{
         events.preventDefault();
          //  props.sendBankAccount(userAmount); 
        //  props.sendAmount(userAccount); 
        //props.sendIfsc(userIfsc)

    }

    // const sendMoney =()=>{
    //   axios.
    // }

  return (
    <div>
      <form className="styled-form" onSubmit={clickSubmit}>
      <label >Sender PhoneNumber:</label>
      <input type="text" id="bankAccount" name="bankAccount" required  onChange={changedBankAccount} placeholder='Enter Bank Account'/>
      <label >Reciever PhoneNumber:</label>
      <input type="text" id="bankAccount" name="bankAccount" required  onChange={changedBankAccountIfsc} placeholder='Enter Ifsc'/>
      <label >Amount:</label>
      <input type="number" id="amount" name="amount" required onChange={changedAmount} placeholder='Enter Amount'/>
      <button type="submit">Pay</button>
    </form>
    </div>
  )
}

export default SendMoneyForm
