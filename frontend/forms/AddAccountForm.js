// FormComponent.js
import React, { useState } from 'react';
import './Form.css';
const AddAccountForm = (props) => {
    const [bankAccount,setBankAccount] = useState("");
    const [amount,setAmount] = useState("");
    const [ifsc,setIfsc] = useState("");
    const [bankName,setBankName] = useState("")
    const changedAmount = (events) =>{
        setAmount(events.target.value);
    }
    const changedBankAccount = (events) =>{
        setBankAccount(events.target.value);
    }
    const changedIfsc = (events) =>{
        setIfsc(events.target.value);
    }
    const changedBankName = (events) =>{
        setBankName(events.target.value);
    }
    const clickSubmit = (events) =>{
         events.preventDefault();  
        //  props.sendBankAccount(amount); 
        //  props.sendAmount(bankAccount); 
        //  props.sendIfsc(ifsc); 
        //  props.sendBankName(bankName); 

    }
  return (
    <div className="divFlex">
       <div>
          <h2>Images</h2>
       </div>
       <div>
       <form className="styled-form" onSubmit={clickSubmit}>
         <label >BankAccount:</label>
         <input type="text" id="bankAccount" name="bankAccount" required  onChange={changedBankAccount} placeholder='Enter Bank Account'/>
         <label >IFSC CODE:</label>
         <input type="text" id="bankAccount" name="bankAccount" required  onChange={changedIfsc} placeholder='Enter Ifsc Code'/>
         <label >Bank Name:</label>
         <input type="text" id="bankAccount" name="bankAccount" required  onChange={changedBankName} placeholder='Enter Bank Name'/>
         <label >Amount:</label>
         <input type="number" id="amount" name="amount" required onChange={changedAmount} placeholder='Enter Amount'/>
         <button type="submit">Add Bank Account</button>
       </form>
       </div>
    </div>
  );
};

export default AddAccountForm;
