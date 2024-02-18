// FormComponent.js
import React, { useState } from 'react';
import './Form.css';
const Form = (props) => {
    const [bankAccount,setBankAccount] = useState("");
    const [amount,setAmount] = useState("");
    const changedAmount = (events) =>{
        setAmount(events.target.value);
    }
    const changedBankAccount = (events) =>{
        setBankAccount(events.target.value);
    }
    const clickSubmit = (events) =>{
         events.preventDefault();  
        //  props.sendBankAccount(amount); 
        //  props.sendAmount(bankAccount); 

    }
  return (
    <form className="styled-form" onSubmit={clickSubmit}>
      <label >BankAccount:</label>
      <input type="text" id="bankAccount" name="bankAccount" required  onChange={changedBankAccount} placeholder='Enter Bank Account'/>

      <label >Amount:</label>
      <input type="number" id="amount" name="amount" required onChange={changedAmount} placeholder='Enter Amount'/>
      <button type="submit">Add Amount</button>
    </form>
  );
};

export default Form;
