import React, { useState } from 'react';
import './Form.css';
import axios from '../../../services/API/axios'

const AddAccountForm = () => {
    const [accountNo, setAccountNo] = useState("");
    const [amount, setAmount] = useState(Math.floor(Math.random() * (1000000)));
    const [ifsc, setIfsc] = useState("");
    const [bankName, setBankName] = useState("")
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    const changedBankAccount = (events) =>{
        setAccountNo(events.target.value);
    }
    const changedIfsc = (events) =>{
        setIfsc(events.target.value);
    }
    const changedBankName = (events) =>{
        setBankName(events.target.value);
    }

    const addAccount = (accountNo, bankName, ifscCode, balance, uniqueId) => {
      setErrorMessage("Enter correct IFSC");
      return axios.post(`/bankaccount/${uniqueId}`, {
        accountNo, bankName, ifscCode, balance
      })
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
      });
    }

    const clickSubmit = (events) =>{
      setSuccessMessage("");
      setErrorMessage("");
      events.preventDefault();
      if (!accountNo || !bankName || !ifsc ){
        setErrorMessage("All fields are mandatory ..");
        return;
      }
      if (isNaN(accountNo) ||accountNo.length !== 12){
        setErrorMessage("Bank account must be 12 digit");
        return;
      }
      if (ifsc.length !== 6){
        setErrorMessage("Enter correct IFSC");
        return;
      }
      setAmount(Math.floor(Math.random() * (1000000)));
      console.log(amount);
      try{
        // call service method
        const uniqueId = localStorage.getItem('uniqueId');
        addAccount(accountNo, bankName, ifsc, amount, uniqueId);
        setErrorMessage("");
        setAccountNo('');
        setBankName('');
        setIfsc('');
        setSuccessMessage("Bank Account added Successfully");

      } catch(error){
        setErrorMessage("Failed to Add Bank Account");
      }
    }
  return (
    <div className="divFlex">
       <div>
          <h2>Images</h2>
       </div>
       <div>
       <form className="styled-form" onSubmit={clickSubmit}>
         <label >Bank Name:</label>
         <input type="text" id="bankname" name="bankname" onChange={changedBankName} placeholder='Bank Abbreviation'/>
         <label >BankAccount:</label>
         <input type="text" id="accountNo" name="accountNo" onChange={changedBankAccount} placeholder='12 digit Account Number'/>
         <label >IFSC CODE:</label>
         <input type="text" id="ifsc" name="ifsc" onChange={changedIfsc} placeholder='Enter Ifsc 6-letter Code'/>

         {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
         {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
         <button type="submit">Add Bank Account</button>
       </form>
       </div>
    </div>
  );
};

export default AddAccountForm;
