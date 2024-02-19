import React, { useEffect, useState } from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import axios from '../../../services/API/axios';

const CheckBalance = () => {
  const [balance, setBalance] = useState('NaN');

  const getBalance = () =>{
    const uniqueId = localStorage.getItem('uniqueId');
    // const uniqueId = 'B9WzsTVS';
    axios.get(`/balance/${uniqueId}`).then(
      (response)=>{
           const number = parseInt(response.data.match(/\d+/)[0], 10);
           setBalance(number);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  useEffect(()=>{
    getBalance()
  },[]);

  return (
    <div>
      <Navbar/>
      <h1>CheckBalance</h1>
      <h1>Wallet balance: Rs. {balance}</h1> 
      <Footer/>
    </div>
  )
}

export default CheckBalance
