import React, { useState } from 'react';
import './Form.css';
import axios from '../../../services/API/axios'

const AddAccountForm = () => {
    const [accountNo, setAccountNo] = useState("");
    const [ammount, setAmmount] = useState(0);
    const [ifsc, setIfsc] = useState("");
    const [bankName, setBankName] = useState("")
    const [errorMessage, setErrorMessage] = useState('');
    
    const changedBankAccount = (events) =>{
        setAccountNo(events.target.value);
    }
    const changedIfsc = (events) =>{
        setIfsc(events.target.value);
    }
    const changedBankName = (events) =>{
        setBankName(events.target.value);
    }

    const addAccount = (accountNo, bankName, ifsc, amount, uniqueId) => {
      return axios.post(`/bankaccount/${uniqueId}`, {
        accountNo, bankName, ifsc, amount
      })
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
      });
    }

    const clickSubmit = (events) =>{
      if (!accountNo || !bankName || !ifsc ){
        setErrorMessage("All fields are mandatory ..");
      }
      // validattions 

      
      setAmmount(Math.floor(Math.random() * (1000000 - 10000 + 1)) + 10000);
      events.preventDefault();
      try{
        // call service method
        const uniqueId = localStorage.getItem('uniqueId');
        console.log(accountNo, bankName, ifsc, ammount, uniqueId);
        addAccount(accountNo, bankName, ifsc, ammount, uniqueId);

      } catch(error){
        // console.log(error);
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
         <input type="text" id="bankname" name="bankname" required  onChange={changedBankName} placeholder='Bank Abbreviation'/>
         <label >BankAccount:</label>
         <input type="text" id="accountNo" name="accountNo" required  onChange={changedBankAccount} placeholder='Enter Bank Account'/>
         <label >IFSC CODE:</label>
         <input type="text" id="ifsc" name="ifsc" required  onChange={changedIfsc} placeholder='Enter Ifsc Code'/>

         {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
         <button type="submit">Add Bank Account</button>
       </form>
       </div>
    </div>
  );
};

export default AddAccountForm;
