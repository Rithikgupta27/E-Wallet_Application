import React, { useEffect, useState } from 'react';
import Navbar from '../../Header/Navbar';
import Footer from '../../Footer/Footer';
import PayBillsForm from '../Forms/PayBillForm';
import axios from 'axios';

const PayBills = () => {

  const [paidBills, setPaidBills] = useState([]);
  
  const showBills = () => {
    const uniqueId = localStorage.getItem('uniqueId');
    axios.get(`http://localhost:8080/paidBills/${uniqueId}`).then(
      (response) => {
        setPaidBills(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    showBills(); 
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>PayBills</h1>
      {
        paidBills.length > 0 ? (
          paidBills.map((item) => <h1 key={item.billId}>{item.amount}</h1>)
        ) : ("no data")
      }
      <PayBillsForm/>
      <Footer/>
    </div>
  );
};

export default PayBills;
