import React, { useEffect, useState } from 'react'
import './Table.css'
import axios from '../../../services/API/axios';

const TransactionTable = () => {
  const [trans, setTrans] = useState([]);
  useEffect(()=>{
    document.title="All Your Transaction"
  },[]);

  const AllTrans = () =>{
    const uniqueId = localStorage.getItem('uniqueId');
    // const uniqueId = 'B9WzsTVS';
    axios.get(`/viewAllTransaction/${uniqueId}`).then(
      (response)=>{
           console.log(response.data);
           setTrans(response.data);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  useEffect(()=>{
    AllTrans()
  },[]);
  // | transaction_id | amount | bank_transaction_id | description | transaction_date | transaction_type | wallet_id |
  
  return (
    <div>
    <h1>Transaction Table</h1>
    <table className='table-container custom-table'> 
      <tr>
        <th>TransactionId</th>
        <th>TransactionType</th>
        <th>Amount</th>
        <th>Description</th>
        <th>Date</th>

      </tr>
      {trans.length > 0 ? 
          trans.map((item)=>(<tr key = {item.transactionId}>
      <td>{item.transactionId}</td>
      <td>{item.transactionType}</td>
      <td>{item.amount}</td>
      <td> {item.description}</td>
      <td>{item.transactionDate}</td>
     </tr>)):"No Transaction"}
     </table>
    </div>
  )
}

export default TransactionTable
