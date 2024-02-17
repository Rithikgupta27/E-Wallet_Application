/* eslint-disable eqeqeq */
// FormComponent.js
import React, { useState } from 'react';
import KYCService from '../../../services/DashBoard/KYCService';
import './Form.css';

const KycForm = (props) => {
    const [adharNumber,setAdharNumber] = useState(0);
    const [otp,setOtp] = useState(0);
    const [sysOTP,setSysOTP] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const changedAdharNumber = (events) =>{
        setAdharNumber(events.target.value);
    }
    const changedOtp = (events) =>{
        setOtp(events.target.value);
    }

    const getOTPLocally = () => {
      if (!isNaN(parseInt(adharNumber)) && adharNumber.length === 12) {
        const randomNumber = Math.floor(Math.random() * 9000) + 1000;
        alert("OTP: " + randomNumber);
        setSysOTP(randomNumber);
        setErrorMessage("")
      } else{
        setErrorMessage("Adhaar Card is not valid")
      }
    };    
    
    const clickSubmit = (events) =>{
      setErrorMessage("")
      if (!otp){
        setErrorMessage("Please enter the OTP")
      }
      events.preventDefault();  
      if (otp == sysOTP){
        try{
          const uniqueId = localStorage.getItem('uniqueId');
          console.log(uniqueId);
          const responce = KYCService.updateKYCStatus(uniqueId);
          console.log(responce); // error fetching data ..
          setSuccessMessage("KYC Complete");
        }  catch{
          setErrorMessage("KYC failed or done already")
        }
      }else{
        setErrorMessage("wrong OTP")
        console.log("not working");
      }
    }
  return (
    <div className="divFlex">
       <div>
          <h2>Images</h2>
       </div>
       <div>
       <form className="styled-form" onSubmit={clickSubmit}>
        <label>Addhar Number:</label>
        <input
          type="number"
          id="adhar"
          name="adharNumber"
          value={adharNumber}
          onChange={changedAdharNumber}
          placeholder="Enter Aadhar Card"
        />
        <button type="button" onClick={getOTPLocally}>
          OTP
        </button>
        <label>OTP:</label>
        <input
          type="number"
          id="otp"
          name="otp"
          value={otp}
          onChange={changedOtp}
          placeholder="Enter OTP"
          pattern="[0-9]{4}"
        />
        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
        <button type="submit">Submit</button>
      </form>
       </div>
    </div>
  );
};

export default KycForm;
