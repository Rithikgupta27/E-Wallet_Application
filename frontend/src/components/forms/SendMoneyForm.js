import React, { useState } from 'react'
import './Form.css'
const SendMoneyForm = () => {
    const [form,setForm] = useState({userAccount:"",userIfsc:"",userAmount:0});
    
    const changedBankAccount =(events)=>{
            setForm({...form,userAccount:events.target.value})

    }

    const changedBankAccountIfsc = () =>{
      setForm({...form,userIfsc:events.target.value})

    }

    const changedAmount =()=>{
      setForm({...form,userAmount:events.target.value})

    }
 
    const clickSubmit =(events)=>{
         events.preventDefault();
          //  props.sendBankAccount(userAmount); 
        //  props.sendAmount(userAccount); 
        //props.sendIfsc(userIfsc)

    }

  return (
    <div>
      <form className="styled-form" onSubmit={clickSubmit}>
      <label >Reciever BankAccount:</label>
      <input type="text" id="bankAccount" name="bankAccount" required  onChange={changedBankAccount} placeholder='Enter Bank Account'/>
      <label >Reciever BankAccount IFSC:</label>
      <input type="text" id="bankAccount" name="bankAccount" required  onChange={changedBankAccountIfsc} placeholder='Enter Ifsc'/>
      <label >Amount:</label>
      <input type="number" id="amount" name="amount" required onChange={changedAmount} placeholder='Enter Amount'/>
      <button type="submit">Pay</button>
    </form>
    </div>
  )
}

export default SendMoneyForm
