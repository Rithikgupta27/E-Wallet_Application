import React, { useState } from 'react'
import './Form.css'
const AddMoneyForm = (props) => {
    const [bankAccount,setBankAccount] = useState("");
    const [amount,setAmount] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    
    const changedAmount = (events) =>{
        setAmount(events.target.value);
    }
    const changedBankAccount = (events) =>{
        setBankAccount(events.target.value);
    }
    const submitHandler = (e) =>{
      if (!amount || !bankAccount){
        setErrorMessage("All fields are mandatory..");
      }
        e.preventDefault();  
         // call a service method for backend req
         props.sendBankAccount(amount); 
         props.sendAmount(bankAccount); 

    }
  return (
    <div>
      <form className="styled-form" onSubmit={submitHandler} >
      <label >BankAccount:</label>
      <input type="text" id="bankAccount" name="bankAccount" required onChange={changedBankAccount} placeholder='Enter Bank Account'/>

      <label >Amount:</label>
      <input type="number" id="amount" name="amount" required  onChange={changedAmount} defaultValue="0.00" placeholder='Enter Amount'/>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      <button type="submit">Add Amount</button>
    </form>
    </div>
  );
}

export default AddMoneyForm
