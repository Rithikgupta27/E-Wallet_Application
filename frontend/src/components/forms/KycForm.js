// FormComponent.js
import React, { useState } from 'react';
import './Form.css';
const KycForm = (props) => {
    const [adharNumber,setAdharNumber] = useState(0);
    const [otp,setOtp] = useState(0);
    const changedAdharNumber = (events) =>{
        setAdharNumber(events.target.value);
    }
    const changedOtp = (events) =>{
        setOtp(events.target.value);
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
         <label >Addhar Number:</label>
         <input type="number" id="adhar" name="adhar" required pattern="[1-9][0-9]{11}" onChange={changedAdharNumber}  placeholder='Enter Addhar Card'/>
         <label >OTP:</label>
         <input type="number" id="otp" name="otp" required  pattern="[0-9]{6}" onChange={changedOtp} placeholder='Enter OTP'/>
         <button type="submit">Submit</button>
         </form>
       </div>
    </div>
  );
};

export default KycForm;
