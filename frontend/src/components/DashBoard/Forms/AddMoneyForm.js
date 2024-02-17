import React, { useState } from 'react'
import './Form.css'
const AddMoneyForm = (props) => {
    const [bankAccount,setBankAccount] = useState("");
    const [amount,setAmount] = useState(0);
    
    const changedAmount = (events) =>{
        setAmount(events.target.value);
    }
    const changedBankAccount = (events) =>{
        setBankAccount(events.target.value);
    }
    const submitHandler = (events) =>{
         events.preventDefault();  
        //  props.sendBankAccount(amount); 
        //  props.sendAmount(bankAccount); 

    }
  return (
    <div>
      <form className="styled-form" onSubmit={submitHandler} >
      <label >BankAccount:</label>
      <input type="text" id="bankAccount" name="bankAccount" required onChange={changedBankAccount} placeholder='Enter Bank Account'/>

      <label >Amount:</label>
      <input type="number" id="amount" name="amount" required  onChange={changedAmount} defaultValue="0.00" placeholder='Enter Amount'/>
      <button type="submit">Add Amount</button>
    </form>
    </div>
  );
}

export default AddMoneyForm
