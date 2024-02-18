import React, { useState } from 'react'
import './Form.css'
import axios from '../../../services/API/axios';

const SendMoneyForm = () => {
   
  const [sourceMobileNo, setSourceMobileNo] = useState("");
  const [recieverMobileNo, setRecieverMobileNo] = useState("");
  const [amount, setAmount] = useState(0);

  const changedSourceMobileNo = (event) => {
    setSourceMobileNo(event.target.value);
    console.log(sourceMobileNo);
  }

  const changedRecieverMobileNo = (event) => {
    setRecieverMobileNo(event.target.value);
    console.log(recieverMobileNo);
  }

  const changedAmount = (event) => {
    setAmount(event.target.value);
    console.log(amount);
  }

    
 
    const clickSubmit =(events)=>{
         events.preventDefault();
       
        const sendMoney =(sourceMobileNo,recieverMobileNo,amount)=>{
          const uniqueId = localStorage.getItem('uniqueId');
          axios.post(`/sendMoney/${sourceMobileNo}/${recieverMobileNo}/${amount}/${uniqueId}`).then(
            (response)=>{
                console.log(response.data);
            },(error)=>
            {
              console.log("data fetching error in send money")
            }
          )
          
        }

    }

    


  return (
    <div>
      <form className="styled-form" onSubmit={clickSubmit}>
      <label >Sender PhoneNumber:</label>
      <input type="text" id="sMobileNo" name="sMobileNo" required  onChange={changedSourceMobileNo} placeholder='Enter Sender Mobile No'/>
      <label >Reciever PhoneNumber:</label>
      <input type="text" id="rMobileNo" name="rMobileNo" required  onChange={changedRecieverMobileNo} placeholder='Enter Reciver Mobile No'/>
      <label >Amount:</label>
      <input type="number" id="amount" name="amount" required onChange={changedAmount} placeholder='Enter Amount'/>
      <button type="submit">Pay</button>
    </form>
    </div>
  )
}

export default SendMoneyForm
