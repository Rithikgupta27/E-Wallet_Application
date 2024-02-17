import React, { useState } from 'react';

import './Form.css';
const PayBillForm = (props) => {
    const [billType, setBillType] = useState("");
    const [amount, setAmount] = useState(0);
    const [billDescription, setBillDiscription] = useState("")
    const changedAmount = (events) =>{
        setAmount(events.target.value);
    }
    const changedBillType = (events) =>{
        setBillType(events.target.value);
    }
    const changedBillDiscription = (events) =>{
        setBillDiscription(events.target.value);
    }
    
    const clickSubmit = (events) =>{
      events.preventDefault();  
      console.log(billType);
      console.log(amount);
      console.log(billDescription);

    }
   

  return (
    <div className="divFlex">
       <div>
          <h2>Images</h2>
       </div>
       <div>
       <form className="styled-form" onSubmit={clickSubmit}>
         <label >Bill Type:</label>
         <select onChange={changedBillType}>
           <option defaultValue="select">Select Bill Type</option>
           <option value="electricityBill">Electricity Bill</option>
           <option value="waterBill">Water Bill</option>
           <option value="wifiRecharge">Wifi Recharge</option>
           <option value="gasBill">GasBill</option>
           <option value="other">Other</option>
         </select>
         <label >Amount:</label>
         <input type="number" id="amount" name="amount" required onChange={changedAmount} placeholder='Enter Amount'/>
         <label >Bill Description:</label>
         <input type="text" id="bankBillDiscription" name="bankBillDescription" required  onChange={changedBillDiscription } placeholder='Enter Bill Description'/>
         <button type="submit">Add Bank Account</button>
       </form>
       </div>
    </div>
  );
};

export default PayBillForm;
