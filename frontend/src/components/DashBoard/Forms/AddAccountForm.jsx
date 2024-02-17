import React, { useState } from 'react';
import AccountService from '../../../services/DashBoard/AccountService';
import './Form.css';

const AddAccountForm = () => {
    const [bankAccount, setBankAccount] = useState("");
    const [ammount, setAmmount] = useState(0);
    const [ifsc, setIfsc] = useState("");
    const [bankName, setBankName] = useState("")
    const [errorMessage, setErrorMessage] = useState('');
    
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
      if (!bankAccount || !bankName || !ifsc ){
        setErrorMessage("All fields are mandatory ..");
      }
      // validattions 

      
      setAmmount(Math.floor(Math.random() * (1000000 - 10000 + 1)) + 10000);
      events.preventDefault();
      try{
        // call service method
        const uniqueId = localStorage.getItem('uniqueId');
        const response = AccountService.addAcccount(bankAccount, bankName, ifsc, ammount, uniqueId);
        console.log(response.data);

      } catch(error){
        console.log(error);
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
         <input type="text" id="bankAccount" name="bankAccount" required  onChange={changedBankAccount} placeholder='Enter Bank Account'/>
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
