import React from 'react';
import axios from 'axios';
const BillPaymentService = () => {
    const payBill = ({billInput}) =>{
    const uniqueId = localStorage.getItem('uniqueId');
    axios.post(`http://localhost:8080/beneficiary/${uniqueId}`, billInput)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Error adding bill payment:', error);
        });}

  return (
    <div>
      
    </div>
  )
}

export default BillPaymentService
